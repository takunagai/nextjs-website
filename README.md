# TODO

* Images を img にしてるのを直す

# 習作：Next.js で静的な Web サイトを構築

TypeScript ベースで [Learn Next.js](https://nextjs.org/learn/foundations/about-nextjs) を 進めながら、Web サイト構築を学習。

[» デモ](https://nextjs-website-lemon.vercel.app/)

## ToDo

* 修正：ページネーション (@etchteam/next-pagination) a タグ重複、表示崩れ

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
  - yet-another-react-lightbox: Lightbox風
* 素材
  - @heroicons/react: アイコンフォント
  - react-icons: アイコンフォント(色んなアイコン内包)

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
    - darkMode: デフォルトの 'media' のままの実装なので不要 → 'class' に変更
    - theme.container: デフォルトで center に。レスポンシブ余白
    - extend でデフォルト値を保持しつつ、新しい値を追加
      + theme.extend: テーマカラー "primary", "secondary"等を追加。グラデーションも作れる (暫定)
      + 既存プロパティの再設定でオーバーライド
    - typography 公式プラグイン設定
      + Markdown や CMS からフェッチした HTML をよしなにスタイリング。その設定
    - aspectRatio 公式プラグイン設定
      + Safari 14 でも aspectRatio に対応してくれる(Safari 14 不要なら、Tailwind デフォルトでサポート)
      + @tailwindcss/aspect-ratio との競合を避けるため無効化するコードが必要
    - forms 公式プラグイン(読み込みのみ)
      + form 要素をユーティリティで簡単にオーバーライドできるようにするフォームスタイルの基本的なリセットを提供
    - preline (Tailwind 用 UI ライブラリ集)
    - mode: "jit" で Just in Time モードに (例：text-[#926a6a], before:content-['›'])
    - content で、コンパイルするファイルのパス(パターン)を指定

## ダークテーマの実装

* ダークテーマの状態は、layout.tsx に持たせてある
    - → Header.tsx → ModeSwicher.tsx (切り替えボタンコンポーネント)
* デフォルトは color-scheme: normal; (サポートしない→ブラウザデフォルトテーマに)
* color-scheme(ページ側の主張) > prefers-color-scheme(ユーザー側の主張)
* デフォルトテーマは "system" (デフォルト)
* html 要素(:root) にダークなら `class="dark style="color-scheme: dark;"`、ライトなら `class="light style="color-scheme: light;"` が付く
    - → ダークモードなら、`dark:bg-black` などが有効になる

### 参照

* [color-scheme - CSS - MDN](https://developer.mozilla.org/ja/docs/Web/CSS/color-scheme)
* [このページの色をかけた魂の戦い - Zenn](https://zenn.dev/uhyo/articles/css-color-adjustment-1) color-scheme の詳細
* [Dark Mode - Tailwind CSS](https://tailwindcss.com/docs/dark-mode#basic-usage)
* [next-themes - npm](https://www.npmjs.com/package/next-themes) Tailwind 用設定の説明もあり
* [Next.js と Tailwind でモード切替えボタンを作成 - Zenn](https://zenn.dev/taka_shino/articles/a6c176da799c91)
* [Next.js と tailwind でダークモードを実装する - Qiita](https://qiita.com/10mi8o/items/4be3a69731aed0692e40)

import { useTheme }

## Documentation

* 準備中



### 参考にしたサンプル

* [公式：next.js/examples at canary - vercel/next.js](https://github.com/vercel/next.js/tree/canary/examples)
  * [with-storybook](https://github.com/vercel/next.js/tree/canary/examples/with-storybook)
  * [with-clerk](https://github.com/vercel/next.js/tree/canary/examples/with-clerk)
  * [with-next-page-transitions](https://github.com/vercel/next.js/tree/canary/examples/with-next-page-transitions)
  * [cms-wordpress](https://github.com/vercel/next.js/tree/canary/examples/cms-wordpress)
