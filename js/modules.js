// ========================================
// Claude 研修アプリ - 学習コンテンツデータ
// 実践型カリキュラム: チャット・Cowork・Claude Code
// ========================================

const MODULES = [
  // ============================================================
  // 第1回: Claudeを理解し、使い始める
  // ============================================================
  {
    id: 'session-1',
    title: '第1回：Claudeを理解し、使い始める',
    shortTitle: '第1回',
    description: 'ChatGPT/Geminiとの違いを理解し、claude.aiの7つの機能を把握して基本操作を完了する',
    target: 'マネージャー以上',
    duration: '90分',
    prereq: 'Claudeアカウント（事前準備済み）',
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>`,
    objectives: [
      'ChatGPT/Geminiとの違いを理解し、Claudeの「成果物生成」「業務実行」の強みを説明できる',
      'claude.aiの7つの機能（チャット・プロジェクト・アーティファクト・Design・Cowork・Code・Office）を理解し、目的に応じて選べる',
      'プロンプトの4要素（役割・文脈・制約・出力形式）で的確に指示を出せる',
      'プロジェクトとアーティファクトを業務で活用できる',
      'Coworkでドキュメント作成・データ分析の初歩ができる'
    ],
    sections: [
      // --- S1-1: Claudeで何が変わるか ---
      {
        title: 'Claudeで何が変わるか',
        type: 'lecture',
        content: `
          <h3>Claudeでできること</h3>
          <p>ChatGPTやGeminiと同じチャットAIですが、Claudeは<strong>「考える」の先にある「作る」「実行する」まで</strong>カバーします。</p>

          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">💬</div>
              <div class="grid-title">壁打ち・リサーチ</div>
              <div class="grid-desc">提案の切り口を一緒に考える、業界動向を整理する</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📑</div>
              <div class="grid-title">提案書・スライド作成</div>
              <div class="grid-desc">構成案からPPTXまで一気に生成。修正も会話で</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">データ分析・レポート</div>
              <div class="grid-desc">Excelを渡して「集計して」で分析完了。グラフ付き</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🖥️</div>
              <div class="grid-title">プロトタイプ生成</div>
              <div class="grid-desc">動くダッシュボードやデモを1時間で。提案に説得力</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔄</div>
              <div class="grid-title">業務の自動化</div>
              <div class="grid-desc">「毎週月曜にレポート作成」をClaudeに委任できる</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔗</div>
              <div class="grid-title">ツール連携</div>
              <div class="grid-desc">Slack・Notion・Google Driveと接続し、情報を横断</div>
            </div>
          </div>

          <h3>例：提案書作成がどう変わるか</h3>

          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">今の作り方</div>
              <h4>ゼロから自分で構成を考える</h4>
              <ul>
                <li>白紙のPPTを開いてうーんと悩む</li>
                <li>構成案をWordに書き出し、何度も直す</li>
                <li>スライドのデザイン調整に時間を取られる</li>
                <li>完成まで <strong>3〜5時間</strong></li>
              </ul>
            </div>
            <div class="ba-arrow">→</div>
            <div class="ba-item after">
              <div class="ba-label">Claude活用後</div>
              <h4>構想段階からAIと壁打ちして作る</h4>
              <ul>
                <li>チャットで提案の切り口を一緒に考える</li>
                <li>アーティファクトで構成案をその場で生成</li>
                <li>Designでスライドを一括生成→PPTX出力</li>
                <li>完成まで <strong>30分〜1時間</strong></li>
              </ul>
            </div>
          </div>

          <h3>スピードだけじゃない — クオリティが上がる</h3>
          <p>早くなるだけなら他のAIでも可能。Claudeは<strong>構想段階から関わる</strong>から、アウトプットの質自体が変わります。</p>

          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">💭</div>
              <div class="grid-title">構想を壁打ち</div>
              <div class="grid-desc">「この提案、切り口は何がいい？」<br>→ 視点が広がる</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🏗️</div>
              <div class="grid-title">構成を叩き台から</div>
              <div class="grid-desc">「5枚構成で作って」<br>→ 白紙から始めなくていい</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🎨</div>
              <div class="grid-title">見せ方をプロ品質に</div>
              <div class="grid-desc">「このトーンでスライド化」<br>→ デザインに時間を使わない</div>
            </div>
          </div>

          <div class="tip-box">
            <strong>💡 TIP：ChatGPT/Geminiの経験はそのまま活かせる</strong><br>
            プロンプトの書き方やチャットでの壁打ちなど、すでに身につけたスキルはClaudeでもそのまま使えます。この研修では、そこから先の<strong>「Claudeだけの機能」</strong>を上乗せしていきます。
          </div>
        `
      },
      // --- S1-2: Claude製品マップ ---
      {
        title: 'Claude製品マップ',
        type: 'lecture',
        content: `
          <h3>claude.ai を開くと見える世界</h3>
          <p>ChatGPTやGeminiと同じ「チャットAI」ですが、Claudeは<strong>ブラウザ・デスクトップ・Officeにまたがる7つの機能</strong>を持っています。サイドバーの構成そのままに整理します。</p>

          <div class="visual-product-map">
            <div class="product-map-row full">
              <div class="product-group browser">
                <div class="product-group-header">
                  <span class="group-icon">☁️</span>
                  claude.ai（ブラウザ）— チャット画面から全てアクセス
                </div>
                <div class="product-group-body">
                  <div class="product-item">
                    <span class="product-item-icon">💬</span>
                    <div class="product-item-name">チャット</div>
                    <div class="product-item-desc">質問・分析・壁打ち・Web検索</div>
                    <span class="product-item-badge">第1回</span>
                  </div>
                  <div class="product-item">
                    <span class="product-item-icon">📁</span>
                    <div class="product-item-name">プロジェクト</div>
                    <div class="product-item-desc">知識を蓄積し、文脈を保持</div>
                    <span class="product-item-badge">第1回</span>
                  </div>
                  <div class="product-item">
                    <span class="product-item-icon">🎯</span>
                    <div class="product-item-name">アーティファクト</div>
                    <div class="product-item-desc">図表・コード・文書をその場で生成</div>
                    <span class="product-item-badge">第1回</span>
                  </div>
                  <div class="product-item">
                    <span class="product-item-icon">🎨</span>
                    <div class="product-item-name">Design</div>
                    <div class="product-item-desc">スライド・プロトタイプ・LP生成</div>
                    <span class="product-item-badge">第2回</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="product-map-row split">
              <div class="product-group desktop">
                <div class="product-group-header">
                  <span class="group-icon">💻</span>
                  デスクトップアプリ — PCのファイルを直接操作
                </div>
                <div class="product-group-body">
                  <div class="product-item">
                    <span class="product-item-icon">🤝</span>
                    <div class="product-item-name">Cowork</div>
                    <div class="product-item-desc">GUIで業務を委任・自動化</div>
                    <span class="product-item-badge">第1〜2回</span>
                  </div>
                  <div class="product-item">
                    <span class="product-item-icon">⚡</span>
                    <div class="product-item-name">Code</div>
                    <div class="product-item-desc">Skill・MCPで高度に制御</div>
                    <span class="product-item-badge">第2〜3回</span>
                  </div>
                </div>
              </div>
              <div class="product-group office">
                <div class="product-group-header">
                  <span class="group-icon">📎</span>
                  Office連携
                </div>
                <div class="product-group-body">
                  <div class="product-item">
                    <span class="product-item-icon">📊</span>
                    <div class="product-item-name">Claude in Office</div>
                    <div class="product-item-desc">Excel・Word・PPTアドイン</div>
                    <span class="product-item-badge">第2回</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3>ChatGPT / Gemini との対応表</h3>
          <p>使い慣れた機能がClaudeではどれに当たるか、一覧で示します。</p>

          <div class="visual-mapping">
            <div class="mapping-header">
              <span>ChatGPT / Gemini</span>
              <span></span>
              <span>Claude</span>
            </div>
            <div class="mapping-row">
              <div class="mapping-from">チャットで質問・相談</div>
              <div class="mapping-arrow">→</div>
              <div class="mapping-to">
                <span class="mapping-icon">💬</span>チャット
                <span class="mapping-note">ほぼ同じ体験。Web検索・ファイル添付も可能</span>
              </div>
            </div>
            <div class="mapping-row">
              <div class="mapping-from">GPTs / Gems（カスタム設定）</div>
              <div class="mapping-arrow">→</div>
              <div class="mapping-to">
                <span class="mapping-icon">📁</span>プロジェクト
                <span class="mapping-note">指示文＋ナレッジで業務に特化した環境を構築</span>
              </div>
            </div>
            <div class="mapping-row">
              <div class="mapping-from">Code Interpreter / Canvas</div>
              <div class="mapping-arrow">→</div>
              <div class="mapping-to">
                <span class="mapping-icon">🎯</span>アーティファクト
                <span class="mapping-note">コード・図表・文書をチャット内で生成・プレビュー</span>
              </div>
            </div>
            <div class="mapping-row">
              <div class="mapping-from">DALL-E / Imagen（画像生成）</div>
              <div class="mapping-arrow">→</div>
              <div class="mapping-to">
                <span class="mapping-icon">🎨</span>Design
                <span class="mapping-note">画像ではなく、スライド・プロトタイプ・LPを生成。PPTXエクスポート可</span>
              </div>
            </div>
            <div class="mapping-row">
              <div class="mapping-from">（該当なし）</div>
              <div class="mapping-arrow">→</div>
              <div class="mapping-to">
                <span class="mapping-icon">🤝</span>Cowork / <span class="mapping-icon">⚡</span>Code
                <span class="mapping-note">PCのファイルを直接操作し、成果物を自動生成。Claude独自の強み</span>
              </div>
            </div>
          </div>

          <div class="visual-big-message">
            <div class="big-message-icon">💡</div>
            <div class="big-message-text">Claudeだけの領域 = 「作る」「実行する」</div>
            <div class="big-message-sub">チャット・プロジェクト・アーティファクトは他のAIにも似た機能があります。Design・Cowork・Code・Officeは<strong>Claudeだけが持つ「実行力」</strong>。この研修ではここを重点的に扱います。</div>
          </div>

          <h3>この研修での習得フロー</h3>

          <div class="visual-equation">
            <div class="eq-term">
              <div class="eq-label">相談する</div>
              <div class="eq-value">💬 チャット</div>
            </div>
            <div class="eq-operator">→</div>
            <div class="eq-term">
              <div class="eq-label">見せる形にする</div>
              <div class="eq-value">🎨 Design</div>
            </div>
            <div class="eq-operator">→</div>
            <div class="eq-term">
              <div class="eq-label">業務を委任する</div>
              <div class="eq-value">🤝 Cowork</div>
            </div>
            <div class="eq-operator">→</div>
            <div class="eq-result">
              <div class="eq-label">高度に制御する</div>
              <div class="eq-value">⚡ Code</div>
            </div>
          </div>

          <div class="tip-box">
            <strong>💡 TIP：迷ったらチャットから始める</strong><br>
            チャットで方向性を決める → Designで見せる形にする → 定型業務はCoworkに委任。Claude Codeは「もっと細かく制御したい」と思ったときに使えばOKです。
          </div>
        `
      },
      // --- S1-3: ロードマップ ---
      {
        title: '研修ロードマップ',
        type: 'lecture',
        content: `
          <h3>この研修の全体像</h3>
          <p>全3回で、チャットの基本からプロトタイプ生成まで段階的にスキルアップします。</p>

          <div class="visual-steps">
            <div class="step-item">
              <div class="step-number">1</div>
              <div class="step-content">
                <h4>第1回：Claudeを理解し、使い始める（今回）</h4>
                <p>ChatGPT/Geminiとの違い、7つの機能の全体像、プロジェクト・アーティファクト・Cowork入門。</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">2</div>
              <div class="step-content">
                <h4>第2回：Claudeで成果物を作る</h4>
                <p>Claude Designで提案書スライド、Claude in Officeで既存ファイル加工、Coworkで業務委任。目的に応じたツール選択を身につけます。</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">3</div>
              <div class="step-content">
                <h4>第3回：Claude Codeと高度な活用</h4>
                <p>Claude CodeでSkill・CLAUDE.mdによる品質制御、MCP連携、カスタムSkill設計。チーム展開まで。</p>
              </div>
            </div>
          </div>

          <h3>研修は最初の一歩</h3>
          <p>AIの技術は日々進化しています。この研修で基礎を身につけた後も、<strong>継続的にスキルアップしていく仕組み</strong>を用意しています。</p>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">📖</div>
              <div class="grid-title">自習コンテンツ</div>
              <div class="grid-desc">この研修アプリでいつでも復習・学習可能。TIPSやFAQも随時更新</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🤖</div>
              <div class="grid-title">AIチューター</div>
              <div class="grid-desc">研修内容の疑問やプロンプトの添削をいつでもAIに相談できる</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🚀</div>
              <div class="grid-title">アドバンスト編</div>
              <div class="grid-desc">エージェント活用、複雑なワークフロー自動化など、より高度な使い方</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🏢</div>
              <div class="grid-title">応用編</div>
              <div class="grid-desc">業界特化・クライアントワーク特化の実践パターン集</div>
            </div>
          </div>

          <div class="visual-big-message">
            <div class="big-message-icon">📈</div>
            <div class="big-message-text">基礎 → アドバンスト → 応用へ</div>
            <div class="big-message-sub">今回の基礎編は出発点です。日常業務で使いながらスキルを磨き、アドバンスト・応用編でさらに高度な活用ができるようになります。</div>
          </div>

          <div class="tip-box">
            <strong>💡 TIP：まずは1日1回、Claudeに何か聞いてみる</strong><br>
            研修後の定着に最も効果的なのは「毎日少しでも使うこと」。メールの下書き、会議の準備、ちょっとした調べものなど、小さなことからClaudeに任せてみてください。
          </div>
        `
      },
      // --- S1-4: セットアップ ---
      {
        title: 'セットアップ',
        type: 'hands-on',
        content: `
          <h3>環境を整える</h3>
          <p>全員が同じ状態でClaudeを使えるよう、アカウントとClaude Codeのセットアップを行います。</p>

          <div class="visual-steps">
            <div class="step-item">
              <div class="step-number">1</div>
              <div class="step-content">
                <h4>Claudeアカウントの確認</h4>
                <p><a href="https://claude.ai" target="_blank">claude.ai</a> にアクセスし、ログインできることを確認します。</p>
                <div class="info-box">Teamプランのアカウントが事前に準備されています。ログインできない場合は講師に声をかけてください。</div>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">2</div>
              <div class="step-content">
                <h4>Claude Codeのインストール</h4>
                <p>デスクトップアプリをインストールします（第2回以降で使用）。</p>
                <div class="try-box">
                  <strong>✅ やってみよう</strong>
                  <ol>
                    <li><a href="https://claude.ai/download" target="_blank">claude.ai/download</a> からインストーラーをダウンロード</li>
                    <li>インストーラーを実行し、画面の指示に従う</li>
                    <li>インストール完了後、Claude Codeを起動してログイン</li>
                    <li>「Hello」と入力して応答が返ることを確認</li>
                  </ol>
                </div>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">3</div>
              <div class="step-content">
                <h4>研修アプリの同期</h4>
                <p>Google Drive経由で研修アプリを自分のPCに同期します。</p>
                <div class="info-box">初期セットアップガイドは研修アプリのランディングページからアクセスできます。</div>
              </div>
            </div>
          </div>

          <div class="warning-box">
            <strong>⚠️ うまくいかない場合</strong><br>
            インストールが途中で止まる、ログインできないなどの問題が発生した場合は講師に声をかけてください。研修中に解決します。
          </div>

          <div class="tip-box">
            <strong>💡 TIP：Claude Codeは「第2の仕事机」</strong><br>
            Claude Codeはブラウザのチャットとは別物です。あなたのPC上のファイルを直接読み書きでき、PPTX・XLSX・Webアプリなどの成果物を自動で生成します。「もう一つの仕事机」と考えてください。
          </div>
        `
      },
      // --- S1-5: チャットの基本 ---
      {
        title: 'チャットの基本操作',
        type: 'hands-on',
        content: `
          <h3>的確に指示を出す — 4つの要素</h3>
          <p>Claudeへの指示（プロンプト）は、4つの要素を意識するだけで<strong>出力の質が劇的に変わります</strong>。</p>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">👤</div>
              <div class="grid-title">役割（Role）</div>
              <div class="grid-desc">「あなたは経営コンサルタントです」<br>Claudeにどんな専門家として振る舞ってほしいか</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📋</div>
              <div class="grid-title">文脈（Context）</div>
              <div class="grid-desc">「クライアントは食品メーカーで、売上が前年比90%」<br>背景情報・前提条件を共有</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔒</div>
              <div class="grid-title">制約（Constraints）</div>
              <div class="grid-desc">「3つ以内で」「専門用語は避けて」<br>出力の範囲・トーンを絞る</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📐</div>
              <div class="grid-title">出力形式（Format）</div>
              <div class="grid-desc">「箇条書きで」「表形式で」「PPTの構成案として」<br>期待する成果物の形を指定</div>
            </div>
          </div>

          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">❌ 曖昧な指示</div>
              <h4>提案書を作って</h4>
              <p>→ 何の提案？誰向け？どんな形式？Claudeが推測するしかない</p>
            </div>
            <div class="ba-arrow">→</div>
            <div class="ba-item after">
              <div class="ba-label">✅ 4要素を意識した指示</div>
              <h4>経営コンサルとして、食品メーカーのDX提案書の構成案を、5スライド以内・箇条書きで作って</h4>
              <p>→ 役割・文脈・制約・形式が明確。一発で使えるアウトプットが出る</p>
            </div>
          </div>

          <h3>プロジェクト — 文脈を保持する</h3>
          <p>プロジェクトを使うと、<strong>クライアント情報や業界知識をClaudeに記憶させておける</strong>ので、毎回説明し直す必要がなくなります。</p>

          <div class="try-box">
            <strong>✅ やってみよう：プロジェクトを作成する</strong>
            <ol>
              <li>claude.ai で「プロジェクト」→「+ 新規作成」</li>
              <li>プロジェクト名：自分の担当クライアント名を入力</li>
              <li>プロジェクト指示文に以下を入力：<br><code>あなたは経営コンサルタントです。[クライアント名]の[業界]における課題解決を支援しています。</code></li>
              <li>チャットで「最近の業界トレンドを3つ教えて」と聞いてみる</li>
            </ol>
          </div>

          <h3>アーティファクト — その場で図表を作る</h3>
          <p>アーティファクトを使うと、チャットの中で<strong>比較表・フレームワーク図・フローチャート</strong>をその場で生成できます。</p>

          <div class="try-box">
            <strong>✅ やってみよう：アーティファクトを生成する</strong>
            <ol>
              <li>先ほど作ったProjectのチャットで以下を入力：</li>
              <li>「[クライアント名]のSWOT分析を表形式で作成してください」</li>
              <li>アーティファクトとして表が生成されることを確認</li>
              <li>生成された表に対して「弱みをもう少し具体的に」と追加指示してみる</li>
            </ol>
          </div>

          <div class="tip-box">
            <strong>💡 TIP：プロジェクトは「クライアントごとに1つ」がおすすめ</strong><br>
            プロジェクト内の全チャットで文脈が共有されるので、提案書作成→議事録整理→次回準備をすべて同じプロジェクト内で完結できます。新しい案件が始まったら新しいプロジェクトを作りましょう。
          </div>
        `
      },
      // --- S1-6: Cowork入門 ---
      {
        title: 'Cowork入門',
        type: 'hands-on',
        content: `
          <h3>Coworkとは — Claudeと一緒に作業する</h3>
          <p>Coworkは、チャットの「会話形式」とは異なり、<strong>Claudeが作業を実行し、あなたがリアルタイムで確認・修正指示を出す</strong>スタイルです。</p>

          <div class="visual-comparison">
            <div class="comp-item">
              <h4>💬 チャット</h4>
              <ul>
                <li>質問 → 回答 の往復</li>
                <li>考える・調べるのに最適</li>
                <li>短いやりとりが得意</li>
              </ul>
            </div>
            <div class="comp-item">
              <h4>🤝 Cowork</h4>
              <ul>
                <li>指示 → Claudeが作業 → 確認 → 修正</li>
                <li>ドキュメント・分析を一緒に作る</li>
                <li>長い作業を任せられる</li>
              </ul>
            </div>
          </div>

          <h3>Coworkの始め方</h3>
          <div class="visual-steps">
            <div class="step-item">
              <div class="step-number">1</div>
              <div class="step-content">
                <h4>Coworkを開始する</h4>
                <p>claude.ai のチャット画面で「Coworkでタスクを開始」をクリック、またはチャットの中で長めの作業を依頼すると、Claudeが自動でCoworkモードに切り替わることもあります。</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">2</div>
              <div class="step-content">
                <h4>作業を依頼する</h4>
                <p>「この議事録を構造化して、要約・決定事項・アクションアイテムに分けて」のように、完成形のイメージを伝えます。</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">3</div>
              <div class="step-content">
                <h4>結果を確認して修正指示</h4>
                <p>Claudeが作業した結果を確認し、「アクションアイテムに期限も追加して」のように追加の指示を出します。</p>
              </div>
            </div>
          </div>

          <div class="try-box">
            <strong>✅ やってみよう：Coworkで議事録を構造化する</strong>
            <ol>
              <li>claude.ai で「Coworkでタスクを開始」をクリック</li>
              <li>以下のように入力：<br><code>以下の議事録を「要約」「決定事項」「アクションアイテム（担当者・期限付き）」に構造化してください。</code></li>
              <li>直近の会議のメモや議事録をペースト（なければサンプルテキストを使用）</li>
              <li>結果を確認し、「要約をもう少し簡潔に」など修正指示を出してみる</li>
            </ol>
          </div>

          <div class="try-box">
            <strong>✅ やってみよう：Coworkでデータを整理する</strong>
            <ol>
              <li>Excelファイルやテキストデータをアップロード</li>
              <li>「このデータを集計して、カテゴリ別の合計と上位5件を教えて」と指示</li>
              <li>結果を確認し、「グラフも作って」と追加指示</li>
            </ol>
          </div>

          <div class="tip-box">
            <strong>💡 TIP：Coworkは「優秀なアシスタントに作業を依頼する」感覚</strong><br>
            完璧な指示を出す必要はありません。まず大まかに依頼して、結果を見てから修正指示を出す。この「依頼→確認→修正」のサイクルに慣れることが大事です。
          </div>
        `
      }
    ],
    // --- 第1回 クイズ ---
    quiz: [
      {
        question: 'Claude が ChatGPT や Gemini と最も異なる点は？',
        options: ['日本語で会話できること', '無料で使えること', '考える→作る→実行まで一気通貫でカバーできること', '検索精度が高いこと'],
        correct: 2,
        optionFeedback: [
          '日本語対応は他のAIでも同様です',
          'Claude Proは有料プランです',
          '正解！PPTX生成・PC操作・外部ツール連携まで、一つのツールで完結できるのがClaudeの強みです',
          '検索はGoogle検索やGeminiの方が得意な領域です'
        ],
        explanation: 'Claude は PPTX/XLSX 生成・PC ファイル操作・外部ツール連携まで一気通貫でカバーできる点が決定的な違いです。'
      },
      {
        question: 'プロンプトの4要素に含まれないのは？',
        options: ['役割（Role）', '文脈（Context）', '予算（Budget）', '出力形式（Format）'],
        correct: 2,
        optionFeedback: [
          '役割は4要素の1つです（例：「あなたはコンサルタントです」）',
          '文脈は4要素の1つです（例：「クライアントはIT企業で…」）',
          '正解！4要素は「役割・文脈・制約・出力形式」です。予算は含まれません',
          '出力形式は4要素の1つです（例：「箇条書きで3点」）'
        ],
        explanation: '4要素は「役割・文脈・制約・出力形式」です。これを意識するだけで出力品質が大きく変わります。'
      },
      {
        question: 'プロジェクト の最も効果的な使い方は？',
        options: ['全てのチャットを1つのProjectにまとめる', 'クライアント・案件ごとにプロジェクトを分けて文脈を保持する', 'プロジェクト名を英語にする', '毎回新しいプロジェクトを作成する'],
        correct: 1,
        optionFeedback: [
          '1つにまとめると文脈が混在し、精度が下がります',
          '正解！案件ごとに分けると、そのプロジェクト内の全チャットで文脈が共有され効率的です',
          '名前の言語は品質に影響しません',
          '毎回作ると文脈の蓄積ができず、毎回一から説明が必要になります'
        ],
        explanation: 'プロジェクト内の全チャットで文脈が共有されるため、クライアントや案件ごとに分けると効率的です。'
      },
      {
        question: '「データ分析をしたい」ときに最適な使い方は？',
        options: ['チャットで「分析して」と質問する', 'Cowork でファイルをアップロードし、一緒に分析する', 'アーティファクト で表を作る', 'Web検索で事例を調べる'],
        correct: 1,
        optionFeedback: [
          'チャットでも可能ですが、ファイルを直接操作できるCoworkの方が効率的です',
          '正解！Coworkはファイルを渡して分析し、結果を確認しながら修正指示を出せます',
          'アーティファクトは図表のプレビュー機能で、本格的なデータ分析にはCoworkが適しています',
          'Web検索は情報収集には使えますが、手元のデータの分析には向きません'
        ],
        explanation: 'Cowork はファイルを渡して作業を依頼し、結果を確認しながら修正指示を出せる、共同作業に最適なモードです。'
      },
      {
        question: 'Cowork の正しい使い方は？',
        options: ['最初から完璧な指示を出さなければならない', 'まず大まかに依頼し、結果を見て修正指示を出す', '1回の指示で全て完結させる', '短い質問だけに使う'],
        correct: 1,
        optionFeedback: [
          '完璧な指示は不要です。最初は大まかでOK',
          '正解！「依頼→確認→修正」のサイクルを回すのがCoworkの正しい使い方です',
          '1回で完結を目指すより、対話的に進める方が良い結果が出ます',
          '短い質問はチャットで十分。Coworkは共同作業に使います'
        ],
        explanation: '「依頼→確認→修正」のサイクルに慣れることが大事です。完璧な指示は不要です。'
      }
    ],
    selfStudyResources: {
      links: [
        { title: 'Claude.ai（公式サイト）', url: 'https://claude.ai/', desc: 'Claudeのチャット・Coworkはここからアクセス', category: '公式' },
        { title: 'Anthropic 公式ドキュメント', url: 'https://docs.anthropic.com/', desc: 'Claude の技術仕様・機能一覧・ベストプラクティス', category: '公式' },
        { title: 'Claude プロンプトライブラリ', url: 'https://docs.anthropic.com/en/prompt-library/library', desc: '用途別のプロンプト例を多数掲載', category: '学習' },
        { title: 'Anthropic Cookbook', url: 'https://github.com/anthropics/anthropic-cookbook', desc: '実践的なユースケースとコード例', category: '学習' },
        { title: 'Claude Tips & Tricks（YouTube）', url: 'https://www.youtube.com/playlist?list=PLf2m23nhTg5VEz8sS0ORurJk3lBL7nB0V', desc: 'Anthropic 公式の使い方動画', category: '学習' }
      ],
      faq: [
        { q: 'Claude と ChatGPT の違いは？', a: 'Claude は長文処理（20万トークン）、構造化出力、日本語品質に強みがあります。ChatGPT は Web 検索や画像生成が標準搭載です。目的に応じて使い分けましょう。' },
        { q: 'プロジェクト に入れた情報は他人に見えますか？', a: 'プロジェクト のナレッジは設定した共有範囲でのみ見えます。ただし、各ユーザーの会話履歴は本人にしか見えません。' },
        { q: 'プロンプトの4要素は必ず全部入れるべき？', a: '必ずしも全部必要ではありません。簡単な質問なら不要ですが、業務で精度の高い出力が欲しいときは4要素を意識すると品質が上がります。' },
        { q: 'アーティファクト と Cowork の違いは？', a: 'アーティファクト はチャット内でコード・文書・図表を生成するプレビュー機能です。Cowork はファイルを直接操作する共同作業モードです。' },
        { q: '無料プランでも研修内容は実践できますか？', a: '基本的なチャット機能は無料でも使えますが、Cowork や プロジェクト など一部機能は有料プラン（Pro 以上）が必要です。研修ではProプランの利用を前提としています。' }
      ]
    }
  },

  // ============================================================
  // 第2回: Claudeで成果物を作る
  // ============================================================
  {
    id: 'session-2',
    title: '第2回：Claudeで成果物を作る',
    shortTitle: '第2回',
    description: 'Claude Design・Office・Coworkで成果物を直接生成し、目的に応じてツールを使い分ける',
    target: 'マネージャー以上',
    duration: '90分',
    prereq: '第1回完了',
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    objectives: [
      'Claude Designで提案書スライドやプロトタイプを作り、PPTXエクスポートまで完結できる',
      'Claude in OfficeでExcel・Word・PowerPointにAIを組み込める',
      'Claude Coworkでファイル操作・業務タスクを日本語指示だけで自動化できる',
      '「人が判断し、AIが実行する」サイクルを理解し実務で回せる',
      'タスクに応じてDesign・Office・Cowork・Codeを使い分けられる'
    ],
    sections: [
      // --- S2-1: Claude Design ---
      {
        title: 'Claude Design：提案資料＆ビジュアル生成',
        type: 'lecture',
        content: `
          <h3>Claude Design とは</h3>
          <p>Anthropic Labs が提供するビジュアル生成ツールです。<strong>チャット＋ビジュアルキャンバスの2画面構成</strong>で、指示を出すと右側にリアルタイムで成果物が表示されます。</p>
          <p>デザイン経験がなくても、日本語で指示するだけでプロ品質のビジュアルを生成できます。</p>

          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">従来のやり方</div>
              <h4>テキストで構成案を書いて外注/自作</h4>
              <ul>
                <li>Word で構成案を書く</li>
                <li>デザイナーに依頼 or 自分でPPT作成</li>
                <li>何度もやり取りして調整</li>
                <li>所要時間：数日〜1週間</li>
              </ul>
            </div>
            <div class="ba-arrow">→</div>
            <div class="ba-item after">
              <div class="ba-label">Claude Design</div>
              <h4>指示→即座にビジュアル化→PPTXエクスポート</h4>
              <ul>
                <li>日本語で「こういうスライドを作って」</li>
                <li>リアルタイムでプレビュー確認</li>
                <li>修正指示→即反映</li>
                <li>所要時間：30分〜1時間</li>
              </ul>
            </div>
          </div>

          <h3>Design で作れるもの</h3>

          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">スライド / ピッチデッキ</div>
              <div class="grid-desc">提案書・報告書・社内プレゼン。PPTX・PDF・Canvaへエクスポート可能</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🖱️</div>
              <div class="grid-title">インタラクティブプロトタイプ</div>
              <div class="grid-desc">クリック遷移やアニメーション付き。クライアントにその場でデモできる</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🌐</div>
              <div class="grid-title">LP / 一枚もの</div>
              <div class="grid-desc">ランディングページやワイヤーフレーム。URLで共有可能</div>
            </div>
          </div>

          <div class="try-box">
            <strong>✅ やってみよう</strong><br>
            Claude Designを開いて「クライアントA社向けの市場分析レポート、5枚のスライドで作成して」と指示してみましょう。生成されたスライドを確認し、「色をもう少し落ち着いたトーンにして」など修正指示を出してみてください。
          </div>

          <div class="tip-box">
            <strong>💡 TIP：デザインシステムを活用する</strong><br>
            チームのブランドカラー・フォント・ロゴを「デザインシステム」として登録すると、全プロジェクトで統一感のある資料が自動的に作られます。一度設定すれば毎回指定する手間がなくなります。
          </div>
        `
      },
      // --- S2-2: Claude in Office ---
      {
        title: 'Claude in Office',
        type: 'lecture',
        content: `
          <h3>Office アプリの中で Claude を使う</h3>
          <p>Claude in Office は、<strong>Excel・Word・PowerPointのアドイン</strong>としてClaude AIを利用できる機能です。ファイルをアップロードする必要がなく、いつものOfficeアプリ内で完結します。</p>

          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">Excel</div>
              <div class="grid-desc">データ集計・関数生成・分析。「売上をカテゴリ別に集計して」で即実行</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📝</div>
              <div class="grid-title">Word</div>
              <div class="grid-desc">文書の要約・校正・リライト。長文ドキュメントの品質向上に最適</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📑</div>
              <div class="grid-title">PowerPoint</div>
              <div class="grid-desc">スライドのデザイン改善・内容追加。既存PPTの加工・ブラッシュアップ</div>
            </div>
          </div>

          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">従来のやり方</div>
              <h4>手作業でExcel関数を組む</h4>
              <ul>
                <li>VLOOKUP・SUMIFSを手入力</li>
                <li>関数のエラーをデバッグ</li>
                <li>ピボットテーブルを手動設定</li>
                <li>所要時間：1〜2時間</li>
              </ul>
            </div>
            <div class="ba-arrow">→</div>
            <div class="ba-item after">
              <div class="ba-label">Claude in Office</div>
              <h4>「売上データをカテゴリ別に集計して」と指示</h4>
              <ul>
                <li>適切な関数を自動生成</li>
                <li>集計表を即作成</li>
                <li>グラフの提案も</li>
                <li>所要時間：5分</li>
              </ul>
            </div>
          </div>

          <div class="info-box">
            <strong>📌 Office内で完結するメリット</strong><br>
            ファイルをアップロードする手間がなく、既存のファイルをそのまま加工・改善できます。「今開いているこのファイル」に対して直接AIが作業するので、コピー&ペーストも不要です。
          </div>

          <div class="tip-box">
            <strong>💡 TIP：Design vs Office の使い分け</strong><br>
            <strong>新規作成はDesign</strong>（ゼロからスライドやプロトタイプを作る）、<strong>既存ファイルの加工はOffice</strong>（手元のExcel・Word・PPTを改善する）。この基準で選べば迷いません。
          </div>
        `
      },
      // --- S2-3: Claude Cowork ---
      {
        title: 'Claude Cowork：業務の委任と自動化',
        type: 'lecture',
        content: `
          <h3>Cowork とは</h3>
          <p>Claudeデスクトップアプリの「Cowork」タブから利用できる機能です。Claude Codeと同じエージェントアーキテクチャを<strong>GUIで操作</strong>できます。ターミナル不要で、日本語チャットだけで業務を委任できます。</p>

          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">従来のやり方</div>
              <h4>散在するCSVを手動でExcelに統合</h4>
              <ul>
                <li>各ファイルを一つずつ開く</li>
                <li>コピー&ペーストで統合</li>
                <li>列の並びを揃える</li>
                <li>所要時間：30分〜1時間</li>
              </ul>
            </div>
            <div class="ba-arrow">→</div>
            <div class="ba-item after">
              <div class="ba-label">Cowork</div>
              <h4>「このフォルダのCSVを統合して月別集計」と指示</h4>
              <ul>
                <li>ファイルを自動で検出・統合</li>
                <li>月別・カテゴリ別に集計</li>
                <li>結果をExcelに出力</li>
                <li>所要時間：5分</li>
              </ul>
            </div>
          </div>

          <h3>Cowork の3つの柱</h3>

          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">📁</div>
              <div class="grid-title">ファイル操作</div>
              <div class="grid-desc">CSV統合・フォルダ整理・データ変換。PC上のファイルを日本語指示で一括処理</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔗</div>
              <div class="grid-title">外部ツール連携</div>
              <div class="grid-desc">MCP経由でSlack・Google Drive等と接続。チャットから直接操作</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔄</div>
              <div class="grid-title">スケジュールタスク</div>
              <div class="grid-desc">定期レポートの自動化。「毎週月曜に集計レポートを作って」が実現</div>
            </div>
          </div>

          <div class="try-box">
            <strong>✅ やってみよう</strong><br>
            Claudeデスクトップアプリを開き、Coworkタブで「デスクトップにあるファイル一覧を種類別に整理して」と指示してみましょう。どのファイルがどう整理されるか、提案内容を確認してから実行してください。
          </div>

          <div class="info-box">
            <strong>📌 Coworkはプログラミング知識不要</strong><br>
            Coworkは日本語チャットで操作します。裏側でClaude Codeと同じエージェントが動いていますが、ユーザーはターミナルやコードを意識する必要はありません。
          </div>
        `
      },
      // --- S2-4: 人が判断し、AIが実行する ---
      {
        title: '「人が判断し、AIが実行する」',
        type: 'lecture',
        content: `
          <h3>AIの品質を決めるのは「人間の判断」</h3>
          <p>どんなに優れたAIツールも、<strong>「何を作るか」「どう使うか」の判断が曖昧なら、良い成果物は出ません</strong>。品質を決めるのはAIの性能ではなく、人間の判断です。</p>

          <div class="visual-equation">
            <div class="eq-term">
              <div class="eq-label">人の判断</div>
              <div class="eq-value">何を作るか</div>
            </div>
            <div class="eq-operator">×</div>
            <div class="eq-term">
              <div class="eq-label">適切なツール選択</div>
              <div class="eq-value">Design / Office / Cowork / Code</div>
            </div>
            <div class="eq-operator">=</div>
            <div class="eq-result">
              <div class="eq-label">成果物の</div>
              <div class="eq-value">出力品質</div>
            </div>
          </div>

          <div class="visual-big-message">
            <div class="big-message-icon">🎯</div>
            <div class="big-message-text">「AIに丸投げ」では品質は上がらない</div>
            <div class="big-message-sub">「何を作りたいか」を明確にしてから依頼する。この一手間が、成果物の品質を決定的に分けます。</div>
          </div>

          <h3>判断と実行のサイクル</h3>
          <p>Design・Office・Cowork・Code、どのツールでも共通する基本サイクルです。</p>

          <div class="visual-steps">
            <div class="step-item">
              <div class="step-number">1</div>
              <div class="step-content">
                <h4>目的を定義する（人）</h4>
                <p>「何のために、誰に向けて、何を作るのか」を明確にする</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">2</div>
              <div class="step-content">
                <h4>ツールを選ぶ（人）</h4>
                <p>タスクの性質に合わせてDesign・Office・Cowork・Codeを選択する</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">3</div>
              <div class="step-content">
                <h4>指示を出す（人）</h4>
                <p>完成形のイメージ・制約条件・品質基準を具体的に伝える</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">4</div>
              <div class="step-content">
                <h4>実行する（AI）</h4>
                <p>ツールが指示に基づいて成果物を生成する</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">5</div>
              <div class="step-content">
                <h4>結果を評価する（人）</h4>
                <p>目的に合っているか、品質は十分か、修正が必要かを判断する</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">6</div>
              <div class="step-content">
                <h4>修正指示を出す（人）</h4>
                <p>具体的な改善ポイントを伝え、再度AIに実行させる</p>
              </div>
            </div>
          </div>

          <div class="info-box">
            <strong>📌 このサイクルは全ツール共通</strong><br>
            Design・Office・Cowork・Code、どのツールを使っても「人が判断し、AIが実行する」サイクルは同じです。ツールが変わっても、人間の役割は変わりません。
          </div>
        `
      },
      // --- S2-5: ツール使い分けの実践 ---
      {
        title: 'ツール使い分けの実践',
        type: 'hands-on',
        content: `
          <h3>タスクの性質でツールを選ぶ</h3>
          <p>「どのツールを使えばいいか」は、<strong>新規作成か既存加工か</strong>と<strong>シンプルか高度か</strong>の2軸で判断できます。</p>

          <div class="visual-matrix">
            <div class="matrix-x-label">新規作成 ―――――→ 既存ファイル加工</div>
            <div class="matrix-body">
              <div class="matrix-y-label">シンプル ―→ 高度・複雑</div>
              <div class="matrix-quadrants">
                <div class="matrix-col-label">新規作成</div>
                <div class="matrix-col-label">既存ファイル加工</div>
                <div class="matrix-cell active">
                  <div class="cell-title">🎨 Claude Design</div>
                  <div class="cell-desc">スライド・プロトタイプ・LPをゼロから。PPTXエクスポート</div>
                </div>
                <div class="matrix-cell active">
                  <div class="cell-title">📎 Claude in Office</div>
                  <div class="cell-desc">Excel集計・Word校正・PPT改善。アプリ内で完結</div>
                </div>
                <div class="matrix-cell">
                  <div class="cell-title">⚡ Claude Code</div>
                  <div class="cell-desc">Skill・MCPで品質制御。テンプレート量産・高度な自動化</div>
                </div>
                <div class="matrix-cell">
                  <div class="cell-title">🤝 Cowork</div>
                  <div class="cell-desc">ファイル一括処理・ツール連携・定期タスク自動化</div>
                </div>
              </div>
            </div>
          </div>

          <h3>シナリオで考える：どのツールを使う？</h3>

          <div class="visual-steps">
            <div class="step-item">
              <div class="step-number">1</div>
              <div class="step-content">
                <h4>「来週のクライアント向けに提案書スライドを作りたい」</h4>
                <p>→ <strong>Claude Design</strong>：ゼロからスライドを生成し、PPTXでエクスポート</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">2</div>
              <div class="step-content">
                <h4>「この売上Excelに前年比の列を追加したい」</h4>
                <p>→ <strong>Claude in Office</strong>：Excel内でアドインから指示。ファイルの出し入れ不要</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">3</div>
              <div class="step-content">
                <h4>「フォルダ内の議事録PDFを全部読んで要点をまとめたい」</h4>
                <p>→ <strong>Cowork</strong>：複数ファイルの一括処理はCoworkの得意分野</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">4</div>
              <div class="step-content">
                <h4>「社内テンプレートに沿った品質でPPTXを量産したい」</h4>
                <p>→ <strong>Claude Code + Skill</strong>：品質ルールを定義して標準化された成果物を生成</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">5</div>
              <div class="step-content">
                <h4>「Slackの会話を要約して週報を自動生成したい」</h4>
                <p>→ <strong>Cowork or Claude Code + MCP</strong>：外部ツール連携で自動化</p>
              </div>
            </div>
          </div>

          <div class="try-box">
            <strong>✅ やってみよう</strong><br>
            自分の業務を3つ挙げて、それぞれどのツール（Design・Office・Cowork・Code）が最適か考えてみましょう。判断の基準は「新規 or 既存」と「シンプル or 高度」の2軸です。
          </div>
        `
      },
      // --- S2-6: Claude Code入門 ---
      {
        title: 'Claude Code入門',
        type: 'lecture',
        content: `
          <h3>Design・Coworkでは届かない領域をカバーする</h3>
          <p>Claude Codeは、Design・Office・Coworkの「上級者向けツール」という位置づけです。<strong>より細かい制御が必要なとき</strong>に力を発揮します。</p>

          <div class="visual-steps">
            <div class="step-item">
              <div class="step-number">1</div>
              <div class="step-content">
                <h4>チャットで相談</h4>
                <p>まず壁打ち・調査・アイデア出し</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">2</div>
              <div class="step-content">
                <h4>Designでビジュアル化</h4>
                <p>スライド・プロトタイプを即座に作成</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">3</div>
              <div class="step-content">
                <h4>Coworkで業務委任</h4>
                <p>ファイル操作・データ処理を自動化</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">4</div>
              <div class="step-content">
                <h4>Claude Codeで高度な制御 ← 第3回のテーマ</h4>
                <p>Skill・CLAUDE.md・MCPで品質と連携を極める</p>
              </div>
            </div>
          </div>

          <h3>Claude Code が追加する4つの機能</h3>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">⚙️</div>
              <div class="grid-title">Skill（品質ルール）</div>
              <div class="grid-desc">「提案書はこの品質で作る」をルール化。出力品質を組織レベルで標準化</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📜</div>
              <div class="grid-title">CLAUDE.md（プロジェクト設定）</div>
              <div class="grid-desc">プロジェクトの文脈を永続化。毎回説明し直す必要がなくなる</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔗</div>
              <div class="grid-title">MCP（外部接続）</div>
              <div class="grid-desc">Slack・Notion・Google Driveと連携。ツール間の情報を自動で橋渡し</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">⌨️</div>
              <div class="grid-title">ターミナルベース</div>
              <div class="grid-desc">最も柔軟な制御が可能。複雑なファイル操作やバッチ処理に対応</div>
            </div>
          </div>

          <h3>セットアップ方法（概要）</h3>
          <p>Claude Codeは3つの方法で利用できます。デスクトップアプリ、VS Code拡張機能、CLIのいずれかを選んでください。</p>

          <div class="info-box">
            <strong>📌 Claude Codeの詳しい使い方とハンズオンは第3回で学びます</strong><br>
            今回はClaude Codeの位置づけと概要を理解するところまで。実際の操作・Skill作成・MCP連携は次回の研修で体験します。
          </div>

          <div class="tip-box">
            <strong>💡 TIP：まずはDesign・Coworkを使いこなしてから</strong><br>
            Claude Codeは「もっと細かく制御したい」「品質を組織レベルで標準化したい」と思ったときに。日常業務の多くはDesign・Office・Coworkで十分カバーできます。
          </div>
        `
      }
    ],
    // --- 第2回 クイズ ---
    quiz: [
      {
        question: 'Claude Design で作成できないものは？',
        options: ['提案書スライド', 'インタラクティブプロトタイプ', 'Excel関数の自動生成', 'ランディングページ'],
        correct: 2,
        optionFeedback: [
          'Design得意分野。PPTX出力も可能',
          'Designの強み。クリック遷移やアニメーション付き',
          'Excel操作はClaude in Officeの領域。DesignはビジュアルWebコンテンツが専門',
          'LP生成はDesignの主要機能の一つ'
        ],
        explanation: 'Excel関数の生成はClaude in Officeの領域です。Claude Designはスライド・プロトタイプ・LPなどビジュアルコンテンツの生成に特化しています。'
      },
      {
        question: 'Claude in Office の最大の利点は？',
        options: ['新規ファイルをゼロから作れる', '既存のOfficeファイル内でAIが使える', 'PPTX形式でエクスポートできる', 'Slack連携ができる'],
        correct: 1,
        optionFeedback: [
          '新規作成はClaude Designの方が得意',
          '正解！アプリ内で完結するため、ファイルの出し入れが不要',
          'PPTXエクスポートはDesignの機能',
          'Slack連携はCoworkやClaude Code + MCPの領域'
        ],
        explanation: 'Claude in Officeの最大の利点は、既存のOfficeファイル内でAIを直接使えること。ファイルのアップロードやコピー&ペーストが不要で、今開いているファイルをそのまま加工できます。'
      },
      {
        question: 'Cowork と Claude Code の最も大きな違いは？',
        options: ['使える言語が違う', 'CoworkはGUIで操作し、CodeはターミナルベースでSkill等の高度な制御ができる', 'Coworkは無料でCodeは有料', 'Coworkの方が高性能'],
        correct: 1,
        optionFeedback: [
          'どちらも日本語で指示できます',
          '正解！同じエージェントアーキテクチャですが、CodeはSkill・CLAUDE.md・MCPで高度な品質制御が可能',
          'どちらもPro以上のプランで利用可能',
          '同じアーキテクチャなので基本性能は同等。Codeは制御の幅が広い'
        ],
        explanation: 'CoworkとClaude Codeは同じエージェントアーキテクチャですが、CoworkはGUIで手軽に操作でき、CodeはSkill・CLAUDE.md・MCPで高度な品質制御が可能です。'
      },
      {
        question: '「クライアント向けの市場分析レポートをスライドで作りたい」— 最適なツールは？',
        options: ['チャットでテキスト生成', 'Claude Designでスライド生成', 'Claude in Officeで作成', 'Claude CodeでPPTX生成'],
        correct: 1,
        optionFeedback: [
          'テキストは出せますがビジュアルなスライドにはなりません',
          '正解！Designならスライドを直接生成しPPTXでエクスポートできます',
          'OfficeはPPTの既存スライドの加工に向いています。新規作成はDesign',
          'Codeでも可能ですが、Designの方がビジュアル確認しながら作れて手軽'
        ],
        explanation: '新規でスライドを作成する場合はClaude Designが最適です。リアルタイムでプレビューしながら調整でき、PPTXでエクスポートできます。'
      },
      {
        question: '「人が判断し、AIが実行する」サイクルで、人が担うべきでないのは？',
        options: ['目的の定義', 'ツールの選択', '大量のファイル処理の実行', '結果の評価'],
        correct: 2,
        optionFeedback: [
          '目的の定義は人の最も重要な役割',
          'ツール選択は人の判断が必要',
          '正解！大量のファイル処理はAIが得意な「実行」部分。人は何を処理するか判断し結果を確認する',
          '結果の評価は人の責任。AIの出力を鵜呑みにしない'
        ],
        explanation: '大量のファイル処理などの「実行」はAIが得意な部分です。人間は目的の定義・ツール選択・結果の評価といった「判断」を担います。'
      }
    ],
    selfStudyResources: {
      links: [
        { title: 'Claude Design公式', url: 'https://support.claude.com/en/articles/14604416-get-started-with-claude-design', desc: 'Claude Designの始め方', category: '公式ドキュメント' },
        { title: 'Claude Cowork公式', url: 'https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork', desc: 'Coworkの始め方', category: '公式ドキュメント' },
        { title: 'Claude in Office', url: 'https://support.claude.com/', desc: 'Office連携の設定方法', category: '公式ドキュメント' },
        { title: 'Claude Code公式', url: 'https://docs.anthropic.com/en/docs/claude-code', desc: 'Claude Codeドキュメント', category: '公式ドキュメント' },
        { title: 'Anthropic公式ブログ', url: 'https://www.anthropic.com/news/claude-design-anthropic-labs', desc: 'Claude Design紹介記事', category: 'ブログ' }
      ],
      faq: [
        { q: 'Claude Designで作ったスライドはPowerPointで編集できる？', a: 'はい。PPTXエクスポート機能で書き出したファイルは、通常のPowerPointファイルとして開いて自由に編集できます。Canvaへの連携も可能です。' },
        { q: 'Claude in Officeはどのバージョンで使える？', a: 'Microsoft 365（旧Office 365）のExcel・Word・PowerPointで利用できます。アドインとしてインストールする形式です。' },
        { q: 'Coworkでファイルを操作する際のセキュリティは？', a: 'Coworkはローカル環境（あなたのPC上）で動作します。ファイルが外部に送信されることはなく、操作前に確認プロンプトが表示されます。' },
        { q: 'Design・Office・Cowork・Codeはどう使い分ける？', a: '新規ビジュアル作成→Design、既存Officeファイル加工→Office、ファイル一括処理や外部連携→Cowork、品質制御・高度な自動化→Code。タスクの性質で選びます。' },
        { q: 'Claude Codeは非エンジニアでも使える？', a: 'はい。日本語で指示するだけで操作できます。ただしDesign・Coworkの方がGUIで直感的なので、まずはそちらから始めることをお勧めします。' }
      ]
    }
  },

  // ============================================================
  // 第3回: Claude Codeと高度な活用
  // ============================================================
  {
    id: 'session-3',
    title: '第3回：Claude Codeと高度な活用',
    shortTitle: '第3回',
    description: 'Claude Code + Skill + MCPで品質を制御し、エージェント活用とチーム展開まで',
    target: 'マネージャー以上',
    duration: '90分',
    prereq: '第2回完了',
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    objectives: [
      'Claude Codeで成果物（PPTX・XLSX等）を生成し、Skillで品質を制御できる',
      'MCPで外部ツール（Slack・Notion・Google Drive等）と連携できる',
      '自チームの業務に特化したカスタムSkillを設計・作成できる',
      'Cowork→Codeの発展パスを理解し、段階的にスキルアップできる',
      '学んだ内容を自チームに教え、展開を推進できる'
    ],
    sections: [
      // --- S3-1: Claude Codeで成果物を生成する ---
      {
        title: 'Claude Codeで成果物を生成する',
        type: 'hands-on',
        content: `
          <h3>日本語の指示からPPTX・XLSXを直接生成する</h3>
          <p>Claude Codeは日本語で指示するだけで、PPTX・XLSX・Webアプリなどの<strong>成果物ファイルを直接生成</strong>できます。Designでは難しいテンプレート遵守や大量生成も、Codeなら対応可能です。</p>

          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">これまで</div>
              <h4>構成案を手作業でスライドに起こす</h4>
              <ul>
                <li>Claudeで構成案をテキスト作成</li>
                <li>PowerPointを開いて手動でスライド化</li>
                <li>レイアウト調整に時間がかかる</li>
              </ul>
            </div>
            <div class="ba-arrow">→</div>
            <div class="ba-item after">
              <div class="ba-label">Claude Code</div>
              <h4>指示→PPTX直接出力</h4>
              <ul>
                <li>「市場分析レポートをPPTXで作って」と指示</li>
                <li>Claude Codeが構成・デザイン・ファイル生成まで一括実行</li>
                <li>修正も「3枚目のグラフを棒グラフに変えて」で完了</li>
              </ul>
            </div>
          </div>

          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">PPTX</div>
              <div class="grid-desc">提案書・報告書・研修資料など、スライド形式の成果物を直接生成</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📈</div>
              <div class="grid-title">XLSX</div>
              <div class="grid-desc">分析レポート・集計表・ダッシュボードなど、データ形式の成果物を生成</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🌐</div>
              <div class="grid-title">Webアプリ</div>
              <div class="grid-desc">操作できるダッシュボード・プロトタイプをHTMLで生成</div>
            </div>
          </div>

          <div class="try-box">
            <strong>✅ やってみよう</strong><br>
            Claude Codeで「市場分析レポートのPPTXを8枚構成で作成して」と指示してみましょう。構成案がテキストで提示されたら内容を確認し、OKならファイル生成に進みます。
          </div>

          <div class="tip-box">
            <strong>💡 TIP：3ステップで手戻りを防ぐ</strong><br>
            まず構成案をテキストで確認→内容を詰める→ファイル生成の3ステップで進めると手戻りが少ない。いきなり完成形を求めず、段階的に進めましょう。
          </div>
        `
      },
      // --- S3-2: Skill・CLAUDE.mdによる品質制御 ---
      {
        title: 'Skill・CLAUDE.mdによる品質制御',
        type: 'hands-on',
        content: `
          <h3>なぜ品質がブレるのか</h3>
          <p>デフォルト設定では、出力のフォーマットやトーンは「AIの解釈」に依存します。同じ指示でも毎回微妙に違う結果になるのはこのためです。</p>
          <p><strong>2つのレバー</strong>で品質を安定させましょう。CLAUDE.md（プロジェクト全体の設定）とSkill（タスク別の品質ルール）です。</p>

          <div class="visual-equation">
            <div class="eq-term">
              <div class="eq-label">プロジェクト全体</div>
              <div class="eq-value">CLAUDE.md</div>
            </div>
            <div class="eq-operator">+</div>
            <div class="eq-term">
              <div class="eq-label">タスク別ルール</div>
              <div class="eq-value">Skill</div>
            </div>
            <div class="eq-operator">=</div>
            <div class="eq-result">
              <div class="eq-label">誰でも同じ</div>
              <div class="eq-value">安定した品質</div>
            </div>
          </div>

          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">Skillなし</div>
              <h4>毎回異なるフォーマット</h4>
              <ul>
                <li>スライド枚数がバラバラ</li>
                <li>トーンが毎回違う</li>
                <li>人によって品質に差が出る</li>
              </ul>
            </div>
            <div class="ba-arrow">→</div>
            <div class="ba-item after">
              <div class="ba-label">Skill適用</div>
              <h4>統一された品質</h4>
              <ul>
                <li>構成・枚数が固定される</li>
                <li>トーンと表現が統一される</li>
                <li>誰が使っても同じ水準</li>
              </ul>
            </div>
          </div>

          <div class="try-box">
            <strong>✅ やってみよう：提案書作成Skillを試す</strong><br>
            以下のSkillをClaude Codeに読み込ませ、「このSkillに従って提案書を作成して」と指示してみましょう。
            <pre><code># 提案書作成 Skill
## 構成ルール
- 表紙→エグゼクティブサマリー→課題→提案→ロードマップ→効果→体制→Next Steps
- 各スライドは見出し＋箇条書き3〜5点＋補足1文
- 全体で8〜12スライド
## トーン
- 課題は数字で、提案は具体アクションで</code></pre>
          </div>

          <div class="info-box">
            <strong>ℹ️ CLAUDE.md と Skill の違い</strong><br>
            CLAUDE.mdは全タスクに共通する設定（言語、出力形式、プロジェクトルール）。Skillはタスク別の品質基準（提案書の構成、レポートのフォーマットなど）。両方を組み合わせて使います。
          </div>
        `
      },
      // --- S3-3: MCP（コネクタ）連携 ---
      {
        title: 'MCP（コネクタ）連携',
        type: 'lecture',
        content: `
          <h3>MCPとは — Claudeに「手」を与える</h3>
          <p>MCP（Model Context Protocol）は、ClaudeをSlack・Google Drive・Notionなどの<strong>外部ツールと接続するコネクタ</strong>です。複数ツールをまたぐ作業を、1つの指示で自動実行できるようになります。</p>

          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">MCPなし：7手順・30分</div>
              <h4>手作業でツールを行き来</h4>
              <ul>
                <li>Slackを開いてメッセージを探す</li>
                <li>内容をコピーしてClaudeに貼り付け</li>
                <li>要約を生成→結果をコピー</li>
                <li>Notionを開いて貼り付け・整形</li>
              </ul>
            </div>
            <div class="ba-arrow">→</div>
            <div class="ba-item after">
              <div class="ba-label">MCPあり：1指示・5分</div>
              <h4>Claudeが自動で実行</h4>
              <ul>
                <li>「今週の#project-xのSlackを要約してNotionにまとめて」</li>
                <li>→ Claudeが自動でSlack読込→要約→Notion更新</li>
              </ul>
            </div>
          </div>

          <h3>3つの連携タイプ</h3>
          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">📥</div>
              <div class="grid-title">情報取得</div>
              <div class="grid-desc">Slackメッセージの読込、Google Driveのファイル検索、Notionページの取得</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📤</div>
              <div class="grid-title">書き込み</div>
              <div class="grid-desc">メール送信、Notionページの更新、Slackへのメッセージ投稿</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔄</div>
              <div class="grid-title">自動化</div>
              <div class="grid-desc">定期レポート生成、複数ツール横断のワークフロー自動化</div>
            </div>
          </div>

          <p>第2回で学んだCoworkからもMCPコネクタで連携が可能です。Claude Codeからはより細かい制御（条件分岐・ループ・エラーハンドリング等）ができます。</p>

          <div class="info-box">
            <strong>ℹ️ MCP設定はプログラミング不要</strong><br>
            MCP設定はJSON設定ファイルに接続先を追加するだけ。プログラミングの知識は不要です。
          </div>

          <div class="tip-box">
            <strong>💡 TIP：まずSlackとGoogle Driveから</strong><br>
            まずSlackとGoogle Driveの連携から始めるのがおすすめです。「今日のメンションを要約して」「先週の議事録をDriveから探して」など、日常的に使える場面が多いため、効果を実感しやすいです。
          </div>
        `
      },
      // --- S3-4: カスタムSkill設計 ---
      {
        title: 'カスタムSkill設計',
        type: 'hands-on',
        content: `
          <h3>「いつもの仕事」のルールをファイル化する</h3>
          <p>Skillとは、繰り返す業務の暗黙のルールをファイルにまとめたものです。ベテランの「コツ」を言語化し、<strong>誰でも同じ品質で成果物を出せる</strong>ようにします。</p>

          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">Skillなし</div>
              <h4>属人的な暗黙のルール</h4>
              <ul>
                <li>ベテランだけが知っている「いつものやり方」</li>
                <li>新人は毎回やり方を聞く必要がある</li>
                <li>人によって品質にバラつき</li>
              </ul>
            </div>
            <div class="ba-arrow">→</div>
            <div class="ba-item after">
              <div class="ba-label">Skill化</div>
              <h4>誰でも同じ品質</h4>
              <ul>
                <li>ルールがファイルに明文化されている</li>
                <li>Claude Codeがルールに従って自動実行</li>
                <li>チーム全員が同じ水準で成果物を出せる</li>
              </ul>
            </div>
          </div>

          <div class="visual-equation">
            <div class="eq-term">
              <div class="eq-label">ベテランのコツ</div>
              <div class="eq-value">暗黙知</div>
            </div>
            <div class="eq-operator">→</div>
            <div class="eq-term">
              <div class="eq-label">ファイル化</div>
              <div class="eq-value">Skill化</div>
            </div>
            <div class="eq-operator">→</div>
            <div class="eq-result">
              <div class="eq-label">全員が使える</div>
              <div class="eq-value">組織の品質底上げ</div>
            </div>
          </div>

          <h3>設計の3ステップ</h3>
          <div class="visual-steps">
            <div class="step-item">
              <div class="step-number">1</div>
              <div class="step-content">
                <h4>繰り返す業務を選ぶ</h4>
                <p>週に3回以上繰り返すタスクで、フォーマットや品質基準が決まっているものを選びます。</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">2</div>
              <div class="step-content">
                <h4>暗黙のルールを書き出す</h4>
                <p>「いつもこうしている」「こうあるべき」を箇条書きで整理します。最初は3〜5個で十分です。</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">3</div>
              <div class="step-content">
                <h4>使いながら育てる</h4>
                <p>Skillファイルを作ったら実際に使い、「これも必要だな」と思ったルールを追加していきます。</p>
              </div>
            </div>
          </div>

          <div class="try-box">
            <strong>✅ やってみよう</strong><br>
            自分の業務で週に3回以上繰り返すタスクを1つ選び、品質ルールを3つ書き出してみましょう。例：週報作成なら「見出しは3階層まで」「数値は前年比付き」「最後にNext Stepsを入れる」など。
          </div>

          <div class="tip-box">
            <strong>💡 TIP：最初から完璧を目指さない</strong><br>
            最初から完璧なSkillを作る必要はありません。3〜5ルールから始めて使いながら育てましょう。実際に使ってみて「ここも統一したい」と思った箇所を追加していくのが最も実用的です。
          </div>
        `
      },
      // --- S3-5: エージェント活用の展望 ---
      {
        title: 'エージェント活用の展望',
        type: 'lecture',
        content: `
          <h3>エージェントとは — AIが自律的に判断・実行する</h3>
          <p>エージェントとは、AIが<strong>複数のステップを自律的に判断・実行する機能</strong>です。単なるチャットの延長ではなく、計画→実行→確認を自動で行います。</p>

          <div class="visual-big-message">
            <div class="big-message-icon">🤖</div>
            <div class="big-message-text">AIは指示待ちから、自律的パートナーへ</div>
            <div class="big-message-sub">1問1答のチャットから始まり、協働型、委任型、そして自律型へ。この研修で3段階目まで到達しています。</div>
          </div>

          <h3>AI活用の成熟度モデル</h3>
          <div class="visual-steps">
            <div class="step-item">
              <div class="step-number">1</div>
              <div class="step-content">
                <h4>Lv.1 対話型</h4>
                <p>チャットで1問1答。質問→回答の繰り返し。<strong>第1回で習得済み</strong>です。</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">2</div>
              <div class="step-content">
                <h4>Lv.2 協働型</h4>
                <p>Design・Coworkで成果物を一緒に作る。AIと人が対話しながら進める。<strong>第2回で習得済み</strong>です。</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">3</div>
              <div class="step-content">
                <h4>Lv.3 委任型</h4>
                <p>Claude Codeで複数ステップを自律実行。指示→計画→実行→成果物をAIが一貫して担当。<strong>第3回で習得中</strong>です。</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">4</div>
              <div class="step-content">
                <h4>Lv.4 自律型</h4>
                <p>スケジュール実行、複数ツール連鎖、自動品質チェック。人が介在せずAIが定期タスクを遂行。<strong>次のステップ</strong>です。</p>
              </div>
            </div>
          </div>

          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">手動オペレーション</div>
              <h4>7ツールを手動で行き来</h4>
              <ul>
                <li>Slackを確認→Driveで検索→データ集計</li>
                <li>報告書を作成→メールで送信</li>
                <li>各ツールを手動で操作、計30分〜1時間</li>
              </ul>
            </div>
            <div class="ba-arrow">→</div>
            <div class="ba-item after">
              <div class="ba-label">エージェント活用</div>
              <h4>1指示で全自動</h4>
              <ul>
                <li>「Slack確認→Drive検索→報告書作成→メール送信」を1指示で実行</li>
                <li>AIが各ステップを判断して自律実行</li>
                <li>所要時間5分、人は最終確認のみ</li>
              </ul>
            </div>
          </div>

          <div class="info-box">
            <strong>ℹ️ Lv.4への第一歩</strong><br>
            Coworkのスケジュールタスク機能は、Lv.4自律型への第一歩です。毎週の定期レポートの自動生成など、定期タスクの自動化から始めてみましょう。
          </div>
        `
      },
      // --- S3-6: チーム展開の実践ポイント ---
      {
        title: 'チーム展開の実践ポイント',
        type: 'lecture',
        content: `
          <h3>学んだスキルをチームに広げる</h3>
          <p>研修で得たスキルは、自分だけで使うのではなく<strong>チーム全体に展開することで最大の効果</strong>を発揮します。しかし展開には段階があり、各段階に「つまずきポイント」があります。</p>

          <div class="visual-funnel">
            <div class="funnel-stage" style="width: 100%; background: var(--primary-bg); color: var(--primary);">
              <span class="funnel-num">Stage 1</span> 参加（研修に参加する）
            </div>
            <div class="funnel-drop">↓ 「何に使えばいいかわからない」</div>
            <div class="funnel-stage" style="width: 80%; background: var(--primary-bg); color: var(--primary);">
              <span class="funnel-num">Stage 2</span> 利用（業務で使い始める）
            </div>
            <div class="funnel-drop">↓ 「忙しくて後回し」</div>
            <div class="funnel-stage" style="width: 60%; background: var(--primary-bg); color: var(--primary);">
              <span class="funnel-num">Stage 3</span> 習慣化（毎日使う）
            </div>
            <div class="funnel-drop">↓ 「自分だけで十分」</div>
            <div class="funnel-stage" style="width: 44%; background: var(--primary); color: white;">
              <span class="funnel-num">Stage 4</span> 展開（チームに教える）
            </div>
          </div>

          <h3>展開の施策マトリクス</h3>
          <div class="visual-matrix">
            <div class="matrix-x-label">個人の施策 ―――――→ 組織の施策</div>
            <div class="matrix-body">
              <div class="matrix-y-label">導入初期 ―→ 定着期</div>
              <div class="matrix-quadrants">
                <div class="matrix-col-label">個人</div>
                <div class="matrix-col-label">組織</div>
                <div class="matrix-cell">
                  <div class="cell-title">毎日10分Claude</div>
                  <div class="cell-desc">まず自分が毎日使うことで効果を実感し、周囲に伝えられるようになる</div>
                </div>
                <div class="matrix-cell">
                  <div class="cell-title">テンプレートSkill共有</div>
                  <div class="cell-desc">チーム共通のSkillを用意し、誰でもすぐ使える環境を整える</div>
                </div>
                <div class="matrix-cell">
                  <div class="cell-title">業務プロセス組込</div>
                  <div class="cell-desc">週報やレポートなど定型業務にClaudeを組み込み、習慣化する</div>
                </div>
                <div class="matrix-cell active">
                  <div class="cell-title">AI活用報告会</div>
                  <div class="cell-desc">定期的に成功事例を共有し、組織全体のAI活用レベルを底上げする</div>
                </div>
              </div>
            </div>
          </div>

          <h3>すぐできる4つのアクション</h3>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">📢</div>
              <div class="grid-title">成功事例の共有</div>
              <div class="grid-desc">「〇〇がX分短縮された」という具体的な効果を定期的にチームにシェアする</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📁</div>
              <div class="grid-title">Skills共有</div>
              <div class="grid-desc">チーム共通のSkillフォルダをGoogle Driveで管理し、すぐ使える状態にする</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🤖</div>
              <div class="grid-title">AIチューター活用</div>
              <div class="grid-desc">困ったらいつでもAIに質問できる環境を整え、学習の障壁を下げる</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">✨</div>
              <div class="grid-title">小さな成功体験</div>
              <div class="grid-desc">まず1つの定型業務をClaude化して効果を実感する。それが周囲に広がる起点になる</div>
            </div>
          </div>

          <div class="tip-box">
            <strong>💡 TIP：「全員一斉」より「小さな成功体験」</strong><br>
            チーム展開は「全員一斉に導入」より「小さな成功事例を見せて自然に広げる」方が効果的です。まず自分が1つの業務で効果を出し、「見て、これだけ時短できた」と見せることが最も説得力があります。
          </div>
        `
      }
    ],
    // --- 第3回 クイズ ---
    quiz: [
      {
        question: 'Claude Code で成果物を生成する際、最も手戻りが少ない進め方は？',
        options: ['一度の指示で完成形を求める', 'まず構成案をテキストで確認し段階的に進める', 'デザインから先に決める', '過去の資料をそのまま渡す'],
        correct: 1,
        optionFeedback: [
          '一度で完成形は難しく手戻りが多い',
          '正解！テキスト確認→内容確定→ファイル生成の3ステップで手戻り最小',
          'デザインよりまず内容構成の確認が重要',
          '過去資料は参考にはなるが新規作成には構成確認が先'
        ],
        explanation: '構成案をテキストで確認→内容を詰める→ファイル生成の3ステップが最も効率的です。'
      },
      {
        question: 'Skill と CLAUDE.md の違いは？',
        options: ['どちらも同じもの', 'CLAUDE.mdは全体ルールでSkillはタスク別の品質基準', 'Skillの方が優先度が高い', 'CLAUDE.mdはCode専用でSkillは全ツール共通'],
        correct: 1,
        optionFeedback: [
          '役割が異なります',
          '正解！CLAUDE.mdはプロジェクト全体の設定・Skillは特定タスクの品質ルール',
          '優先度ではなく適用範囲が異なる',
          'どちらもClaude Codeの機能ですが用途が異なる'
        ],
        explanation: 'CLAUDE.mdはプロジェクト全体の設定（言語、出力形式）、Skillは特定タスクの品質基準です。'
      },
      {
        question: 'MCP（Model Context Protocol）の役割は？',
        options: ['AIの性能を上げる', 'Claudeを外部ツール（Slack・Drive等）と接続し一つの指示でツール横断の作業を実行できるようにする', 'セキュリティを強化する', 'ファイルを暗号化する'],
        correct: 1,
        optionFeedback: [
          'MCPはAI性能ではなく接続範囲を広げる',
          '正解！MCPはClaudeに「手」を与え、複数ツールをまたぐ作業を自動化します',
          'セキュリティ機能ではない',
          'ファイル暗号化機能ではない'
        ],
        explanation: 'MCPはClaudeを外部ツールと接続し、ツール横断の作業を1つの指示で自動実行できるようにするコネクタです。'
      },
      {
        question: 'カスタムSkill設計で最も実用的なアプローチは？',
        options: ['全業務を一度にSkill化する', '完璧なルールを先に作り込む', '繰り返す業務を1つ選び3〜5ルールから始めて育てる', '他社のSkillをそのまま使う'],
        correct: 2,
        optionFeedback: [
          '全業務を一度にやると挫折しやすい',
          '完璧を目指すより使いながら改善が効果的',
          '正解！小さく始めて育てるアプローチが最も定着する',
          '他社のSkillは参考になるが自社業務に合わせたカスタマイズが必要'
        ],
        explanation: '繰り返す業務を1つ選び、3〜5ルールから始めて使いながら育てるのが最も実用的です。'
      },
      {
        question: 'チーム展開で最も効果的なアプローチは？',
        options: ['全員に一斉導入を義務付ける', '完璧なマニュアルを先に作る', '小さな成功事例を見せて自然に広げる', '外部講師を招いて研修する'],
        correct: 2,
        optionFeedback: [
          '義務付けは抵抗を生みやすい',
          'マニュアルより実体験の方が説得力がある',
          '正解！「〇〇がX分短縮された」という具体事例が最も効果的に広がる',
          '外部研修も有効だが日常的な成功事例の共有が定着の鍵'
        ],
        explanation: '小さな成功事例を見せて自然に広げるアプローチが最も効果的です。具体的な時短効果が周囲を動かします。'
      }
    ],
    selfStudyResources: {
      links: [
        { title: 'Claude Code ベストプラクティス', url: 'https://docs.anthropic.com/en/docs/claude-code/best-practices', desc: '効果的なClaude Codeの使い方', category: '学習' },
        { title: 'Claude Skills ガイド', url: 'https://docs.anthropic.com/en/docs/claude-code/skills', desc: 'Skills の作成方法', category: '学習' },
        { title: 'MCP公式', url: 'https://modelcontextprotocol.io/', desc: 'MCP の仕様・対応サービス一覧', category: '公式' },
        { title: 'MCP サーバー一覧', url: 'https://github.com/modelcontextprotocol/servers', desc: 'Slack・Drive・Notion 等の対応一覧', category: 'ツール' },
        { title: 'Anthropic ブログ', url: 'https://www.anthropic.com/blog', desc: '最新アップデート・事例', category: '学習' }
      ],
      faq: [
        { q: 'Claude Code と Cowork はどう使い分ける？', a: 'Coworkはブラウザ上で対話しながら成果物を作る協働ツール。Claude Codeはデスクトップで複数ステップを自律実行し、ファイルを直接生成するツールです。まずCoworkで慣れ、より高度な制御が必要になったらClaude Codeへステップアップするのがおすすめです。' },
        { q: 'CLAUDE.md はどう設定する？', a: 'プロジェクトフォルダ直下にCLAUDE.mdファイルを作成し、言語（日本語）、出力形式、共通ルールなどを記述します。Claude Codeが自動で読み込みます。' },
        { q: 'MCPの設定は難しい？', a: 'JSON設定ファイルに接続先を追加するだけで、プログラミングは不要です。SlackやGoogle Driveなど主要サービスは設定テンプレートが用意されています。' },
        { q: 'Skillをチームで共有するには？', a: '.claude/skills/ フォルダをGoogle DriveやGitリポジトリで共有すれば、チーム全員が同じSkillを使えます。共有フォルダのパスをCLAUDE.mdに記載しておくと便利です。' },
        { q: '研修後の継続学習はどうすれば？', a: '①毎日10分でもClaudeを業務で使う ②AIチューターに疑問点を質問する ③自習コンテンツで復習・リンク集で最新情報をキャッチアップ ④成功事例をチームに共有する、の4ステップが推奨です。' }
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
