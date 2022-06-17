# Next.js で Web サイト制作の練習

次：[next.js/examples at canary · vercel/next.js](https://github.com/vercel/next.js/tree/canary/examples)

### microcms

  * [microCMS + Next.jsでJamstackブログを作ってみよう | microCMSブログ](https://blog.microcms.io/microcms-next-jamstack-blog/)
  * [Next.js(SSG)でページネーションを実装してみよう | microCMSブログ](https://blog.microcms.io/next-pagination/)

### 公式サンプル

  * [with-storybook at canary](https://github.com/vercel/next.js/tree/canary/examples/with-storybook)
  * [next.js/examples/with-clerk at canary · vercel/next.js](https://github.com/vercel/next.
   js/tree/canary/examples/with-clerk)
  * [with-next-page-transitions at canary](https://github.com/vercel/next.js/tree/canary/examples/with-next-page-transitions)
  * [cms-wordpress at canary](https://github.com/vercel/next.js/tree/canary/examples/cms-wordpress)

### 小技 (UI、効果 他)

  * [React custom hooksでフェードインアニメーションを実装する | Keshiwo Tech Blog](https://keshiwo.jp/learning-custom-hooks-practical-edition/)
  * [React で URL props が変わったら fade アニメーションで 背景を変える](https://zenn.dev/anozon/articles/react-transition-props-bg)
  * フェードイン
    * [Reactでお手軽にIntersection Observerを使う](https://zenn.dev/himorishige/articles/e17b7d04fc7722)
    * [React scroll animations with Framer Motion - LogRocket Blog](https://blog.logrocket.com/react-scroll-animations-framer-motion/)

[Learn Next.js](https://nextjs.org/learn/foundations/about-nextjs) を TypeScript ベースで進めながら、Web サイト制作の仕方を学習していく。

[» デモ](https://nextjs-website-lemon.vercel.app/)

## ログ

* 2022-04-16 PhpStorm の Next.js プラグインで新規プロジェクト作成
* 2022-04-16 TypeScript 化
  - [今さら聞けないNext.jsをTypeScript化する方法【2021年4月版】- Zenn](https://zenn.dev/yukito0616/articles/fa41ea2d0cb308)
* 共通の Layout コンポーネントの作成
  - [Next.js入門（TypeScript版）- webOpixel](https://www.webopixel.net/javascript/1714.html)
* CSS
  - Tailwind CSS の導入
    - [Install Tailwind CSS with Next.js - Tailwind CSS](https://tailwindcss.com/docs/guides/nextjs)
  - [Next.jsとCSS - Qiita](https://qiita.com/tetsutaroendo/items/8e3351bc4bfbb419f662)
* github api からデータ取得し表示
  - [Github からユーザをフェッチする - JavaScript Info](https://ja.javascript.info/task/fetch-users)
  - [Basic Features: データ取得 - Next.js](https://nextjs-ja-translation-docs.vercel.app/docs/basic-features/data-fetching)
* TypeScript 化
  - [公式サンプル：next-learn/basics/typescript-final - github](https://github.com/vercel/next-learn/tree/master/basics/typescript-final)
  - [【初心者】React × TypeScript 基本の型定義](https://zenn.dev/ogakuzuko/articles/react-typescript-for-beginner)
  - [TypeScript で書く Next.js のページコンポーネント ++ Gaji-Laboブログ](https://blog.gaji.jp/2021/11/08/8476/)
  - [玖ノ型：約束の地へ｜カタ柱じゃなくてもできる、TypeScript の呼吸](https://zenn.dev/tkdn/books/type-breathing/viewer/9-promise-resolve-type)
  - [Next.js の InferGetStaticPropsType が便利](https://zenn.dev/catnose99/articles/7201a6c56d3c88)
  - [Next.js getStaticPropsの型の付け方、型定義について - Zenn](https://zenn.dev/eitches/articles/2021-0424-getstaticprops-type)
  - [TypeScriptの as って何です？(型アサーションについて) - Qiita](https://qiita.com/irico/items/9d71060e52ffc1e79962)
  - [型定義：DefinitelyTyped/DefinitelyTyped - github](https://github.com/DefinitelyTyped/DefinitelyTyped)
    - `npm install --save-dev @types/react-dom`

## 気づき

* デフォルトで静的生成
* 外部データの取得がある場合の静的生成
    - ページのコンテンツが外部データに依存する場合、getStaticProps (async 関数)
        * ビルド時(`next build`)にデータ取得
    * ISR と組み合わせると、古いページが再検証されている間、getStaticPropsがバックグラウンドで実行。更新されていれば新しいページがブラウザーに提供される
    * getStaticPropsは着信要求（クエリパラメーターやHTTPヘッダーなど）にアクセスできない。ページリクエストにアクセスする必要がある場合は、getStaticProps + ミドルウェアの使用を検討する
    * Next.js v12.1 以降は、[On-demand Revalidation (Beta)](https://nextjs.
      org/docs/basic-features/data-fetching/incremental-static-regeneration#on-demand-revalidation-beta)が使える
    - ページのパス(path)が外部データに依存する場合、getStaticPaths
        * データに基づきプリレンダリングする動的ルートを特定
        * クライアント側では呼び出されないため、データベースクエリを直接実行することも可能
        * HTML と JSONを生成し、CDN でキャッシュされる(高速)
        * 使うシーン
            - ページをレンダリングするのに必要な外部データがある(先に読み込みが必要)
* process.cwd() を使って Next.js が実行されたディレクトリを取得

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
