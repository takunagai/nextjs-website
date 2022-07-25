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
* Tailwind CSS, Preline (UIコンポーネント集)
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


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
