# 習作：Next.js で静的な Web サイトを構築

TypeScript ベースで [Learn Next.js](https://nextjs.org/learn/foundations/about-nextjs) を 進めながら、Web サイト構築を学習。

[» デモ](https://nextjs-website-lemon.vercel.app/)

## Dependency

* typescript
* ESLint, Prettier
  - prettier-plugin-tailwindcss: クラス名のソート
  - eslint-plugin-storybook ★★未
* Storybook ★★未
* React, Next.js
* PostCSS
  - postcss-import: 外部 CSS 読み込み
  - tailwindcss/nesting: ネストで記述
  - Tailwind CSS
  - autoprefixer: ベンダープレフィックス付与
* Tailwind CSS プラグイン, Preline (UIコンポーネント集)
  - @tailwindcss/typography: バニラHTMLにスタイリング
  - @tailwindcss/forms: 基本フォームスタイル(オーバーライド)
  - @tailwindcss/aspect-ratio: Safari 15 対応
  - @tailwindcss/line-clamp: 指定行数以降を非表示
  - preline/plugin: Tailwind UI ライブラリ
* markdown
  - remark: Markdown の解析
  - remark-html: Markdown を HTML にコンパイル
  - gray-matter: フロントマターを解析
* Framer Motion: アニメーション
* next-themes: ダークテーマ用
* データフェッチ
  - swr
* ユーティリティ
  - date-fns: 日付の操作
  - classnames: クラス名を条件付きで結合
* コンポーネント
  - @etchteam/next-pagination: ページネーション
* 素材
  - @heroicons/react: アイコンフォント

## 設定ファイル

* package.json
    - 基本情報：プロジェクト名、概要、バージョン、プライベートか
    - "dependencies": 公開用パッケージ
    - "devDependencies": 開発用パッケージ
    - "scripts": node ショートカットコマンド登録
    - "browserslist": 対応ブラウザ指定
* tsconfig.json
    - "target": "ES2015"
    - "strict": true 他、コードで参照
* .eslintrc.json
    - 未編集。他に合わせて js にした方が良い？
* prettier.config.js (コードフォーマッター)
    - カンマあり、セミコロンなし、タブ幅
    - 追加：Tailwind 用プラグイン読み込み
* next.config.js
    - 追加：URL のホスト名を images.domains 構成に追加
* postcss.config.js (プラグイン)
    - postcss-import: @import が使えるように
    - tailwindcss/nesting: 入れ子で書けるように
    - tailwindcss: Tailwind CSS をプラグインとして使う
    - autoprefixer: ベンダープレフィックス自動付加。対応ブラウザは、package.json の"browserslist" に指定
* tailwind.config.js
    - darkMode: デフォルトの 'media' のままの実装なので不要
    - theme.container: デフォルトで center に、レスポンシブ余白
    - extend でデフォルト値を保持しつつ、新しい値を追加
      + theme.extend: テーマカラー "primary", "secondary"等を追加。グラデーションも作れる (暫定)
      + 既存プロパティの再設定でオーバーライド
    - typography 公式プラグイン設定
      + Markdown や CMS からフェッチした HTML をよしなにスタイリング。その設定
    - aspectRatio 公式プラグイン設定
      + Safari 14 でも aspectRatio に対応してくれる(Safari 14 不要なら、Tailwind デフォルトでサポート)
    - forms 公式プラグイン(読み込みのみ)
      + form 要素をユーティリティで簡単にオーバーライドできるようにするフォームスタイルの基本的なリセットを提供
    - preline (Tailwind 用 UI ライブラリ集)
    - mode: "jit" で Just in Time モードに
    - content で、コンパイルするファイルのパス(パターン)を指定

## Documentation

* 準備中



### 参考にしたサンプル

* [公式：next.js/examples at canary - vercel/next.js](https://github.com/vercel/next.js/tree/canary/examples)
  * [with-storybook](https://github.com/vercel/next.js/tree/canary/examples/with-storybook)
  * [with-clerk](https://github.com/vercel/next.js/tree/canary/examples/with-clerk)
  * [with-next-page-transitions](https://github.com/vercel/next.js/tree/canary/examples/with-next-page-transitions)
  * [cms-wordpress](https://github.com/vercel/next.js/tree/canary/examples/cms-wordpress)
