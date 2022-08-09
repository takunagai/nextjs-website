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

## Documentation

* 準備中



### 参考にしたサンプル

* [公式：next.js/examples at canary - vercel/next.js](https://github.com/vercel/next.js/tree/canary/examples)
  * [with-storybook](https://github.com/vercel/next.js/tree/canary/examples/with-storybook)
  * [with-clerk](https://github.com/vercel/next.js/tree/canary/examples/with-clerk)
  * [with-next-page-transitions](https://github.com/vercel/next.js/tree/canary/examples/with-next-page-transitions)
  * [cms-wordpress](https://github.com/vercel/next.js/tree/canary/examples/cms-wordpress)
