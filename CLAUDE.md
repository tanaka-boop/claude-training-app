# Claude 研修アプリ - プロジェクト CLAUDE.md

## プロジェクト概要
Claude入門者（非エンジニア・ビジネス職＝コンサルタント）向けの研修Webアプリ。  
HTML/CSS/JS のみで構成（依存パッケージなし）。ダブルクリックでブラウザ起動。

## ファイル構成
```
claude-training-app/
├── index.html              - SPA メインHTML（開発用）
├── css/
│   └── style.css           - スタイルシート
├── js/
│   ├── app.js              - ルーティング・状態管理・ページ描画
│   ├── modules.js          - 学習コンテンツデータ（MODULES配列）
│   └── quiz.js             - QuizEngine クラス
├── assets/
│   └── ehi-logo.png        - EHI ロゴ
├── ai-tutor/
│   ├── README.md           - AIチューター セットアップ手順
│   └── project-instructions.md - Claude.ai Project 指示文
├── curriculum.md            - カリキュラム & 実装計画
├── CLAUDE.md                - プロジェクト開発ルール（本ファイル）
├── build-dist.ps1           - 配布用フォルダ生成スクリプト
└── build-dist.bat           - 同上（bat版・非推奨）
```

### 配布用フォルダ（研修者に配る）
```
Claude Skill Up/
├── START.html              - 研修者がダブルクリックで起動
├── css/style.css
├── js/app.js, modules.js, quiz.js
└── assets/ehi-logo.png
```
- `build-dist.ps1` を実行すると自動生成される
- 開発用ファイル（CLAUDE.md, curriculum.md, ai-tutor/, build-dist.*）は含まれない
- `index.html` → `START.html` にリネームされる（研修者が直感的に分かるように）

## デザイン原則（必ず遵守）

### カラー
- メインカラー: `#127D70`（EHI ティールグリーン）
- 背景: `#f7faf9`、カード: `#ffffff`
- **カラフルにしない**。モノトーン＋アクセント1色が基本
- 色は既存の CSS 変数（`--primary`, `--accent`, `--text-secondary` 等）を使用

### ビジュアル表現
- **文字だらけにしない**。インフォグラフィック的に表現できるところは図解・チャート・フロー図を活用
- テーブルよりカード型レイアウト、箇条書きよりアイコン付きグリッドを優先
- CSS のみで表現（外部画像・ライブラリ不使用）
- 装飾は控えめ。情報の構造を視覚的に伝えることが目的

### コンテンツのビジュアル化で使える CSS コンポーネント
**基本コンポーネント：**
- `.visual-flow` - 横型フロー図（ステップ間を矢印でつなぐ）
- `.visual-grid` / `.visual-grid.cols-2` / `.cols-3` - アイコン付きカードグリッド
- `.visual-comparison` - 左右対比カード（Before/After、旧/新）
- `.visual-stat` - 数値ハイライトボックス
- `.visual-steps` - 番号付きステップカード（縦型）※下記「CSSクラス名」注意参照
- `.visual-highlight-card` - 重要ポイントを囲むカード
- `.tip-box`, `.info-box`, `.warning-box`, `.try-box`, `.example-box` - 装飾ボックス

**ストーリー駆動コンポーネント（コンサルタント向け）：**
- `.visual-matrix` - 2×2 ポジショニングマトリクス（軸ラベル付き、`.active`/`.muted` でセル強調）
- `.visual-before-after` - Before/After 変容図（矢印付き左右比較）
- `.visual-equation` - 数式・方程式（`.eq-term` × `.eq-term` = `.eq-result`）
- `.visual-big-message` - 大型メッセージカード（アイコン + 太字メッセージ + サブテキスト）
- `.visual-funnel` - ファンネル図（段階的に幅が狭まる + `.funnel-drop` で離脱ポイント表示）

**構造図コンポーネント：**
- `.visual-product-map` - プロダクトマップ（`.product-map-row.full` / `.split` + `.product-group.browser` / `.desktop` / `.office`）
- `.visual-mapping` - マッピングテーブル（`.mapping-header` + `.mapping-row`（`.mapping-from` → `.mapping-to`））

