// ========================================
// Claude 研修アプリ - 学習コンテンツデータ
// 実践型カリキュラム: チャット・Cowork・Claude Code
// ========================================

const MODULES = [
  // ============================================================
  // 第1回：Claudeで仕事の初速を上げる
  // ============================================================
  {
    id: 'session-1',
    title: '第1回：Claudeで仕事の初速を上げる',
    shortTitle: '第1回',
    description: 'Claudeの特徴を理解し、Chatで業務の初速を上げるまでを一気に体験する',
    target: 'マネージャー以上（ChatGPT/Gemini経験者）',
    duration: '自分のペースで',
    prereq: 'Claudeアカウント（事前準備済み）',
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>`,
    objectives: [
      'Claudeが何者か、他の生成AIと何が違うかを説明できる',
      'Claudeの主要機能を把握し、業務での使いどころをイメージできる',
      'Chat / Cowork / Claude Code の3モードを場面に応じて選べる',
      'Chatで壁打ち・下書き・要約を実行できる',
      'プロンプト3要素（前提の共有・タスク・ルール）で的確に指示が出せる',
      'AIの出力を鵜呑みにせず、確認・修正・責任を持つ姿勢が身についている',
      'ProjectとArtifactを使って、業務成果物を作り始められる'
    ],
    coverGroups: [
      { label: 'Claudeを知る', icon: '💡', sections: [0, 1, 2, 3], objectives: ['Claudeが何者か説明できる', '他の生成AIとの違いを理解する', '主要機能の全体像を把握する', '3モードを使い分けられる'] },
      { label: 'Chatで仕事を始める', icon: '💬', sections: [4, 5, 6], objectives: ['Chatで壁打ち・下書き・要約ができる', '良い指示の出し方を身につける', '出力の確認・修正ができる'] },
      { label: '成果物にする', icon: '🏗️', sections: [7], objectives: ['ProjectとArtifactで業務成果物を作れる'] }
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
          <p>Claude がどんなAIで、業務のどこに効くかを押さえます。ChatGPT や Gemini を使ったことがある皆さんが、Claude を使い始める際の出発点です。</p>

          <h3>Claudeとは</h3>
          <p>Claude は Anthropic が開発した生成AIアシスタントです。ChatGPT や Gemini と同じ「大規模言語モデル（LLM）」を基盤にしていますが、<strong>設計思想と得意領域</strong>に違いがあります。</p>

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
          <p>Claude は「検索の代わり」ではなく、<strong>業務の相棒</strong>として使うと真価を発揮します。</p>

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
              <div class="grid-title">分析・構造化</div>
              <div class="grid-desc">データの傾向分析、SWOT整理、競合比較表の作成など</div>
            </div>
          </div>

          <div class="visual-highlight-card">
            <p><strong>この研修のゴール</strong>：Claude を業務の相棒として使えるようになること。まずは Chat から始めて、徐々に活用範囲を広げていきます。</p>
          </div>

          <div class="tip-box">
            <strong>💡 すでに持っているスキルは活かせます</strong><br>
            ChatGPT や Gemini で身につけた「チャットで対話する」「ファイルを添付する」「Web検索を使う」といった基本操作は、そのまま Claude でも活かせます。
          </div>
        `
      },

      // ========================================
      // 1-2: ChatGPT / Geminiとの共通点・違い
      // ========================================
      {
        title: '1-2. ChatGPT / Geminiとの共通点・違い',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>すでに使っている生成AIとの共通点を確認し、Claude ならではの強みを理解します。「どこが同じで、どこが違うのか」を整理することで、Claude を効率よく使い始められます。</p>

          <h3>生成AIの共通点 — すでに知っていること</h3>
          <p>ChatGPT・Gemini・Claude は、いずれも大規模言語モデル（LLM）をベースにしたAIアシスタントです。基本的な使い方は共通しています。</p>

          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">💬</div>
              <div class="grid-title">チャット形式の対話</div>
              <div class="grid-desc">テキストで指示を出し、テキストで返ってくる。会話の流れで深掘りできる</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📎</div>
              <div class="grid-title">ファイル添付</div>
              <div class="grid-desc">PDF・Excel・画像などを添付して、中身について質問・処理できる</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🌐</div>
              <div class="grid-title">Web検索</div>
              <div class="grid-desc">最新情報が必要なときに、Webを検索して回答に反映できる</div>
            </div>
          </div>

          <h3>Claude の強み — ここが違う</h3>
          <p>同じ「生成AI」でも、製品ごとに設計思想が異なります。Claude が業務で特に力を発揮する場面を整理します。</p>

          <div class="visual-comparison">
            <div class="comparison-item">
              <h4>ChatGPT / Gemini が得意なこと</h4>
              <ul>
                <li>画像生成・音声対話が充実</li>
                <li>プラグイン／拡張のエコシステムが広い</li>
                <li>汎用的な質問応答・日常タスク</li>
              </ul>
            </div>
            <div class="comparison-item">
              <h4>Claude が得意なこと</h4>
              <ul>
                <li>長文の安定処理（報告書・議事録を丸ごと）</li>
                <li>指示への忠実さ（ルール遵守・出力形式の制御）</li>
                <li>構造化・論点整理（壁打ち相手として優秀）</li>
                <li>ファイルを直接編集する「Cowork」モード</li>
              </ul>
            </div>
          </div>

          <h3>具体例で見る Claude の強み</h3>
          <div class="example-box">
            <strong>📌 構造化指示への忠実さ</strong><br><br>
            指示：「この議事録を、決定事項・宿題（担当者と期限付き）・次回アジェンダ案に分けて整理してください。です・ます調で。」<br><br>
            → Claude は指定した3つの区分・フォーマット・文体をそのまま守って出力します。「箇条書き3点で」「表形式で」といった細かいルール指定にも忠実です。
          </div>

          <div class="info-box">
            <strong>ℹ️ 「どちらが優れている」ではない</strong><br>
            生成AIはタスクによって得意不得意が違います。Claude は「長い文書を読んで構造化する」「指示どおりの形式で出力する」「一緒に考える」場面で特に力を発揮します。必要に応じて使い分けるのが現実的です。
          </div>

          <div class="tip-box">
            <strong>💡 移行のコツ</strong><br>
            ChatGPT で使っていたプロンプトは、そのまま Claude でも使えます。まずは同じ指示を試してみて、出力の違いを体感するのが最速の学び方です。
          </div>
        `
      },

      // ========================================
      // 1-3: Claudeの主要機能マップ
      // ========================================
      {
        title: '1-3. Claudeの主要機能マップ',
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
              <div class="grid-desc">複数ソースを統合した包括的調査レポート。深く調べたいときに使う。<strong>第2回で学習</strong></div>
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
              <div class="grid-desc">ゴールを伝えてファイル作業を任せる。PPTX / XLSX / DOCX をフォルダに直接出力。<strong>第2回で学習</strong></div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">⚡</div>
              <div class="grid-title">Claude Code</div>
              <div class="grid-desc">ターミナル / IDE から高度な作業を自律実行。品質ルールの固定と自動化。<strong>第3回で学習</strong></div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">Office アドイン</div>
              <div class="grid-desc">Excel / PowerPoint / Word の中から Claude を呼び出す。<strong>第2回で学習</strong></div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🌐</div>
              <div class="grid-title">Chrome 拡張</div>
              <div class="grid-desc">ブラウザで開いたページを Claude に読ませて要約・分析。<strong>第2回で学習</strong></div>
            </div>
          </div>

          <h3>品質・連携を支える機能</h3>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">🧩</div>
              <div class="grid-title">Skills</div>
              <div class="grid-desc">繰り返すタスクの手順を標準化。チームの作法を Claude に覚えさせる。<strong>第3回で学習</strong></div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔗</div>
              <div class="grid-title">MCP / Connectors</div>
              <div class="grid-desc">Slack・Notion・Google Drive 等の社内ツールと Claude を接続。<strong>第3回で学習</strong></div>
            </div>
          </div>

          <div class="visual-highlight-card">
            <p><strong>今日のフォーカス</strong>：この第1回では <strong>Chat・Project・Artifact</strong> を中心に学びます。それ以外の機能は第2回・第3回で順に扱うので、今は「こういうものがある」と頭に入れておけばOKです。</p>
          </div>
        `
      },

      // ========================================
      // 1-4: Chat / Cowork / Claude Code の使い分け
      // ========================================
      {
        title: '1-4. Chat / Cowork / Claude Code の使い分け',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>Claude には3つの使い方（モード）があります。それぞれの役割と、「いつ、どれを使うか」の判断基準を押さえます。</p>

          <h3>3つのモードの全体像</h3>
          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">💬</div>
              <div class="grid-title">Chat</div>
              <div class="grid-desc">
                <strong>対話で考える</strong><br>
                壁打ち、質問、下書き、要約。<br>
                情報が1回で渡せるタスク向き。<br>
                ブラウザ（claude.ai）で使う
              </div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📂</div>
              <div class="grid-title">Cowork</div>
              <div class="grid-desc">
                <strong>任せて完成品を得る</strong><br>
                ファイルを渡して成果物を作ってもらう。<br>
                PPTX / XLSX 直接出力。離席OK。<br>
                デスクトップアプリで使う
              </div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">⚡</div>
              <div class="grid-title">Claude Code</div>
              <div class="grid-desc">
                <strong>高度な作業を自律実行</strong><br>
                品質ルールの固定、複数ステップの自動化。<br>
                再現性が必要な作業向き。<br>
                ターミナル / IDE で使う
              </div>
            </div>
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
              <div class="flow-desc">第2回で詳しく</div>
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
              <div class="flow-desc">第3回で詳しく</div>
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
            <strong>ℹ️ Cowork と Claude Code は第2回・第3回で詳しく</strong><br>
            今日は Chat の使い方をしっかり身につけることに集中します。Cowork・Claude Code は「こういうものがある」と知っておけば十分です。
          </div>
        `
      },

      // ========================================
      // 1-5: Chatで壁打ち・下書き・要約
      // ========================================
      {
        title: '1-5. Chatで壁打ち・下書き・要約',
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
      // 1-6: 良い指示の出し方
      // ========================================
      {
        title: '1-6. 良い指示の出し方',
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
      // 1-7: 出力を疑う・直す・責任を持つ
      // ========================================
      {
        title: '1-7. 出力を疑う・直す・責任を持つ',
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
            <strong>💡 ChatGPT / Gemini でも同じ</strong><br>
            ハルシネーションはすべての生成AIに共通するリスクです。Claude 特有の問題ではありません。すでに他の生成AI で「出力を確認する習慣」がある方は、そのままClaude でも活かしてください。
          </div>
        `
      },

      // ========================================
      // 1-8: Project / Artifactで成果物にする
      // ========================================
      {
        title: '1-8. Project / Artifact で成果物にする',
        type: 'hands-on',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>Chat での対話を「使い捨て」で終わらせず、<strong>案件の資産として蓄積し、成果物として残す</strong>方法を学びます。Project と Artifact を使うと、Claude の活用レベルが一段上がります。</p>

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
            「# A社 ERP導入案件<br>
            - クライアント：A社（製造業・従業員500名）<br>
            - フェーズ：要件定義（Phase 1 完了、Phase 2 進行中）<br>
            - 主要ステークホルダー：情報システム部 田中部長<br>
            - 出力ルール：結論先行、です・ます調、数字には出典を付ける<br>
            - 禁止：競合他社名を伏せ字にしないこと」
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
              <div class="grid-desc">簡易ダッシュボード、診断ツール、シミュレーター、画面モック。提案の論点を「触れる成果物」として具体化</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔄</div>
              <div class="grid-title">バージョン管理</div>
              <div class="grid-desc">追加指示で修正するたびにバージョンが記録される。前の状態に戻すことも可能</div>
            </div>
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
            <p><strong>第1回のまとめ</strong>：今日学んだ Chat・Project・Artifact だけでも、日常業務の多くのシーンで Claude を活用できます。まずはこの3つを使いこなし、慣れてきたら第2回（Cowork・Office）、第3回（Skills・MCP・Claude Code）へ進みましょう。</p>
          </div>
        `
      }
    ],

    // ========================================
    // クイズ（10問）
    // ========================================
    quiz: [
      {
        question: 'ChatGPT / Gemini と比べた Claude の特徴として、最も適切なものはどれですか？',
        options: ['画像生成に特化している', '長文処理の安定性と指示への忠実さに強みがある', 'プラグインのエコシステムが最も広い', '音声対話に最も優れている'],
        correct: 1,
        explanation: 'Claude は長文の安定処理（200Kトークン）と、指示への忠実さ（出力形式・ルール遵守）に強みがあります。画像生成やプラグインエコシステムは他サービスが充実しています。'
      },
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
        options: ['Claude だけに発生する問題で、ChatGPT では起きない', '出典を求めれば必ず正確な情報が返ってくる', '数字・固有名詞・引用は特に注意が必要で、重要情報は自分で裏取りする', 'Web検索をONにすればハルシネーションは完全になくなる'],
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
        options: ['今すぐ全機能を使いこなす必要がある', 'Chat で十分なので、Cowork と Claude Code は不要', 'Chat をまず使いこなし、必要に応じて Cowork（第2回）、Claude Code（第3回）へ進む', 'Cowork と Claude Code は同じ機能'],
        correct: 2,
        explanation: 'まずは Chat で壁打ち・下書き・要約をしっかり使いこなすことが大切です。ファイル作成が必要になったら Cowork、品質の固定が必要になったら Claude Code を学びましょう。'
      }
    ],

    // ========================================
    // 練習問題
    // ========================================
    practices: [
      {
        section: '1-5. Chatで壁打ち・下書き・要約',
        title: '会議メモから論点整理を作る',
        task: '手元の会議メモ（なければ適当な長文メール）を Claude に添付し、「この内容を、決定事項・未決事項・宿題（担当者付き）に分けて整理してください」と依頼してみましょう。出力を確認し、足りない点があれば追加指示で修正してください。',
        hint: '出力形式を具体的に指定すると精度が上がります。「箇条書きで」「表形式で」など試してみましょう。'
      },
      {
        section: '1-5. Chatで壁打ち・下書き・要約',
        title: '提案の切り口を壁打ちする',
        task: '自分が関わっている（または想定する）案件について、「この案件に対する提案の切り口を5つ挙げて、それぞれのメリットとリスクを教えてください」と Claude に依頼してください。返ってきた5つのうち1つを選び、「この切り口をさらに深掘りして」と会話を続けてみましょう。'
      },
      {
        section: '1-6. 良い指示の出し方',
        title: 'プロンプト3要素で書き直す',
        task: '以下の雑なプロンプトを、3要素（前提の共有・タスク定義・ルール指定）を満たす形に書き直してから Claude に投げてください。\n\n悪い例：「競合分析して」\n\nヒント：あなたは何業界の何の案件で、どの競合の何を比較したいのか、出力はどういう形式が欲しいのか。',
        hint: '例：「あなたはITコンサルタントです。A社・B社・C社のクラウドERPサービスを、機能・価格・導入実績で比較してください。比較表（Markdown）で出力し、最後に推奨を1段落で述べてください。」'
      },
      {
        section: '1-6. 良い指示の出し方',
        title: '「Claudeへの指示」を設定する',
        task: 'claude.ai の設定 > 一般 >「Claudeへの指示」に、自分の前提情報を登録してください。\n新しいチャットで「私についてどんな前提を持っていますか？」と聞いて、反映されていることを確認しましょう。',
        hint: '例：「私は経営コンサルティングファームのシニアコンサルタントです。出力はです・ます調、結論先行で。」'
      },
      {
        section: '1-7. 出力を疑う・直す・責任を持つ',
        title: 'ハルシネーションを体験する',
        task: '「2024年の日本のSaaS市場規模を、出典付きで教えてください」を Claude に投げて、返ってきた数字と出典を別途検索して照合してください。\n次に Web 検索 ON で同じ質問を投げて、結果の違いを比較しましょう。',
        hint: '出典URLが実在するか、数字が正確かを確認してみてください。Web検索ONとOFFで精度がどう変わるかがポイントです。'
      },
      {
        section: '1-8. Project / Artifact で成果物にする',
        title: 'Projectを作成して壁打ちする',
        task: 'claude.ai >「プロジェクト」から新規プロジェクトを作成してください。\nInstructions に案件概要を記入し、参照資料があればアップロード。\n「この案件の論点を3つ整理して」と試してください。\nProjectなしの通常チャットとの応答の違いを比較してみましょう。'
      },
      {
        section: '1-8. Project / Artifact で成果物にする',
        title: 'Artifactで成果物を作る',
        task: 'Chat で壁打ちした内容や比較分析の結果を、Artifact として残してみましょう。\n\n1. 「この内容を比較表のArtifactにして」と依頼\n2. 「さらにMermaid図で全体像を可視化して」と追加指示\n3. バージョン履歴で前のバージョンに戻せることを確認'
      },
      {
        section: '1-8. Project / Artifact で成果物にする',
        title: 'インタラクティブなArtifactを作る',
        task: '業務で使えるインタラクティブな成果物を Claude に作ってもらいましょう。\n\n例：「クライアントの業務改善の優先度を診断するツールを作って。5つの質問に答えると、改善領域の優先度がチャートで表示される」\n\nArtifact内でクリック・入力ができることを確認してください。',
        hint: '診断ツール、シミュレーター、簡易ダッシュボード、画面モックなど。「提案の論点を触れる形にしたい」と伝えてみましょう。'
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
        { title: 'Claude サポートサイト', url: 'https://support.claude.com/', desc: 'Project・Artifact・各機能の使い方ガイド', category: '📚 公式リファレンス' }
      ],
      faq: [
        { q: 'Claude と ChatGPT / Gemini の違いは何ですか？', a: 'Claude は長文処理の安定性（200Kトークン）、指示への忠実さ（出力形式・ルール遵守）、構造化・論点整理の精度に強みがあります。また、ファイルを直接操作する Cowork モードは Claude 独自の機能です。ChatGPT は画像生成やプラグインエコシステム、Gemini は Google サービスとの連携が充実しています。タスクに応じて使い分けるのが現実的です。', category: '💡 Claudeの基本' },
        { q: 'Claude ではまず何から使えばよいですか？', a: 'まずは Chat から始めましょう。壁打ち（論点整理）、下書き（メール・報告書の素案）、要約（長い文書を要点に絞る）の3パターンが最も使用頻度が高いです。慣れてきたら Project で案件の背景を登録し、Artifact で成果物を残すとさらに効率が上がります。', category: '💡 Claudeの基本' },
        { q: 'Chat / Cowork / Claude Code はどう使い分けますか？', a: '「対話で済むか？」→ Chat。「ファイルを直接作ってほしいか？」→ Cowork。「毎回同じ品質で繰り返したいか？」→ Claude Code。迷ったら Chat からで問題ありません。', category: '💡 Claudeの基本' },
        { q: 'Project とは何ですか？', a: 'Project は案件固有の背景情報・ルール・参照資料を Claude に覚えさせる仕組みです。Instructions（指示文）とナレッジベース（参照資料）を設定すると、その Project 内の全会話で自動参照されます。毎回同じ前提を説明し直す手間がなくなります。', category: '🖥️ Chat・Projects' },
        { q: 'Artifact とは何ですか？', a: 'Artifact は会話とは独立した成果物です。文書・表・図表・Webページ・ダッシュボードなどを生成でき、追加指示で修正するとバージョンが記録されます。チャットの回答は流れていきますが、Artifact は残ります。「これを Artifact にして」と依頼するか、Claude が自動的に生成します。', category: '🖥️ Chat・Projects' },
        { q: 'Cowork や Claude Code は最初から使うべきですか？', a: 'いいえ。まずは Chat で壁打ち・下書き・要約を使いこなすことが最優先です。ファイルを直接作ってほしい場面が出てきたら Cowork（第2回）、品質の再現性が必要になったら Claude Code（第3回）を学びましょう。', category: '💡 Claudeの基本' },
        { q: 'Claude の出力をそのまま使ってよいですか？', a: 'そのまま提出することは推奨しません。Claude の出力は「優秀な同僚の初稿」です。特に数字・固有名詞・引用元は裏取りが必要です。確認→修正→仕上げのプロセスを経て、自分の責任で最終成果物にしてください。', category: '✍️ プロンプト・品質' },
        { q: 'プロンプトの3要素は必ず全部入れるべきですか？', a: '必ずしも全部必要ではありません。簡単な質問なら不要ですが、業務で精度の高い出力が欲しいときは3要素（前提の共有・タスク定義・ルール指定）を意識すると品質が上がります。まず簡潔に指示して、返ってきた出力を見て追加指示するやり方も有効です。', category: '✍️ プロンプト・品質' }
      ]
    }
  },


  // ============================================================
  // 第2回：成果物を作る
  // ============================================================
  {
    id: 'session-2',
    title: '第2回：成果物を作る',
    shortTitle: '第2回',
    description: 'Claudeを使って文書・表・スライド・調査レポート・触れる成果物まで、業務成果物を自分で作れるようになる',
    target: '第1回 完了者',
    duration: '自分のペースで',
    prereq: '第1回 完了',
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
    objectives: [
      'Claudeで作れる成果物の種類（文書・表・スライド・調査・チャート・触れる成果物）を把握している',
      'Claude in Office（Excel / PowerPoint / Word）で既存業務の質とスピードを上げられる',
      'Researchで調査結果を示唆付きで整理できる',
      'Artifactで診断ツール・ダッシュボード等の「触れる成果物」を作れる',
      'Chrome拡張でブラウザ上の作業を効率化できる',
      'Coworkでファイル作業を委任できる',
      'Scheduled tasksで定型業務を自動実行できる'
    ],
    coverGroups: [
      { label: '成果物の幅を広げる', icon: '📋', sections: [0], objectives: ['Claudeで作れる成果物の全体像を把握する'] },
      { label: 'Officeで成果物を作る', icon: '💼', sections: [1], objectives: ['Excel / PowerPoint / Word の業務を加速する'] },
      { label: '調査・分析する', icon: '🔍', sections: [2], objectives: ['Researchで調査し示唆を出す'] },
      { label: '触れる成果物を作る', icon: '🎨', sections: [3], objectives: ['Artifactで提案・PJ用の試作品を作る'] },
      { label: 'ブラウザで支援する', icon: '🌐', sections: [4], objectives: ['Chrome拡張でWeb作業を効率化する'] },
      { label: 'ファイル作業を任せる', icon: '🤝', sections: [5], objectives: ['Coworkでファイル操作を委任する'] },
      { label: '定型業務を自動化する', icon: '⏰', sections: [6], objectives: ['Scheduled tasksで繰り返し作業を自動化する'] }
    ],
    sections: [

      // ========================================
      // 2-1: 成果物の種類を広げる
      // ========================================
      {
        title: '2-1. 成果物の種類を広げる',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>第1回では Chat を使ったテキストのやり取りが中心でした。しかし Claude で作れるものは文章だけではありません。このセクションでは、Claude を使って作れる<strong>成果物の全体像</strong>を一覧し、「こんなものも作れるのか」という視野を広げます。</p>

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
              <div class="grid-title">触れる成果物</div>
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
              <span class="mapping-from">触れる成果物（試作品）</span>
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
            <p><strong>この第2回で学ぶ流れ</strong>：Office → Research → Artifact → Chrome → Cowork → Scheduled tasks の順に、それぞれの機能で何が作れるかを実践します。</p>
          </div>
        `
      },

      // ========================================
      // 2-2: OfficeでExcel / PowerPoint / Wordを扱う
      // ========================================
      {
        title: '2-2. Office で Excel / PowerPoint / Word を扱う',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>Claude in Office を使うと、Excel・PowerPoint・Word の中で直接 Claude に指示が出せます。普段の Office 作業にAIを組み込むことで、分析・資料作成・文書校正の質とスピードを同時に上げられます。</p>

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
        `
      },

      // ========================================
      // 2-3: Researchで調査する
      // ========================================
      {
        title: '2-3. Research で調査する',
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
        `
      },

      // ========================================
      // 2-4: Artifactで提案・PJ用の"触れる成果物"を作る
      // ========================================
      {
        title: '2-4. Artifact で「触れる成果物」を作る',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>第1回で Artifact の基本を学びました。ここではさらに一歩進んで、<strong>実際に操作できる「触れる成果物」</strong>を Artifact で作る方法を学びます。診断ツール、シミュレーター、ダッシュボードなど、提案やプロジェクトの論点を具体化するための試作品です。</p>

          <h3>「触れる成果物」とは</h3>
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

          <h3>なぜ「触れる成果物」が提案に効くのか</h3>
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
              <div class="ba-label">触れる成果物を添えた提案</div>
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
            <p><strong>「触れる成果物」は試作品であり、本番システムではない</strong></p>
            <p>Artifact で作るものはあくまで<strong>提案やプロジェクトの論点を具体化するための「たたき台」</strong>です。クライアントに見せる際は「これは認識合わせのための試作品です」と必ず説明してください。本番システムの開発は別途エンジニアリングが必要です。</p>
          </div>

          <div class="info-box">
            <p><strong>Artifact にはデータを保存する仕組みがない</strong>ため、入力したデータはページを閉じると消えます。実データを扱う場合はこの点をクライアントに伝えておきましょう。</p>
          </div>
        `
      },

      // ========================================
      // 2-5: Chromeでブラウザ作業を支援する
      // ========================================
      {
        title: '2-5. Chrome でブラウザ作業を支援する',
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
      // 2-6: Coworkでファイル作業を任せる
      // ========================================
      {
        title: '2-6. Cowork でファイル作業を任せる',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>Cowork は、Claude のデスクトップアプリで使えるモードです。Chat が「対話」なのに対し、Cowork は<strong>「作業を任せる」</strong>感覚に近い使い方です。ファイルを渡して、加工・作成・整理を Claude に委任できます。</p>

          <h3>Chat と Cowork の違い</h3>
          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">Chat</div>
              <ul>
                <li>テキストで対話する</li>
                <li>ファイルは添付して参照してもらう</li>
                <li>出力はチャット上に表示される</li>
                <li>出力をコピーして自分で貼り付ける</li>
              </ul>
            </div>
            <div class="ba-arrow">→</div>
            <div class="ba-item after">
              <div class="ba-label">Cowork</div>
              <ul>
                <li>ファイルを渡して作業を依頼する</li>
                <li>Claude がファイルを直接読み書きする</li>
                <li>成果物がファイルとして生成される</li>
                <li>ダウンロードしてそのまま使える</li>
              </ul>
            </div>
          </div>

          <h3>Cowork が力を発揮する場面</h3>

          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">📁</div>
              <div class="grid-title">複数資料の整理</div>
              <div class="grid-desc">議事録5件を渡して「案件ごとに決定事項を整理して」</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">Excel の加工</div>
              <div class="grid-desc">CSVデータを渡して「月別の売上集計表を作って」</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📝</div>
              <div class="grid-title">Word・PowerPoint の下書き</div>
              <div class="grid-desc">要件をまとめたメモを渡して「報告書の初稿を Word で作って」</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🖼️</div>
              <div class="grid-title">素材の整理</div>
              <div class="grid-desc">散在する画像や資料を渡して「カテゴリ別に整理して一覧を作って」</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📋</div>
              <div class="grid-title">ファイル構成の確認</div>
              <div class="grid-desc">フォルダ内のファイルを読み取り「不足しているドキュメントを指摘して」</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📄</div>
              <div class="grid-title">レポートの初稿作成</div>
              <div class="grid-desc">調査メモと過去レポートを渡して「同じフォーマットで今月分を作って」</div>
            </div>
          </div>

          <h3>Cowork の使い方の流れ</h3>
          <div class="visual-steps">
            <div class="visual-step-item">
              <div class="step-marker">1</div>
              <div class="step-body">
                <div class="step-title">ファイルを Cowork にアップロードする</div>
                <div class="step-desc">作業対象のファイルを Cowork のワークスペースにドラッグ＆ドロップ、または添付します。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">2</div>
              <div class="step-body">
                <div class="step-title">やってほしい作業を伝える</div>
                <div class="step-desc">「このCSVから月別売上の集計表を作って」のように、成果物のイメージを伝えます。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">3</div>
              <div class="step-body">
                <div class="step-title">Claude が作業を実行する</div>
                <div class="step-desc">Claude がファイルを読み取り、加工・作成し、成果物ファイルを生成します。作業中に Claude から確認の質問が来ることもあります。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">4</div>
              <div class="step-body">
                <div class="step-title">成果物を確認・ダウンロードする</div>
                <div class="step-desc">生成されたファイルを確認し、修正が必要なら追加指示を出します。OKならダウンロードして利用します。</div>
              </div>
            </div>
          </div>

          <h3>注意点</h3>
          <div class="warning-box">
            <p><strong>作業用コピーを使う</strong></p>
            <p>Cowork にファイルを渡す際は、<strong>元ファイルのコピーを作ってから渡す</strong>ことをお勧めします。Claude がファイルを直接変更するため、意図しない変更が元ファイルに及ぶリスクを避けられます。</p>
          </div>

          <div class="info-box">
            <p>Cowork はデスクトップアプリ（Windows / Mac）で使える機能です。ブラウザ版の claude.ai からは利用できません。</p>
          </div>
        `
      },

      // ========================================
      // 2-7: 定型業務をScheduled tasks化する
      // ========================================
      {
        title: '2-7. 定型業務を Scheduled tasks 化する',
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
      }
    ],

    // ========================================
    // 第2回 クイズ（12問）
    // ========================================
    quiz: [
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
        question: 'Artifact で作った「触れる成果物」をクライアントに見せる際、必ず伝えるべきことは何ですか？',
        options: [
          '使用したプログラミング言語の説明',
          '「これは認識合わせのための試作品です」という位置づけ',
          'AI が作ったものなので品質は保証できないこと',
          'Artifact の使い方の技術的な説明'
        ],
        correct: 1,
        explanation: 'Artifact で作る「触れる成果物」は、提案やプロジェクトの論点を具体化するための「たたき台」です。クライアントが本番システムだと誤解しないよう、試作品であることを必ず伝えましょう。'
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
        question: '次のうち、Artifact の「触れる成果物」として作るのに最も適しているのはどれですか？',
        options: [
          '社内の人事管理システム',
          'クライアントとの認識合わせ用の IT 成熟度診断ツール',
          '本番運用する在庫管理データベース',
          '個人情報を扱う顧客登録フォーム'
        ],
        correct: 1,
        explanation: 'Artifact で作る「触れる成果物」は、論点を具体化するための試作品です。認識合わせ用の診断ツールは好例です。本番システムや個人情報を扱う仕組みには Artifact は適しません。'
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
    // 第2回 練習問題（8問）
    // ========================================
    practices: [
      {
        section: '2-2. Office で Excel / PowerPoint / Word を扱う',
        title: 'Excel データの傾向を読み取る',
        task: '手元にある Excel データ（売上・顧客・アンケート等）を開き、Claude in Excel で以下を依頼してみましょう。\n\n1. 「このデータから読み取れる傾向を3つ挙げて」\n2. 返ってきた示唆の中から1つ選び、「この点をさらに深掘りして」と追加指示\n3. 最後に「経営会議で報告するとしたら、どんなグラフが適切か」と聞く',
        hint: 'データがない場合は、サンプルの売上データ（3ヶ月分・5商品程度）を自分で作ってから試しましょう。'
      },
      {
        section: '2-2. Office で Excel / PowerPoint / Word を扱う',
        title: 'PowerPoint のスライド構成を作る',
        task: '自分が関わっている（または想定する）案件について、Claude in PowerPoint で提案書の構成を依頼してください。\n\n1. 「この案件の提案書を8〜10枚構成で作って。各スライドのタイトルとキーメッセージを提案して」\n2. 構成が出たら、「3枚目のスライドを役員向けの表現に書き直して」と追加指示\n3. 「全体のストーリーラインを1文で表現して」とまとめを依頼',
        hint: '案件の背景（業界・課題・提案の方向性）を最初に伝えると、精度の高い構成が返ります。'
      },
      {
        section: '2-3. Research で調査する',
        title: '競合調査レポートを作成する',
        task: 'Research を使って、以下の手順で競合調査を行ってください。\n\n1. 自分が関わる業界の競合3社を選ぶ\n2. 「○○業界のA社・B社・C社について、主力サービス・価格帯・強みを調査して、比較表にまとめてください。出典も明記してください」と依頼\n3. 返ってきた比較表の出典URLを実際にクリックして、情報が正確かを確認\n4. 「この調査結果から、当社にとっての機会とリスクを整理して」と示唆を依頼',
        hint: '出典URLが無効だった場合や数値が不正確だった場合は、どこが間違っていたかをメモしておきましょう。Research の限界を理解することも重要です。'
      },
      {
        section: '2-4. Artifact で「触れる成果物」を作る',
        title: 'IT 成熟度診断ツールを作る',
        task: 'Artifact を使って、クライアント向けの簡易診断ツールを作ってみましょう。\n\n1. 「クライアント企業のIT活用成熟度を5段階で診断するツールを作ってください。質問は5問で、回答に応じて総合スコアとアドバイスを表示してください」と依頼\n2. 生成された Artifact を実際に操作して回答してみる\n3. 「質問を1つ追加して」「結果にレーダーチャートを追加して」と修正指示を出す\n4. 完成したら HTML をダウンロードして、ブラウザで開けることを確認',
        hint: '「これは認識合わせのための試作品です」と伝えた上で、クライアントに見せることを想像して作りましょう。'
      },
      {
        section: '2-4. Artifact で「触れる成果物」を作る',
        title: 'ROI シミュレーターを作る',
        task: 'Artifact を使って、提案の効果を試算するシミュレーターを作ってみましょう。\n\n1. 「DX推進による業務効率化のROIシミュレーターを作ってください。入力項目は、現在の作業時間、削減率、人件費単価の3つ。年間のコスト削減額とROIを自動計算して表示してください」と依頼\n2. 数値を変えて結果が連動することを確認\n3. 「入力値の妥当性チェック（マイナス値の排除等）を追加して」と品質を上げる\n4. 「結果をグラフでも表示して」とビジュアルを強化',
        hint: 'シミュレーターの計算ロジックが正しいか、自分で計算して照合してみましょう。'
      },
      {
        section: '2-5. Chrome でブラウザ作業を支援する',
        title: 'Web 調査を Chrome 拡張で効率化する',
        task: 'Chrome 拡張を使って、Web 調査を効率化してみましょう。\n\n1. 調査したいテーマ（業界動向・競合サービス等）のWebページを3つ開く\n2. 各ページで Claude に「このページの要点を3つにまとめて」と依頼\n3. 3つの要約を比較し、「この3つの情報源から、共通する傾向を整理して」と依頼',
        hint: '機密情報が含まれないページ（公開されているIR資料、プレスリリース等）で試しましょう。'
      },
      {
        section: '2-6. Cowork でファイル作業を任せる',
        title: 'Cowork で複数ファイルを整理する',
        task: 'Cowork を使って、複数ファイルの整理を委任してみましょう。\n\n1. 議事録・メモ・メールなどのファイルを3〜5件用意する（コピーを作る）\n2. Cowork にアップロードし、「これらの資料から、案件ごとの決定事項・未決事項・宿題を整理して」と依頼\n3. 出力を確認し、「表形式にまとめ直して」「宿題に期限を追加して」と追加指示',
        hint: '必ず元ファイルのコピーを使ってください。Cowork はファイルを直接変更する可能性があります。'
      },
      {
        section: '2-7. 定型業務を Scheduled tasks 化する',
        title: '自分の定型業務を洗い出す',
        task: 'Scheduled tasks の設定に入る前に、まず自動化の候補を洗い出してみましょう。\n\n1. 自分の1週間のルーティンを振り返り、「毎回ほぼ同じ手順でやっている作業」を5つ書き出す\n2. その中から、Claude に任せられそうなもの（情報収集・整理・下書き系）を2つ選ぶ\n3. 選んだ2つについて、「毎週○曜日に、○○を○○の形式でまとめて」というスケジュール指示文を書く\n4. 余力があれば、Cowork で実際に Scheduled task を1つ設定してみる',
        hint: '最初は頻度の高い小さな作業から始めましょう。「毎朝の業界ニュース要約」などが手軽な第一歩です。'
      }
    ],

    // ========================================
    // 第2回 自習リソース
    // ========================================
    selfStudyResources: {
      links: [
        { title: 'Claude in Office（Anthropic 公式）', url: 'https://www.anthropic.com/claude-in-office', desc: 'Excel / PowerPoint / Word との連携ガイド', category: '💼 Officeで使う' },
        { title: 'Cowork 公式ドキュメント', url: 'https://docs.anthropic.com/en/docs/cowork', desc: 'Cowork の機能と使い方ガイド', category: '💼 Officeで使う' },
        { title: 'Claude in Chrome 拡張', url: 'https://chromewebstore.google.com/detail/claude/danfoobapigkipfachmebkhbhegkahpc', desc: 'Chrome 拡張のインストールページ', category: '🌐 Chromeで使う' },
        { title: 'Artifact ガイド', url: 'https://support.anthropic.com/en/articles/9487310-what-are-artifacts-and-how-do-i-use-them', desc: 'Artifact の使い方と活用例', category: '📚 公式リファレンス' },
        { title: 'Research 機能ガイド', url: 'https://support.anthropic.com/en/articles/10120029-how-does-research-work', desc: 'Research の仕組みと活用方法', category: '📚 公式リファレンス' },
        { title: 'Scheduled tasks ガイド', url: 'https://support.anthropic.com/en/articles/11053627-what-are-scheduled-tasks', desc: 'Scheduled tasks の設定方法', category: '📚 公式リファレンス' }
      ],
      faq: [
        { q: 'Claude in Office では具体的に何ができますか？', a: 'Excel ではデータの傾向分析・集計観点の提案・グラフ化方針の相談・異常値の洗い出し、PowerPoint では構成案の作成・タイトル改善・ストーリーライン整理、Word では要約・文体統一・章立て見直し・クライアント向け表現変換ができます。Office 内で直接 Claude と対話する形で利用します。', category: '💼 Office・Chrome' },
        { q: 'Research と通常の Web 検索の違いは何ですか？', a: 'Research は複数の情報源を自動で横断調査し、要点を構造化して出典付きで報告してくれます。通常の Web 検索は自分でキーワードを考え、各サイトを読み、情報を取捨選択・整理する必要があります。ただし Research の結果も「初稿」なので、重要な数値や事実は必ず一次情報に当たって確認してください。', category: '💡 Claudeの基本' },
        { q: 'Artifact で作る「触れる成果物」とは何ですか？', a: '診断ツール、シミュレーター、ダッシュボード、画面モック、業務フロー可視化など、ユーザーが実際に操作できる成果物のことです。Artifact が HTML/CSS/JavaScript を生成し、ブラウザ上でそのまま動作します。提案やプロジェクトの論点を具体化する「たたき台」として活用します。', category: '💡 Claudeの基本' },
        { q: 'プロトタイプをクライアントに見せる際の注意点は？', a: '必ず「これは認識合わせのための試作品です」と伝えてください。Artifact で作るものは本番システムではなく、論点を具体化するためのたたき台です。データの保存機能がないこと、セキュリティ対策が施されていないことなどを説明し、本番開発は別途必要であることを明確にしましょう。', category: '✍️ プロンプト・品質' },
        { q: 'Chrome 拡張を使う際の注意点は？', a: 'Chrome 拡張を使うと、表示中のページ内容が Claude に送信されます。クライアントの機密情報や個人情報が含まれるページ（社内システム、顧客管理画面等）では、送信してよい情報かどうかを判断してから使ってください。また、Project の自動参照やファイルアップロードは Chrome 拡張では使えません。', category: '💼 Office・Chrome' },
        { q: 'Cowork はどのような作業に向いていますか？', a: '複数資料の整理、Excel の加工、Word・PowerPoint の下書き、ファイル構成の確認、レポートの初稿作成など、ファイルを直接扱う作業に向いています。Chat が「対話で相談する」のに対し、Cowork は「作業を委任する」イメージです。作業用コピーを作ってから渡すことをお勧めします。', category: '📂 Cowork' },
        { q: 'Scheduled tasks はどのような業務に使えますか？', a: '毎週の業界ニュース収集、定例会議前の確認事項整理、週次レポートの下書き、タスクのリマインド、定期的な競合情報チェックなど、「繰り返し」「定型」「準備作業」に効果を発揮します。「毎回同じようにやっている作業」を洗い出し、Claude に任せられないか考えてみてください。', category: '📂 Cowork' },
        { q: 'Claude で作った成果物はそのまま提出してよいですか？', a: '第1回の復習になりますが、どの機能で作った成果物も「優秀な同僚の初稿」です。特に Research の数値・出典、Artifact の計算ロジック、Office 連携の分析結果は、自分で確認してから使ってください。成果物の最終責任は常に自分にあります。', category: '✍️ プロンプト・品質' }
      ]
    }
  },

  // ============================================================
  // 第3回：品質と再現性を上げる
  // ============================================================
  {
    id: 'session-3',
    title: '第3回：品質と再現性を上げる',
    shortTitle: '第3回',
    description: 'Claude活用を個人の便利技で終わらせず、チームで再現性高く使うための仕組みを作る',
    target: '第2回 完了者',
    duration: '自分のペースで',
    prereq: '第2回 完了',
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    objectives: [
      'Skills で業務手順を標準化し、チームで再利用できる',
      'MCP / Connectors で社内ナレッジを Claude に接続し、出力品質を上げられる',
      'Claude Code で高度な作業（データ処理・ツール構築）を安全に任せられる',
      'CLAUDE.md / Hooks / Subagents で品質を固定し、抜け漏れを防げる',
      'チームで Claude 活用を展開する際の運用ルール・共有方法を設計できる'
    ],
    coverGroups: [
      { label: '手順を標準化する', icon: '🧩', sections: [0], objectives: ['Skillsで業務手順を型にして再利用する'] },
      { label: 'ナレッジにつなぐ', icon: '🔗', sections: [1], objectives: ['MCP / Connectorsで社内情報を適切に渡す'] },
      { label: '高度な作業を任せる', icon: '💻', sections: [2], objectives: ['Claude Codeで複雑な作業を安全に委任する'] },
      { label: '品質を固定する', icon: '✅', sections: [3], objectives: ['CLAUDE.md / Hooks / Subagentsで品質管理する'] },
      { label: 'チームで広げる', icon: '👥', sections: [4], objectives: ['チームでの運用ルールと展開方法を設計する'] }
    ],
    sections: [

      // ========================================
      // 3-1: Skillsで手順を標準化する
      // ========================================
      {
        title: '3-1. Skills で手順を標準化する',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
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
        `
      },

      // ========================================
      // 3-2: MCP / Connectorsで社内ナレッジにつなぐ
      // ========================================
      {
        title: '3-2. MCP / Connectors で社内ナレッジにつなぐ',
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
      // 3-3: Claude Codeで高度な作業を任せる
      // ========================================
      {
        title: '3-3. Claude Code で高度な作業を任せる',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>第2回で Artifact（簡易な触れる成果物）と Cowork（ファイル作業の委任）を学びました。Claude Code は、これらよりさらに<strong>高度な作業 — 複数ファイルの処理、データ分析ツール、再利用可能なプロトタイプ</strong>を扱える環境です。</p>

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
        `
      },

      // ========================================
      // 3-4: CLAUDE.md / Hooks / Subagentsで品質を固定する
      // ========================================
      {
        title: '3-4. CLAUDE.md / Hooks / Subagents で品質を固定する',
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
        `
      },

      // ========================================
      // 3-5: チーム展開する
      // ========================================
      {
        title: '3-5. チーム展開する',
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

          <div class="visual-big-message">
            <div class="big-message-icon">🎯</div>
            <div class="big-message-text">人が判断し、Claude が実行する — このサイクルをチームで回す</div>
            <div class="big-message-sub">個人の便利技を、チームの標準に。標準を、組織の力に。</div>
          </div>
        `
      }
    ],

    // ========================================
    // 第3回 クイズ（11問）
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
    // 第3回 練習問題（6問）
    // ========================================
    practices: [
      {
        section: '3-1. Skills で手順を標準化する',
        title: '議事録作成 Skill を設計する',
        task: '自分のチームで使える「議事録作成 Skill」を設計してください。\n\n1. 議事録に必ず含めるべき項目を洗い出す（日時、参加者、議題、決定事項、宿題、次回予定等）\n2. 「この Skill を使って議事録を作成して」と Claude に依頼した際に期待する出力形式を定義する\n3. 守るべきルール（文体、粒度、順序等）を書き出す\n4. 実際に Claude で「この手順に従って、以下の会議メモから議事録を作ってください」と試す',
        hint: 'まず実際の会議メモ（簡単なものでOK）を用意し、Skill の定義と一緒に Claude に渡して試しましょう。出力を見て「ここが足りない」と感じた部分を Skill に追記する、というサイクルで改善します。'
      },
      {
        section: '3-1. Skills で手順を標準化する',
        title: '提案書レビュー手順を標準化する',
        task: 'チーム共通の「提案書レビュー Skill」を設計してください。\n\n1. 提案書のレビュー観点を5つ以上洗い出す（構成の論理性、数値の根拠、読み手への配慮、文体の統一、ページ数の適切さ等）\n2. 各観点のチェック基準を具体的に定義する（例：「各スライドに1つのキーメッセージがあるか」）\n3. Claude に「この提案書をレビューして」と依頼する際のプロンプトテンプレートを作成する\n4. 実際の提案書（または架空のもの）でテストする',
        hint: '「レビューして」だけでは漠然とした指摘しか返りません。チェック観点を具体的に定義し、各観点ごとに◎○△×の評価を出させると、実用的なレビュー結果が得られます。'
      },
      {
        section: '3-3. Claude Code で高度な作業を任せる',
        title: 'Claude Code への安全な修正指示を作成する',
        task: '以下のシナリオで、Claude Code に出す修正指示文を作成してください。\n\nシナリオ：チーム内で使っている月次レポートのHTMLテンプレートがある。今月から集計項目を2つ追加したい（「新規顧客数」「解約率」）。既存のレイアウトは壊したくない。\n\n1. 変更対象を明確にした指示文を書く\n2. 禁止事項（触ってほしくない部分）を明記する\n3. 確認条件（何をもって完了とするか）を定義する\n4. 段階的に進める手順（まずデータ項目追加 → 表示確認 → レイアウト調整）を書く',
        hint: '「月次レポートを改善して」ではなく「○○ファイルの△△セクションに□□を追加して。既存の◇◇は変更しないで」のように、範囲・禁止事項・完了条件を具体的に書くのがポイントです。'
      },
      {
        section: '3-4. CLAUDE.md / Hooks / Subagents で品質を固定する',
        title: 'チーム品質チェックリストを作成する',
        task: 'Claude が生成した成果物の品質をチェックするためのリストを作成してください。\n\n1. 成果物の種類（文書、表、スライド、ツール）ごとにチェック項目を5つ以上定義する\n2. 各チェック項目に「確認方法」を具体的に書く（例：「数値は元データと照合する」「リンクは全てクリックして確認する」）\n3. 「誰が、いつ、どのタイミングでチェックするか」の運用ルールを決める\n4. このチェックリストを CLAUDE.md に組み込む形で整理する',
        hint: 'チェック項目は「何を確認するか」だけでなく「どうやって確認するか」まで書くと実用的です。また、全項目を毎回チェックするのは非現実的なので、重要度に応じた優先順位をつけましょう。'
      },
      {
        section: '3-5. チーム展開する',
        title: 'Project / Skills / Connectors の運用ルールを作成する',
        task: 'チームで Claude を活用する際の運用ルールを設計してください。\n\n1. チーム共通 Project に登録すべき情報（案件概要、業界知識、文体ルール等）を洗い出す\n2. チームで共有すべき Skills を3つ選び、管理方法（誰が更新権限を持つか、更新頻度等）を決める\n3. Connectors で接続すべき情報源と、接続してはいけない情報源のガイドラインを作成する\n4. 新メンバーが入った際のオンボーディング手順を書く',
        hint: 'ルールは「厳しすぎて誰も守れない」よりも「最低限これだけは守る」で始めましょう。運用しながら改善する前提で、まず小さく始めてフィードバックを集めることが重要です。'
      },
      {
        section: '3-5. チーム展開する',
        title: '情報管理ルールを策定する',
        task: 'チームで Claude を使う際の情報管理ルールを策定してください。\n\n1. Claude に渡してよい情報・渡してはいけない情報の基準を定義する\n2. 成果物の保存先と共有範囲を決める\n3. レビュー体制（誰が確認し、誰が承認するか）を明文化する\n4. インシデント発生時の対応フロー（誤って機密情報を渡してしまった場合等）を想定する\n5. これらをチーム内で共有するための1枚サマリーを作成する',
        hint: '完璧なルールを最初から作る必要はありません。「これだけは絶対ダメ」（機密情報の直接入力等）と「推奨事項」（レビュー後に提出等）を分けて整理すると、チームが守りやすいルールになります。'
      }
    ],

    // ========================================
    // 第3回 自習リソース
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
        { q: 'チームで Claude を使うときのルールは何ですか？', a: '最低限、以下を決めましょう。(1) 対象業務（どの業務から始めるか）、(2) 共通化するもの（Project・Skills・CLAUDE.md）、(3) 情報管理ルール（何を渡してよいか、結果の保存先）、(4) レビュー体制（誰が確認・承認するか）、(5) 成功事例の共有方法。完璧なルールを最初から作る必要はなく、運用しながら改善する前提で始めましょう。', category: '💡 Claudeの基本' },
        { q: 'クライアント情報や機密情報をどう扱うべきですか？', a: '「何を Claude に渡してよいか」のガイドラインをチームで策定してください。公開情報やサマリー化された情報は比較的安全ですが、個人情報・契約金額・NDA 対象情報は慎重に扱う必要があります。迷った場合は上長に確認する、というルールを設けるのも有効です。万一のインシデント対応フローも事前に決めておきましょう。', category: '💡 Claudeの基本' }
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
