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
    description: 'Claudeの基本を理解し、プロンプト・4D Framework・セットアップを完了。さらにProject・Artifact・Skills・MCP・Office連携で業務の中核ツールとして使いこなす',
    target: 'マネージャー以上（ChatGPT/Gemini経験者）',
    duration: '自分のペースで',
    prereq: 'Claudeアカウント（事前準備済み）',
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>`,
    objectives: [
      'Claudeが何者か、ChatGPT/Geminiと何が違うかを説明できる',
      'プロンプト3要素（舞台設定・タスク・ルール）で的確に指示が出せる',
      'Chat / Cowork / Code の3モードを場面に応じて選べる',
      '業務PC・モバイルでClaudeを使い始められる状態になっている',
      'Project で案件ごとに「自分用 Claude」を作れる',
      'Artifact で成果物を独立した形で生成・共有できる',
      'Skills でクライアント標準・自分の作法を Claude に覚えさせられる',
      'MCP で社内 Slack / Notion を限定範囲で繋ぎ、二重担保で運用できる',
      'Office アドイン（Excel / PowerPoint / Word）を業務で使い倒せる'
    ],
    coverGroups: [
      { label: '基礎', icon: '💡', sections: [0, 1, 2, 3, 4] },
      { label: 'ワークスペースを作る', icon: '🏗️', sections: [5, 6] },
      { label: '品質を安定させる', icon: '🎯', sections: [7, 8, 9] },
      { label: '活用の幅を広げる', icon: '🚀', sections: [10, 11, 12] }
    ],
    sections: [
      
      // --- A-1: Claudeとは何か ---
      {
        title: '1-1. Claudeとは何か',
        type: 'lecture',
        content: `
          <div class="visual-highlight-card opening">
            <p>みなさんは Claude に興味を持っている。<strong>何がすごいのか、どう使うと自分のアウトプットが変わるのか</strong>を知りたいと思っている。</p>
            <p>たとえばパワーポイントでの提案資料。構想段階からクオリティが上がります。「どんなストーリーで行くか」を Claude と壁打ちし、構成が固まったら素材の整理も下書きも任せられる。最終的に自分の言葉で磨く部分だけに集中できます。</p>
            <p>そのためには、<strong>アカウントをもらってから何をどう設定し、どの機能をどう使い、どこでつまずきやすいか</strong>を知る必要があります。本研修はそこを丁寧にひも解きます。</p>
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
          <p>Claude は <strong>Anthropic 社</strong>の生成AIです。ChatGPT（OpenAI）・Gemini（Google）と並ぶ存在で、基本はチャット形式ですが、設計思想に明確な違いがあります。</p>

          <div class="visual-big-message">
            <div class="big-message-icon">🤝</div>
            <div class="big-message-text">Constitutional AI — Helpful・Harmless・Honest</div>
            <div class="big-message-sub">「役に立つ・害がない・誠実である」の3原則。知識として頭の隅に置いてください。</div>
          </div>

          <h3>業務で効く3つの違い</h3>

          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">📄</div>
              <div class="grid-title">1. 長文の安定性</div>
              <div class="grid-desc">最大1Mトークン（文庫本500頁超）。議事録30本+レポート10本を一括投入して論点抽出が現実的にできます。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🎯</div>
              <div class="grid-title">2. 出力の操縦性</div>
              <div class="grid-desc">トーン・構成・長さの指示が素直に効く。「クライアント向け」「社内レビュー用」をトーン指示だけで切替可能。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🧠</div>
              <div class="grid-title">3. 思考のパートナー</div>
              <div class="grid-desc">対話を重ねて深める設計。壁打ち・論点構造化・クライアント反応シミュレーションで真価を発揮。</div>
            </div>
          </div>

          <h3>アクセス手段</h3>
          <p>同じ知能を複数のインターフェースから使えます。会話履歴・Project・プリファレンスはデバイス間で同期します。</p>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">🌐</div>
              <div class="grid-title">claude.ai（Web）</div>
              <div class="grid-desc">基本のチャット。ブラウザさえあればどこでも。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🖥️</div>
              <div class="grid-title">デスクトップアプリ</div>
              <div class="grid-desc">Chat / Cowork / Code の3モード切替（Cowork・Code はデスクトップ必須）</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">Office アドイン</div>
              <div class="grid-desc">Excel・PowerPoint・Word のサイドバーから直接利用</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">💻</div>
              <div class="grid-title">Claude Code</div>
              <div class="grid-desc">ターミナル / VS Code / JetBrains。品質制御が最も強力</div>
            </div>
          </div>

          <h3>ハンズオン</h3>
          <div class="try-box">
            <strong>演習 1：claude.ai で自己紹介させる</strong>
            <p>claude.ai で新規チャットを開き、以下を打ってください。</p>
            <code>あなたは Claude ですよね。ChatGPT や Gemini と比べて、特に得意な領域は何ですか?コンサル業務で使う前提で教えてください。</code>
          </div>

          <div class="try-box">
            <strong>演習 2：ChatGPT/Gemini と比較する</strong>
            <p>同じ質問を他のAIにも投げて、回答の構成・具体性・トーンの違いを体感してください。</p>
          </div>

          <div class="try-box">
            <strong>演習 3：長文を試す</strong>
            <p>議事録や長文PDFをアップロードして以下を打ってください。</p>
            <code>この議事録の論点を3つに整理して、それぞれの根拠となる発言を引用してください。</code>
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
          <div class="warning-box">
            <strong>落とし穴：有料プランが前提</strong>
            <p>Cowork / Code / Skills / Office アドインは Pro/Max/Team/Enterprise が必須。本研修は有料プラン前提です。</p>
          </div>
        `
      },

      // --- A-2: プロンプトの基本 ---
      {
        title: '1-2. プロンプトの基本 — 3要素',
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
              <div class="grid-title">1. Setting the stage</div>
              <div class="grid-desc"><strong>舞台設定</strong> — 自分が誰で、何の文脈で、何を達成したいのかを伝える</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📋</div>
              <div class="grid-title">2. Defining the task</div>
              <div class="grid-desc"><strong>タスク定義</strong> — 何をしてほしいか、具体的な動詞で明示する</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📐</div>
              <div class="grid-title">3. Specifying rules</div>
              <div class="grid-desc"><strong>ルール指定</strong> — 出力の形式・トーン・制約を伝える</div>
            </div>
          </div>

          <h3>良い例 vs 悪い例</h3>
          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">悪い例</div>
              <p><strong>舞台設定なし：</strong>「提案書を作りたい」</p>
              <p><strong>タスクが曖昧：</strong>「競合を見て」</p>
              <p><strong>ルールなし：</strong>「いい感じで」</p>
            </div>
            <div class="ba-arrow">→</div>
            <div class="ba-item after">
              <div class="ba-label">良い例</div>
              <p><strong>舞台設定：</strong>「私は800のシニアコンサルで、製造業向け中計策定の提案を作っています」</p>
              <p><strong>タスク定義：</strong>「添付の3社競合事業ポートフォリオから、共通する戦略パターンと各社固有の強みを抽出してください」</p>
              <p><strong>ルール指定：</strong>「表形式、500字以内、各項目に出典併記、日本語、専門用語の説明は不要です」</p>
            </div>
          </div>

          <div class="info-box">
            <strong>「同僚に頼むつもり」で書く</strong>
            <p>Anthropic は「Claude には同僚に頼むように話しかけるのが一番」と公式に言っています。「これお願いできる?」「コンテキストはこんな感じで」のような自然な語り口で十分です。</p>
          </div>

          <h3>反復前提で考える</h3>
          <p>1回目は<strong>たたき台</strong>。反復で精度を上げるのが現実的です。</p>
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

          <h3>ファイルアップロード</h3>
          <p>添付ファイルはその会話の中だけで参照されます（永続化は Project で、B-1 で扱います）。</p>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">📄</div>
              <div class="grid-title">テキスト系</div>
              <div class="grid-desc">PDF、DOCX、TXT、CSV</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🖼️</div>
              <div class="grid-title">画像系</div>
              <div class="grid-desc">PNG、JPEG（画像内のグラフ・表・図も解釈）</div>
            </div>
          </div>

          <h3>個人プリファレンス</h3>
          <p><strong>Settings > General > Personal Preferences</strong> に自分の前提を設定。全会話で自動的に考慮されます。</p>
          <div class="info-box">
            <strong>設定例</strong>
            <p>「私は800のコンサルタントです。回答は基本的に日本語、簡潔に、結論先行でお願いします。専門用語の説明は不要です。」</p>
          </div>

          <h3>ハンズオン</h3>
          <div class="try-box">
            <strong>演習 1：悪い例を良い例に書き直す</strong>
            <p>以下の悪いプロンプトを、3要素を満たす形に書き直してから Claude に投げてください。</p>
            <code>悪い例：「競合分析して」</code>
            <p>ヒント：あなたは何業界の何の案件で、どの競合の何を比較したいのか、出力はどう欲しいのか。</p>
          </div>

          <div class="try-box">
            <strong>演習 2：議事録から論点抽出</strong>
            <p>手元に議事録 PDF があれば Claude にアップロードして、3要素を意識した指示で論点を抽出してみてください。出てきた論点・引用が実体と合っているか確認しましょう。</p>
          </div>

          <div class="try-box">
            <strong>演習 3：反復で精度を上げる</strong>
            <p>演習2の結果に対して、順番に追加指示を出してみてください。</p>
            <ul>
              <li>「2点目の論点をもう少し深掘りしてください」</li>
              <li>「全体を800字に圧縮して」</li>
              <li>「社内チーム向けの内部メモのトーンに変えてください」</li>
            </ul>
            <p>それぞれで出力がどう変わるかを見てください。これが反復の感覚です。</p>
          </div>

          <div class="try-box">
            <strong>演習 4：個人プリファレンスを設定</strong>
            <p>Settings > General > Personal Preferences に自分用の前提を入れてみてください。設定後、新規チャットで「自己紹介を書いてください」と打つと反映が確認できます。</p>
          </div>

          <h3>TIPS・落とし穴</h3>
          <div class="tip-box">
            <strong>TIP：具体性 = 精度</strong>
            <p>「いい感じに」→「800字以内・表形式・結論先行」。具体化するほど初稿の精度が上がります。</p>
          </div>
          <div class="tip-box">
            <strong>TIP：例を見せるのが最強</strong>
            <p>形式を文章で説明するより、「こういう感じで」と例を1つ貼る方が圧倒的に伝わります。</p>
          </div>
          <div class="warning-box">
            <strong>落とし穴：長く書きすぎる</strong>
            <p>「ちょっと長めの依頼メール」くらいで十分。長すぎると指示の取りこぼしが起きます。</p>
          </div>
          <div class="warning-box">
            <strong>落とし穴：プリファレンスに長文</strong>
            <p>全会話で読まれるため500字以内が目安。案件固有の文脈は Project で（B-1）。</p>
          </div>
        `
      },

      // --- A-3: 4D Framework ---
      {
        title: '1-3. 良い結果を出すための4D Framework',
        type: 'lecture',
        content: `
          <div class="visual-equation">
            <div class="eq-term">
              <div class="eq-label">人の判断</div>
              <div class="eq-value">Delegation + Discernment + Diligence</div>
            </div>
            <div class="eq-operator">×</div>
            <div class="eq-term">
              <div class="eq-label">AIへの伝え方</div>
              <div class="eq-value">Description</div>
            </div>
            <div class="eq-operator">=</div>
            <div class="eq-result">
              <div class="eq-label">出力品質</div>
            </div>
          </div>

          <h3>4D Framework とは</h3>
          <p>Anthropic が推奨している、AIと働くときの思考フレームです。Ringling College の Rick Dakan 教授と University College Cork の Joseph Feller 教授の共同研究に基づく4つの能力です。</p>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">📤</div>
              <div class="grid-title">Delegation（委任）</div>
              <div class="grid-desc">何をAIに任せ、何を自分でやるか。例：議事録整形は Claude、論点の優先順位付けは自分</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">✏️</div>
              <div class="grid-title">Description（指示）</div>
              <div class="grid-desc">どう伝えれば望むものが出てくるか。プロンプト3要素（A-2）、例を見せる</div>
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

          <div class="info-box">
            <strong>判断のヒント</strong>
            <p>「ミスったら誰がどう困るか?」「自分が責任取れるか?」で任せどころが見えます。</p>
          </div>

          <h3>Discernment — 出力を評価する</h3>
          <p><strong>流暢さ ≠ 正しさ</strong> — これが Discernment の出発点です。</p>

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
                <strong>もっともらしいが間違っている（Hallucination）</strong>
                <p>原因：LLMの幻覚 → 対処：出典明示・Web検索ON・後で検証</p>
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

          <h3>Hallucination（幻覚）の見分け方</h3>
          <p>捏造しがちな箇所：<strong>固有名詞</strong>（存在しない論文・URL）、<strong>数字</strong>（統計値・市場規模）、<strong>引用文</strong>（「らしく聞こえる」発言）。</p>
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
              <div class="grid-desc">Claude に書かせた内容を提案書に使うとき、元ソースを当たり直す</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">💡</div>
              <div class="grid-title">意思決定の透明性</div>
              <div class="grid-desc">「Claude にこう言われたので」ではなく、自分が判断した理由を説明できるように</div>
            </div>
          </div>

          <h3>Evals — 精度確認テスト</h3>
          <p>業務で使えるかは試さないと分かりません。簡易 Evals で測ります。</p>
          <div class="visual-steps">
            <div class="step-item">
              <div class="step-number">1</div>
              <div class="step-content">
                <strong>過去事例を集める</strong>
                <p>自分が書いた議事録・分析メモ・提案ドラフトなどを5〜10件</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">2</div>
              <div class="step-content">
                <strong>同じ条件のプロンプトを作る</strong>
                <p>過去事例と同じインプットから同じ出力を求めるプロンプト</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">3</div>
              <div class="step-content">
                <strong>Claude に出させて比較</strong>
                <p>キー情報を捕まえているか? トーンは適切か? 抜けや誤解はないか?</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">4</div>
              <div class="step-content">
                <strong>改善する</strong>
                <p>プロンプトを足す、Project に例を入れる、Skill 化を検討する（第1回後半-3）</p>
              </div>
            </div>
          </div>

          <h3>ハンズオン</h3>
          <div class="try-box">
            <strong>演習 1：自分の業務を4Dで分解する</strong>
            <p>直近1週間の業務を5つ思い出して、Delegation 度合い（任せられる割合）、Description のコツ、Discernment の確認ポイントを整理してください。</p>
          </div>

          <div class="try-box">
            <strong>演習 2：Hallucination を体験する</strong>
            <p>以下を Claude に投げて、返ってきた数字と出典を別途検索して照合してください。次に Web 検索 ON で同じ質問を投げて結果の違いを見ましょう。</p>
            <code>2024年の日本のSaaS市場規模を、出典付きで教えてください</code>
          </div>

          <div class="try-box">
            <strong>演習 3：簡易 Evals を作る</strong>
            <p>定型業務を1つ選び、過去の自分の成果物を3つピックアップ。同じインプットから Claude に書かせて比較し、「行けそう」「足りない」を1ページにまとめてください。</p>
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
          <div class="warning-box">
            <strong>落とし穴：NDA を超える</strong>
            <p>クライアント機密をアップロードする前に、AI利用ポリシー・NDA の範囲を確認。</p>
          </div>
        `
      },

      // --- A-4: Chat / Cowork / Code の3モード比較 ---
      {
        title: '1-4. Chat / Cowork / Code の3モード比較',
        type: 'lecture',
        content: `
          <h3>Claude 製品マップ — 全体像</h3>
          <p>Claude は同じ知能を<strong>7つのインターフェース</strong>から使えます。本研修ではこの全体像を段階的にカバーします。</p>

          <div class="visual-product-map">
            <div class="product-map-row full">
              <div class="product-group browser">
                <div class="product-group-header"><span class="group-icon">🌐</span> ブラウザ（claude.ai）</div>
                <div class="product-group-body">
                  <div class="visual-grid-item"><div class="grid-icon">💬</div><div class="grid-title">Chat</div><div class="grid-desc">対話・壁打ち<br><small>第1回後半</small></div></div>
                  <div class="visual-grid-item"><div class="grid-icon">📦</div><div class="grid-title">Project</div><div class="grid-desc">案件ワークスペース<br><small>B-1</small></div></div>
                  <div class="visual-grid-item"><div class="grid-icon">🎨</div><div class="grid-title">Artifact</div><div class="grid-desc">成果物生成<br><small>B-2</small></div></div>
                  <div class="visual-grid-item"><div class="grid-icon">🔍</div><div class="grid-title">Research</div><div class="grid-desc">多段リサーチ<br><small>B-6</small></div></div>
                </div>
              </div>
            </div>
            <div class="product-map-row split">
              <div class="product-group desktop">
                <div class="product-group-header"><span class="group-icon">🖥️</span> デスクトップアプリ</div>
                <div class="product-group-body">
                  <div class="visual-grid-item"><div class="grid-icon">🤖</div><div class="grid-title">Cowork</div><div class="grid-desc">業務委任<br><small>第2回前半</small></div></div>
                  <div class="visual-grid-item"><div class="grid-icon">💻</div><div class="grid-title">Claude Code</div><div class="grid-desc">品質制御<br><small>第2回後半</small></div></div>
                </div>
              </div>
              <div class="product-group office">
                <div class="product-group-header"><span class="group-icon">📊</span> Office アドイン</div>
                <div class="product-group-body">
                  <div class="visual-grid-item"><div class="grid-icon">📋</div><div class="grid-title">Excel / PPT / Word</div><div class="grid-desc">サイドバー利用<br><small>B-7</small></div></div>
                </div>
              </div>
            </div>
          </div>

          <h3>3モードの位置づけ</h3>
          <p>デスクトップアプリ上部のモードセレクタで <strong>Chat / Cowork / Code</strong> を切り替えます。同じ知能ですが、できることが大きく違います。</p>

          <div class="visual-comparison">
            <div class="comp-item">
              <h4>💬 Chat — 対話モード</h4>
              <p><strong>向いている仕事：</strong>素早いやり取り、アイデア出し、下書きの反復、対話で考える</p>
              <p><strong>基本動作：</strong>質問 → 即答の往復</p>
              <p><strong>動作環境：</strong>Web / デスクトップ / モバイル</p>
              <p><strong>プラン：</strong>Free 含む全プラン</p>
              <p><strong>コンサル例：</strong>提案ストーリーの壁打ち、メール下書き、短いリサーチ</p>
            </div>
            <div class="comp-item">
              <h4>🤖 Cowork — 委任モード</h4>
              <p><strong>向いている仕事：</strong>多段作業、複数ソース統合、ローカルファイル操作、整形済み成果物</p>
              <p><strong>基本動作：</strong>ゴール提示 → 計画 → 実行 → 完成品</p>
              <p><strong>動作環境：</strong>デスクトップアプリ（Cowork タブ）</p>
              <p><strong>プラン：</strong>Pro / Max / Team / Enterprise</p>
              <p><strong>コンサル例：</strong>議事録30本から提案ドラフト合成、IR資料からベンチマーク表をXLSXで作成</p>
            </div>
          </div>

          <div class="visual-big-message">
            <div class="big-message-icon">💻</div>
            <div class="big-message-text">Code — 制御モード</div>
            <div class="big-message-sub">再現性・自動化レベルの品質制御。CLAUDE.md / Skills / MCP / Hooks / Subagents で制御手段が圧倒的に多い（第2回後半）。</div>
          </div>

          <h3>判断軸 — どのモード?</h3>
          <div class="visual-steps">
            <div class="step-item">
              <div class="step-number">1</div>
              <div class="step-content">
                <strong>質問・対話で済む?</strong>
                <p>Yes → <strong>Chat</strong></p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">2</div>
              <div class="step-content">
                <strong>ファイルを直接触らせて完成品が欲しい?</strong>
                <p>Yes → 次のステップへ / No → <strong>Chat</strong>（対話で深める）</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">3</div>
              <div class="step-content">
                <strong>ターミナル使う? コードを書く? 高度な品質制御?</strong>
                <p>Yes → <strong>Code</strong> / No → <strong>Cowork</strong></p>
              </div>
            </div>
          </div>

          <div class="info-box">
            <strong>迷ったら Chat</strong>
            <p>Chat で困ったら Cowork、Cowork で困ったら Code と段階的に上げる。これが最も自然な動線です。</p>
          </div>

          <h3>Cowork と Code の関係</h3>
          <p>両方とも Claude Code 由来のエージェント基盤です。</p>
          <div class="visual-comparison">
            <div class="comp-item">
              <h4>Cowork</h4>
              <ul>
                <li>GUI ベース、デスクトップアプリ内</li>
                <li>指定したフォルダのみ（隔離）</li>
                <li>想定ユーザー：ナレッジワーカー全般</li>
              </ul>
            </div>
            <div class="comp-item">
              <h4>Code</h4>
              <ul>
                <li>ターミナル中心（IDE プラグインも）</li>
                <li>プロジェクト全体に直接アクセス</li>
                <li>CLAUDE.md / MCP / Hooks / Subagents で品質制御</li>
                <li>想定ユーザー：開発者、高度な品質制御が必要な人</li>
              </ul>
            </div>
          </div>

          <h3>ハンズオン</h3>
          <div class="try-box">
            <strong>演習 1：業務をモード別に振り分ける</strong>
            <p>直近1週間の業務タスク5〜10個を Chat / Cowork / Code に振り分けてください。迷うものは条件分岐で。</p>
          </div>

          <div class="try-box">
            <strong>演習 2：迷うケースを言語化</strong>
            <p>迷うタスク2つについて理由を書き出す。「最初は Chat、清書は Cowork」のようなハイブリッドに気づくのが目的です。</p>
          </div>

          <h3>TIPS・落とし穴</h3>
          <div class="tip-box">
            <strong>TIP：Cowork は Chat より枠を消費する</strong>
            <p>完成品が要らない作業を Cowork でやると枠の無駄。1〜2週間使ったら見直しを。</p>
          </div>
          <div class="warning-box">
            <strong>落とし穴：Code = プログラマー専用ではない</strong>
            <p>コンサル業務での Code 活用は強力です（第2回後半）。「自分には関係ない」は早計。</p>
          </div>
          <div class="warning-box">
            <strong>落とし穴：全部使えば偉いわけではない</strong>
            <p>業務の8割は Chat で十分。Cowork は1〜2割、Code はさらに絞った領域。使い分けが目的です。</p>
          </div>
        `
      },

      // --- A-5: セットアップ ---
      {
        title: '1-5. セットアップ',
        type: 'hands-on',
        content: `
          <div class="visual-big-message">
            <div class="big-message-icon">🚀</div>
            <div class="big-message-text">ゴール：全ツールが動く状態を作る</div>
            <div class="big-message-sub">claude.ai + デスクトップアプリ + Office アドイン。ここが完了すれば 第1回後半 以降に進めます。</div>
          </div>

          <h3>セットアップ全体像</h3>
          <div class="visual-steps">
            <div class="step-item">
              <div class="step-number">1</div>
              <div class="step-content">
                <strong>アカウント・プラン確認</strong>
                <p>claude.ai にログインし、Settings でプラン情報を確認。Pro / Max / Team / Enterprise のいずれかが必要。（2分）</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">2</div>
              <div class="step-content">
                <strong>claude.ai ログイン確認</strong>
                <p>新規チャットで応答が返ってくることを確認。（1分）</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">3</div>
              <div class="step-content">
                <strong>デスクトップアプリ導入</strong>
                <p>claude.com/download からインストール。Chat / Cowork / Code のモードセレクタが表示されるか確認。（3分）</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">4</div>
              <div class="step-content">
                <strong>Microsoft 365 アドイン導入</strong>
                <p>Excel / PowerPoint / Word それぞれの Add-ins から「Claude by Anthropic」を検索してインストール。（5分）</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">5</div>
              <div class="step-content">
                <strong>Claude Code インストール（任意）</strong>
                <p>第2回後半 で詳述するので、まず触りたい人向け。ターミナルまたは VS Code 拡張から導入。（3〜5分）</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">6</div>
              <div class="step-content">
                <strong>モバイルアプリ（現状は未対応）</strong>
                <p>社内で利用申請中。利用開始時期は別途案内。今はスキップ。</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">7</div>
              <div class="step-content">
                <strong>個人プリファレンス設定</strong>
                <p>Settings > General > Personal Preferences に、自分用の前提を記入。（2分）</p>
              </div>
            </div>
          </div>

          <h3>マクロミル環境での運用ポリシー</h3>
          <div class="warning-box">
            <strong>重要：本研修での運用方針</strong>
            <p>Anthropic 公式ドキュメントには Connector（Drive / SharePoint 等の GUI 接続）の手順が多く出てきますが、<strong>マクロミル環境では Connector は使いません</strong>。社内の議論・ナレッジは MCP で社内 Slack / Notion に限定範囲で繋ぐ方式を取ります（B-4）。それ以外の作業はローカルフォルダ + Office アドイン + Chrome 拡張で完結させます。</p>
          </div>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">✅</div>
              <div class="grid-title">利用可</div>
              <div class="grid-desc">Cowork ローカルフォルダ作業 / Office アドイン / Chrome 拡張 / Slack・Notion（MCP・限定範囲）</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">⏸️</div>
              <div class="grid-title">利用申請中 / 不使用</div>
              <div class="grid-desc">モバイルアプリ（申請中）/ Connector 機能（マクロミル環境では不使用）</div>
            </div>
          </div>

          <h3>ハンズオン — セットアップを完了させる</h3>
          <div class="try-box">
            <strong>Step 1：アカウント・プラン確認</strong>
            <p>claude.ai にアクセスしてログイン。右上アイコン > Settings でプラン情報を確認。Pro / Max / Team / Enterprise のいずれかになっていれば OK。</p>
          </div>

          <div class="try-box">
            <strong>Step 2：claude.ai ログイン確認</strong>
            <p>新規チャットで以下を打って応答を確認。</p>
            <code>セットアップ確認です。あなたはどのプランで動いていますか?</code>
          </div>

          <div class="try-box">
            <strong>Step 3：デスクトップアプリ導入</strong>
            <p>claude.com/download からインストーラーをダウンロードして導入。起動後ログインし、上部のモードセレクタに Chat / Cowork / Code が表示されているか確認。Cowork タブで「Work in a folder」ボタンが出たら準備完了。</p>
          </div>

          <div class="try-box">
            <strong>Step 4：Microsoft 365 アドイン導入</strong>
            <p>Excel / PowerPoint / Word で、リボンの Home > Add-ins > 「Claude by Anthropic」を検索してインストール。各アプリでサイドバーが開き、応答が返ることを確認。</p>
          </div>

          <div class="try-box">
            <strong>Step 5：Claude Code（任意）</strong>
            <p>ターミナルでインストールコマンドを実行後、<code>claude --version</code> でバージョン番号が表示されれば成功。VS Code 拡張で使いたい方は Extensions から「Claude Code」（Anthropic 公式）を Install。</p>
          </div>

          <div class="try-box">
            <strong>Step 7：個人プリファレンス設定</strong>
            <p>Settings > General > Personal Preferences に、自分用の前提を記入して Save。新規チャットで反映を確認。</p>
          </div>

          <h3>動作確認チェックリスト</h3>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">☑️</div>
              <div class="grid-title">Web</div>
              <div class="grid-desc">claude.ai でチャットが動く</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">☑️</div>
              <div class="grid-title">デスクトップ</div>
              <div class="grid-desc">Chat / Cowork / Code が見える、Cowork 準備完了</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">☑️</div>
              <div class="grid-title">Office</div>
              <div class="grid-desc">Excel / PowerPoint / Word に Claude ボタンが出ている</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">☑️</div>
              <div class="grid-title">プリファレンス</div>
              <div class="grid-desc">個人プリファレンスを設定済み</div>
            </div>
          </div>

          <h3>TIPS・落とし穴</h3>
          <div class="tip-box">
            <strong>TIP：Cowork 初回は30秒〜1分待つ</strong>
            <p>「preparing your workspace」は正常。閉じずに待ってください。</p>
          </div>
          <div class="warning-box">
            <strong>落とし穴：Connector は使わない</strong>
            <p>マクロミル環境では Connector 不使用。公式チュートリアルに出てきても飛ばして MCP（B-4）へ。</p>
          </div>
          <div class="warning-box">
            <strong>落とし穴：Cowork の利用枠</strong>
            <p>Chat より枠を多く消費。Settings > Usage で残量を定期確認する習慣を。</p>
          </div>
        `
      }
    ,
      
      // --- B-1: Projects ---
      {
        title: '1-6. Projects',
        type: 'hands-on',
        content: `
          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">Before：毎回の会話</div>
              <p>「私は800のコンサルで…」を毎回貼る</p>
              <p>参照資料を毎回アップロード</p>
              <p>過去の議論は記憶されない</p>
            </div>
            <div class="ba-arrow">→</div>
            <div class="ba-item after">
              <div class="ba-label">After：Project あり</div>
              <p>背景・ルールは設定済み → いきなり本題</p>
              <p>参照資料は常時参照可能</p>
              <p>Claude が文脈を記憶して育つ</p>
            </div>
          </div>

          <div class="visual-stats">
            <div class="visual-stat"><div class="stat-value">5分</div><div class="stat-label">初回セットアップ</div></div>
            <div class="visual-stat"><div class="stat-value">毎回5分</div><div class="stat-label">背景説明の節約</div></div>
            <div class="visual-stat"><div class="stat-value">∞</div><div class="stat-label">蓄積されるナレッジ</div></div>
          </div>

          <h3>Project とは</h3>
          <p><strong>案件・テーマに紐づく独立したワークスペース</strong>。毎回の背景説明が不要になります。</p>

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
              <div class="grid-desc">Project 内のチャットがすべて保存される</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🧠</div>
              <div class="grid-title">メモリ</div>
              <div class="grid-desc">Claude が会話で学んだことを記憶</div>
            </div>
          </div>

          <h3>個人プリファレンス vs Project</h3>
          <div class="visual-comparison">
            <div class="comp-item">
              <h4>個人プリファレンス</h4>
              <ul>
                <li>全会話（アカウント全体）に適用</li>
                <li>役割、好み、トーン、共通ルール</li>
                <li>例：「私はコンサル」「結論先行」</li>
              </ul>
            </div>
            <div class="comp-item">
              <h4>Project</h4>
              <ul>
                <li>この Project の中の会話だけに適用</li>
                <li>案件背景、参照資料、案件固有ルール</li>
                <li>例：「クライアントはA電機」「論点は事業ポートフォリオ」</li>
              </ul>
            </div>
          </div>

          <h3>RAG モードの自動切り替え</h3>
          <div class="info-box">
            <strong>RAG が自動発動</strong>
            <p>ナレッジが大きくなると質問に関連する部分だけ検索。容量が最大10倍に。<strong>ファイル名でヒントを与える</strong>と精度向上。</p>
          </div>

          <h3>チーム共有（Team / Enterprise）</h3>
          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">👁️</div>
              <div class="grid-title">Can view</div>
              <div class="grid-desc">閲覧のみ、ただし会話はできる</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">✏️</div>
              <div class="grid-title">Can edit</div>
              <div class="grid-desc">指示・ナレッジを編集可、メンバー追加可</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">👑</div>
              <div class="grid-title">Owner</div>
              <div class="grid-desc">すべてを管理、削除権限あり</div>
            </div>
          </div>

          <div class="try-box">
            <strong>演習：案件用 Project を作成する</strong>
            <ol>
              <li>claude.ai の左サイドバー「Projects」をクリック</li>
              <li>「+ New Project」で名前を付ける（例：「A電機_中期経営計画支援」）</li>
              <li>Instructions パネルに案件の概要・クライアント情報・トーン・タブーを記入</li>
              <li>ナレッジベースに参照資料を3つほどアップロード</li>
              <li>Project 内で新規チャットを開き、「この案件の論点を3つ整理して」と試す</li>
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
          <div class="warning-box">
            <strong>落とし穴：カスタム指示が長すぎる</strong>
            <p>全会話で読まれるため1000字以内が目安。実作業のトークンを圧迫します。</p>
          </div>
          <div class="warning-box">
            <strong>落とし穴：案件終了後の整理忘れ</strong>
            <p>機密を含む Project は案件終了時にアーカイブ or 削除のルーチンを。</p>
          </div>
        `
      },

      // --- B-2: Artifacts ---
      {
        title: '1-7. Artifacts',
        type: 'hands-on',
        content: `
          <h3>Artifact とは</h3>
          <p>Artifact は<strong>チャット応答の中ではなく独立したパネル</strong>として開かれる成果物です。編集・バージョン管理・ダウンロード・共有が可能です。</p>

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
              <div class="ba-label">Artifact</div>
              <h4>独立パネルで成果物管理</h4>
              <ul>
                <li>右側にパネルが開く</li>
                <li>編集・バージョン管理</li>
                <li>ダウンロード・共有・Remix</li>
              </ul>
            </div>
          </div>

          <h3>Artifact の主な種類</h3>
          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">📄</div>
              <div class="grid-title">ドキュメント</div>
              <div class="grid-desc">Markdown / TXT / DOCX / PDF / PPTX / XLSX</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">💻</div>
              <div class="grid-title">コードスニペット</div>
              <div class="grid-desc">Python / JavaScript / TypeScript 等</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🌐</div>
              <div class="grid-title">HTML ページ</div>
              <div class="grid-desc">LP、フォーム、プロトタイプ</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🎨</div>
              <div class="grid-title">SVG 画像</div>
              <div class="grid-desc">ロゴ、アイコン、図解</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">Mermaid 図</div>
              <div class="grid-desc">フロー、ガントチャート、ER図</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">⚛️</div>
              <div class="grid-title">React コンポーネント</div>
              <div class="grid-desc">インタラクティブ UI、ダッシュボード</div>
            </div>
          </div>

          <h3>共有・公開</h3>
          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">📋</div>
              <div class="grid-title">コピー / ダウンロード</div>
              <div class="grid-desc">パネル右下のボタンから</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🏢</div>
              <div class="grid-title">組織内共有</div>
              <div class="grid-desc">Team / Enterprise メンバーのみ</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔗</div>
              <div class="grid-title">公開 URL</div>
              <div class="grid-desc">URL を知っている人がアクセス可能（検索エンジンには出ない）</div>
            </div>
          </div>

          <div class="try-box">
            <strong>演習 1：Mermaid 図でプロセスを可視化</strong>
            <p>「クライアントの業務改革プロジェクトのプロセスフローを Mermaid 図で書いてください」と依頼し、追加指示で修正を試してみましょう。</p>
          </div>
          <div class="try-box">
            <strong>演習 2：React で簡易シミュレータを作る</strong>
            <p>「事業ポートフォリオのシナリオ分析シミュレータを React で作ってください。3事業の売上・成長率・利益率を入力、5年後の予測を棒グラフ表示」と依頼してみましょう。</p>
          </div>
          <div class="try-box">
            <strong>演習 3：Artifact を反復改善する</strong>
            <p>作った Artifact に追加指示を出して修正し、バージョン履歴で前のバージョンに戻れることを確認してください。</p>
          </div>

          <div class="tip-box">
            <strong>TIP：1機能ずつ追加する</strong>
            <p>一度に全部頼むと後半の指示が無視されがちです。1機能ずつ追加→確認→次、のリズムが結果的に速いです。</p>
          </div>
          <div class="warning-box">
            <strong>落とし穴：公開URLの取り扱い</strong>
            <p>URLを知っている人は誰でもアクセス可能です。クライアント機密を含む Artifact は組織内共有のみにしてください。</p>
          </div>
        `
      },

      // --- B-3: Skills ---
      {
        title: '1-8. Skills',
        type: 'hands-on',
        content: `
          <h3>Skill とは</h3>
          <p><strong>Skill = タスクの手順・ルール・テンプレを書いた Markdown ファイル</strong>。Claude は「この Skill が今のタスクに該当する」と判断したら自動で読み込んで実行します。</p>

          <div class="visual-big-message">
            <div class="big-message-icon">📜</div>
            <div class="big-message-text">「四半期レビュー Skill」を一度作れば、毎回同じ品質で出る</div>
            <div class="big-message-sub">手順の再現性と品質の標準化が Skill の価値です</div>
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

          <h3>Skills と Projects の違い</h3>
          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">Projects</div>
              <h4>知識（参照すべき情報）</h4>
              <ul>
                <li>クライアント情報、議事録、過去成果物</li>
                <li>Project 内の全会話で継続</li>
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
            <strong>演習：カスタム Skill を作ってみる</strong>
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
        `
      },

      // --- B-4: MCP ---
      {
        title: '1-9. MCP',
        type: 'lecture',
        content: `
          <h3>MCP とは</h3>
          <p><strong>MCP（Model Context Protocol）</strong>は、Claude と外部ツール（Slack、Notion、社内 DB 等）を繋ぐオープン規格です。「USB-C のような共通規格を AI ツール接続にも」という発想です。</p>

          <div class="visual-big-message">
            <div class="big-message-icon">🔌</div>
            <div class="big-message-text">社内 Slack / Notion を「限定範囲で」Claude に繋ぐ</div>
            <div class="big-message-sub">範囲を間違えるとコンプライアンス違反 — 技術的に絞り込む仕組みが要点</div>
          </div>

          <h3>範囲制限の二重担保</h3>
          <div class="visual-steps">
            <div class="step-item">
              <div class="step-number">1</div>
              <div class="step-content">
                <h4>一次担保：Token のスコープ制限</h4>
                <p>Slack は Bot を招待したチャンネルのみ。Notion は Integration を共有した DB / ページのみ。それ以外は技術的に読み込み失敗。</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">2</div>
              <div class="step-content">
                <h4>二次担保：Skill / Instructions による意図の明示</h4>
                <p>Cowork Project の Instructions に「触ってよい範囲」を明記。運用ミスがあっても Claude 自身がブレーキ。</p>
              </div>
            </div>
          </div>

          <div class="info-box">
            <strong>なぜ二重か</strong>
            <p>Token だけだと「招待範囲全部に無自覚にアクセスする」リスク。Instructions だけだと「お願いベース」で信頼性が低い。ベルト＆サスペンダー（二重保険）で運用します。</p>
          </div>

          <h3>Connector との違い</h3>
          <div class="visual-comparison">
            <div class="comp-item">
              <h4>Connector（本研修では扱わない）</h4>
              <ul>
                <li>GUI からワンクリック接続</li>
                <li>範囲の細かい絞り込みが限定的</li>
                <li>マクロミル環境では不使用</li>
              </ul>
            </div>
            <div class="comp-item">
              <h4>MCP（本研修の主役）</h4>
              <ul>
                <li>Token / 設定ファイルで接続</li>
                <li>チャンネル / DB / ページ単位で柔軟に制御</li>
                <li>社内 Slack・Notion（限定範囲）で利用</li>
              </ul>
            </div>
          </div>

          <div class="try-box">
            <strong>演習：範囲制限を設定して動作確認</strong>
            <ol>
              <li>Cowork > Customize > MCP Servers に社内配布の Slack / Notion MCP を追加</li>
              <li>Cowork Project の Instructions に対象チャンネル・対象 DB・参照禁止リストを記述</li>
              <li>対象外のチャンネル名で試し、Claude が止まることを確認（二重担保の動作確認）</li>
              <li>対象範囲内で「#case-A-internal の先週の議論を要約して」を実行</li>
            </ol>
          </div>

          <div class="warning-box">
            <strong>落とし穴：クライアント情報を含むチャンネル / ページを対象に入れない</strong>
            <p>Claude に渡してよいのは「社内のもの・自分が参加しているもの・クライアント情報を含まないもの」だけです。</p>
          </div>
        `
      },

      // --- B-5: Enterprise Search ---
      {
        title: '1-10. Enterprise Search（参考）',
        type: 'lecture',
        content: `
          <h3>Enterprise Search とは</h3>
          <p>Team / Enterprise プランで、サイドバーに<strong>「Ask {組織名}」</strong>ボタンが出る機能です。組織が接続した Documents / Chat / Email を横断検索できます。</p>

          <div class="visual-big-message">
            <div class="big-message-icon">🔍</div>
            <div class="big-message-text">本研修では使わない（参考扱い）</div>
            <div class="big-message-sub">Connector が前提の機能のため、マクロミル環境の運用方針では対象外</div>
          </div>

          <h3>代替手段</h3>
          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">💬</div>
              <div class="grid-title">社内 Slack の議論</div>
              <div class="grid-desc">1-9 の Slack MCP（社内チャンネル限定）で対応</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📒</div>
              <div class="grid-title">社内 Notion ナレッジ</div>
              <div class="grid-desc">1-9 の Notion MCP（DB / ページ限定）で対応</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📁</div>
              <div class="grid-title">過去案件ファイル</div>
              <div class="grid-desc">ローカルフォルダ運用（第2回前半 で詳述）</div>
            </div>
          </div>

          <div class="info-box">
            <strong>機能の存在だけ知っておけば十分</strong>
            <p>サイドバーに「Ask {組織名}」ボタンが出ているか確認するだけで本モジュールは完了です。</p>
          </div>
        `
      },

      // --- B-6: Research mode ---
      {
        title: '1-11. Research mode',
        type: 'hands-on',
        content: `
          <h3>Research mode とは</h3>
          <p>通常の Web 検索が「1回検索→1回回答」なのに対して、Research は<strong>複数の検索を自律的に連鎖</strong>させて深いリサーチを行います。</p>

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
              <div class="ba-label">Research</div>
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
              <div class="grid-title">Research を使うべき</div>
              <div class="grid-desc">複数ソース統合、競合比較、業界調査、提案書の根拠資料収集</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">⏸️</div>
              <div class="grid-title">使うべきでない</div>
              <div class="grid-desc">単発の事実確認（→普通の検索）、推論主体（→Extended Thinking）、社内ナレッジのみ（→Enterprise Search）</div>
            </div>
          </div>

          <h3>効果的な Research プロンプトの3つのコツ</h3>
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
                <p>セクション番号付きで構造を指定すると、Research がその通りに組み立てる</p>
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

          <div class="try-box">
            <strong>演習 1：業界調査を Research で実行</strong>
            <p>チャット画面下部の「Search and tools」から Research を有効化し、業界調査プロンプトを投げてみましょう。完了まで5〜15分、別作業を進めてください。</p>
          </div>
          <div class="try-box">
            <strong>演習 2：MCP / ローカル連携 Research</strong>
            <p>社内 Slack / Notion MCP とローカルファイルを組み合わせ、社内議論と Web の最新動向を統合するリサーチを試してください。</p>
          </div>

          <div class="tip-box">
            <strong>TIP：重い Research は「夕方」に走らせる</strong>
            <p>長時間 Research は夕方に投げて翌朝結果を見るのが現実的です。自分は別作業を進める癖をつけてください。</p>
          </div>
          <div class="warning-box">
            <strong>落とし穴：Research の結果を鵜呑みにする</strong>
            <p>Research のレポートは「初稿」と捉えてください。特に数字・固有名詞・引用は自分で再確認しましょう。</p>
          </div>
        `
      },

      // --- B-7: Claude in Office ---
      {
        title: '1-12. Claude in Office',
        type: 'hands-on',
        content: `
          <h3>3つの Office アドイン</h3>
          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">Claude for Excel</div>
              <div class="grid-desc">スプレッドシート分析、財務モデル、数式デバッグ、テンプレ自動入力（2025年10月〜）</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📑</div>
              <div class="grid-title">Claude for PowerPoint</div>
              <div class="grid-desc">テンプレ準拠スライド生成、既存スライド編集、チャート自動生成（2026年2月〜）</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📝</div>
              <div class="grid-title">Claude for Word</div>
              <div class="grid-desc">長文ドラフト、変更履歴付き編集、コメント応答（2026年4月〜）</div>
            </div>
          </div>

          <h3>クロスアプリ共有コンテキスト</h3>
          <div class="visual-steps">
            <div class="step-item">
              <div class="step-number">1</div>
              <div class="step-content">
                <h4>Excel で分析</h4>
                <p>Q1売上データを Claude に分析させる</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">2</div>
              <div class="step-content">
                <h4>PowerPoint でスライド化</h4>
                <p>「先ほどの分析をベースにスライド作って」→文脈引き継ぎ</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">3</div>
              <div class="step-content">
                <h4>Word で報告書</h4>
                <p>Excel 分析と PPT を踏まえて長文ドラフト生成</p>
              </div>
            </div>
          </div>

          <div class="info-box">
            <strong>Skill との連動</strong>
            <p>組織で有効化した Skill は Office アドイン内でも自動で呼ばれます。「800流の提案書 Skill」を1つ作れば、PowerPoint アドインからも同じブランドで出力されます。</p>
          </div>

          <div class="try-box">
            <strong>演習 1：Excel で財務モデルを解読</strong>
            <p>Excel でファイルを開き、リボンの Claude ボタンからサイドバーを表示。複雑な数式セルを選択して「このセルの数式を説明して」と試してください。</p>
          </div>
          <div class="try-box">
            <strong>演習 2：PowerPoint でテンプレ準拠スライド生成</strong>
            <p>標準テンプレを開いた状態で「このテンプレートのマスタスライドを使って5枚のスライドを作って」と依頼してください。</p>
          </div>
          <div class="try-box">
            <strong>演習 3：Word で変更履歴付き編集</strong>
            <p>文書内の段落をハイライトし「結論先行のトーンに書き換えて。変更は変更履歴として挿入して」と依頼してください。</p>
          </div>

          <div class="tip-box">
            <strong>TIP：クロスアプリは「同じセッション」で</strong>
            <p>アプリを切り替えても会話を新規にせず続けてください。「会話を新しく始める」と引き継ぎが切れます。</p>
          </div>
          <div class="warning-box">
            <strong>落とし穴：対応していない Office バージョン</strong>
            <p>Microsoft 365（サブスクリプション版）が必要です。古い Office パッケージ版では動きません。</p>
          </div>
          <div class="warning-box">
            <strong>落とし穴：クライアント機密ファイルの取り扱い</strong>
            <p>アドインの入出力データは Anthropic 側で処理されます。機密ファイルは案件契約・社内ポリシーを確認し、グレーな場合は機密部分を除いた作業コピーで分析してください。</p>
          </div>
        `
      },

      // --- B-8: Claude in Chrome / Slack ---
      {
        title: '1-13. Chrome / Slack',
        type: 'lecture',
        content: `
          <h3>Claude in Chrome</h3>
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

          <h3>Claude in Slack</h3>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">💬</div>
              <div class="grid-title">Slack 内で直接会話</div>
              <div class="grid-desc">スレッド要約、論点抽出、ミーティング前準備、新チームへのオンボーディング</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔗</div>
              <div class="grid-title">Claude 側から Slack を参照</div>
              <div class="grid-desc">Slack MCP（B-4）経由で対象チャンネルの議論を読み込み</div>
            </div>
          </div>

          <h3>4つのインターフェースの使い分け</h3>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">🌐</div>
              <div class="grid-title">claude.ai（Chat）</div>
              <div class="grid-desc">一般用途、リサーチ、ライティング、分析</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">Claude in Office</div>
              <div class="grid-desc">Excel / PowerPoint / Word 内で直接作業</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔍</div>
              <div class="grid-title">Claude in Chrome</div>
              <div class="grid-desc">Web リサーチ、メール、ブラウザ自動化</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">💬</div>
              <div class="grid-title">Claude in Slack</div>
              <div class="grid-desc">チーム協業、議論整理、即答</div>
            </div>
          </div>

          <div class="try-box">
            <strong>演習 1：Chrome 拡張で記事要約</strong>
            <p>Chrome ウェブストアから「Claude」拡張をインストールし、長めのニュース記事を開いて「このページの内容を3セクションに分けて要約して」と試してください。</p>
          </div>
          <div class="try-box">
            <strong>演習 2：Slack で長スレッドを整理</strong>
            <p>長いスレッドで @Claude を呼び「このスレッドの議論を要約して。決まったこと・未決・各人の立場を整理して」と依頼してください。</p>
          </div>

          <div class="tip-box">
            <strong>TIP：Chrome 拡張は「タブ間で文脈維持」</strong>
            <p>複数タブを跨いで文脈を覚えているので「Aタブの情報と Bタブの情報を組み合わせて」が直感的にできます。</p>
          </div>
          <div class="warning-box">
            <strong>落とし穴：Chrome 拡張は「リサーチプレビュー」段階</strong>
            <p>クライアント機密や決済情報の操作には使わないでください。低リスクなタスクから始めましょう。</p>
          </div>
          <div class="warning-box">
            <strong>落とし穴：Slack で長文が流れる</strong>
            <p>Claude が長文応答するとチャンネル全員に流れます。長い議論の整理は DM か claude.ai でやる方が安全です。</p>
          </div>
        `
      }
    
    ],
    quiz: [
      
      // --- 1-1 の確認問題 ---
      {
        question: 'Claude の設計思想「Constitutional AI」の3つの原則として正しい組み合わせはどれですか?',
        options: [
          'Helpful, Harmless, Honest',
          'Fast, Accurate, Cheap',
          'Smart, Safe, Scalable',
          'Open, Private, Personal'
        ],
        correct: 0,
        explanation: 'Constitutional AI の3原則は Helpful（役に立つ）、Harmless（害がない）、Honest（誠実である）です。'
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
        explanation: '画像生成については 第1回前半 で触れていません。Claude の業務上の強みとして挙げたのは「長文の安定性」「出力の操縦性」「思考のパートナー」の3点です。'
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
      // --- 1-2 の確認問題 ---
      {
        question: 'プロンプト3要素として正しい組み合わせはどれですか?',
        options: [
          '名前 / 質問 / 終了',
          'Setting the stage（舞台設定）/ Defining the task（タスク定義）/ Specifying rules（ルール指定）',
          'Input / Process / Output',
          'Hello / Question / Goodbye'
        ],
        correct: 1,
        explanation: 'プロンプト3要素は舞台設定（Setting the stage）、タスク定義（Defining the task）、ルール指定（Specifying rules）です。'
      },
      {
        question: '「悪い例：競合分析して」を改善するときに、3要素のうち最も追加が必要な要素は何ですか?',
        options: [
          '1つもない、これで十分',
          'すべて足りない（舞台設定・タスク定義・ルール指定すべて）',
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
        question: '個人プリファレンス（Personal Preferences）を設定する目的として正しいのはどれですか?',
        options: [
          '案件ごとの細かい前提を入れるため',
          '毎回書くのが面倒な「自分の役割」「希望するトーン」など、全会話共通の前提を入れるため',
          'パスワードを保存するため',
          'ChatGPT のデータを読み込むため'
        ],
        correct: 1,
        explanation: '案件固有のことは Project に書きます。プリファレンスは全会話共通の前提を入れる場所です（第1回後半-1 で Project を扱います）。'
      },
      // --- 1-3 の確認問題 ---
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
        question: '簡易 Evals の目的として最も適切なのはどれですか?',
        options: [
          'Claude が完璧であることを証明するため',
          '自分の業務で Claude が使える範囲・使えない範囲を見極めるため',
          '同僚に成果を見せるため',
          'Claude をやめる理由を探すため'
        ],
        correct: 1,
        explanation: 'Evals の目的は、自分の業務で Claude がどの程度使えるか、使える範囲と使えない範囲を見極めることです。'
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
      // --- 1-4 の確認問題 ---
      {
        question: '「議事録30本から論点マップを作成し、PPTX として保存したい」場合、最も適したモードはどれですか?',
        options: [
          'Chat',
          'Cowork',
          'Code',
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
          'Code',
          'デスクトップアプリは閉じて Slack で議論'
        ],
        correct: 0,
        explanation: '対話で深める用途では Chat が最適です。壁打ちは Chat のベースキャンプ的な使い方です。'
      },
      {
        question: 'Cowork と Code が共有しているものは何ですか?',
        options: [
          'ターミナルでの操作',
          'Claude Code 由来のエージェント基盤',
          'プログラミング能力のみ',
          '共通点はない'
        ],
        correct: 1,
        explanation: 'Cowork と Code はどちらも Claude Code 由来のエージェント基盤を共有しています。'
      },
      {
        question: '3モードの使い分けについて、本モジュールの推奨はどれですか?',
        options: [
          '全モードを毎日使う',
          '業務の8割は Chat で十分、Cowork と Code は必要な場面で',
          'Code だけ使えばよい（最強なので）',
          'Chat だけ使う（他は不要）'
        ],
        correct: 1,
        explanation: '業務の8割は Chat で十分です。Cowork は1〜2割の重要タスク、Code はさらに絞られた領域で使い分けます。'
      },
      // --- 1-5 の確認問題 ---
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
        question: '本研修（マクロミル環境）での運用方針として正しいのはどれですか?',
        options: [
          'すべての Connector を GUI から接続して使う',
          'ローカルフォルダ + Office アドイン + Chrome 拡張 + 社内 Slack / Notion（MCP・限定範囲）で運用、Connector は使わない',
          'Claude は使わずに ChatGPT を使う',
          'Web版 claude.ai だけしか使えない'
        ],
        correct: 1,
        explanation: 'マクロミル環境では Connector は使わず、ローカルフォルダ + Office アドイン + Chrome 拡張 + MCP（Slack/Notion 限定範囲）で運用します。'
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
        question: '個人プリファレンスを設定する場所はどこですか?',
        options: [
          'デスクトップアプリの Cowork タブ',
          'claude.ai の Settings > General',
          'Excel のリボン',
          'ターミナル'
        ],
        correct: 1,
        explanation: '個人プリファレンスは claude.ai の Settings > General から設定します。'
      }
    ,
      
      // B-1
      {
        question: 'Project に含まれる構成要素として、本モジュールで挙げていないものはどれですか?',
        options: ['ナレッジベース（参照ファイル）', 'カスタム指示', '会話履歴', 'クライアントの請求書'],
        correct: 3,
        explanation: 'Project の構成要素はナレッジベース・カスタム指示・会話履歴・メモリです。請求書は含まれません。'
      },
      {
        question: '個人プリファレンスと Project カスタム指示の使い分けとして正しいのはどれですか?',
        options: [
          '個人プリファレンスは案件固有、Project は全社共通',
          '個人プリファレンスは全会話共通の自分の好み、Project は案件固有の前提',
          '両方は同じ用途で重複する',
          'Project は不要、個人プリファレンスだけで十分'
        ],
        correct: 1,
        explanation: '個人プリファレンスは全会話に適用される自分の役割・好み、Project は案件固有の背景・ルールを入れます。'
      },
      {
        question: 'Project のナレッジベースが大きくなったとき、Claude が自動でやることは何ですか?',
        options: [
          '古いファイルを自動削除する',
          'RAG モードに切り替えて、関連箇所だけ検索して引く',
          'ユーザーに警告して停止する',
          '課金額を増やす'
        ],
        correct: 1,
        explanation: 'ナレッジベースが大きくなると自動で RAG モードに切り替わり、質問に関連する部分だけを検索して取り出します。'
      },
      {
        question: 'チーム共有された Project の権限レベルとして本モジュールで挙げていないものはどれですか?',
        options: ['Can view', 'Can edit', 'Owner', 'Developer'],
        correct: 3,
        explanation: '権限レベルは Can view / Can edit / Owner の3つです。Developer は存在しません。'
      },
      // B-2
      {
        question: 'Claude が自動で Artifact を作る目安として本モジュールで挙げているのはどれですか?',
        options: ['5文字以上', '15行以上のまとまった内容', '100ページ以上', 'ファイル名がついている'],
        correct: 1,
        explanation: '15行以上のまとまった、自己完結したコンテンツが Artifact 化の目安です。'
      },
      {
        question: 'Artifact の種類として本モジュールで挙げていないものはどれですか?',
        options: ['Mermaid 図', 'React コンポーネント', 'SVG 画像', '動画ファイル（MP4）'],
        correct: 3,
        explanation: 'Artifact の種類はドキュメント・コード・HTML・SVG・Mermaid・React です。動画ファイルは含まれません。'
      },
      {
        question: 'Artifact を公開URLで公開した場合、どのような扱いになりますか?',
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
        question: '同じ Artifact を反復改善するコツとして本モジュールで推奨されているのはどれですか?',
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
        question: 'Skill と Project の違いとして正しいのはどれですか?',
        options: [
          'Skill は知識、Project は手順',
          'Skill は手順（やり方）、Project は知識（参照情報）',
          '両方とも同じ用途',
          'Skill は無料、Project は有料'
        ],
        correct: 1,
        explanation: 'Skill は手順（やり方）を持ち、Project は知識（参照情報）を持ちます。両者は補完関係です。'
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
          'Token のスコープ制限 + Skill / Instructions による意図の明示',
          'ファイアウォール + VPN',
          '二重担保は不要'
        ],
        correct: 1,
        explanation: '一次担保が Token のスコープ制限（技術的に読めない）、二次担保が Skill / Instructions（Claude 自身がブレーキ）です。'
      },
      // B-5
      {
        question: '本研修における Enterprise Search の扱いとして正しいのはどれですか?',
        options: [
          'メイン機能として使い倒す',
          '機能の存在は知っておくが、現状は使わない（代わりに Slack / Notion MCP で代替）',
          'すべての受講者に必ずセットアップさせる',
          '個人プランで使う'
        ],
        correct: 1,
        explanation: 'Enterprise Search は Connector が前提の機能のため、マクロミル環境では対象外です。代わりに MCP で対応します。'
      },
      // B-6
      {
        question: 'Research mode と通常の Web 検索の違いとして正しいのはどれですか?',
        options: [
          'Research は無料、Web 検索は有料',
          'Research は複数検索を自律的に連鎖させ、所要5〜45分で多角的レポートを作る',
          '両方とも同じ',
          'Web 検索の方が時間がかかる'
        ],
        correct: 1,
        explanation: 'Research は複数検索を自律的に連鎖させ、5〜45分で包括的なレポートを生成します。'
      },
      {
        question: 'Research mode を使うべきでない場面はどれですか?',
        options: [
          '競合5社の中期経営計画を比較したい',
          '「○○社の住所は?」のような単発の事実確認',
          '業界トレンドを多角的に調査したい',
          '提案書の根拠資料を一気に集めたい'
        ],
        correct: 1,
        explanation: '単発の事実確認は普通の Web 検索で十分です。Research は多角的な調査に使います。'
      },
      {
        question: '効果的な Research プロンプトのコツとして本モジュールで挙げていないのはどれですか?',
        options: [
          '具体的目標を明示',
          '出力構造を指定',
          '制約（予算・地理・時間軸など）を含める',
          '短く一言だけ書く'
        ],
        correct: 3,
        explanation: 'Research は時間もリソースも使うので、具体的目標・出力構造・制約を含めた詳細なプロンプトが推奨されています。'
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
        explanation: '2026年4月時点で Excel（2025年10月〜）、PowerPoint（2026年2月〜）、Word（2026年4月〜）の3つすべてがリリース済みです。'
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
          'Slack → Claude Code 引き渡し',
          'Slack ワークスペース全体の自動翻訳'
        ],
        correct: 3,
        explanation: 'ワークスペース全体の自動翻訳は挙げられていません。活用例はスレッド要約、議論準備、Claude Code 引き渡し等です。'
      },
      {
        question: 'Claude in Chrome の現在の位置づけとして正しいのはどれですか?',
        options: [
          '一般リリース済み、すべての機能が安定',
          'リサーチプレビュー、低リスクなタスクから使い始めるのが推奨',
          '廃止予定',
          'Anthropic 公式ではない'
        ],
        correct: 1,
        explanation: 'Chrome 拡張は現在リサーチプレビュー段階です。信頼できるサイトでの低リスクなタスクから始めましょう。'
      }
    
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
        
        { title: 'Claude Projects 公式ガイド', url: 'https://support.claude.com/', desc: 'Projects の作成・管理・共有方法', category: '公式' },
        { title: 'Claude Artifacts ガイド', url: 'https://support.claude.com/', desc: 'Artifact の種類・共有・公開方法', category: '公式' },
        { title: 'Claude Skills ドキュメント', url: 'https://docs.anthropic.com/', desc: 'Skills の作成・管理・組織展開', category: '公式' },
        { title: 'MCP（Model Context Protocol）', url: 'https://docs.anthropic.com/en/docs/agents-and-tools/model-context-protocol', desc: 'MCP の仕様・設定方法', category: '公式' },
        { title: 'Claude Research mode', url: 'https://support.claude.com/', desc: 'Research の使い方・プロンプトのコツ', category: '公式' },
        { title: 'Claude in Office', url: 'https://support.claude.com/', desc: 'Excel / PowerPoint / Word アドインの設定', category: '公式' },
        { title: 'Claude in Chrome', url: 'https://support.claude.com/', desc: 'Chrome 拡張機能の使い方', category: '公式' }
      ],
      faq: [
        
        { q: 'Claude と ChatGPT の違いは?', a: 'Claude は長文の安定性（200K〜1Mトークン）、出力の操縦性、思考のパートナーとしての設計に強みがあります。タスクによって得意不得意が違うので、使い分けが現実的です。' },
        { q: 'プロンプトの3要素は必ず全部入れるべき?', a: '必ずしも全部必要ではありません。簡単な質問なら不要ですが、業務で精度の高い出力が欲しいときは3要素（舞台設定・タスク定義・ルール指定）を意識すると品質が上がります。' },
        { q: 'Chat / Cowork / Code の違いは?', a: 'Chat は対話で考える場所。Cowork は任せて完成品をもらう場所。Code はコード生成や高度な品質制御が必要な場合に使います。迷ったら Chat から始めましょう。' },
        { q: '無料プランでも研修内容は実践できますか?', a: '基本的なチャット機能は無料でも使えますが、Cowork / Claude Code / Skills / Office アドインなどは有料プラン（Pro 以上）が必要です。本研修は有料プランの利用を前提としています。' },
        { q: 'Hallucination（幻覚）はどう防ぐ?', a: '完全には防げませんが、出典の併記を要求する、Web検索をONにする、重要な数字・固有名詞は自分で裏取りする、の3つで大幅にリスクを下げられます。' },
        { q: 'Connector はマクロミル環境で使える?', a: 'マクロミル環境では Connector（Drive / SharePoint 等のGUI接続）は使いません。社内ナレッジへのアクセスは MCP で Slack / Notion に限定範囲で繋ぐ方式です（第1回後半-4 で扱います）。' },
        
        { q: 'Project と個人プリファレンスの使い分けは?', a: '個人プリファレンスは全会話に効く自分の役割・好み。Project は案件固有の背景・ルール・参照資料を入れる場所です。両方併用するのが現実的です。' },
        { q: 'Artifact が自動生成されないときは?', a: '15行未満や会話の流れに依存する内容は自動 Artifact 化されません。「これを Artifact にしてください」と明示すれば作ってくれます。' },
        { q: 'カスタム Skill はどうやって作る?', a: 'Claude との対話で作れます。「○○のための Skill を作りたい」と話しかけ、質問に答えていくと zip ファイルが生成されます。コードを書く必要はありません。' },
        { q: 'MCP の二重担保とは?', a: '一次担保が Token のスコープ制限（技術的に読めない状態を作る）、二次担保が Skill / Instructions による意図の明示（Claude 自身にブレーキをかけさせる）です。' },
        { q: 'Research mode はいつ使う?', a: '複数ソースを統合した包括的レポートが欲しいときに使います。単発の事実確認には普通の Web 検索で十分です。5〜45分かかるので、プロンプトに投資する価値があります。' },
        { q: 'Office アドインのクロスアプリ共有とは?', a: 'Excel→PowerPoint→Word の同じセッション内で文脈が引き継がれる機能です。Team / Enterprise では Owner が組織設定で有効化する必要があります。' },
        { q: 'Chrome 拡張で機密情報を扱ってよい?', a: '現在はリサーチプレビュー段階なので、クライアント機密や決済情報の操作には使わないでください。低リスクなタスクから始めましょう。' }
      ]
    }
  },

  // ============================================================
  // 第2回：Cowork・Claude Codeで業務を自動化する
  // ============================================================
  {
    id: 'session-2',
    title: '第2回：Cowork・Claude Codeで業務を自動化する',
    shortTitle: '第2回',
    description: '「対話する」から「任せる」へ。Coworkで業務を委任し、Claude Codeで再現性ある高品質な成果物と自動化パイプラインを構築する',
    target: '第1回 完了者',
    duration: '自分のペースで',
    prereq: '第1回 完了',
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    objectives: [
      '「対話する」から「任せる」への発想転換ができている',
      'Cowork のタスクループ（Describe → Q&A → Run → Open）を回せる',
      'Cowork Project でコンテキストを永続化できる',
      'Scheduled tasks で定型業務を自動化できる',
      'Claude Code の仕組み（Agentic loop / Context / Tools）を理解する',
      'CLAUDE.md でプロジェクト固有のルールを永続化できる',
      'Subagents で並列処理・専門化したエージェントを使える',
      'Hooks で deterministic な制御ができる'
    ],
    coverGroups: [
      { label: 'Coworkを始める', icon: '🚀', sections: [0, 1, 2] },
      { label: '環境を整える', icon: '🏗️', sections: [3, 4, 5] },
      { label: '業務で使い倒す', icon: '💼', sections: [6, 7, 8, 9] },
      { label: 'Claude Codeの基礎', icon: '💡', sections: [10, 11, 12] },
      { label: 'ワークフローを回す', icon: '🔄', sections: [13, 14] },
      { label: '品質を制御する', icon: '🎯', sections: [15, 16, 17] },
      { label: '拡張する', icon: '🔧', sections: [18, 19, 20] }
    ],
    sections: [
      
      // --- C-1: Cowork とは何か ---
      {
        title: '2-1. Cowork とは何か',
        type: 'lecture',
        content: `
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

          <h3>Cowork とは — 「対話」から「委任」へ</h3>
          <p>Cowork は <strong>Claude にタスクを「任せる」ためのモード</strong>です。Chat と同じ知能ですが、関わり方が根本的に違います。</p>

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
                <li>文脈はフォルダ + Project に永続化</li>
                <li>実ファイル（.pptx / .xlsx / .docx 等）が指定フォルダに</li>
                <li>数分〜数時間、離席して戻れば完成</li>
              </ul>
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

          <div class="warning-box">
            <strong>⚠️ 核ルール</strong><br>
            変更されると困るもののコピーを取り、コピーだけ Claude に渡す。元データは絶対に触らせない。
          </div>

          <h3>Customize エリアで使うもの</h3>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">🔌</div>
              <div class="grid-title">MCP Servers</div>
              <div class="grid-desc">社内 Slack / 社内 Notion（B-4 で詳述）</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🧩</div>
              <div class="grid-title">Plugins</div>
              <div class="grid-desc">職種特化バンドル（C-5）</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📝</div>
              <div class="grid-title">Skills</div>
              <div class="grid-desc">タスクの手順（B-3 で扱った）</div>
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
              <div class="flow-label">Describe</div>
              <div class="flow-desc">ゴール・入力・出力・制約を伝える</div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <div class="flow-num">2</div>
              <div class="flow-label">Q&A</div>
              <div class="flow-desc">Claude が不足情報を質問</div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <div class="flow-num">3</div>
              <div class="flow-label">Run</div>
              <div class="flow-desc">計画→承認→実行（離席OK）</div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <div class="flow-num">4</div>
              <div class="flow-label">Open</div>
              <div class="flow-desc">成果物をフォルダで確認</div>
            </div>
          </div>

          <h3>プロンプトの書き方：Input + Transformation + Output</h3>
          <div class="visual-equation">
            <div class="eq-term">
              <div class="eq-label">何を読むか</div>
              <div class="eq-value">Input</div>
            </div>
            <div class="eq-operator">+</div>
            <div class="eq-term">
              <div class="eq-label">何をするか</div>
              <div class="eq-value">Transformation</div>
            </div>
            <div class="eq-operator">+</div>
            <div class="eq-result">
              <div class="eq-label">何を出すか</div>
              <div class="eq-value">Output</div>
            </div>
          </div>

          <div class="visual-big-message">
            <div class="big-message-icon">☕</div>
            <div class="big-message-text">Run（実行）中は離席 OK</div>
            <div class="big-message-sub">コーヒーを入れに行っている間に、議事録30本の分析が完了しています</div>
          </div>

          <h3>Subagent — 並列処理の仕組み</h3>
          <p>大きなタスクでは Claude が自動でサブエージェントを立ち上げ、並列処理します。各サブエージェントは別々のコンテキストで調査し、結果を統合します。</p>

          <div class="info-box">
            <strong>ℹ️ 成果物は「優秀な同僚の初稿」として読む</strong><br>
            完璧ではない。ファイルを開き、数字を1つ裏取り、論理を1本辿る。これだけで品質チェックの大半が完了します。
          </div>
        `
      },
      // --- C-4: Cowork Project — 文脈の永続化 ---
      {
        title: '2-4. Cowork Project — 文脈の永続化',
        type: 'lecture',
        content: `
          <h3>Cowork Project とは</h3>
          <p>Cowork のタスクはデフォルトでは毎回フレッシュ。<strong>Cowork Project</strong> はローカルフォルダに紐付いた名前付きワークスペースで、Instructions とメモリが永続化されます。</p>

          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">Project なし</div>
              <h4>毎回リセット</h4>
              <ul>
                <li>前のタスクの記憶を引き継がない</li>
                <li>毎回同じ前提を伝え直す</li>
                <li>案件固有の語彙を毎回教える</li>
              </ul>
            </div>
            <div class="ba-arrow">→</div>
            <div class="ba-item after">
              <div class="ba-label">Project あり</div>
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
              <div class="flow-label">Input</div>
              <div class="flow-desc">どこのファイル群か</div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <div class="flow-num">2</div>
              <div class="flow-label">Transformation</div>
              <div class="flow-desc">何をするか</div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <div class="flow-num">3</div>
              <div class="flow-label">Output</div>
              <div class="flow-desc">何をどこにどんな形式で</div>
            </div>
          </div>

          <div class="tip-box">
            <strong>💡 TIP：バージョン管理は v0、v1、v2… で</strong><br>
            proposal_v0.pptx → proposal_v1.pptx のように番号を付ける癖。変更履歴は changelog.md に記録しましょう。
          </div>
        `
      },
      // --- C-8: Research と分析を大規模に ---
      {
        title: '2-8. Research と分析を大規模に',
        type: 'lecture',
        content: `
          <h3>Cowork が Chat より得意な3場面</h3>
          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">📚</div>
              <div class="grid-title">Volume（量）</div>
              <div class="grid-desc">議事録50本、インタビュー100本、競合10社の年次報告書など、Chat に貼り切れない量</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">⚡</div>
              <div class="grid-title">Parallelism（並列）</div>
              <div class="grid-desc">同じ分析を N 件に対して並列実行。各社1サブエージェントで同時処理</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔬</div>
              <div class="grid-title">In-place computation</div>
              <div class="grid-desc">ローカルで Python を直接実行してデータ処理。結果を同じフォルダに書き戻す</div>
            </div>
          </div>

          <h3>「要約」ではなく「サイン・矛盾・外れ値」を聞く</h3>
          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">価値が薄い問い</div>
              <h4>「要約してください」</h4>
              <p>無難な要約、insight ゼロ</p>
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
          <h3>Cowork の安全境界</h3>
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
        `
      },
      // --- C-10: Troubleshooting と Dispatch ---
      {
        title: '2-10. Troubleshooting と Dispatch',
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

          <div class="info-box">
            <strong>ℹ️ 800社内の状況</strong><br>
            Claude モバイルアプリは社内で利用申請中。利用開始時期は別途案内されます。当面はデスクトップのみで運用設計してください。
          </div>

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
            Code はファイル操作・自動化・品質制御の道具として、コンサル業務でも強力です。Cowork で物足りなくなったら Code に進みましょう。
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
              <div class="grid-title">VS Code 拡張</div>
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

          <h3>段階的に試す推奨順</h3>
          <div class="visual-flow">
            <div class="flow-step"><div class="flow-num">1</div><div class="flow-label">Desktop</div><div class="flow-desc">ハードル最低</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="flow-num">2</div><div class="flow-label">VS Code</div><div class="flow-desc">diff が見える</div></div>
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
            <div class="flow-step"><div class="flow-num">1</div><div class="flow-label">Explore</div><div class="flow-desc">Plan Mode で調べる</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="flow-num">2</div><div class="flow-label">Plan</div><div class="flow-desc">計画を立てさせる</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="flow-num">3</div><div class="flow-label">Code</div><div class="flow-desc">承認して実行</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="flow-num">4</div><div class="flow-label">Commit</div><div class="flow-desc">レビューして確定</div></div>
          </div>

          <div class="visual-big-message">
            <div class="big-message-icon">🎯</div>
            <div class="big-message-text">成功条件を最初に書く</div>
            <div class="big-message-sub">「何をもって完了とするか」を明示しないと Claude は暴走します。ゴールポストを先に立てる。</div>
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
          <h3>Context Window とは</h3>
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
            <div class="step-item"><div class="step-number">1</div><div class="step-content"><h4>Project-level（./CLAUDE.md）</h4><p>プロジェクト固有の規約。Git でチーム共有。最も重要</p></div></div>
            <div class="step-item"><div class="step-number">2</div><div class="step-content"><h4>User-level（~/.claude/CLAUDE.md）</h4><p>自分専用のグローバル前提。全プロジェクトで読まれる</p></div></div>
            <div class="step-item"><div class="step-number">3</div><div class="step-content"><h4>Directory-specific</h4><p>特定サブディレクトリ用。そのディレクトリで作業中に追加で読まれる</p></div></div>
          </div>

          <div class="tip-box">
            <strong>💡 TIP：Course-correct → 追加 のサイクル</strong><br>
            最初は CLAUDE.md なしで始め、Claude が間違えるたびに「これを CLAUDE.md に保存して」と追加。実際に必要な前提だけで構成される CLAUDE.md が育ちます。
          </div>
        `
      },
      // --- D-7: Skills（Code文脈での使い方） ---
      {
        title: '2-17. Skills（Code文脈での使い方）',
        type: 'lecture',
        content: `
          <h3>Code 文脈での Skill 特有機能</h3>
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
              <div class="grid-title">スクリプト同梱</div>
              <div class="grid-desc">Python / Bash スクリプトを Skill フォルダに同梱して自動実行</div>
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
      // --- D-9: MCP — Code文脈での使い方 ---
      {
        title: '2-19. MCP — Code文脈での使い方',
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
              <div class="grid-title">Project</div>
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
          <div class="visual-stats">
            <div class="visual-stat"><div class="stat-value">~95%</div><div class="stat-label">CLAUDE.md の遵守率</div></div>
            <div class="visual-stat"><div class="stat-value">100%</div><div class="stat-label">Hooks の遵守率</div></div>
          </div>

          <h3>Hooks とは — deterministic なルール</h3>
          <p>CLAUDE.md は「ほぼ守ってくれる」。Hooks は「<strong>100% 守られる</strong>」。Claude Code のライフサイクルの特定タイミングで、決まったコマンドを必ず実行します。</p>

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
              <div class="grid-title">code-reviewer</div>
              <div class="grid-desc">ロジック、エラーハンドリング、スタイル整合性、セキュリティリスクを指摘</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📝</div>
              <div class="grid-title">proposal-reviewer</div>
              <div class="grid-desc">論点網羅性、So What の有無、抽象用語の混入、出典明示を確認</div>
            </div>
          </div>

          <h3>Remote Control — スマホからの Code セッション操作</h3>
          <div class="visual-comparison">
            <div class="comparison-item">
              <h4>Dispatch（Cowork）</h4>
              <p>スマホから新規タスクを投げる（リモコン、ジョブ依頼）</p>
            </div>
            <div class="comparison-item">
              <h4>Remote Control（Code）</h4>
              <p>走っている Code セッションを覗く・操作する（画面共有）</p>
            </div>
          </div>

          <div class="info-box">
            <strong>ℹ️ 800社内の状況</strong><br>
            Claude モバイルアプリは社内で利用申請中。Dispatch / Remote Control は申請が下りた後で本格活用可能です。
          </div>

          <div class="visual-big-message">
            <div class="big-message-icon">🎓</div>
            <div class="big-message-text">第2回後半 完了 — 研修全体修了</div>
            <div class="big-message-sub">全34モジュール完了。CLAUDE.md・Subagents・MCP・Hooks で再現性ある高品質な成果物と自動化パイプラインを構築できます。</div>
          </div>
        `
      }
    
    ],
    quiz: [
      
      { question: 'Chat と Cowork の最大の違いは何ですか？', options: ['値段', '「対話」と「委任」（Cowork はゴール提示→計画→実行→完成品）', '動くプラットフォーム', 'AIモデル'], correct: 1, explanation: 'Cowork は「対話」ではなく「委任」のためのモード。ゴールを提示し、計画→実行→完成品という流れで進みます。' },
      { question: 'Cowork の3つの柱として正しい組み合わせはどれですか？', options: ['Plan / Execute / Connect', 'Read / Write / Delete', 'Input / Process / Output', 'Buy / Use / Sell'], correct: 0, explanation: 'Cowork の3つの柱は Plan（計画）、Execute（実行）、Connect（接続）です。' },
      { question: 'Computer Use の優先順として正しいのはどれですか？', options: ['画面操作 → ブラウザ → Connector', 'MCP/アドイン → ブラウザ → 画面操作（Computer Use は最後の手段）', 'ブラウザ → Connector → 画面操作', 'すべて同時に使う'], correct: 1, explanation: 'まず MCP / Office アドイン（速くて確実）→ Claude in Chrome → Computer Use（最後の手段）の順です。' },
      { question: 'Cowork で向いているタスクとして本モジュールで挙げているものはどれですか？', options: ['クライアントとの即時対話', '議事録30本からの論点マップ作成、完成品（.docx）が欲しい', '1行の質問に対する1行の回答', 'メール1通の返信'], correct: 1, explanation: '大量ファイルの処理や完成品ファイルが必要なタスクは Cowork 向きです。' },
      { question: 'Cowork の起動方法として推奨されているのはどれですか？', options: ['ブラウザで claude.ai にアクセス', 'メールで起動依頼を送る', 'Claude Desktop アプリを起動して Cowork タブを選択', 'CLI で claude cowork と入力'], correct: 2, explanation: 'Cowork はデスクトップアプリの Cowork タブでのみ動きます。' },
      { question: 'Cowork で「フォルダを開く」操作の意味として正しいのはどれですか？', options: ['フォルダの内容を Anthropic に送信する', 'そのフォルダを Cowork セッションの作業対象として認識させる', 'パスワードを変更する', '友達を招待する'], correct: 1, explanation: 'フォルダを開く操作は、そのフォルダを Cowork の作業範囲として指定する宣言です。' },
      { question: 'Cowork のタスクループ4ステップとして正しい順序はどれですか？', options: ['Run → Open → Describe → Q&A', 'Describe → Q&A → Run → Open', 'Q&A → Describe → Open → Run', 'Open → Run → Q&A → Describe'], correct: 1, explanation: 'Describe（伝える）→ Q&A（質問応答）→ Run（実行）→ Open（開く）が正しい順序です。' },
      { question: 'プロンプトに含めるべき3要素として推奨されているのはどれですか？', options: ['Input + Transformation + Output', 'Title + Author + Date', 'Header + Body + Footer', 'Login + Password + Logout'], correct: 0, explanation: 'Input（何を読むか）+ Transformation（何をするか）+ Output（何を出すか）の3点指定が推奨されています。' },
      { question: 'Subagent（サブエージェント）の役割として正しいのはどれですか？', options: ['ユーザーをサポートするカスタマーサポート', '大きなタスクで並列処理を行い、結果を統合する仕組み', 'AI の倫理を監視する役割', '別の AI 製品'], correct: 1, explanation: 'Subagent は大きなタスクを分割して並列処理し、結果を統合する仕組みです。' },
      { question: 'Cowork Project と Chat Project の主な違いとして挙げているものはどれですか？', options: ['Cowork Project は無料、Chat Project は有料', 'Cowork Project はローカル格納、Chat Project はクラウド格納', '両者は同じもの', 'Chat Project は廃止予定'], correct: 1, explanation: 'Cowork Project はローカル格納でファイル操作・委任向き、Chat Project はクラウド格納で対話向きです。' },
      { question: 'Project Instructions に書くと効果的でないものはどれですか？', options: ['関係者', 'ファイル配置', '出力フォーマット', 'クレジットカード番号'], correct: 3, explanation: '機密情報（クレジットカード番号など）は Instructions に書いてはいけません。' },
      { question: 'Global Instructions と Project Instructions の関係として正しいのはどれですか？', options: ['一方しか設定できない', '両方が読まれ、Project 側が後から読まれるので Global を上書きできる', 'Global が優先される', '互いに無関係で連動しない'], correct: 1, explanation: '両方が読まれ、Project Instructions が後から読まれるため、Global の設定を上書きできます。' },
      { question: 'Plugin の中身として挙げているものはどれですか？', options: ['Skill だけ', '連携機能だけ', 'Skills + 連携機能（MCP）+ Subagents のバンドル', 'プログラムコードだけ'], correct: 2, explanation: 'Plugin は Skills + 連携機能（MCP / Connector）+ Subagents を職種単位でまとめたバンドルです。' },
      { question: 'Plugin の中身がプレーンテキストである利点はどれですか？', options: ['速度が速い', 'ファイルを開いて直接編集できる、カスタマイズしやすい', 'ファイルサイズが小さい', '暗号化されている'], correct: 1, explanation: 'プレーンテキストなので、ファイルを開いて直接編集でき、自社流にカスタマイズしやすいのが利点です。' },
      { question: 'Scheduled tasks の主な用途はどれですか？', options: ['1回限りのタスクの即時実行', 'Cowork タスクを定期的に自動実行（週次レポート、日次キャッチアップなど）', '異常検知', 'パスワード変更'], correct: 1, explanation: 'Scheduled tasks は Cowork タスクを決まった頻度で自動実行する機能です。' },
      { question: 'Skill と Schedule の役割分担として正しいのはどれですか？', options: ['Skill が「いつやるか」、Schedule が「何をやるか」', 'Skill が「何をやるか（手順）」、Schedule が「いつやるか（頻度）」', '両者は同じもの', '一方しか使えない'], correct: 1, explanation: 'Skill は何をやるか（手順）、Schedule はいつやるか（頻度）の役割分担です。' },
      { question: 'Cowork が Chat より得意な3場面はどれですか？', options: ['Speed / Quality / Cost', 'Volume / Parallelism / In-place computation', 'Read / Write / Edit', 'Buy / Sell / Hold'], correct: 1, explanation: '量（Volume）、並列処理（Parallelism）、ローカル計算（In-place computation）の3場面です。' },
      { question: 'Cowork の安全境界として挙げていないものはどれですか？', options: ['隔離実行環境', 'フォルダ権限', '削除ゲート', 'すべての操作にPIN認証'], correct: 3, explanation: 'PIN認証はCoworkの安全境界に含まれません。隔離環境、フォルダ権限、削除ゲートが安全境界です。' },
      { question: '3つのモデルのうち、複雑な多段推論や戦略立案に適しているのはどれですか？', options: ['Haiku', 'Sonnet', 'Opus', 'すべて同じ'], correct: 2, explanation: 'Opus は最も賢いモデルで、複雑な多段推論や戦略立案に適しています。' },
      { question: 'Cowork タスクが途中で止まった時の最も多い原因は何ですか？', options: ['パスワードが切れた', 'デスクトップアプリを閉じてしまった', 'インターネットがダウンした', 'Anthropic のサーバー障害'], correct: 1, explanation: 'デスクトップアプリを閉じてしまうのが最も多い原因です。最小化や別ウィンドウ切り替えはOKです。' },
      { question: 'Dispatch の仕組みとして正しいのはどれですか？', options: ['スマホで計算する', 'スマホから指示 → デスクトップで実行 → 結果を通知', 'すべてクラウドで実行', 'デスクトップ不要で動く'], correct: 1, explanation: 'Dispatch はスマホから指示を出し、デスクトップで実行、結果をスマホに通知する仕組みです。' },
      { question: 'Cowork 習熟の推奨ステップとして挙げているものはどれですか？', options: ['Plugin → 実タスク → Skill化 → Schedule → チーム共有', 'すべて自分で書く', 'Schedule から始める', 'チーム共有が最初'], correct: 0, explanation: 'Plugin を入れる → 実タスクを1つ走らせる → Skill化 → Schedule → チーム共有が推奨ステップです。' }
    ,
      
      { question: 'Claude Code と claude.ai Chat の根本的な違いは何ですか？', options: ['値段', 'Code はファイル・ターミナル・コードベースに直接アクセスして自律的に読み書き・実行する', 'Chat の方が機能が多い', '違いはない'], correct: 1, explanation: 'Claude Code はファイル・ターミナル・コードベースに直接アクセスして、Claude が自分で読み書き・実行するエージェント型ツールです。' },
      { question: 'AI Agent の特徴として正しいのはどれですか？', options: ['入力に対して1回だけ応答する', '環境とやりとりしながら目的達成のためにループで自律的に行動する', '人間の指示を全部受け取らないと動かない', 'インターネットがないと動かない'], correct: 1, explanation: 'AI Agent は環境とやりとりしながら、目的達成のためにループで自律的に行動するソフトウェアです。' },
      { question: 'Claude Code のタッチポイントとして挙げていないものはどれですか？', options: ['CLI（ターミナル）', 'VS Code 拡張', 'JetBrains プラグイン', 'iPhone 専用アプリ'], correct: 3, explanation: 'iPhone 専用アプリはタッチポイントに含まれません。CLI、VS Code 拡張、JetBrains プラグイン、Desktop アプリ、Web が挙げられています。' },
      { question: '「エディタで成果物を見ながら作業したい」場合の選択として正しいのはどれですか？', options: ['CLI のみ', 'VS Code 拡張 または JetBrains プラグイン', 'Web 版のみ', 'Desktop アプリのみ'], correct: 1, explanation: 'エディタで diff・ファイルを見ながら進めたい場合は VS Code 拡張または JetBrains プラグインが適しています。' },
      { question: '機能リリースの優先順として正しいのはどれですか？', options: ['Web 版が先行', 'Desktop アプリが先行', 'CLI に最初にリリースされ、他は後追い', 'すべて同時リリース'], correct: 2, explanation: '新機能は基本的に CLI に最初にリリースされ、次に Desktop / VS Code 拡張等に展開されます。' },
      { question: '動作モードの3つとして正しい組み合わせはどれですか？', options: ['Approval / Auto-accept / Plan', 'Read / Write / Execute', 'Easy / Normal / Hard', 'Beta / Stable / Old'], correct: 0, explanation: 'Approval（確認）、Auto-accept（自動承認）、Plan（読み取り専用で計画のみ）の3つです。' },
      { question: 'Plan Mode の特徴として正しいのはどれですか？', options: ['自動的にすべてを実行する', '読み取り専用、書き込み一切なし、計画だけ提示', 'ファイル削除を高速化する', 'ネットワーク接続を切る'], correct: 1, explanation: 'Plan Mode は読み取り専用で、書き込みは一切行わず、計画だけを提示するモードです。' },
      { question: '公式が「これ1つだけ覚えるならこれ」と推奨するワークフローはどれですか？', options: ['Read / Write / Edit / Save', 'Explore / Plan / Code / Commit', 'Buy / Use / Maintain / Sell', 'Login / Work / Logout / Restart'], correct: 1, explanation: 'Explore → Plan → Code → Commit が公式推奨の4ステップワークフローです。' },
      { question: '「成功条件」を最初に明示する効果として正しいのはどれですか？', options: ['Claude が完了判定を自分でできる、出力の精度が上がる', '速度が上がる', '値段が下がる', 'ファイルサイズが減る'], correct: 0, explanation: '成功条件を明示すると、Claude が自分で完了を判定でき、出力の精度が劇的に上がります。' },
      { question: 'Context Window とは何ですか？', options: ['Claude のディスク容量', 'Claude Code がループ中で覚えていられる量（会話、ファイル、ツール定義など）', '月の利用枠', 'ファイルサイズの上限'], correct: 1, explanation: 'Context Window は Claude Code がループの中で覚えていられる量で、会話、ファイル、ツール定義などすべてが含まれます。' },
      { question: '/compact、/clear、/context の使い分けとして正しいのはどれですか？', options: ['すべて同じ', '/compact = 要約して継続、/clear = 完全リセット、/context = 現状可視化', '/compact = 削除、/clear = 保存、/context = ログ', '/compact = 開始、/clear = 終了、/context = 一時停止'], correct: 1, explanation: '/compact は要約して継続、/clear は完全リセット、/context は現在の使用率を可視化するコマンドです。' },
      { question: 'CLAUDE.md とは何ですか？', options: ['Claude のソースコード', 'Claude Code が毎セッション自動で読み込むプロジェクトのオンボーディング資料', 'ユーザーの個人情報', 'パスワードファイル'], correct: 1, explanation: 'CLAUDE.md はセッション開始時に自動で読み込まれるプロジェクトのオンボーディング資料です。' },
      { question: 'CLAUDE.md の運用として推奨するのはどれですか？', options: ['最初から完璧な CLAUDE.md を書く', '最初は CLAUDE.md なしで始め、Course-correct した内容を追加していく', 'CLAUDE.md は使わない', '1万字以上の長大な CLAUDE.md を書く'], correct: 1, explanation: '最初は CLAUDE.md なしで始め、Claude が間違えるたびに修正内容を追加していく運用が推奨されています。' },
      { question: 'Skill が Code 文脈で持つ特有機能として挙げているのはどれですか？', options: ['/skill-name でのスラッシュコマンド明示呼び出し', 'Audio 出力', '動画再生', 'クラウド同期'], correct: 0, explanation: 'Code 文脈では /skill-name でスラッシュコマンドによる明示呼び出しが可能です。' },
      { question: 'Subagent の最大の特徴として正しいのはどれですか？', options: ['メインエージェントと共有 Context で動く', '別 Context で並走、本体 Context を汚さずに重い処理を任せられる', '自動で削除される', '必ずクラウドで動く'], correct: 1, explanation: 'Subagent は別 Context で並走し、本体 Context を汚さずに重い探索や分析を任せられます。' },
      { question: 'Subagent を作るコマンドはどれですか？', options: ['/clear', '/context', '/agents', '/skills'], correct: 2, explanation: '/agents コマンドで Subagent の管理画面を開き、作成・編集・削除ができます。' },
      { question: 'MCP サーバーのスコープとして挙げているものはどれですか？', options: ['Local / User / Project', 'Hot / Cold / Frozen', 'Public / Private / Confidential', 'Read / Write / Execute'], correct: 0, explanation: 'MCP サーバーのスコープは Local（現在のプロジェクトのみ）、User（自分の全プロジェクト）、Project（チーム共有）の3つです。' },
      { question: 'MCP サーバーが Context に与える影響として正しいのはどれですか？', options: ['影響なし', 'ツール定義が常駐し、繋いでいるだけで Context を消費する', '速度が速くなる', 'ファイルサイズが小さくなる'], correct: 1, explanation: 'MCP サーバーのツール定義は Context に常駐し、使っていなくても消費します。' },
      { question: 'Hooks の特徴として最も重要な点はどれですか？', options: ['速い', 'deterministic（必ず実行される）— CLAUDE.md がガイドラインなのに対して Hooks はシステムが強制', '無料', '自動更新される'], correct: 1, explanation: 'Hooks の最重要点は deterministic（必ず実行される）であること。CLAUDE.md と違い、システムレベルで強制されます。' },
      { question: 'PreToolUse Hook で exit code 2 を返すと何が起きますか？', options: ['ツール実行が高速化', 'ツール実行がブロックされる（stderr メッセージが Claude に返る）', 'ツール実行が2回行われる', '何も起きない'], correct: 1, explanation: 'exit code 2 を返すとツール実行がブロックされ、stderr メッセージが Claude に返されます。' },
      { question: 'Subagent でコミット前レビューを行う理由として正しいのはどれですか？', options: ['速度を上げるため', 'メインエージェントは実装した側のバイアスがあり、Subagent は別 Context でフレッシュな視点でレビューできるから', 'クラウド負荷を減らすため', '値段を下げるため'], correct: 1, explanation: 'メインエージェントは「実装した側」のバイアスがあり、Subagent は別 Context でフレッシュな視点からレビューできます。' },
      { question: 'Dispatch と Remote Control の違いとして正しいのはどれですか？', options: ['両者は同じ', 'Dispatch は Cowork に新規タスク投入、Remote Control は Code セッションの継続操作', 'Dispatch は無料、Remote Control は有料', 'Remote Control の方が古い機能'], correct: 1, explanation: 'Dispatch は Cowork に新規タスクを投げる機能、Remote Control は走っている Code セッションを継続操作する機能です。' }
    
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
        
        { q: 'Cowork はどのプランで使える？', a: 'Pro / Max / Team / Enterprise プランで利用可能です。Free プランでは使えません。' },
        { q: 'Cowork と Chat はどう使い分ける？', a: '考える・壁打ちは Chat、完成品が欲しい・大量ファイル処理は Cowork。迷ったら Chat で始めて、足りなければ Cowork に切り替えましょう。' },
        { q: 'フォルダ分離のルールは？', a: '案件メインフォルダは Claude に渡さず、必要分だけコピーした作業フォルダのみを Cowork に渡します。元データは絶対に触らせません。' },
        { q: 'Scheduled tasks はアプリが閉じていても動く？', a: 'いいえ。Cowork はローカルで動くため、実行時にデスクトップアプリが開いている必要があります。PC 起動時に保留タスクが実行されます。' },
        { q: 'モデルの使い分けは？', a: 'Sonnet をデフォルトにし、複雑な推論が必要な時だけ Opus、軽い処理は Haiku を使いましょう。' },
        { q: 'Dispatch はいつ使える？', a: '800社内では Claude モバイルアプリの利用申請中です。利用開始時期は別途案内されます。' },
        
        { q: 'Claude Code と Cowork はどう使い分ける？', a: 'Cowork は GUI ベースで成果物を作る協働ツール。Code はターミナル / IDE で複数ステップを自律実行し、CLAUDE.md + Hooks で品質を完全に固定できます。シンプルなタスクは Cowork、再現性が必要なら Code です。' },
        { q: 'CLAUDE.md はどう作る？', a: '/init コマンドで骨格を自動生成し、叩き台にして追加・修正していくのが効率的です。最初から完璧を目指さず、Course-correct した内容を追加していきましょう。' },
        { q: 'Context が足りなくなったら？', a: '/context で使用率を確認し、80% 超えたら /compact で整理。別タスクに切り替えるなら /clear でリセット。具体的な指示で Context を節約できます。' },
        { q: 'Subagent はどう使う？', a: '/agents コマンドで作成。コードレビュー、大規模探索、並列分析で活用。読取専用をデフォルトにして安全に運用しましょう。' },
        { q: 'Hooks と CLAUDE.md の違いは？', a: 'CLAUDE.md はガイドライン（ほぼ守る）、Hooks はルール（必ず実行）。「絶対に守らせたい」ルールは Hooks に設定します。' },
        { q: 'Remote Control はいつ使える？', a: '800社内では Claude モバイルアプリの利用申請中です。申請が下りた後で本格活用可能になります。' }
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