### ページフロー（重要）
```
起動 → ランディングページ（renderLanding / モード選択）
         ├→ 研修モード ホーム（renderPresentHome / 800ロゴ + モジュールカード）
         │    └→ スライド表示（renderPresentModule / 1セクション=1画面）
         └→ 自習モード ホーム（renderHome / 学習・クイズ・リンク・FAQ導線）
              └→ 各コンテンツページ（学習コンテンツ / クイズ / リンク集 / FAQ）
```
- **ランディングページ**: アプリ起動時に常に最初に表示。研修モード / 自習モードの選択画面
- **研修モード**: スライド型（1セクション=1画面、講師投影用）
- **自習モード**: Webサイト型（ヘッダーナビ、サイドバー目次）
- **AIチューター**: フローティングボタンで全画面から常時アクセス可能（Claude.ai Project連携）
- レスポンシブ: PC中心、タブレットも対応

### テキスト
- 全て日本語
- 簡潔に。1段落は2〜3文まで
- 専門用語は初出時に簡単な説明を添える
- **研修受講者にネガティブな内容を入れない**（研修提供者側の内部事情・組織課題はコンテンツに含めない。受講者のメリット・成長に焦点を当てる）

## AIチューター

### 仕組み
- Claude.ai の **Project** 機能を活用
- `app.js` の `AI_TUTOR_URL` に Project URL を設定
- フローティングボタン（`.tutor-fab`）が全画面に常時表示される
- クリックすると Claude.ai の Project が新しいタブで開く

### 設定
- URL: `app.js` 冒頭の `AI_TUTOR_URL` 定数
- Project 指示文: `ai-tutor/project-instructions.md`
- セットアップ手順: `ai-tutor/README.md`

### プライバシー
- ツールチップで「会話は他のメンバーには見えません」と表示
- Project は Team 共有だが、各ユーザーの会話履歴は本人のみ閲覧可能

## 開発ルール
- 新しい npm パッケージは追加しない
- 外部CDNは使わない（オフライン動作のため）
- コンテンツ変更は modules.js のみで完結させる
- JS/CSS を変更したら `index.html` のキャッシュバスティング `?v=N` を必ずインクリメントする
- 配布フォルダを更新するときは `build-dist.ps1` を再実行する

## ターゲットユーザー
- **職種**: コンサルタント（非エンジニア・ビジネス職）
- **表現の好み**: 構造化・MECE・2×2マトリクス・Before/After・縦軸横軸を意識した図解
- **コンテンツ設計**: 各セクションに「何を伝えたいか（ワンメッセージ）」を先に決め、それに最適なビジュアル構造を選ぶ（形式で選ばない）

## 確認・報告のルール

### 動作確認
- ユーザーは `index.html` をダブルクリック（`file://` プロトコル）でブラウザ起動している
- プレビューサーバー（localhost）で確認した場合は、ローカルファイルでも動作するか確認すること
- localStorage の残存データが影響しないか確認すること（特にモード保存）

### 変更の報告
- UI要素を追加・移動した場合、**どの画面の、どの位置に、何を配置したか**を具体的に報告
- スクロールが必要な場所に配置した場合は「スクロールが必要です」と明示
- ナビゲーションから直接アクセスできない機能は「見つけにくい可能性」を先に提示

### 曖昧な指示を受けた場合
- 「〇〇ページ」「〇〇の画面」と言われた場合、上記「ページフロー」の一覧を参照して**どの画面を指すか確認してから**作業する
- 要件が曖昧な場合は、自己解釈で実装せず、選択肢を提示して確認を取る
- 特に「モード間で何が違うか」「どの画面に配置するか」は確認必須

## 開発プロセス（アジャイル）

### サンプル先行の原則
- 同じパターンを **3つ以上に適用する前に**、1つ目を見せてユーザーの合意を取る
- 例: 16セクションのビジュアル化 → まず1セクション作って方向性を確認 → OKなら横展開

### 変更粒度
- 1回の作業単位は「1つの画面」または「1つの機能」に絞る
- CSS追加とコンテンツ書き換えを同時にやらない。CSS → 確認 → コンテンツの順

### 設計の事前提示
- 複数箇所を変更する場合、**実装前に設計案（テキスト）を提示**して合意を取る
- 例:「S1-1はマトリクスで表現、S1-2はBefore/Afterで表現…」と一覧を先に見せる
- ユーザーが「一気にやって」と明示した場合のみ、まとめて実装してよい

