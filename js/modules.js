// ========================================
// Claude 研修アプリ - 学習コンテンツデータ
// 実践型カリキュラム: チャット・Cowork・Claude Code
// ========================================

const MODULES = [
  // ============================================================
  // 第1回：Claudeで仕事の初速を上げ、成果物を作る
  // ============================================================
  {
    id: 'session-1',
    title: '第1回：Claudeで仕事の初速を上げ、成果物を作る',
    shortTitle: '第1回',
    description: 'Claudeの特徴を理解してChatで初速を上げ、Office・Research・Artifact・Coworkで業務成果物まで作れるようになる',
    target: 'Claude を業務で使い始めたい方',
    duration: '自分のペースで',
    prereq: 'Claudeアカウント（事前準備済み）',
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>`,
    objectives: [
      'Claudeが何者か、業務のどこに効くかを説明できる',
      'Claudeの主要機能を把握し、業務での使いどころをイメージできる',
      'Chat / Cowork / Claude Code の3モードを場面に応じて選べる',
      'Chatで壁打ち・下書き・要約を実行できる',
      'プロンプト3要素（前提の共有・タスク・ルール）で的確に指示が出せる',
      'AIの出力を鵜呑みにせず、確認・修正・責任を持つ姿勢が身についている',
      'ProjectとArtifactを使って、業務成果物を作り始められる',
      'Claudeで作れる成果物の種類（文書・表・スライド・調査・チャート・プロトタイプ）を把握している',
      'Claude in Office（Excel / PowerPoint / Word）で既存業務の質とスピードを上げられる',
      'Researchで調査結果を示唆付きで整理できる',
      'Artifactで診断ツール・ダッシュボード等の「プロトタイプ」を作れる',
      'Chrome拡張でブラウザ上の作業を効率化できる',
      'Coworkでファイル作業を委任できる',
      'Scheduled tasksで定型業務を自動実行できる',
      'よく使う手順を Skill として型化し、Chat・Cowork から呼び出せる'
    ],
    coverGroups: [
      { label: 'Claudeを知る', icon: '💡', sections: [0, 1, 2], objectives: ['Claudeが何者か説明できる', '主要機能の全体像を把握する', 'Chat / Cowork / Code を使い分けられる'] },
      { label: 'Chatを使いこなす', icon: '💬', sections: [3, 4, 5], objectives: ['Chatで壁打ち・下書き・要約ができる', 'プロンプト3要素で良い指示を出せる', '出力を確認・修正し責任を持てる'] },
      { label: '成果物を作る', icon: '🏗️', sections: [6, 7, 8, 9, 10], objectives: ['Project / Artifactで成果物にできる', '成果物の種類と作り分けがわかる', 'Office・Research・プロトタイプを活用できる'] },
      { label: '業務に組み込む', icon: '⚙️', sections: [11, 12, 13, 14], objectives: ['Coworkでファイル作業を任せられる（委任）', 'Chrome拡張でブラウザ作業を支援できる', 'Scheduled tasksで定型業務を自動化できる', 'よく使う手順をSkillとして型化できる'] }
    ],
    sections: [

      // ========================================
      // 1-1: Claudeとは何か
      // ========================================
      {
        title: '1-1. Claudeとは何か',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>Claude がどんなAIで、業務のどこに効くかを押さえます。本講座を進めるうえでの出発点です。</p>

          <h3>Claudeとは</h3>
          <p>Claude は Anthropic が開発した生成AIアシスタントです。「大規模言語モデル（LLM）」を基盤にしており、<strong>長文処理・指示への忠実さ・考えるパートナーとしての設計</strong>に強みがあります。</p>

          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">🧠</div>
              <div class="grid-title">長文に強い</div>
              <div class="grid-desc">200Kトークン（約15万字）を一度に処理できます。長い報告書や議事録をそのまま渡して、要約・分析・比較を依頼できます</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🎯</div>
              <div class="grid-title">指示に忠実</div>
              <div class="grid-desc">役割・ルール・出力形式を指定すると、そのとおりに動きます。「箇条書き3点で」「です・ます調で」といった制約を守る精度が高い</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🤝</div>
              <div class="grid-title">考えるパートナー</div>
              <div class="grid-desc">壁打ち・論点整理・構造化が得意です。「答えを出す」だけでなく「一緒に考える」ために設計されています</div>
            </div>
          </div>

          <h3>業務での使いどころ</h3>
          <p>Claude が効くのは、次のような場面。</p>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">🏓</div>
              <div class="grid-title">壁打ち・論点整理</div>
              <div class="grid-desc">提案の切り口を一緒に考える、論点を構造化する、弱点を指摘してもらう</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">✍️</div>
              <div class="grid-title">下書き・素案作成</div>
              <div class="grid-desc">メール、報告書、議事録の叩き台を作る。自分の言葉で磨く前の初稿として使う</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📝</div>
              <div class="grid-title">要約・情報整理</div>
              <div class="grid-desc">長い文書やメールスレッドを要点に絞る。複数資料の横断比較も得意</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">分析・構造化整理</div>
              <div class="grid-desc">データの傾向分析、SWOT整理、競合比較表の作成など</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🏗️</div>
              <div class="grid-title">提案書、プロジェクト資料、データ分析・レポート作成</div>
              <div class="grid-desc">構成案・スライド・図表・KPI可視化まで、業務成果物の生成</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🖥️</div>
              <div class="grid-title">プロトタイプ・アプリの作成</div>
              <div class="grid-desc">診断ツール、シミュレーター、画面モック</div>
            </div>
          </div>

          <div class="tip-box">
            <strong>💡 まず Chat から</strong><br>
            Claude は Chat（対話）を中心に、Cowork（ファイル作業）や Claude Code（高度作業）、Office アドインや Artifact など多彩な接点を持ちます。第1回ではまず Chat から始め、後半・第2回で他の接点へ広げていきます。
          </div>
        `
      },

      // ========================================
      // 1-2: Claudeの主要機能マップ
      // ========================================
      {
        title: '1-2. Claudeの主要機能マップ',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>Claude の機能を「地図」として頭に入れます。全部を一度に覚える必要はありません。「こういう機能がある」と知っておけば、必要なときに引き出せます。</p>

          <h3>Chat を中心とした機能の広がり</h3>
          <p>Claude の機能は <strong>Chat（対話）を中心に広がっています</strong>。Chat の中で使える機能と、Chat の外に広がる機能を分けて理解しましょう。</p>

          <div class="visual-big-message">
            <div class="big-message-icon">💬</div>
            <div class="big-message-text">Chat がすべての基盤</div>
            <div class="big-message-sub">Project・Artifact・Research・Web検索・ファイル添付は、すべて Chat の中で使える機能です</div>
          </div>

          <h3>Chat の中で使える機能</h3>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">📋</div>
              <div class="grid-title">Project</div>
              <div class="grid-desc">案件ごとに背景情報・ルール・参照資料を保持。毎回説明し直す手間がなくなる。<strong>第1回で学習</strong></div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🎨</div>
              <div class="grid-title">Artifact</div>
              <div class="grid-desc">会話とは独立した成果物を生成。文書・図表・Webページ・ダッシュボードなど。<strong>第1回で学習</strong></div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔍</div>
              <div class="grid-title">Research</div>
              <div class="grid-desc">複数ソースを統合した包括的調査レポート。深く調べたいときに使う。<strong>後半（1-10）で学習</strong></div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🌐</div>
              <div class="grid-title">Web検索 / ファイル添付</div>
              <div class="grid-desc">最新情報の検索、PDF・Excel・画像の添付と処理。Chat の基本機能</div>
            </div>
          </div>

          <h3>Chat の外に広がる機能</h3>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">📂</div>
              <div class="grid-title">Cowork</div>
              <div class="grid-desc">ゴールを伝えてファイル作業を任せる。PPTX / XLSX / DOCX をフォルダに直接出力。<strong>後半（1-13）で学習</strong></div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">⚡</div>
              <div class="grid-title">Claude Code</div>
              <div class="grid-desc">複数ファイル編集・アプリ改修・データ処理など、高度な作業を任せる。CLI または IDE から利用できる。<strong>第2回（2-3）で学習</strong></div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">Office アドイン</div>
              <div class="grid-desc">Excel / PowerPoint / Word の中から Claude を呼び出す。<strong>後半（1-9）で学習</strong></div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🌐</div>
              <div class="grid-title">Chrome 拡張</div>
              <div class="grid-desc">ブラウザで開いたページを Claude に読ませて要約・分析。<strong>後半（1-12）で学習</strong></div>
            </div>
          </div>

          <h3>品質・連携を支える機能</h3>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">🧩</div>
              <div class="grid-title">Skills</div>
              <div class="grid-desc">繰り返すタスクの手順を標準化。チームの作法を Claude に覚えさせる。<strong>第2回（2-1）で学習</strong></div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔗</div>
              <div class="grid-title">MCP / Connectors</div>
              <div class="grid-desc">Slack・Notion・Google Drive 等の社内ツールと Claude を接続。<strong>第2回（2-2）で学習</strong></div>
            </div>
          </div>

          <div class="visual-highlight-card">
            <p><strong>今日のフォーカス</strong>：第1回の前半では <strong>Chat・Project・Artifact</strong> を中心に学びます。Office・Research・Cowork などは後半（1-8〜1-14）、Skills・MCP・Claude Code は第2回で順に扱うので、今は「こういうものがある」と頭に入れておけばOKです。</p>
          </div>
        `
      },

      // ========================================
      // 1-3: Chat / Cowork / Claude Code の使い分け
      // ========================================
      {
        title: '1-3. Chat / Cowork / Claude Code の使い分け',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>Claude は「<strong>作業スタイル</strong>」と「<strong>利用場所</strong>」の 2 軸で整理すると分かりやすくなります。「3つのモード」（Chat / Cowork / Claude Code）は <strong>作業スタイル</strong> の話で、それぞれをどこ（Web / Desktop / Mobile / Cursor IDE / CLI）で使うかは別の軸です。</p>

          <h3>3つの作業スタイル</h3>
          <p>まず作業スタイルから押さえます。</p>
          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">💬</div>
              <div class="grid-title">Chat</div>
              <div class="grid-desc">
                <strong>会話しながら考える</strong><br>
                壁打ち・質問・下書き・要約・論点整理。<br>
                情報が1回で渡せるタスク向き。<br>
                Web / Desktop / Mobile で使える
              </div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📂</div>
              <div class="grid-title">Cowork</div>
              <div class="grid-desc">
                <strong>ファイル作業を任せる</strong><br>
                ローカルファイルや複数資料を渡して成果物を作ってもらう。<br>
                PPTX / XLSX 直接出力、離席OK。<br>
                Desktop で使う
              </div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">⚡</div>
              <div class="grid-title">Claude Code</div>
              <div class="grid-desc">
                <strong>高度な作業を任せる</strong><br>
                プロトタイプ、コード・アプリ・複数ファイル編集・データ処理など。<br>
                <strong>Claude Desktop で使うのが基本</strong>、<br>
                CLI / IDE はより細かく使いたい人向け
              </div>
            </div>
          </div>

          <h3>作業スタイル × 利用場所</h3>
          <p>同じ作業スタイルでも、利用場所は1つではありません。場面に合わせて選べます。</p>

          <table class="info-table">
            <thead>
              <tr>
                <th>作業スタイル</th>
                <th>何をするものか</th>
                <th>主な利用場所</th>
                <th>位置づけ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Chat</strong></td>
                <td>会話しながら相談・整理・下書きする</td>
                <td>Web / Desktop / Mobile</td>
                <td>初心者がまず使う基本</td>
              </tr>
              <tr>
                <td><strong>Cowork</strong></td>
                <td>ファイル作業を任せる</td>
                <td>Desktop</td>
                <td>ファイル作業・資料作成で使う</td>
              </tr>
              <tr>
                <td><strong>Claude Code</strong></td>
                <td>プロトタイプ、コード・アプリ・複数ファイル作業を任せる</td>
                <td><strong>Desktop が基本</strong>、CLI / IDE は上級者向け</td>
                <td>まず Desktop で試し、より高度に使いたい人は CLI / IDE を選ぶ</td>
              </tr>
            </tbody>
          </table>

          <h3>利用場所の整理</h3>
          <p>逆に「どこで使うか」から見ると、それぞれの場所で使える作業スタイルがイメージしやすくなります。</p>

          <table class="info-table">
            <thead>
              <tr>
                <th>利用場所</th>
                <th>主に使うもの</th>
                <th>説明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Web 版 Claude</strong>（claude.ai）</td>
                <td>Chat / Project / Artifact / Research</td>
                <td>基本入口。まず触る場所</td>
              </tr>
              <tr>
                <td><strong>Claude Desktop</strong></td>
                <td>Chat / Cowork / <strong>Claude Code</strong></td>
                <td>初心者にも使いやすい。<strong>Claude Code もここから始めるのが基本</strong></td>
              </tr>
              <tr>
                <td><strong>Mobile アプリ</strong></td>
                <td>Chat 中心</td>
                <td>外出先の確認・メモ・軽い相談</td>
              </tr>
              <tr>
                <td><strong>IDE</strong>（VS Code / Cursor / JetBrains 拡張など）</td>
                <td>Claude Code（より高度）</td>
                <td>コードや教材ファイルを見ながら作業したい人向け。社内には Cursor 活用のノウハウもある</td>
              </tr>
              <tr>
                <td>CLI（ターミナル）</td>
                <td>Claude Code（より高度）</td>
                <td>並列作業や自動化を求めるようになってからで OK</td>
              </tr>
            </tbody>
          </table>

          <p><strong>つまり、「何を任せるか」（作業スタイル）と「どこで使うか」（利用場所）を分けて理解する</strong>のが、Claude を整理するコツです。</p>

          <div class="info-box">
            <strong>ℹ️ Claude Code は Claude Desktop から始めるのが基本</strong><br>
            Chat / Cowork と同じデスクトップアプリの中で、特別な準備なしに使えます。CLI や IDE は、より細かく使いたくなったときに検討すれば十分です。
          </div>

          <div class="info-box">
            <strong>📖 CLI と IDE とは？</strong><br>
            <strong>CLI（コマンドラインインターフェース）</strong>：ターミナルやコマンドプロンプトと呼ばれる、文字でコンピューターに指示を出す画面です。並列作業や自動化を求めるようになってから使い始めれば十分です。<br>
            <strong>IDE（統合開発環境）</strong>：VS Code / Cursor / JetBrains 拡張などのコードエディタ。ファイルを横に並べて見ながら編集できるツールです。コードや教材ファイルを編集する人向けです。
          </div>

          <h3>判断フロー — いつ、どれを使う？</h3>
          <div class="visual-flow">
            <div class="flow-step">
              <div class="flow-num">❓</div>
              <div class="flow-label">対話で済むか？</div>
              <div class="flow-desc">質問・壁打ち・下書き</div>
            </div>
            <div class="flow-arrow">→ Yes →</div>
            <div class="flow-step">
              <div class="flow-num">💬</div>
              <div class="flow-label">Chat</div>
              <div class="flow-desc">まずはここから</div>
            </div>
          </div>
          <div class="visual-flow" style="margin-top: 12px;">
            <div class="flow-step">
              <div class="flow-num">❓</div>
              <div class="flow-label">ファイルを作ってほしいか？</div>
              <div class="flow-desc">PPTX / XLSX / DOCX</div>
            </div>
            <div class="flow-arrow">→ Yes →</div>
            <div class="flow-step">
              <div class="flow-num">📂</div>
              <div class="flow-label">Cowork</div>
              <div class="flow-desc">後半で詳しく</div>
            </div>
          </div>
          <div class="visual-flow" style="margin-top: 12px;">
            <div class="flow-step">
              <div class="flow-num">❓</div>
              <div class="flow-label">毎回同じ品質で繰り返したいか？</div>
              <div class="flow-desc">ルール固定・自動化</div>
            </div>
            <div class="flow-arrow">→ Yes →</div>
            <div class="flow-step">
              <div class="flow-num">⚡</div>
              <div class="flow-label">Claude Code</div>
              <div class="flow-desc">第2回で詳しく</div>
            </div>
          </div>

          <h3>具体例</h3>
          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">💬</div>
              <div class="grid-title">Chat で</div>
              <div class="grid-desc">
                ・提案の切り口を壁打ち<br>
                ・メールの下書き<br>
                ・議事録PDFの要約<br>
                ・競合比較表の作成
              </div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📂</div>
              <div class="grid-title">Cowork で</div>
              <div class="grid-desc">
                ・提案書PPTXの作成<br>
                ・Excelデータの整形<br>
                ・フォルダ内の資料整理<br>
                ・定型レポートの自動生成
              </div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">⚡</div>
              <div class="grid-title">Claude Code で</div>
              <div class="grid-desc">
                ・品質チェックの自動化<br>
                ・テンプレートの標準化<br>
                ・複数ツール連携の自動化<br>
                ・チーム共通ルールの固定
              </div>
            </div>
          </div>

          <div class="visual-highlight-card">
            <p><strong>迷ったら Chat から</strong>：Chat はベースキャンプです。Chat で始めて「ファイルを直接作りたい」と思ったら Cowork、「毎回同じ品質にしたい」と思ったら Claude Code に進みましょう。</p>
          </div>

          <div class="info-box">
            <strong>ℹ️ Cowork は後半、Claude Code は第2回で詳しく</strong><br>
            前半は Chat の使い方をしっかり身につけることに集中します。Cowork・Claude Code は「こういうものがある」と知っておけば十分です。
          </div>
        `
      },

      // ========================================
      // 1-4: Chatで壁打ち・下書き・要約
      // ========================================
      {
        title: '1-4. Chatで壁打ち・下書き・要約',
        type: 'hands-on',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>Chat で最もよく使う3つのパターン — 壁打ち・下書き・要約 — を実際に体験します。どれもチャットに文章を入力するだけで始められます。</p>

          <h3>Chat の3つの基本パターン</h3>
          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">🏓</div>
              <div class="grid-title">壁打ち</div>
              <div class="grid-desc">アイデアや方針を Claude にぶつけて、論点を整理する。一人で考えるより視野が広がる</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">✍️</div>
              <div class="grid-title">下書き</div>
              <div class="grid-desc">メール、報告書、議事録の素案を作る。自分の言葉で磨く前の叩き台として使う</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📝</div>
              <div class="grid-title">要約</div>
              <div class="grid-desc">長い文書やメールスレッドを要点に絞る。ファイルを添付して「3点に要約して」</div>
            </div>
          </div>

          <h3>パターン1：壁打ち</h3>
          <p>壁打ちは「正解を求める」のではなく、<strong>考えを整理し、視野を広げる</strong>ための使い方です。</p>
          <div class="example-box">
            <strong>📌 プロンプト例：提案の切り口を壁打ち</strong><br><br>
            「製造業のクライアントにDX推進の提案をします。<br>
            現状は紙ベースの在庫管理で、月次棚卸に3日かかっています。<br>
            提案の切り口を5つ挙げて、それぞれのメリット・リスクを教えてください。」<br><br>
            <em>→ Claude が5つの切り口を提示。「このうち2番目を深掘りして」と会話を続けられる</em>
          </div>

          <h3>パターン2：下書き</h3>
          <p>下書きは「完成品」ではなく<strong>「叩き台」</strong>を作る使い方です。0から書くより、叩き台を修正する方が圧倒的に速い。</p>
          <div class="example-box">
            <strong>📌 プロンプト例：クライアントへのメール</strong><br><br>
            「明日のステアリングコミッティに向けて、進捗報告メールを書いてください。<br>
            宛先はA社の部長。丁寧だが簡潔なトーンで。<br>
            報告内容：Phase 1 完了、Phase 2 は1週間前倒しで開始予定、リスクは要員確保。」<br><br>
            <em>→ すぐにメール文面が出力される。微調整して送信すればOK</em>
          </div>

          <h3>パターン3：要約</h3>
          <p>要約は「長い情報を短くする」だけでなく、<strong>「何が重要かを判断する」</strong>ための使い方です。</p>
          <div class="example-box">
            <strong>📌 プロンプト例：議事録の要約</strong><br><br>
            「この議事録を以下の形式で要約してください。<br>
            ・決定事項（箇条書き）<br>
            ・宿題（担当者と期限付き）<br>
            ・次回アジェンダ案」<br>
            ＋ 議事録PDFを添付<br><br>
            <em>→ 構造化された要約が返ってくる。出力形式を指定すると精度が上がる</em>
          </div>

          <h3>Chat の便利機能</h3>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">📎</div>
              <div class="grid-title">ファイル添付</div>
              <div class="grid-desc">PDF・Word・Excel・画像をドラッグ&ドロップ。中身について質問したり、処理を依頼できる</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🌐</div>
              <div class="grid-title">Web検索</div>
              <div class="grid-desc">最新情報が必要なとき、Claude が自動で検索して回答に反映する。出典も表示される</div>
            </div>
          </div>

          <div class="try-box">
            <strong>✅ やってみよう</strong><br>
            claude.ai を開いて、以下のどれかを試してみましょう：<br><br>
            <strong>壁打ち</strong>：「来週のチームMTGのアジェンダ案を3つ出して。それぞれの狙いも教えて」<br>
            <strong>下書き</strong>：「○○の件でクライアントに送る報告メールの下書きを作って。丁寧だが簡潔に」<br>
            <strong>要約</strong>：手元のPDFを添付して「この資料の要点を3つにまとめて」
          </div>
        `
      },

      // ========================================
      // 1-5: 良い指示の出し方
      // ========================================
      {
        title: '1-5. 良い指示の出し方',
        type: 'hands-on',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>Claude への指示（プロンプト）の書き方で、出力の質は大きく変わります。「3つの要素」を意識するだけで、狙った出力を引き出せるようになります。</p>

          <h3>プロンプトの3要素</h3>
          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">🎯</div>
              <div class="grid-title">前提の共有</div>
              <div class="grid-desc">あなたは誰で、何の案件で、どんな状況か。Claude に背景を伝える</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📋</div>
              <div class="grid-title">タスク定義</div>
              <div class="grid-desc">何をしてほしいか。ゴールと成果物を具体的に伝える</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📐</div>
              <div class="grid-title">ルール指定</div>
              <div class="grid-desc">出力形式、文字数、トーン、禁止事項。出力の「形」を指定する</div>
            </div>
          </div>

          <h3>Before / After で見る効果</h3>
          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">Before：要素なし</div>
              <p>「競合分析して」</p>
              <p style="margin-top:8px;color:var(--text-muted)">→ 何業界？どの競合？何を比較？出力形式は？<br>Claude は推測で回答するしかない</p>
            </div>
            <div class="ba-arrow">→</div>
            <div class="ba-item after">
              <div class="ba-label">After：3要素あり</div>
              <p>「あなたはITコンサルタントです。<br>
              A社・B社・C社のクラウドERPを、機能・価格・導入実績で比較してください。<br>
              比較表（Markdown）で出力し、最後に推奨を1段落で述べてください。」</p>
            </div>
          </div>

          <h3>要素別の具体例</h3>
          <div class="visual-steps">
            <div class="visual-step-item">
              <div class="step-marker">1</div>
              <div class="step-body">
                <div class="step-title">前提の共有</div>
                <div class="step-desc">「あなたは○○業界のコンサルタントです」「クライアントは製造業の中堅企業で…」「私はプロジェクトマネージャーとして…」<br>→ Claude が文脈を理解し、適切なトーンと深さで回答できる</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">2</div>
              <div class="step-body">
                <div class="step-title">タスク定義</div>
                <div class="step-desc">「競合3社を機能・価格・導入実績で比較して」「このデータから上位5つの傾向を抽出して」「提案書の構成案を作って」<br>→ 何をゴールにすればよいかが明確になる</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">3</div>
              <div class="step-body">
                <div class="step-title">ルール指定</div>
                <div class="step-desc">「箇条書き5点で」「です・ます調で」「Markdown の表形式で」「300字以内で」<br>→ そのまま使える形で出力が返ってくる</div>
              </div>
            </div>
          </div>

          <div class="tip-box">
            <strong>💡 最初から完璧でなくてよい</strong><br>
            まず簡潔に指示を出して、返ってきた出力を見て「もっと詳しく」「形式を変えて」と追加指示するのも有効です。1回で完璧を目指すより、対話で磨く方が速いことも多い。
          </div>

          <h3>「Claudeへの指示」で毎回の手間を減らす</h3>
          <p>毎回同じ前提（自分の役職、業界、好みのトーンなど）を書くのは面倒です。Claude には<strong>「Claudeへの指示」</strong>（設定 > 一般）という機能があり、全会話で自動的に参照される前提を登録できます。</p>
          <div class="example-box">
            <strong>📌 設定例</strong><br><br>
            「私は経営コンサルティングファームのシニアコンサルタントです。<br>
            出力はです・ます調、結論先行で。<br>
            根拠のない数字は使わないでください。」
          </div>

          <div class="try-box">
            <strong>✅ やってみよう</strong><br>
            1. 「競合分析して」を、3要素を満たす形に書き直して Claude に投げてみてください<br>
            2. 設定 > 一般 >「Claudeへの指示」に自分の前提を登録し、新しいチャットで「私についてどんな前提を持っていますか？」と聞いて反映を確認してください
          </div>
        `
      },

      // ========================================
      // 1-6: 出力を疑う・直す・責任を持つ
      // ========================================
      {
        title: '1-6. 出力を疑う・直す・責任を持つ',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>AI の出力は便利ですが、100%正しいとは限りません。出力を鵜呑みにせず、確認・修正・最終判断を行う姿勢を身につけます。これは Claude に限らず、すべての生成AIに共通する大切なスキルです。</p>

          <h3>AIの出力は「優秀な同僚の初稿」</h3>
          <p>Claude の出力は、優秀な同僚が素早く作ってくれた初稿だと考えてください。そのまま提出するのではなく、<strong>確認して、直して、自分の責任で仕上げる</strong>。このプロセスが重要です。</p>

          <div class="visual-flow">
            <div class="flow-step">
              <div class="flow-num">1</div>
              <div class="flow-label">指示する</div>
              <div class="flow-desc">Claude に依頼</div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <div class="flow-num">2</div>
              <div class="flow-label">確認する</div>
              <div class="flow-desc">事実・数字を裏取り</div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <div class="flow-num">3</div>
              <div class="flow-label">直す</div>
              <div class="flow-desc">追加指示で修正</div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <div class="flow-num">4</div>
              <div class="flow-label">仕上げる</div>
              <div class="flow-desc">自分の責任で提出</div>
            </div>
          </div>

          <h3>ハルシネーション（でっち上げ）に注意</h3>
          <p>生成AIは、事実と異なる内容をもっともらしく生成することがあります。これを「ハルシネーション」と呼びます。特に注意すべきポイントは以下の3つです。</p>

          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">🔢</div>
              <div class="grid-title">数字・統計</div>
              <div class="grid-desc">市場規模、成長率、シェアなど。もっともらしい数字を生成するが、出典が存在しないことがある</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">👤</div>
              <div class="grid-title">固有名詞</div>
              <div class="grid-desc">人名、社名、製品名。実在しない組織や人物を「ある」と回答することがある</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📖</div>
              <div class="grid-title">引用・出典</div>
              <div class="grid-desc">論文タイトルやURL。見た目はそれらしいが、存在しないページを示すことがある</div>
            </div>
          </div>

          <h3>ハルシネーションを減らすコツ</h3>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">🔍</div>
              <div class="grid-title">出典を求める</div>
              <div class="grid-desc">「根拠となるURLも示してください」と依頼する。出典が出てきたら、実際にアクセスして確認する</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🌐</div>
              <div class="grid-title">Web検索をONにする</div>
              <div class="grid-desc">最新情報や事実確認が必要なときは Web 検索を有効にする。検索結果に基づく回答は精度が上がる</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">✅</div>
              <div class="grid-title">重要情報は自分で照合</div>
              <div class="grid-desc">報告書に載せる数字、クライアント向けの事実は、必ず別途検索して裏取りする</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🚫</div>
              <div class="grid-title">「わからない」と言わせる</div>
              <div class="grid-desc">「確実でない場合は『不明』と答えてください」と指示すると、でっち上げが減る</div>
            </div>
          </div>

          <div class="visual-highlight-card">
            <p><strong>「任せる」と「丸投げ」は違う</strong>：Claude に任せるのは「初稿の作成」。判断・確認・最終仕上げは自分の仕事です。このバランスが、AI を安全かつ効果的に使うコツです。</p>
          </div>

          <div class="tip-box">
            <strong>💡 これは生成AI共通の習慣</strong><br>
            ハルシネーションはすべての生成AIに共通するリスクです。Claude 特有の問題ではありません。「出力を確認する」習慣を、業務での生成AI活用すべてに共通する基本動作として身につけてください。
          </div>
        `
      },

      // ========================================
      // 1-7: Project / Artifactで成果物にする
      // ========================================
      {
        title: '1-7. Project / Artifact で成果物にする',
        type: 'hands-on',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>Chat での対話を「その場限り」で終わらせず、<strong>案件の資産として蓄積し、成果物として残す</strong>方法を学びます。Project と Artifact を使うと、Claude の活用レベルが一段上がります。</p>

          <h3>Project — 案件ごとの「自分用Claude」</h3>
          <p>Project は、案件固有の背景情報・ルール・参照資料を Claude に覚えさせる仕組みです。一度設定すれば、その Project 内の全会話で自動的に参照されます。</p>

          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">Before：Projectなし</div>
              <p>毎回「私はITコンサルで、A社のERP導入案件を…」と入力</p>
              <p>→ 会話のたびに前提説明で手間がかかる</p>
            </div>
            <div class="ba-arrow">→</div>
            <div class="ba-item after">
              <div class="ba-label">After：Projectあり</div>
              <p>案件概要をProjectに登録済み。「今週のステータスをまとめて」だけで通じる</p>
              <p>→ すぐ本題から始められる</p>
            </div>
          </div>

          <h3>Projectの構成要素</h3>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">📝</div>
              <div class="grid-title">Instructions（指示文）</div>
              <div class="grid-desc">案件の背景、クライアント情報、出力ルール、禁止事項などを記述。全会話で自動参照される</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📚</div>
              <div class="grid-title">ナレッジベース</div>
              <div class="grid-desc">参照資料（PDF・Word・Excel等）をアップロード。Claude が内容を読んで回答に活用する</div>
            </div>
          </div>

          <div class="example-box">
            <strong>📌 Instructions の記述例</strong><br><br>
            「# B社 新商品ローンチ マーケティング戦略案件<br>
            - クライアント：B社（食品メーカー・健康志向の新ブランドを立ち上げ）<br>
            - フェーズ：戦略策定（市場調査・コンセプト確定済、メディアプラン策定中）<br>
            - 主要ステークホルダー：マーケティング本部 鈴木部長<br>
            - 出力ルール：結論先行、です・ます調、数字には出典を付ける<br>
            - 禁止：景品表示法・薬機法に抵触しうる表現（効果の断定・最大級表現）を使わないこと」
          </div>

          <div class="tip-box">
            <strong>💡 Instructions は徐々に育てる</strong><br>
            最初から完璧を目指す必要はありません。「毎回同じことを伝えているな」と気づいたら、その内容を Instructions に追加していきましょう。
          </div>

          <h3>Artifact — 会話から独立した成果物</h3>
          <p>Artifact は、チャットの中で生成される<strong>独立した成果物</strong>です。チャットの回答は会話の流れの中に埋もれますが、Artifact は別パネルに表示され、保存・編集・コピーができます。</p>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">📄</div>
              <div class="grid-title">文書・表</div>
              <div class="grid-desc">比較表、レポート、チェックリストなど。Markdown で構造化された文書</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">図表・チャート</div>
              <div class="grid-desc">Mermaid 図、フローチャート、組織図、プロセスマップ</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🖥️</div>
              <div class="grid-title">インタラクティブUI</div>
              <div class="grid-desc">簡易ダッシュボード、診断ツール、シミュレーター、画面モック。提案の論点を「プロトタイプ」として具体化</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔄</div>
              <div class="grid-title">バージョン管理</div>
              <div class="grid-desc">追加指示で修正するたびにバージョンが記録される。前の状態に戻すことも可能</div>
            </div>
          </div>

          <div class="info-box">
            <strong>🎨 Artifactギャラリーに「貯まるもの」と「貯まらないもの」</strong><br>
            Artifactとして生成され、サイドバーの「Artifact」一覧に貯まるのは、画面の中で開いて見られるもの——Markdown文書・図（Mermaid）・HTML／インタラクティブUI・コードなど。チャットで作るとそのまま一覧に登録され、あとから検索・再利用できる。<br><br>
            一方、PowerPoint・Word・Excel・PDF はダウンロードして開くファイルで、Artifact一覧には登録されない。これらは Office アドイン（1-9）や Cowork（1-13）で作る成果物。「ギャラリーに残るのは Markdown／図／HTML 系、Office ファイルはダウンロード」と覚えておけばOK。
          </div>

          <h3>Artifact の活用シーン</h3>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">🏓</div>
              <div class="grid-title">壁打ちの結果を図解</div>
              <div class="grid-desc">「今の議論をMermaid図で整理して」→ 論点の構造が一目でわかる</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📋</div>
              <div class="grid-title">比較表を成果物に</div>
              <div class="grid-desc">「この比較をArtifactの表にして」→ コピーしてそのまま資料に使える</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🖥️</div>
              <div class="grid-title">論点を「触れるもの」に</div>
              <div class="grid-desc">「この診断フローをインタラクティブなツールにして」→ 提案の説得力が上がる</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">データを可視化</div>
              <div class="grid-desc">「このデータをグラフ付きダッシュボードにして」→ 数字が直感的に伝わる</div>
            </div>
          </div>

          <div class="try-box">
            <strong>✅ やってみよう</strong><br>
            <strong>Project を作る：</strong><br>
            1. claude.ai >「プロジェクト」から新規プロジェクトを作成<br>
            2. Instructions に案件概要を記入し、参照資料をアップロード<br>
            3. 「この案件の論点を3つ整理して」と試す<br><br>
            <strong>Artifact を体験する：</strong><br>
            4. 「この内容を比較表のArtifactにして」と依頼<br>
            5. 「さらにMermaid図で全体像を可視化して」と追加指示<br>
            6. バージョン履歴で前の状態に戻せることを確認
          </div>

          <div class="visual-highlight-card">
            <p><strong>第1回前半のまとめ</strong>：ここまで学んだ Chat・Project・Artifact だけでも、日常業務の多くのシーンで Claude を活用できます。まずはこの3つを使いこなし、続く後半（Office・Research・Cowork）、第2回（Skills・MCP・Claude Code）へ進みましょう。</p>
          </div>
        `
      }
,


      // ========================================
      // 1-8: 成果物の種類を広げる
      // ========================================
      {
        title: '1-8. 成果物の種類を広げる',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>第1回の前半では Chat を使ったテキストのやり取りが中心でした。しかし Claude で作れるものは文章だけではありません。このセクションでは、Claude を使って作れる<strong>成果物の全体像</strong>を一覧し、「こんなものも作れるのか」という視野を広げます。</p>

          <h3>Claude で作れる成果物マップ</h3>
          <p>Claude で作れる成果物は、大きく6つのカテゴリに分かれます。</p>

          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">📝</div>
              <div class="grid-title">文書</div>
              <div class="grid-desc">議事録、報告書、提案メモ、メール、契約書レビュー</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">表</div>
              <div class="grid-desc">比較表、課題一覧、ToDo リスト、評価表、チェックリスト</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🎯</div>
              <div class="grid-title">スライド</div>
              <div class="grid-desc">構成案、スライド文言、ストーリーライン、役員向け要約</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔍</div>
              <div class="grid-title">調査レポート</div>
              <div class="grid-desc">市場調査、競合調査、業界動向、出典付き論点整理</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📈</div>
              <div class="grid-title">チャート</div>
              <div class="grid-desc">KPI 可視化、比較グラフ、簡易分析、傾向レポート</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🖥️</div>
              <div class="grid-title">プロトタイプ</div>
              <div class="grid-desc">診断ツール、シミュレーター、画面モック、簡易ダッシュボード</div>
            </div>
          </div>

          <h3>どの機能で何を作るか</h3>
          <p>成果物の種類によって、使う Claude の機能が異なります。以下のマッピングを頭に入れておくと、迷わず取りかかれます。</p>

          <div class="visual-mapping">
            <div class="mapping-header">
              <span class="mapping-from">作りたいもの</span>
              <span class="mapping-arrow"></span>
              <span class="mapping-to">使う機能</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">文書・表の下書き</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">Chat / Artifact</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">Excel 分析・加工</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">Claude in Excel</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">PowerPoint 構成・改善</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">Claude in PowerPoint</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">Word 要約・校正</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">Claude in Word</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">Web 調査・論点整理</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">Research</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">プロトタイプ（試作品）</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">Artifact（HTML/JS）</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">Web ページ要約・補助</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">Claude in Chrome</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">ファイルの一括処理</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">Cowork</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">定型業務の自動実行</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">Scheduled tasks</span>
            </div>
          </div>

          <h3>よくある誤解</h3>
          <div class="warning-box">
            <p><strong>「Claude = テキスト生成ツール」ではない</strong></p>
            <p>文章を書くだけのツールだと思われがちですが、表・チャート・インタラクティブなツールまで幅広い成果物を作れます。「これも Claude でできるかも？」と考える習慣が、活用の幅を広げる第一歩です。</p>
          </div>

          <div class="info-box">
            <p><strong>後半で学ぶ流れ</strong>：Office → Research → Artifact → Chrome → Cowork → Scheduled tasks の順に、それぞれの機能で何が作れるかを実践します。</p>
          </div>
        `
      },

      // ========================================
      // 1-9: Office アプリで Claude を使う — Excel / PowerPoint / Word
      // ========================================
      {
        title: '1-9. Office アプリで Claude を使う — Excel / PowerPoint / Word',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>Claude in Office を使うと、Excel・PowerPoint・Word の中で直接 Claude に指示が出せます。普段の Office 作業にAIを組み込むことで、分析・資料作成・文書校正の質とスピードを同時に上げられます。</p>

          <h3>インストール手順（PowerPoint アドインを研修中にセット）</h3>
          <p>普段使う Office アプリ（PowerPoint / Word / Excel）に Claude のアドインを追加すると、ファイルを開いたまま Claude を呼び出せるようになります。研修中は <strong>PowerPoint アドインを実際にインストール</strong>します。Word / Excel は同じ手順なので研修後にご自身で入れてください。</p>

          <div class="warning-box">
            <p><strong>⚠️ 利用前提</strong></p>
            <ul>
              <li>Claude のプラン：Pro / Max / Team / Enterprise（無料プランでは使えません）</li>
              <li>Word は 2026年4月公開のパブリックベータ版です</li>
              <li>Mac / Windows どちらでも使えます</li>
            </ul>
          </div>

          <h4>インストール対象アドイン</h4>
          <table class="info-table">
            <thead>
              <tr>
                <th>アドイン</th>
                <th>用途</th>
                <th>Marketplace URL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Claude for PowerPoint</strong></td>
                <td>スライド構成・改善</td>
                <td><a href="https://marketplace.microsoft.com/en-us/product/office/wa200010001" target="_blank" rel="noopener">marketplace.microsoft.com/.../wa200010001</a></td>
              </tr>
              <tr>
                <td><strong>Claude for Word</strong></td>
                <td>文書要約・校正・Tracked Changes</td>
                <td><a href="https://marketplace.microsoft.com/en-us/product/office/wa200010453" target="_blank" rel="noopener">marketplace.microsoft.com/.../wa200010453</a></td>
              </tr>
              <tr>
                <td><strong>Claude for Excel</strong></td>
                <td>データ分析・集計</td>
                <td><a href="https://marketplace.microsoft.com/en-us/product/saas/wa200009404" target="_blank" rel="noopener">marketplace.microsoft.com/.../wa200009404</a></td>
              </tr>
            </tbody>
          </table>

          <p>公式ヘルプ：<a href="https://support.claude.com/en/articles/13521390-use-claude-for-powerpoint" target="_blank" rel="noopener">PowerPoint</a> / <a href="https://support.claude.com/en/articles/14465370-use-claude-for-word" target="_blank" rel="noopener">Word</a> / <a href="https://support.claude.com/en/articles/12650343-use-claude-for-excel" target="_blank" rel="noopener">Excel</a></p>

          <h4>PowerPoint アドインのインストール手順（研修中に実施・約3〜5分）</h4>
          <div class="visual-steps">
            <div class="visual-step-item">
              <div class="step-marker">1</div>
              <div class="step-body">
                <div class="step-title">PowerPoint を起動</div>
                <div class="step-desc">PC にインストール済みのデスクトップアプリを開く</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">2</div>
              <div class="step-body">
                <div class="step-title">「ホーム」タブ → 「アドイン」をクリック</div>
                <div class="step-desc">または「挿入」タブ → 「アドインを取得」</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">3</div>
              <div class="step-body">
                <div class="step-title">ストア検索で「Claude」と入力</div>
                <div class="step-desc">候補の中から「Claude for PowerPoint」を探す</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">4</div>
              <div class="step-body">
                <div class="step-title">「Claude for PowerPoint」を「追加」</div>
                <div class="step-desc">表示されたボタンをクリックする</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">5</div>
              <div class="step-body">
                <div class="step-title">ライセンス条項に同意</div>
                <div class="step-desc">読んで「同意」をクリック</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">6</div>
              <div class="step-body">
                <div class="step-title">リボンに Claude アイコンが表示</div>
                <div class="step-desc">インストール完了後、PowerPoint の上部リボンに Claude アイコンが追加される</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">7</div>
              <div class="step-body">
                <div class="step-title">Microsoft 365 アカウントでサインイン</div>
                <div class="step-desc">Claude アイコンをクリックして、職場/学校アカウントで認証</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">8</div>
              <div class="step-body">
                <div class="step-title">Claude（Anthropic）アカウントでサインイン</div>
                <div class="step-desc">続けて、Claude のアカウント（claude.ai のログイン情報）で認証</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">9</div>
              <div class="step-body">
                <div class="step-title">サイドペインに Claude のチャット欄が表示</div>
                <div class="step-desc">表示されればインストール成功</div>
              </div>
            </div>
          </div>

          <h4>研修後：Word / Excel も同じ手順でインストール</h4>
          <p><strong>手順は PowerPoint とまったく同じ</strong>です。Word / Excel をそれぞれ起動して、上記の Step 1〜9 を繰り返してください。3つとも入れると、本セクションで紹介する Office 連携が全アプリで使えるようになります。</p>

          <div class="warning-box">
            <p><strong>⚠️ 各アプリで個別にインストールが必要</strong></p>
            <p>PowerPoint で入れても Word / Excel には自動で入りません。それぞれのアプリで同じ手順を行ってください。</p>
          </div>

          <h4>うまくいかないときの対処</h4>
          <ul>
            <li><strong>サインインできない</strong> → ブラウザの認証ポップアップがブロックされていないか確認してください</li>
            <li><strong>アイコンが表示されない</strong> → PowerPoint を再起動／「挿入」タブの「個人用アドイン」から確認してください</li>
          </ul>

          <div class="info-box">
            <strong>💡 Tips</strong><br>
            Claude は Excel / PowerPoint / Word をまたいで <strong>1つの会話で複数アプリを編集できます</strong>。たとえば PowerPoint で構成を作り → そのまま Word で配布資料化、といった流れがアプリ切り替えなしで進められます。
          </div>

          <h3>Claude in Excel — データを読み解く</h3>
          <p>Excel の中で Claude を呼び出し、データの分析や整理を依頼できます。計算式を書くのではなく、<strong>日本語で「このデータをどう読むか」を相談する</strong>感覚です。</p>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">データの傾向を読む</div>
              <div class="grid-desc">「このシートの売上推移から読み取れるポイントを3つ挙げて」とデータの示唆を引き出す</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔢</div>
              <div class="grid-title">集計観点を出す</div>
              <div class="grid-desc">「この顧客データを分析するとしたら、どんな軸で集計するのが有効か」と切り口を相談する</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📈</div>
              <div class="grid-title">グラフ化の方針を考える</div>
              <div class="grid-desc">「このデータを経営会議で見せるとしたら、どんなグラフが適切か」と可視化の方向を聞く</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">⚠️</div>
              <div class="grid-title">異常値・確認ポイントの洗い出し</div>
              <div class="grid-desc">「このデータに不自然な値や外れ値がないかチェックして」と品質チェックを依頼する</div>
            </div>
          </div>

          <h3>Claude in PowerPoint — 提案書を磨く</h3>
          <p>PowerPoint の中で Claude に指示を出し、スライドの構成や表現を改善できます。<strong>「何を伝えたいか」を日本語で伝えると、スライド単位で改善案を返してくれます。</strong></p>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">🏗️</div>
              <div class="grid-title">提案書の構成を作る</div>
              <div class="grid-desc">「この案件の提案書を10枚構成で作って。各スライドのタイトルとキーメッセージを提案して」</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">💬</div>
              <div class="grid-title">スライドタイトルを改善する</div>
              <div class="grid-desc">「このスライドのタイトルを、結論が伝わる一文に書き直して」</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🎯</div>
              <div class="grid-title">メッセージを明確にする</div>
              <div class="grid-desc">「このスライドで伝えたいことは何？」と問いかけ、1スライド1メッセージに整理する</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">👥</div>
              <div class="grid-title">読み手に合わせて表現を変える</div>
              <div class="grid-desc">「このスライドを役員向けに書き直して。技術用語を経営指標に置き換えて」</div>
            </div>
          </div>

          <h3>Claude in Word — 文書を整える</h3>
          <p>Word の中で Claude を呼び出し、文書の構成・文体・表現を改善できます。長い報告書や提案書の仕上げ作業に効果を発揮します。</p>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">📄</div>
              <div class="grid-title">長文資料を要約する</div>
              <div class="grid-desc">「この報告書を経営層向けに1ページで要約して。数字と結論を残して」</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">✍️</div>
              <div class="grid-title">文体を統一する</div>
              <div class="grid-desc">「この文書全体を『です・ます調』に統一して。箇条書きの粒度も揃えて」</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📑</div>
              <div class="grid-title">章立てを見直す</div>
              <div class="grid-desc">「この報告書の構成を、結論→背景→詳細→提案の順に並べ替えて」</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🏢</div>
              <div class="grid-title">クライアント向け表現に変換する</div>
              <div class="grid-desc">「社内メモをクライアント提出用に書き直して。敬語と表現の丁寧さを上げて」</div>
            </div>
          </div>

          <h3>Office連携の注意点</h3>
          <div class="warning-box">
            <p><strong>Office 連携は「相談相手」であり「自動実行ツール」ではない</strong></p>
            <p>Claude in Office は、ファイル内容について Claude と対話する機能です。Chat と同じく、出力を鵜呑みにせず確認してから適用してください。特に数値データの分析結果は、元データと照合する習慣をつけましょう。</p>
          </div>

          <h3>アドインの履歴は「同じファイルを開いている間だけ」残ります</h3>
          <p>Office アドインのチャット履歴は、同じファイルを開いている間は保持されますが、アプリを閉じるとリセットされます。仕様は以下のとおりです。</p>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">✅</div>
              <div class="grid-title">同じファイルを開いている間</div>
              <div class="grid-desc">履歴は保持され、会話の続きから作業できます。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">❌</div>
              <div class="grid-title">PowerPointを閉じる/別ファイルを開く</div>
              <div class="grid-desc">履歴はリセットされ、過去の会話は復元できません。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">❌</div>
              <div class="grid-title">エクスポート機能なし</div>
              <div class="grid-desc">チャット内容をファイルとして保存・書き出す公式機能は提供されていません。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">❌</div>
              <div class="grid-title">クロスアプリ会話は消える</div>
              <div class="grid-desc">複数アプリを同時に使った会話は、セッション終了で残りません。</div>
            </div>
          </div>

          <h4>大事な内容を残す方法</h4>
          <table class="info-table">
            <thead>
              <tr>
                <th>方法</th>
                <th>内容</th>
                <th>向く場面</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>その場で残す</strong></td>
                <td>チャット欄から内容をコピーして Word やメモに貼り付ける</td>
                <td>一時的な記録</td>
              </tr>
              <tr>
                <td><strong>ナレッジに移す</strong></td>
                <td>claude.ai 本体の Project に持ち込んで続きを検討する（第1回 1-7 で学習）</td>
                <td>案件のナレッジとして残したい</td>
              </tr>
            </tbody>
          </table>

          <div class="info-box">
            <strong>💡 棲み分けのコツ</strong><br>
            アドインは「下書き・即時のヘルプ」、深い検討やナレッジ化は claude.ai の Project に持ち込む。この棲み分けが、Claude を業務で安定して使うコツです。
          </div>

          <div class="info-box">
            <strong>📦 さらに高度な使い方は第2回で</strong><br>
            うまくいった「指示の型化」や「定型ワークフローの再利用」は第2回で扱います。
          </div>

          <h3>スライドは「いきなり完成形」を作らせない — 段階生成のコツ</h3>
          <p>「提案書を10枚作って」と一気に依頼すると、見た目は整っていても<strong>論点・ストーリー・意思決定への接続が弱い</strong>スライドが返ってきがちです。次の順で段階的に作らせ、各段階で人がレビューします。</p>

          <div class="visual-steps">
            <div class="visual-step-item">
              <div class="step-marker">1</div>
              <div class="step-body">
                <div class="step-title">構成案を作る</div>
                <div class="step-desc">「この案件で意思決定者に伝えるべき論点を洗い出し、10枚のストーリーラインを提案して」</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">2</div>
              <div class="step-body">
                <div class="step-title">1枚ごとのキーメッセージを作る</div>
                <div class="step-desc">「各スライドのタイトルとキーメッセージを、結論が伝わる一文で書いて」</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">3</div>
              <div class="step-body">
                <div class="step-title">図表案・本文を作る</div>
                <div class="step-desc">「各スライドのキーメッセージを支える図表案・本文を提案して。出典が必要なら明記して」</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">4</div>
              <div class="step-body">
                <div class="step-title">レビュー観点で点検する</div>
                <div class="step-desc">「論理飛び・数字根拠・読み手目線・1スライド1メッセージの観点でレビューして」</div>
              </div>
            </div>
          </div>

          <div class="info-box">
            <p><strong>提案資料は見た目より「論点・ストーリー・意思決定への接続」</strong>。デザインを整える前に、伝えたい論点と読み手の意思決定にどうつながるかを揃えるのが先です。うまくいった生成手順自体は、第2回の Skills 化対象として再利用できます。</p>
          </div>
        `
      },

      // ========================================
      // 1-10: Research で調査する
      // ========================================
      {
        title: '1-10. Research で調査する',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>Research は、Claude に Web 上の情報を調べてもらう機能です。通常の Web 検索と異なり、<strong>複数の情報源を横断して調査し、要点をまとめ、出典付きで報告してくれます</strong>。単なる情報収集ではなく、提案や意思決定に使える示唆に変換する力が Research の価値です。</p>

          <h3>Research が力を発揮する場面</h3>
          <p>以下のような場面で、手動の検索よりも効率的に、かつ構造化された結果が得られます。</p>

          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">🏭</div>
              <div class="grid-title">市場調査</div>
              <div class="grid-desc">「○○業界の市場規模と成長率を、直近3年の推移とともにまとめて」</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🏢</div>
              <div class="grid-title">競合調査</div>
              <div class="grid-desc">「A社・B社・C社のクラウドサービスを、価格・機能・導入実績で比較して」</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📰</div>
              <div class="grid-title">業界動向整理</div>
              <div class="grid-desc">「○○業界で直近半年に起きた主要な動きを時系列でまとめて」</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📚</div>
              <div class="grid-title">事例収集</div>
              <div class="grid-desc">「DX推進の成功事例を業界別に3つずつ、施策と効果をまとめて」</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📎</div>
              <div class="grid-title">出典付き論点整理</div>
              <div class="grid-desc">「○○に関する賛否両論を、出典を明記してそれぞれ3つずつ挙げて」</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">💡</div>
              <div class="grid-title">調査からの示唆出し</div>
              <div class="grid-desc">「上記の調査結果から、当社にとっての機会とリスクを整理して」</div>
            </div>
          </div>

          <h3>Research と通常の Web 検索の違い</h3>
          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">通常の Web 検索</div>
              <ul>
                <li>検索キーワードを自分で考える</li>
                <li>複数サイトを1つずつ開いて読む</li>
                <li>情報の取捨選択は自分で行う</li>
                <li>整理・まとめ作業も自分で行う</li>
              </ul>
            </div>
            <div class="ba-arrow">→</div>
            <div class="ba-item after">
              <div class="ba-label">Research</div>
              <ul>
                <li>調査の目的を日本語で伝える</li>
                <li>複数の情報源を自動で横断調査</li>
                <li>関連情報を抽出・要約して報告</li>
                <li>出典付きで構造化された結果を返す</li>
              </ul>
            </div>
          </div>

          <h3>Research を使いこなすコツ</h3>
          <div class="visual-steps">
            <div class="visual-step-item">
              <div class="step-marker">1</div>
              <div class="step-body">
                <div class="step-title">調査の目的を明確に伝える</div>
                <div class="step-desc">「○○について調べて」ではなく「○○の導入を検討するために、コスト・効果・リスクを比較したい」と目的を伝えると、的を絞った調査結果が返ります。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">2</div>
              <div class="step-body">
                <div class="step-title">出力形式を指定する</div>
                <div class="step-desc">「比較表で」「時系列で」「賛否両論を分けて」など、どんな形で結果が欲しいかを指示すると、そのまま資料に使える形で返ります。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">3</div>
              <div class="step-body">
                <div class="step-title">出典を確認する習慣をつける</div>
                <div class="step-desc">Research は出典付きで報告してくれますが、そのリンクが正確かは必ず確認してください。重要な数値や事実は、元の情報源に戻って裏取りしましょう。</div>
              </div>
            </div>
          </div>

          <h3>注意点</h3>
          <div class="warning-box">
            <p><strong>Research は「初稿を作る助手」であり「確定情報の提供者」ではない</strong></p>
            <p>調査結果はあくまで出発点です。出典のURLが無効なケースや、情報が古いケースもあります。クライアントに提出する調査レポートの場合は、必ず一次情報に当たって確認してください。</p>
          </div>

          <h3>調査結果を「示唆・提案」に変換する</h3>
          <p>Research の出力は情報の山です。そのままでは資料になりません。<strong>「この情報から何が言えるか」「クライアントの意思決定にどうつながるか」</strong>まで Claude に考えさせて、初めて使える形になります。</p>

          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">情報収集で止まる</div>
              <ul>
                <li>「○○業界の動向を調べて」だけで終わる</li>
                <li>調査結果が箇条書きの山で止まる</li>
                <li>クライアントの論点に結びつかない</li>
              </ul>
            </div>
            <div class="ba-arrow">→</div>
            <div class="ba-item after">
              <div class="ba-label">示唆まで変換する</div>
              <ul>
                <li>「上の調査から、当社にとっての機会・脅威を3つずつ整理して」</li>
                <li>「クライアントの意思決定に必要な論点を、推奨アクション付きで」</li>
                <li>調査→示唆→提案の流れまで一気に進める</li>
              </ul>
            </div>
          </div>

          <h3>他ツールとの併用 — NotebookLM など</h3>
          <p>大量の社内資料・PDF・録音文字起こしなどをまとめて把握したい場面では、<strong>NotebookLM のような「資料に紐付いた回答」を返すツールとの併用</strong>も有効な選択肢です。役割分担の目安：</p>

          <div class="visual-mapping">
            <div class="mapping-header">
              <span class="mapping-from">やりたいこと</span>
              <span class="mapping-arrow"></span>
              <span class="mapping-to">適したツール</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">Web 横断調査・出典付きレポート</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">Claude の Research</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">手元の大量資料を読ませて Q&amp;A・図解化</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">NotebookLM など資料連動型ツール</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">調査 → 示唆 → 提案 → スライド生成</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">Claude（Chat / Artifact / Skills を組み合わせ）</span>
            </div>
          </div>
        `
      },

      // ========================================
      // 1-11: Artifact で「プロトタイプ」を作る
      // ========================================
      {
        title: '1-11. Artifact で「プロトタイプ」を作る',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>前半で Artifact の基本を学びました。ここではさらに一歩進んで、<strong>実際に操作できる「プロトタイプ」</strong>を Artifact で作る方法を学びます。診断ツール、シミュレーター、ダッシュボードなど、提案やプロジェクトの論点を具体化するための試作品です。</p>

          <h3>「プロトタイプ」とは</h3>
          <p>文書や表とは違い、<strong>ユーザーが操作して結果が変わる成果物</strong>のことです。Claude の Artifact は HTML・CSS・JavaScript を生成でき、ブラウザ上でそのまま動作します。</p>

          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">🩺</div>
              <div class="grid-title">診断ツール</div>
              <div class="grid-desc">質問に回答すると結果が表示される。例：IT成熟度診断、業務改善優先度診断</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🧮</div>
              <div class="grid-title">シミュレーター</div>
              <div class="grid-desc">数値を変えると結果が連動する。例：コスト試算、ROI計算、料金プラン比較</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">ダッシュボード</div>
              <div class="grid-desc">データを視覚的に一覧表示。例：KPIモニター、プロジェクト進捗一覧</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🖼️</div>
              <div class="grid-title">画面モック</div>
              <div class="grid-desc">システムの画面イメージを実物に近い形で表示。認識合わせに使う</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔀</div>
              <div class="grid-title">業務フロー可視化</div>
              <div class="grid-desc">業務プロセスをインタラクティブに表示。ボトルネック箇所をハイライト</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📋</div>
              <div class="grid-title">入力フォーム型ツール</div>
              <div class="grid-desc">入力欄に情報を入れると整形された出力が得られる。例：見積書ジェネレーター</div>
            </div>
          </div>

          <h3>なぜ「プロトタイプ」が提案に効くのか</h3>
          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">スライドだけの提案</div>
              <ul>
                <li>「こういう仕組みを作ります」と文字で説明</li>
                <li>クライアントはイメージしにくい</li>
                <li>認識のずれが後工程で発覚する</li>
              </ul>
            </div>
            <div class="ba-arrow">→</div>
            <div class="ba-item after">
              <div class="ba-label">プロトタイプを添えた提案</div>
              <ul>
                <li>実際に操作して体験してもらう</li>
                <li>「これがやりたいことです」が一瞬で伝わる</li>
                <li>認識のずれを提案段階で修正できる</li>
              </ul>
            </div>
          </div>

          <h3>作り方の基本フロー</h3>
          <div class="visual-steps">
            <div class="visual-step-item">
              <div class="step-marker">1</div>
              <div class="step-body">
                <div class="step-title">目的と使う場面を伝える</div>
                <div class="step-desc">「クライアントに IT 成熟度を自己診断してもらうツールを作りたい」のように、誰が・何のために使うかを伝えます。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">2</div>
              <div class="step-body">
                <div class="step-title">Artifact で試作品を生成する</div>
                <div class="step-desc">Claude が HTML/CSS/JavaScript の Artifact を生成します。その場で動作するので、すぐに操作して確認できます。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">3</div>
              <div class="step-body">
                <div class="step-title">操作して修正を繰り返す</div>
                <div class="step-desc">「質問項目を5つに増やして」「結果にグラフを追加して」と追加指示を出して、完成度を上げます。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">4</div>
              <div class="step-body">
                <div class="step-title">HTML をダウンロードして共有する</div>
                <div class="step-desc">完成した Artifact は HTML ファイルとしてダウンロードし、ブラウザで開くだけで使えます。</div>
              </div>
            </div>
          </div>

          <h3>重要な注意点</h3>
          <div class="warning-box">
            <p><strong>「プロトタイプ」は試作品であり、本番システムではない</strong></p>
            <p>Artifact で作るものはあくまで<strong>提案やプロジェクトの論点を具体化するための「たたき台」</strong>です。クライアントに見せる際は「これは認識合わせのための試作品です」と必ず説明してください。本番システムの開発は別途エンジニアリングが必要です。</p>
          </div>

          <div class="info-box">
            <p><strong>Artifact にはデータを保存する仕組みがない</strong>ため、入力したデータはページを閉じると消えます。実データを扱う場合はこの点をクライアントに伝えておきましょう。</p>
          </div>
        `
      },

      // ========================================
      // 1-12: Chrome でブラウザ作業を支援する
      // ========================================
      {
        title: '1-12. Chrome でブラウザ作業を支援する',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>Claude in Chrome は、ブラウザ上で Claude を呼び出せる拡張機能です。Web ページを見ながら、その場で要約・分析・情報整理を依頼できます。調査作業やブラウザ上の作業を効率化する「もう一人の目」として活用します。</p>

          <h3>Chrome 拡張で できること</h3>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">📄</div>
              <div class="grid-title">Web ページの要約</div>
              <div class="grid-desc">長い記事やレポートを開いた状態で「このページを3行で要約して」と依頼。要点だけを素早く把握できる</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔍</div>
              <div class="grid-title">情報収集の補助</div>
              <div class="grid-desc">競合サイトや製品ページを見ながら「このサービスの特徴を5つ抜き出して」と指示。手動で読み込む手間を省く</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">✏️</div>
              <div class="grid-title">入力作業の補助</div>
              <div class="grid-desc">フォーム入力や文章作成時に Claude に相談。「このメールの返信案を作って」とその場で下書きを生成</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">⚖️</div>
              <div class="grid-title">複数サイトの比較</div>
              <div class="grid-desc">複数のサービスページを調べた後、「さっき見た3つのサービスの比較表を作って」と整理を依頼</div>
            </div>
          </div>

          <h3>具体的な活用シーン</h3>
          <div class="visual-steps">
            <div class="visual-step-item">
              <div class="step-marker">1</div>
              <div class="step-body">
                <div class="step-title">提案準備の調査</div>
                <div class="step-desc">クライアントの IR 資料や業界レポートを開き、「この資料の要点を、売上・利益・戦略の3軸でまとめて」と依頼する。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">2</div>
              <div class="step-body">
                <div class="step-title">競合サービスの比較</div>
                <div class="step-desc">競合3社の製品ページをそれぞれ要約し、「この3つを機能・価格・サポートで比較する表を作って」と整理する。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">3</div>
              <div class="step-body">
                <div class="step-title">日常のブラウザ作業の効率化</div>
                <div class="step-desc">長いメールやチャットの要約、Webフォームの入力補助、英語ページの翻訳など、日常的なブラウザ作業をその場で支援してもらう。</div>
              </div>
            </div>
          </div>

          <h3>注意点</h3>
          <div class="warning-box">
            <p><strong>機密情報・個人情報が含まれるページでは慎重に</strong></p>
            <p>Chrome 拡張を使うと、表示中のページ内容が Claude に送信されます。クライアントの機密情報や個人情報が含まれるページ（社内システム、顧客管理画面等）では、<strong>送信してよい情報かどうか</strong>を判断してから使ってください。</p>
          </div>

          <div class="info-box">
            <p>Chrome 拡張の Chat は claude.ai の Chat と同じですが、<strong>Project の自動参照やファイルアップロードはできません</strong>。複雑な作業には claude.ai を直接使いましょう。</p>
          </div>
        `
      },

      // ========================================
      // 1-13: Cowork でファイル作業を任せる
      // ========================================
      {
        title: '1-13. Cowork でファイル作業を任せる',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>Cowork の<strong>「フォルダごと渡して、ファイルを直接読み書きさせる」</strong>使い方を理解し、Chat との違いを踏まえてファイル作業を任せられるようになります。Cowork は Claude のデスクトップアプリで使えるモードです。</p>

          <h4>データの置き場所が違う：クラウド型（Chat）と ローカル型（Cowork）</h4>
          <p>Chat と Cowork の根っこの違いは「ファイルをどこに置いて読ませるか」。</p>
          <ul>
            <li><strong>Chat＝クラウド型</strong>：ファイルをクラウドにアップロードし、それを Claude が読む。「アップロードする」というワンクッションが要る。</li>
            <li><strong>Cowork＝ローカル型</strong>：ファイルは自分の PC に置いたまま、そのフォルダへのアクセスを許可して Claude が直接読む。アップロードのワンクッションがなく、フォルダの中身をまとめて扱える。</li>
          </ul>
          <p>だから、案件の前提資料やナレッジを手元のフォルダに置いておけば、毎回アップロードし直さなくても、必要なときに Claude がそこを参照する。中身は自分でいつでも確認・編集できるので、常に最新に保てる。</p>

          <h3>Chat との決定的な違い — フォルダに直接アクセスできる</h3>
          <p>Chat は「テキストで対話」する場で、ファイルは1つずつ<strong>添付</strong>し、結果はコピーやダウンロードで持ち出す“持ち込み・持ち出し”型です。1回で渡しきれるタスクに向きます。</p>
          <p>Cowork は<strong>作業フォルダごと Claude に渡し、その中のファイルを直接ひらいて読み・加工し、新しいファイルとして書き出せます</strong>。アップロードとダウンロードの往復がいらないのが最大の違いです（単発なら従来どおり添付でも構いません）。</p>

          <div class="visual-highlight-card">
            <p><strong>💡 ここが非エンジニアにとっての大きなメリット</strong>：コードもコマンドも書かずに、手元のフォルダにあるファイル群（Excel・Word・PowerPoint・PDF など）をそのまま読ませ、成果物も同じフォルダに作らせられます。「ファイルを触る作業」を丸ごと任せられるのが Cowork の核心です。</p>
          </div>

          <h3>Chat と Cowork の使い分け</h3>
          <table class="info-table">
            <thead>
              <tr>
                <th>観点</th>
                <th>💬 Chat</th>
                <th>📂 Cowork</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ファイルの渡し方</td>
                <td>1つずつ添付</td>
                <td>フォルダごと接続</td>
              </tr>
              <tr>
                <td>ファイル操作</td>
                <td>添付したものを読む</td>
                <td>フォルダ内を直接 読む・作る・書き換える</td>
              </tr>
              <tr>
                <td>成果物</td>
                <td>テキスト／Artifact をコピー</td>
                <td>フォルダにファイルとして出力</td>
              </tr>
              <tr>
                <td>向く場面</td>
                <td>壁打ち・下書き・要約</td>
                <td>複数ファイルの整理・加工・一括処理</td>
              </tr>
            </tbody>
          </table>

          <h3>Cowork が力を発揮する場面</h3>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">📁</div>
              <div class="grid-title">複数資料の整理</div>
              <div class="grid-desc">議事録複数、素材のまとめ、フォルダ内のファイル構成の確認</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">Excel の加工</div>
              <div class="grid-desc">複数シートのデータ統合、集計、異常値抽出</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📝</div>
              <div class="grid-title">Word・PowerPoint の下書き</div>
              <div class="grid-desc">議事録テンプレートへの入力、スライドドラフトの作成</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📋</div>
              <div class="grid-title">レポート初稿作成</div>
              <div class="grid-desc">複数資料を読んで初稿を一括で完成させる</div>
            </div>
          </div>

          <h3>Cowork の使い方の流れ</h3>
          <div class="visual-steps">
            <div class="visual-step-item">
              <div class="step-marker">1</div>
              <div class="step-body">
                <div class="step-title">フォルダを渡す</div>
                <div class="step-desc">作業用フォルダ（元ファイルのコピーを入れたもの）を Cowork に指定します。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">2</div>
              <div class="step-body">
                <div class="step-title">やってほしい作業を伝える</div>
                <div class="step-desc">「このフォルダの議事録を案件ごとに整理して」のように、成果物のイメージを伝えます。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">3</div>
              <div class="step-body">
                <div class="step-title">Claude が作業を実行する</div>
                <div class="step-desc">Claude がフォルダ内のファイルを直接読み取り、加工・作成します（離席してもOK）。作業中に確認の質問が来ることもあります。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">4</div>
              <div class="step-body">
                <div class="step-title">フォルダ内の成果物を確認する</div>
                <div class="step-desc">フォルダ内に出力された成果物を確認し、修正が必要なら追加指示を出します。</div>
              </div>
            </div>
          </div>

          <h3>注意点</h3>
          <div class="warning-box">
            <p><strong>作業用フォルダ（コピー）で使う</strong></p>
            <p>Cowork はフォルダ内のファイルを直接書き換えられるため、元データが上書きされるリスクがあります。<strong>元ファイルのコピーを入れた作業用フォルダ</strong>を渡してください。Cowork は Claude Desktop 専用です。</p>
          </div>

          <div class="warning-box">
            <p><strong>社内利用ルール（必ず守る）</strong></p>
            <ul>
              <li><strong>操作はローカル環境に限定</strong>：BOX・Google ドライブなどの共有フォルダは探索・操作しません（現状、これらは Claude のエージェントからアクセスできません）。Cowork に渡すのはローカルの作業用フォルダのみにしてください。</li>
              <li><strong>アカウント管理は SSO で実施</strong>します。</li>
              <li><strong>個人情報・機密情報などの入力は禁止</strong>です。</li>
            </ul>
          </div>
        `
      },

      // ========================================
      // 1-14: 定型業務をScheduled tasks化する
      // ========================================
      {
        title: '1-14. 定型業務を Scheduled tasks 化する',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>毎週・毎日のように繰り返す作業はありませんか？ Scheduled tasks は、Claude に<strong>「この作業を毎週月曜にやっておいて」</strong>と予約できる機能です。自動化そのものが目的ではなく、「毎回同じようにやっている作業を Claude に任せられないか考える」という発想を身につけます。</p>

          <h3>Scheduled tasks に向いている業務</h3>
          <p>以下のような「繰り返し」「定型」「準備作業」に効果を発揮します。</p>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">📰</div>
              <div class="grid-title">毎週の業界ニュース収集</div>
              <div class="grid-desc">「毎週月曜朝に○○業界の主要ニュースを5件、要約付きでまとめて」</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📋</div>
              <div class="grid-title">定例会議前の確認事項整理</div>
              <div class="grid-desc">「毎週水曜の定例前に、先週の議事録から宿題の進捗を整理して」</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📝</div>
              <div class="grid-title">週次レポートの下書き</div>
              <div class="grid-desc">「毎週金曜に、今週のタスク完了状況をまとめたレポートの下書きを作って」</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔔</div>
              <div class="grid-title">タスクのリマインド</div>
              <div class="grid-desc">「毎朝、今日の期限のタスクを一覧で表示して」</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🏢</div>
              <div class="grid-title">定期的な競合情報チェック</div>
              <div class="grid-desc">「毎月1日に、A社・B社の新着プレスリリースをまとめて」</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">データ更新の確認</div>
              <div class="grid-desc">「毎週、共有フォルダ内の売上データが更新されているかチェックして」</div>
            </div>
          </div>

          <h3>設定の流れ</h3>
          <div class="visual-steps">
            <div class="visual-step-item">
              <div class="step-marker">1</div>
              <div class="step-body">
                <div class="step-title">自動化したい作業を特定する</div>
                <div class="step-desc">まず「毎回同じようにやっている作業」を洗い出します。完全に定型でなくても、「ほぼ毎回同じ手順」なら候補になります。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">2</div>
              <div class="step-body">
                <div class="step-title">Cowork で Scheduled task を作成する</div>
                <div class="step-desc">Cowork の中で「毎週月曜に○○を実行して」と指示すると、Claude がスケジュールを設定します。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">3</div>
              <div class="step-body">
                <div class="step-title">結果を確認・調整する</div>
                <div class="step-desc">最初の実行結果を確認し、「出力の形式を変えて」「対象範囲を広げて」など調整します。</div>
              </div>
            </div>
          </div>

          <h3>Scheduled tasks を考えるときの発想法</h3>
          <div class="visual-highlight-card">
            <p>自分の1週間を振り返って、<strong>「これ、毎回ほぼ同じことをやっているな」</strong>と感じる作業を3つ挙げてみてください。それが Scheduled tasks の候補です。</p>
          </div>

          <h3>注意点</h3>
          <div class="warning-box">
            <p><strong>結果を鵜呑みにしない</strong></p>
            <p>Scheduled tasks の出力も、Chat や Cowork と同様に「初稿」です。特にニュース収集や競合チェックの結果は、自分の目で確認してから利用してください。自動だからといって品質チェックを省略しないことが重要です。</p>
          </div>

          <div class="info-box">
            <p>Scheduled tasks は Cowork（デスクトップアプリ）の機能です。アプリが起動していなくても、設定したスケジュールに従って Claude が自動実行します。</p>
          </div>
        `
      },

      // ========================================
      // 1-15: よく使う手順を Skill にする（入門）
      // ========================================
      {
        title: '1-15. よく使う手順を Skill にする（入門）',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>Skill とは何かを理解し、資料作成やリサーチでの活用イメージを持ち、自分の繰り返し作業を1つ「型」にできるようになります。</p>

          <h3>Skill とは</h3>
          <p>毎回ほぼ同じ指示を打ち込んでいる作業はありませんか。「議事録をこの体裁で整えて」「この観点で競合を調べて」——こうした<strong>よく使う手順・指示・出力形式を「型」として保存し、いつでも呼び出して再利用できる機能</strong>が Skill です。一度作れば、次からは長いプロンプトを書き直さずに、その型を呼ぶだけで同じ品質のアウトプットが返ってきます。</p>
          <p>属人化しがちな「うまいやり方」を、誰でも同じ品質で再現できる形にできるのが Skill の価値です。</p>

          <h3>同じ Skill を Chat でも Cowork でも呼べる</h3>
          <p>つくった Skill は特定の場所に縛られず、同じ型をそのまま呼び出せます。たとえば「議事録フォーマット」Skill なら、次のように使えます。</p>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">💬</div>
              <div class="grid-title">Chat の場合</div>
              <div class="grid-desc">会議メモを貼り付けて「議事録フォーマットで整理して」と呼ぶ。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📂</div>
              <div class="grid-title">Cowork の場合</div>
              <div class="grid-desc">メモのファイルを渡して「議事録フォーマットで」と呼ぶ。</div>
            </div>
          </div>

          <p>どちらでも同じ型・同じ品質で仕上がります。一度つくれば、その都度作り直す必要がありません。</p>

          <h3>実務での活用例</h3>
          <p>特に効くのは「毎回フォーマットや観点が決まっている作業」です。</p>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">📝</div>
              <div class="grid-title">資料作成</div>
              <div class="grid-desc">
                ・議事録フォーマット（日付・参加者・決定事項・宿題・次回アジェンダの順、です・ます調で整える）<br>
                ・クライアント向け文体への変換（社内メモを提出用のトーンに整える）<br>
                ・提案書のレビュー観点チェック（決まった5観点で叩く）
              </div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔍</div>
              <div class="grid-title">リサーチ</div>
              <div class="grid-desc">
                ・競合・市場調査の型（「機能・価格・実績の観点で比較表に」「出典URL付きで」など枠組みを固定）<br>
                ・調査結果を示唆に変換する型（機会・脅威を3つずつ → 推奨アクションまで）
              </div>
            </div>
          </div>

          <p>毎回ゼロから長い指示を書き直す必要がなくなり、出力の品質も揃います。</p>

          <h3>どう作る？（基本）</h3>
          <p>難しく考えず、いつもの指示を「型」にするところから始めます。</p>
          <div class="visual-steps">
            <div class="visual-step-item">
              <div class="step-marker">1</div>
              <div class="step-body">
                <div class="step-title">繰り返している作業を1つ選ぶ</div>
                <div class="step-desc">「今週2回以上、似た指示を書いたな」というものが候補です。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">2</div>
              <div class="step-body">
                <div class="step-title">名前と「いつ使うか」を決める</div>
                <div class="step-desc">例：「議事録整形」＝会議メモを議事録にするとき。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">3</div>
              <div class="step-body">
                <div class="step-title">手順・ルール・出力形式を書く</div>
                <div class="step-desc">やる順番／守る文体・禁止事項／出力の形（見出し・項目・文字数）を書きます。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">4</div>
              <div class="step-body">
                <div class="step-title">一度試して直す</div>
                <div class="step-desc">実際のメモや資料で呼び出し、物足りない点を追記して育てます。</div>
              </div>
            </div>
          </div>
          <p>最初から完璧でなくてOK。使いながら少しずつ精度を上げていきます。</p>

          <div class="tip-box">
            <strong>💡 まずは1つだけ</strong><br>
            「今週、同じような指示を2回以上書いたな」という作業を1つ思い出してみてください。それが最初の Skill 候補です。完璧を目指さず、いつもの指示文をそのまま型にするところから始めれば十分です。
          </div>

          <div class="warning-box">
            <p><strong>ここでは「型にする」感覚をつかむだけ</strong></p>
            <p>どんな作業を Skill にすべきかの見極め、作った型の運用、チームでの共有・標準化といった本格的な作り方は、第2回の <strong>2-1</strong> でまとめて深掘りします。ここでは「繰り返しの手順は型にして再利用できる」というイメージを持てれば十分です。</p>
          </div>
        `
      },

      // ========================================
      // 第1回のまとめ
      // ========================================
      {
        title: '🏁 第1回のまとめ',
        type: 'lecture',
        content: `
          <h3>このセクションのゴール</h3>
          <p>第1回は「<strong>個人で仕事の初速を上げ、成果物を作る</strong>」がテーマでした。要点を振り返ります。</p>

          <h3>今回の要点</h3>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">🚀</div>
              <div class="grid-title">前半：仕事の初速を上げる</div>
              <div class="grid-desc">
                <ul>
                  <li><strong>基盤は Chat</strong> — まず Chat。壁打ち・下書き・要約から。</li>
                  <li><strong>プロンプト3要素</strong> — 前提・タスク・ルールで出力の質が決まる。</li>
                  <li><strong>出力は“初稿”</strong> — そのまま使わず確認・修正。最終責任は自分。</li>
                  <li><strong>Project / Artifact</strong> — 前提を保持し、成果物として残す。</li>
                </ul>
              </div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🏗️</div>
              <div class="grid-title">後半：成果物を作る</div>
              <div class="grid-desc">
                <ul>
                  <li><strong>使い分け</strong> — Office／Research／Artifact／Cowork を成果物に応じて選ぶ。</li>
                  <li><strong>Cowork</strong> — フォルダごと渡してファイル作業を委任する。</li>
                  <li><strong>Chrome / Scheduled tasks</strong> — ブラウザ作業を支援、定型業務を自動化。</li>
                  <li><strong>Skill</strong> — よく使う手順を型にして再利用（Chat・Cowork でも）。</li>
                </ul>
              </div>
            </div>
          </div>

          <h3>今日からやること（まず1つでOK）</h3>
          <div class="info-box">
            <ul>
              <li><strong>「Claudeへの指示」に前提を登録</strong> — 役職・業界・トーンを1回だけ。</li>
              <li><strong>担当案件で Project を1つ作る</strong> — Instructions に概要を書く。</li>
              <li><strong>成果物を1つ作る</strong> — Artifact か Cowork で。</li>
              <li><strong>Office アドインを1回使う</strong> — PowerPoint などを入れて試す。</li>
            </ul>
          </div>

          <h3>次回（第2回）へ</h3>
          <div class="visual-highlight-card">
            <p>第1回は「個人で速く・成果物を作る」。第2回は <strong>Skills・MCP・Claude Code・CLAUDE.md</strong> で「<strong>品質と再現性を上げ、チームに広げる</strong>」段階に進みます。</p>
          </div>
        `
      }
    ],

    // ========================================
    // クイズ（21問）
    // ========================================
    quiz: [
      {
        question: 'Claude の3つのモード（Chat / Cowork / Claude Code）について正しいものはどれですか？',
        options: ['全員が最初から Claude Code を使うべき', 'Cowork は対話専用のモード', 'Chat はすべての基盤で、迷ったらまず Chat を使う', 'Chat と Cowork は全く同じ機能'],
        correct: 2,
        explanation: 'Chat はすべての基盤です。Cowork はファイルを直接操作して成果物を作るモード、Claude Code は品質ルールの固定と高度な自動化のモード。迷ったら Chat から始めましょう。'
      },
      {
        question: 'プロンプトの3要素として正しい組み合わせはどれですか？',
        options: ['入力・処理・出力', '前提の共有・タスク定義・ルール指定', '質問・回答・確認', '要約・分析・報告'],
        correct: 1,
        explanation: '「前提の共有」で背景を伝え、「タスク定義」でゴールを明確にし、「ルール指定」で出力の形を決める。この3要素を意識するだけで出力の質が大きく上がります。'
      },
      {
        question: '「競合分析して」というプロンプトの改善として最も適切なものはどれですか？',
        options: ['「競合分析してください。お願いします」と丁寧にする', '「競合分析して。早く」と簡潔にする', '「ITコンサルとして、A社・B社・C社のクラウドERPを機能・価格・実績で比較。表形式で出力」と3要素を入れる', '「競合分析して。できるだけ詳しく」と量を増やす'],
        correct: 2,
        explanation: '前提（ITコンサル）・タスク（3社比較、比較軸の指定）・ルール（表形式で出力）の3要素を満たすことで、的確な出力が得られます。丁寧さや量の指定だけでは精度は上がりません。'
      },
      {
        question: 'Claude の出力に対する適切な姿勢はどれですか？',
        options: ['AIの出力は常に正確なので、そのまま使ってよい', '出力は「優秀な同僚の初稿」として、確認・修正・最終判断を行う', 'AIの出力は信用できないので使わない方がよい', '数字や固有名詞の確認は不要'],
        correct: 1,
        explanation: 'AI の出力は「優秀な同僚の初稿」です。そのまま使うのではなく、確認→修正→仕上げのプロセスを経て、自分の責任で最終成果物にします。'
      },
      {
        question: 'ハルシネーション（でっち上げ）について正しいものはどれですか？',
        options: ['Claude だけに発生する問題で、他の生成AI では起きない', '出典を求めれば必ず正確な情報が返ってくる', '数字・固有名詞・引用は特に注意が必要で、重要情報は自分で裏取りする', 'Web検索をONにすればハルシネーションは完全になくなる'],
        correct: 2,
        explanation: 'ハルシネーションはすべての生成AIに共通するリスクです。特に数字・固有名詞・引用元は確認が必要。Web検索ONで精度は上がりますが、重要情報は自分で照合する習慣が大切です。'
      },
      {
        question: 'Project の主な目的として最も適切なものはどれですか？',
        options: ['会話履歴を無限に保存する', '案件固有の背景・ルール・参照資料を保持し、毎回の前提説明を省略する', 'Claude の回答速度を上げる', 'チームメンバー全員の会話を閲覧する'],
        correct: 1,
        explanation: 'Project は案件固有の Instructions とナレッジベースを保持し、毎回同じ前提を伝え直す手間を省きます。Project 内の全会話で自動参照されるため、すぐ本題に入れます。'
      },
      {
        question: 'Artifact について正しいものはどれですか？',
        options: ['チャットの回答をコピーしたもの', '会話とは独立した成果物で、文書・図表・インタラクティブUIなどを生成できる', 'Artifact は画像生成専用の機能', 'Artifact は一度作ると修正できない'],
        correct: 1,
        explanation: 'Artifact は会話とは独立した成果物です。文書・表・図表・Webページ・ダッシュボードなどを生成でき、追加指示で修正するとバージョンが記録されます。'
      },
      {
        question: 'Chat で壁打ちをするときのコツとして適切なものはどれですか？',
        options: ['正解を1つだけ求める', '複数の切り口を出してもらい、気になるものを深掘りする', 'できるだけ短い質問にする', '壁打ちは Chat ではできない'],
        correct: 1,
        explanation: '壁打ちは「正解を求める」のではなく「考えを整理し、視野を広げる」使い方です。複数の切り口を出してもらい、「2番目を深掘りして」と会話を続けると効果的です。'
      },
      {
        question: 'Cowork と Claude Code について、第1回の時点で正しい理解はどれですか？',
        options: ['今すぐ全機能を使いこなす必要がある', 'Chat で十分なので、Cowork と Claude Code は不要', 'Chat をまず使いこなし、必要に応じて Cowork（後半）、Claude Code（第2回）へ進む', 'Cowork と Claude Code は同じ機能'],
        correct: 2,
        explanation: 'まずは Chat で壁打ち・下書き・要約をしっかり使いこなすことが大切です。ファイル作成が必要になったら Cowork、品質の固定が必要になったら Claude Code を学びましょう。'
      },
      {
        question: 'Excel に入った売上データの傾向を把握したい場合、最も適切な Claude の使い方はどれですか？',
        options: [
          'Claude in Excel でデータの傾向を読み取ってもらう',
          'Research で売上データの分析方法を調べる',
          'Artifact で売上ダッシュボードを作る',
          'Cowork に Excel をアップロードして集計してもらう'
        ],
        correct: 0,
        explanation: 'Excel 内のデータの傾向把握は、Claude in Excel でそのまま依頼するのが最も効率的です。「このデータから読み取れるポイントを3つ挙げて」のように、日本語で分析を依頼できます。'
      },
      {
        question: 'Research と通常の Web 検索の違いとして、最も適切な説明はどれですか？',
        options: [
          'Research は検索速度が速い',
          'Research は複数の情報源を横断し、構造化・出典付きで報告してくれる',
          'Research は有料の情報源にもアクセスできる',
          'Research は検索結果の正確性が保証されている'
        ],
        correct: 1,
        explanation: 'Research の強みは、複数の情報源を自動で横断調査し、要点を整理して出典付きで報告してくれる点です。ただし正確性の保証はなく、重要な情報は必ず一次情報に当たって確認する必要があります。'
      },
      {
        question: 'Artifact で作った「プロトタイプ」をクライアントに見せる際、必ず伝えるべきことは何ですか？',
        options: [
          '使用したプログラミング言語の説明',
          '「これは認識合わせのための試作品です」という位置づけ',
          'AI が作ったものなので品質は保証できないこと',
          'Artifact の使い方の技術的な説明'
        ],
        correct: 1,
        explanation: 'Artifact で作る「プロトタイプ」は、提案やプロジェクトの論点を具体化するための「たたき台」です。クライアントが本番システムだと誤解しないよう、試作品であることを必ず伝えましょう。'
      },
      {
        question: 'Chrome 拡張で Claude を使う際、注意すべきことは何ですか？',
        options: [
          'Chrome のバージョンが最新であること',
          '機密情報・個人情報が含まれるページでは送信内容を判断すること',
          '1日の使用回数に制限があること',
          'Chrome 拡張は英語ページにしか対応していないこと'
        ],
        correct: 1,
        explanation: 'Chrome 拡張を使うと、表示中のページ内容が Claude に送信されます。クライアントの機密情報や個人情報が含まれるページ（社内システム、顧客管理画面等）では、送信してよい情報かどうかを判断してから使ってください。'
      },
      {
        question: 'Chat と Cowork の違いとして、最も適切な説明はどれですか？',
        options: [
          'Chat は無料だが Cowork は有料',
          'Chat は対話でやり取りし、Cowork はファイルを渡して作業を委任する',
          'Chat は簡単な質問用で、Cowork は複雑な質問用',
          'Chat はブラウザ用で、Cowork はスマートフォン用'
        ],
        correct: 1,
        explanation: 'Chat はテキストで対話する使い方、Cowork はファイルを渡して加工・作成を委任する使い方です。Chat の出力は自分でコピーして使いますが、Cowork は成果物がファイルとして生成されます。'
      },
      {
        question: 'Cowork にファイルを渡す際のベストプラクティスはどれですか？',
        options: [
          '元ファイルをそのまま渡す（変更が即座に反映されるため）',
          '元ファイルのコピーを作ってから渡す',
          'ファイルを ZIP 圧縮してから渡す',
          'ファイルをPDFに変換してから渡す'
        ],
        correct: 1,
        explanation: 'Cowork は Claude がファイルを直接変更するため、意図しない変更が元ファイルに及ぶリスクがあります。作業用コピーを作ってから渡すことで、元のデータを安全に保てます。'
      },
      {
        question: 'Scheduled tasks に最も向いている業務はどれですか？',
        options: [
          '一度きりの大規模プレゼン資料作成',
          '毎週月曜に行う業界ニュースの収集と要約',
          '創造的なブレインストーミング',
          '初めて行う新規クライアントへの提案'
        ],
        correct: 1,
        explanation: 'Scheduled tasks は「繰り返し」「定型」「準備作業」に効果を発揮します。毎週同じように行う業界ニュース収集は典型的な好例です。一度きりの作業や、毎回異なる創造的な作業には Chat や Cowork の方が適しています。'
      },
      {
        question: '提案書の構成を考える際、Claude in PowerPoint でまずやるべきことは何ですか？',
        options: [
          'スライドのデザインテンプレートを選ぶ',
          '提案書の構成案を依頼し、各スライドのタイトルとキーメッセージを提案してもらう',
          '箇条書きを入力してから Claude に修正させる',
          '過去の提案書を全てアップロードする'
        ],
        correct: 1,
        explanation: 'まず全体の構成（何枚のスライドで、各スライドで何を伝えるか）を Claude に提案してもらうのが効果的です。構成が決まってから、各スライドの内容を詳細化していきましょう。'
      },
      {
        question: 'Research の結果をクライアント向け調査レポートに使う場合、最も重要な確認事項は何ですか？',
        options: [
          'Research が参照した情報源の数',
          '出典のURLが有効で、数値や事実が正確かの裏取り',
          'Research の実行にかかった時間',
          '調査結果の文字数が十分かどうか'
        ],
        correct: 1,
        explanation: 'Research は出典付きで報告してくれますが、URLが無効なケースや情報が古いケースもあります。クライアントに提出する調査レポートでは、必ず一次情報に当たって数値や事実を確認してください。'
      },
      {
        question: '次のうち、Artifact の「プロトタイプ」として作るのに最も適しているのはどれですか？',
        options: [
          '社内の人事管理システム',
          'クライアントとの認識合わせ用の IT 成熟度診断ツール',
          '本番運用する在庫管理データベース',
          '個人情報を扱う顧客登録フォーム'
        ],
        correct: 1,
        explanation: 'Artifact で作る「プロトタイプ」は、論点を具体化するための試作品です。認識合わせ用の診断ツールは好例です。本番システムや個人情報を扱う仕組みには Artifact は適しません。'
      },
      {
        question: 'Word で長い報告書をクライアント提出用に整える場合、Claude in Word の活用として適切な順序はどれですか？',
        options: [
          'デザインを整える → 文体を統一する → 内容を確認する',
          '章立てを見直す → 文体を統一する → クライアント向け表現に変換する',
          'クライアント向け表現に変換する → 章立てを見直す → 文体を統一する',
          '文体を統一する → デザインを整える → 章立てを見直す'
        ],
        correct: 1,
        explanation: 'まず全体の構成（章立て）を整理し、次に文体を統一し、最後にクライアント向け表現に仕上げるのが効率的です。構成が決まっていない段階で細かい表現を整えても、手戻りが発生します。'
      },
      {
        question: 'Scheduled tasks の出力について、正しい認識はどれですか？',
        options: [
          '自動実行なので人間のチェックは不要',
          'スケジュール通りに実行されれば品質は保証される',
          '自動実行の結果も Chat と同様に「初稿」として確認が必要',
          '一度正しく出力されれば、以降は確認不要'
        ],
        correct: 2,
        explanation: 'Scheduled tasks の出力も、Chat や Cowork と同様に「初稿」です。自動だからといって品質チェックを省略せず、自分の目で確認してから利用しましょう。特にニュース収集や競合チェックは、情報の鮮度や正確性を確認することが重要です。'
      }
    ],

    // ========================================
    // 練習問題
    // ========================================
    practices: [
      {
        section: '1-4. Chatで壁打ち・下書き・要約',
        title: '会議メモから論点整理を作る',
        task: '手元の会議メモ（なければ適当な長文メール）を Claude に添付し、「この内容を、決定事項・未決事項・宿題（担当者付き）に分けて整理してください」と依頼してみましょう。出力を確認し、足りない点があれば追加指示で修正してください。',
        hint: '出力形式を具体的に指定すると精度が上がります。「箇条書きで」「表形式で」など試してみましょう。'
      },
      {
        section: '1-4. Chatで壁打ち・下書き・要約',
        title: '提案の切り口を壁打ちする',
        task: '自分が関わっている（または想定する）案件について、「この案件に対する提案の切り口を5つ挙げて、それぞれのメリットとリスクを教えてください」と Claude に依頼してください。返ってきた5つのうち1つを選び、「この切り口をさらに深掘りして」と会話を続けてみましょう。'
      },
      {
        section: '1-5. 良い指示の出し方',
        title: 'プロンプト3要素で書き直す',
        task: '以下の雑なプロンプトを、3要素（前提の共有・タスク定義・ルール指定）を満たす形に書き直してから Claude に投げてください。\n\n悪い例：「競合分析して」\n\nヒント：あなたは何業界の何の案件で、どの競合の何を比較したいのか、出力はどういう形式が欲しいのか。',
        hint: '例：「あなたはITコンサルタントです。A社・B社・C社のクラウドERPサービスを、機能・価格・導入実績で比較してください。比較表（Markdown）で出力し、最後に推奨を1段落で述べてください。」'
      },
      {
        section: '1-5. 良い指示の出し方',
        title: '「Claudeへの指示」を設定する',
        task: 'claude.ai の設定 > 一般 >「Claudeへの指示」に、自分の前提情報を登録してください。\n新しいチャットで「私についてどんな前提を持っていますか？」と聞いて、反映されていることを確認しましょう。',
        hint: '例：「私は経営コンサルティングファームのシニアコンサルタントです。出力はです・ます調、結論先行で。」'
      },
      {
        section: '1-6. 出力を疑う・直す・責任を持つ',
        title: 'ハルシネーションを体験する',
        task: '「2024年の日本のSaaS市場規模を、出典付きで教えてください」を Claude に投げて、返ってきた数字と出典を別途検索して照合してください。\n次に Web 検索 ON で同じ質問を投げて、結果の違いを比較しましょう。',
        hint: '出典URLが実在するか、数字が正確かを確認してみてください。Web検索ONとOFFで精度がどう変わるかがポイントです。'
      },
      {
        section: '1-7. Project / Artifact で成果物にする',
        title: 'Projectを作成して壁打ちする',
        task: 'claude.ai >「プロジェクト」から新規プロジェクトを作成してください。\nInstructions に案件概要を記入し、参照資料があればアップロード。\n「この案件の論点を3つ整理して」と試してください。\nProjectなしの通常チャットとの応答の違いを比較してみましょう。'
      },
      {
        section: '1-7. Project / Artifact で成果物にする',
        title: 'Artifactで成果物を作る',
        task: 'Chat で壁打ちした内容や比較分析の結果を、Artifact として残してみましょう。\n\n1. 「この内容を比較表のArtifactにして」と依頼\n2. 「さらにMermaid図で全体像を可視化して」と追加指示\n3. バージョン履歴で前のバージョンに戻せることを確認'
      },
      {
        section: '1-7. Project / Artifact で成果物にする',
        title: 'インタラクティブなArtifactを作る',
        task: '業務で使えるインタラクティブな成果物を Claude に作ってもらいましょう。\n\n例：「クライアントの業務改善の優先度を診断するツールを作って。5つの質問に答えると、改善領域の優先度がチャートで表示される」\n\nArtifact内でクリック・入力ができることを確認してください。',
        hint: '診断ツール、シミュレーター、簡易ダッシュボード、画面モックなど。「提案の論点を触れる形にしたい」と伝えてみましょう。'
      },
      {
        section: '1-9. Office アプリで Claude を使う — Excel / PowerPoint / Word',
        title: 'Excel データの傾向を読み取る',
        task: '手元にある Excel データ（売上・顧客・アンケート等）を開き、Claude in Excel で以下を依頼してみましょう。\n\n1. 「このデータから読み取れる傾向を3つ挙げて」\n2. 返ってきた示唆の中から1つ選び、「この点をさらに深掘りして」と追加指示\n3. 最後に「経営会議で報告するとしたら、どんなグラフが適切か」と聞く',
        hint: 'データがない場合は、サンプルの売上データ（3ヶ月分・5商品程度）を自分で作ってから試しましょう。'
      },
      {
        section: '1-9. Office アプリで Claude を使う — Excel / PowerPoint / Word',
        title: 'PowerPoint のスライド構成を作る',
        task: '自分が関わっている（または想定する）案件について、Claude in PowerPoint で提案書の構成を依頼してください。\n\n1. 「この案件の提案書を8〜10枚構成で作って。各スライドのタイトルとキーメッセージを提案して」\n2. 構成が出たら、「3枚目のスライドを役員向けの表現に書き直して」と追加指示\n3. 「全体のストーリーラインを1文で表現して」とまとめを依頼',
        hint: '案件の背景（業界・課題・提案の方向性）を最初に伝えると、精度の高い構成が返ります。'
      },
      {
        section: '1-10. Research で調査する',
        title: '競合調査レポートを作成する',
        task: 'Research を使って、以下の手順で競合調査を行ってください。\n\n1. 自分が関わる業界の競合3社を選ぶ\n2. 「○○業界のA社・B社・C社について、主力サービス・価格帯・強みを調査して、比較表にまとめてください。出典も明記してください」と依頼\n3. 返ってきた比較表の出典URLを実際にクリックして、情報が正確かを確認\n4. 「この調査結果から、当社にとっての機会とリスクを整理して」と示唆を依頼',
        hint: '出典URLが無効だった場合や数値が不正確だった場合は、どこが間違っていたかをメモしておきましょう。Research の限界を理解することも重要です。'
      },
      {
        section: '1-11. Artifact で「プロトタイプ」を作る',
        title: 'IT 成熟度診断ツールを作る',
        task: 'Artifact を使って、クライアント向けの簡易診断ツールを作ってみましょう。\n\n1. 「クライアント企業のIT活用成熟度を5段階で診断するツールを作ってください。質問は5問で、回答に応じて総合スコアとアドバイスを表示してください」と依頼\n2. 生成された Artifact を実際に操作して回答してみる\n3. 「質問を1つ追加して」「結果にレーダーチャートを追加して」と修正指示を出す\n4. 完成したら HTML をダウンロードして、ブラウザで開けることを確認',
        hint: '「これは認識合わせのための試作品です」と伝えた上で、クライアントに見せることを想像して作りましょう。'
      },
      {
        section: '1-11. Artifact で「プロトタイプ」を作る',
        title: 'ROI シミュレーターを作る',
        task: 'Artifact を使って、提案の効果を試算するシミュレーターを作ってみましょう。\n\n1. 「DX推進による業務効率化のROIシミュレーターを作ってください。入力項目は、現在の作業時間、削減率、人件費単価の3つ。年間のコスト削減額とROIを自動計算して表示してください」と依頼\n2. 数値を変えて結果が連動することを確認\n3. 「入力値の妥当性チェック（マイナス値の排除等）を追加して」と品質を上げる\n4. 「結果をグラフでも表示して」とビジュアルを強化',
        hint: 'シミュレーターの計算ロジックが正しいか、自分で計算して照合してみましょう。'
      },
      {
        section: '1-12. Chrome でブラウザ作業を支援する',
        title: 'Web 調査を Chrome 拡張で効率化する',
        task: 'Chrome 拡張を使って、Web 調査を効率化してみましょう。\n\n1. 調査したいテーマ（業界動向・競合サービス等）のWebページを3つ開く\n2. 各ページで Claude に「このページの要点を3つにまとめて」と依頼\n3. 3つの要約を比較し、「この3つの情報源から、共通する傾向を整理して」と依頼',
        hint: '機密情報が含まれないページ（公開されているIR資料、プレスリリース等）で試しましょう。'
      },
      {
        section: '1-13. Cowork でファイル作業を任せる',
        title: 'Cowork で複数ファイルを整理する',
        task: 'Cowork を使って、複数ファイルの整理を委任してみましょう。\n\n1. 議事録・メモ・メールなどのファイルを3〜5件用意する（コピーを作る）\n2. Cowork にアップロードし、「これらの資料から、案件ごとの決定事項・未決事項・宿題を整理して」と依頼\n3. 出力を確認し、「表形式にまとめ直して」「宿題に期限を追加して」と追加指示',
        hint: '必ず元ファイルのコピーを使ってください。Cowork はファイルを直接変更する可能性があります。'
      },
      {
        section: '1-14. 定型業務を Scheduled tasks 化する',
        title: '自分の定型業務を洗い出す',
        task: 'Scheduled tasks の設定に入る前に、まず自動化の候補を洗い出してみましょう。\n\n1. 自分の1週間のルーティンを振り返り、「毎回ほぼ同じ手順でやっている作業」を5つ書き出す\n2. その中から、Claude に任せられそうなもの（情報収集・整理・下書き系）を2つ選ぶ\n3. 選んだ2つについて、「毎週○曜日に、○○を○○の形式でまとめて」というスケジュール指示文を書く\n4. 余力があれば、Cowork で実際に Scheduled task を1つ設定してみる',
        hint: '最初は頻度の高い小さな作業から始めましょう。「毎朝の業界ニュース要約」などが手軽な第一歩です。'
      }
    ],

    // ========================================
    // リンク集・FAQ
    // ========================================
    selfStudyResources: {
      links: [
        { title: 'Claude.ai（公式サイト）', url: 'https://claude.ai/', desc: 'Claude のチャット・Cowork はここからアクセス', category: '🚀 はじめる' },
        { title: 'Claude デスクトップアプリ ダウンロード', url: 'https://claude.com/download', desc: 'Mac / Windows 対応', category: '🚀 はじめる' },
        { title: 'Claude プロンプトライブラリ', url: 'https://docs.anthropic.com/en/prompt-library/library', desc: '用途別のプロンプト例を多数掲載', category: '📖 プロンプトを学ぶ' },
        { title: 'Claude Tips & Tricks（YouTube）', url: 'https://www.youtube.com/playlist?list=PLf2m23nhTg5VEz8sS0ORurJk3lBL7nB0V', desc: 'Anthropic 公式の使い方動画', category: '📖 プロンプトを学ぶ' },
        { title: 'Anthropic Cookbook', url: 'https://github.com/anthropics/anthropic-cookbook', desc: '実践的なユースケースとコード例', category: '📖 プロンプトを学ぶ' },
        { title: 'Anthropic 公式ドキュメント', url: 'https://docs.anthropic.com/', desc: 'Claude の技術仕様・機能一覧・ベストプラクティス', category: '📚 公式リファレンス' },
        { title: 'Claude サポートサイト', url: 'https://support.claude.com/', desc: 'Project・Artifact・各機能の使い方ガイド', category: '📚 公式リファレンス' },
        { title: 'Claude in Office（Anthropic 公式）', url: 'https://www.anthropic.com/claude-in-office', desc: 'Excel / PowerPoint / Word との連携ガイド', category: '💼 Officeで使う' },
        { title: 'Cowork 公式ドキュメント', url: 'https://docs.anthropic.com/en/docs/cowork', desc: 'Cowork の機能と使い方ガイド', category: '💼 Officeで使う' },
        { title: 'Claude in Chrome 拡張', url: 'https://chromewebstore.google.com/detail/claude/danfoobapigkipfachmebkhbhegkahpc', desc: 'Chrome 拡張のインストールページ', category: '🌐 Chromeで使う' },
        { title: 'Artifact ガイド', url: 'https://support.anthropic.com/en/articles/9487310-what-are-artifacts-and-how-do-i-use-them', desc: 'Artifact の使い方と活用例', category: '📚 公式リファレンス' },
        { title: 'Research 機能ガイド', url: 'https://support.anthropic.com/en/articles/10120029-how-does-research-work', desc: 'Research の仕組みと活用方法', category: '📚 公式リファレンス' },
        { title: 'Scheduled tasks ガイド', url: 'https://support.anthropic.com/en/articles/11053627-what-are-scheduled-tasks', desc: 'Scheduled tasks の設定方法', category: '📚 公式リファレンス' }
      ],
      faq: [
        { q: 'Claude ではまず何から使えばよいですか？', a: 'まずは Chat から始めましょう。壁打ち（論点整理）、下書き（メール・報告書の素案）、要約（長い文書を要点に絞る）の3パターンが最も使用頻度が高いです。慣れてきたら Project で案件の背景を登録し、Artifact で成果物を残すとさらに効率が上がります。', category: '💡 Claudeの基本' },
        { q: 'Chat / Cowork / Claude Code はどう使い分けますか？', a: '「対話で済むか？」→ Chat。「ファイルを直接作ってほしいか？」→ Cowork。「毎回同じ品質で繰り返したいか？」→ Claude Code。迷ったら Chat からで問題ありません。', category: '💡 Claudeの基本' },
        { q: 'Project とは何ですか？', a: 'Project は案件固有の背景情報・ルール・参照資料を Claude に覚えさせる仕組みです。Instructions（指示文）とナレッジベース（参照資料）を設定すると、その Project 内の全会話で自動参照されます。毎回同じ前提を説明し直す手間がなくなります。', category: '🖥️ Chat・Projects' },
        { q: 'Artifact とは何ですか？', a: 'Artifact は会話とは独立した成果物です。文書・表・図表・Webページ・ダッシュボードなどを生成でき、追加指示で修正するとバージョンが記録されます。チャットの回答は流れていきますが、Artifact は残ります。「これを Artifact にして」と依頼するか、Claude が自動的に生成します。', category: '🖥️ Chat・Projects' },
        { q: 'Cowork や Claude Code は最初から使うべきですか？', a: 'いいえ。まずは Chat で壁打ち・下書き・要約を使いこなすことが最優先です。ファイルを直接作ってほしい場面が出てきたら Cowork（後半）、品質の再現性が必要になったら Claude Code（第2回）を学びましょう。', category: '💡 Claudeの基本' },
        { q: 'Claude の出力をそのまま使ってよいですか？', a: 'そのまま提出することは推奨しません。Claude の出力は「優秀な同僚の初稿」です。特に数字・固有名詞・引用元は裏取りが必要です。確認→修正→仕上げのプロセスを経て、自分の責任で最終成果物にしてください。', category: '✍️ プロンプト・品質' },
        { q: 'プロンプトの3要素は必ず全部入れるべきですか？', a: '必ずしも全部必要ではありません。簡単な質問なら不要ですが、業務で精度の高い出力が欲しいときは3要素（前提の共有・タスク定義・ルール指定）を意識すると品質が上がります。まず簡潔に指示して、返ってきた出力を見て追加指示するやり方も有効です。', category: '✍️ プロンプト・品質' },
        { q: 'Claude in Office では具体的に何ができますか？', a: 'Excel ではデータの傾向分析・集計観点の提案・グラフ化方針の相談・異常値の洗い出し、PowerPoint では構成案の作成・タイトル改善・ストーリーライン整理、Word では要約・文体統一・章立て見直し・クライアント向け表現変換ができます。Office 内で直接 Claude と対話する形で利用します。', category: '💼 Office・Chrome' },
        { q: 'Research と通常の Web 検索の違いは何ですか？', a: 'Research は複数の情報源を自動で横断調査し、要点を構造化して出典付きで報告してくれます。通常の Web 検索は自分でキーワードを考え、各サイトを読み、情報を取捨選択・整理する必要があります。ただし Research の結果も「初稿」なので、重要な数値や事実は必ず一次情報に当たって確認してください。', category: '💡 Claudeの基本' },
        { q: 'Artifact で作る「プロトタイプ」とは何ですか？', a: '診断ツール、シミュレーター、ダッシュボード、画面モック、業務フロー可視化など、ユーザーが実際に操作できる成果物のことです。Artifact が HTML/CSS/JavaScript を生成し、ブラウザ上でそのまま動作します。提案やプロジェクトの論点を具体化する「たたき台」として活用します。', category: '💡 Claudeの基本' },
        { q: 'プロトタイプをクライアントに見せる際の注意点は？', a: '必ず「これは認識合わせのための試作品です」と伝えてください。Artifact で作るものは本番システムではなく、論点を具体化するためのたたき台です。データの保存機能がないこと、セキュリティ対策が施されていないことなどを説明し、本番開発は別途必要であることを明確にしましょう。', category: '✍️ プロンプト・品質' },
        { q: 'Chrome 拡張を使う際の注意点は？', a: 'Chrome 拡張を使うと、表示中のページ内容が Claude に送信されます。クライアントの機密情報や個人情報が含まれるページ（社内システム、顧客管理画面等）では、送信してよい情報かどうかを判断してから使ってください。また、Project の自動参照やファイルアップロードは Chrome 拡張では使えません。', category: '💼 Office・Chrome' },
        { q: 'Cowork はどのような作業に向いていますか？', a: '複数資料の整理、Excel の加工、Word・PowerPoint の下書き、ファイル構成の確認、レポートの初稿作成など、ファイルを直接扱う作業に向いています。Chat が「対話で相談する」のに対し、Cowork は「作業を委任する」イメージです。作業用コピーを作ってから渡すことをお勧めします。', category: '📂 Cowork' },
        { q: 'Scheduled tasks はどのような業務に使えますか？', a: '毎週の業界ニュース収集、定例会議前の確認事項整理、週次レポートの下書き、タスクのリマインド、定期的な競合情報チェックなど、「繰り返し」「定型」「準備作業」に効果を発揮します。「毎回同じようにやっている作業」を洗い出し、Claude に任せられないか考えてみてください。', category: '📂 Cowork' },
        { q: 'Claude で作った成果物はそのまま提出してよいですか？', a: '第1回の復習になりますが、どの機能で作った成果物も「優秀な同僚の初稿」です。特に Research の数値・出典、Artifact の計算ロジック、Office 連携の分析結果は、自分で確認してから使ってください。成果物の最終責任は常に自分にあります。', category: '✍️ プロンプト・品質' },
        { q: 'スライド生成を Claude に任せる時のコツは何ですか？', a: 'いきなり「10枚作って」と任せると、見た目は整っても論点・ストーリーが弱くなりがちです。次の順で段階的に作らせるのがコツです：(1) 構成・ストーリーラインを作る、(2) 1枚ごとのキーメッセージを作る、(3) 図表案・本文を作る、(4) 論理飛び・数字根拠・読み手目線で点検する。各段階で人がレビューし、デザインは最後に整えます。うまくいった生成手順自体は Skill 化して再利用すると効率的です。', category: '✍️ プロンプト・品質' },
        { q: 'NotebookLM など他のAIツールと Claude はどう併用できますか？', a: '役割分担で考えると整理しやすいです。Web 横断調査・出典付きレポートは Claude の Research、手元の大量資料を読ませて Q&A・図解化する用途は NotebookLM のような資料連動型ツール、調査→示唆→提案→スライド化の一連の流れは Claude（Chat / Artifact / Skills の組み合わせ）が向きます。「すべて Claude」ではなく、得意分野で使い分けるのが効率的です。', category: '💡 Claudeの基本' }
      ]
    }
  },

  // ============================================================
  // 第2回：品質と再現性を上げる
  // ============================================================
  {
    id: 'session-2',
    title: '第2回：品質と再現性を上げる',
    shortTitle: '第2回',
    description: 'Claude活用を個人の便利技で終わらせず、チームで再現性高く使うための仕組みを作る',
    target: '第1回 完了者',
    duration: '自分のペースで',
    prereq: '第1回 完了',
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    objectives: [
      'Skills で業務手順を型化し、チームで再利用できる',
      'MCP / Connectors で社内ナレッジを Claude に接続できる',
      'Claude Code で複数ファイル・データ処理・ツール作成を任せられる',
      'Claude Code を Desktop / CLI / IDE で使い分け、実践TIPSやショートカットで効率化できる',
      'CLAUDE.md / Hooks / Subagents で品質を固定できる',
      '個人の便利技をチームに展開できる'
    ],
    coverGroups: [
      { label: '第1回の復習', icon: '🔁', sections: [0], objectives: ['第1回の要点と Skills の基礎を振り返る'] },
      { label: '型化と接続', icon: '🧩', sections: [1, 2], objectives: ['Skillsで業務手順を型にして再利用する', 'MCP / Connectorsで社内ナレッジを安全につなぐ'] },
      { label: 'Claude Codeで任せる', icon: '💻', sections: [3, 4], objectives: ['Claude Codeで高度な作業を安全に任せられる', '実践TIPS・ショートカットで効率化できる'] },
      { label: '品質とチーム展開', icon: '✅', sections: [5, 6], objectives: ['CLAUDE.md / Hooks / Subagentsで品質を固定する', 'チームに展開し組織で品質を上げる'] }
    ],
    sections: [

      // ========================================
      // 第1回の復習
      // ========================================
      {
        title: '🔁 第1回の復習',
        type: 'lecture',
        content: `
          <h3>このセクションのゴール</h3>
          <p>第1回で身につけた「初速の出し方」と「成果物の作り方」、そして Skills の基礎を1画面で振り返り、第2回への足場を整えます。</p>

          <h3>前半：初速を出す基本</h3>
          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">💬</div>
              <div class="grid-title">基盤は Chat</div>
              <div class="grid-desc">まず Chat で対話。難しい設定より、まず投げて返ってきた初稿を磨く。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📐</div>
              <div class="grid-title">プロンプト3要素</div>
              <div class="grid-desc">「前提・タスク・ルール」をそろえると出力が安定する。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">✅</div>
              <div class="grid-title">出力は“優秀な同僚の初稿”</div>
              <div class="grid-desc">鵜呑みにせず確認・修正。最終責任は自分が持つ。</div>
            </div>
          </div>

          <div class="tip-box">
            <strong>💡 Project で前提を保持し、Artifact で独立した成果物を切り出す</strong><br>
            ・<strong>Project</strong> — 前提・資料を入れておけば毎回説明し直さなくてよい<br>
            ・<strong>Artifact</strong> — 文書やコードを本文と切り離し、単独で編集・再利用できる
          </div>

          <h3>後半：成果物につなげる</h3>
          <table class="info-table">
            <thead>
              <tr>
                <th>機能</th>
                <th>できること</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Office アドイン</td>
                <td>Word / Excel / PowerPoint 上で直接 Claude を呼ぶ</td>
              </tr>
              <tr>
                <td>Research</td>
                <td>複数ソースを調べて根拠付きでまとめる</td>
              </tr>
              <tr>
                <td>Artifact</td>
                <td>成果物を独立した形で作成・編集</td>
              </tr>
              <tr>
                <td>Cowork</td>
                <td>作業フォルダごと渡し、ファイルを直接読み書き</td>
              </tr>
              <tr>
                <td>Chrome</td>
                <td>ブラウザ上の作業を支援</td>
              </tr>
              <tr>
                <td>Scheduled tasks</td>
                <td>定型作業を時間で自動実行</td>
              </tr>
            </tbody>
          </table>

          <div class="info-box">
            <strong>⚠️ 1-15 で触れた Skills（スキル）の基礎を再確認</strong><br>
            Skills は「手順・指示を型化」して再利用する仕組みです。一度作れば Chat でも Cowork でも同じ手順を呼び出せ、属人化を防ぐ第一歩になります。
          </div>

          <h3>第2回への橋渡し</h3>
          <div class="visual-highlight-card">
            <p>第2回は、これらを土台に<strong>品質と再現性を高める</strong>段階へ。Skills も、まずは型化して再利用するところから一歩ずつ進めていきます。</p>
          </div>
        `
      },

      // ========================================
      // 2-1: Skillsで手順を標準化する
      // ========================================
      {
        title: '2-1. Skills で手順を標準化する',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>第1回 1-15 では「Skill＝よく使う手順の型」を個人で使う基礎を学びました。ここからは一歩進めて、<strong>チームで標準化し、品質を固定する</strong>ところまで踏み込みます。第1回 1-15 の基礎（個人での型化）を土台に、チーム標準化・品質固定へとつなげていきましょう。</p>
          <p>これまでの研修で、Claude への指示の出し方やプロンプトの3要素を学びました。しかし、うまくいったプロンプトを毎回ゼロから書くのは非効率です。<strong>Skills は、業務手順やルールを Claude に再利用させるための仕組み</strong>です。一度作った「うまくいく型」をチームで共有し、誰がやっても同じ品質の出力を得られるようにします。</p>

          <h3>Skills とは</h3>
          <p>Skills は、特定の業務タスクに対する<strong>手順・ルール・出力形式をまとめたテンプレート</strong>です。Claude に「この Skill を使って」と指示するだけで、定義した手順通りに作業を実行してくれます。</p>

          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">Skills なし</div>
              <ul>
                <li>毎回プロンプトを一から書く</li>
                <li>人によって指示の出し方が違う</li>
                <li>出力の品質がばらつく</li>
                <li>うまくいった方法が属人化する</li>
              </ul>
            </div>
            <div class="ba-arrow">→</div>
            <div class="ba-item after">
              <div class="ba-label">Skills あり</div>
              <ul>
                <li>「この Skill で」と指示するだけ</li>
                <li>チーム全員が同じ手順を使える</li>
                <li>出力品質が安定する</li>
                <li>ベストプラクティスが組織に蓄積される</li>
              </ul>
            </div>
          </div>

          <h3>Skills 化に向いている業務</h3>
          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">📝</div>
              <div class="grid-title">議事録作成ルール</div>
              <div class="grid-desc">決定事項・宿題・参加者を必ず含める、時系列ではなくトピック別にまとめる等</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔍</div>
              <div class="grid-title">提案書レビュー手順</div>
              <div class="grid-desc">構成の論理性、数値の根拠、読み手への配慮を順にチェックする手順</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">調査レポート作成</div>
              <div class="grid-desc">調査項目、出典の記載ルール、示唆の書き方を標準化</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">✍️</div>
              <div class="grid-title">クライアント向け文体ルール</div>
              <div class="grid-desc">敬語レベル、専門用語の扱い、結論先行の書き方</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📄</div>
              <div class="grid-title">社内資料の要約フォーマット</div>
              <div class="grid-desc">要約の粒度、必須項目、文字数の目安</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📈</div>
              <div class="grid-title">Excel 分析の標準手順</div>
              <div class="grid-desc">確認すべき観点、グラフの種類選択基準、異常値の扱い方</div>
            </div>
          </div>

          <h3>Skills の構成要素</h3>
          <div class="visual-steps">
            <div class="visual-step-item">
              <div class="step-marker">1</div>
              <div class="step-body">
                <div class="step-title">タスクの定義</div>
                <div class="step-desc">何をするSkillか。「議事録を作成する」「提案書をレビューする」のように1行で定義します。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">2</div>
              <div class="step-body">
                <div class="step-title">手順（ステップ）</div>
                <div class="step-desc">「まず○○を確認し、次に○○を整理し、最後に○○を出力する」のように、具体的な手順を書きます。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">3</div>
              <div class="step-body">
                <div class="step-title">ルール・制約</div>
                <div class="step-desc">「です・ます調」「結論先行」「必ず出典を記載」など、守るべきルールを明記します。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">4</div>
              <div class="step-body">
                <div class="step-title">出力形式</div>
                <div class="step-desc">出力のフォーマット（見出し構成、項目一覧、文字数の目安等）を指定します。</div>
              </div>
            </div>
          </div>

          <h3>チームで使う際のポイント</h3>
          <div class="info-box">
            <p><strong>「一度うまくいった方法を型にする」</strong>が基本の考え方です。まず自分で試してうまくいったプロンプトを Skill に昇格させ、チームの Project に登録します。チームメンバーはその Skill を呼び出すだけで、同じ品質の出力を得られます。</p>
          </div>

          <div class="warning-box">
            <p><strong>Skill は「固定」ではなく「進化」させるもの</strong></p>
            <p>一度作った Skill をそのまま使い続けるのではなく、実際に使ってみてうまくいかない部分があれば改善します。「この Skill の手順3が曖昧で出力がブレる」といったフィードバックをチームで集め、定期的に見直しましょう。</p>
          </div>

          <h3>Skills 化候補の見極め</h3>
          <p>すべての業務を Skills 化する必要はありません。<strong>3つの条件が揃ったとき</strong>に効果が大きくなります。</p>

          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">🔁</div>
              <div class="grid-title">繰り返し発生する</div>
              <div class="grid-desc">月次・週次・案件ごとなど、似た作業が何度も発生する</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🪜</div>
              <div class="grid-title">手順が明確化できる</div>
              <div class="grid-desc">「まず○○、次に△△」と段取りで言語化できる</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🎯</div>
              <div class="grid-title">品質基準がある</div>
              <div class="grid-desc">「このレベルなら OK」とチームで合意できる基準がある</div>
            </div>
          </div>

          <p>具体的な候補例：</p>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">📝</div>
              <div class="grid-title">業務系</div>
              <div class="grid-desc">議事録、提案書レビュー、調査レポート、Excel 分析の標準手順、要約フォーマット</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🛠️</div>
              <div class="grid-title">成果物系</div>
              <div class="grid-desc">PPT 構成生成、UI レビュー、プロトタイプ作成手順、提案資料のストーリーライン作成</div>
            </div>
          </div>

          <h3>Skills は作って終わりではない — 運用テストの観点</h3>
          <p>作った Skill は、<strong>3つの観点でテスト</strong>して育てます。</p>

          <div class="visual-mapping">
            <div class="mapping-header">
              <span class="mapping-from">観点</span>
              <span class="mapping-arrow"></span>
              <span class="mapping-to">確認すること</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">発動</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">指示通りにこの Skill が呼び出されているか／別の手順に流れていないか</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">品質</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">期待する成果物が出ているか／チームの品質基準を満たすか</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">効率</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">手作業より速く済んでいるか／レビュー・修正の手間が許容範囲か</span>
            </div>
          </div>
        `
      },

      // ========================================
      // 2-2: MCP / Connectorsで社内ナレッジにつなぐ
      // ========================================
      {
        title: '2-2. MCP / Connectors で社内ナレッジにつなぐ',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>Claude の出力品質は、<strong>渡す情報の質に大きく左右されます</strong>。このセクションでは、MCP（Model Context Protocol）と Connectors を使って、社内の情報資産（ドキュメント、過去提案、プロジェクト情報等）を Claude に接続する方法を学びます。</p>

          <h3>なぜ「つなぐ」ことが重要か</h3>
          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">情報をつながない場合</div>
              <ul>
                <li>Claude は一般的な知識だけで回答する</li>
                <li>自社固有の文脈が反映されない</li>
                <li>毎回、背景情報を手動で貼り付ける</li>
                <li>過去の蓄積を活かせない</li>
              </ul>
            </div>
            <div class="ba-arrow">→</div>
            <div class="ba-item after">
              <div class="ba-label">情報をつないだ場合</div>
              <ul>
                <li>社内資料を踏まえた回答が得られる</li>
                <li>自社の用語・基準に沿った出力になる</li>
                <li>必要な情報が自動で参照される</li>
                <li>過去の知見が再利用される</li>
              </ul>
            </div>
          </div>

          <h3>MCP / Connectors でつなげる情報源</h3>
          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">📁</div>
              <div class="grid-title">社内資料</div>
              <div class="grid-desc">Google Drive、SharePoint、Notion に保存された資料を Claude から直接参照</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📋</div>
              <div class="grid-title">過去提案</div>
              <div class="grid-desc">過去の提案書・報告書を参照し、類似案件のアプローチを踏まえた提案ができる</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">💬</div>
              <div class="grid-title">コミュニケーション</div>
              <div class="grid-desc">Slack のチャンネルやメールから、プロジェクトの最新状況を把握</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">プロジェクト情報</div>
              <div class="grid-desc">Jira、Asana 等のタスク管理ツールと連携し、進捗状況を整理</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📚</div>
              <div class="grid-title">ナレッジベース</div>
              <div class="grid-desc">社内 Wiki、FAQ、過去の事例集など、組織の知見を参照</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📅</div>
              <div class="grid-title">カレンダー・会議</div>
              <div class="grid-desc">会議予定や議事録を参照し、準備や振り返りに活用</div>
            </div>
          </div>

          <h3>情報を渡すときの原則</h3>
          <div class="visual-steps">
            <div class="visual-step-item">
              <div class="step-marker">1</div>
              <div class="step-body">
                <div class="step-title">目的に必要な情報だけを渡す</div>
                <div class="step-desc">「全部読ませれば良い」ではなく、タスクに必要な情報を選んで渡します。関係ない情報が多いとノイズになり、出力品質が下がります。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">2</div>
              <div class="step-body">
                <div class="step-title">適切な粒度で渡す</div>
                <div class="step-desc">100ページの報告書を丸ごと渡すより、関連する章だけ渡す方が精度の高い出力が得られます。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">3</div>
              <div class="step-body">
                <div class="step-title">情報の鮮度を意識する</div>
                <div class="step-desc">古い資料を参照させると、最新状況と食い違う出力になります。情報の更新日を確認する習慣をつけましょう。</div>
              </div>
            </div>
          </div>

          <h3>注意点</h3>
          <div class="warning-box">
            <p><strong>何でもつなげばよいわけではない</strong></p>
            <p>Connectors でアクセスできる範囲は、<strong>自分がアクセス権を持つ情報に限定されます</strong>。クライアントの機密情報や、アクセス権限のないプロジェクト情報を不用意に接続しないでください。「誰の情報を、誰が、何の目的で使うか」を常に意識しましょう。</p>
          </div>

          <div class="info-box">
            <p><strong>MCP / Connectors の設定は管理者が行う場合が多い</strong>です。利用者として重要なのは、「どの情報源がつながっているか」を把握し、「必要な情報を適切な粒度で渡す」スキルを身につけることです。</p>
          </div>
        `
      },

      // ========================================
      // 2-3: Claude Codeで高度な作業を任せる
      // ========================================
      {
        title: '2-3. Claude Code で高度な作業を任せる（基礎）',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>第1回で Artifact（簡易なプロトタイプ）と Cowork（ファイル作業の委任）を学びました。Claude Code は、これらよりさらに<strong>高度な作業 — 複数ファイルの処理、データ分析ツール、再利用可能なプロトタイプ</strong>を扱える環境です。本セクションでは、安全に任せるための基礎（成果物のレベル・準備・安全な指示の出し方）を押さえます。</p>

          <h3>成果物作成の3つのレベル</h3>
          <p>Claude で成果物を作る手段は、複雑さに応じて使い分けます。</p>

          <div class="visual-mapping">
            <div class="mapping-header">
              <span class="mapping-from">レベル</span>
              <span class="mapping-arrow"></span>
              <span class="mapping-to">使うもの → 作れるもの</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">簡易</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">Artifact → 診断ツール、画面モック、シミュレーター</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">中級</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">Cowork → ファイルを使った成果物（レポート、集計表）</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">高度</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">Claude Code → データ処理、複数画面、再利用可能なツール</span>
            </div>
          </div>

          <h3>Claude Code が力を発揮する場面</h3>
          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">CSV / Excel 分析ツール</div>
              <div class="grid-desc">大量データを読み込み、集計・グラフ化・レポート生成を自動化</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📈</div>
              <div class="grid-title">簡易ダッシュボード</div>
              <div class="grid-desc">複数データソースを統合した KPI 表示画面を構築</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📁</div>
              <div class="grid-title">複数ファイルの整理</div>
              <div class="grid-desc">散在するファイルを読み取り、分類・統合・レポート化</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🖥️</div>
              <div class="grid-title">プロトタイプの本格化</div>
              <div class="grid-desc">Artifact で作った試作品を複数画面・データ保存対応に発展</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔧</div>
              <div class="grid-title">社内向けミニツール</div>
              <div class="grid-desc">見積計算、申請フォーム、チェックリストなど業務支援ツール</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📄</div>
              <div class="grid-title">定型レポート生成</div>
              <div class="grid-desc">毎月の報告書を、テンプレートとデータから自動生成する仕組み</div>
            </div>
          </div>

          <h3>Cowork と Claude Code の使い分け（再確認）</h3>
          <p>第1回 1-3 で扱った使い分けを、ここで作業に入る前にもう一度押さえておきます。</p>

          <div class="visual-mapping">
            <div class="mapping-header">
              <span class="mapping-from">使い分け</span>
              <span class="mapping-arrow"></span>
              <span class="mapping-to">向いている場面</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">Cowork</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">手元のファイル群（Word・Excel・PDF・画像）を読ませて整理・要約・成果物化する</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">Claude Code</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">プロジェクトフォルダ単位で、複数ファイルを横断した分析・ツール構築・自動化を行う</span>
            </div>
          </div>

          <h3>始める前の準備 — 作業フォルダ・目的・禁止事項を整える</h3>
          <p>Cowork も Claude Code も、<strong>最初の準備で成果の8〜9割が決まります</strong>。作業を始める前に、次の5点を整えてから着手します。</p>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">📁</div>
              <div class="grid-title">作業用フォルダを切る</div>
              <div class="grid-desc">元データの直接編集を避けるため、作業コピーをまとめたフォルダを用意する。Cowork なら参照ファイル群、Claude Code ならプロジェクトフォルダ。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🎯</div>
              <div class="grid-title">目的と成果物を1行で定義</div>
              <div class="grid-desc">「何のために」「最終的に何を出すか」をこちら側で言語化しておく。曖昧なまま依頼すると Claude も迷走する。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🚫</div>
              <div class="grid-title">禁止事項を先に書く</div>
              <div class="grid-desc">触ってほしくないファイル・データ、変更してほしくないロジックを最初に明示する。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🎯</div>
              <div class="grid-title">変更対象の範囲を限定</div>
              <div class="grid-desc">「今回は◯◯ファイルの△△部分だけ」のように、作業範囲を最初に絞る。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">✅</div>
              <div class="grid-title">完了条件を決める</div>
              <div class="grid-desc">「これが満たされたら完了」とする条件を、作業前に書き出しておく。レビュー基準にもなる。</div>
            </div>
          </div>

          <h3>Claude Code への安全な指示の出し方</h3>
          <p>Claude Code は強力ですが、指示が曖昧だと意図しない変更を行うことがあります。以下の4点を意識して指示を出しましょう。</p>

          <div class="visual-steps">
            <div class="visual-step-item">
              <div class="step-marker">1</div>
              <div class="step-body">
                <div class="step-title">変更対象を明確にする</div>
                <div class="step-desc">「○○ファイルの△△の部分を修正して」のように、作業範囲を具体的に伝えます。「全体を良くして」のような曖昧な指示は避けてください。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">2</div>
              <div class="step-body">
                <div class="step-title">禁止事項を明示する</div>
                <div class="step-desc">「○○は変更しないで」「既存のデータは消さないで」のように、触ってほしくない部分を先に伝えます。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">3</div>
              <div class="step-body">
                <div class="step-title">小さな単位で進める</div>
                <div class="step-desc">一度に大きな変更を依頼せず、「まず○○を作って → 確認 → 次に△△を追加して」と段階的に進めます。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">4</div>
              <div class="step-body">
                <div class="step-title">実装後に必ず動作確認する</div>
                <div class="step-desc">Claude Code が作ったものは、自分で実際に動かして確認します。特にデータの正確性と、既存部分が壊れていないかを重点的にチェックします。</div>
              </div>
            </div>
          </div>

          <div class="warning-box">
            <p><strong>Claude Code は「手を動かすアシスタント」であり「責任者」ではない</strong></p>
            <p>Claude Code が生成・修正したコードやファイルの最終責任は自分にあります。「Claude Code がやったから大丈夫」ではなく、結果を確認して責任を持つ姿勢は他の機能と同じです。</p>
          </div>

          <div class="info-box">
            <p><strong>📦 次は「使いこなす」へ</strong>：ここまでが Claude Code を安全に任せる基礎です。続く <strong>2-4</strong> では、「どこで・どう動かすか」の選び方と、作業効率を上げる実践 TIPS・ショートカットを扱います。</p>
          </div>
        `
      },

      // ========================================
      // 2-4: Claude Code を使いこなす（実践TIPS・小ワザ）
      // ========================================
      {
        title: '2-4. Claude Code を使いこなす（実践TIPS・小ワザ）',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>2-3 で押さえた基礎（範囲を限定・禁止事項を明示・小さく進める・確認する）を土台に、Claude Code を<strong>「どこで・どう動かすか」</strong>を選び、実践のコツとショートカットで作業効率を上げられるようになります。</p>

          <h3>Claude Code を安全かつ快適に使う基本TIPS</h3>
          <p>2-3 の4つの基本（範囲を限定・禁止事項を明示・小さく進める・確認する）を押さえたうえで、日常的に Claude Code を使ううえで効果が大きい実践 TIPS を紹介します。<strong>すべてを覚える必要はありません</strong>。型として使えそうなものから取り入れてください。</p>
          <div class="info-box">
            <p><strong>📚 TIPS は後からでも参照できます</strong>：以下の TIPS は、自習モードの「TIPS集」ページにカテゴリ別・レベル別でまとめられています。研修中に全部覚える必要はなく、業務で必要になったときに見返せば十分です。</p>
          </div>

          <h4>1. 利用場所を選ぶ — Desktop / CLI / IDE / VS Code 拡張</h4>
          <p>Claude Code はいろんなタッチポイントから使えます。<strong>自分の作業スタイルに合わせて選びましょう</strong>。</p>
          <div class="visual-mapping">
            <div class="mapping-header">
              <span class="mapping-from">状況</span>
              <span class="mapping-arrow"></span>
              <span class="mapping-to">推奨 — 理由</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">エディタで成果物を見ながら／ターミナル苦手／並列作業しない</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">VS Code 拡張（または Cursor / JetBrains 拡張） — エディタ画面の中で作業が完結する</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">エディタで成果物を見ながら／ターミナル可／並列作業したい</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">CLI — 複数の Claude Code を同時に起動して、並行で進められる</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">エディタは使わず、ファイル中心で使う</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">Desktop — 軽快で初心者向け。Cowork との切り替えもスムーズ</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">Web 版（claude.com の Code）</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">（基本スルーで OK） — GitHub を重く使う人向けの位置づけ</span>
            </div>
          </div>
          <p><strong>最初は Desktop から始めると迷わない</strong>です。CLI や IDE は並列作業や自動化を求めるようになってから検討で十分です。</p>

          <h4>2. 作業前に現状調査を依頼する</h4>
          <p>いきなり実装させず、まずリポジトリ構造や対象ファイルを確認させます。どのファイルを変更するか、どこに影響があるかを説明させてから着手することで、既存構造を壊しにくくなります。</p>
          <div class="example-box">
            <strong>📌 指示例</strong><br>
            「まず実装はせず、現在の構造を確認してください。変更対象ファイル、影響範囲、実装方針を整理してから報告してください。」
          </div>

          <h4>3. 変更対象ファイルを限定する</h4>
          <p>「全部直して」ではなく、対象ファイルや対象範囲を明示します。既存機能や他の領域への影響を最小化し、小さく変更して都度確認する流れにします。</p>
          <div class="example-box">
            <strong>📌 指示例</strong><br>
            「今回は js/modules.js の MODULES[1] のみを対象にしてください。第2回のみ対象で、第1回・表示ロジック・CSS には触らないでください。」
          </div>

          <h4>4. 実装前に計画を出させる</h4>
          <p>実装に入る前に、変更方針・変更対象・確認方法・リスクを簡潔に出させます。小さな修正は承認不要で進めるルールも併記しておくと、過剰な確認待ちを避けられます。</p>
          <div class="example-box">
            <strong>📌 指示例</strong><br>
            「実装前に、変更方針、変更対象、確認方法、リスクを簡潔に示してください。小さな文言修正や教材追加は承認不要で実装まで進めてください。」
          </div>

          <h4>5. 実装後に確認結果を報告させる</h4>
          <p>実装して終わりにせず、表示確認・クイズ・FAQ・リンク集・コンソールエラーまで自分で確認させ、変更ファイルと結果を必ず報告させます。</p>
          <div class="example-box">
            <strong>📌 指示例</strong><br>
            「実装後、変更ファイル、変更内容、確認した画面、コンソールエラーの有無、残課題を報告してください。」
          </div>

          <h4>6. ファイルパスをコピーして渡す</h4>
          <p>Claude Code に外部ファイルを渡すときは、ファイルパスを指定するとスムーズです。PDF・Word・Markdown・画像などを扱うときに便利です。<strong>元ファイルを直接編集させず、作業コピーを使う</strong>のが安全です。契約書・顧客資料・機密資料は特に慎重に扱ってください。</p>

          <h4>7. 作成ファイルをすぐ確認する</h4>
          <p>Claude Code が作成した Markdown・PDF・画像・HTML などは、ファインダーやブラウザですぐに目視確認します。「作って終わり」ではなく、確認・共有までを作業フローに含めます。Slack・メール・Figma などに渡す前に、必ず人が確認してください。</p>

          <h4>8. 非エンジニア向けの基本拡張機能</h4>
          <p>VS Code / Cursor で役立つ拡張機能です。<strong>すべて入れる必要はありません</strong>。最初は「まず入れる」の2つから始めてください。</p>

          <div class="visual-mapping">
            <div class="mapping-header">
              <span class="mapping-from">優先度</span>
              <span class="mapping-arrow"></span>
              <span class="mapping-to">拡張機能 — 目的</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">まず入れる</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">Japanese Language Pack — VS Code / Cursor の表示を理解しやすくする</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">まず入れる</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">Markdown Editor — Claude Code が作った Markdown を読みやすくする</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">慣れたら</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">Markdown All in One — Markdown 編集を効率化する</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">慣れたら</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">Markdown PDF — Markdown を PDF 化して共有しやすくする</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">慣れたら</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">Open in Browser — HTML やプロトタイプをブラウザで確認しやすくする</span>
            </div>
          </div>

          <h4>9. スラッシュコマンドでセッションを操作する（<code>/</code> コマンド）</h4>
          <p>Claude Code では <code>/</code>（スラッシュ）始まりのコマンドでセッションを操作できる。<code>/</code> を打つと候補が出るので、そこから選ぶ。</p>
          <p>まず前提として、Claude は会話・読んだファイル・ツールの出力などをすべて「コンテキスト（作業中の記憶）」として持つ。これには上限があり、埋まってくると応答の質が落ちたり、自動要約が走って遅くなる。下のコマンドはこれを手当てするためのもの。</p>
          <p><strong>よく使うコマンド</strong></p>
          <ul>
            <li><code>/help</code> — 使えるコマンド一覧。バージョンで変わるので、まずこれで現物確認</li>
            <li><code>/context</code> — いまの使用量を表示（見るだけ。これ自体は軽くならない）</li>
            <li><code>/compact</code> — 会話を要約して圧縮。満杯前（6〜7割）に手動で打つのがコツ。「<code>/compact ◯◯は残して</code>」と残す内容を指定も可</li>
            <li><code>/clear</code> — 履歴を全消去して最初から。タスク切替時に。戻せないので、消す前に進捗を CLAUDE.md に書く</li>
            <li><code>/cost</code> — このセッションのトークン消費・コスト</li>
            <li><code>/status</code> — バージョン・接続・状態の確認</li>
            <li><code>/memory</code> — CLAUDE.md（常時参照されるメモ）を編集</li>
            <li><code>/init</code> — プロジェクトを分析して CLAUDE.md のたたき台を生成</li>
            <li><code>/review</code> — コードのレビュー</li>
            <li><code>/mcp</code> — Slack / Notion など外部ツール連携の接続確認</li>
          </ul>
          <p><strong>重くなった・質が落ちたと感じたら</strong></p>
          <ol>
            <li><code>/context</code>（または <code>/status</code>）で使用量を確認</li>
            <li>7〜8割を超えたら <code>/compact</code> で圧縮、別タスクなら <code>/clear</code></li>
            <li><code>/clear</code> の前に決定事項を CLAUDE.md へ</li>
          </ol>
          <p>※「遅い」は通信や大きな出力が原因のこともあり、必ずしもコンテキストのせいとは限らない。Claude Code は更新が速くコマンドが増減するので、正確な最新一覧は <code>/help</code> で確認。</p>

          <h3>知っておくと効く小ワザ</h3>
          <p>日々の Claude Code 作業で、覚えておくと効率が上がる小さな工夫。1つひとつは些細ですが、毎日繰り返す摩擦を減らす効果が大きいです。</p>

          <h4>キーボードショートカット（チャット欄）</h4>
          <table class="info-table">
            <thead>
              <tr>
                <th>キー</th>
                <th>効果</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>ESC 2 回</strong></td>
                <td>直前の指示を巻き戻して書き直せる。誤字や条件抜けに気づいた直後に有効</td>
              </tr>
              <tr>
                <td><strong>↑ キー</strong></td>
                <td>過去の指示を呼び出して再利用できる（連打でさらに遡る）</td>
              </tr>
            </tbody>
          </table>

          <h4>Mac × Finder 連携</h4>
          <table class="info-table">
            <thead>
              <tr>
                <th>操作</th>
                <th>効果</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Opt + ⌘ + C（Finder）</strong></td>
                <td>選択ファイルの絶対パスをコピー。チャット欄に貼ればワークスペース外のファイルも渡せる</td>
              </tr>
              <tr>
                <td><strong>⌘ + Shift + R（VS Code / Cursor）</strong></td>
                <td>エディタで選択中のファイルを Finder で即開く。Slack/メール添付・Figma 連携がスムーズ</td>
              </tr>
              <tr>
                <td><strong>⌘ + Shift + .（Finder）</strong></td>
                <td>隠しファイル表示。<code>.claude/</code> の中身（commands、settings.json）を覗いて自分の設定を見直す</td>
              </tr>
            </tbody>
          </table>

          <div class="example-box">
            <strong>📌 活用例：契約書レビューを 3 分で回す</strong><br>
            ショートカットを組み合わせると、Finder 上のファイルを Claude Code に渡して結果を即受け取る流れが速くなります。<br><br>
            1. 先方からの契約書を Finder で選択 → <code>Opt + ⌘ + C</code><br>
            2. Claude Code のチャット欄に貼り付けて「この契約書をレビューして」<br>
            3. 修正提案を確認後「修正案を新ファイルとして保存して」<br>
            4. 出力ファイルを <code>⌘ + Shift + R</code> で Finder で開いて先方へ送信
          </div>

          <h3>慣れたら使う TIPS</h3>
          <p>全員必須ではありませんが、業務によっては効果が大きい TIPS です。基本の型に慣れてから取り入れてください。</p>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">📰</div>
              <div class="grid-title">Web 記事を Markdown 化して渡す</div>
              <div class="grid-desc">URL だけでは Claude Code が読みづらいページ（長文・ログイン要・SNS 投稿・note 系記事など）は、Web Clipper 系のツールで Markdown 化してから渡すと安定します。リサーチや教材化を頻繁に行う人向け。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🎚️</div>
              <div class="grid-title">Effort 設定を使い分ける</div>
              <div class="grid-desc">戦略立案・リサーチ・構成案作成・複雑な修正では、思考を深くする設定が役立ちます。軽い修正や単純作業では毎回高くする必要はありません。タスクの重さに応じて使い分けるのがコツです。</div>
            </div>
          </div>

          <h3>補助資料・上級 TIPS（必須ではない）</h3>
          <p>以下は便利ですが、<strong>環境依存・権限・誤操作のリスク</strong>があるため、本編では深掘りしません。必要な人が補助資料として参照する位置づけです。</p>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">🔓</div>
              <div class="grid-title">Bypass Permissions などの権限モード</div>
              <div class="grid-desc">確認なしで実行できる代わりに、誤操作の影響が大きくなる</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📥</div>
              <div class="grid-title">Downloads 最新ファイルパスの自動コピー</div>
              <div class="grid-desc">直近のダウンロードを取り回しやすくする工夫</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔗</div>
              <div class="grid-title">xurl による X 投稿取得</div>
              <div class="grid-desc">SNS 投稿を Claude Code に取り込む補助</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📂</div>
              <div class="grid-title">.claude フォルダの確認・操作</div>
              <div class="grid-desc">設定ファイルや履歴の確認・カスタマイズ</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">⚙️</div>
              <div class="grid-title">自動化スクリプト・外部 CLI 連携</div>
              <div class="grid-desc">作業の自動実行や他ツールとの連携</div>
            </div>
          </div>

          <div class="warning-box">
            <p><strong>補助資料・上級 TIPS の扱い</strong></p>
            <p>これらの TIPS は作業効率を高める一方で、権限・環境依存・誤操作のリスクがあります。業務利用では、<strong>作業コピー・チームルール・レビュー・情報管理を前提</strong>に扱ってください。全員が使う必要はなく、必要な人が補助資料として参照する位置づけです。</p>
          </div>

          <h3>TIPS の分類</h3>
          <p>TIPS の位置づけを整理しておくと、「いま自分がどこを学んでいるか」で迷わなくなります。</p>

          <div class="visual-mapping">
            <div class="mapping-header">
              <span class="mapping-from">区分</span>
              <span class="mapping-arrow"></span>
              <span class="mapping-to">本編での扱い — 例</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">まず試す</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">本編に組み込む — VS Code / Cursor 拡張版、現状調査、変更対象限定、計画提示、確認報告、ファイルパス連携</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">慣れたら使う</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">本編で軽く紹介 — Web 記事の Markdown 化、Effort 設定、Markdown 系拡張機能</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">高度・チーム向け</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">補助資料扱い — Bypass Permissions、Downloads 自動コピー、xurl、.claude フォルダ操作</span>
            </div>
          </div>

          <h3>補助TIPS：モバイルからの指示（remote-control / Dispatch）</h3>
          <p>スマホアプリから Claude Code や Cowork にタスクを送れる仕組みです。</p>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">📱</div>
              <div class="grid-title">移動中にタスク投入</div>
              <div class="grid-desc">移動中にタスクを投げて、デスクに戻ってから成果物を確認する流れが組めます。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">✏️</div>
              <div class="grid-title">どこからでも依頼できる</div>
              <div class="grid-desc">「ちょっとした調べ物・下書き依頼」をどこからでも投入できます。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📅</div>
              <div class="grid-title">社内利用申請の進捗に合わせて</div>
              <div class="grid-desc">詳細運用は社内のスマホアプリ利用申請の進捗に合わせて案内します。</div>
            </div>
          </div>
          <div class="info-box">
            <p><strong>💡 紹介程度の認識で OK</strong>（必須機能ではありません）。本格的に使う場面が出てきたら、別途使い方を共有します。</p>
          </div>

          <h3>うまく動かない時の戻り道</h3>
          <p>Claude Code が意図と違う動きをする・出力品質が落ちる・無限に修正を続ける、といった場面では、<strong>「もっと強い指示を出す」より「準備に戻る」</strong>のが効きます。</p>

          <div class="visual-steps">
            <div class="visual-step-item">
              <div class="step-marker">1</div>
              <div class="step-body">
                <div class="step-title">文脈を整理する</div>
                <div class="step-desc">会話が長くなると Claude も迷子になります。新しいスレッドで、目的・現状・残課題を1段落で再提示してから依頼し直す。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">2</div>
              <div class="step-body">
                <div class="step-title">作業を分割する</div>
                <div class="step-desc">「一気に全部直す」を諦め、「まず◯◯だけ」「次に△△」と段階に切る。各段階で人がレビューする。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">3</div>
              <div class="step-body">
                <div class="step-title">対象ファイルを限定する</div>
                <div class="step-desc">対象を絞り直し、「他のファイルは読まなくていい／触らないで」と明示する。情報過多のときほど効きます。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">4</div>
              <div class="step-body">
                <div class="step-title">現状調査に戻る</div>
                <div class="step-desc">「いまファイルがどうなっているか／何が問題か」を Claude に説明させ、認識のズレを揃えてから次の手を決める。</div>
              </div>
            </div>
          </div>

          <div class="info-box">
            <p><strong>長時間うまくいかない時は、いったん手を止めて「準備の5点（フォルダ・目的・成果物・禁止事項・変更対象）」に戻る</strong>のが近道です。指示を強くするより、前提を整え直すほうが効きます。</p>
          </div>
        `
      },

      // ========================================
      // 2-5: CLAUDE.md / Hooks / Subagentsで品質を固定する
      // ========================================
      {
        title: '2-5. CLAUDE.md / Hooks / Subagents で品質を固定する',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>Claude Code に高度な作業を任せるほど、<strong>事前のルール設計と品質チェック</strong>が重要になります。このセクションでは、品質を安定させる3つの仕組み — CLAUDE.md、Hooks、Subagents — を学びます。</p>

          <h3>品質管理の3つの仕組み</h3>

          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">📋</div>
              <div class="grid-title">CLAUDE.md</div>
              <div class="grid-desc">プロジェクトの作業ルールを書いたファイル。Claude Code が作業を始める前に自動で読み込む</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🪝</div>
              <div class="grid-title">Hooks（フックス）</div>
              <div class="grid-desc">「特定のタイミングで自動実行される処理」。作業の前後にチェックを挟み込む</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🤖</div>
              <div class="grid-title">Subagents</div>
              <div class="grid-desc">役割分担した複数のエージェント。調査担当・実装担当・レビュー担当を分けられる</div>
            </div>
          </div>

          <h3>CLAUDE.md — 作業ルールを書いておく</h3>
          <p>CLAUDE.md は、プロジェクトフォルダに置く<strong>ルールファイル</strong>です。Claude Code はこのファイルを自動で読み込み、記載されたルールに従って作業します。</p>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">✅</div>
              <div class="grid-title">書くべきこと</div>
              <div class="grid-desc">プロジェクトの概要、ファイル構成、コーディング規約、禁止事項、出力形式のルール、レビュー基準</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">❌</div>
              <div class="grid-title">書かなくてよいこと</div>
              <div class="grid-desc">一般的なプログラミング知識、一時的な作業指示（それはチャットで伝える）</div>
            </div>
          </div>

          <h4>ルールファイルは CLAUDE.md だけではない — DESIGN.md / CONTENT.md</h4>
          <p>規模が大きくなると、CLAUDE.md にすべて書くと長くなりすぎます。<strong>役割別のルールファイルに分け、CLAUDE.md からは「詳しくは○○.md を参照」と参照する</strong>設計が便利です。</p>

          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">🎨</div>
              <div class="grid-title">DESIGN.md</div>
              <div class="grid-desc">UI のトンマナ、配色、タイポグラフィ、コンポーネントの使い方。非デザイナーでも一定品質を保てる。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📝</div>
              <div class="grid-title">CONTENT.md</div>
              <div class="grid-desc">文体・用語・構成パターン・「書かないこと」のルール。教材・コラム・社内文書で品質を揃える。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📋</div>
              <div class="grid-title">REVIEW.md</div>
              <div class="grid-desc">レビュー観点と合格基準。誰がレビューしても同じ目線でチェックできる。</div>
            </div>
          </div>

          <div class="info-box">
            <p><strong>ルールファイルは小さく分ける／参照する</strong>のが運用のコツです。1ファイルに全部書くと、Claude がどのルールを優先するか判断できなくなります。CLAUDE.md は「インデックス」、各 .md は「個別の章」と捉えると整理しやすくなります。</p>
          </div>

          <h3>Hooks（フックス） — 自動チェックを組み込む</h3>
          <p>Hooks は、Claude Code の作業フローに<strong>自動的なチェックポイントを挟む</strong>仕組みです。</p>

          <div class="visual-steps">
            <div class="visual-step-item">
              <div class="step-marker">前</div>
              <div class="step-body">
                <div class="step-title">作業前の Hooks</div>
                <div class="step-desc">作業を始める前に「バックアップを取る」「現在の状態を記録する」などを自動実行。万が一の際に戻れるようにします。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">後</div>
              <div class="step-body">
                <div class="step-title">作業後の Hooks</div>
                <div class="step-desc">作業完了後に「構文チェック」「テスト実行」「品質基準との照合」を自動実行。問題があれば修正を促します。</div>
              </div>
            </div>
          </div>

          <h3>Subagents — 役割を分担する</h3>
          <p>Subagents は、1つの大きなタスクを<strong>専門化した複数のエージェントに分担させる</strong>仕組みです。</p>

          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">🔍</div>
              <div class="grid-title">調査担当</div>
              <div class="grid-desc">情報収集と整理を専門に担当</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔧</div>
              <div class="grid-title">実装担当</div>
              <div class="grid-desc">実際のファイル作成・修正を担当</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">✅</div>
              <div class="grid-title">レビュー担当</div>
              <div class="grid-desc">成果物の品質チェックを担当</div>
            </div>
          </div>

          <h3>チームで品質を管理する</h3>
          <div class="visual-highlight-card">
            <p><strong>CLAUDE.md はチームの「品質基準書」</strong>です。プロジェクトの CLAUDE.md をチームで共有し、全員が同じルールの下で Claude Code を使うことで、成果物の品質が安定します。新しいメンバーが入っても、CLAUDE.md を読めばプロジェクトのルールがわかります。</p>
          </div>

          <div class="warning-box">
            <p><strong>仕組みは「入れて終わり」ではない</strong></p>
            <p>CLAUDE.md や Hooks を設定しても、実際の運用で問題が出ることがあります。「このルールが厳しすぎて作業効率が下がる」「このチェックが抜けている」といった声をチームで集め、継続的に改善してください。</p>
          </div>

          <h3>快適化TIPSをチームで再現可能にする</h3>
          <p>2-4 で紹介した個人レベルの TIPS は、CLAUDE.md やテンプレートを通じて<strong>チームで再現できる状態にする</strong>ことで、組織としての強みになります。</p>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">📋</div>
              <div class="grid-title">CLAUDE.md やテンプレートに落とす</div>
              <div class="grid-desc">よく使う指示の型・確認手順・禁止事項を CLAUDE.md やプロンプトテンプレートに集約し、誰が使っても同じ品質が出る状態にする</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📣</div>
              <div class="grid-title">指示パターンをチームで共有する</div>
              <div class="grid-desc">「現状調査 → 計画 → 実装 → 確認報告」のような型を Slack・Notion・社内 Wiki などで共有し、属人化させない</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🚫</div>
              <div class="grid-title">禁止事項とレビュー観点を明文化する</div>
              <div class="grid-desc">触ってはいけないファイル・データ、レビュー時の必須チェック項目を文書化し、CLAUDE.md とレビューチェックリストに組み込む</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔐</div>
              <div class="grid-title">権限・自動化はチームルールに従う</div>
              <div class="grid-desc">権限モードや自動化スクリプトは個人判断で使わず、チームのガイドラインに沿う。機密情報や重要ファイルでは特に慎重に運用する</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📂</div>
              <div class="grid-title">.claude フォルダや個人設定は不用意に編集しない</div>
              <div class="grid-desc">仕組みを理解する目的で確認するのは有用だが、初心者の不用意な編集は避ける。チーム共通設定はレビュー前提で扱う</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🛠️</div>
              <div class="grid-title">ショートカット・拡張機能を属人化させない</div>
              <div class="grid-desc">「○○さんしか使えない」状態を作らない。チーム共通の拡張機能リストや、新メンバー向けセットアップ手順を整備する</div>
            </div>
          </div>
        `
      },

      // ========================================
      // 2-6: チーム展開する
      // ========================================
      {
        title: '2-6. チーム展開する',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>ここまでの研修で、個人として Claude を活用するスキルを身につけてきました。このセクションでは、<strong>個人の活用をチーム全体に広げ、組織として成果を出す方法</strong>を考えます。</p>

          <h3>チーム展開で考えるべき5つのテーマ</h3>

          <div class="visual-steps">
            <div class="visual-step-item">
              <div class="step-marker">1</div>
              <div class="step-body">
                <div class="step-title">どの業務から始めるか</div>
                <div class="step-desc">全業務に一気に導入するのではなく、<strong>効果が見えやすく、リスクが低い業務</strong>から始めましょう。議事録作成、調査の下準備、定型レポートの下書きなど、繰り返しが多い業務が候補です。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">2</div>
              <div class="step-body">
                <div class="step-title">チームで共通化すべきものを決める</div>
                <div class="step-desc"><strong>Project</strong>（案件ごとの背景情報）、<strong>Skills</strong>（業務手順）、<strong>CLAUDE.md</strong>（品質ルール）の3つを、チームで共通化する対象として整理します。個人で使っている「うまくいく方法」を棚卸しましょう。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">3</div>
              <div class="step-body">
                <div class="step-title">情報管理のルールを決める</div>
                <div class="step-desc">クライアント情報や機密情報の扱いをルール化します。<strong>「何を Claude に渡してよいか」「結果をどこに保存するか」「誰がレビューするか」</strong>を明文化し、チーム全員が同じ基準で運用できるようにします。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">4</div>
              <div class="step-body">
                <div class="step-title">成果物のレビュー体制を作る</div>
                <div class="step-desc">Claude が作った成果物は「初稿」です。<strong>誰がレビューし、誰が最終承認するか</strong>を決めておきましょう。「Claude が作ったから OK」ではなく、人間が責任を持つ体制を明確にします。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">5</div>
              <div class="step-body">
                <div class="step-title">成功パターンを共有・蓄積する</div>
                <div class="step-desc">うまくいった活用事例を<strong>チーム内で定期的に共有する場</strong>を作りましょう。「この Skill が便利」「この指示の出し方が効く」といった知見を蓄積し、チーム全体のスキルを底上げします。</div>
              </div>
            </div>
          </div>

          <h3>展開のステップ</h3>
          <div class="visual-flow">
            <div class="flow-step">
              <div class="flow-icon">👤</div>
              <div class="flow-label">個人で試す</div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <div class="flow-icon">📋</div>
              <div class="flow-label">型にまとめる</div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <div class="flow-icon">👥</div>
              <div class="flow-label">チームに共有</div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <div class="flow-icon">🔄</div>
              <div class="flow-label">改善を回す</div>
            </div>
          </div>

          <h3>チーム展開のチェックリスト</h3>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">✅</div>
              <div class="grid-title">すぐやること</div>
              <div class="grid-desc">対象業務の選定、既存の成功事例の棚卸し、情報管理ルールの明文化</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📅</div>
              <div class="grid-title">1ヶ月以内にやること</div>
              <div class="grid-desc">チーム共通 Project の作成、主要 Skills の整備、レビュー体制の整備</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔄</div>
              <div class="grid-title">継続的にやること</div>
              <div class="grid-desc">活用事例の共有会、Skills の改善、新メンバーへの展開</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">効果を測ること</div>
              <div class="grid-desc">作業時間の変化、成果物の品質向上、メンバーの利用頻度</div>
            </div>
          </div>

          <div class="warning-box">
            <p><strong>「全員が同じレベルで使える」を目指さない</strong></p>
            <p>チーム展開で重要なのは、全員を上級者にすることではありません。<strong>各自が自分の業務で Claude を使いこなせるレベルに到達すること</strong>が目標です。得意な人がリードし、苦手な人は簡単な使い方から始める — そのための Skills や Project が、チーム全体の底上げを支えます。</p>
          </div>

          <h3>新メンバー向けオンボーディング資料</h3>
          <p>「チーム共通 Project / Skills / CLAUDE.md があるけれど、新メンバーが何をどう使えばよいか分からない」になりがちです。<strong>1ページで読めるオンボーディング資料</strong>を用意します。</p>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">🗺️</div>
              <div class="grid-title">入れる項目</div>
              <div class="grid-desc">チームでよく使う Project と入り口、定番 Skills の呼び方、CLAUDE.md / DESIGN.md のありか、情報管理のNG例、レビュー依頼先</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🎬</div>
              <div class="grid-title">最初の30〜60分の体験</div>
              <div class="grid-desc">「最初に試す課題」を1つ用意し、定番 Skill を使って成果物を1本作って、レビュー先に出すまでを通しでやってもらう</div>
            </div>
          </div>

          <h3>AI 情報を「チームで定点観測」する</h3>
          <p>AI の動きが速い分野は、<strong>個人任せだと格差が広がります</strong>。チームで定点観測の仕組みを作ると、全員のキャッチアップ負荷が下がります。</p>

          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">📅</div>
              <div class="grid-title">担当を回す</div>
              <div class="grid-desc">週次でAI情報の調査担当を持ち回り、5〜10分のサマリーを共有する</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔧</div>
              <div class="grid-title">調査を Skill 化</div>
              <div class="grid-desc">「直近1週間の Claude / AI ニュースを 5 トピックに整理する」などの調査手順を Skill にして、誰がやっても同じ品質に揃える</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📚</div>
              <div class="grid-title">集約先を決める</div>
              <div class="grid-desc">Notion・社内 Wiki など1箇所にまとめ、検索可能にする。個人の手元にバラ撒かない</div>
            </div>
          </div>

          <div class="info-box">
            <p><strong>取り上げる範囲は「自分のチームで使うもの」に絞る</strong>のがコツです。すべてを追わず、Claude の主要アップデート・チームで使うツール・案件で必要なテーマに限定すれば、続けられる定点観測になります。</p>
          </div>

          <div class="visual-big-message">
            <div class="big-message-icon">🎯</div>
            <div class="big-message-text">人が判断し、Claude が実行する — このサイクルをチームで回す</div>
            <div class="big-message-sub">個人の便利技を、チームの標準に。標準を、組織の力に。</div>
          </div>
        `
      },

      // ========================================
      // 第2回のまとめ
      // ========================================
      {
        title: '🏁 第2回のまとめ',
        type: 'lecture',
        content: `
          <h3>このセクションのゴール</h3>
          <p>第2回は「<strong>品質と再現性を上げ、チームに広げる</strong>」がテーマでした。要点を振り返ります。</p>

          <h3>今回の要点</h3>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">🧩</div>
              <div class="grid-title">Skills</div>
              <div class="grid-desc">
                <ul>
                  <li><strong>型化して再利用</strong> — よく使う手順を型にし、チームで共有。</li>
                  <li><strong>型化の条件</strong> — 繰り返し × 手順が明確 × 品質基準あり。</li>
                  <li><strong>作って終わりにしない</strong> — 「発動・品質・効率」で検証して育てる。</li>
                </ul>
              </div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔗</div>
              <div class="grid-title">MCP / Connectors</div>
              <div class="grid-desc">
                <ul>
                  <li><strong>社内ナレッジを接続</strong> — 渡す情報の質で出力品質が上がる。</li>
                  <li><strong>接続の原則</strong> — 必要な情報を・適切な粒度で・鮮度を意識して。</li>
                  <li><strong>接続の注意</strong> — 機密・権限外の情報は不用意につながない。</li>
                </ul>
              </div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">⚡</div>
              <div class="grid-title">Claude Code</div>
              <div class="grid-desc">
                <ul>
                  <li><strong>高度な作業を任せる</strong> — 複数ファイル・データ処理・ツール作成。</li>
                  <li><strong>安全に進める</strong> — 準備（フォルダ／目的／禁止／範囲／完了条件）→ 計画 → 実装 → 確認。</li>
                  <li><strong>使い分け</strong> — Desktop / CLI / IDE。まずは Desktop から。</li>
                </ul>
              </div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📋</div>
              <div class="grid-title">CLAUDE.md / Hooks / Subagents</div>
              <div class="grid-desc">
                <ul>
                  <li><strong>CLAUDE.md</strong> — プロジェクトの作業ルール。Claude Code が自動参照。</li>
                  <li><strong>Hooks / Subagents</strong> — 自動チェックと役割分担で品質を固定。</li>
                </ul>
              </div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">👥</div>
              <div class="grid-title">チーム展開</div>
              <div class="grid-desc">
                <ul>
                  <li><strong>小さく始める</strong> — 効果が見えやすくリスクの低い業務から。</li>
                  <li><strong>共通化と運用</strong> — Project / Skills / CLAUDE.md を型にし、情報管理・レビュー・成功事例を回す。</li>
                </ul>
              </div>
            </div>
          </div>

          <h3>今日からやること（まず1つでOK）</h3>
          <div class="info-box">
            <ul>
              <li><strong>Skill 化の候補を1つ選ぶ</strong> — 繰り返している業務から。</li>
              <li><strong>社内情報源を1つ Connector でつなぐ</strong> — 権限・機密を確認。</li>
              <li><strong>Claude Code を Desktop で1回試す</strong> — 作業用フォルダ＋小さなタスク。</li>
              <li><strong>チームで共通化するものを1つ決める</strong> — Project / Skills / ルール。</li>
            </ul>
          </div>

          <h3>全体のまとめ</h3>
          <div class="visual-highlight-card">
            <p>第1回で「個人の初速と成果物」、第2回で「品質・再現性・チーム展開」。Claude / Claude Code を “使ってみる” から “<strong>業務の型にする</strong>” へ。困ったら <strong>TIPS集</strong> と <strong>FAQ</strong> を見直しながら、自分のチームで効くものから取り入れていきましょう。</p>
          </div>
        `
      }
    ],

    // ========================================
    // 第2回 クイズ（11問）
    // ========================================
    quiz: [
      {
        question: 'Skills の主な目的として、最も適切なのはどれですか？',
        options: [
          'Claude の応答速度を上げる',
          'うまくいった業務手順を型にして、チームで再利用できるようにする',
          'Claude の利用料金を節約する',
          'Claude が自動的に最適な方法を選ぶようにする'
        ],
        correct: 1,
        explanation: 'Skills は「一度うまくいった方法を型にする」ための仕組みです。手順・ルール・出力形式をまとめておくことで、チーム全員が同じ品質の出力を得られます。'
      },
      {
        question: '次のうち、Skills 化に最も向いている業務はどれですか？',
        options: [
          '初めて行う新規事業の戦略立案',
          '毎回フォーマットが決まっている議事録の作成',
          'クライアントとの関係構築',
          '社内の組織改編の意思決定'
        ],
        correct: 1,
        explanation: 'Skills は「繰り返し行う業務で、手順やフォーマットが定型化できるもの」に向いています。議事録作成は、必要項目・フォーマット・ルールが決まっているため、Skills 化の好例です。'
      },
      {
        question: 'MCP / Connectors で社内情報を Claude に接続する際、最も重要な原則はどれですか？',
        options: [
          'できるだけ多くの情報を接続する',
          '目的に必要な情報だけを、適切な粒度で渡す',
          '全ての社内システムを一括接続する',
          '情報は一度接続したら更新しない'
        ],
        correct: 1,
        explanation: '関係ない情報が多いとノイズになり、出力品質が下がります。タスクの目的に必要な情報を選び、適切な粒度で渡すことが重要です。'
      },
      {
        question: 'Connectors で情報源を接続する際に注意すべきことは何ですか？',
        options: [
          '接続する情報源の数を最大化する',
          '自分がアクセス権を持つ情報に限定し、機密情報の取り扱いに注意する',
          '接続した情報は全てチームメンバーに公開する',
          '一度接続したら定期的な見直しは不要'
        ],
        correct: 1,
        explanation: 'Connectors でアクセスできる範囲は自分のアクセス権に基づきます。クライアントの機密情報や権限のないプロジェクト情報を不用意に接続せず、「誰の情報を、誰が、何の目的で使うか」を常に意識しましょう。'
      },
      {
        question: 'Artifact / Cowork / Claude Code の使い分けとして正しいのはどれですか？',
        options: [
          'Artifact は最も高度で、Claude Code は簡易的なツール',
          'Artifact は簡易な試作品、Cowork はファイル作業、Claude Code は高度な処理に使う',
          '3つとも同じことができるが、インターフェースが違うだけ',
          'Claude Code は非エンジニア向け、Artifact はエンジニア向け'
        ],
        correct: 1,
        explanation: '簡易な試作品（診断ツール、モック等）→ Artifact、ファイルを使った成果物作成 → Cowork、データ処理や複数画面のツール → Claude Code と、複雑さに応じて使い分けます。'
      },
      {
        question: 'Claude Code に修正を依頼する際、最も重要な安全策はどれですか？',
        options: [
          '一度に全ての修正を依頼して効率化する',
          '変更対象・禁止事項を明示し、小さな単位で段階的に進める',
          'Claude Code に全て任せて結果だけ確認する',
          'バックアップは不要（Claude Code が自動で管理する）'
        ],
        correct: 1,
        explanation: '曖昧な指示は意図しない変更を引き起こすリスクがあります。変更対象と禁止事項を明示し、小さな単位で進め、都度動作確認することが安全な進め方です。'
      },
      {
        question: 'CLAUDE.md に書くべき内容として、最も適切なのはどれですか？',
        options: [
          '一般的なプログラミング知識の解説',
          'プロジェクトの概要、ファイル構成、コーディング規約、禁止事項',
          'Claude への一時的な作業指示',
          'チームメンバーの個人情報'
        ],
        correct: 1,
        explanation: 'CLAUDE.md はプロジェクト固有の「作業ルールブック」です。プロジェクトの概要、ファイル構成、コーディング規約、禁止事項などの永続的なルールを書きます。一時的な作業指示はチャットで伝えます。'
      },
      {
        question: 'Hooks と CLAUDE.md の違いとして正しいのはどれですか？',
        options: [
          'Hooks はルールの記述、CLAUDE.md は自動実行',
          'CLAUDE.md は作業ルールの記述、Hooks は特定タイミングで自動実行される処理',
          'Hooks はチーム用、CLAUDE.md は個人用',
          'CLAUDE.md は必須だが Hooks はオプション機能ではない'
        ],
        correct: 1,
        explanation: 'CLAUDE.md は Claude Code が読み込む「ルールファイル」、Hooks は作業の前後に「自動実行される処理」です。CLAUDE.md がルールを書く場所、Hooks がルールを強制する仕組みと考えるとわかりやすいです。'
      },
      {
        question: 'チームで Claude を展開する際、最初にやるべきことは何ですか？',
        options: [
          '全メンバーに Claude Code の使い方を教える',
          '全業務プロセスを一気に AI 化する',
          '効果が見えやすくリスクが低い業務から始め、情報管理ルールを明文化する',
          '高度な Skills と Hooks を先に整備してから展開する'
        ],
        correct: 2,
        explanation: '全業務に一気に導入するのはリスクが高いです。まず繰り返しが多い定型業務から始め、情報管理（何を Claude に渡してよいか、結果のレビュー責任は誰か等）のルールを明文化してから広げましょう。'
      },
      {
        question: 'Claude が作った成果物のレビュー責任について、正しい認識はどれですか？',
        options: [
          'Claude が作ったものは AI が保証するのでレビュー不要',
          '高度な Skills を使えばレビューは省略できる',
          '誰がレビューし、誰が最終承認するかをチームで決め、人間が責任を持つ',
          'Claude に自己レビューさせれば十分'
        ],
        correct: 2,
        explanation: 'Claude の出力は常に「初稿」です。Skills や CLAUDE.md で品質を安定させても、最終的な確認と承認は人間が行います。レビュー体制をチームで明確にしておくことが重要です。'
      },
      {
        question: 'チーム内でクライアント情報を Claude で扱う場合のルールとして、最も適切なのはどれですか？',
        options: [
          'クライアント名を匿名化すれば全ての情報を使ってよい',
          '何を Claude に渡してよいか・結果をどこに保存するかをルール化し、チーム全員が同じ基準で運用する',
          'チームリーダーだけが Claude を使い、メンバーには結果だけ共有する',
          'クライアント情報は一切 Claude に渡さない'
        ],
        correct: 1,
        explanation: '完全に禁止するのも現実的ではありませんが、無制限に使うのも危険です。「何を渡してよいか」「結果をどこに保存するか」「誰がレビューするか」をルール化し、チーム全員が同じ基準で運用することが重要です。'
      }
    ],

    // ========================================
    // 第2回 練習問題（6問）
    // ========================================
    practices: [
      {
        section: '2-1. Skills で手順を標準化する',
        title: '議事録作成 Skill を設計する',
        task: '自分のチームで使える「議事録作成 Skill」を設計してください。\n\n1. 議事録に必ず含めるべき項目を洗い出す（日時、参加者、議題、決定事項、宿題、次回予定等）\n2. 「この Skill を使って議事録を作成して」と Claude に依頼した際に期待する出力形式を定義する\n3. 守るべきルール（文体、粒度、順序等）を書き出す\n4. 実際に Claude で「この手順に従って、以下の会議メモから議事録を作ってください」と試す',
        hint: 'まず実際の会議メモ（簡単なものでOK）を用意し、Skill の定義と一緒に Claude に渡して試しましょう。出力を見て「ここが足りない」と感じた部分を Skill に追記する、というサイクルで改善します。'
      },
      {
        section: '2-1. Skills で手順を標準化する',
        title: '提案書レビュー手順を標準化する',
        task: 'チーム共通の「提案書レビュー Skill」を設計してください。\n\n1. 提案書のレビュー観点を5つ以上洗い出す（構成の論理性、数値の根拠、読み手への配慮、文体の統一、ページ数の適切さ等）\n2. 各観点のチェック基準を具体的に定義する（例：「各スライドに1つのキーメッセージがあるか」）\n3. Claude に「この提案書をレビューして」と依頼する際のプロンプトテンプレートを作成する\n4. 実際の提案書（または架空のもの）でテストする',
        hint: '「レビューして」だけでは漠然とした指摘しか返りません。チェック観点を具体的に定義し、各観点ごとに◎○△×の評価を出させると、実用的なレビュー結果が得られます。'
      },
      {
        section: '2-3. Claude Code で高度な作業を任せる（基礎）',
        title: 'Claude Code への安全な修正指示を作成する',
        task: '以下のシナリオで、Claude Code に出す修正指示文を作成してください。\n\nシナリオ：チーム内で使っている月次レポートのHTMLテンプレートがある。今月から集計項目を2つ追加したい（「新規顧客数」「解約率」）。既存のレイアウトは壊したくない。\n\n1. 変更対象を明確にした指示文を書く\n2. 禁止事項（触ってほしくない部分）を明記する\n3. 確認条件（何をもって完了とするか）を定義する\n4. 段階的に進める手順（まずデータ項目追加 → 表示確認 → レイアウト調整）を書く',
        hint: '「月次レポートを改善して」ではなく「○○ファイルの△△セクションに□□を追加して。既存の◇◇は変更しないで」のように、範囲・禁止事項・完了条件を具体的に書くのがポイントです。'
      },
      {
        section: '2-3. Claude Code で高度な作業を任せる（基礎）',
        title: 'Claude Code 用の安全な修正指示テンプレートを作る',
        task: '<strong>目的</strong>：チームで再利用できる「Claude Code への安全な修正指示テンプレート」を作成し、誰が使っても同じ品質で作業を依頼できる状態にする。<br><br>' +
          '<strong>想定シーン</strong>：自分が関わるプロジェクト（社内ツール、Webサイト、教材アプリなど）で、Claude Code に修正や追加機能の実装を依頼する場面。<br><br>' +
          '<strong>使用する Claude 機能</strong>：Claude Code（CLI または Cursor / VS Code / JetBrains などの IDE で）。必要に応じて CLAUDE.md にテンプレートを章として記載する。<br><br>' +
          '<strong>入力情報</strong>：対象プロジェクトの概要、変更したい内容、触ってほしくないファイル、確認したい画面・項目、チームのレビュー体制。<br><br>' +
          '<strong>作成する指示テンプレート（6点）</strong>：(1) 作業開始時の現状調査指示、(2) 変更対象ファイルを限定する指示、(3) 実装前に計画を出させる指示、(4) 実装後に確認結果を報告させる指示、(5) commit 前のチェック指示、(6) チームで共有する場合の注意点。<br><br>' +
          '<strong>プロンプト例（参考）</strong>：「まず実装はせず、◯◯ファイルの構造と影響範囲を確認してください。今回の対象は△△のみで、□□には触らないでください。実装前に変更方針・確認方法・リスクを簡潔に提示してください。実装後は変更ファイル・確認した画面・コンソールエラーの有無・残課題を報告してください。」<br><br>' +
          '<strong>期待アウトプット</strong>：再利用可能なテンプレート（テキスト or CLAUDE.md の章立て）と、それを使った1回の依頼サンプル（実際に Claude Code に投げて結果まで確認する）。<br><br>' +
          '<strong>チェックポイント</strong>：(a) 範囲・禁止事項・確認条件が具体的か、(b)「全体を良くして」のような曖昧な表現が残っていないか、(c) commit 前チェック（変更ファイル一覧、コンソールエラー、既存機能の動作）が含まれているか、(d) チームで共有しても誤解されない明確さか。<br><br>' +
          '<strong>発展課題</strong>：このテンプレートを CLAUDE.md にチーム共通ルールとして追加し、レビュー観点（人の判断が必要な箇所）と自動化できる観点を分けて整理する。',
        hint: '最初から完璧を目指す必要はありません。直近で行った1件の依頼を「型」に当てはめて書き直してみると、自分の指示のどこが曖昧だったかが見えてきます。'
      },
      {
        section: '2-5. CLAUDE.md / Hooks / Subagents で品質を固定する',
        title: 'チーム品質チェックリストを作成する',
        task: 'Claude が生成した成果物の品質をチェックするためのリストを作成してください。\n\n1. 成果物の種類（文書、表、スライド、ツール）ごとにチェック項目を5つ以上定義する\n2. 各チェック項目に「確認方法」を具体的に書く（例：「数値は元データと照合する」「リンクは全てクリックして確認する」）\n3. 「誰が、いつ、どのタイミングでチェックするか」の運用ルールを決める\n4. このチェックリストを CLAUDE.md に組み込む形で整理する',
        hint: 'チェック項目は「何を確認するか」だけでなく「どうやって確認するか」まで書くと実用的です。また、全項目を毎回チェックするのは非現実的なので、重要度に応じた優先順位をつけましょう。'
      },
      {
        section: '2-6. チーム展開する',
        title: 'Project / Skills / Connectors の運用ルールを作成する',
        task: 'チームで Claude を活用する際の運用ルールを設計してください。\n\n1. チーム共通 Project に登録すべき情報（案件概要、業界知識、文体ルール等）を洗い出す\n2. チームで共有すべき Skills を3つ選び、管理方法（誰が更新権限を持つか、更新頻度等）を決める\n3. Connectors で接続すべき情報源と、接続してはいけない情報源のガイドラインを作成する\n4. 新メンバーが入った際のオンボーディング手順を書く',
        hint: 'ルールは「厳しすぎて誰も守れない」よりも「最低限これだけは守る」で始めましょう。運用しながら改善する前提で、まず小さく始めてフィードバックを集めることが重要です。'
      },
      {
        section: '2-6. チーム展開する',
        title: '情報管理ルールを策定する',
        task: 'チームで Claude を使う際の情報管理ルールを策定してください。\n\n1. Claude に渡してよい情報・渡してはいけない情報の基準を定義する\n2. 成果物の保存先と共有範囲を決める\n3. レビュー体制（誰が確認し、誰が承認するか）を明文化する\n4. インシデント発生時の対応フロー（誤って機密情報を渡してしまった場合等）を想定する\n5. これらをチーム内で共有するための1枚サマリーを作成する',
        hint: '完璧なルールを最初から作る必要はありません。「これだけは絶対ダメ」（機密情報の直接入力等）と「推奨事項」（レビュー後に提出等）を分けて整理すると、チームが守りやすいルールになります。'
      }
    ],

    // ========================================
    // 第2回 自習リソース
    // ========================================
    selfStudyResources: {
      links: [
        { title: 'Claude Skills ガイド', url: 'https://docs.anthropic.com/en/docs/claude-code/skills', desc: 'Skills の作成方法と活用例', category: '🔧 Claude Codeで使う' },
        { title: 'Claude Code 公式ドキュメント', url: 'https://docs.anthropic.com/en/docs/claude-code/overview', desc: 'Claude Code の公式ガイド', category: '🔧 Claude Codeで使う' },
        { title: 'Claude Code ベストプラクティス', url: 'https://docs.anthropic.com/en/docs/claude-code/best-practices', desc: '効果的な Claude Code の使い方', category: '🔧 Claude Codeで使う' },
        { title: 'CLAUDE.md ガイド', url: 'https://docs.anthropic.com/en/docs/claude-code/claude-md', desc: 'CLAUDE.md の書き方と設計パターン', category: '🔧 Claude Codeで使う' },
        { title: 'MCP 公式', url: 'https://modelcontextprotocol.io/', desc: 'MCP の仕様・対応サービス一覧', category: '🔗 外部ツールと連携する' },
        { title: 'MCP サーバー一覧', url: 'https://github.com/modelcontextprotocol/servers', desc: 'Slack・Drive・Notion 等の対応一覧', category: '🔗 外部ツールと連携する' },
        { title: 'Anthropic ブログ', url: 'https://www.anthropic.com/blog', desc: '最新アップデート・事例', category: '📚 公式リファレンス' }
      ],
      faq: [
        { q: 'Skills はどんな業務に向いていますか？', a: '手順やフォーマットが定型化できる繰り返し業務に向いています。議事録作成、提案書レビュー、調査レポート作成、文体統一、要約フォーマット、Excel 分析の標準手順などが好例です。「毎回同じ品質で出力したい」業務を洗い出し、Skills 化の候補にしてください。', category: '🔧 Claude Code' },
        { q: 'Project と Skills はどう使い分けますか？', a: 'Project は「案件の背景情報や参照資料を保持する場所」、Skills は「業務手順やルールを再利用する型」です。Project は「この案件について」、Skills は「この作業を毎回この手順で」と使い分けます。Project 内で Skills を呼び出すことで、案件固有の情報 × 標準化された手順の組み合わせが実現します。', category: '🔧 Claude Code' },
        { q: 'MCP / Connectors は何のために使うのですか？', a: 'Claude の出力品質は渡す情報の質に左右されます。MCP / Connectors を使うと、Google Drive・Slack・Notion 等の社内情報源を Claude から直接参照でき、より正確で自社に即した出力が得られます。ただし、目的に必要な情報だけを適切な粒度で渡すことが重要です。', category: '🔗 外部連携（MCP）' },
        { q: 'Claude Code は非エンジニアでも使うべきですか？', a: 'はい。Claude Code は日本語の指示でコードやツールを作れるため、エンジニアでなくても活用できます。ただし、Chat → Cowork → Claude Code の順で段階的に学ぶことをお勧めします。最初は「Artifact では作れないレベルの成果物が必要になったとき」に Claude Code を使い始めましょう。', category: '🔧 Claude Code' },
        { q: 'Claude Code に修正を依頼するときの注意点は？', a: '4点を意識してください。(1) 変更対象を具体的に指定する、(2) 触ってほしくない部分を禁止事項として明示する、(3) 一度に大きな変更をせず小さな単位で進める、(4) 実装後に必ず動作確認する。「全体を良くして」のような曖昧な指示は、意図しない変更を引き起こすリスクがあります。', category: '🔧 Claude Code' },
        { q: 'CLAUDE.md には何を書くべきですか？', a: 'プロジェクトの概要、ファイル構成、コーディング規約、禁止事項、出力形式のルール、レビュー基準など、プロジェクト固有の永続的なルールを書きます。一時的な作業指示はチャットで伝えます。CLAUDE.md はチームの「品質基準書」として機能し、新メンバーが読めばプロジェクトのルールがわかる状態を目指します。', category: '🔧 Claude Code' },
        { q: 'Hooks や Subagents はいつ必要ですか？', a: 'Hooks は「毎回必ず実行したいチェック」がある場合に使います（例：作業後のテスト実行、バックアップ取得）。Subagents は「1つのタスクを専門化した役割に分担したい」場合に使います（例：調査→実装→レビューを別々のエージェントに任せる）。最初は CLAUDE.md だけで十分で、品質管理の精度を上げたい段階で導入します。', category: '🔧 Claude Code' },
        { q: 'Claude Code の快適化 TIPS は全員が覚える必要がありますか？', a: 'いいえ。まずは安全に作業を任せるための「指示の型」（現状調査・変更対象限定・計画提示・確認報告）を覚えれば十分です。ショートカットや拡張機能は慣れてから、権限モードや自動化設定はチームルールに従って必要な人だけ使ってください。', category: '🔧 Claude Code' },
        { q: '本編でまず覚えるべき Claude Code の使い方は何ですか？', a: '次の5つの基本の型を押さえてください。(1) 現状調査を依頼する、(2) 変更対象ファイルを限定する、(3) 実装前に計画を出させる、(4) 小さく実装させる、(5) 実装後に確認結果を報告させる。これだけで意図しない変更や手戻りを大きく減らせます。', category: '🔧 Claude Code' },
        { q: 'Bypass Permissions のような権限モードは使ってよいですか？', a: '便利ですが誤操作の影響も大きくなります。業務利用では「作業コピーで使う・低リスク作業に限定する・チームルールに従う・レビューを通す」を前提にしてください。機密情報や重要ファイルを扱う作業では特に慎重に運用します。', category: '🔧 Claude Code' },
        { q: 'Web 記事や外部ファイルを Claude Code に渡すにはどうすればよいですか？', a: 'PDF・Word・Markdown・画像などはファイルパスで渡すと扱いやすくなります。長文記事・ログイン要のページ・SNS 投稿などは、Web Clipper 系のツールで Markdown 化してから渡すと安定します。元ファイルを直接編集させず、作業コピーで作業させるのが安全です。', category: '🔧 Claude Code' },
        { q: '.claude フォルダは触ってよいですか？', a: '仕組みを理解する目的で確認するのは有用ですが、初心者が不用意に編集するのは避けてください。チームで使う場合は、共通ルールやレビューを前提に扱い、変更内容は記録・共有します。', category: '🔧 Claude Code' },
        { q: 'Cowork や Claude Code を始める前に何を準備すべきですか？', a: '次の5点を作業前に整えると成果が安定します。(1) 作業用フォルダ（元データを直接編集しないコピー）、(2) 目的と最終成果物を1行で言語化、(3) 触ってほしくない禁止事項を書き出す、(4) 変更対象の範囲を限定する、(5) 完了条件を明文化する。これらをそろえてから依頼すると、無駄な手戻りを大きく減らせます。', category: '🔧 Claude Code' },
        { q: 'Claude Code がうまく動かない時はどうすればよいですか？', a: '「もっと強い指示を出す」より「準備に戻る」が近道です。(1) 文脈を整理する（新しいスレッドで目的・現状・残課題を再提示）、(2) 作業を分割する、(3) 対象ファイルを限定する、(4) 現状調査に戻り認識のズレを揃える。長時間うまくいかない時は、フォルダ・目的・成果物・禁止事項・変更対象の5点を整え直すのが効果的です。', category: '🔧 Claude Code' },
        { q: 'Skills 化すべき業務はどう見極めればよいですか？', a: '次の3条件が揃ったときに Skills 化の効果が大きくなります。(1) 繰り返し発生する（月次・週次・案件ごと）、(2) 手順が明確化できる（段取りで言語化できる）、(3) 品質基準がある（チームで合意できる「OKレベル」がある）。具体例は議事録、提案書レビュー、調査レポート、Excel 分析の標準手順、PPT 構成生成、UI レビュー、プロトタイプ作成手順など。作った後は発動・品質・効率の3観点でテストしながら育てます。', category: '🔧 Claude Code' },
        { q: 'AI 情報を追うためのおすすめの方法はありますか？', a: '個人で全部追うのは続きません。チームで定点観測の仕組みを作るのが現実的です。(1) 週次の調査担当を持ち回り、5〜10分のサマリーを共有、(2) 「直近1週間の主要アップデートを5トピックに整理する」などの調査手順を Skill 化、(3) Notion や社内 Wiki など1箇所に集約。範囲は「自分のチームで使うもの」（Claude の主要アップデート、チームで使うツール、案件で必要なテーマ）に絞ると続けられます。', category: '💡 Claudeの基本' },
        { q: 'チームで Claude を使うときのルールは何ですか？', a: '最低限、以下を決めましょう。(1) 対象業務（どの業務から始めるか）、(2) 共通化するもの（Project・Skills・CLAUDE.md）、(3) 情報管理ルール（何を渡してよいか、結果の保存先）、(4) レビュー体制（誰が確認・承認するか）、(5) 成功事例の共有方法。完璧なルールを最初から作る必要はなく、運用しながら改善する前提で始めましょう。', category: '💡 Claudeの基本' },
        { q: 'クライアント情報や機密情報をどう扱うべきですか？', a: '「何を Claude に渡してよいか」のガイドラインをチームで策定してください。公開情報やサマリー化された情報は比較的安全ですが、個人情報・契約金額・NDA 対象情報は慎重に扱う必要があります。迷った場合は上長に確認する、というルールを設けるのも有効です。万一のインシデント対応フローも事前に決めておきましょう。', category: '💡 Claudeの基本' }
      ]
    }
  }

];

