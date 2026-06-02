// ========================================
// Claude スキルアップ講座 - メインアプリケーション
// ランディング → 研修モード / 自習モード
// ========================================

(function () {
  'use strict';

  // --- 設定 ---
  // AIチューター: Claude.ai Project の URL を設定してください
  // 例: 'https://claude.ai/project/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
  const AI_TUTOR_URL = 'https://claude.ai/project/019d8e9e-c6c0-7597-9827-8397b4062fda';

  // --- 状態管理 ---
  const STORAGE_KEY = 'claude-training-progress';
  const MODE_KEY = 'claude-training-mode';
  let currentMode = null; // null = ランディング, 'self-study', 'present'
  let currentPage = 'landing';
  let currentModule = null;
  let currentSection = null;
  let presentSectionIndex = 0;

  // ページ遷移時に最上部へ戻す。
  // html に scroll-behavior: smooth が指定されているため、コンテンツ差し替え直後の
  // window.scrollTo はスムーズ動作が中断され Safari / Mac で効かないことがある。
  // 一時的に scroll-behavior: auto にして瞬間スクロールし、確実に最上部へ戻す。
  function scrollToTop() {
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';
    window.scrollTo({ top: 0, left: 0 });
    html.scrollTop = 0;
    document.body.scrollTop = 0;
    html.style.scrollBehavior = prev;
  }

  // --- 進捗管理 ---
  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch { return {}; }
  }
  function saveProgress(p) { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); }
  function markSectionComplete(mi, si) { const p = loadProgress(); p[`m${mi}_s${si}`] = true; saveProgress(p); }
  function markQuizComplete(mi) { const p = loadProgress(); p[`m${mi}_quiz`] = true; saveProgress(p); }
  function markFinalTestComplete(score, total) { const p = loadProgress(); p.finalTest = { score, total, date: new Date().toISOString() }; saveProgress(p); }
  function isSectionComplete(mi, si) { return !!loadProgress()[`m${mi}_s${si}`]; }
  function isQuizComplete(mi) { return !!loadProgress()[`m${mi}_quiz`]; }
  function getModuleProgress(mi) {
    const mod = MODULES[mi]; const tot = mod.sections.length + 1; let done = 0;
    mod.sections.forEach((_, i) => { if (isSectionComplete(mi, i)) done++; });
    if (isQuizComplete(mi)) done++;
    return Math.round((done / tot) * 100);
  }
  function isAllModulesComplete() { return MODULES.every((_, i) => getModuleProgress(i) === 100); }
  function resetProgress() { localStorage.removeItem(STORAGE_KEY); navigateTo('home'); }

  // --- ヘルパー ---
  function getAllLinks() {
    const categoryOrder = ['🚀 はじめる', '📖 プロンプトを学ぶ', '💼 Officeで使う', '🔧 Claude Codeで使う', '🔗 外部ツールと連携する', '📚 公式リファレンス', '🌐 Chromeで使う'];
    const seen = new Set();
    const links = [];
    MODULES.forEach(mod => {
      (mod.selfStudyResources?.links || []).forEach(l => {
        const key = l.url + l.title;
        if (!seen.has(key)) { seen.add(key); links.push({ ...l, session: mod.shortTitle }); }
      });
    });
    links.sort((a, b) => {
      const ai = categoryOrder.indexOf(a.category);
      const bi = categoryOrder.indexOf(b.category);
      return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
    });
    return links;
  }
  function getAllFaqs() {
    const categoryOrder = ['💡 Claudeの基本', '✍️ プロンプト・品質', '🖥️ Chat・Projects', '📂 Cowork', '💼 Office・Chrome', '🔧 Claude Code', '🔗 外部連携（MCP）'];
    const seen = new Set();
    const catMap = {};
    MODULES.forEach(mod => {
      (mod.selfStudyResources?.faq || []).forEach(f => {
        const key = f.q;
        if (seen.has(key)) return;
        seen.add(key);
        const cat = f.category || 'その他';
        if (!catMap[cat]) catMap[cat] = [];
        catMap[cat].push(f);
      });
    });
    const result = [];
    categoryOrder.forEach(cat => { if (catMap[cat]) result.push({ categoryTitle: cat, items: catMap[cat] }); });
    Object.keys(catMap).forEach(cat => { if (!categoryOrder.includes(cat)) result.push({ categoryTitle: cat, items: catMap[cat] }); });
    return result;
  }

  // --- モード管理 ---
  function setMode(mode) {
    currentMode = mode;
    localStorage.setItem(MODE_KEY, mode);
    document.body.classList.remove('landing-mode', 'present-mode');

    if (mode === 'present') {
      document.body.classList.add('present-mode');
      addPresentModeBar();
    } else {
      removePresentModeBar();
    }

    document.querySelectorAll('.mode-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.mode === mode);
    });

    presentSectionIndex = 0;
    navigateTo('home');
  }

  function enterLanding() {
    currentMode = null;
    currentPage = 'landing';
    localStorage.removeItem(MODE_KEY);
    document.body.classList.add('landing-mode');
    document.body.classList.remove('present-mode');
    removePresentModeBar();
    renderLanding(document.getElementById('page-container'));
  }

  function addPresentModeBar() {
    if (document.getElementById('present-mode-bar')) return;
    const bar = document.createElement('div');
    bar.id = 'present-mode-bar';
    bar.className = 'present-mode-bar';
    bar.innerHTML = `
      <div class="mode-toggle">
        <button class="mode-btn active" data-mode="present">研修モード</button>
        <button class="mode-btn" data-mode="self-study">自習モード</button>
      </div>
    `;
    document.body.appendChild(bar);
    bar.querySelectorAll('.mode-btn').forEach(btn => {
      btn.addEventListener('click', () => setMode(btn.dataset.mode));
    });
  }

  function removePresentModeBar() {
    document.getElementById('present-mode-bar')?.remove();
  }

  // TIPS集の遷移時フォーカス用（特定TIPSにスクロール・ハイライトする）
  let pendingTipFocus = null;

  // --- ナビゲーション ---
  function navigateTo(page, moduleIndex, sectionIndex, options) {
    currentPage = page;
    currentModule = moduleIndex !== undefined ? moduleIndex : null;
    currentSection = sectionIndex !== undefined ? sectionIndex : null;
    if (page !== 'module' || currentMode !== 'present') presentSectionIndex = 0;
    if (page === 'tips' && options && options.tipId) {
      pendingTipFocus = options.tipId;
    }

    // ヘッダーナビのアクティブ状態
    document.querySelectorAll('.header-nav-link').forEach(el => {
      el.classList.remove('active');
      const p = el.dataset.page;
      if (p === page) el.classList.add('active');
      if ((page === 'topic-detail' || page === 'module') && p === 'learn') el.classList.add('active');
      if ((page === 'quiz' || page === 'final-test') && p === 'quiz-hub') el.classList.add('active');
    });

    const container = document.getElementById('page-container');
    if (currentMode === 'present') {
      switch (page) {
        case 'home': renderPresentHome(container); break;
        case 'module': renderPresentModule(container, moduleIndex); break;
        default: renderPresentHome(container); break;
      }
    } else {
      switch (page) {
        case 'home': renderHome(container); break;
        case 'learn': renderLearn(container); break;
        case 'topic-detail': renderTopicDetail(container, moduleIndex, sectionIndex); break;
        case 'practices': renderPractices(container); break;
        case 'tips': renderTips(container); break;
        case 'links': renderLinks(container); break;
        case 'faq': renderFaq(container); break;
        case 'quiz-hub': renderQuizHub(container); break;
        case 'module': renderModule(container, moduleIndex); break;
        case 'quiz': renderQuiz(container, moduleIndex); break;
        case 'final-test': renderFinalTest(container); break;
        default: renderHome(container); break;
      }
    }
    scrollToTop();
  }

  // ========================================
  // ランディングページ
  // ========================================
  function renderLanding(container) {
    container.innerHTML = `
      <div class="landing-page fade-in">
        <div class="landing-logo">
          <img src="assets/ehi-logo.png" alt="800" height="36">
        </div>
        <h1 class="landing-title">Claude スキルアップ講座</h1>
        <p class="landing-subtitle">利用目的に合わせてモードを選んでください</p>
        <div class="landing-cards">
          <div class="landing-card" data-mode="present">
            <div class="landing-card-icon present">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            </div>
            <h2>研修を受ける</h2>
            <p>スライド形式で研修を進めます。</p>
            <span class="landing-btn">研修モードで開く</span>
          </div>
          <div class="landing-card" data-mode="self-study">
            <div class="landing-card-icon self-study">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>
            </div>
            <h2>自分で学ぶ</h2>
            <p>復習・練習問題・クイズ・TIPS集・FAQ を自分のペースで。</p>
            <span class="landing-btn">自習モードで開く</span>
          </div>
        </div>
      </div>
    `;

    container.querySelectorAll('.landing-card').forEach(card => {
      card.addEventListener('click', () => setMode(card.dataset.mode));
    });
  }

  // ========================================
  // 自習モード
  // ========================================

  function renderHome(container) {
    const totalSections = MODULES.reduce((s, m) => s + m.sections.length, 0);
    const totalLinks = getAllLinks().length;
    const totalFaqs = getAllFaqs().reduce((s, g) => s + g.items.length, 0);
    const totalQuizzes = MODULES.reduce((s, m) => s + m.quiz.length, 0);

    container.innerHTML = `
      <div class="fade-in">
        <div class="home-hero">
          <h1>Claude スキルアップ講座</h1>
          <p class="subtitle">学習コンテンツの復習・練習問題・クイズ・TIPS集・リンク集・FAQで、Claude活用スキルを自分のペースで高めましょう。</p>
        </div>

        <div class="training-overview">
          <h2 class="overview-title">研修の全体像</h2>
          <p class="overview-subtitle">全${MODULES.length}回・${totalSections}セクション — Chatで始め、成果物を作り、品質と再現性を上げる</p>
          <div class="overview-flow">
            <div class="overview-flow-item">
              <div class="overview-flow-step">
                <span class="overview-flow-icon">💬</span>
                <span>Chat で始める</span>
              </div>
              <div class="overview-flow-arrow">→</div>
              <div class="overview-flow-step">
                <span class="overview-flow-icon">📋</span>
                <span>成果物を作る</span>
              </div>
              <div class="overview-flow-arrow">→</div>
              <div class="overview-flow-step">
                <span class="overview-flow-icon">✅</span>
                <span>品質と再現性を上げる</span>
              </div>
            </div>
          </div>
          <div class="overview-sessions">
            ${MODULES.map((mod, i) => {
              const groups = mod.coverGroups || [];
              return `<div class="overview-session" data-go-module="${i}">
                <div class="overview-session-header">
                  <span class="overview-session-num">${mod.shortTitle}</span>
                  <strong>${mod.title.replace(/^第\d+回[：:]\s*/, '')}</strong>
                </div>
                <ul>${groups.map(g => `<li>${g.label}</li>`).join('')}</ul>
              </div>`;
            }).join('')}
          </div>
        </div>

        <div class="home-hero-cards">
          <div class="home-hero-card slide-up" data-nav="learn">
            <div class="card-icon">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>
            </div>
            <h3>学習コンテンツ</h3>
            <p>セクションごとに内容を確認し、理解を深めましょう。</p>
            <div class="card-count">${totalSections} トピック</div>
          </div>
          <div class="home-hero-card slide-up" data-nav="practices" style="animation-delay:.05s">
            <div class="card-icon">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
            </div>
            <h3>練習問題</h3>
            <p>手を動かして学んだ内容を実践。</p>
            <div class="card-count">${MODULES.reduce((s,m) => s + (m.practices||[]).length, 0)} 問</div>
          </div>
          <div class="home-hero-card slide-up" data-nav="quiz-hub" style="animation-delay:.1s">
            <div class="card-icon">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
            </div>
            <h3>クイズ</h3>
            <p>確認クイズと修了テストで理解度をチェック。</p>
            <div class="card-count">${totalQuizzes} 問 &middot; 修了テストあり</div>
          </div>
          <div class="home-hero-card slide-up" data-nav="tips" style="animation-delay:.13s">
            <div class="card-icon">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21h6"/><path d="M12 17v4"/><path d="M12 3a6 6 0 00-3.6 10.8c.4.3.6.7.6 1.2v.5a1 1 0 001 1h4a1 1 0 001-1V15c0-.5.2-.9.6-1.2A6 6 0 0012 3z"/></svg>
            </div>
            <h3>TIPS集</h3>
            <p>研修本編の補助教材。実務で必要なときに参照する実践TIPS。</p>
            <div class="card-count">${(typeof TIPS !== 'undefined' ? TIPS.length : 0)} 件 &middot; 8カテゴリ</div>
          </div>
          <div class="home-hero-card slide-up" data-nav="links" style="animation-delay:.15s">
            <div class="card-icon">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>
            </div>
            <h3>リンク集</h3>
            <p>公式ドキュメント・参考資料。</p>
            <div class="card-count">${totalLinks} 件</div>
          </div>
          <div class="home-hero-card slide-up" data-nav="faq" style="animation-delay:.2s">
            <div class="card-icon">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            </div>
            <h3>FAQ</h3>
            <p>よくある質問と回答。</p>
            <div class="card-count">${totalFaqs} 件</div>
          </div>
        </div>
      </div>
    `;

    container.querySelectorAll('[data-nav]').forEach(el => {
      el.addEventListener('click', () => navigateTo(el.dataset.nav));
    });
    container.querySelectorAll('[data-go-module]').forEach(el => {
      el.addEventListener('click', () => {
        navigateTo('topic-detail', parseInt(el.dataset.goModule), 0);
      });
    });
  }

  // --- 学習コンテンツ（サイドバー目次付き） ---
  function renderLearn(container) {
    // 最初のトピック詳細を表示
    const mi = currentModule !== null ? currentModule : 0;
    const si = currentSection !== null ? currentSection : 0;
    renderTopicDetail(container, mi, si);
  }

  function buildTocHTML(activeMi, activeSi) {
    return `
      <nav class="learn-toc">
        <div class="toc-tabs">
          ${MODULES.map((mod, mi) => `
            <button class="toc-tab ${mi === activeMi ? 'active' : ''}" data-toc-tab="${mi}">${mod.shortTitle}</button>
          `).join('')}
        </div>
        ${MODULES.map((mod, mi) => {
          const groups = mod.coverGroups || [];
          const groupStarts = {};
          groups.forEach(g => { if (g.sections.length) groupStarts[g.sections[0]] = g.label; });
          return `
          <div class="toc-group" data-toc-panel="${mi}" style="${mi !== activeMi ? 'display:none' : ''}">
            ${mod.sections.map((sec, si) => {
              const completed = isSectionComplete(mi, si);
              const isActive = mi === activeMi && si === activeSi;
              const groupHeader = groupStarts[si] ? `<div class="toc-group-name">${groupStarts[si]}</div>` : '';
              return `${groupHeader}
                <a class="toc-item ${isActive ? 'active' : ''} ${completed ? 'completed' : 'incomplete'}"
                   data-toc-mi="${mi}" data-toc-si="${si}">
                  ${sec.title}
                </a>`;
            }).join('')}
          </div>`;
        }).join('')}
      </nav>
    `;
  }

  function renderTopicDetail(container, moduleIndex, sectionIndex) {
    const mod = MODULES[moduleIndex];
    const sec = mod.sections[sectionIndex];
    const completed = isSectionComplete(moduleIndex, sectionIndex);
    const typeLabel = sec.type === 'handson' ? 'ハンズオン' : '講義';
    const typeClass = sec.type || 'lecture';

    // 前後トピック
    let prevTopic = null, nextTopic = null;
    if (sectionIndex > 0) {
      prevTopic = { mi: moduleIndex, si: sectionIndex - 1, title: mod.sections[sectionIndex - 1].title };
    } else if (moduleIndex > 0) {
      const pm = MODULES[moduleIndex - 1];
      prevTopic = { mi: moduleIndex - 1, si: pm.sections.length - 1, title: pm.sections[pm.sections.length - 1].title };
    }
    if (sectionIndex < mod.sections.length - 1) {
      nextTopic = { mi: moduleIndex, si: sectionIndex + 1, title: mod.sections[sectionIndex + 1].title };
    } else if (moduleIndex < MODULES.length - 1) {
      nextTopic = { mi: moduleIndex + 1, si: 0, title: MODULES[moduleIndex + 1].sections[0].title };
    }

    // 状態を更新（目次ハイライト用）
    currentModule = moduleIndex;
    currentSection = sectionIndex;
    currentPage = 'topic-detail';

    // ヘッダーナビのアクティブ状態
    document.querySelectorAll('.header-nav-link').forEach(el => {
      el.classList.remove('active');
      if (el.dataset.page === 'learn') el.classList.add('active');
    });

    container.innerHTML = `
      <div class="fade-in">
        <div class="learn-layout">
          <div class="learn-main">
            <div class="topic-detail">
              <div class="breadcrumb">
                <a href="#" data-nav="home">ホーム</a> / <a href="#" data-nav="learn">学習コンテンツ</a> / ${mod.shortTitle}
              </div>
              <div class="topic-detail-header">
                ${(() => { const g = (mod.coverGroups || []).find(g => g.sections.includes(sectionIndex)); return g ? `<span class="slide-group-label">${(g.icon||'')} ${g.label}</span>` : ''; })()}
                <h1>${sec.title}</h1>
                <div class="topic-meta">
                  <span class="topic-meta-tag">${mod.shortTitle}</span>
                  <span class="topic-meta-tag">${completed ? '完了' : '未完了'}</span>
                </div>
              </div>

              <div class="topic-content">
                ${sec.content}
              </div>

              ${(() => {
                const relTips = (typeof getRelatedTipsForSection === 'function') ? getRelatedTipsForSection(moduleIndex, sectionIndex) : [];
                if (!relTips.length) return '';
                return `
                  <aside class="related-tips-box" aria-label="このセクションに関連するTIPS">
                    <div class="related-tips-head">
                      <span class="related-tips-icon">💡</span>
                      <span class="related-tips-title">このセクションに関連するTIPS</span>
                      <span class="related-tips-count">${relTips.length} 件</span>
                    </div>
                    <ul class="related-tips-list">
                      ${relTips.map(t => `
                        <li class="related-tips-item">
                          <button type="button" class="related-tips-link" data-tip-id="${t.id}">
                            <span class="related-tips-cat">${t.category}</span>
                            <span class="related-tips-name">${t.title}</span>
                          </button>
                        </li>
                      `).join('')}
                    </ul>
                    <p class="related-tips-foot">クリックでTIPS集に移動し、該当TIPSをハイライト表示します。</p>
                  </aside>
                `;
              })()}

              <div style="margin-bottom:24px;">
                ${!completed ? `
                  <button class="btn btn-primary" id="btn-mark-complete">このトピックを完了にする</button>
                ` : `
                  <button class="btn btn-primary" style="background:var(--success);cursor:default">完了済み</button>
                `}
              </div>

              <div class="topic-nav-buttons">
                ${prevTopic ? `
                  <a href="#" class="topic-nav-btn" data-nav-topic data-mi="${prevTopic.mi}" data-si="${prevTopic.si}">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
                    ${prevTopic.title}
                  </a>
                ` : '<span></span>'}
                ${nextTopic ? `
                  <a href="#" class="topic-nav-btn" data-nav-topic data-mi="${nextTopic.mi}" data-si="${nextTopic.si}">
                    ${nextTopic.title}
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
                  </a>
                ` : '<span></span>'}
              </div>
            </div>
          </div>
          ${buildTocHTML(moduleIndex, sectionIndex)}
        </div>
      </div>
    `;

    // イベント
    container.querySelectorAll('[data-nav]').forEach(el => {
      el.addEventListener('click', (e) => { e.preventDefault(); navigateTo(el.dataset.nav); });
    });
    container.querySelector('#btn-mark-complete')?.addEventListener('click', () => {
      markSectionComplete(moduleIndex, sectionIndex);
      renderTopicDetail(container, moduleIndex, sectionIndex);
    });
    container.querySelectorAll('[data-nav-topic]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        renderTopicDetail(container, parseInt(el.dataset.mi), parseInt(el.dataset.si));
        scrollToTop();
      });
    });
    // 関連TIPSリンク → TIPS集へ遷移し、対象TIPSにフォーカス
    container.querySelectorAll('.related-tips-link').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo('tips', null, null, { tipId: btn.dataset.tipId });
      });
    });
    // 目次クリック
    container.querySelectorAll('.toc-item').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        renderTopicDetail(container, parseInt(el.dataset.tocMi), parseInt(el.dataset.tocSi));
        scrollToTop();
      });
    });
    // タブ切り替え
    container.querySelectorAll('.toc-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const mi = parseInt(tab.dataset.tocTab);
        container.querySelectorAll('.toc-tab').forEach(t => t.classList.toggle('active', parseInt(t.dataset.tocTab) === mi));
        container.querySelectorAll('[data-toc-panel]').forEach(p => p.style.display = parseInt(p.dataset.tocPanel) === mi ? '' : 'none');
      });
    });
  }

  // --- 練習問題 ---
  function renderPractices(container) {
    container.innerHTML = `
      <div class="practices-page">
        <h1>練習問題</h1>
        <p class="practices-subtitle">学習コンテンツで学んだ内容を、実際に手を動かして確認しましょう。</p>
        <div class="practices-tabs">
          ${MODULES.map((mod, mi) => `
            <button class="practices-tab ${mi === 0 ? 'active' : ''}" data-practices-tab="${mi}">${mod.shortTitle}</button>
          `).join('')}
        </div>
        ${MODULES.map((mod, mi) => {
          const practices = mod.practices || [];
          const sections = [...new Set(practices.map(p => p.section))];
          return `
          <div class="practices-panel" data-practices-panel="${mi}" style="${mi !== 0 ? 'display:none' : ''}">
            ${sections.length === 0 ? '<p style="color:var(--text-muted);padding:24px 0;">この回の練習問題は準備中です。</p>' : ''}
            ${sections.map(sec => {
              const items = practices.filter(p => p.section === sec);
              return `
              <div class="practices-section">
                <h3 class="practices-section-title">${sec}</h3>
                ${items.map((p, idx) => `
                  <div class="practices-card">
                    <div class="practices-card-num">${idx + 1}</div>
                    <div class="practices-card-body">
                      <h4>${p.title}</h4>
                      <p>${p.task}</p>
                      ${p.hint ? `<div class="practices-hint">💡 ヒント：${p.hint}</div>` : ''}
                    </div>
                  </div>
                `).join('')}
              </div>`;
            }).join('')}
          </div>`;
        }).join('')}
      </div>
    `;

    // タブ切り替え
    container.querySelectorAll('.practices-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const mi = parseInt(tab.dataset.practicesTab);
        container.querySelectorAll('.practices-tab').forEach(t => t.classList.toggle('active', parseInt(t.dataset.practicesTab) === mi));
        container.querySelectorAll('[data-practices-panel]').forEach(p => p.style.display = parseInt(p.dataset.practicesPanel) === mi ? '' : 'none');
      });
    });
  }

  // --- リンク集 ---
  // --- TIPS集（自習用補助教材） ---
  function renderTips(container) {
    const tips = (typeof TIPS !== 'undefined') ? TIPS : [];
    const categories = (typeof TIPS_CATEGORIES !== 'undefined') ? TIPS_CATEGORIES : [];
    const levels = (typeof TIPS_LEVELS !== 'undefined') ? TIPS_LEVELS : [];

    const escape = (s) => String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

    const tipCard = (tip) => `
      <article class="tip-card" id="tip-card-${escape(tip.id)}"
        data-tip-id="${escape(tip.id)}"
        data-category="${escape(tip.category)}"
        data-level="${escape(tip.level)}"
        data-keywords="${escape((tip.title + ' ' + (tip.summary||'') + ' ' + (tip.whenToUse||'') + ' ' + (tip.caution||'') + ' ' + (tip.example||'') + ' ' + (tip.howToUse||[]).join(' ')).toLowerCase())}">
        <div class="tip-card-head">
          <span class="tip-badge tip-cat">${escape(tip.category)}</span>
          <span class="tip-badge tip-level tip-level-${escape(tip.level)}">${escape((levels.find(l=>l.id===tip.level)||{}).label || tip.level)}</span>
          ${tip.relatedSession ? `<span class="tip-badge tip-related">${escape(tip.relatedSession)}</span>` : ''}
        </div>
        <h3 class="tip-card-title">${escape(tip.title)}</h3>
        <p class="tip-card-summary">${escape(tip.summary)}</p>
        ${tip.whenToUse ? `<div class="tip-card-section"><span class="tip-card-label">使う場面</span><p>${escape(tip.whenToUse)}</p></div>` : ''}
        ${(tip.howToUse && tip.howToUse.length) ? `<div class="tip-card-section"><span class="tip-card-label">使い方</span><ul>${tip.howToUse.map(s => `<li>${escape(s)}</li>`).join('')}</ul></div>` : ''}
        ${tip.example ? `<div class="tip-card-section tip-example"><span class="tip-card-label">例文</span><pre>${escape(tip.example)}</pre></div>` : ''}
        ${tip.caution ? `<div class="tip-card-section tip-caution"><span class="tip-card-label">注意点</span><p>${escape(tip.caution)}</p></div>` : ''}
        ${(tip.relatedSections && tip.relatedSections.length) ? `
          <div class="tip-card-section tip-related-sections">
            <span class="tip-card-label">関連セクション</span>
            <ul>
              ${tip.relatedSections.map(r => `<li><button type="button" class="tip-related-link" data-rel-m="${r.m}" data-rel-s="${r.s}">${escape(r.label)}</button></li>`).join('')}
            </ul>
          </div>
        ` : ''}
      </article>
    `;

    container.innerHTML = `
      <div class="fade-in tips-page">
        <div class="page-header">
          <h1>TIPS集</h1>
          <p>研修本編で扱った内容を、実務で使いやすい形に整理した補助教材です。すべてを覚える必要はありません。まずは「まず試す」から始め、必要に応じて Claude Code・Cowork・成果物作成・Research・Skills・チーム展開の TIPS を参照してください。権限設定や自動化などの上級 TIPS は、チームルールと情報管理を前提に扱ってください。</p>
        </div>

        <div class="tips-controls">
          <div class="tips-search-wrap">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="text" id="tips-search" placeholder="キーワード検索（タイトル・概要・使う場面など）" autocomplete="off">
          </div>

          <div class="tips-filter-row">
            <span class="tips-filter-label">カテゴリ</span>
            <button class="filter-btn active" data-tip-cat="all">すべて (${tips.length})</button>
            ${categories.map(cat => {
              const count = tips.filter(t => t.category === cat).length;
              return `<button class="filter-btn" data-tip-cat="${escape(cat)}">${escape(cat)} (${count})</button>`;
            }).join('')}
          </div>

          <div class="tips-filter-row">
            <span class="tips-filter-label">レベル</span>
            <button class="filter-btn active" data-tip-level="all">すべて</button>
            ${levels.map(lv => {
              const count = tips.filter(t => t.level === lv.id).length;
              return `<button class="filter-btn" data-tip-level="${escape(lv.id)}">${escape(lv.label)} (${count})</button>`;
            }).join('')}
          </div>
        </div>

        <div class="tips-meta-bar">
          <span id="tips-visible-count">${tips.length}</span> / ${tips.length} 件
        </div>

        <div class="tips-grid">
          ${tips.map(tipCard).join('')}
        </div>

        <div class="tips-empty" id="tips-empty" style="display:none">
          <p>該当する TIPS がありません。検索キーワードやフィルタを見直してください。</p>
        </div>
      </div>
    `;

    // フィルタ・検索のロジック
    let currentCat = 'all';
    let currentLevel = 'all';
    let currentQuery = '';
    const cards = [...container.querySelectorAll('.tip-card')];
    const visibleCountEl = container.querySelector('#tips-visible-count');
    const emptyEl = container.querySelector('#tips-empty');

    const applyFilters = () => {
      let visible = 0;
      cards.forEach(card => {
        const matchCat = currentCat === 'all' || card.dataset.category === currentCat;
        const matchLevel = currentLevel === 'all' || card.dataset.level === currentLevel;
        const matchQuery = !currentQuery || (card.dataset.keywords || '').includes(currentQuery);
        const show = matchCat && matchLevel && matchQuery;
        card.style.display = show ? '' : 'none';
        if (show) visible++;
      });
      if (visibleCountEl) visibleCountEl.textContent = visible;
      if (emptyEl) emptyEl.style.display = visible === 0 ? '' : 'none';
    };

    container.querySelectorAll('[data-tip-cat]').forEach(btn => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('[data-tip-cat]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCat = btn.dataset.tipCat;
        applyFilters();
      });
    });
    container.querySelectorAll('[data-tip-level]').forEach(btn => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('[data-tip-level]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentLevel = btn.dataset.tipLevel;
        applyFilters();
      });
    });
    const searchInput = container.querySelector('#tips-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        currentQuery = String(e.target.value || '').trim().toLowerCase();
        applyFilters();
      });
    }

    // 関連セクションリンク → 学習コンテンツへ遷移
    container.querySelectorAll('.tip-related-link').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const m = parseInt(btn.dataset.relM);
        const s = parseInt(btn.dataset.relS);
        if (!isNaN(m) && !isNaN(s)) navigateTo('topic-detail', m, s);
      });
    });

    // フォーカス対象TIPSがあればスクロール＋一時ハイライト
    if (pendingTipFocus) {
      const focusId = pendingTipFocus;
      pendingTipFocus = null;
      const target = container.querySelector('#tip-card-' + focusId);
      if (target) {
        target.classList.add('tip-card-focus');
        // スクロールは描画後に実行（位置計算のため）
        setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'center' }), 0);
        // 一定時間後にハイライト解除
        setTimeout(() => target.classList.remove('tip-card-focus'), 3500);
      }
    }
  }

  function renderLinks(container) {
    const allLinks = getAllLinks();
    const categories = [...new Set(allLinks.map(l => l.category || 'その他'))];

    container.innerHTML = `
      <div class="fade-in">
        <div class="page-header">
          <h1>リンク集</h1>
          <p>公式ドキュメント、参考資料、ツールへのリンクをまとめています。</p>
        </div>
        <div class="links-filter">
          <button class="filter-btn active" data-filter="all">すべて (${allLinks.length})</button>
          ${categories.map(cat => {
            const count = allLinks.filter(l => (l.category || 'その他') === cat).length;
            return `<button class="filter-btn" data-filter="${cat}">${cat} (${count})</button>`;
          }).join('')}
        </div>
        <div class="link-list">
          ${allLinks.map(l => `
            <a href="${l.url}" target="_blank" rel="noopener noreferrer" class="link-item" data-category="${l.category || 'その他'}">
              <span class="link-category">${l.category || ''}</span>
              <div class="link-item-title">${l.title}<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" style="margin-left:6px;vertical-align:middle"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></div>
              <div class="link-item-desc">${l.desc}</div>
            </a>
          `).join('')}
        </div>
      </div>
    `;

    container.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const f = btn.dataset.filter;
        container.querySelectorAll('.link-item').forEach(item => {
          item.style.display = (f === 'all' || item.dataset.category === f) ? '' : 'none';
        });
      });
    });
  }

  // --- FAQ ---
  function renderFaq(container) {
    const allFaqs = getAllFaqs();
    container.innerHTML = `
      <div class="fade-in">
        <div class="page-header">
          <h1>FAQ</h1>
          <p>よくある質問と回答をまとめました。</p>
        </div>
        ${allFaqs.map(g => `
          <div class="faq-section">
            <h2 class="faq-section-title">${g.categoryTitle}</h2>
            <div class="faq-list">
              ${g.items.map(f => `
                <details class="faq-item"><summary>${f.q}</summary><p>${f.a}</p></details>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // --- クイズハブ ---
  function renderQuizHub(container) {
    container.innerHTML = `
      <div class="fade-in">
        <div class="page-header">
          <h1>クイズ</h1>
          <p>各回の確認クイズに挑戦して、理解度をチェックしましょう。</p>
        </div>
        <div class="quiz-hub-grid">
          ${MODULES.map((mod, i) => {
            const done = isQuizComplete(i);
            return `
              <div class="quiz-hub-card" data-quiz-module="${i}">
                <h3>${mod.shortTitle} 確認クイズ</h3>
                <p>${mod.description}</p>
                <div class="quiz-meta">
                  <span class="quiz-count">${mod.quiz.length} 問 / 80%以上で合格</span>
                  <span class="quiz-status ${done ? 'done' : 'not-done'}">${done ? '合格済み' : '未受験'}</span>
                </div>
              </div>`;
          }).join('')}
          <div class="quiz-hub-card" data-nav-final>
            <h3>修了テスト</h3>
            <p>全${MODULES.length}回の研修から出題される総合テストです。</p>
            <div class="quiz-meta">
              <span class="quiz-count">${MODULES.reduce((s, m) => s + m.quiz.length, 0)} 問 / 80%以上で修了</span>
              <span class="quiz-status ${loadProgress().finalTest ? 'done' : 'not-done'}">${loadProgress().finalTest ? '修了済み' : '未受験'}</span>
            </div>
          </div>
        </div>
      </div>
    `;
    container.querySelectorAll('[data-quiz-module]').forEach(c => {
      c.addEventListener('click', () => navigateTo('quiz', parseInt(c.dataset.quizModule)));
    });
    container.querySelector('[data-nav-final]')?.addEventListener('click', () => navigateTo('final-test'));
  }

  // --- モジュール（タブ型、後方互換） ---
  function renderModule(container, moduleIndex) {
    scrollToTop();
    const mod = MODULES[moduleIndex];
    const progress = getModuleProgress(moduleIndex);
    const res = mod.selfStudyResources || {};

    container.innerHTML = `
      <div class="fade-in">
        <div class="module-header">
          <div class="breadcrumb"><a href="#" data-nav="home">ホーム</a> / <a href="#" data-nav="learn">学習コンテンツ</a> / ${mod.title}</div>
          <h1>${mod.title}</h1>
          <p class="module-desc">${mod.description}</p>
        </div>
        <div class="module-progress">
          <div class="progress-bar"><div class="fill" style="width:${progress}%"></div></div>
          <span class="progress-text">${progress}% 完了</span>
        </div>
        <div class="tab-bar">
          <button class="tab-btn active" data-tab="content">研修内容</button>
          <button class="tab-btn" data-tab="links">リンク<span class="tab-count">${(res.links||[]).length}</span></button>
          <button class="tab-btn" data-tab="faq">FAQ<span class="tab-count">${(res.faq||[]).length}</span></button>
          <button class="tab-btn" data-tab="quiz">クイズ<span class="tab-count">${isQuizComplete(moduleIndex)?'済':mod.quiz.length+'問'}</span></button>
        </div>
        <div class="tab-panel active" data-panel="content">
          <div class="section-list">
            ${mod.sections.map((sec, i) => {
              const c = isSectionComplete(moduleIndex, i);
              const tl = sec.type==='handson'?'ハンズオン':'講義';
              const tc = sec.type||'lecture';
              return `<div class="section-item ${c?'completed':''}" data-section="${i}">
                <div class="section-header">
                  <span class="section-number">${c?'&#10003;':i+1}</span>
                  <span class="section-title">${sec.title}</span>
                  <span class="section-status">${c?'完了':'未完了'}</span>
                  <svg class="section-chevron" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                </div>
                <div class="section-content"><div class="section-body">
                  ${sec.content}
                  ${!c?`<button class="btn-complete-section" data-module="${moduleIndex}" data-section="${i}">このセクションを完了にする</button>`
                    :`<button class="btn-complete-section done">完了済み</button>`}
                </div></div>
              </div>`;
            }).join('')}
          </div>
        </div>
        <div class="tab-panel" data-panel="links">
          ${(res.links||[]).length>0?`<div class="link-list">${res.links.map(l=>`
            <a href="${l.url}" target="_blank" rel="noopener noreferrer" class="link-item">
              <span class="link-category">${l.category||''}</span>
              <div class="link-item-title">${l.title}</div>
              <div class="link-item-desc">${l.desc}</div>
            </a>`).join('')}</div>`:'<p>準備中です。</p>'}
        </div>
        <div class="tab-panel" data-panel="faq">
          ${(res.faq||[]).length>0?`<div class="faq-list">${res.faq.map(f=>`
            <details class="faq-item"><summary>${f.q}</summary><p>${f.a}</p></details>`).join('')}</div>`:'<p>準備中です。</p>'}
        </div>
        <div class="tab-panel" data-panel="quiz">
          <div class="quiz-intro">
            <p>${mod.quiz.length}問の確認クイズです。80%以上で合格。</p>
            <button class="btn btn-primary" id="start-quiz" style="margin-top:12px">${isQuizComplete(moduleIndex)?'もう一度挑戦する':'クイズを開始する'}</button>
          </div>
        </div>
      </div>
    `;

    container.querySelectorAll('[data-nav]').forEach(el => {
      el.addEventListener('click', (e) => { e.preventDefault(); navigateTo(el.dataset.nav); });
    });
    container.querySelectorAll('.section-header').forEach(h => {
      h.addEventListener('click', () => {
        const it = h.closest('.section-item'); const wo = it.classList.contains('open');
        container.querySelectorAll('.section-item.open').forEach(e => e.classList.remove('open'));
        if (!wo) it.classList.add('open');
      });
    });
    container.querySelectorAll('.btn-complete-section:not(.done)').forEach(b => {
      b.addEventListener('click', (e) => {
        e.stopPropagation();
        markSectionComplete(parseInt(b.dataset.module), parseInt(b.dataset.section));
        renderModule(container, moduleIndex);
      });
    });
    container.querySelector('#start-quiz')?.addEventListener('click', () => navigateTo('quiz', moduleIndex));
    container.querySelectorAll('.tab-btn').forEach(b => {
      b.addEventListener('click', () => {
        container.querySelectorAll('.tab-btn').forEach(x => x.classList.toggle('active', x===b));
        container.querySelectorAll('.tab-panel').forEach(p => p.classList.toggle('active', p.dataset.panel===b.dataset.tab));
      });
    });
  }

  // --- セットアップ ---

  // --- クイズ ---
  function renderQuiz(container, moduleIndex) {
    const mod = MODULES[moduleIndex];
    container.innerHTML = `
      <div class="fade-in">
        <div class="module-header">
          <div class="breadcrumb"><a href="#" data-nav="home">ホーム</a> / <a href="#" data-nav="quiz-hub">クイズ</a> / ${mod.shortTitle}</div>
          <h1>${mod.shortTitle} - 確認クイズ</h1>
        </div>
        <div id="quiz-area"></div>
      </div>
    `;
    container.querySelectorAll('[data-nav]').forEach(el => {
      el.addEventListener('click', (e) => { e.preventDefault(); navigateTo(el.dataset.nav); });
    });
    new QuizEngine(mod.quiz, 'quiz-area', (score, total) => {
      if (Math.round((score / total) * 100) >= 80) markQuizComplete(moduleIndex);
    }).render();
  }

  // --- 修了テスト ---
  function renderFinalTest(container) {
    const progress = loadProgress();
    if (!isAllModulesComplete()) {
      container.innerHTML = `<div class="fade-in"><div class="final-test-intro">
        <h1>修了テスト</h1><p>全${MODULES.length}回の研修を完了すると受験できます。</p>
        <div class="requirements"><ul>${MODULES.map((m,i) => {
          const p=getModuleProgress(i), d=p===100;
          return `<li style="color:${d?'var(--success)':'var(--text-secondary)'}">${d?'&#10003;':'&#9744;'} ${m.shortTitle}（${p}%）</li>`;
        }).join('')}</ul></div>
        <button class="btn btn-secondary" id="back-quiz-hub">クイズ一覧に戻る</button>
      </div></div>`;
      container.querySelector('#back-quiz-hub')?.addEventListener('click', () => navigateTo('quiz-hub'));
      return;
    }
    if (progress.finalTest) { renderCertificate(container, progress.finalTest); return; }
    container.innerHTML = `<div class="fade-in"><div class="final-test-intro">
      <h1>修了テスト</h1><p>全${MODULES.length}回の研修から合計${MODULES.reduce((s, m) => s + m.quiz.length, 0)}問。80%以上で修了証発行。</p>
      <div style="margin-top:24px"><button class="btn btn-primary" id="start-final-test">テストを開始する</button></div>
    </div><div id="final-quiz-area"></div></div>`;
    container.querySelector('#start-final-test')?.addEventListener('click', () => {
      container.querySelector('.final-test-intro').style.display='none';
      new QuizEngine(generateFinalTestQuestions(), 'final-quiz-area', (score, total) => {
        if (Math.round((score/total)*100) >= 80) { markFinalTestComplete(score,total); renderCertificate(container, {score,total,date:new Date().toISOString()}); }
      }).render();
    });
  }

  function renderCertificate(container, result) {
    const d=new Date(result.date), ds=`${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日`;
    container.innerHTML = `<div class="fade-in">
      <div class="final-test-intro"><h1>修了テスト結果</h1><p>${result.total}問中 ${result.score}問正解（${Math.round((result.score/result.total)*100)}%）</p></div>
      <div class="certificate slide-up">
        <h2>修了証</h2><p class="cert-subtitle">Claude 研修コース - 基礎編（全${MODULES.length}回）</p>
        <p style="font-size:14px;color:var(--text-secondary);margin-bottom:24px">以下の研修プログラムを修了し、修了テストに合格したことを証明します。</p>
        <div style="margin:20px 0;padding:16px;border-top:1px solid var(--border-light);border-bottom:1px solid var(--border-light)">
          ${MODULES.map(m=>`<p style="font-size:14px;margin:4px 0">${m.title}</p>`).join('')}
        </div>
        <p class="cert-detail">修了日: ${ds}</p><p class="cert-detail">正答率: ${Math.round((result.score/result.total)*100)}%</p>
      </div>
      <div style="text-align:center;margin-top:24px"><button class="btn btn-secondary" id="retake-final">もう一度受験する</button></div>
    </div>`;
    container.querySelector('#retake-final')?.addEventListener('click', () => {
      const p=loadProgress(); delete p.finalTest; saveProgress(p); navigateTo('final-test');
    });
  }

  // ========================================
  // 研修モード
  // ========================================

  function renderPresentHome(container) {
    container.innerHTML = `
      <div class="fade-in present-home">
        <img src="assets/ehi-logo.png" alt="Eight Hundred" class="present-home-logo">
        <h1 class="present-home-title">Claude 研修コース - 基礎編</h1>
        <div class="present-session-list">
          ${MODULES.map((mod, i) => `
            <div class="present-session-card" data-module="${i}">
              <span class="present-session-num">第${i+1}回</span>
              <div class="present-session-info">
                <h2>${mod.title.replace(/^第\d+回：/,'')}</h2>
                <p>${mod.description}</p>
              </div>
              <span class="present-session-count">${mod.sections.length} セクション</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    container.querySelectorAll('.present-session-card').forEach(c => {
      c.addEventListener('click', () => {
        presentSectionIndex = 0;
        navigateTo('module', parseInt(c.dataset.module));
      });
    });
  }

  function renderPresentModule(container, moduleIndex) {
    scrollToTop();
    const mod = MODULES[moduleIndex];
    const totalSlides = mod.sections.length + 1;
    const slideIdx = Math.min(presentSectionIndex, totalSlides - 1);

    let slideContent = '';
    if (slideIdx === 0) {
      const groups = mod.coverGroups || [{ label: '', sections: mod.sections.map((_, i) => i) }];
      slideContent = `
        <div class="slide-cover">
          <h1 class="slide-cover-title">${mod.title}</h1>
          <p class="slide-cover-desc">${mod.description}</p>
          <div class="slide-cover-groups">
            ${groups.map((g, gi) => `
              <div class="cover-group">
                <div class="cover-group-header">
                  <span class="cover-group-num"><small>STEP</small>${gi + 1}</span>
                  <span class="cover-group-label">${g.label}</span>
                </div>
                ${g.objectives ? `<div class="cover-group-objectives">${g.objectives.map(o => `<div class="cover-obj-item">${o}</div>`).join('')}</div>` : ''}
                <div class="cover-group-items">
                  ${g.sections.map(si => {
                    const cNum = mod.sections[si].title.match(/^\d+-\d+/);
                    const cLabel = mod.sections[si].title.replace(/^\d+-\d+\.\s*/, '');
                    return `<div class="cover-group-item" data-goto-slide="${si + 1}"><span class="cover-item-num">${cNum ? cNum[0] : ''}</span>${cLabel}</div>`;
                  }).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>`;
    } else {
      const sec = mod.sections[slideIdx - 1];
      const tl = sec.type==='handson'?'ハンズオン':'講義';
      const tc = sec.type||'lecture';
      const sectionIdx = slideIdx - 1;
      const groupForSection = (mod.coverGroups || []).find(g => g.sections.includes(sectionIdx));
      const groupLabel = groupForSection ? `${groupForSection.icon || ''} ${groupForSection.label}`.trim() : '';
      slideContent = `
        <div class="slide-section">
          <div class="slide-section-header">
            ${groupLabel ? `<span class="slide-group-label">${groupLabel}</span>` : ''}
            <h2 class="slide-section-title">${sec.title}</h2>
          </div>
          <div class="slide-section-body">${sec.content}</div>
        </div>`;
    }

    const sideGroups = mod.coverGroups || [{ label: '全セクション', sections: mod.sections.map((_, i) => i) }];
    container.innerHTML = `
      <div class="fade-in present-slide-view${slideIdx !== 0 ? ' has-sidebar' : ''}">
        <div class="present-nav-bar">
          <div class="present-session-tabs">
            ${MODULES.map((m, i) => `
              <button class="present-tab ${i===moduleIndex?'active':''}" data-session="${i}">${m.shortTitle}</button>
            `).join('')}
          </div>
        </div>
        <div class="slide-area">
          <div class="slide-content">${slideContent}</div>
          ${slideIdx !== 0 ? `<aside class="present-sidebar" id="present-sidebar">
            <div class="sidebar-cover-link" data-goto-slide="0">← 表紙に戻る</div>
            ${sideGroups.map(g => `
              <div class="sidebar-group">
                <div class="sidebar-group-label">${g.icon || ''} ${g.label}</div>
                ${g.sections.map(si => {
                  const num = mod.sections[si].title.match(/^[A-D]-(\d+)/);
                  const label = mod.sections[si].title.replace(/^[A-D]-\d+\.\s*/, '');
                  return `<div class="sidebar-item ${slideIdx === si + 1 ? 'active' : ''}" data-goto-slide="${si + 1}">
                    <span class="sidebar-num">${num ? num[0] : si + 1}</span> ${label}
                  </div>`;
                }).join('')}
              </div>
            `).join('')}
          </aside>` : ''}
        </div>
        <div class="slide-nav">
          <button class="slide-nav-btn" id="slide-prev" ${slideIdx===0 && moduleIndex===0?'disabled':''}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg> ${slideIdx===0 && moduleIndex>0 ? MODULES[moduleIndex-1].shortTitle+'へ' : '前へ'}
          </button>
          <span class="slide-counter">${slideIdx+1} / ${totalSlides}</span>
          <button class="slide-nav-btn slide-nav-next" id="slide-next" ${slideIdx===totalSlides-1 && moduleIndex>=MODULES.length-1?'disabled':''}>
            ${slideIdx===totalSlides-1 && moduleIndex<MODULES.length-1 ? MODULES[moduleIndex+1].shortTitle+'へ' : '次へ'} <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </div>
    `;

    // セッションタブ
    container.querySelectorAll('.present-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        presentSectionIndex = 0;
        navigateTo('module', parseInt(tab.dataset.session));
      });
    });

    // サイドバー & 表紙グループのクリックナビ
    container.querySelectorAll('[data-goto-slide]').forEach(item => {
      item.addEventListener('click', () => {
        presentSectionIndex = parseInt(item.dataset.gotoSlide);
        renderPresentModule(container, moduleIndex);
      });
    });

    // スライドナビ
    container.querySelector('#slide-prev')?.addEventListener('click', () => {
      if (presentSectionIndex > 0) { presentSectionIndex--; renderPresentModule(container, moduleIndex); }
      else if (moduleIndex > 0) {
        const prevMod = MODULES[moduleIndex-1];
        presentSectionIndex = prevMod.sections.length; // 前モジュールの最後のスライド
        navigateTo('module', moduleIndex-1);
      }
    });
    container.querySelector('#slide-next')?.addEventListener('click', () => {
      if (presentSectionIndex < totalSlides-1) {
        presentSectionIndex++;
        renderPresentModule(container, moduleIndex);
      } else if (moduleIndex < MODULES.length-1) {
        presentSectionIndex = 0;
        navigateTo('module', moduleIndex+1);
      }
    });
  }

  // --- キーボードナビ ---
  function presentPrev() {
    if (currentModule === null) return;
    if (presentSectionIndex > 0) { presentSectionIndex--; renderPresentModule(document.getElementById('page-container'), currentModule); }
    else if (currentModule > 0) {
      const prevMod = MODULES[currentModule-1];
      presentSectionIndex = prevMod.sections.length;
      navigateTo('module', currentModule-1);
    }
  }
  function presentNext() {
    if (currentModule === null) return;
    const tot = MODULES[currentModule].sections.length + 1;
    if (presentSectionIndex < tot-1) {
      presentSectionIndex++;
      renderPresentModule(document.getElementById('page-container'), currentModule);
    } else if (currentModule < MODULES.length-1) {
      presentSectionIndex = 0;
      navigateTo('module', currentModule+1);
    }
  }

  // ========================================
  // 初期化
  // ========================================
  function init() {
    // ヘッダーナビ
    document.querySelectorAll('.header-nav-link').forEach(el => {
      el.addEventListener('click', (e) => { e.preventDefault(); navigateTo(el.dataset.page); });
    });

    // ロゴ → ホーム
    document.querySelector('.header-logo')?.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo('home');
    });

    // ヘッダーのモード切替
    document.querySelectorAll('#global-header .mode-btn').forEach(btn => {
      btn.addEventListener('click', () => setMode(btn.dataset.mode));
    });

    // フッターリセット
    document.getElementById('reset-progress')?.addEventListener('click', () => {
      if (confirm('全ての学習進捗をリセットしますか？')) resetProgress();
    });

    // フッターセットアップ

    // キーボード
    document.addEventListener('keydown', (e) => {
      if (currentMode !== 'present') return;
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); presentNext(); }
      else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); presentPrev(); }
      else if (e.key === 'Escape') { setMode('self-study'); }
    });

    // AIチューター フローティングボタン
    if (AI_TUTOR_URL) {
      const fab = document.createElement('a');
      fab.href = AI_TUTOR_URL;
      fab.target = '_blank';
      fab.rel = 'noopener';
      fab.className = 'tutor-fab';
      fab.title = 'AIチューターに質問する';
      fab.innerHTML = `
        <span class="tutor-fab-tooltip">Claude.ai が開きます — 会話は他のメンバーには見えません</span>
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
        <span class="tutor-fab-label">AIチューターに質問</span>
        <svg class="tutor-fab-external" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      `;
      document.body.appendChild(fab);
    }

    // --- 検索機能 ---
    const searchModal = document.getElementById('search-modal');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    function openSearch() {
      if (currentMode === 'present') return;
      searchModal.classList.add('open');
      searchInput.value = '';
      searchResults.innerHTML = '<div class="search-hint">キーワードを入力してください</div>';
      setTimeout(() => searchInput.focus(), 50);
    }
    function closeSearch() {
      searchModal.classList.remove('open');
    }

    function buildSearchIndex() {
      const items = [];
      // セクション
      MODULES.forEach((mod, mi) => {
        mod.sections.forEach((sec, si) => {
          const text = (sec.title + ' ' + sec.content).replace(/<[^>]+>/g, ' ').toLowerCase();
          items.push({ type: 'section', mi, si, title: sec.title, subtitle: mod.shortTitle, text });
        });
      });
      // FAQ
      MODULES.forEach(mod => {
        const faq = mod.selfStudyResources?.faq || [];
        faq.forEach(f => {
          const text = (f.q + ' ' + f.a).replace(/<[^>]+>/g, ' ').toLowerCase();
          items.push({ type: 'faq', title: f.q, text });
        });
      });
      // 練習問題
      MODULES.forEach(mod => {
        const practices = mod.practices || [];
        practices.forEach(p => {
          const text = (p.title + ' ' + p.task + ' ' + p.section).replace(/<[^>]+>/g, ' ').toLowerCase();
          items.push({ type: 'practice', title: p.title, subtitle: p.section, text });
        });
      });
      // リンク
      MODULES.forEach(mod => {
        const links = mod.selfStudyResources?.links || [];
        links.forEach(l => {
          const text = (l.title + ' ' + (l.desc || '') + ' ' + (l.category || '')).toLowerCase();
          items.push({ type: 'link', title: l.title, url: l.url, subtitle: l.category, text });
        });
      });
      return items;
    }

    let searchIndex = null;

    function doSearch(query) {
      if (!searchIndex) searchIndex = buildSearchIndex();
      const q = query.trim().toLowerCase();
      if (!q) {
        searchResults.innerHTML = '<div class="search-hint">キーワードを入力してください</div>';
        return;
      }
      const terms = q.split(/\s+/);
      const matches = searchIndex.filter(item => terms.every(t => item.text.includes(t)));
      if (!matches.length) {
        searchResults.innerHTML = '<div class="search-hint">該当する結果がありません</div>';
        return;
      }
      const icons = { section: '📄', faq: '❓', link: '🔗' };
      const labels = { section: 'セクション', practice: '練習問題', faq: 'FAQ', link: 'リンク' };
      searchResults.innerHTML = matches.slice(0, 20).map((m, i) => `
        <div class="search-result-item" data-search-idx="${i}">
          <span class="search-result-icon">${icons[m.type]}</span>
          <div class="search-result-body">
            <div class="search-result-title">${m.title}</div>
            ${m.subtitle ? `<span class="search-result-tag">${m.subtitle}</span>` : ''}
            <span class="search-result-tag">${labels[m.type]}</span>
          </div>
        </div>
      `).join('');
      // 結果を保持
      searchResults._matches = matches.slice(0, 20);
    }

    document.getElementById('open-search')?.addEventListener('click', openSearch);
    searchModal?.addEventListener('click', (e) => { if (e.target === searchModal) closeSearch(); });
    searchInput?.addEventListener('input', () => doSearch(searchInput.value));
    searchResults?.addEventListener('click', (e) => {
      const item = e.target.closest('.search-result-item');
      if (!item || !searchResults._matches) return;
      const idx = parseInt(item.dataset.searchIdx);
      const m = searchResults._matches[idx];
      closeSearch();
      if (m.type === 'section') navigateTo('topic-detail', m.mi, m.si);
      else if (m.type === 'practice') navigateTo('practices');
      else if (m.type === 'faq') navigateTo('faq');
      else if (m.type === 'link') navigateTo('links');
    });

    // Ctrl+K / Escape
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
      if (e.key === 'Escape' && searchModal.classList.contains('open')) { e.preventDefault(); closeSearch(); }
    });

    // 初期表示: 常にランディングページから開始
    enterLanding();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