### 完了の定義
- コード変更 + `?v=N` インクリメント + ブラウザ確認 + 変更箇所の報告 で1セット
- 報告時は「どの画面の、どの位置に、何を変更したか」を明示する

## カリキュラム同期ルール
- **正（Single Source of Truth）**: `js/modules.js`（MODULES 配列）
- **計画ファイル**: `curriculum.md`（アプリ直下）
- modules.js のカリキュラム構成（回・セクション・タイトル・種別・到達目標）を変更した場合、**必ず計画MDのカリキュラムセクションも同期更新する**
- 計画MDのカリキュラムを変更した場合、**必ず modules.js も同期更新する**
- 同期対象: 回タイトル、セクション一覧（タイトル・種別・ストーリー）、到達目標、クイズ問数
- CSSコンポーネントを追加した場合、計画MDの「ビジュアルコンポーネント」セクションと本ファイルの「CSSコンポーネント」セクション両方を更新する

## MODULES 配列の必須プロパティ
各モジュール（セッション）には以下のプロパティが必須：
```javascript
{
  id: 'session-N',
  title: '第N回：タイトル',
  shortTitle: '第N回',
  description: '説明文',
  objectives: ['到達目標1', ...],
  sections: [{ title, type, content }, ...],
  quiz: [{ question, options, correct, explanation }, ...],
  selfStudyResources: {        // ← 必須！リンク集・FAQのデータソース
    links: [{ title, url, desc, category }, ...],
    faq: [{ q, a }, ...]
  }
}
```
**注意**: `selfStudyResources` を省略するとリンク集・FAQページが空になる。

## 過去のトラブルと再発防止策

### 1. CSSクラス名の不一致（レイアウト崩れ）
- **問題**: modules.js のHTMLで `.step-item` / `.step-number` / `.step-content` を使用したが、CSS には `.visual-step-item` / `.step-marker` / `.step-body` しか定義されておらず、レイアウトが崩れた
- **対策**: modules.js でHTMLを書くとき、**必ず style.css に該当クラスの定義があるか確認する**。新しいクラス名を使う場合は CSS に定義を追加する。現在は両方のパターンをエイリアスとして定義済み

### 2. 日本語ファイル名の文字化け（配布フォルダ）
- **問題**: PowerShell で日本語ファイル名（`Claude スキルアップ.html`）をコピーしたが、Windows エクスプローラーで文字化けした
- **対策**: **配布用ファイル名は英語を使う**（`START.html`）。日本語ファイル名は環境依存で文字化けリスクがある

### 3. 研修受講者へのネガティブコンテンツ
- **問題**: 「なぜ今、この研修をやるのか」セクションに、組織内のAI活用格差など提供者側の内部事情を記載してしまった
- **対策**: 研修コンテンツは**受講者目線で、メリット・成長に焦点**を当てる。提供者側の意図（組織課題の解決など）をコンテンツに直接入れない

### 4. selfStudyResources の欠落（リンク集・FAQ空白）
- **問題**: modules.js を書き換えた際に `selfStudyResources` プロパティを入れ忘れ、リンク集・FAQページが空になった
- **対策**: 上記「MODULES 配列の必須プロパティ」を参照し、**全モジュールに selfStudyResources を必ず含める**

### 5. キャッシュバスティング忘れ
- **問題**: CSS/JS を変更したが `?v=N` をインクリメントし忘れ、ブラウザに古いファイルがキャッシュされた
- **対策**: JS/CSS を変更したら **必ず** `index.html` の `?v=N` をインクリメントする（開発ルール参照）

### 6. `position: fixed` が効かない（CSS containing block）
- **問題**: サイドバーに `position: fixed; right: 0` を指定したが、ビューポート基準にならず本文と重なった。原因は祖先要素の `.fade-in` アニメーションが `transform: translateY(0)` を `forwards` で保持しており、新しい containing block が生成されていたこと
- **対策**:
  - `position: fixed` が期待通り動かない場合、**まず祖先要素の computed style を確認する**（`transform`, `filter`, `will-change`, `contain` のいずれかが `none` 以外だと containing block が変わる）
  - `animation-fill-mode: forwards` で `transform` が残るケースにも注意
  - **CSSを変更する前に `getBoundingClientRect()` / `getComputedStyle()` で実測値を取得し、仮説を立ててから修正する**（手当たり次第に変更しない）