// ============================================================
// TIPS集（自習用補助教材） — Step 8・Step 9 で扱った実践TIPSを整理
// 全部覚えるものではなく、必要な時に参照するもの
// ============================================================
const TIPS_CATEGORIES = [
  '🌐 共通',
  '💬 Chat 個別',
  '📂 Cowork 個別',
  '⚡ Claude Code 個別'
];

const TIPS_LEVELS = [
  { id: 'basic', label: '基本' },
  { id: 'intermediate', label: '中級' },
  { id: 'advanced', label: '上級' }
];

const TIPS = [
  // ---- まず試す ----
  {
    id: 'tip-001',
    category: '⚡ Claude Code 個別',
    level: 'basic',
    title: '実装前に現状調査を依頼する',
    summary: 'いきなり実装させず、まず構造・変更対象・影響範囲・確認方法を確認させる。',
    whenToUse: '既存アプリ・既存資料・既存フォルダを安全に修正したいとき。',
    howToUse: [
      'まず実装せず、リポジトリ構造や対象ファイルを確認させる',
      '変更対象ファイルを一覧化させる',
      '影響範囲と確認方法を出させる'
    ],
    example: 'まず実装はせず、現在の構造を確認してください。変更対象ファイル、影響範囲、実装方針、確認方法を整理してから報告してください。',
    caution: '全体を把握しないまま変更すると、意図しないファイルに影響が及ぶことがある。',
    relatedSession: '第2回',
    relatedSections: [{ m: 1, s: 3, label: '第2回 2-3. Claude Code で高度な作業を任せる（基礎）' }]
  },
  {
    id: 'tip-002',
    category: '⚡ Claude Code 個別',
    level: 'basic',
    title: '変更対象ファイルを限定する',
    summary: '「全部直して」ではなく、対象ファイルや対象範囲を明示する。',
    whenToUse: '既存機能や他の領域への影響を小さくしたいとき。',
    howToUse: [
      '対象ファイル・対象セクションを名指しで指定する',
      '触ってほしくないファイルを禁止事項として明示する',
      '関連ファイルへの軽微修正が必要な場合は事前に報告させる'
    ],
    example: '今回は js/modules.js の MODULES[1] のみを対象にしてください。第2回のみ対象で、第1回・表示ロジック・CSS には触らないでください。',
    caution: '範囲を絞るほど安全だが、依存ファイルがある場合は報告ルールも併記する。',
    relatedSession: '第2回',
    relatedSections: [{ m: 1, s: 3, label: '第2回 2-3. Claude Code で高度な作業を任せる（基礎）' }]
  },
  {
    id: 'tip-003',
    category: '⚡ Claude Code 個別',
    level: 'basic',
    title: '実装後に確認結果を報告させる',
    summary: '実装して終わりにせず、確認画面・コンソールエラー・変更ファイル・残課題まで報告させる。',
    whenToUse: 'アプリや資料の更新後に、品質確認まで通したいとき。',
    howToUse: [
      '報告フォーマットを先に指定する',
      '確認した画面と結果を明示させる',
      '残課題があれば次の依頼の起点にする'
    ],
    example: '実装後、変更ファイル、変更内容、確認した画面、コンソールエラーの有無、残課題を報告してください。',
    caution: '確認条件を先に指定しないと、「動いた／動いてない」だけの曖昧な報告になりがち。',
    relatedSession: '第2回',
    relatedSections: [{ m: 1, s: 3, label: '第2回 2-3. Claude Code で高度な作業を任せる（基礎）' }]
  },

  // ---- Claude Code ----
  {
    id: 'tip-004',
    category: '⚡ Claude Code 個別',
    level: 'basic',
    title: 'IDE で Claude Code を使う',
    summary: 'Claude Code は CLI だけでなく IDE でも使える。複数ファイル編集やアプリ改修にはファイルを見ながら作業できる IDE が便利。社内には Cursor の活用ノウハウもあるが、Cursor は全員必須ではない。',
    whenToUse: '複数ファイルを横断する高度な作業を Claude Code に任せたいとき。非エンジニアや初心者は、まず Claude Desktop で Chat / Cowork を使うところから始めれば十分。',
    howToUse: [
      'まずは Claude Desktop の Chat / Cowork で十分かを確認する（多くの場合これで足りる）',
      'コード・アプリ改修・複数ファイル横断が必要になったら IDE 利用を検討する',
      '使う IDE を選ぶ（Cursor / VS Code / JetBrains など。社内には Cursor のノウハウあり）',
      'プロジェクトフォルダを開いた状態で会話を始め、ファイルツリーを見ながら指示を出す',
      '（補足）CLI はターミナルから使える、エンジニアや慣れた人向けの選択肢'
    ],
    caution: 'IDE 上で開いていても、対象範囲は明示する。「見えている＝編集してよい」ではない。Cursor は全員必須ではなく、IDE を使わなくても Claude Code は CLI で使える。',
    relatedSession: '第2回',
    relatedSections: [{ m: 1, s: 4, label: '第2回 2-4. Claude Code を使いこなす（実践TIPS・小ワザ）' }]
  },
  {
    id: 'tip-005',
    category: '⚡ Claude Code 個別',
    level: 'basic',
    title: '作業は「計画 → 実装 → 確認」で頼む',
    summary: 'まず計画、次に小さく実装、最後に確認結果を報告させる。',
    whenToUse: '既存アプリ改修、資料更新、複数ファイル修正など。',
    howToUse: [
      '実装前に変更方針・変更対象・確認方法・リスクを出させる',
      '小さな単位で実装させる',
      '実装後に確認結果を報告させる'
    ],
    example: 'まず実装計画を出してください。問題なければ、小さな単位で実装し、最後に確認結果を報告してください。',
    caution: '一気に大改修を頼むと、意図しない変更や手戻りが増える。',
    relatedSession: '第2回',
    relatedSections: [{ m: 1, s: 3, label: '第2回 2-3. Claude Code で高度な作業を任せる（基礎）' }]
  },
  {
    id: 'tip-006',
    category: '⚡ Claude Code 個別',
    level: 'intermediate',
    title: 'うまく動かない時は「準備」に戻る',
    summary: '会話が長くなった・出力がズレた時は、強い指示より文脈整理・作業分割・対象限定・現状調査に戻る。',
    whenToUse: 'Claude Code が迷走している、期待と違う変更をしている、同じ失敗を繰り返すとき。',
    howToUse: [
      '新しいスレッドで目的・現状・残課題を1段落で再提示する',
      '作業を「まず◯◯」「次に△△」と分割する',
      '対象ファイルを絞り直す',
      '「いまどうなっているか」を Claude に説明させ認識のズレを揃える'
    ],
    caution: '無理に続けるより、フォルダ・目的・成果物・禁止事項・変更対象の準備5点に戻るほうが早い。',
    relatedSession: '第2回',
    relatedSections: [{ m: 1, s: 4, label: '第2回 2-4. Claude Code を使いこなす（実践TIPS・小ワザ）' }]
  },

  // ---- Cowork ----
  {
    id: 'tip-007',
    category: '📂 Cowork 個別',
    level: 'basic',
    title: 'Cowork は作業コピーで使う',
    summary: '元ファイルを直接触らせず、作業用フォルダやコピーを使う。',
    whenToUse: 'Excel・Word・PowerPoint・PDF などのファイル作業を任せるとき。',
    howToUse: [
      '作業用フォルダを切ってコピーを置く',
      'コピー側を Cowork に渡す',
      '結果を確認してから元ファイルに反映する'
    ],
    caution: '重要ファイル・顧客資料・契約書・機密資料は特にバックアップを取る。',
    relatedSession: '第1回',
    relatedSections: [{ m: 0, s: 12, label: '第1回 1-13. Cowork でファイル作業を任せる' }]
  },
  {
    id: 'tip-008',
    category: '📂 Cowork 個別',
    level: 'basic',
    title: 'Cowork の最初の30分で前提を整える',
    summary: '目的・成果物・入力ファイル・禁止事項・出力形式・確認方法を最初に伝える。',
    whenToUse: '複数資料の整理、レポート・提案資料の下書き、ファイル加工を任せるとき。',
    howToUse: [
      'やりたいことと最終成果物を1行で書く',
      '入力ファイルと触ってほしくないものを明示する',
      '出力形式と確認方法を先に決める'
    ],
    caution: '前提が曖昧だと、見た目は整っていても使いにくい成果物になる。',
    relatedSession: '第1回',
    relatedSections: [
      { m: 0, s: 12, label: '第1回 1-13. Cowork でファイル作業を任せる' }
    ]
  },

  // ---- 成果物作成 ----
  {
    id: 'tip-009',
    category: '💬 Chat 個別',
    level: 'basic',
    title: 'スライドはいきなり完成形を作らせない',
    summary: '構成 → 1枚ごとのメッセージ → 図表案 → 文言 → デザイン の順で段階生成する。',
    whenToUse: '提案書・報告書・役員向け資料・研修資料を作るとき。',
    howToUse: [
      'まずストーリーラインと10枚程度の構成を作らせる',
      '各スライドのキーメッセージを1文で書かせる',
      '図表案・本文を作らせ、最後にレビュー観点で点検させる'
    ],
    caution: '一気に PPT 化すると、見た目は整っていても論点が弱い資料になる。',
    relatedSession: '第1回',
    relatedSections: [{ m: 0, s: 8, label: '第1回 1-9. Office アプリで Claude を使う — Excel / PowerPoint / Word' }]
  },
  {
    id: 'tip-010',
    category: '💬 Chat 個別',
    level: 'intermediate',
    title: '提案書は「素材抽出」から始める',
    summary: '商談メモや議事録から、課題・要望・意思決定基準・競合・予算・スケジュールを抽出してから提案ストーリーを作る。',
    whenToUse: '提案資料・営業資料・プロジェクト提案書を作るとき。',
    howToUse: [
      '元情報から抽出すべき項目を先に決める',
      'まず素材を一覧で抽出させる',
      '次に提案ストーリーを構築させる'
    ],
    caution: '素材抽出と資料化を同時に頼むと、論点の抜け漏れに気づきにくい。',
    relatedSession: '第1回',
    relatedSections: [{ m: 0, s: 8, label: '第1回 1-9. Office アプリで Claude を使う — Excel / PowerPoint / Word' }]
  },
  {
    id: 'tip-011',
    category: '💬 Chat 個別',
    level: 'basic',
    title: 'プロトタイプは議論のたたき台として扱う',
    summary: '診断ツール・シミュレーター・画面モック・ダッシュボードは、提案の説得力を高める補助。',
    whenToUse: '抽象的な構想や To-Be 業務を具体化したいとき。',
    howToUse: [
      'Artifact で素早く試作する',
      'クライアントには「議論用の試作品」と明示する',
      'フィードバックをもらって改善する'
    ],
    caution: '本番システムではないことを明示し、データ保存・セキュリティ要件は別途検討する。',
    relatedSession: '第1回',
    relatedSections: [{ m: 0, s: 10, label: '第1回 1-11. Artifact で「プロトタイプ」を作る' }]
  },

  // ---- Research ----
  {
    id: 'tip-012',
    category: '💬 Chat 個別',
    level: 'basic',
    title: '調査は「示唆」に変換する',
    summary: '情報収集で終わらせず、ファクト・示唆・提案への使い方を分けて整理する。',
    whenToUse: '市場調査・競合調査・業界動向・事例調査を行うとき。',
    howToUse: [
      'Research の出力を受けたら、「機会・脅威」「論点・推奨アクション」に変換させる',
      'クライアントの意思決定にどう繋がるかまで書かせる'
    ],
    caution: '重要な数字・固有名詞・出典は必ず一次情報で確認する。',
    relatedSession: '第1回',
    relatedSections: [{ m: 0, s: 9, label: '第1回 1-10. Research で調査する' }]
  },
  {
    id: 'tip-013',
    category: '💬 Chat 個別',
    level: 'intermediate',
    title: '大量資料は他ツール併用も考える',
    summary: '手元の大量資料の把握には NotebookLM 等の併用も選択肢。Claude では示唆化・構成化・成果物化に集中させる。',
    whenToUse: '大量 PDF・公開資料・社内資料をまとめて読みたいとき。',
    howToUse: [
      'Web 横断調査・出典付きレポート → Claude の Research',
      '資料に紐付いた Q&A・図解化 → NotebookLM 等',
      '示唆 → 提案 → スライド化 → Claude（Chat / Artifact / Skills）'
    ],
    caution: 'ツールごとの得意分野を理解し、最終的な判断は人間が行う。',
    relatedSession: '第1回',
    relatedSections: [{ m: 0, s: 9, label: '第1回 1-10. Research で調査する' }]
  },
  {
    id: 'tip-014',
    category: '💬 Chat 個別',
    level: 'intermediate',
    title: 'AI 情報は「定点観測」する',
    summary: '都度検索だけでなく、定期的に見る情報源と確認サイクルを決める。',
    whenToUse: 'AI ニュース・競合動向・技術トレンドを追いたいとき。',
    howToUse: [
      '週次のチーム持ち回りで担当を回す',
      '調査手順自体を Skill 化して品質を揃える',
      '集約先を1箇所（Notion・Wiki 等）に決める'
    ],
    caution: '最新情報は変わりやすいため、固定知識にしすぎない。範囲は「自分のチームで使うもの」に絞る。',
    relatedSession: '第1回 / 第2回',
    relatedSections: [
      { m: 0, s: 9, label: '第1回 1-10. Research で調査する' },
      { m: 1, s: 6, label: '第2回 2-6. チーム展開する' }
    ]
  },

  // ---- Skills / 再現性 ----
  {
    id: 'tip-015',
    category: '🌐 共通',
    level: 'intermediate',
    title: 'Skills 化すべき業務を見極める',
    summary: '繰り返し発生する × 手順が明確化できる × 品質基準がある、の3条件が揃ったら候補。',
    whenToUse: '何を Skill 化すべきか迷ったとき。',
    howToUse: [
      '直近1ヶ月で繰り返した作業をリストアップ',
      '手順が言語化できるか確認',
      '「OK ライン」がチームで合意できるか確認'
    ],
    example: '候補例：議事録作成、提案書レビュー、調査レポート、PPT 構成生成、Excel 分析、UI レビュー、プロトタイプ手順。',
    caution: '一度しか使わない作業は、無理に Skill 化しなくてよい。',
    relatedSession: '第2回',
    relatedSections: [{ m: 1, s: 1, label: '第2回 2-1. Skills で手順を標準化する' }]
  },
  {
    id: 'tip-016',
    category: '🌐 共通',
    level: 'intermediate',
    title: 'Skills は作って終わりにしない',
    summary: '「発動するか／期待品質になるか／効率化するか」の3観点でテストしながら育てる。',
    whenToUse: 'チームで使う Skill を作成・改善するとき。',
    howToUse: [
      '発動：指示通りにこの Skill が呼ばれているか確認',
      '品質：期待する成果物が出ているか確認',
      '効率：手作業より速いか・レビュー手間が許容範囲か確認'
    ],
    caution: '作った後の検証と改善がないと、形だけの Skill になる。',
    relatedSession: '第2回',
    relatedSections: [{ m: 1, s: 1, label: '第2回 2-1. Skills で手順を標準化する' }]
  },
  {
    id: 'tip-017',
    category: '🌐 共通',
    level: 'intermediate',
    title: 'CLAUDE.md を業務マニュアルとして使う',
    summary: 'プロジェクトの前提・禁止事項・出力形式・レビュー観点・トンマナ・成果物ルールを書く。',
    whenToUse: '毎回同じ説明をするのが面倒なとき、成果物の品質を安定させたいとき。',
    howToUse: [
      'プロジェクトの目的・対象を冒頭に書く',
      '触ってはいけないファイル・データを禁止事項に',
      '出力形式・レビュー観点を明文化',
      '大きい場合は DESIGN.md / CONTENT.md / REVIEW.md に分割し参照する'
    ],
    caution: '古いルールが残ると逆効果。定期的に見直し、使われていない規約は外す。',
    relatedSession: '第2回',
    relatedSections: [{ m: 1, s: 5, label: '第2回 2-5. CLAUDE.md / Hooks / Subagents で品質を固定する' }]
  },

  // ---- チーム展開 ----
  {
    id: 'tip-018',
    category: '🌐 共通',
    level: 'intermediate',
    title: 'よく使う指示をチームで共有する',
    summary: '個人の便利プロンプトで終わらせず、テンプレート・Project・Skills・CLAUDE.md に落とす。',
    whenToUse: 'チームで Claude 活用を広げたいとき。',
    howToUse: [
      '成功した指示パターンを Slack・Notion・Wiki に集約',
      '「型」として再利用できる形にする',
      '成功事例をもとに定期的に更新する'
    ],
    caution: 'テンプレートは使いっぱなしにせず、運用しながら改善する。',
    relatedSession: '第2回',
    relatedSections: [{ m: 1, s: 6, label: '第2回 2-6. チーム展開する' }]
  },
  {
    id: 'tip-019',
    category: '🌐 共通',
    level: 'intermediate',
    title: 'チームオンボーディング資料を作る',
    summary: 'Claude の使い方・禁止事項・レビュー観点・よく使うテンプレート・相談先を1ページにまとめる。',
    whenToUse: '新メンバーに Claude 活用を広げるとき。',
    howToUse: [
      'チームでよく使う Project と入り口を書く',
      '定番 Skills の呼び方を書く',
      'CLAUDE.md / DESIGN.md のありかを書く',
      '最初の30〜60分の体験課題を1つ用意する'
    ],
    caution: '運用ルールが複雑すぎると使われない。最初はシンプルにする。',
    relatedSession: '第2回',
    relatedSections: [{ m: 1, s: 6, label: '第2回 2-6. チーム展開する' }]
  },
  {
    id: 'tip-020',
    category: '🌐 共通',
    level: 'basic',
    title: 'レビュー責任を明確にする',
    summary: 'Claude が作った成果物でも、最終責任は人間が持つ。',
    whenToUse: 'クライアント提出物・数値を含む資料・契約／法務／財務に関わる資料を作るとき。',
    howToUse: [
      '誰がレビューし、誰が承認するかを決める',
      '重要な数字・固有名詞・出典・表現の妥当性を必ず確認する',
      'インシデント対応フローも事前に決める'
    ],
    caution: '「Claude がやったから OK」は通らない。最終チェックは必ず人が行う。',
    relatedSession: '第2回',
    relatedSections: [{ m: 1, s: 6, label: '第2回 2-6. チーム展開する' }]
  },

  // ---- 上級・補助 ----
  {
    id: 'tip-021',
    category: '⚡ Claude Code 個別',
    level: 'advanced',
    title: '権限モードは慎重に使う',
    summary: 'Bypass Permissions などの権限モードは便利だが、誤操作のリスクも大きくなる。',
    whenToUse: '低リスクな作業コピーや、個人環境で効率化したいとき。',
    howToUse: [
      '機密情報・重要ファイルでは使わない',
      '作業コピーで使う',
      'チームルールとレビュー前提で運用する'
    ],
    caution: '便利さだけで選ばない。誤操作の影響範囲を先に想定する。',
    relatedSession: '第2回（補助資料）',
    relatedSections: [{ m: 1, s: 5, label: '第2回 2-5. CLAUDE.md / Hooks / Subagents で品質を固定する' }]
  },
  {
    id: 'tip-022',
    category: '⚡ Claude Code 個別',
    level: 'advanced',
    title: '.claude フォルダや設定ファイルは不用意に触らない',
    summary: '仕組み理解には役立つが、初心者が不用意に編集するのは避ける。',
    whenToUse: '高度な設定・チーム共通設定・品質固定を検討するとき。',
    howToUse: [
      '何が書かれているかをまず読み解く',
      '変更する前にバックアップを取る',
      'チームで使う場合は共通ルールとレビューを前提にする'
    ],
    caution: 'ファイル構造や役割を理解しないまま触ると、想定外の挙動につながる。',
    relatedSession: '第2回（補助資料）',
    relatedSections: [{ m: 1, s: 5, label: '第2回 2-5. CLAUDE.md / Hooks / Subagents で品質を固定する' }]
  },
  {
    id: 'tip-023',
    category: '⚡ Claude Code 個別',
    level: 'advanced',
    title: '自動化スクリプトや外部 CLI は補助資料扱い',
    summary: 'Downloads 自動コピー、xurl、外部 CLI 連携などは便利だが、環境依存・権限・API 設定が絡む。',
    whenToUse: '高度な効率化をしたい人、技術的な設定に慣れている人向け。',
    howToUse: [
      '個人環境で小さく試す',
      '失敗時の戻し方を先に確認する',
      'チーム運用に組み込む場合はガイドラインを整備する'
    ],
    caution: '研修本編の必須事項ではなく、必要な人が使う発展 TIPS として扱う。',
    relatedSession: '第2回（補助資料）',
    relatedSections: [{ m: 1, s: 5, label: '第2回 2-5. CLAUDE.md / Hooks / Subagents で品質を固定する' }]
  },

  // ---- 知っておくと効く小ワザ系（追加） ----
  {
    id: 'tip-024',
    category: '⚡ Claude Code 個別',
    level: 'basic',
    title: 'ESC 2 回で直前の指示を巻き戻す',
    summary: '誤字や条件抜けに気づいた直後、ESC を 2 回押すと直前の指示まで巻き戻して書き直せる。',
    whenToUse: '指示を送った直後に「あ、ちょっと違った」と気づいたとき。',
    howToUse: [
      '指示送信直後に ESC を 2 回押す',
      '直前のメッセージまで巻き戻る',
      '修正して再送信'
    ],
    caution: '複数遡りたい場合は ↑ キー（tip-025）で履歴をたどる。',
    relatedSession: '第2回',
    relatedSections: [{ m: 1, s: 4, label: '第2回 2-4. Claude Code を使いこなす（実践TIPS・小ワザ）' }]
  },
  {
    id: 'tip-025',
    category: '⚡ Claude Code 個別',
    level: 'basic',
    title: '↑ キーで過去の指示を呼び出す',
    summary: 'チャット欄で ↑ キーを押すと直前の指示が呼び出される。連打でさらに遡れる。',
    whenToUse: '同じ指示や似た指示を再利用したいとき。長文指示の修正再送時にも便利。',
    howToUse: [
      'チャット欄で ↑ キーを押す',
      '連打で過去履歴を遡る',
      'そのまま送信、または編集して再送'
    ],
    caution: 'ターミナル経験者には馴染みのある操作。慣れると指示の再利用が高速化する。',
    relatedSession: '第2回',
    relatedSections: [{ m: 1, s: 4, label: '第2回 2-4. Claude Code を使いこなす（実践TIPS・小ワザ）' }]
  },
  {
    id: 'tip-026',
    category: '⚡ Claude Code 個別',
    level: 'basic',
    title: 'Opt+⌘+C で Finder のファイルパスを渡す',
    summary: 'Mac の Finder で選択ファイルの絶対パスをコピーし、チャット欄に貼ればワークスペース外のファイルも渡せる。',
    whenToUse: '契約書レビュー、Slack・メールで受け取った PDF 処理など、ワークスペース外のファイルを Claude Code に渡したいとき。',
    howToUse: [
      'Finder で対象ファイルを選択',
      'Opt + ⌘ + C で絶対パスをクリップボードにコピー',
      'Claude Code のチャット欄に貼り付けて指示'
    ],
    example: '「~/Documents/契約書.pdf をレビューしてください。」',
    caution: '機密情報を含むファイルは特に慎重に。作業コピーを使う原則は同じ。',
    relatedSession: '第2回',
    relatedSections: [{ m: 1, s: 4, label: '第2回 2-4. Claude Code を使いこなす（実践TIPS・小ワザ）' }]
  },
  {
    id: 'tip-027',
    category: '⚡ Claude Code 個別',
    level: 'basic',
    title: '⌘+Shift+R で出力ファイルを Finder で即開く',
    summary: 'VS Code / Cursor で選択中のファイルを Finder で即開けるショートカット。Slack / メール / Figma への共有がスムーズ。',
    whenToUse: 'Claude Code が作成した Markdown / PDF / 画像 / HTML を、Slack やメールに添付したいとき。',
    howToUse: [
      'エディタで対象ファイルを選択',
      '⌘ + Shift + R で Finder が開く',
      '添付・ドラッグ&ドロップで次のアクションへ'
    ],
    caution: '共有前に必ず人が目視確認。',
    relatedSession: '第2回',
    relatedSections: [{ m: 1, s: 4, label: '第2回 2-4. Claude Code を使いこなす（実践TIPS・小ワザ）' }]
  },
  {
    id: 'tip-028',
    category: '⚡ Claude Code 個別',
    level: 'advanced',
    title: '⌘+Shift+. で隠しフォルダを表示し設定を見直す',
    summary: 'Mac の Finder で ⌘+Shift+. を押すと隠しファイル・隠しフォルダが表示される。.claude/ の中身（commands、settings.json）を覗いて自分の設定を見直す。',
    whenToUse: '自分の Claude Code 設定や使っているスキルをメンテナンスしたいとき。',
    howToUse: [
      'Finder で ⌘+Shift+. を押す',
      '.claude/ を開く',
      'commands/ と settings.json を確認',
      '使っていないスキルや設定を整理'
    ],
    caution: '中身を不用意に編集しない（tip-022 参照）。読むだけのつもりが事故につながる。',
    relatedSession: '第2回（補助資料）',
    relatedSections: [{ m: 1, s: 5, label: '第2回 2-5. CLAUDE.md / Hooks / Subagents で品質を固定する' }]
  },
  {
    id: 'tip-029',
    category: '⚡ Claude Code 個別',
    level: 'intermediate',
    title: 'Effort 設定を使い分けて思考の深さを調整する',
    summary: 'Claude Code の Effort 設定を Extra High にすると、より深く考えた回答が返る。タスクの重さに応じて切り替える。',
    whenToUse: '戦略立案・リサーチ・構成案作成・複雑な修正など、思考の質が成果物に直結するタスクのとき。',
    howToUse: [
      '思考の質が重要なタスクで Extra High に切り替え',
      '定型作業や事実確認はデフォルトで十分',
      '時間とトークン消費のバランスを見て使い分ける'
    ],
    caution: '全タスクで最高設定にすると時間とコストが増える。タスクの重さに応じて選ぶ。',
    relatedSession: '第2回',
    relatedSections: [{ m: 1, s: 4, label: '第2回 2-4. Claude Code を使いこなす（実践TIPS・小ワザ）' }]
  }
];

// セクション → 関連TIPS逆引き
function getRelatedTipsForSection(moduleIndex, sectionIndex) {
  if (typeof TIPS === 'undefined') return [];
  return TIPS.filter(t => (t.relatedSections || []).some(r => r.m === moduleIndex && r.s === sectionIndex));
}

// 修了テスト用の問題（全モジュールのクイズからシャッフルして出題）
function generateFinalTestQuestions() {
  const questions = [];
  MODULES.forEach((mod, modIndex) => {
    mod.quiz.forEach((q) => {
      questions.push({
        ...q,
        moduleIndex: modIndex,
        moduleName: mod.shortTitle
      });
    });
  });
  // シャッフル
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
  return questions;
}
