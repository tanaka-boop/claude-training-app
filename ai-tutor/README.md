# AIチューター Project セットアップ手順

## 概要
研修受講者がいつでも質問できる AI チューターを Claude.ai の Project 機能で実現します。
講師が1回設定すれば、受講者は設定不要でそのまま使えます。

## セットアップ手順（講師が実施、所要15分）

### 1. Claude.ai で新しい Project を作成
- claude.ai にログイン
- 左サイドバー「Projects」→「+ 新規作成」
- Project名: **「Claude研修 チューター」**

### 2. プロジェクト指示文を設定
- Project の「プロジェクト指示文を編集」をクリック
- `project-instructions.md` の内容をコピー＆ペースト

### 3. ナレッジにファイルを登録
以下のファイルをドラッグ＆ドロップで追加:
- `../curriculum.md` — カリキュラム全体（セクション構成・到達目標・ストーリー設計）

### 4. Team内で共有
- Project の「共有」→ Team メンバー全員がアクセスできるように設定

### 5. 研修アプリにURLを設定
- 作成した Project の URL をコピー
- 研修アプリの `js/app.js` 内の `AI_TUTOR_URL` 変数にURLを設定

## 受講者の使い方
1. 研修アプリで「AIチューターに質問する」ボタンをクリック
2. Claude.ai の研修チューター Project が開く
3. 自由に質問する（例:「Projectsの使い方がわからない」「このプロンプトを添削して」）

## ファイル構成
```
ai-tutor/
├── README.md                  # 本ファイル（セットアップ手順）
└── project-instructions.md    # Project指示文（コピペ用）
```
