// ========================================
// Claude 研修アプリ - 学習コンテンツデータ
// 実践型カリキュラム: チャット・Cowork・Claude Code
// ========================================

const MODULES = [
  // ============================================================
  // 第1回：Claudeを理解し、Chatを使いこなす
  // ============================================================
  {
    id: 'session-1',
    title: '第1回：Claudeを理解し、Chatを使いこなす',
    shortTitle: '第1回',
    description: 'Claudeの全体像を理解し、セットアップを完了。Chat・プロジェクト・アーティファクト・Skills・MCP・リサーチ・Office / Chrome連携まで、業務で使う基本機能を一通り身につける',
    target: 'マネージャー以上（ChatGPT/Gemini経験者）',
    duration: '自分のペースで',
    prereq: 'Claudeアカウント（事前準備済み）',
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>`,
    objectives: [
      'Claudeが何者か、ChatGPT/Geminiと何が違うかを説明できる',
      'プロンプト3要素（前提の共有・タスク・ルール）で的確に指示が出せる',
      'Chat / Cowork / Claude Code の3モードを場面に応じて選べる',
      '業務PC・モバイルでClaudeを使い始められる状態になっている',
      'プロジェクトで案件ごとに「自分用 Claude」を作れる',
      'アーティファクトで成果物を独立した形で生成・共有できる',
      'Skills でクライアント標準・自分の作法を Claude に覚えさせられる',
      'MCP で社内ツール（Slack・Notion 等）を Claude に接続して活用できる',
      'Office アドイン（Excel / PowerPoint / Word）を業務で使い倒せる'
    ],
    coverGroups: [
      { label: 'Claudeを知る', icon: '💡', sections: [0, 1, 2, 3, 4], objectives: ['Claudeが何者か、ChatGPT/Geminiと何が違うかを説明できる', 'プロンプト3要素で的確に指示が出せる', 'Chat / Cowork / Claude Code の3モードを場面に応じて選べる'] },
      { label: '活用の幅を広げる', icon: '🚀', sections: [5, 6, 7], objectives: ['リサーチで包括的な調査を走らせられる', 'Officeアドインを業務で使いこなせる', 'Chrome拡張でブラウザ上のツールにもClaude を使える'] },
      { label: '品質を安定させる', icon: '🎯', sections: [8], objectives: ['Skillsでクライアント標準を覚えさせられる'] },
      { label: '外部と繋げる', icon: '🔌', sections: [9], objectives: ['MCPで社内ツールと安全に連携できる'] },
      { label: 'ワークスペースを作る', icon: '🏗️', sections: [10, 11], objectives: ['プロジェクトで案件ごとに「自分用Claude」を作れる', 'アーティファクトで成果物を独立した形で生成・共有できる'] }
    ],
    sections: [
      
      // --- A-1: Claudeとは何か ---
      {
        title: '1-1. Claudeとは何か',
        type: 'lecture',
        content: `
          <div class="visual-highlight-card opening">
            <p>たとえば提案資料。「どんなストーリーで行くか」を Claude と壁打ちし、構成が固まったら素材整理も下書きも任せる。<strong>自分の言葉で磨く部分だけに集中できます。</strong></p>
            <p>このセクションでは、<strong>Claude とは何か・他のAIと何が違うか・業務のどこに効くか</strong>を押さえます。</p>
          </div>

          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">Before：人力だけ</div>
              <p>議事録を読み込み、論点を整理</p>
              <p>提案ストーリーを一人で構想</p>
              <p>パワポの初稿を手作業で作成</p>
              <p style="margin-top:8px;font-weight:700">構想から初稿まで 半日以上</p>
            </div>
            <div class="ba-arrow">→</div>
            <div class="ba-item after">
              <div class="ba-label">After：Claude と一緒に</div>
              <p>議事録を Claude に投入し論点抽出</p>
              <p>ストーリーを対話で壁打ち・構造化</p>
              <p>下書き生成 → 自分の言葉で仕上げ</p>
              <p style="margin-top:8px;font-weight:700">構想から初稿まで 1時間以内</p>
            </div>
          </div>

          <h3>Claude とは</h3>
          <p>Anthropic 社が開発した生成AIです。ChatGPT（OpenAI）・Gemini（Google）と並ぶ主要サービスで、基本はチャット形式。<strong>ビジネス利用を前提にした設計</strong>が特徴です。</p>
          <p>「役に立つ・害がない・誠実である」を設計原則としており、<strong>指示に忠実で、クライアントに見せても安心できる出力</strong>が得意です。</p>

          <h3>業務で効く3つの違い</h3>

          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">📄</div>
              <div class="grid-title">1. 長文に強い</div>
              <div class="grid-desc">文庫本500頁超を一度に読めます。議事録30本＋レポート10本を一括投入して論点抽出が現実的。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🎯</div>
              <div class="grid-title">2. 指示が素直に通る</div>
              <div class="grid-desc">トーン・構成・長さを細かく指定できます。「クライアント向け」「社内レビュー用」を一言で切替可能。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🧠</div>
              <div class="grid-title">3. 思考のパートナー</div>
              <div class="grid-desc">対話を重ねて深める設計。壁打ち・論点構造化・クライアント反応シミュレーションで真価を発揮。</div>
            </div>
          </div>

          <h3>Claude の3つの使い方</h3>
          <p>Claude には目的の異なる <strong>3つのモード</strong> があります。「今やりたいこと」で選びます。</p>

          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">💬</div>
              <div class="grid-title">Chat（対話モード）</div>
              <div class="grid-desc">壁打ち・調査・分析・文章生成。最も基本の使い方</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🤖</div>
              <div class="grid-title">Cowork（委任モード）</div>
              <div class="grid-desc">ゴールを伝えて完成品をもらう。Excel・PPT・Wordの実ファイルを生成</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">💻</div>
              <div class="grid-title">Claude Code（自律実行モード）</div>
              <div class="grid-desc">アプリ・ツール開発、高度な自動化、スクリプト実行</div>
            </div>
          </div>

          <h3>どこからアクセスする？</h3>
          <p>同じ AI に複数の入口があります。用途に応じて使い分けます。</p>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">🌐</div>
              <div class="grid-title">Web（claude.ai）</div>
              <div class="grid-desc">ブラウザだけで今すぐ使える。<strong>まずはここから</strong></div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🖥️</div>
              <div class="grid-title">デスクトップアプリ</div>
              <div class="grid-desc">Cowork・Claude Code を使うにはアプリが必要。Chat もできる</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">Office / Chrome 拡張</div>
              <div class="grid-desc">今使っているアプリの中から Claude を呼び出せる</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">💻</div>
              <div class="grid-title">ターミナル（CLI）/ エディタ拡張（IDE）</div>
              <div class="grid-desc">Claude Code 専用。CLI＝文字だけで操作する画面、IDE＝コード編集ソフト。第2回で扱います</div>
            </div>
          </div>

          <h3>TIPS・落とし穴</h3>
          <div class="tip-box">
            <strong>TIP：「思考のパートナー」として使う</strong>
            <p>検索エンジンの賢い版ではなく、「自分一人で30分悩むこと」をぶつけて対話で詰める。これが Claude の価値の引き出し方です。</p>
          </div>
          <div class="warning-box">
            <strong>落とし穴：自信と正しさは別物</strong>
            <p>Claude も自信ありげに間違えます。重要な数字・固有名詞は必ずソース確認を。</p>
          </div>
        `
      },

      // --- A-2: Chat / Cowork / Claude Code の3モード比較 ---
      {
        title: '1-2. Chat / Cowork / Claude Code の3モード比較',
        type: 'lecture',
        content: `
          <h3>3つのモード</h3>
          <p>Claude は同じAIを複数のインターフェースから使えます。中心となるのが <strong>Chat / Cowork / Claude Code</strong> の3モード。同じAIですが、任せ方が大きく違います。</p>

          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">💬</div>
              <div class="grid-title">Chat — 対話モード</div>
              <div class="grid-desc">
                <ul>
                  <li><strong>得意：</strong>素早いやり取り、アイデア出し、下書きの反復</li>
                  <li><strong>動作：</strong>質問 → 即答の往復</li>
                  <li><strong>例：</strong>壁打ち、メール下書き、短いリサーチ</li>
                </ul>
              </div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🤖</div>
              <div class="grid-title">Cowork — 委任モード</div>
              <div class="grid-desc">
                <ul>
                  <li><strong>得意：</strong>多段作業、複数ソース統合、整形済み成果物</li>
                  <li><strong>動作：</strong>ゴール提示 → 計画 → 実行 → 完成品</li>
                  <li><strong>例：</strong>議事録→提案ドラフト、IR資料→ベンチマーク表</li>
                </ul>
              </div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">💻</div>
              <div class="grid-title">Claude Code — 自律実行モード</div>
              <div class="grid-desc">
                <ul>
                  <li><strong>得意：</strong>アプリ・ツール開発、高度な自動化、スクリプト実行</li>
                  <li><strong>動作：</strong>指示 → 自律実行 → 成果物</li>
                  <li><strong>例：</strong>提案用Webアプリ作成、データ処理の自動化</li>
                </ul>
              </div>
            </div>
          </div>

          <h3>どのモードを使う?</h3>
          <div class="visual-steps">
            <div class="step-item">
              <div class="step-number">1</div>
              <div class="step-content">
                <strong>会話で済む?</strong>
                <p>Yes → <strong>Chat</strong>（質問、壁打ち、短い作業）</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">2</div>
              <div class="step-content">
                <strong>完成品（ファイル）を作ってほしい?</strong>
                <p>Yes → <strong>Cowork</strong>（まとまった成果物を任せる）</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">3</div>
              <div class="step-content">
                <strong>アプリやツールを作りたい? 高度な自動化が必要?</strong>
                <p>Yes → <strong>Claude Code</strong>（アプリ開発、スクリプト実行）</p>
              </div>
            </div>
          </div>

          <p>迷ったら Chat から。「もっと任せたい」と感じたら Cowork → Claude Code と段階的に上げるのが自然な流れです。</p>

          <h3>Cowork と Claude Code の違い</h3>
          <p>どちらも「まとまった仕事を任せる」モードですが、任せ方が違います。</p>
          <div class="visual-comparison">
            <div class="comp-item">
              <h4>Cowork</h4>
              <ul>
                <li>やりたいことをゴールで伝える</li>
                <li>Claude が計画→実行→完成品を返す</li>
                <li>毎回の指示で仕上がりをコントロール</li>
              </ul>
            </div>
            <div class="comp-item">
              <h4>Claude Code</h4>
              <ul>
                <li>ルールや手順書を事前に定義できる</li>
                <li>定義に従って自律的に実行・検証する</li>
                <li>Webアプリやツールの開発もできる</li>
              </ul>
            </div>
          </div>

          <h3>Claude 製品ラインナップ</h3>
          <p>Claude は複数のインターフェースから利用でき、それぞれに専門機能があります。本研修で段階的にカバーします。</p>

          <div class="visual-product-map">
            <div class="product-map-row full">
              <div class="product-group browser">
                <div class="product-group-header"><span class="group-icon">🌐</span> ブラウザ（claude.ai）</div>
                <div class="product-group-body">
                  <div class="product-main-feature">
                    <div class="grid-icon">💬</div>
                    <div class="grid-title">Chat</div>
                    <div class="grid-desc">全セクションで使用</div>
                  </div>
                  <div class="product-sub-features">
                    <div class="product-sub-item"><span class="sub-icon">📦</span><div class="sub-title">プロジェクト</div><div class="sub-ref">1-11</div></div>
                    <div class="product-sub-item"><span class="sub-icon">🎨</span><div class="sub-title">アーティファクト</div><div class="sub-ref">1-12</div></div>
                    <div class="product-sub-item"><span class="sub-icon">🔍</span><div class="sub-title">リサーチ</div><div class="sub-ref">1-6</div></div>
                    <div class="product-sub-item"><span class="sub-icon">🖼️</span><div class="sub-title">デザイン</div><div class="sub-ref">対象外</div></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="product-map-row full">
              <div class="product-group desktop">
                <div class="product-group-header"><span class="group-icon">🖥️</span> デスクトップアプリ</div>
                <div class="product-group-body">
                  <div class="visual-grid-item"><div class="grid-icon">💬</div><div class="grid-title">Chat</div><div class="grid-desc">claude.ai と同等の機能<br><small>全セクションで使用</small></div></div>
                  <div class="visual-grid-item"><div class="grid-icon">🤖</div><div class="grid-title">Cowork</div><div class="grid-desc">業務委任<br><small>第2回</small></div></div>
                  <div class="visual-grid-item"><div class="grid-icon">💻</div><div class="grid-title">Claude Code</div><div class="grid-desc">自律実行<br><small>第2回</small></div></div>
                </div>
              </div>
            </div>
            <div class="product-map-row split">
              <div class="product-group office">
                <div class="product-group-header"><span class="group-icon">📊</span> Office アドイン</div>
                <div class="product-group-body">
                  <div class="visual-grid-item"><div class="grid-icon">📋</div><div class="grid-title">Excel / PPT / Word</div><div class="grid-desc">サイドバーで Chat<br><small>1-7</small></div></div>
                </div>
              </div>
              <div class="product-group chrome">
                <div class="product-group-header"><span class="group-icon">🧩</span> Chrome 拡張</div>
                <div class="product-group-body">
                  <div class="visual-grid-item"><div class="grid-icon">🌐</div><div class="grid-title">Claude in Chrome</div><div class="grid-desc">Webページ上で Chat<br><small>1-8</small></div></div>
                </div>
              </div>
            </div>
          </div>
        `
      },

      // --- A-3: セットアップ ---
      {
        title: '1-3. セットアップ',
        type: 'hands-on',
        content: `
          <div class="visual-big-message">
            <div class="big-message-icon">🚀</div>
            <div class="big-message-text">ゴール：全ツールが動く状態を作る</div>
            <div class="big-message-sub">claude.ai + デスクトップアプリ + Office アドイン + Chrome 拡張。ここが完了すれば次のセクションに進めます。</div>
          </div>

          <h3>セットアップ</h3>
          <div class="visual-steps">
            <div class="visual-step-item">
              <div class="step-marker">1</div>
              <div class="step-body">
                <div class="step-title">アカウント確認</div>
                <div class="step-desc">claude.ai にアクセスしてログイン。右上アイコン > Settings で自分のアカウントが表示されれば OK。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">2</div>
              <div class="step-body">
                <div class="step-title">claude.ai 動作確認</div>
                <div class="step-desc">新規チャットで何でもよいので話しかけて、応答が返ることを確認。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">3</div>
              <div class="step-body">
                <div class="step-title">デスクトップアプリ導入</div>
                <div class="step-desc">claude.com/download からインストーラーをダウンロードして導入。起動後ログインし、上部のモードセレクタに Chat / Cowork / Claude Code が表示されているか確認。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">4</div>
              <div class="step-body">
                <div class="step-title">Microsoft 365 アドイン導入</div>
                <div class="step-desc">各アプリで Insert > Add-ins から「Claude by Anthropic」を検索してインストール。見つからない場合は Office Store から直接追加：<a href="https://pages.store.office.com/addinsinstallpage.aspx?assetid=WA200009404" target="_blank">Excel</a> / <a href="https://pages.store.office.com/addinsinstallpage.aspx?assetid=WA200010001" target="_blank">PowerPoint</a> / <a href="https://marketplace.microsoft.com/en-us/product/office/wa200010453" target="_blank">Word</a>。各アプリでサイドバーが開き、応答が返ることを確認。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">5</div>
              <div class="step-body">
                <div class="step-title">Chrome 拡張導入</div>
                <div class="step-desc"><a href="https://chromewebstore.google.com/detail/claude/fcoeoabgfenejglbffodgkkbkcdhcgfn" target="_blank">Chrome ウェブストア</a>から「Claude」をインストール。ブラウザ右上の拡張アイコンをクリックし、サイドバーが開くことを確認。</div>
              </div>
            </div>
          </div>
        `
      }
    ,
      
      // --- A-4: プロンプトの基本 ---
      {
        title: '1-4. プロンプトの基本 — 3要素',
        type: 'hands-on',
        content: `
          <div class="visual-big-message">
            <div class="big-message-icon">💡</div>
            <div class="big-message-text">プロンプトの質 = 出力の質</div>
            <div class="big-message-sub">Claude は「指示通りに動く」性質が特に強い。3要素を意識するだけで出力精度が劇的に変わります。</div>
          </div>

          <h3>プロンプト3要素</h3>

          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">🎬</div>
              <div class="grid-title">1. 前提の共有</div>
              <div class="grid-desc">自分が誰で、何の文脈で、何を達成したいのかを伝える</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📋</div>
              <div class="grid-title">2. タスク定義</div>
              <div class="grid-desc">何をしてほしいか、具体的な動詞で明示する</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📐</div>
              <div class="grid-title">3. ルール指定</div>
              <div class="grid-desc">出力の形式・トーン・制約を伝える</div>
            </div>
          </div>

          <h3>良い例 vs 悪い例</h3>
          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">悪い例</div>
              <p><strong>前提の共有なし：</strong>「提案書を作りたい」</p>
              <p><strong>タスクが曖昧：</strong>「競合を見て」</p>
              <p><strong>ルールなし：</strong>「いい感じで」</p>
            </div>
            <div class="ba-arrow">→</div>
            <div class="ba-item after">
              <div class="ba-label">良い例</div>
              <p><strong>前提の共有：</strong>「私は800のシニアコンサルで、製造業向け中計策定の提案を作っています」</p>
              <p><strong>タスク定義：</strong>「添付の3社競合事業ポートフォリオから、共通する戦略パターンと各社固有の強みを抽出してください」</p>
              <p><strong>ルール指定：</strong>「表形式、500字以内、各項目に出典併記、日本語、専門用語の説明は不要です」</p>
            </div>
          </div>

          <div class="info-box">
            <strong>「同僚に頼むつもり」で書く</strong>
            <p>Anthropic は「Claude には同僚に頼むように話しかけるのが一番」と公式に言っています。「これお願いできる?」「コンテキストはこんな感じで」のような自然な語り口で十分です。</p>
          </div>

          <h3>さらに効くテクニック</h3>
          <p>3要素に加えて、以下の2つを使うと精度がさらに上がります。</p>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">📎</div>
              <div class="grid-title">例を見せる</div>
              <div class="grid-desc">「こういう形式で」と実例を1つ貼るのが最も確実。形式を言葉で説明するより圧倒的に伝わります。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔢</div>
              <div class="grid-title">ステップに分解する</div>
              <div class="grid-desc">複雑なタスクは一度に頼まず「まず○○して、次に△△して」と段階を区切ると精度が上がります。</div>
            </div>
          </div>

          <h3>1回で完成させなくていい</h3>
          <p>最初の出力は<strong>たたき台</strong>。対話で磨いていくのが最も効率的です。</p>
          <div class="visual-steps">
            <div class="step-item">
              <div class="step-number">1</div>
              <div class="step-content">
                <strong>追加質問する</strong>
                <p>「2点目をもう少し詳しく」「もう少し短くしてください」</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">2</div>
              <div class="step-content">
                <strong>フィードバックする</strong>
                <p>「これいいですね、ただトーンが固いのでもう少し砕けて」</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">3</div>
              <div class="step-content">
                <strong>やり直す / 新しいチャット</strong>
                <p>話が大きく逸れたら、新規チャットでプロンプトをやり直す方が速い</p>
              </div>
            </div>
          </div>

          <p>この<strong>「指示 → 確認 → 改善」の繰り返し</strong>が、AI活用で最も大事な習慣です。次のセクションで詳しく扱います。</p>

          <h3>ハンズオン①：ファイルを添付してみる</h3>
          <p>PDF・Word・Excel・PowerPoint・CSV・テキスト・画像など、多くの形式のファイルをチャットに添付できます。</p>
          <div class="try-box">
            <strong>やってみよう</strong>
            <p>手元の PDF や Word ファイルを Claude に添付して、「この資料の要点を3つにまとめて」と指示してみてください。</p>
          </div>

          <h3>ハンズオン②：Claudeへの指示 を設定する</h3>
          <p><strong>設定 > 一般 > Claudeへの指示</strong> に自分の前提を登録すると、毎回伝えなくても全会話で自動適用されます。</p>

          <h4>設定パターン例</h4>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">🏢</div>
              <div class="grid-title">基本形</div>
              <div class="grid-desc">私は800のコンサルタントです。回答は日本語、簡潔に、結論先行で。専門用語の説明は不要です。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">分析重視</div>
              <div class="grid-desc">構造化して提示してください。MECEを意識し、表や箇条書きを積極的に使ってください。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">✍️</div>
              <div class="grid-title">資料作成重視</div>
              <div class="grid-desc">クライアント向け資料のトーンで。丁寧語、数字は根拠付き、1スライド1メッセージを原則に。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">💬</div>
              <div class="grid-title">壁打ち重視</div>
              <div class="grid-desc">いきなり答えを出さず、まず論点を整理してから提案してください。反論や別視点も積極的に。</div>
            </div>
          </div>

          <div class="try-box">
            <strong>やってみよう</strong>
            <p>上の例を参考に、自分の「Claudeへの指示」を設定してみましょう。設定後、新しいチャットで「私についてどんな前提を持っていますか？」と聞くと、設定内容が返ってきます。</p>
          </div>

          <div class="tip-box">
            <strong>💡 TIP：組み合わせてカスタマイズ</strong><br>
            上のパターンはそのまま使ってもいいし、複数を組み合わせてもOK。自分のスタイルに合わせて調整してみてください。
          </div>

          <h3>TIPS・落とし穴</h3>
          <div class="tip-box">
            <strong>TIP：具体性 = 精度</strong>
            <p>「いい感じに」→「800字以内・表形式・結論先行」。具体化するほど初稿の精度が上がります。</p>
          </div>
          <div class="warning-box">
            <strong>落とし穴：長く書きすぎる</strong>
            <p>「ちょっと長めの依頼メール」くらいで十分。長すぎると指示の取りこぼしが起きます。</p>
          </div>
          <div class="warning-box">
            <strong>落とし穴：「Claudeへの指示」に詰め込みすぎ</strong>
            <p>全会話に適用されるので、短く（500字以内が目安）。特定の案件の情報は入れず、どの仕事でも共通する前提だけにしましょう。</p>
          </div>
        `
      },

      // --- A-5: 4D Framework ---
      {
        title: '1-5. AIの出力品質を上げる4つのスキル',
        type: 'lecture',
        content: `
          <div class="visual-big-message">
            <div class="big-message-icon">🎯</div>
            <div class="big-message-text">プロンプトだけでは足りない</div>
            <div class="big-message-sub">何を任せるか・結果をどう評価するか・責任をどう持つか。プロンプトの書き方に加えて、この3つを意識するだけで出力品質が大きく変わります。</div>
          </div>

          <h3>4D Framework — 4つのスキル</h3>
          <p>後輩に仕事を任せるとき、あなたは自然に4つのことをしています。</p>
          <p><strong>何を任せるか決める → 的確に指示を出す → 上がってきた成果物をチェックする → ミスが外に出ないよう管理する</strong></p>
          <p>AIとの仕事もまったく同じです。Anthropic はこれを <strong>4D Framework</strong> と呼んでいます。1-4 で学んだプロンプトの書き方（Description）に加え、残り3つを本セクションで扱います。</p>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">📤</div>
              <div class="grid-title">Delegation（委任）</div>
              <div class="grid-desc">何をAIに任せ、何を自分でやるか。例：議事録整形は Claude、論点の優先順位付けは自分</div>
            </div>
            <div class="visual-grid-item" style="opacity:0.55">
              <div class="grid-icon">✏️</div>
              <div class="grid-title">Description（指示）</div>
              <div class="grid-desc">← 1-4 で学習済み。プロンプト3要素で伝える、例を見せる</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔎</div>
              <div class="grid-title">Discernment（評価）</div>
              <div class="grid-desc">出てきたものが正しいか・適切か。数字の裏取り、論理の飛躍チェック</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">⚖️</div>
              <div class="grid-title">Diligence（責任）</div>
              <div class="grid-desc">倫理的・透明な利用ができているか。クライアント機密の扱い、出典の明示</div>
            </div>
          </div>

          <h3>Delegation — 何を任せ、何を自分でやるか</h3>
          <div class="visual-comparison">
            <div class="comp-item">
              <h4>任せやすいタスク</h4>
              <ul>
                <li>パターン化された処理（議事録整形、定型レポート、要約）</li>
                <li>大量データの一次処理（競合事例の比較、ファイル整理）</li>
                <li>下書きの初稿生成（「同僚が30分で書いてくれた草案」レベル）</li>
                <li>複数ソースの突き合わせ（矛盾箇所の発見）</li>
              </ul>
            </div>
            <div class="comp-item">
              <h4>自分で残すべきタスク</h4>
              <ul>
                <li>戦略的な判断（「この論点を提案の中心に据えるか」）</li>
                <li>クライアント関係の機微（個別事情の解釈、政治的配慮）</li>
                <li>創造的な切り口（「クライアントが想像していない視点」）</li>
                <li>最終責任を伴う判断（数字の裏取り後の意思決定）</li>
              </ul>
            </div>
          </div>

          <p>判断の目安：<strong>「ミスがあったとき、自分で気づいて直せるか？」</strong>。直せるなら任せる、直せないなら自分でやる。</p>

          <h3>Discernment — 出力を評価する</h3>
          <p><strong>流暢さ ≠ 正しさ</strong> — これが Discernment の出発点です。</p>

          <h4>Description ⇄ Discernment ループ</h4>
          <p>1-4 で学んだ「指示 → 確認 → 改善」の正体がこのループです。指示の出し方（Description）と結果の評価（Discernment）はセットで回します。</p>

          <div class="visual-flow">
            <div class="flow-step">
              <div class="flow-icon">✏️</div>
              <div class="flow-label">指示を出す</div>
              <div class="flow-desc">3要素 + テクニック</div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <div class="flow-icon">🤖</div>
              <div class="flow-label">Claude が出力</div>
              <div class="flow-desc">初稿が返ってくる</div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <div class="flow-icon">🔎</div>
              <div class="flow-label">評価する</div>
              <div class="flow-desc">正しさ・過不足を確認</div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <div class="flow-icon">🔄</div>
              <div class="flow-label">指示を改善</div>
              <div class="flow-desc">足りない情報を足す</div>
            </div>
          </div>

          <p>このループを2〜3回転させるだけで、出力品質が大きく変わります。よくある評価ポイント：</p>

          <div class="visual-steps">
            <div class="step-item">
              <div class="step-number">!</div>
              <div class="step-content">
                <strong>回答が一般的すぎる</strong>
                <p>原因：プロンプトに文脈が足りない → 対処：役割・聴衆・制約を足す</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">!</div>
              <div class="step-content">
                <strong>もっともらしいが間違っている（＝ハルシネーション）</strong>
                <p>原因：AIの幻覚（ハルシネーション） → 対処：出典明示・Web検索ON・後で検証</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">!</div>
              <div class="step-content">
                <strong>トーンが合わない / 長さが違う</strong>
                <p>原因：指示が不十分 → 対処：「もっと砕けて」「200字以内」+例を見せる</p>
              </div>
            </div>
          </div>

          <h4>AIの「でっち上げ」を見抜く</h4>
          <p>AIが事実でない内容をもっともらしく出力することをハルシネーション（Hallucination）と呼びます。特に注意すべき箇所：<strong>固有名詞</strong>（存在しない論文・URL）、<strong>数字</strong>（統計値・市場規模）、<strong>引用文</strong>（「らしく聞こえる」発言）。</p>
          <div class="visual-steps">
            <div class="step-item">
              <div class="step-number">1</div>
              <div class="step-content">
                <strong>出典を併記させる</strong>
                <p>「これは P3 の表3 に基づきます」のように出典を要求する</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">2</div>
              <div class="step-content">
                <strong>Web 検索を有効にする</strong>
                <p>検索結果のソースリンクが付く</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">3</div>
              <div class="step-content">
                <strong>自分の専門領域は特に厳しく見る</strong>
                <p>「一見正しく書いている」が一番危ない</p>
              </div>
            </div>
          </div>

          <h3>Diligence — 責任ある利用</h3>
          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">🔒</div>
              <div class="grid-title">クライアント機密</div>
              <div class="grid-desc">アップロードする情報がクライアント NDA の範囲を超えていないか確認</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📑</div>
              <div class="grid-title">出典の明示</div>
              <div class="grid-desc">Claude の出力をそのまま使わず、元ソースを当たり直す</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">💡</div>
              <div class="grid-title">意思決定の透明性</div>
              <div class="grid-desc">「Claude にこう言われたので」ではなく、自分が判断した理由を説明できるように</div>
            </div>
          </div>

          <h3>TIPS・落とし穴</h3>
          <div class="tip-box">
            <strong>TIP：「1分ルール」</strong>
            <p>出力が綺麗でも最低1分は疑う。数字を1つ裏取り、論理の飛躍を1つ探す。これだけで品質が変わります。</p>
          </div>
          <div class="warning-box">
            <strong>落とし穴：自信ある文体 ≠ 正しさ</strong>
            <p>「確実です」と書いてあっても確実とは限りません。</p>
          </div>

          <h3>まとめ — 4Dはこの研修全体で深めていく</h3>
          <p>4つのスキルは、この先のセクションで具体的なツール・機能と結びつきます。</p>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">📤</div>
              <div class="grid-title">Delegation</div>
              <div class="grid-desc">Chat / Cowork / Claude Code の3モード選択（1-2）、MCP で外部ツール連携（1-10）</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">✏️</div>
              <div class="grid-title">Description</div>
              <div class="grid-desc">プロジェクトで文脈を永続化（1-11）、Skills で手順を標準化（1-9）</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔎</div>
              <div class="grid-title">Discernment</div>
              <div class="grid-desc">Description⇄Discernment ループを全ハンズオンで実践</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">⚖️</div>
              <div class="grid-title">Diligence</div>
              <div class="grid-desc">CLAUDE.md で品質ルールを組織化（第2回）</div>
            </div>
          </div>
        `
      },

      // --- B-1: リサーチ ---
      {
        title: '1-6. リサーチ',
        type: 'lecture',
        content: `
          <h3>リサーチ とは</h3>
          <p>通常の Web 検索が「1回検索→1回回答」なのに対して、リサーチは<strong>複数の検索を自律的に連鎖</strong>させて深いリサーチを行います。</p>

          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">通常検索</div>
              <h4>1人の調査員が30分で1つ調べる</h4>
              <ul>
                <li>1回の検索で1回の回答</li>
                <li>単一ソース</li>
                <li>所要時間：数十秒</li>
              </ul>
            </div>
            <div class="ba-arrow">→</div>
            <div class="ba-item after">
              <div class="ba-label">リサーチ</div>
              <h4>調査チームが多角的に連鎖調査</h4>
              <ul>
                <li>複数検索を自律的に連鎖</li>
                <li>Web + MCP + ローカルファイルを統合</li>
                <li>所要時間：5〜45分</li>
              </ul>
            </div>
          </div>

          <h3>使い分けの判断</h3>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">✅</div>
              <div class="grid-title">リサーチ を使うべき</div>
              <div class="grid-desc">複数ソース統合、競合比較、業界調査、提案書の根拠資料収集</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">⏸️</div>
              <div class="grid-title">使うべきでない</div>
              <div class="grid-desc">単発の事実確認（→普通の検索）、じっくり考えさせたい（→Extended Thinking）、社内ナレッジのみ（→Enterprise Search / 1-10参照）</div>
            </div>
          </div>

          <h3>効果的な リサーチ プロンプトの3つのコツ</h3>
          <div class="visual-steps">
            <div class="step-item">
              <div class="step-number">1</div>
              <div class="step-content">
                <h4>具体的目標を明示</h4>
                <p>「EV 市場について教えて」ではなく「バッテリー市場を、主要プレイヤー・技術トレンド・サプライチェーン課題で分析」</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">2</div>
              <div class="step-content">
                <h4>出力構造を指定</h4>
                <p>セクション番号付きで構造を指定すると、リサーチ がその通りに組み立てる</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">3</div>
              <div class="step-content">
                <h4>制約を含める</h4>
                <p>予算・地理・時間軸の制約を入れると、無駄な領域を調べない</p>
              </div>
            </div>
          </div>

        `
      },

      // --- B-2: Claude in Office ---
      {
        title: '1-7. Claude in Office',
        type: 'lecture',
        content: `
          <div class="visual-big-message">
            <div class="big-message-icon">📊</div>
            <div class="big-message-text">Office から離れずに AI を使う</div>
            <div class="big-message-sub">Excel・PowerPoint・Word のサイドバーから Claude に指示。コピペで行き来する必要がなくなります。</div>
          </div>

          <h3>Claude for Excel</h3>
          <p>開いているワークブックの中身を Claude が読み取り、セル単位で引用しながら回答・操作します。</p>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">🔍</div>
              <div class="grid-title">モデル分析・デバッグ</div>
              <div class="grid-desc">「Q3の売上予測を動かしている前提条件は？」のような質問にセル参照付きで回答。#VALUE! エラーの原因特定と修正も可能</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📐</div>
              <div class="grid-title">財務モデル構築</div>
              <div class="grid-desc">DCF・LBO・3ステートメントモデルのテンプレート構築。数式の依存関係を保ったままシナリオ分析（強気/弱気）を追加</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🧹</div>
              <div class="grid-title">データクリーニング</div>
              <div class="grid-desc">日付形式の統一、重複行の削除、表記揺れの標準化。「A列の会社名を正式名称に揃えて」のように自然言語で指示</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📋</div>
              <div class="grid-title">テンプレート自動入力</div>
              <div class="grid-desc">既存テンプレートに新しいデータを流し込み。予算実績比較、KPIダッシュボード、月次サマリーの更新に</div>
            </div>
          </div>

          <h3>Claude for PowerPoint</h3>
          <p>既存のスライドマスター（レイアウト・フォント・配色）を読み取り、テンプレートに準拠したスライドを生成・編集します。</p>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">🎨</div>
              <div class="grid-title">テンプレ準拠スライド生成</div>
              <div class="grid-desc">「このテンプレートで市場規模分析（TAM/SAM/SOM）のセクションを作って」→ マスタスライドのフォーマットを維持したまま生成</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">✏️</div>
              <div class="grid-title">既存スライドの改善</div>
              <div class="grid-desc">「スライド3のテキストが多すぎるので簡潔に」「推奨事項セクションを図解に変えて」など、ピンポイントで編集</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">ネイティブチャート作成</div>
              <div class="grid-desc">箇条書きやデータからプロセスフロー図、比較チャート、円グラフを生成。画像ではなく編集可能な PowerPoint オブジェクト</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔄</div>
              <div class="grid-title">デッキ再構成</div>
              <div class="grid-desc">スライドの並び替え、セクション間のトランジション追加、アジェンダスライドの自動生成。ストーリーラインの改善提案も</div>
            </div>
          </div>

          <h3>Claude for Word</h3>
          <p>Word 文書の作成・編集・レビューを支援します。変更履歴として挿入されるため、差分が明確です。</p>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">📝</div>
              <div class="grid-title">報告書・提案書のドラフト</div>
              <div class="grid-desc">構成を指定して長文ドラフトを生成。見出しスタイル（Heading 1/2/3）が適用された構造化文書として出力</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔎</div>
              <div class="grid-title">レビュー・フィードバック</div>
              <div class="grid-desc">「論理構成の整合性」「主張を裏付けるエビデンスの十分性」など観点を指定して文書をレビュー。コメントとして挿入</div>
            </div>
          </div>

          <h3>クロスアプリ共有コンテキスト</h3>
          <p>Claude は複数の Office ファイルをまたいで会話の文脈を引き継ぎます。手動のコピペなしに、アプリ間でデータと分析が流れます。</p>
          <div class="visual-before-after">
            <div class="ba-before">
              <div class="ba-label">従来</div>
              <div class="ba-content">Excel で分析 → 結果をコピー → claude.ai に貼り付け → 回答をコピー → PPT に貼り付け → 体裁を整える</div>
            </div>
            <div class="ba-arrow">→</div>
            <div class="ba-after">
              <div class="ba-label">Claude in Office</div>
              <div class="ba-content">Excel で分析を依頼 → 「この分析をスライドにして」→ PPT に切り替えるだけ。文脈が自動で引き継がれる</div>
            </div>
          </div>
          <div class="visual-steps">
            <div class="step-item">
              <div class="step-number">1</div>
              <div class="step-content">
                <h4>Excel → データ分析</h4>
                <p>「対象企業の財務データから、バリュエーション比較表を作成して」</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">2</div>
              <div class="step-content">
                <h4>PowerPoint → スライド化</h4>
                <p>「今の分析結果をもとに、競合比較のスライドを3枚作って」→ Excel の文脈を自動参照</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">3</div>
              <div class="step-content">
                <h4>Word → 報告書</h4>
                <p>「Excel の分析と PPT の内容を踏まえて、クライアント向け報告書をドラフトして」</p>
              </div>
            </div>
          </div>
        `
      },

      // --- B-3: Claude in Chrome ---
      {
        title: '1-8. Claude in Chrome',
        type: 'lecture',
        content: `
          <h3>Chrome 拡張でできること</h3>
          <p>Chrome 拡張機能として動く Claude。ブラウザのサイドバーに表示され、現在開いているタブに対して質問・操作ができます。</p>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">📄</div>
              <div class="grid-title">ページ要約・メール対応</div>
              <div class="grid-desc">長い記事の要約、Gmail / Outlook on the web での返信下書き</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔧</div>
              <div class="grid-title">フォーム入力・マルチステップ自動化</div>
              <div class="grid-desc">繰り返し入力の自動化、複数ページをまたぐ手続き</div>
            </div>
          </div>

          <div class="info-box">
            <strong>「MCP もアドインもないところ」に届くのが価値</strong>
            <p>社内ポータル・CRM・業界ダッシュボードのような Web ベースの独自ツールには MCP もアドインも存在しないことが多い。Chrome 拡張なら「ブラウザで開けるなら Claude が読める」発想で対応できます。</p>
          </div>

          <div class="tip-box">
            <strong>TIP：Chrome 拡張は「タブ間で文脈維持」</strong>
            <p>複数タブを跨いで文脈を覚えているので「Aタブの情報と Bタブの情報を組み合わせて」が直感的にできます。</p>
          </div>
        `
      },

      // --- C-1: Skills ---
      {
        title: '1-9. Skills',
        type: 'hands-on',
        content: `
          <h3>Skill とは</h3>
          <p><strong>Skill = タスクの手順・ルール・テンプレを書いた Markdown ファイル</strong>。Claude は「この Skill が今のタスクに該当する」と判断したら自動で読み込んで実行します。</p>

          <div class="visual-big-message">
            <div class="big-message-icon">📜</div>
            <div class="big-message-text">「やり方」を覚えさせれば、誰がやっても同じ品質になる</div>
            <div class="big-message-sub">Skill は Claude に手順・フォーマット・基準を教え込む仕組みです</div>
          </div>

          <h3>2種類の Skill</h3>
          <div class="visual-comparison">
            <div class="comp-item">
              <h4>Anthropic 組み込み Skill</h4>
              <ul>
                <li>公式に用意済み、何もしなくても自動で動く</li>
                <li>Excel (.xlsx) 生成</li>
                <li>PowerPoint (.pptx) 生成</li>
                <li>Word (.docx) / PDF 生成</li>
              </ul>
            </div>
            <div class="comp-item">
              <h4>カスタム Skill</h4>
              <ul>
                <li>自分・自チームが作る</li>
                <li>業界・案件特化の手順を Skill 化</li>
                <li>例：「800の調査報告書 Skill」</li>
                <li>Team / Enterprise で組織共有可能</li>
              </ul>
            </div>
          </div>

          <h3>Skills と プロジェクトの違い</h3>
          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">プロジェクト</div>
              <h4>知識（参照すべき情報）</h4>
              <ul>
                <li>クライアント情報、議事録、過去成果物</li>
                <li>プロジェクト内の全会話で継続</li>
              </ul>
            </div>
            <div class="ba-arrow">+</div>
            <div class="ba-item after">
              <div class="ba-label">Skills</div>
              <h4>やり方（実行する手順）</h4>
              <ul>
                <li>議事録の整形、提案書の作り方</li>
                <li>関連タスクが来た時に自動発動</li>
              </ul>
            </div>
          </div>

          <h3>カスタム Skill の作り方</h3>
          <div class="visual-steps">
            <div class="step-item">
              <div class="step-number">1</div>
              <div class="step-content">
                <h4>Claude と対話で作る</h4>
                <p>「○○のための Skill を作りたい」と話しかけ、質問に答えていく</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">2</div>
              <div class="step-content">
                <h4>参考資料・お手本を添付</h4>
                <p>テンプレート・過去の良い成果物を渡す</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">3</div>
              <div class="step-content">
                <h4>Skill ファイル (zip) をダウンロード</h4>
                <p>Claude が生成。中身は SKILL.md + テンプレ + サンプル</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">4</div>
              <div class="step-content">
                <h4>アップロードして有効化</h4>
                <p>Customize > Skills > アップロード > トグル ON</p>
              </div>
            </div>
          </div>

          <div class="info-box">
            <strong>description が最重要</strong>
            <p>SKILL.md の description フィールドで Claude は「いつこの Skill を呼ぶべきか」を判断します。具体的に書いてください。</p>
          </div>

          <div class="try-box">
            <strong>ハンズオン：カスタム Skill を作ってみる</strong>
            <ol>
              <li>Settings > Capabilities で「Code execution and file creation」を ON に</li>
              <li>新規チャットで「案件議事録から800の標準フォーマットの議事録を作る Skill を作りたい」と依頼</li>
              <li>Claude の質問に答え、お手本の議事録を添付</li>
              <li>生成された zip を Customize > Skills にアップロード</li>
              <li>別のチャットで「添付の議事録を整形して」と試し、Skill が自動で呼ばれるか確認</li>
            </ol>
          </div>

          <div class="tip-box">
            <strong>TIP：1 Skill = 1タスクで作る</strong>
            <p>巨大な「全部入り Skill」は Claude が手順を取りこぼします。1 Skill = 1タスクで分割する方が安定します。</p>
          </div>
          <div class="tip-box">
            <strong>TIP：組織共有で資産化</strong>
            <p>Team / Enterprise で Skill を組織共有すれば、新人の最初の成果物の品質が即座に底上げされます。</p>
          </div>
          <div class="warning-box">
            <strong>落とし穴：Code execution を有効化していない</strong>
            <p>Settings > Capabilities でこれが OFF だと組み込み Skill すら動きません。最初に確認してください。</p>
          </div>
          <div class="info-box">
            <strong>Office アドインでも Skill は有効</strong>
            <p>有効化した Skill は Office アドイン内でも自動で呼ばれます。たとえば提案書 Skill を1つ作れば、PowerPoint アドインからも同じ品質で出力されます。</p>
          </div>
        `
      },

      // --- C-2: MCP ---
      {
        title: '1-10. MCP',
        type: 'lecture',
        content: `
          <h3>MCP とは</h3>
          <p><strong>MCP（Model Context Protocol）</strong>は、Claude と外部ツール（Slack、Notion、社内 DB 等）を繋ぐオープン規格です。「USB-C のような共通規格を AI ツール接続にも」という発想です。</p>

          <div class="visual-big-message">
            <div class="big-message-icon">🔌</div>
            <div class="big-message-text">外部サービスと Claude を繋ぐ仕組み</div>
            <div class="big-message-sub">MCP（コネクタ）を使うと、Slack・Notion・Google Drive などの社内ツールに Claude からアクセスできます</div>
          </div>

          <h3>範囲制限の二重担保</h3>
          <div class="visual-steps">
            <div class="step-item">
              <div class="step-number">1</div>
              <div class="step-content">
                <h4>一次担保：アクセス範囲の技術的制限</h4>
                <p>Slack は Bot を招待したチャンネルのみ。Notion は共有設定したページのみ。それ以外は技術的に読み込めない仕組みです。</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">2</div>
              <div class="step-content">
                <h4>二次担保：Skill / Instructions による意図の明示</h4>
                <p>Cowork プロジェクトの Instructions に「触ってよい範囲」を明記。運用ミスがあっても Claude 自身がブレーキ。</p>
              </div>
            </div>
          </div>

          <div class="info-box">
            <strong>なぜ二重か</strong>
            <p>Token だけだと「招待範囲全部に無自覚にアクセスする」リスク。Instructions だけだと「お願いベース」で信頼性が低い。ベルト＆サスペンダー（二重保険）で運用します。</p>
          </div>

          <h3>「コネクタ」との関係</h3>
          <p>claude.ai の Settings に「コネクタ」というメニューがあります。Slack・Notion・Google Drive 等をワンクリックで接続できる機能です。</p>
          <p><strong>コネクタの中身は MCP です。</strong>Anthropic が主要サービス向けに MCP サーバーを事前構築し、GUI で簡単に接続できるようにしたもの。技術的には同じ仕組みです。</p>
          <div class="info-box">
            <strong>本研修での使い分け</strong>
            <p>claude.ai のコネクタは手軽ですが、接続範囲の細かい制御が難しい場合があります。本研修では Slack / Notion を<strong>チャンネル・ページ単位で範囲を絞って</strong>接続するため、MCP サーバーを直接設定する方式を使います。</p>
          </div>


          <h3>Claude in Slack</h3>
          <p>Slack 内で <code>@Claude</code> を呼んで直接会話できます。MCP とは逆方向の連携です。</p>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">💬</div>
              <div class="grid-title">Slack → Claude</div>
              <div class="grid-desc">スレッド要約、論点抽出、ミーティング前準備</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔗</div>
              <div class="grid-title">Claude → Slack（MCP）</div>
              <div class="grid-desc">MCP 経由で対象チャンネルの議論を読み込み</div>
            </div>
          </div>

          <h3>Enterprise Search（「{組織名}に質問」）</h3>
          <p>組織レベルでコネクタが接続されていると、サイドバーに<strong>「{組織名}に質問」</strong>ボタンが出ます。接続済みツール（Slack・Notion 等）を横断検索して回答を返す機能です。</p>
          <div class="info-box">
            <strong>当社では「Eight-hundredに質問」が利用可能</strong>
            <p>Notion・Slack が接続済みです。社内ナレッジを横断して調べたいときに使ってみてください。</p>
          </div>
        `
      },

      // --- D-1: プロジェクト ---
      {
        title: '1-11. プロジェクト',
        type: 'hands-on',
        content: `
          <h3>プロジェクト とは</h3>
          <p><strong>案件・テーマに紐づく独立したワークスペース</strong>。背景情報・参照資料・会話履歴を1か所にまとめ、毎回の説明を省けます。</p>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">📚</div>
              <div class="grid-title">ナレッジベース</div>
              <div class="grid-desc">参照ファイル（PDF、DOCX、CSV等）をアップロード</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📝</div>
              <div class="grid-title">カスタム指示</div>
              <div class="grid-desc">全会話に効く前提・ルール・トーンを設定</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">💬</div>
              <div class="grid-title">会話履歴</div>
              <div class="grid-desc">プロジェクト内のチャットがすべて保存される</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🧠</div>
              <div class="grid-title">メモリ</div>
              <div class="grid-desc">Claude が会話で学んだことを記憶</div>
            </div>
          </div>

          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">Before：案件ごとにバラバラ</div>
              <p>案件の背景を毎回説明し直す</p>
              <p>参照資料を毎回アップロード</p>
              <p>過去の議論が別の会話に散らばる</p>
            </div>
            <div class="ba-arrow">→</div>
            <div class="ba-item after">
              <div class="ba-label">After：プロジェクトで整理</div>
              <p>背景・ルールは設定済み → いきなり本題</p>
              <p>参照資料は常時参照可能</p>
              <p>会話履歴が案件単位で蓄積される</p>
            </div>
          </div>

          <h3>「Claudeへの指示」 vs プロジェクト</h3>
          <div class="visual-comparison">
            <div class="comp-item">
              <h4>「Claudeへの指示」</h4>
              <ul>
                <li>全会話（アカウント全体）に適用</li>
                <li>役割、好み、トーン、共通ルール</li>
                <li>例：「私はコンサル」「結論先行」</li>
              </ul>
            </div>
            <div class="comp-item">
              <h4>プロジェクト</h4>
              <ul>
                <li>この プロジェクトの中の会話だけに適用</li>
                <li>案件背景、参照資料、案件固有ルール</li>
                <li>例：「クライアントはA電機」「論点は事業ポートフォリオ」</li>
              </ul>
            </div>
          </div>

          <h3>大量ファイルの自動検索</h3>
          <div class="info-box">
            <strong>必要な箇所だけ自動で探す</strong>
            <p>ナレッジが大きくなると、全文を読む代わりに質問に関連する部分だけ自動で検索して取り出します。これにより、アップロードできるファイルの総量が大幅に増えます。<strong>ファイル名でヒントを与える</strong>と検索精度が向上します。</p>
          </div>

          <h3>チーム共有（Team / Enterprise）</h3>
          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">👁️</div>
              <div class="grid-title">閲覧（Can view）</div>
              <div class="grid-desc">閲覧のみ、ただし会話はできる</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">✏️</div>
              <div class="grid-title">編集（Can edit）</div>
              <div class="grid-desc">指示・ナレッジを編集可、メンバー追加可</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">👑</div>
              <div class="grid-title">管理者（Owner）</div>
              <div class="grid-desc">すべてを管理、削除権限あり</div>
            </div>
          </div>

          <div class="try-box">
            <strong>ハンズオン：案件用 プロジェクトを作成する</strong>
            <ol>
              <li>claude.ai の左サイドバー「プロジェクト」をクリック</li>
              <li>「+ 新規プロジェクト」で名前を付ける（例：「A電機_中期経営計画支援」）</li>
              <li>Instructions パネルに案件の概要・クライアント情報・トーン・タブーを記入</li>
              <li>ナレッジベースに参照資料を3つほどアップロード</li>
              <li>プロジェクト内で新規チャットを開き、「この案件の論点を3つ整理して」と試す</li>
            </ol>
          </div>

          <div class="tip-box">
            <strong>TIP：ミニマムで始める</strong>
            <p>完璧な指示を最初から書かず、数行のメモから。足りないものは後から追加。</p>
          </div>
          <div class="tip-box">
            <strong>TIP：お手本ファイルが効く</strong>
            <p>良い議事録・分析メモをナレッジに入れると、Claude が文体・構成を学びます。</p>
          </div>
        `
      },

      // --- D-2: アーティファクト ---
      {
        title: '1-12. アーティファクト',
        type: 'lecture',
        content: `
          <h3>アーティファクト とは</h3>
          <p>アーティファクトは<strong>チャット応答の中ではなく独立したパネル</strong>として開かれる成果物です。編集・バージョン管理・ダウンロード・共有が可能です。</p>

          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">通常のチャット</div>
              <h4>長文がチャットに埋もれる</h4>
              <ul>
                <li>5000字の回答がスクロールに</li>
                <li>コピペが大変</li>
                <li>編集しにくい</li>
              </ul>
            </div>
            <div class="ba-arrow">→</div>
            <div class="ba-item after">
              <div class="ba-label">アーティファクト</div>
              <h4>独立パネルで成果物管理</h4>
              <ul>
                <li>右側にパネルが開く</li>
                <li>編集・バージョン管理</li>
                <li>ダウンロード・共有・Remix</li>
              </ul>
            </div>
          </div>

          <h3>アーティファクトの主な種類</h3>
          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">📄</div>
              <div class="grid-title">ドキュメント</div>
              <div class="grid-desc">報告書、議事録、提案書などをそのまま編集・ダウンロード</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">図・チャート</div>
              <div class="grid-desc">フロー図、ガントチャート、組織図などを自動生成</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🌐</div>
              <div class="grid-title">Webページ・ダッシュボード</div>
              <div class="grid-desc">操作できるUI やグラフをその場で生成。プロトタイプにも</div>
            </div>
          </div>

          <h3>出力の活用</h3>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">📋</div>
              <div class="grid-title">コピー / ダウンロード</div>
              <div class="grid-desc">パネル右下のボタンからテキストのコピーやファイルのダウンロードが可能</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔄</div>
              <div class="grid-title">バージョン管理</div>
              <div class="grid-desc">追加指示で修正を重ね、過去のバージョンにいつでも戻せる</div>
            </div>
          </div>
        `
      },

    ],
    quiz: [
      
      // --- 1-1 の確認問題 ---
      {
        question: 'Claude をビジネスで使う最大の利点として、本モジュールで強調しているのはどれですか?',
        options: [
          '無料で使える',
          '指示に忠実で、クライアントに見せても安心できる出力が得意',
          '画像生成の品質が高い',
          '他のAIより応答速度が速い'
        ],
        correct: 1,
        explanation: 'Claude は「役に立つ・害がない・誠実である」を設計原則としており、指示に忠実でビジネス利用に安心できる出力が強みです。'
      },
      {
        question: 'ChatGPT/Gemini と比べた Claude の業務上の強みとして、本モジュールで挙げていないものはどれですか?',
        options: [
          '長文の安定性が高い',
          '出力の操縦性が高い',
          '思考のパートナーとして設計されている',
          '画像生成の品質が圧倒的に高い'
        ],
        correct: 3,
        explanation: '画像生成については本セクションで触れていません。Claude の業務上の強みとして挙げたのは「長文の安定性」「出力の操縦性」「思考のパートナー」の3点です。'
      },
      {
        question: 'Claude を「思考のパートナー」として使うべき例として最も適切なのはどれですか?',
        options: [
          '「東京の天気を教えて」',
          '「この提案ストーリーを聞いて、クライアントが反応しそうな点と懸念点を一緒に考えてほしい」',
          '「1+1は?」',
          '「明日の会議の時間を教えて」'
        ],
        correct: 1,
        explanation: '対話で深掘りする「思考のパートナー」用途として、提案ストーリーの壁打ちが最も適切です。'
      },
      // --- 1-4 の確認問題（プロンプト） ---
      {
        question: 'プロンプト3要素として正しい組み合わせはどれですか?',
        options: [
          '名前 / 質問 / 終了',
          'Setting the stage（前提の共有）/ Defining the task（タスク定義）/ Specifying rules（ルール指定）',
          'Input / Process / Output',
          'Hello / Question / Goodbye'
        ],
        correct: 1,
        explanation: 'プロンプト3要素は前提の共有（Setting the stage）、タスク定義（Defining the task）、ルール指定（Specifying rules）です。'
      },
      {
        question: '「悪い例：競合分析して」を改善するときに、3要素のうち最も追加が必要な要素は何ですか?',
        options: [
          '1つもない、これで十分',
          'すべて足りない（前提の共有・タスク定義・ルール指定すべて）',
          '文字数指定だけ',
          '挨拶'
        ],
        correct: 1,
        explanation: '誰が何業界で何を比較したいかも、どんな出力が欲しいかも書かれていないため、3要素すべてが不足しています。'
      },
      {
        question: 'Claude の回答が思ったものと違ったときの対応として、本モジュールで推奨されていないものはどれですか?',
        options: [
          '追加質問で深掘りする',
          'フィードバックを伝えて修正させる',
          'すべてを諦めて Claude を使うのをやめる',
          '新規チャットでプロンプトをやり直す'
        ],
        correct: 2,
        explanation: '推奨されているのは「追加質問」「フィードバック」「新規チャットでやり直し」の3つです。諦めるのは推奨されていません。'
      },
      {
        question: '「Claudeへの指示」を設定する目的として正しいのはどれですか?',
        options: [
          '案件ごとの細かい前提を入れるため',
          '毎回書くのが面倒な「自分の役割」「希望するトーン」など、全会話共通の前提を入れるため',
          'パスワードを保存するため',
          'ChatGPT のデータを読み込むため'
        ],
        correct: 1,
        explanation: '「Claudeへの指示」は全会話共通の前提を入れる場所です。案件固有の情報はプロジェクトに書きます。'
      },
      // --- 1-5 の確認問題（4D） ---
      {
        question: '4D Framework の4つの D として正しい組み合わせはどれですか?',
        options: [
          'Data / Direction / Decision / Discussion',
          'Delegation / Description / Discernment / Diligence',
          'Develop / Deploy / Debug / Document',
          'Design / Draft / Deliver / Discuss'
        ],
        correct: 1,
        explanation: '4D Framework は Delegation（委任）、Description（指示）、Discernment（評価）、Diligence（責任）の4つです。'
      },
      {
        question: 'Claude の出力を Discernment（評価）するとき、特に注意すべきものはどれですか?',
        options: [
          '文字色',
          '改行の位置',
          '固有名詞・数字・引用（Hallucination が起きやすい）',
          '絵文字の使い方'
        ],
        correct: 2,
        explanation: 'Claude が捏造（Hallucination）しやすいのは固有名詞、具体的な数字、引用文です。これらは特に注意して検証が必要です。'
      },
      {
        question: 'Description ⇄ Discernment ループとして正しい流れはどれですか?',
        options: [
          '指示 → 出力 → 完了',
          '指示 → 出力 → 評価 → 指示改善 → …の繰り返し',
          '評価 → 指示 → 出力',
          '出力 → 削除 → やり直し'
        ],
        correct: 1,
        explanation: '指示を出す→出力を評価→指示を改善→再度出力、というループを回すことで品質が上がります。'
      },
      {
        question: '自分の専門領域で Claude を使うとき、本モジュールでは何を強調していますか?',
        options: [
          '専門領域なのでチェックは不要',
          '専門領域こそ Claude も間違えやすく、自分の知識で見抜けるはずなので慎重に読む',
          '専門領域は Claude に任せず使わない',
          '専門領域は別の AI を使う'
        ],
        correct: 1,
        explanation: '専門領域こそ Claude が間違えやすく、かつ自分の知識で見抜けるはずなので、慎重に読むことが重要です。'
      },
      // --- 1-2 の確認問題（3モード） ---
      {
        question: '「議事録30本から論点マップを作成し、PPTX として保存したい」場合、最も適したモードはどれですか?',
        options: [
          'Chat',
          'Cowork',
          'Claude Code',
          'どれでも同じ'
        ],
        correct: 1,
        explanation: '大量ファイルの横断処理と完成品（PPTX）が欲しい場合は Cowork が最適です。'
      },
      {
        question: '「クライアントへの提案ストーリーを壁打ちしたい」場合、最初に使うモードはどれですか?',
        options: [
          'Chat',
          'Cowork',
          'Claude Code',
          'デスクトップアプリは閉じて Slack で議論'
        ],
        correct: 0,
        explanation: '対話で深める用途では Chat が最適です。壁打ちは Chat のベースキャンプ的な使い方です。'
      },
      {
        question: 'Cowork と Claude Code の共通点として正しいのはどれですか?',
        options: [
          'どちらもターミナルでしか使えない',
          'どちらも同じAIエンジンで動いており、「まとまった仕事を任せる」モードである',
          'プログラミング能力のみが共通',
          '共通点はない'
        ],
        correct: 1,
        explanation: 'Cowork と Claude Code はどちらも同じAIエンジンで動いています。違いは「ゴールで伝える（Cowork）」か「ルールで定義する（Claude Code）」かという任せ方の違いです。'
      },
      {
        question: '3モードの使い分けについて、本モジュールの推奨はどれですか?',
        options: [
          '全モードを毎日使う',
          '迷ったら Chat から始め、必要に応じて Cowork → Claude Code と段階的に上げる',
          'Claude Code だけ使えばよい（最強なので）',
          'Chat だけ使う（他は不要）'
        ],
        correct: 1,
        explanation: '迷ったら Chat から始め、完成品が欲しければ Cowork、アプリ開発や高度な自動化が必要なら Claude Code と段階的に上げるのが推奨です。'
      },
      // --- 1-3 の確認問題（セットアップ） ---
      {
        question: 'Cowork を使うために必要なものはどれですか?',
        options: [
          'Free プランで OK',
          'Pro / Max / Team / Enterprise のいずれかと、デスクトップアプリ',
          'ターミナルだけで使える',
          'Web 版でも使える'
        ],
        correct: 1,
        explanation: 'Cowork は有料プラン（Pro / Max / Team / Enterprise）とデスクトップアプリが必要です。'
      },
      {
        question: '本研修（本研修環境）での運用方針として正しいのはどれですか?',
        options: [
          'すべての外部サービスをワンクリックで接続して使う',
          'ローカルフォルダ + Office アドイン + Chrome 拡張 + 社内 Slack / Notion（MCP・限定範囲）で運用する',
          'Claude は使わずに ChatGPT を使う',
          'Web版 claude.ai だけしか使えない'
        ],
        correct: 1,
        explanation: '本研修環境では、ローカルフォルダ + Office アドイン + Chrome 拡張 + MCP（Slack/Notion 限定範囲）で運用します。'
      },
      {
        question: 'Office アドイン3つのうち、2026年4月時点でリリースされているものはどれですか?',
        options: [
          'Excel のみ',
          'Excel と PowerPoint のみ',
          'Excel、PowerPoint、Word の3つすべて',
          'PowerPoint のみ'
        ],
        correct: 2,
        explanation: '2026年4月時点で Excel、PowerPoint、Word の3つすべてがリリース済みです。'
      },
      {
        question: '「Claudeへの指示」を設定する場所はどこですか?',
        options: [
          'デスクトップアプリの Cowork タブ',
          'claude.ai の 設定 > 一般',
          'Excel のリボン',
          'ターミナル'
        ],
        correct: 1,
        explanation: '「Claudeへの指示」は claude.ai の 設定 > 一般 から設定します。'
      }
    ,
      
      // B-1
      {
        question: 'プロジェクトに含まれる構成要素として、本モジュールで挙げていないものはどれですか?',
        options: ['ナレッジベース（参照ファイル）', 'カスタム指示', '会話履歴', 'クライアントの請求書'],
        correct: 3,
        explanation: 'プロジェクトの構成要素はナレッジベース・カスタム指示・会話履歴・メモリです。請求書は含まれません。'
      },
      {
        question: '「Claudeへの指示」と プロジェクトのカスタム指示の使い分けとして正しいのはどれですか?',
        options: [
          '「Claudeへの指示」は案件固有、プロジェクトは全社共通',
          '「Claudeへの指示」は全会話共通の自分の好み、プロジェクトは案件固有の前提',
          '両方は同じ用途で重複する',
          'プロジェクトは不要、「Claudeへの指示」だけで十分'
        ],
        correct: 1,
        explanation: '「Claudeへの指示」は全会話に適用される自分の役割・好み、プロジェクトは案件固有の背景・ルールを入れます。'
      },
      {
        question: 'プロジェクトのナレッジベースが大きくなったとき、Claude が自動でやることは何ですか?',
        options: [
          '古いファイルを自動削除する',
          '自動検索モードに切り替えて、関連箇所だけ検索して引く',
          'ユーザーに警告して停止する',
          '課金額を増やす'
        ],
        correct: 1,
        explanation: 'ナレッジベースが大きくなると自動で検索モードに切り替わり、質問に関連する部分だけを検索して取り出します。'
      },
      {
        question: 'チーム共有された プロジェクトの権限レベルとして本モジュールで挙げていないものはどれですか?',
        options: ['Can view', 'Can edit', 'Owner', 'Developer'],
        correct: 3,
        explanation: '権限レベルは Can view / Can edit / Owner の3つです。Developer は存在しません。'
      },
      // B-2
      {
        question: 'Claude が自動で アーティファクトを作る目安として本モジュールで挙げているのはどれですか?',
        options: ['5文字以上', '15行以上のまとまった内容', '100ページ以上', 'ファイル名がついている'],
        correct: 1,
        explanation: '15行以上のまとまった、自己完結したコンテンツが アーティファクト化の目安です。'
      },
      {
        question: 'アーティファクトの種類として本モジュールで挙げていないものはどれですか?',
        options: ['Mermaid 図', 'React コンポーネント', 'SVG 画像', '動画ファイル（MP4）'],
        correct: 3,
        explanation: 'アーティファクトの種類はドキュメント・コード・HTML・SVG・Mermaid・React です。動画ファイルは含まれません。'
      },
      {
        question: 'アーティファクトを公開URLで公開した場合、どのような扱いになりますか?',
        options: [
          'Google検索で誰でも見つけられる',
          'URLを知っている人なら誰でもアクセスできるが、検索エンジンには出ない',
          '組織内のメンバーのみアクセス可能',
          '自分しかアクセスできない'
        ],
        correct: 1,
        explanation: '公開URLは検索エンジンには出ませんが、URLを知っている人は誰でもアクセス可能です。'
      },
      {
        question: '同じ アーティファクトを反復改善するコツとして本モジュールで推奨されているのはどれですか?',
        options: [
          '一度にすべての変更を指示する',
          '1機能ずつ追加→確認→次、のリズム',
          '最初から完璧を目指す',
          '反復はせず、毎回新規で作り直す'
        ],
        correct: 1,
        explanation: '一度に全部頼むと後半の指示が無視されがちです。1機能ずつ追加が推奨されています。'
      },
      // B-3
      {
        question: 'Skill と プロジェクトの違いとして正しいのはどれですか?',
        options: [
          'Skill は知識、プロジェクトは手順',
          'Skill は手順（やり方）、プロジェクトは知識（参照情報）',
          '両方とも同じ用途',
          'Skill は無料、プロジェクトは有料'
        ],
        correct: 1,
        explanation: 'Skill は手順（やり方）を持ち、プロジェクトは知識（参照情報）を持ちます。両者は補完関係です。'
      },
      {
        question: 'Anthropic 組み込み Skill の例として本モジュールで挙げているのはどれですか?',
        options: [
          'Excel / PowerPoint / Word / PDF 生成',
          '翻訳 / 音声合成 / 画像生成',
          'メール送信 / カレンダー登録 / Slack 投稿',
          '株価分析 / 為替予測'
        ],
        correct: 0,
        explanation: '組み込み Skill として挙げられているのは Excel / PowerPoint / Word / PDF ファイルの生成です。'
      },
      {
        question: 'Skill が「いつ呼ばれるか」を決定する最重要要素はどれですか?',
        options: [
          'Skill のファイル名',
          'Skill 内の SKILL.md の description フィールド',
          'Skill のサイズ',
          'ユーザーの好み'
        ],
        correct: 1,
        explanation: 'description フィールドを Claude が読んで「このタスクに使うべきか」を判断します。具体的に書くことが重要です。'
      },
      {
        question: 'カスタム Skill の組織展開について、本モジュールで強調されているのはどれですか?',
        options: [
          'Skill は個人専用、共有不可',
          'Team / Enterprise なら組織共有が可能で、品質の組織展開に効く',
          '共有はメールで送る',
          'Skill は USB に入れて配布する'
        ],
        correct: 1,
        explanation: 'Team / Enterprise プランで Skill を組織共有でき、品質の標準化に効くことが強調されています。'
      },
      // B-4
      {
        question: 'MCP（Model Context Protocol）について正しい記述はどれですか?',
        options: [
          'Anthropic 専用の閉じた規格',
          'AI と外部ツールを繋ぐオープン規格（USB-C のような標準を狙ったもの）',
          'プログラミング言語の一種',
          'ファイル形式'
        ],
        correct: 1,
        explanation: 'MCP は AI と外部ツールを繋ぐオープン規格で、Anthropic が「USB-C のような共通規格」として公開しました。'
      },
      {
        question: 'MCP の範囲制限の「二重担保」として正しい組み合わせはどれですか?',
        options: [
          'パスワード + 暗号化',
          'アクセス範囲の技術的制限 + Skill / Instructions による意図の明示',
          'ファイアウォール + VPN',
          '二重担保は不要'
        ],
        correct: 1,
        explanation: '一次担保が アクセス範囲の技術的制限（技術的に読めない）、二次担保が Skill / Instructions（Claude 自身がブレーキ）です。'
      },
      // B-5
      {
        question: 'Enterprise Search（「{組織名}に質問」）について正しいのはどれですか?',
        options: [
          '個人プランでも使える',
          '組織レベルでコネクタが接続されていると、サイドバーに表示される',
          '自分でセットアップが必要',
          'MCP とは無関係の独立機能'
        ],
        correct: 1,
        explanation: 'Enterprise Search は組織レベルでコネクタ（Slack・Notion等）が接続されていると自動的にサイドバーに表示されます。コネクタ（MCP）の仕組みで動いています。'
      },
      // B-6
      {
        question: 'リサーチ と通常の Web 検索の違いとして正しいのはどれですか?',
        options: [
          'リサーチ は無料、Web 検索は有料',
          'リサーチ は複数検索を自律的に連鎖させ、所要5〜45分で多角的レポートを作る',
          '両方とも同じ',
          'Web 検索の方が時間がかかる'
        ],
        correct: 1,
        explanation: 'リサーチ は複数検索を自律的に連鎖させ、5〜45分で包括的なレポートを生成します。'
      },
      {
        question: 'リサーチ を使うべきでない場面はどれですか?',
        options: [
          '競合5社の中期経営計画を比較したい',
          '「○○社の住所は?」のような単発の事実確認',
          '業界トレンドを多角的に調査したい',
          '提案書の根拠資料を一気に集めたい'
        ],
        correct: 1,
        explanation: '単発の事実確認は普通の Web 検索で十分です。リサーチ は多角的な調査に使います。'
      },
      {
        question: '効果的な リサーチ プロンプトのコツとして本モジュールで挙げていないのはどれですか?',
        options: [
          '具体的目標を明示',
          '出力構造を指定',
          '制約（予算・地理・時間軸など）を含める',
          '短く一言だけ書く'
        ],
        correct: 3,
        explanation: 'リサーチ は時間もリソースも使うので、具体的目標・出力構造・制約を含めた詳細なプロンプトが推奨されています。'
      },
      // B-7
      {
        question: '2026年4月時点でリリースされている Claude の Office アドインの組み合わせとして正しいのはどれですか?',
        options: [
          'Excel のみ',
          'Excel と PowerPoint',
          'Excel と PowerPoint と Word の3つすべて',
          'Word のみ'
        ],
        correct: 2,
        explanation: 'Excel、PowerPoint、Word の3つすべてで Claude アドインが利用可能です。'
      },
      {
        question: 'クロスアプリ共有コンテキストの効果として正しいのはどれですか?',
        options: [
          'アプリ間でファイルが自動的にコピーされる',
          'Excel→PowerPoint→Word の同じセッション内で文脈が引き継がれる',
          'Office と非 Office アプリでも文脈が共有される',
          'クライアントの PC とも共有される'
        ],
        correct: 1,
        explanation: '3つのアドインは同じセッション内で文脈を引き継ぎます。Excel で分析→PPT でスライド化→Word で報告書の流れが可能です。'
      },
      {
        question: 'Skill と Office アドインの連動として正しいのはどれですか?',
        options: [
          'Skill は Office アドインでは使えない',
          '組織で有効化した Skill が Office アドイン内でも自動で呼ばれる',
          'Skill は別途インストールが必要',
          '連動はできない'
        ],
        correct: 1,
        explanation: '組織で有効化した Skill は Office アドイン内でも自動で呼ばれ、ブランドやフォーマットの統一に役立ちます。'
      },
      // B-8
      {
        question: 'Claude in Chrome が特に活きる場面として、本モジュールで強調されているのはどれですか?',
        options: [
          'メールを大量に送信する',
          'MCP もアドインもない社内ポータル・CRM・業界ツールへのアクセス',
          '動画編集',
          '音声合成'
        ],
        correct: 1,
        explanation: 'Chrome 拡張の本領は「MCP もアドインもない社内ポータル・CRM・業界ツール」を Claude に見せたい時です。'
      },
      {
        question: 'Claude in Slack の活用例として、本モジュールで挙げていないものはどれですか?',
        options: [
          '長いスレッドの要約',
          'ミーティング前の関連議論まとめ',
          'Slack ワークスペース全体の自動翻訳',
          '論点抽出'
        ],
        correct: 2,
        explanation: 'ワークスペース全体の自動翻訳は挙げられていません。活用例はスレッド要約、論点抽出、ミーティング前準備です。'
      },
      {
        question: 'Claude in Chrome の現在の位置づけとして正しいのはどれですか?',
        options: [
          '一般リリース済み、すべての機能が安定',
          'ベータ版（試験提供中）、低リスクなタスクから使い始めるのが推奨',
          '廃止予定',
          'Anthropic 公式ではない'
        ],
        correct: 1,
        explanation: 'Chrome 拡張は現在ベータ版（試験提供中）です。低リスクなタスクから始めましょう。'
      }

    ],
    practices: [
      { section: '1-4. プロンプトの基本', title: 'ファイルを添付してみる', task: '手元の PDF や Word ファイルを Claude に添付して、「この資料の要点を3つにまとめて」と指示してみてください。' },
      { section: '1-4. プロンプトの基本', title: 'Claudeへの指示 を設定する', task: '設定 > 一般 > Claudeへの指示 に自分の前提を登録し、新しいチャットで「私についてどんな前提を持っていますか？」と聞いて反映を確認してください。' },
      { section: '1-4. プロンプトの基本', title: 'プロンプトを書き直す', task: '悪い例「競合分析して」を3要素を満たす形に書き直してから Claude に投げてください。', hint: 'あなたは何業界の何の案件で、どの競合の何を比較したいのか、出力はどう欲しいのか。' },
      { section: '1-5. 4つのスキル', title: '自分の業務を4Dで分解する', task: '直近1週間の業務を5つ思い出して、Delegation 度合い（任せられる割合）、Description のコツ、Discernment の確認ポイントを整理してください。' },
      { section: '1-5. 4つのスキル', title: 'Hallucination を体験する', task: '「2024年の日本のSaaS市場規模を、出典付きで教えてください」を Claude に投げて、返ってきた数字と出典を別途検索して照合。次に Web 検索 ON で同じ質問を投げて結果の違いを見ましょう。' },
      { section: '1-5. 4つのスキル', title: 'Description⇄Discernmentループを回す', task: '直近の業務タスクを1つ選び、Claude に指示（Description）→ 出力を評価（Discernment）→ 指示を改善、のループを3回転させてください。1回目と3回目の出力の違いを比較しましょう。' },
      { section: '1-3. セットアップ', title: 'アカウント確認', task: 'claude.ai にアクセスしてログイン。右上アイコン > Settings で自分のアカウントが表示されれば OK。' },
      { section: '1-3. セットアップ', title: 'デスクトップアプリ導入', task: 'claude.com/download からインストーラーをダウンロードして導入。起動後ログインし、モードセレクタに Chat / Cowork / Claude Code が表示されているか確認。' },
      { section: '1-3. セットアップ', title: 'Office アドイン導入', task: 'Excel / PowerPoint / Word で、リボンの Home > Add-ins >「Claude by Anthropic」を検索してインストール。サイドバーが開き応答が返ることを確認。' },
      { section: '1-3. セットアップ', title: 'Claude Code インストール（任意）', task: 'デスクトップアプリの Claude Code タブから起動できます。ターミナルで使いたい方はインストールコマンド実行後、claude --version でバージョン番号が表示されれば成功。' },
      { section: '1-11. プロジェクト', title: '案件用 プロジェクトを作成する', task: 'claude.ai > プロジェクト から新規 プロジェクトを作成。Instructions に案件概要を記入、ナレッジベースに参照資料をアップロード。「この案件の論点を3つ整理して」と試す。' },
      { section: '1-12. アーティファクト', title: 'Mermaid 図でプロセスを可視化', task: '「クライアントの業務改革プロジェクトのプロセスフローを Mermaid 図で書いてください」と依頼し、追加指示で修正を試してみましょう。' },
      { section: '1-12. アーティファクト', title: 'アーティファクトを反復改善する', task: '作った アーティファクトに追加指示を出して修正し、バージョン履歴で前のバージョンに戻れることを確認してください。' },
      { section: '1-9. Skills', title: 'カスタム Skill を作ってみる', task: 'Settings > Capabilities で「Code execution and file creation」を ON にし、「案件議事録から標準フォーマットの議事録を作る Skill を作りたい」と依頼。生成された zip を Skills にアップロードして動作確認。' },
      { section: '1-10. MCP', title: 'MCP 範囲制限を設定して動作確認', task: 'Cowork > Customize > MCP Servers に Slack / Notion MCP を追加。プロジェクトの Instructions に対象範囲を記述し、対象外で試して Claude が止まることを確認。' },
      { section: '1-6. リサーチ', title: '業界調査を リサーチ で実行', task: 'チャット画面下部の「Search and tools」から リサーチ を有効化し、業界調査プロンプトを投げてみましょう。完了まで5〜15分、別作業を進めてください。' },
      { section: '1-6. リサーチ', title: 'MCP / ローカル連携 リサーチ', task: '社内 Slack / Notion MCP とローカルファイルを組み合わせ、社内議論と Web の最新動向を統合するリサーチを試してください。' },
      { section: '1-7. Claude in Office', title: 'Excel で財務モデルを解読', task: 'Excel で Claude サイドバーを表示。複雑な数式セルを選択して「このセルの数式を説明して」と試してください。' },
      { section: '1-7. Claude in Office', title: 'PowerPoint でスライド生成', task: '標準テンプレを開いた状態で「このテンプレートのマスタスライドを使って5枚のスライドを作って」と依頼。' },
      { section: '1-7. Claude in Office', title: 'Word で変更履歴付き編集', task: '文書内の段落をハイライトし「結論先行のトーンに書き換えて。変更は変更履歴として挿入して」と依頼。' },
      { section: '1-8. Claude in Chrome', title: 'Chrome 拡張で記事要約', task: 'Chrome ウェブストアから「Claude」拡張をインストールし、長めの記事を開いて「このページの内容を3セクションに分けて要約して」と試す。' },
      { section: '1-10. MCP', title: 'Slack で長スレッドを整理', task: '長いスレッドで @Claude を呼び「このスレッドの議論を要約して。決まったこと・未決・各人の立場を整理して」と依頼。' }
    ],
    selfStudyResources: {
      links: [

        { title: 'Claude.ai（公式サイト）', url: 'https://claude.ai/', desc: 'Claudeのチャット・Coworkはここからアクセス', category: '公式' },
        { title: 'Anthropic 公式ドキュメント', url: 'https://docs.anthropic.com/', desc: 'Claude の技術仕様・機能一覧・ベストプラクティス', category: '公式' },
        { title: 'Claude プロンプトライブラリ', url: 'https://docs.anthropic.com/en/prompt-library/library', desc: '用途別のプロンプト例を多数掲載', category: '学習' },
        { title: 'Anthropic Cookbook', url: 'https://github.com/anthropics/anthropic-cookbook', desc: '実践的なユースケースとコード例', category: '学習' },
        { title: 'Claude Tips & Tricks（YouTube）', url: 'https://www.youtube.com/playlist?list=PLf2m23nhTg5VEz8sS0ORurJk3lBL7nB0V', desc: 'Anthropic 公式の使い方動画', category: '学習' },
        { title: 'Claude デスクトップアプリ ダウンロード', url: 'https://claude.com/download', desc: 'Mac / Windows 対応', category: '公式' },
        { title: 'Claude Code ドキュメント', url: 'https://docs.anthropic.com/en/docs/claude-code', desc: 'Claude Code の導入・使い方ガイド', category: '公式' },
        
        { title: 'Claude プロジェクト 公式ガイド', url: 'https://support.claude.com/', desc: 'プロジェクトの作成・管理・共有方法', category: '公式' },
        { title: 'Claude アーティファクトガイド', url: 'https://support.claude.com/', desc: 'アーティファクトの種類・共有・公開方法', category: '公式' },
        { title: 'Claude Skills ドキュメント', url: 'https://docs.anthropic.com/', desc: 'Skills の作成・管理・組織展開', category: '公式' },
        { title: 'MCP（Model Context Protocol）', url: 'https://docs.anthropic.com/en/docs/agents-and-tools/model-context-protocol', desc: 'MCP の仕様・設定方法', category: '公式' },
        { title: 'Claude リサーチ', url: 'https://support.claude.com/', desc: 'リサーチ の使い方・プロンプトのコツ', category: '公式' },
        { title: 'Claude in Office', url: 'https://support.claude.com/', desc: 'Excel / PowerPoint / Word アドインの設定', category: '公式' },
        { title: 'Claude in Chrome', url: 'https://support.claude.com/', desc: 'Chrome 拡張機能の使い方', category: '公式' }
      ],
      faq: [
        
        { q: 'Claude と ChatGPT の違いは?', a: 'Claude は長文の安定性（200K〜1Mトークン）、出力の操縦性、思考のパートナーとしての設計に強みがあります。タスクによって得意不得意が違うので、使い分けが現実的です。' },
        { q: 'プロンプトの3要素は必ず全部入れるべき?', a: '必ずしも全部必要ではありません。簡単な質問なら不要ですが、業務で精度の高い出力が欲しいときは3要素（前提の共有・タスク定義・ルール指定）を意識すると品質が上がります。' },
        { q: 'Chat / Cowork / Claude Code の違いは?', a: 'Chat は対話で考える場所。Cowork はゴールを伝えて完成品をもらう場所。Claude Code はアプリ・ツール開発や高度な自動化ができます。迷ったら Chat から始めましょう。' },
        { q: 'AIのでっち上げ（ハルシネーション）はどう防ぐ?', a: '完全には防げませんが、出典の併記を要求する、Web検索をONにする、重要な数字・固有名詞は自分で裏取りする、の3つで大幅にリスクを下げられます。' },
        { q: 'claude.ai のコネクタと MCP の違いは?', a: 'コネクタの中身は MCP です。Anthropic が主要サービス向けに MCP サーバーを事前構築し、GUI で簡単に接続できるようにしたもの。本研修では接続範囲を細かく制御するため、MCP サーバーを直接設定する方式を使います（1-10 参照）。' },
        
        { q: 'プロジェクト と「Claudeへの指示」の使い分けは?', a: '「Claudeへの指示」は全会話に効く自分の役割・好み。プロジェクトは案件固有の背景・ルール・参照資料を入れる場所です。両方併用するのが現実的です。' },
        { q: 'アーティファクトが自動生成されないときは?', a: '15行未満や会話の流れに依存する内容は自動 アーティファクト化されません。「これを アーティファクトにしてください」と明示すれば作ってくれます。' },
        { q: 'カスタム Skill はどうやって作る?', a: 'Claude との対話で作れます。「○○のための Skill を作りたい」と話しかけ、質問に答えていくと zip ファイルが生成されます。コードを書く必要はありません。' },
        { q: 'MCP の二重担保とは?', a: '一次担保が アクセス範囲の技術的制限（技術的に読めない状態を作る）、二次担保が Skill / Instructions による意図の明示（Claude 自身にブレーキをかけさせる）です。' },
        { q: 'リサーチ はいつ使う?', a: '複数ソースを統合した包括的レポートが欲しいときに使います。単発の事実確認には普通の Web 検索で十分です。5〜45分かかるので、プロンプトに投資する価値があります。' },
        { q: 'Office アドインのクロスアプリ共有とは?', a: 'Excel→PowerPoint→Word の同じセッション内で文脈が引き継がれる機能です。Team / Enterprise では Owner が組織設定で有効化する必要があります。' },
        { q: 'Chrome 拡張で機密情報を扱ってよい?', a: '現在はベータ版（試験提供中）のため、クライアント機密や決済情報の操作には使わないでください。低リスクなタスクから始めましょう。' }
      ]
    }
  },

  // ============================================================
  // 第2回：Cowork・Claude Codeで仕事を任せる
  // ============================================================
  {
    id: 'session-2',
    title: '第2回：Cowork・Claude Codeで仕事を任せる',
    shortTitle: '第2回',
    description: '「対話する」から「任せる」へ。Coworkで業務を委任し、Claude Codeで再現性ある高品質な成果物を作る',
    target: '第1回 完了者',
    duration: '自分のペースで',
    prereq: '第1回 完了',
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    objectives: [
      '「対話する」から「任せる」への発想転換ができている',
      'Cowork のタスクループ（Describe → Q&A → Run → Open）を回せる',
      'Cowork プロジェクトでコンテキストを永続化できる',
      'Scheduled tasks で定型業務を自動化できる',
      'Claude Code の仕組み（Agentic loop / Context / Tools）を理解する',
      'CLAUDE.md でプロジェクト固有のルールを永続化できる',
      'Subagents で並列処理・専門化したエージェントを使える',
      'Hooks で「必ず実行される」制御ができる'
    ],
    coverGroups: [
      { label: 'Coworkを始める', icon: '🚀', sections: [0, 1, 2], objectives: ['「対話」から「委任」へ発想転換できる', 'タスクループを回せる'] },
      { label: '環境を整える', icon: '🏗️', sections: [3, 4, 5], objectives: ['Cowork プロジェクトで文脈を永続化できる', 'Pluginで職種特化バンドルを使える', 'Scheduled tasksで定型業務を自動化できる'] },
      { label: '業務で使い倒す', icon: '💼', sections: [6, 7, 8, 9], objectives: ['大量ファイル処理・並列分析を委任できる', '利用量・モデル選択を意識して効率的に使える'] },
      { label: 'Claude Codeの基礎', icon: '💡', sections: [10, 11, 12], objectives: ['Claude Codeの仕組みを理解する', '4タッチポイントを使い分けられる'] },
      { label: 'ワークフローを回す', icon: '🔄', sections: [13, 14], objectives: ['Explore→Plan→Code→Commitで安全に進められる', 'Context管理で長時間セッションを維持できる'] },
      { label: '品質を制御する', icon: '🎯', sections: [15, 16, 17], objectives: ['CLAUDE.mdでルールを永続化できる', 'Skillsで再利用可能な手順を定義できる', 'Subagentsで並列・専門化できる'] },
      { label: '拡張する', icon: '🔧', sections: [18, 19, 20], objectives: ['MCPで外部ツールと連携できる', 'Hooksで確実に実行されるルールを設定できる'] }
    ],
    sections: [
      
      // --- C-1: Cowork とは何か ---
      {
        title: '2-1. Cowork とは何か',
        type: 'lecture',
        content: `
          <h3>Cowork とは — 「対話」から「委任」へ</h3>
          <p>Cowork は <strong>Claude にタスクを「任せる」ためのモード</strong>です。Chat と同じAIですが、関わり方が根本的に違います。</p>

          <div class="visual-comparison">
            <div class="comparison-item">
              <h4>Chat（これまで）</h4>
              <ul>
                <li>対話、質問→回答の往復</li>
                <li>文脈はチャット内</li>
                <li>出力はチャットに表示される文章</li>
                <li>即時往復</li>
              </ul>
            </div>
            <div class="comparison-item">
              <h4>Cowork</h4>
              <ul>
                <li>ゴール提示→計画→実行→完成品</li>
                <li>文脈はフォルダ + プロジェクトに永続化</li>
                <li>実ファイル（.pptx / .xlsx / .docx 等）が指定フォルダに</li>
                <li>数分〜数時間、離席して戻れば完成</li>
              </ul>
            </div>
          </div>

          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">Before：Chat で対話</div>
              <p>質問→回答→コピペ→整形</p>
              <p>ファイルはダウンロードして手作業</p>
              <p style="margin-top:8px;font-weight:700">あなたが手を動かし続ける</p>
            </div>
            <div class="ba-arrow">→</div>
            <div class="ba-item after">
              <div class="ba-label">After：Cowork で委任</div>
              <p>ゴール提示→計画→自動実行→完成品</p>
              <p>PPTX / XLSX がフォルダに直接出力</p>
              <p style="margin-top:8px;font-weight:700">離席して戻れば完成している</p>
            </div>
          </div>

          <h3>3つの柱</h3>
          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">📋</div>
              <div class="grid-title">Plan（計画）</div>
              <div class="grid-desc">複数ステップのタスクでは Claude がまず計画を提示。ユーザーが確認・承認してから実行開始</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">⚡</div>
              <div class="grid-title">Execute（実行）</div>
              <div class="grid-desc">隔離環境で実行。数分〜数時間、離席OK。進捗パネルで確認、途中介入も可能</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔗</div>
              <div class="grid-title">Connect（接続）</div>
              <div class="grid-desc">ローカルファイル、社内 Slack / Notion（MCP）、Chrome 拡張、Office アドインで外部接続</div>
            </div>
          </div>

          <h3>Cowork に向いているタスク</h3>
          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">Chat 向き</div>
              <h4>対話で考える</h4>
              <ul>
                <li>答え・下書きを対話の中で欲しい</li>
                <li>情報が1回で全部渡せる</li>
                <li>思考を深めたい（壁打ち、論点整理）</li>
              </ul>
            </div>
            <div class="ba-arrow">→</div>
            <div class="ba-item after">
              <div class="ba-label">Cowork 向き</div>
              <h4>任せて完成品を得る</h4>
              <ul>
                <li>ローカルファイルを直接触る必要がある</li>
                <li>完成品（.pptx / .xlsx / .docx）が欲しい</li>
                <li>多段ステップで時間がかかる</li>
              </ul>
            </div>
          </div>

          <div class="tip-box">
            <strong>💡 TIP：迷ったら Chat、で問題ない</strong><br>
            Chat で始めて足りなければ Cowork に切り替える方が速い。Chat はベースキャンプです。
          </div>
        `
      },
      // --- C-2: セットアップ — フォルダを指定する ---
      {
        title: '2-2. セットアップ — フォルダを指定する',
        type: 'hands-on',
        content: `
          <h3>フォルダ指定 — Chat との最大の違い</h3>
          <p>Cowork タスクの最初に<strong>作業フォルダを指定</strong>します。指定したフォルダ内のファイルを Claude が直接読み書きでき、完成品は同じフォルダに保存されます。</p>

          <div class="visual-big-message">
            <div class="big-message-icon">📁</div>
            <div class="big-message-text">「Claude にこのフォルダを渡す」という宣言</div>
            <div class="big-message-sub">アップロード／ダウンロードが不要。フォルダ外のファイルには触れない（隔離）</div>
          </div>

          <h3>フォルダ分離（運用の核ルール）</h3>
          <div class="visual-comparison">
            <div class="comparison-item">
              <h4>案件メインフォルダ</h4>
              <p>案件全体の成果物・履歴・参考資料。<strong>Claude に渡さない</strong></p>
            </div>
            <div class="comparison-item">
              <h4>Claude 作業フォルダ</h4>
              <p>必要分だけコピーした作業コピー。<strong>これだけ渡す</strong></p>
            </div>
          </div>

          <div class="tip-box">
            <strong>💡 TIP：コピーを渡す習慣</strong><br>
            元ファイルは案件メインフォルダに残し、作業フォルダにコピーしたものだけ Claude に渡しましょう。上書きされても元データは安全です。
          </div>

          <h3>Customize エリアで使うもの</h3>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">🔌</div>
              <div class="grid-title">MCP Servers</div>
              <div class="grid-desc">社内 Slack / 社内 Notion（第1回 1-10 で設定済み）</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🧩</div>
              <div class="grid-title">Plugins</div>
              <div class="grid-desc">職種特化バンドル（2-5 で扱います）</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📝</div>
              <div class="grid-title">Skills</div>
              <div class="grid-desc">タスクの手順（第1回 1-9 で扱った）</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🌐</div>
              <div class="grid-title">Claude in Chrome</div>
              <div class="grid-desc">MCP もアドインもないツール用のブラウザ操作</div>
            </div>
          </div>

          <div class="try-box">
            <strong>✅ やってみよう</strong><br>
            デスクトップアプリで Cowork タブを開き、「Work in a folder」ボタンで作業フォルダを指定してみましょう。
          </div>
        `
      },
      // --- C-3: タスクループ — 4ステップ ---
      {
        title: '2-3. タスクループ — 4ステップ',
        type: 'lecture',
        content: `
          <h3>タスクループの全体像</h3>
          <p>Cowork のタスクはすべて同じ4ステップで進みます。</p>

          <div class="visual-flow">
            <div class="flow-step">
              <div class="flow-num">1</div>
              <div class="flow-label">指示を出す</div>
              <div class="flow-desc">ゴール・入力・出力・制約を伝える</div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <div class="flow-num">2</div>
              <div class="flow-label">すり合わせ</div>
              <div class="flow-desc">Claude が不足情報を質問</div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <div class="flow-num">3</div>
              <div class="flow-label">実行</div>
              <div class="flow-desc">計画→承認→実行（離席OK）</div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <div class="flow-num">4</div>
              <div class="flow-label">確認</div>
              <div class="flow-desc">成果物をフォルダで確認</div>
            </div>
          </div>

          <h3>プロンプトの書き方：入力 + 処理 + 出力</h3>
          <div class="visual-equation">
            <div class="eq-term">
              <div class="eq-label">何を読むか</div>
              <div class="eq-value">入力</div>
            </div>
            <div class="eq-operator">+</div>
            <div class="eq-term">
              <div class="eq-label">何をするか</div>
              <div class="eq-value">処理</div>
            </div>
            <div class="eq-operator">+</div>
            <div class="eq-result">
              <div class="eq-label">何を出すか</div>
              <div class="eq-value">出力</div>
            </div>
          </div>

          <div class="visual-big-message">
            <div class="big-message-icon">☕</div>
            <div class="big-message-text">Run（実行）中は離席 OK</div>
            <div class="big-message-sub">コーヒーを入れに行っている間に、議事録30本の分析が完了しています</div>
          </div>

          <div class="info-box">
            <strong>ℹ️ 成果物は「優秀な同僚の初稿」として読む</strong><br>
            完璧ではない。ファイルを開き、数字を1つ裏取り、論理を1本辿る。これだけで品質チェックの大半が完了します。
          </div>
        `
      },
      // --- C-4: Cowork プロジェクト — 文脈の永続化 ---
      {
        title: '2-4. Cowork プロジェクト — 文脈の永続化',
        type: 'lecture',
        content: `
          <h3>Cowork プロジェクト とは</h3>
          <p>Cowork のタスクはデフォルトでは毎回フレッシュ。<strong>Cowork プロジェクト</strong> はローカルフォルダに紐付いた名前付きワークスペースで、Instructions とメモリが永続化されます。</p>

          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">プロジェクト なし</div>
              <h4>毎回リセット</h4>
              <ul>
                <li>前のタスクの記憶を引き継がない</li>
                <li>毎回同じ前提を伝え直す</li>
                <li>案件固有の語彙を毎回教える</li>
              </ul>
            </div>
            <div class="ba-arrow">→</div>
            <div class="ba-item after">
              <div class="ba-label">プロジェクト あり</div>
              <h4>文脈が永続</h4>
              <ul>
                <li>Instructions が毎タスクで自動読み込み</li>
                <li>メモリでタスク間の引き継ぎ</li>
                <li>notes.md / glossary.md でファイルベースの覚え書き</li>
              </ul>
            </div>
          </div>

          <h3>Instructions に書くと効果的なもの</h3>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">👥</div>
              <div class="grid-title">関係者</div>
              <div class="grid-desc">PMO、レビュアー、クライアント窓口の名前と連絡方法</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📂</div>
              <div class="grid-title">ファイル配置</div>
              <div class="grid-desc">読み取り専用フォルダと書き込み可フォルダの区別を明示</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📄</div>
              <div class="grid-title">出力フォーマット</div>
              <div class="grid-desc">.docx / .pptx / .xlsx / .md の使い分け、テンプレート指定</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🎯</div>
              <div class="grid-title">トーン・ルール</div>
              <div class="grid-desc">結論先行、ですます調、数字には出典、禁忌語など</div>
            </div>
          </div>

          <div class="tip-box">
            <strong>💡 TIP：Instructions は徐々に育てる</strong><br>
            最初から完璧を目指さない。「タスクで毎回伝えていること」を後から Instructions に転記していくと、無駄のない指示になります。
          </div>
        `
      },
      // --- C-5: Plugins — ロール特化バンドル ---
      {
        title: '2-5. Plugins — ロール特化バンドル',
        type: 'lecture',
        content: `
          <h3>Plugin とは</h3>
          <p>Plugin は<strong>特定の職種・業務向けにバンドル化したパッケージ</strong>です。Skills + 連携機能（MCP）+ Subagents を「セールス用」「マーケ用」のような塊にまとめたもの。</p>

          <div class="visual-equation">
            <div class="eq-term">
              <div class="eq-label">タスクの手順</div>
              <div class="eq-value">Skills</div>
            </div>
            <div class="eq-operator">+</div>
            <div class="eq-term">
              <div class="eq-label">外部接続</div>
              <div class="eq-value">MCP</div>
            </div>
            <div class="eq-operator">+</div>
            <div class="eq-result">
              <div class="eq-label">専門エージェント</div>
              <div class="eq-value">Subagents</div>
            </div>
          </div>

          <h3>Plugin の中身はプレーンテキスト</h3>
          <p>Plugin はただのフォルダです。中身は人間が読める Markdown と JSON。気に入らない部分があれば直接編集できます。</p>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">📦</div>
              <div class="grid-title">Skill</div>
              <div class="grid-desc">1タスクの手順。Markdown で書いた小さなパッケージ。単機能</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🧩</div>
              <div class="grid-title">Plugin</div>
              <div class="grid-desc">1ロールのバンドル。複数 Skill + MCP + Subagent。職種全体をカバー</div>
            </div>
          </div>

          <div class="info-box">
            <strong>ℹ️ 800コンサル Plugin の方向性</strong><br>
            OSS の Plugin をベースに 800 流にカスタマイズ：議事録 Skill、提案書 Skill、競合分析 Skill、社内 Slack / Notion MCP を組み合わせた自社 Plugin を構築できます。
          </div>
        `
      },
      // --- C-6: Scheduled tasks — 定型業務の自動化 ---
      {
        title: '2-6. Scheduled tasks — 定型業務の自動化',
        type: 'lecture',
        content: `
          <h3>Scheduled tasks とは</h3>
          <p>任意の Cowork タスクを、決まった頻度（時間・日・週・月）で自動実行する機能です。</p>

          <div class="visual-steps">
            <div class="step-item">
              <div class="step-number">1</div>
              <div class="step-content">
                <h4>手動で成功を確認</h4>
                <p>まず手動で2〜3回走らせて、うまく動くプロンプトを練る</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">2</div>
              <div class="step-content">
                <h4>/schedule で登録</h4>
                <p>cadence（頻度）を指定：hourly / daily / weekly / monthly</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">3</div>
              <div class="step-content">
                <h4>自動実行</h4>
                <p>アプリが開いている時間帯に自動実行。結果はフォルダに保存</p>
              </div>
            </div>
          </div>

          <h3>コンサル業務での自動化候補</h3>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">週次・日次レポート</div>
              <div class="grid-desc">毎週金曜 16:00 に案件ステータスを自動生成</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">☀️</div>
              <div class="grid-title">朝のキャッチアップ</div>
              <div class="grid-desc">前日の Slack メンション・メール・当日予定を1ページに</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📰</div>
              <div class="grid-title">業界ウォッチ</div>
              <div class="grid-desc">クライアント企業・競合の最新ニュースを毎日チェック</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📅</div>
              <div class="grid-title">月次の案件総括</div>
              <div class="grid-desc">前月の進捗・リスク・翌月アクションを自動まとめ</div>
            </div>
          </div>

          <div class="warning-box">
            <strong>⚠️ 注意：アプリが閉じていると動かない</strong><br>
            Cowork はローカルで動くため、実行時にデスクトップアプリが開いている必要があります。PC 起動時に保留タスクが実行されます。
          </div>
        `
      },
      // --- C-7: ファイル・ドキュメントタスクのパターン ---
      {
        title: '2-7. ファイル・ドキュメントタスクのパターン',
        type: 'hands-on',
        content: `
          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">Chat の出力</div>
              <p>テキスト → コピペ → 整形 → ファイル化</p>
              <p style="font-weight:700">手作業が残る</p>
            </div>
            <div class="ba-arrow">→</div>
            <div class="ba-item after">
              <div class="ba-label">Cowork の出力</div>
              <p>編集可能な .pptx / .xlsx / .docx</p>
              <p style="font-weight:700">そのまま使える実ファイル</p>
            </div>
          </div>

          <h3>2つのパターン</h3>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">📂</div>
              <div class="grid-title">パターン1：整理する</div>
              <div class="grid-desc">既存ファイル群をファイル種別・日付で仕分け、リネーム、重複検出</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">✨</div>
              <div class="grid-title">パターン2：作る</div>
              <div class="grid-desc">複数素材から提案書・レポート・分析表などの新規成果物を生成</div>
            </div>
          </div>

          <h3>プロンプトの3点指定</h3>
          <div class="visual-flow">
            <div class="flow-step">
              <div class="flow-num">1</div>
              <div class="flow-label">入力</div>
              <div class="flow-desc">どこのファイル群か</div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <div class="flow-num">2</div>
              <div class="flow-label">処理</div>
              <div class="flow-desc">何をするか</div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <div class="flow-num">3</div>
              <div class="flow-label">出力</div>
              <div class="flow-desc">何をどこにどんな形式で</div>
            </div>
          </div>

          <div class="tip-box">
            <strong>💡 TIP：バージョン管理は v0、v1、v2… で</strong><br>
            proposal_v0.pptx → proposal_v1.pptx のように番号を付ける癖。変更履歴は changelog.md に記録しましょう。
          </div>

          <h3>実務を加速するショートカット</h3>
          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">📋</div>
              <div class="grid-title">ファイルパスをコピー</div>
              <div class="grid-desc">Win: Shift+右クリック →「パスのコピー」<br>Mac: Opt+⌘+C<br>「この契約書をレビューして」＋パス貼付で一発指示</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📂</div>
              <div class="grid-title">成果物フォルダを開く</div>
              <div class="grid-desc">Win: エクスプローラーのアドレスバーにパス<br>Mac: ⌘+Shift+R<br>Claude が作ったファイルを即座に確認・共有</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🌐</div>
              <div class="grid-title">Web Clipper 活用</div>
              <div class="grid-desc">MarkDownload 等の拡張機能でWebページをMarkdown化 → フォルダに保存 → Cowork に渡す</div>
            </div>
          </div>

          <div class="tip-box">
            <strong>💡 TIP：Web → Markdown → Cowork の流れ</strong><br>
            調査対象のWebページを Web Clipper で Markdown に変換し、作業フォルダに保存。「この資料群を読んで要約して」と指示すれば、Web 調査と分析が一気に完了します。
          </div>
        `
      },
      // --- C-8: リサーチ と分析を大規模に ---
      {
        title: '2-8. リサーチ と分析を大規模に',
        type: 'lecture',
        content: `
          <h3>Cowork が Chat より得意な3場面</h3>
          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">📚</div>
              <div class="grid-title">大量処理</div>
              <div class="grid-desc">議事録50本、インタビュー100本、競合10社の年次報告書など、Chat に貼り切れない量</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">⚡</div>
              <div class="grid-title">並列処理</div>
              <div class="grid-desc">同じ分析を N 件に対して並列実行。各社1サブエージェントで同時処理</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔬</div>
              <div class="grid-title">ファイル直接編集</div>
              <div class="grid-desc">ローカルでデータ処理を直接実行。結果を同じフォルダに書き戻す</div>
            </div>
          </div>

          <h3>「要約」ではなく「サイン・矛盾・外れ値」を聞く</h3>
          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">価値が薄い問い</div>
              <h4>「要約してください」</h4>
              <p>無難な要約、気づきゼロ</p>
            </div>
            <div class="ba-arrow">→</div>
            <div class="ba-item after">
              <div class="ba-label">価値がある問い</div>
              <h4>「矛盾・外れ値・サインを見つけて」</h4>
              <p>多数派の合意、少数派の主張、1人だけの論点を抽出</p>
            </div>
          </div>

          <div class="tip-box">
            <strong>💡 TIP：出典必須を明示</strong><br>
            大規模分析では「○○ファイルの△△ページに基づく」のような出典を必ず併記させましょう。後で裏取りができます。
          </div>
        `
      },
      // --- C-9: 権限・利用量・モデル選択 ---
      {
        title: '2-9. 権限・利用量・モデル選択',
        type: 'lecture',
        content: `
          <h3>Cowork の動作の仕組み</h3>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">🛡️</div>
              <div class="grid-title">隔離実行環境</div>
              <div class="grid-desc">OS と隔離された仮想環境で動作。万が一の影響を防止</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📁</div>
              <div class="grid-title">フォルダ権限</div>
              <div class="grid-desc">指定したフォルダのみアクセス可。フォルダ外は見えない</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🗑️</div>
              <div class="grid-title">削除ゲート</div>
              <div class="grid-desc">永続削除には必ずユーザーの明示的な承認が必要</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">💾</div>
              <div class="grid-title">ローカル保存</div>
              <div class="grid-desc">会話履歴はローカルマシンに保存（クラウドに上がらない）</div>
            </div>
          </div>

          <h3>3つのモデルの使い分け</h3>
          <div class="visual-steps">
            <div class="step-item">
              <div class="step-number">O</div>
              <div class="step-content">
                <h4>Opus — 最も賢い</h4>
                <p>複雑な多段タスク、戦略立案、提案書ドラフト。利用枠消費：大</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">S</div>
              <div class="step-content">
                <h4>Sonnet — バランス（デフォルト推奨）</h4>
                <p>議事録整形、調査統合、定型分析。利用枠消費：中</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">H</div>
              <div class="step-content">
                <h4>Haiku — 軽い・速い</h4>
                <p>翻訳、要約、ファイル整理、単純な抽出。利用枠消費：小</p>
              </div>
            </div>
          </div>

          <div class="tip-box">
            <strong>💡 TIP：Sonnet をデフォルトに</strong><br>
            「全部 Opus」は枠の無駄遣い。Sonnet をデフォルトにして、必要な時だけ Opus に切り替える運用が現実的です。
          </div>

          <h3>Thinking Effort（思考の深さ）</h3>
          <p>Cowork / Claude Code では、Claude がどれだけ深く考えるかを調整できます。</p>
          <div class="visual-steps">
            <div class="step-item">
              <div class="step-number">L</div>
              <div class="step-content">
                <h4>Low — 即答</h4>
                <p>単純な質問、定型フォーマット変換。速くて安い</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">M</div>
              <div class="step-content">
                <h4>Medium — デフォルト</h4>
                <p>通常のタスク。多くの場面でこれで十分</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">H</div>
              <div class="step-content">
                <h4>High / Extra High — 深い思考</h4>
                <p>戦略立案、複雑な分析、提案書の核心部分。時間をかけて質を最大化</p>
              </div>
            </div>
          </div>

          <div class="tip-box">
            <strong>💡 TIP：「ここぞ」の場面で Extra High</strong><br>
            クライアントへの提案の核心部分や、複雑な戦略分析には Thinking Effort を Extra High に設定。応答時間は長くなりますが、思考の深さと出力の質が大きく向上します。日常タスクは Medium のまま、勝負所だけ切り替えるのが実践的です。
          </div>
        `
      },
      // --- C-10: Troubleshooting と Dispatch ---
      {
        title: '2-10. よくある問題と対処・スマホからの指示出し',
        type: 'lecture',
        content: `
          <h3>よくあるトラブルと対処</h3>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">⏳</div>
              <div class="grid-title">起動が遅い</div>
              <div class="grid-desc">初回・更新後は30秒〜1分待つ。閉じずに待つ</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">⏸️</div>
              <div class="grid-title">タスクが止まった</div>
              <div class="grid-desc">最も多い原因：アプリを閉じた。再起動して再開</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">利用枠に当たった</div>
              <div class="grid-desc">翌月リセット or プランアップ。2-9 の節約コツを実践</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔌</div>
              <div class="grid-title">MCP がエラー</div>
              <div class="grid-desc">Token 期限切れ / スコープ外参照。再認証 or 範囲見直し</div>
            </div>
          </div>

          <h3>Dispatch — スマホからの指示</h3>
          <p>Dispatch は Cowork セッションをスマホから操作する機能です。スマホは「リモコン」、デスクトップが「実体」。</p>

          <h3>Cowork 習熟の次のステップ</h3>
          <div class="visual-flow">
            <div class="flow-step">
              <div class="flow-num">1</div>
              <div class="flow-label">Plugin</div>
              <div class="flow-desc">1つインストール</div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <div class="flow-num">2</div>
              <div class="flow-label">実タスク</div>
              <div class="flow-desc">本物の業務で1つ</div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <div class="flow-num">3</div>
              <div class="flow-label">Skill化</div>
              <div class="flow-desc">繰り返すものだけ</div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <div class="flow-num">4</div>
              <div class="flow-label">Schedule</div>
              <div class="flow-desc">定期実行に乗せる</div>
            </div>
          </div>
        `
      }
    ,
      
      // --- D-1: Claude Code とは何か ---
      {
        title: '2-11. Claude Code とは何か',
        type: 'lecture',
        content: `
          <h3>Claude Code とは</h3>
          <p>Claude Code は<strong>エージェント型ツール</strong>。Claude が直接ファイル・ターミナル・コードベースを触り、自律的にループで目的を達成します。</p>

          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">Chat / Cowork</div>
              <ul>
                <li>対話や委任で成果物を生成</li>
                <li>品質は指示の都度制御</li>
                <li>再現性：低〜中</li>
              </ul>
            </div>
            <div class="ba-arrow">→</div>
            <div class="ba-item after">
              <div class="ba-label">Claude Code</div>
              <ul>
                <li>自律的に読み・書き・実行</li>
                <li>CLAUDE.md + Skills で品質を仕組み化</li>
                <li>再現性：高（同じ設定 = 同じ品質）</li>
              </ul>
            </div>
          </div>

          <div class="visual-equation">
            <div class="eq-term">
              <div class="eq-label">CLAUDE.md</div>
              <div class="eq-value">プロジェクトの記憶</div>
            </div>
            <div class="eq-operator">+</div>
            <div class="eq-term">
              <div class="eq-label">Skills / Hooks</div>
              <div class="eq-value">品質ルール</div>
            </div>
            <div class="eq-operator">=</div>
            <div class="eq-result">
              <div class="eq-label">再現性のある高品質出力</div>
            </div>
          </div>

          <h3>Cowork との違い</h3>
          <div class="visual-comparison">
            <div class="comparison-item">
              <h4>Cowork</h4>
              <ul>
                <li>GUI ベース</li>
                <li>指定フォルダのみ（隔離）</li>
                <li>再現性：中</li>
                <li>開始しやすい</li>
              </ul>
            </div>
            <div class="comparison-item">
              <h4>Claude Code</h4>
              <ul>
                <li>ターミナル / IDE / Desktop</li>
                <li>プロジェクト全体アクセス</li>
                <li>再現性：高（CLAUDE.md + Hooks）</li>
                <li>少し慣れが必要</li>
              </ul>
            </div>
          </div>

          <div class="info-box">
            <strong>ℹ️ 「コーディング」の名前で敬遠しない</strong><br>
            Claude Code はファイル操作・自動化・品質制御の道具として、コンサル業務でも強力です。Cowork で物足りなくなったら Claude Code に進みましょう。
          </div>
        `
      },
      // --- D-2: 4タッチポイントの使い分け ---
      {
        title: '2-12. 4タッチポイントの使い分け',
        type: 'lecture',
        content: `
          <h3>Claude Code の4つのタッチポイント</h3>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">💻</div>
              <div class="grid-title">CLI（ターミナル）</div>
              <div class="grid-desc">機能リリース最速、複数並列セッション可、最も柔軟</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📝</div>
              <div class="grid-title">IDE 拡張（Cursor / JetBrains）</div>
              <div class="grid-desc">エディタと統合、diff 確認しやすい、ターミナル苦手な人に推奨</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🖥️</div>
              <div class="grid-title">Desktop アプリ</div>
              <div class="grid-desc">Cowork と同じアプリで切り替え、バックグラウンド実行</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🌐</div>
              <div class="grid-title">Web（claude.ai/code）</div>
              <div class="grid-desc">GitHub リポジトリ専用、コンサル業務では出番少</div>
            </div>
          </div>

          <h3>状況に応じた使い分け</h3>
          <div class="visual-matrix">
            <div class="matrix-y-label">エディタで<br>見たい</div>
            <div class="matrix-x-label">まずは手軽に ← → フル機能で</div>
            <div class="matrix-cell muted">Web<br><small>GitHub 限定</small></div>
            <div class="matrix-cell active">IDE 拡張<br><small>diff＋編集が一画面</small></div>
            <div class="matrix-cell">Desktop アプリ<br><small>ハードル最低</small></div>
            <div class="matrix-cell active">CLI（ターミナル）<br><small>並列・最速リリース</small></div>
          </div>

          <div class="info-box">
            <strong>「どれが正解？」ではなく「今どれが合う？」</strong><br>
            Desktop アプリは Cowork と同じ画面で切り替えられるので、最初の一歩に最適。ファイルの差分を見ながら作業したい場面では Cursor 拡張が便利。慣れてきたら CLI で並列セッションやフル機能を活用。<strong>複数を併用するのが実践的</strong>です。
          </div>

          <h3>最初の一歩 — おすすめのステップ</h3>
          <div class="visual-flow">
            <div class="flow-step"><div class="flow-num">1</div><div class="flow-label">Desktop</div><div class="flow-desc">ハードル最低</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="flow-num">2</div><div class="flow-label">IDE 拡張</div><div class="flow-desc">diff が見える</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="flow-num">3</div><div class="flow-label">CLI</div><div class="flow-desc">フル機能</div></div>
          </div>
        `
      },
      // --- D-3: インストールと最初のプロンプト ---
      {
        title: '2-13. インストールと最初のプロンプト',
        type: 'hands-on',
        content: `
          <h3>動作モード — Permission の3つのレベル</h3>
          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">✋</div>
              <div class="grid-title">Approval（デフォルト）</div>
              <div class="grid-desc">ファイル編集・コマンド実行のたびに確認。最も安全</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">⚡</div>
              <div class="grid-title">Auto-accept</div>
              <div class="grid-desc">ファイル編集は自動承認。コマンド実行は確認</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📋</div>
              <div class="grid-title">Plan mode</div>
              <div class="grid-desc">読み取り専用、書き込み一切なし。計画だけ提示</div>
            </div>
          </div>

          <p><strong>Shift + Tab</strong> でモードを循環切り替えできます。</p>

          <div class="tip-box">
            <strong>💡 TIP：Plan Mode から始める習慣</strong><br>
            新しいプロジェクトや初めてのタスクは Plan Mode から。Claude が何をしようとしているかが見えるので、「思ってたのと違う」を事前に防げます。
          </div>

          <h3>Cursor に入れておきたい拡張機能</h3>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">📝</div>
              <div class="grid-title">Markdown Editor</div>
              <div class="grid-desc">CLAUDE.md や Skills の編集に。プレビュー付きで書きやすい</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">Excel Viewer</div>
              <div class="grid-desc">Claude が生成した .csv / .xlsx をエディタ内でプレビュー</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🖼️</div>
              <div class="grid-title">Image Preview</div>
              <div class="grid-desc">生成されたグラフや図を確認（Cursor は標準対応）</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📑</div>
              <div class="grid-title">PDF Viewer</div>
              <div class="grid-desc">Claude が作った PDF レポートをすぐ確認</div>
            </div>
          </div>

          <div class="info-box">
            <strong>非エンジニアこそ拡張機能で快適に</strong><br>
            エンジニア向けの拡張は不要。Markdown Editor と Excel Viewer だけで、コンサル業務の成果物確認が格段に楽になります。
          </div>
        `
      },
      // --- D-4: Explore → Plan → Code → Commit ---
      {
        title: '2-14. Explore → Plan → Code → Commit',
        type: 'lecture',
        content: `
          <h3>公式推奨の4ステップワークフロー</h3>
          <p>Anthropic が「もし1つしか持ち帰れないなら、これを」と明記するワークフローです。</p>

          <div class="visual-flow">
            <div class="flow-step"><div class="flow-num">1</div><div class="flow-label">調べる</div><div class="flow-desc">Plan Mode で現状を把握</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="flow-num">2</div><div class="flow-label">計画する</div><div class="flow-desc">作業計画を立てさせる</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="flow-num">3</div><div class="flow-label">実行する</div><div class="flow-desc">承認して作業を任せる</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="flow-num">4</div><div class="flow-label">確定する</div><div class="flow-desc">レビューして保存</div></div>
          </div>

          <div class="visual-big-message">
            <div class="big-message-icon">🎯</div>
            <div class="big-message-text">成功条件を最初に書く</div>
            <div class="big-message-sub">「何をもって完了とするか」を明示しないと、意図と違う方向に進みやすくなります。ゴールポストを先に立てる。</div>
          </div>

          <div class="info-box">
            <strong>ℹ️ Quick tip</strong><br>
            Claude が同じ間違いを繰り返したら「今のやり取りで気づいた重要事項を CLAUDE.md に保存して」と指示。次回から自動で守られます。
          </div>
        `
      },
      // --- D-5: Context管理 ---
      {
        title: '2-15. Context管理 — /compact、/clear、/context',
        type: 'lecture',
        content: `
          <h3>「覚えていられる量」とは（Context Window）</h3>
          <p>Claude Code がループの中で覚えていられる量。会話、読み込んだファイル、コマンド出力のすべてが入ります。容量は有限で、上限に近づくと自動 Compact（圧縮）が起きます。</p>

          <h3>3つの Context コマンド</h3>
          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">📦</div>
              <div class="grid-title">/compact</div>
              <div class="grid-desc">手動で要約して継続。同じタスクの続きで Context が膨らんだ時に</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🗑️</div>
              <div class="grid-title">/clear</div>
              <div class="grid-desc">完全リセット。別タスクに切り替える時、前のバイアスを持ち込まない</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">/context</div>
              <div class="grid-desc">現在の使用率を可視化。Compact / Clear のタイミング判断に</div>
            </div>
          </div>

          <div class="tip-box">
            <strong>💡 TIP：具体的に指示する = Context 節約</strong><br>
            曖昧な指示は Claude が探索する分 Context を消費します。具体的に書く習慣で精度と節約を両立できます。
          </div>

          <h3>覚えておきたい操作ショートカット</h3>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">⎋</div>
              <div class="grid-title">ESC × 2 回 = undo</div>
              <div class="grid-desc">Claude の応答を途中で止めて、直前の変更を元に戻す。方向性が違うと感じたら即キャンセルで Context（トークン）を節約</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">⬆️</div>
              <div class="grid-title">↑ キー = 直前の指示を再利用</div>
              <div class="grid-desc">入力欄が空の状態で ↑ キーを押すと、直前に送った指示が復元される。微調整して再送信に便利</div>
            </div>
          </div>

        `
      },
      // --- D-6: CLAUDE.md ---
      {
        title: '2-16. CLAUDE.md — プロジェクトの記憶',
        type: 'lecture',
        content: `
          <h3>CLAUDE.md とは</h3>
          <p>Claude Code がセッション開始時に自動で読み込むマークダウンファイル。プロジェクトの<strong>オンボーディング資料</strong>として機能します。</p>

          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">CLAUDE.md なし</div>
              <h4>毎回探索し直す</h4>
              <ul>
                <li>毎回プロジェクトを探索</li>
                <li>規約・スタイルを再発見</li>
                <li>試行錯誤で Context を消費</li>
              </ul>
            </div>
            <div class="ba-arrow">→</div>
            <div class="ba-item after">
              <div class="ba-label">CLAUDE.md あり</div>
              <h4>最初から理解済み</h4>
              <ul>
                <li>セッション開始時に自動読み込み</li>
                <li>ブレない応答（同じ前提）</li>
                <li>チームで共有すれば全員同じ品質</li>
              </ul>
            </div>
          </div>

          <h3>CLAUDE.md の階層構造</h3>
          <div class="visual-steps">
            <div class="step-item"><div class="step-number">1</div><div class="step-content"><h4>プロジェクト-level（./CLAUDE.md）</h4><p>プロジェクト固有の規約。Git でチーム共有。最も重要</p></div></div>
            <div class="step-item"><div class="step-number">2</div><div class="step-content"><h4>User-level（~/.claude/CLAUDE.md）</h4><p>自分専用のグローバル前提。全プロジェクトで読まれる</p></div></div>
            <div class="step-item"><div class="step-number">3</div><div class="step-content"><h4>Directory-specific</h4><p>特定サブディレクトリ用。そのディレクトリで作業中に追加で読まれる</p></div></div>
          </div>

          <div class="tip-box">
            <strong>💡 TIP：軌道修正 → 追加 のサイクル</strong><br>
            最初は CLAUDE.md なしで始め、Claude が間違えるたびに「これを CLAUDE.md に保存して」と追加。実際に必要な前提だけで構成される CLAUDE.md が育ちます。
          </div>

          <h3>.claude フォルダを覗いてみよう</h3>
          <p>プロジェクトルートの <code>.claude/</code> フォルダには、Claude Code の設定・履歴・Skills がすべて格納されています。</p>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">📁</div>
              <div class="grid-title">.claude/settings.json</div>
              <div class="grid-desc">許可コマンド、Hooks の設定。Git にコミットすればチーム共有</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🛠️</div>
              <div class="grid-title">.claude/skills/</div>
              <div class="grid-desc">プロジェクト固有の Skills。チームの知見を蓄積</div>
            </div>
          </div>

          <div class="tip-box">
            <strong>💡 TIP：定期的に .claude フォルダを確認</strong><br>
            Claude Code を使い込むと .claude フォルダに設定や Skills が蓄積されます。Cursor のサイドバーで中身を定期的にチェックし、不要な設定を整理しましょう。settings.json を Git にコミットすれば、チーム全員が同じ環境で作業できます。
          </div>
        `
      },
      // --- D-7: Skills（Claude Code での使い方） ---
      {
        title: '2-17. Skills（Claude Code での使い方）',
        type: 'lecture',
        content: `
          <h3>Claude Code での Skill 特有機能</h3>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">⚡</div>
              <div class="grid-title">/skill-name で明示呼び出し</div>
              <div class="grid-desc">スラッシュコマンドで Skill を確実に呼び出せる</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📂</div>
              <div class="grid-title">プロジェクト / ユーザー Skill</div>
              <div class="grid-desc">.claude/skills/ はプロジェクト固有、~/.claude/skills/ は全プロジェクト</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔧</div>
              <div class="grid-title">補助スクリプト同梱</div>
              <div class="grid-desc">処理用のスクリプトを Skill フォルダに同梱して自動実行</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📎</div>
              <div class="grid-title">サブファイル参照</div>
              <div class="grid-desc">REFERENCE.md や examples/ で詳細を分離、Context 節約</div>
            </div>
          </div>

          <h3>Skill と MCP の使い分け</h3>
          <div class="visual-comparison">
            <div class="comparison-item">
              <h4>Skill を使う場面</h4>
              <p>やり方の知識だけで済む（外部接続不要）。Context 効率が良い</p>
            </div>
            <div class="comparison-item">
              <h4>MCP を使う場面</h4>
              <p>外部ツール接続が必要（API、SaaS、データベース）</p>
            </div>
          </div>
        `
      },
      // --- D-8: Subagents ---
      {
        title: '2-18. Subagents — 並列と Context 隔離',
        type: 'lecture',
        content: `
          <h3>Subagent とは</h3>
          <p><strong>別 Context で並走するエージェント</strong>。本体の Context を汚さずに、重い探索や分析を任せられます。</p>

          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">💾</div>
              <div class="grid-title">Context の節約</div>
              <div class="grid-desc">Subagent が別 Context で全ファイルを読み、サマリだけ本体に返す</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">⚡</div>
              <div class="grid-title">並列処理</div>
              <div class="grid-desc">N 社のベンチマーク分析を N 個の Subagent で同時並行</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">👁️</div>
              <div class="grid-title">バイアスのない視点</div>
              <div class="grid-desc">コミット前レビューをフレッシュな Context で。第三者の目に近い</div>
            </div>
          </div>

          <h3>/agents コマンドで作成・管理</h3>
          <p><code>/agents</code> で Subagent 管理画面を開き、用途・ツール権限・色を設定。読取専用 Subagent が最も安全です。</p>

          <div class="tip-box">
            <strong>💡 TIP：読取専用 Subagent をデフォルトに</strong><br>
            レビュアーは指摘するだけで、修正は本体エージェントの役割。読取専用なら暴走時の被害ゼロです。
          </div>
        `
      },
      // --- D-9: MCP — Claude Code での使い方 ---
      {
        title: '2-19. MCP — Claude Code での使い方',
        type: 'lecture',
        content: `
          <h3>MCP サーバーのスコープ</h3>
          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">📌</div>
              <div class="grid-title">Local</div>
              <div class="grid-desc">現在のプロジェクトのみ。特定案件だけで使うサーバー</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">👤</div>
              <div class="grid-title">User</div>
              <div class="grid-desc">自分のすべてのプロジェクト。頻繁に使うグローバルなサーバー</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">👥</div>
              <div class="grid-title">プロジェクト</div>
              <div class="grid-desc">.mcp.json を Git にコミット。チーム全員が同じ設定を共有</div>
            </div>
          </div>

          <h3>Context cost の問題</h3>
          <p>MCP サーバーはツール定義が Context に<strong>常駐</strong>します。使ってなくても消費するため、実際に使うものだけ繋ぎましょう。</p>

          <div class="visual-comparison">
            <div class="comparison-item">
              <h4>CLI 経由（gh、aws 等）</h4>
              <p>必要な時だけ bash で呼び出す。Context を食わない</p>
            </div>
            <div class="comparison-item">
              <h4>MCP 経由</h4>
              <p>ツール定義が常駐。プログラマブルだが Context コストあり</p>
            </div>
          </div>

          <div class="tip-box">
            <strong>💡 TIP：CLI で済むものは CLI</strong><br>
            GitHub 操作なら gh CLI の方が Context 効率が良い。MCP 専用機能が必要な時だけ MCP を選びましょう。
          </div>
        `
      },
      // --- D-10: Hooks ---
      {
        title: '2-20. Hooks — 確実に実行されるルール',
        type: 'lecture',
        content: `
          <h3>Hooks とは — 必ず実行されるルール</h3>
          <p>CLAUDE.md はガイドラインなので、状況によって従わないこともあります。Hooks は<strong>システムが強制実行</strong>するので、例外なく守られます。Claude Code の特定タイミングで、決まったコマンドを必ず実行する仕組みです。</p>

          <div class="visual-comparison">
            <div class="comparison-item">
              <h4>CLAUDE.md</h4>
              <p>ガイドライン（ほぼ守る）。スタイル、トーン、規約に使う</p>
            </div>
            <div class="comparison-item">
              <h4>Hooks</h4>
              <p>ルール（必ず実行）。危険操作禁止、自動フォーマット、ログに使う</p>
            </div>
          </div>

          <h3>5つのイベント</h3>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">⏮️</div>
              <div class="grid-title">PreToolUse</div>
              <div class="grid-desc">ツール実行前。危険操作のブロック（exit code 2 で阻止）</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">⏭️</div>
              <div class="grid-title">PostToolUse</div>
              <div class="grid-desc">ツール実行後。自動フォーマット、テスト実行、バックアップ</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📨</div>
              <div class="grid-title">UserPromptSubmit</div>
              <div class="grid-desc">プロンプト送信時。ログ、機密フィルタリング</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🏁</div>
              <div class="grid-title">Stop / Notification</div>
              <div class="grid-desc">応答完了時・通知時。Slack 通知、セッションログ保存</div>
            </div>
          </div>

          <div class="info-box">
            <strong>ℹ️ チーム共有は Git で</strong><br>
            .claude/settings.json を Git にコミットすれば、チーム全員が同じ Hook を使えます。組織標準を強制できます。
          </div>
        `
      },
      // --- D-11: Code Review、コミット支援、Remote Control ---
      {
        title: '2-21. Code Review、コミット支援、Remote Control',
        type: 'lecture',
        content: `
          <h3>Subagent によるコミット前レビュー</h3>
          <p>メインエージェントは「実装した側」のバイアスがあります。<strong>読取専用の Subagent</strong> でフレッシュな視点からレビューしましょう。</p>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">🔍</div>
              <div class="grid-title">成果物レビュアー</div>
              <div class="grid-desc">論理の飛躍、見落とし、スタイルの不統一、リスクを指摘</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📝</div>
              <div class="grid-title">proposal-reviewer</div>
              <div class="grid-desc">論点網羅性、So What の有無、抽象用語の混入、出典明示を確認</div>
            </div>
          </div>

          <h3>Remote Control — スマホからの Claude Code セッション操作</h3>
          <div class="visual-comparison">
            <div class="comparison-item">
              <h4>Dispatch（Cowork）</h4>
              <p>スマホから新規タスクを投げる（リモコン、ジョブ依頼）</p>
            </div>
            <div class="comparison-item">
              <h4>Remote Control（Claude Code）</h4>
              <p>走っている Claude Code セッションを覗く・操作する（画面共有）</p>
            </div>
          </div>

          <div class="visual-big-message">
            <div class="big-message-icon">🎓</div>
            <div class="big-message-text">第2回 完了</div>
            <div class="big-message-sub">Cowork で「任せる」、Claude Code で「仕組み化する」。CLAUDE.md・Skills・Hooks で再現性ある高品質な成果物を作れるようになりました。</div>
          </div>
        `
      }
    
    ],
    quiz: [
      
      { question: 'Chat と Cowork の最大の違いは何ですか？', options: ['値段', '「対話」と「委任」（Cowork はゴール提示→計画→実行→完成品）', '動くプラットフォーム', 'AIモデル'], correct: 1, explanation: 'Cowork は「対話」ではなく「委任」のためのモード。ゴールを提示し、計画→実行→完成品という流れで進みます。' },
      { question: 'Cowork の3つの柱として正しい組み合わせはどれですか？', options: ['Plan / Execute / Connect', 'Read / Write / Delete', 'Input / Process / Output', 'Buy / Use / Sell'], correct: 0, explanation: 'Cowork の3つの柱は Plan（計画）、Execute（実行）、Connect（接続）です。' },
{ question: 'Cowork で向いているタスクとして本モジュールで挙げているものはどれですか？', options: ['クライアントとの即時対話', '議事録30本からの論点マップ作成、完成品（.docx）が欲しい', '1行の質問に対する1行の回答', 'メール1通の返信'], correct: 1, explanation: '大量ファイルの処理や完成品ファイルが必要なタスクは Cowork 向きです。' },
      { question: 'Cowork の起動方法として推奨されているのはどれですか？', options: ['ブラウザで claude.ai にアクセス', 'メールで起動依頼を送る', 'Claude Desktop アプリを起動して Cowork タブを選択', 'CLI で claude cowork と入力'], correct: 2, explanation: 'Cowork はデスクトップアプリの Cowork タブでのみ動きます。' },
      { question: 'Cowork で「フォルダを開く」操作の意味として正しいのはどれですか？', options: ['フォルダの内容を Anthropic に送信する', 'そのフォルダを Cowork セッションの作業対象として認識させる', 'パスワードを変更する', '友達を招待する'], correct: 1, explanation: 'フォルダを開く操作は、そのフォルダを Cowork の作業範囲として指定する宣言です。' },
      { question: 'Cowork のタスクループ4ステップとして正しい順序はどれですか？', options: ['実行 → 確認 → 指示 → すり合わせ', '指示を出す → すり合わせ → 実行 → 確認', 'すり合わせ → 指示 → 確認 → 実行', '確認 → 実行 → すり合わせ → 指示'], correct: 1, explanation: '指示を出す → すり合わせ → 実行 → 確認 が正しい順序です。' },
      { question: 'プロンプトに含めるべき3要素として推奨されているのはどれですか？', options: ['Input + Transformation + Output', 'Title + Author + Date', 'Header + Body + Footer', 'Login + Password + Logout'], correct: 0, explanation: 'Input（何を読むか）+ Transformation（何をするか）+ Output（何を出すか）の3点指定が推奨されています。' },
      { question: 'Subagent（サブエージェント）の役割として正しいのはどれですか？', options: ['ユーザーをサポートするカスタマーサポート', '大きなタスクで並列処理を行い、結果を統合する仕組み', 'AI の倫理を監視する役割', '別の AI 製品'], correct: 1, explanation: 'Subagent は大きなタスクを分割して並列処理し、結果を統合する仕組みです。' },
      { question: 'Cowork プロジェクト と Chat プロジェクトの主な違いとして挙げているものはどれですか？', options: ['Cowork プロジェクトは無料、Chat プロジェクトは有料', 'Cowork プロジェクトはローカル格納、Chat プロジェクトはクラウド格納', '両者は同じもの', 'Chat プロジェクトは廃止予定'], correct: 1, explanation: 'Cowork プロジェクトはローカル格納でファイル操作・委任向き、Chat プロジェクトはクラウド格納で対話向きです。' },
      { question: 'プロジェクトの Instructions に書くと効果的でないものはどれですか？', options: ['関係者', 'ファイル配置', '出力フォーマット', 'クレジットカード番号'], correct: 3, explanation: '機密情報（クレジットカード番号など）は Instructions に書いてはいけません。' },
      { question: 'Global Instructions と プロジェクトの Instructions の関係として正しいのはどれですか？', options: ['一方しか設定できない', '両方が読まれ、プロジェクト 側が後から読まれるので Global を上書きできる', 'Global が優先される', '互いに無関係で連動しない'], correct: 1, explanation: '両方が読まれ、プロジェクトの Instructions が後から読まれるため、Global の設定を上書きできます。' },
      { question: 'Plugin の中身として挙げているものはどれですか？', options: ['Skill だけ', '連携機能だけ', 'Skills + 連携機能（MCP）+ Subagents のバンドル', 'プログラムコードだけ'], correct: 2, explanation: 'Plugin は Skills + 連携機能（MCP）+ Subagents を職種単位でまとめたバンドルです。' },
      { question: 'Plugin の中身がプレーンテキストである利点はどれですか？', options: ['速度が速い', 'ファイルを開いて直接編集できる、カスタマイズしやすい', 'ファイルサイズが小さい', '暗号化されている'], correct: 1, explanation: 'プレーンテキストなので、ファイルを開いて直接編集でき、自社流にカスタマイズしやすいのが利点です。' },
      { question: 'Scheduled tasks の主な用途はどれですか？', options: ['1回限りのタスクの即時実行', 'Cowork タスクを定期的に自動実行（週次レポート、日次キャッチアップなど）', '異常検知', 'パスワード変更'], correct: 1, explanation: 'Scheduled tasks は Cowork タスクを決まった頻度で自動実行する機能です。' },
      { question: 'Skill と Schedule の役割分担として正しいのはどれですか？', options: ['Skill が「いつやるか」、Schedule が「何をやるか」', 'Skill が「何をやるか（手順）」、Schedule が「いつやるか（頻度）」', '両者は同じもの', '一方しか使えない'], correct: 1, explanation: 'Skill は何をやるか（手順）、Schedule はいつやるか（頻度）の役割分担です。' },
      { question: 'Cowork が Chat より得意な3場面はどれですか？', options: ['速度 / 品質 / コスト', '大量処理 / 並列処理 / ファイル直接編集', '読む / 書く / 編集', '買う / 売る / 保持'], correct: 1, explanation: '大量処理、並列処理、ファイル直接編集の3場面です。' },
      { question: 'Cowork の動作の仕組みとして挙げていないものはどれですか？', options: ['隔離実行環境', 'フォルダ権限', '削除ゲート', 'すべての操作にPIN認証'], correct: 3, explanation: 'PIN認証は Cowork の仕組みに含まれません。隔離環境、フォルダ権限、削除ゲートが挙げられています。' },
      { question: '3つのモデルのうち、複雑な多段推論や戦略立案に適しているのはどれですか？', options: ['Haiku', 'Sonnet', 'Opus', 'すべて同じ'], correct: 2, explanation: 'Opus は最も賢いモデルで、複雑な多段推論や戦略立案に適しています。' },
      { question: 'Cowork タスクが途中で止まった時の最も多い原因は何ですか？', options: ['パスワードが切れた', 'デスクトップアプリを閉じてしまった', 'インターネットがダウンした', 'Anthropic のサーバー障害'], correct: 1, explanation: 'デスクトップアプリを閉じてしまうのが最も多い原因です。最小化や別ウィンドウ切り替えはOKです。' },
      { question: 'Dispatch の仕組みとして正しいのはどれですか？', options: ['スマホで計算する', 'スマホから指示 → デスクトップで実行 → 結果を通知', 'すべてクラウドで実行', 'デスクトップ不要で動く'], correct: 1, explanation: 'Dispatch はスマホから指示を出し、デスクトップで実行、結果をスマホに通知する仕組みです。' },
      { question: 'Cowork 習熟の推奨ステップとして挙げているものはどれですか？', options: ['Plugin → 実タスク → Skill化 → Schedule → チーム共有', 'すべて自分で書く', 'Schedule から始める', 'チーム共有が最初'], correct: 0, explanation: 'Plugin を入れる → 実タスクを1つ走らせる → Skill化 → Schedule → チーム共有が推奨ステップです。' }
    ,
      
      { question: 'Claude Code と claude.ai Chat の根本的な違いは何ですか？', options: ['値段', 'Claude Code はファイル・ターミナル・コードベースに直接アクセスして自律的に読み書き・実行する', 'Chat の方が機能が多い', '違いはない'], correct: 1, explanation: 'Claude Code はファイル・ターミナル・コードベースに直接アクセスし、自律的に読み書き・実行するエージェント型ツールです。' },
      { question: 'AI Agent の特徴として正しいのはどれですか？', options: ['入力に対して1回だけ応答する', '環境とやりとりしながら目的達成のためにループで自律的に行動する', '人間の指示を全部受け取らないと動かない', 'インターネットがないと動かない'], correct: 1, explanation: 'AI Agent は環境とやりとりしながら、目的達成のためにループで自律的に行動するソフトウェアです。' },
      { question: 'Claude Code のタッチポイントとして挙げていないものはどれですか？', options: ['CLI（ターミナル）', 'IDE 拡張（Cursor / JetBrains）', 'Desktop アプリ', 'iPhone 専用アプリ'], correct: 3, explanation: 'iPhone 専用アプリはタッチポイントに含まれません。CLI、IDE 拡張（Cursor / JetBrains）、Desktop アプリ、Web が挙げられています。' },
      { question: '「エディタで成果物を見ながら作業したい」場合の選択として正しいのはどれですか？', options: ['CLI のみ', 'IDE 拡張（Cursor / JetBrains）', 'Web 版のみ', 'Desktop アプリのみ'], correct: 1, explanation: 'エディタで diff・ファイルを見ながら進めたい場合は IDE 拡張（Cursor / JetBrains）が適しています。' },
      { question: '機能リリースの優先順として正しいのはどれですか？', options: ['Web 版が先行', 'Desktop アプリが先行', 'CLI に最初にリリースされ、他は後追い', 'すべて同時リリース'], correct: 2, explanation: '新機能は基本的に CLI に最初にリリースされ、次に Desktop / Cursor 拡張等に展開されます。' },
      { question: '動作モードの3つとして正しい組み合わせはどれですか？', options: ['Approval / Auto-accept / Plan', 'Read / Write / Execute', 'Easy / Normal / Hard', 'Beta / Stable / Old'], correct: 0, explanation: 'Approval（確認）、Auto-accept（自動承認）、Plan（読み取り専用で計画のみ）の3つです。' },
      { question: 'Plan Mode の特徴として正しいのはどれですか？', options: ['自動的にすべてを実行する', '読み取り専用、書き込み一切なし、計画だけ提示', 'ファイル削除を高速化する', 'ネットワーク接続を切る'], correct: 1, explanation: 'Plan Mode は読み取り専用で、書き込みは一切行わず、計画だけを提示するモードです。' },
      { question: '公式が「これ1つだけ覚えるならこれ」と推奨するワークフローはどれですか？', options: ['Read / Write / Edit / Save', 'Explore / Plan / Code / Commit', 'Buy / Use / Maintain / Sell', 'Login / Work / Logout / Restart'], correct: 1, explanation: 'Explore → Plan → Code → Commit が公式推奨の4ステップワークフローです。' },
      { question: '「成功条件」を最初に明示する効果として正しいのはどれですか？', options: ['Claude が完了判定を自分でできる、出力の精度が上がる', '速度が上がる', '値段が下がる', 'ファイルサイズが減る'], correct: 0, explanation: '成功条件を明示すると、Claude が自分で完了を判定でき、出力の精度が劇的に上がります。' },
      { question: 'Context Window とは何ですか？', options: ['Claude のディスク容量', 'Claude Code がループ中で覚えていられる量（会話、ファイル、ツール定義など）', '月の利用枠', 'ファイルサイズの上限'], correct: 1, explanation: 'Context Window は Claude Code がループの中で覚えていられる量で、会話、ファイル、ツール定義などすべてが含まれます。' },
      { question: '/compact、/clear、/context の使い分けとして正しいのはどれですか？', options: ['すべて同じ', '/compact = 要約して継続、/clear = 完全リセット、/context = 現状可視化', '/compact = 削除、/clear = 保存、/context = ログ', '/compact = 開始、/clear = 終了、/context = 一時停止'], correct: 1, explanation: '/compact は要約して継続、/clear は完全リセット、/context は現在の使用率を可視化するコマンドです。' },
      { question: 'CLAUDE.md とは何ですか？', options: ['Claude のソースコード', 'Claude Code が毎セッション自動で読み込むプロジェクトのオンボーディング資料', 'ユーザーの個人情報', 'パスワードファイル'], correct: 1, explanation: 'CLAUDE.md はセッション開始時に自動で読み込まれるプロジェクトのオンボーディング資料です。' },
      { question: 'CLAUDE.md の運用として推奨するのはどれですか？', options: ['最初から完璧な CLAUDE.md を書く', '最初は CLAUDE.md なしで始め、軌道修正 した内容を追加していく', 'CLAUDE.md は使わない', '1万字以上の長大な CLAUDE.md を書く'], correct: 1, explanation: '最初は CLAUDE.md なしで始め、Claude が間違えるたびに修正内容を追加していく運用が推奨されています。' },
      { question: 'Skill が Claude Code で持つ特有機能として挙げているのはどれですか？', options: ['/skill-name でのスラッシュコマンド明示呼び出し', 'Audio 出力', '動画再生', 'クラウド同期'], correct: 0, explanation: 'Claude Code では /skill-name でスラッシュコマンドによる明示呼び出しが可能です。' },
      { question: 'Subagent の最大の特徴として正しいのはどれですか？', options: ['メインエージェントと共有 Context で動く', '別 Context で並走、本体 Context を汚さずに重い処理を任せられる', '自動で削除される', '必ずクラウドで動く'], correct: 1, explanation: 'Subagent は別 Context で並走し、本体 Context を汚さずに重い探索や分析を任せられます。' },
      { question: 'Subagent を作るコマンドはどれですか？', options: ['/clear', '/context', '/agents', '/skills'], correct: 2, explanation: '/agents コマンドで Subagent の管理画面を開き、作成・編集・削除ができます。' },
      { question: 'MCP サーバーのスコープとして挙げているものはどれですか？', options: ['Local / User / プロジェクト', 'Hot / Cold / Frozen', 'Public / Private / Confidential', 'Read / Write / Execute'], correct: 0, explanation: 'MCP サーバーのスコープは Local（現在のプロジェクトのみ）、User（自分の全プロジェクト）、プロジェクト（チーム共有）の3つです。' },
      { question: 'MCP サーバーが Context に与える影響として正しいのはどれですか？', options: ['影響なし', 'ツール定義が常駐し、繋いでいるだけで Context を消費する', '速度が速くなる', 'ファイルサイズが小さくなる'], correct: 1, explanation: 'MCP サーバーのツール定義は Context に常駐し、使っていなくても消費します。' },
      { question: 'Hooks の特徴として最も重要な点はどれですか？', options: ['速い', '必ず実行される — CLAUDE.md がガイドラインなのに対して Hooks はシステムが強制', '無料', '自動更新される'], correct: 1, explanation: 'Hooks の最重要点は「必ず実行される」こと。CLAUDE.md と違い、システムレベルで強制されます。' },
      { question: 'PreToolUse Hook の主な用途はどれですか？', options: ['ツール実行を高速化する', '危険な操作を事前にブロックする', 'ツール実行を2回繰り返す', 'ログを削除する'], correct: 1, explanation: 'PreToolUse Hook はツール実行前に動作し、条件に合わない操作をブロックできます。' },
      { question: 'Subagent でコミット前レビューを行う理由として正しいのはどれですか？', options: ['速度を上げるため', 'メインエージェントは実装した側のバイアスがあり、Subagent は別 Context でフレッシュな視点でレビューできるから', 'クラウド負荷を減らすため', '値段を下げるため'], correct: 1, explanation: 'メインエージェントは「実装した側」のバイアスがあり、Subagent は別 Context でフレッシュな視点からレビューできます。' },
      { question: 'Dispatch と Remote Control の違いとして正しいのはどれですか？', options: ['両者は同じ', 'Dispatch は Cowork に新規タスク投入、Remote Control は Claude Code セッションの継続操作', 'Dispatch は無料、Remote Control は有料', 'Remote Control の方が古い機能'], correct: 1, explanation: 'Dispatch は Cowork に新規タスクを投げる機能、Remote Control は走っている Claude Code セッションを継続操作する機能です。' }

    ],
    practices: [
      { section: '2-2. セットアップ', title: 'Cowork フォルダを指定する', task: 'デスクトップアプリで Cowork タブを開き、「Work in a folder」ボタンで作業フォルダを指定してみましょう。' },
      { section: '2-7. ファイル・ドキュメント', title: 'ファイル整理を依頼する', task: 'プロジェクトフォルダにファイルを数個入れ、Cowork に「このフォルダのファイルを種別・日付で整理して」と依頼してみましょう。' },
      { section: '2-7. ファイル・ドキュメント', title: 'Web Clipper → Claude Code', task: 'Web Clipper 拡張で調査対象のWebページをMarkdown化し、フォルダに保存。Claude Code に「この資料群を読んで要約して」と指示してみましょう。' },
      { section: '2-13. インストール', title: 'Claude Code を起動して最初のプロンプト', task: 'ターミナルまたは Cursor で claude を起動し、Plan Mode で「このフォルダの構成を説明して」と試してみましょう。' },
      { section: '2-14. ワークフロー', title: 'Explore → Plan → Code → Commit', task: '小さなタスク（README作成など）で4ステップワークフローを一通り体験してください。' },
      { section: '2-16. CLAUDE.md', title: 'CLAUDE.md を作成する', task: '/init コマンドで CLAUDE.md の骨格を自動生成し、プロジェクトの前提を追記してみましょう。' },
      { section: '2-17. Skills', title: 'Claude Code 用 Skill を作成する', task: '「議事録を整形する Skill を作って」と Claude Code に依頼し、.claude/skills/ に保存されることを確認してください。' }
    ],
    selfStudyResources: {
      links: [
        
        { title: 'Cowork 公式ドキュメント', url: 'https://docs.anthropic.com/en/docs/cowork', desc: 'Cowork の公式ガイド', category: '公式' },
        { title: 'Claude Desktop ダウンロード', url: 'https://claude.ai/download', desc: 'Cowork を使うためのデスクトップアプリ', category: 'ツール' },
        { title: 'MCP 公式', url: 'https://modelcontextprotocol.io/', desc: 'MCP の仕様・対応サービス一覧', category: '公式' },
        { title: 'Anthropic ブログ', url: 'https://www.anthropic.com/blog', desc: '最新アップデート・事例', category: '学習' },
        
        { title: 'Claude Code 公式ドキュメント', url: 'https://docs.anthropic.com/en/docs/claude-code', desc: 'Claude Code の公式ガイド', category: '公式' },
        { title: 'Claude Code ベストプラクティス', url: 'https://docs.anthropic.com/en/docs/claude-code/best-practices', desc: '効果的な Claude Code の使い方', category: '学習' },
        { title: 'Claude Skills ガイド', url: 'https://docs.anthropic.com/en/docs/claude-code/skills', desc: 'Skills の作成方法', category: '学習' },
        { title: 'MCP 公式', url: 'https://modelcontextprotocol.io/', desc: 'MCP の仕様・対応サービス一覧', category: '公式' },
        { title: 'MCP サーバー一覧', url: 'https://github.com/modelcontextprotocol/servers', desc: 'Slack・Drive・Notion 等の対応一覧', category: 'ツール' },
        { title: 'Anthropic ブログ', url: 'https://www.anthropic.com/blog', desc: '最新アップデート・事例', category: '学習' }
      ],
      faq: [
        
        { q: 'Cowork と Chat はどう使い分ける？', a: '考える・壁打ちは Chat、完成品が欲しい・大量ファイル処理は Cowork。迷ったら Chat で始めて、足りなければ Cowork に切り替えましょう。' },
        { q: 'フォルダ分離のルールは？', a: '案件メインフォルダは Claude に渡さず、必要分だけコピーした作業フォルダのみを Cowork に渡します。元データは絶対に触らせません。' },
        { q: 'Scheduled tasks はアプリが閉じていても動く？', a: 'いいえ。Cowork はローカルで動くため、実行時にデスクトップアプリが開いている必要があります。PC 起動時に保留タスクが実行されます。' },
        { q: 'モデルの使い分けは？', a: 'Sonnet をデフォルトにし、複雑な推論が必要な時だけ Opus、軽い処理は Haiku を使いましょう。' },
        { q: 'Dispatch はいつ使える？', a: 'Claude モバイルアプリが利用可能になった時点で使えます。現時点ではデスクトップアプリで運用してください。' },
        
        { q: 'Claude Code と Cowork はどう使い分ける？', a: 'Cowork は GUI ベースで成果物を作る協働ツール。Claude Code はターミナル / IDE で複数ステップを自律実行し、CLAUDE.md + Hooks で品質を完全に固定できます。シンプルなタスクは Cowork、再現性が必要なら Claude Code です。' },
        { q: 'CLAUDE.md はどう作る？', a: '/init コマンドで骨格を自動生成し、叩き台にして追加・修正していくのが効率的です。最初から完璧を目指さず、軌道修正 した内容を追加していきましょう。' },
        { q: 'Context が足りなくなったら？', a: '/context で使用率を確認し、80% 超えたら /compact で整理。別タスクに切り替えるなら /clear でリセット。具体的な指示で Context を節約できます。' },
        { q: 'Subagent はどう使う？', a: '/agents コマンドで作成。コードレビュー、大規模探索、並列分析で活用。読取専用をデフォルトにして安全に運用しましょう。' },
        { q: 'Hooks と CLAUDE.md の違いは？', a: 'CLAUDE.md はガイドライン（ほぼ守る）、Hooks はルール（必ず実行）。「絶対に守らせたい」ルールは Hooks に設定します。' },
        { q: 'Remote Control はいつ使える？', a: 'Claude モバイルアプリが利用可能になった時点で使えます。現時点ではデスクトップでの操作が前提です。' }
      ]
    }
  }
];


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
