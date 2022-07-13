import Image from "next/image";
import Layout from "../components/layout";
import Button from "../components/Button";
import Alert from "../components/Alert";
import {
  BeakerIcon,
  ChevronDoubleRightIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/solid";
import type { NextPage } from "next";
import { motion } from "framer-motion";

const CSS: NextPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Layout title="CSS関連" description="CSS関連のこと。">
        <div className="stack-large">
          <h1>CSS 関連</h1>

          <section>
            <h2>グローバルな CSS</h2>
            <p>
              styles/global.css を作成し _app.tsx に読み込む(リスタート必要)
            </p>
          </section>

          <section>
            <h2>styled-jsx</h2>
            <ul className="list-disc">
              <li>Next.js には styled-jsx のサポートが組み込まれている</li>
              <li>
                styled-components や emotion などの CSS-in-JS
                ライブラリも使用できる
              </li>
              <li>
                コンポーネント内で CSS
                を記述でき、スコープが設定される(他コンポーネントは影響を受けない)
              </li>
              <li>
                Next.js には、CSS と Sass のサポートが組み込まれており、.css
                ファイルと .scss ファイルをインポートできる
              </li>
              <li>TailwindCSS などのCSSライブラリの使用もサポートされている</li>
              <li className="foo">
                これは、styled-jsx でスタイリングしてみたもの
              </li>
            </ul>
            <style jsx>{`
              .foo {
                color: blue;
              }
            `}</style>
          </section>

          <section>
            <h2>CSS Modules</h2>
            <ul>
              <li>コンポーネントレベルのスタイルに役立つ</li>
              <li>コンポーネントファイル名.modules.css で</li>
              <li>
                ユニークなクラス名が自動で充てられスコープされるので、他とのクラス名衝突の心配が不要
              </li>
              <li>ページごとに最小限のCSSがロード。バンドルサイズが小さく</li>
              <li>
                CSS モジュールはビルド時に JavaScript
                バンドルから抽出され、Next.js が自動的にロードされる css
                を生成する
              </li>
            </ul>
            <p>
              <Button />
            </p>
          </section>

          <section>
            <h2>PostCSS, TailwindCSS, Sass</h2>
            <ul>
              <li>
                <a href="https://nextjs.org/learn/basics/assets-metadata-css/styling-tips">
                  Styling Tips - Assets, Metadata, and CSS | Learn Next.js
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2>classnames ライブラリ</h2>
            <ul>
              <li>
                <a
                  href="https://github.com/JedWatson/classnames"
                  target="_blank"
                  rel="noreferrer"
                >
                  classnames - github
                </a>
              </li>
              <li>
                <a
                  href="https://www.yoheim.net/blog.php?q=20180701"
                  target="_blank"
                  rel="noreferrer"
                >
                  React.js の classNameに、複数のクラスを簡単に指定する
                  Classnames
                </a>
              </li>
              <Alert type="success">
                classnames
                ライブラリで条件でクラスを出し分けしたアラートコンポーネント
              </Alert>
              <Alert type="error">
                classnames
                ライブラリで条件でクラスを出し分けしたアラートコンポーネント
              </Alert>
            </ul>
          </section>

          <hr />

          <section>
            <h2>Tailwind サンプル</h2>
            <h3>テーマカラー</h3>
            <p>
              tailwind.config.js の extend で設定。
              <a href="https://tailwindcss.com/docs/customizing-colors#color-object-syntax">
                » 公式ドキュメント
              </a>
            </p>
            <ul className="mt-5 text-xs">
              <li className="mb-1 bg-primary-100">bg-primary-100</li>
              <li className="mb-1 bg-primary-200">bg-primary-200</li>
              <li className="mb-1 bg-primary-light">bg-primary-light</li>
              <li className="mb-1 bg-primary-300">bg-primary-300</li>
              <li className="mb-1 bg-primary-400">bg-primary-400</li>
              <li className="mb-1 bg-primary">bg-primary (DEFAULT)</li>
              <li className="mb-1 bg-primary-500">bg-primary-500</li>
              <li className="mb-1 bg-primary-600">bg-primary-600</li>
              <li className="mb-1 bg-primary-dark">bg-primary-dark</li>
              <li className="mb-1 bg-primary-700">bg-primary-700</li>
              <li className="mb-1 bg-primary-800">bg-primary-800</li>
              <li className="mb-1 bg-primary-900">bg-primary-900</li>
            </ul>
            <h3 className="mt-5">カード</h3>
            <div className="mx-auto max-w-sm space-y-2 rounded-xl bg-white py-8 px-8 shadow-lg sm:flex sm:items-center sm:space-y-0 sm:space-x-6 sm:py-4">
              <Image
                className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0"
                src="/images/sample-image-1.jpg" // Route of the image file
                width={500} // Desired size with correct aspect ratio
                height={375} // Desired size with correct aspect ratio
                alt="代替テキスト"
              />
              <div className="space-y-2 text-center sm:text-left">
                <div className="space-y-0.5">
                  <p className="text-lg font-semibold text-black">
                    Erin Lindford
                  </p>
                  <p className="font-medium text-slate-500">Product Engineer</p>
                </div>
                <button className="rounded-full border border-purple-200 px-4 py-1 text-sm font-semibold text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                  Message
                </button>
              </div>
            </div>
            <h3 className="mt-5">ダークモード</h3>
            <div className="rounded-lg bg-white px-6 py-8 shadow-xl ring-1 ring-slate-900/5 dark:bg-slate-900">
              <div>
                <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg"></span>
              </div>
              <h4 className="mt-5 text-base font-medium tracking-tight text-slate-900 dark:text-white">
                Writes Upside-Down
              </h4>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                The Zero Gravity Pen can be used to write in any orientation,
                including upside-down. It even works in outer space.
              </p>
            </div>
            <h3 className="mt-5">親要素の状態に応じてスタイル変更</h3>
            <a
              href="#"
              className="group mx-auto block max-w-xs space-y-3 rounded-lg bg-white p-6 shadow-lg ring-1 ring-slate-900/5 hover:bg-sky-500 hover:ring-sky-500"
            >
              <div className="flex items-center space-x-3">
                <h4 className="text-sm font-semibold text-slate-900 group-hover:text-white">
                  New project
                </h4>
              </div>
              <p className="text-sm text-slate-500 group-hover:text-white">
                Create a new project from a variety of starting templates.
              </p>
            </a>
            <h3 className="mt-5">リストマーカー</h3>
            <ul
              role="list"
              className="list-disc space-y-3 pl-5 text-slate-400 marker:text-sky-400"
            >
              <li>5 cups chopped Porcini mushrooms</li>
              <li>1/2 cup of olive oil</li>
              <li>3lb of celery</li>
            </ul>

            <h3 className="mt-5">開閉パネル</h3>
            <div className="mx-auto max-w-lg">
              <details
                className="rounded-lg p-6 open:bg-white open:shadow-lg open:ring-1 open:ring-black/5 dark:open:bg-slate-900 dark:open:ring-white/10"
                open
              >
                <summary className="select-none text-sm font-semibold leading-6 text-slate-900 dark:text-white">
                  Why do they call it Ovaltine?
                </summary>
                <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  <p>
                    The mug is round. The jar is round. They should call it
                    Roundtine.
                  </p>
                </div>
              </details>
            </div>

            <h3>開閉パネル2</h3>
            <dl className="mt-2 divide-y divide-slate-500 dark:divide-slate-200">
              <details className="group py-4 marker:content-['']">
                <summary className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 dark:text-slate-300 [&::-webkit-details-marker]:hidden">
                  What does lifetime access” mean exactly?
                  <svg
                    className="mt-0.5 ml-4 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 12H6"></path>
                    <path className="group-open:hidden" d="M12 6v12"></path>
                  </svg>
                </summary>
                <div className="pt-6 pb-6">
                  <div className="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
                    <p>
                      Tailwind UI products are a{" "}
                      <strong>
                        one-time purchase, with no recurring subscription
                      </strong>
                      . When you purchase any Tailwind UI product, you have
                      access to all of the content in that product forever.
                    </p>
                  </div>
                </div>
              </details>
              <details className="group py-4 marker:content-['']" open={false}>
                <summary className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 dark:text-slate-300 [&::-webkit-details-marker]:hidden">
                  What does free updates includes?
                  <svg
                    className="mt-0.5 ml-4 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 12H6"></path>
                    <path className="group-open:hidden" d="M12 6v12"></path>
                  </svg>
                </summary>
                <div className="pt-6 pb-6">
                  <div className="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
                    <p>
                      When you purchase any Tailwind UI product, any
                      improvements we make to that product will always be free
                      for anyone who owns that product.
                    </p>
                    <p>
                      <strong>Individual templates:</strong> When you buy an
                      individual template, any improvements we make to that
                      template will be available to you as part of your original
                      purchase.
                    </p>
                    <p>
                      So if we fix a bug or upgrade the template to use the
                      latest version of Tailwind CSS or Next.js, you can
                      download an updated version of the template free of
                      charge.
                    </p>
                    <p>
                      Any <em>new</em> templates we release are considered
                      separate products, and can be purchased separately.
                    </p>
                    <p>
                      <strong>All-access:</strong> When you purchase an
                      all-access license, you get access to every site template
                      available <em>and</em> every component package available
                      today, plus any new templates or component packages we
                      release in the future at no additional cost.
                    </p>
                    <p>
                      This means that if we add a brand new social media website
                      template or new component package like “Journalism”,
                      access to those products are included in your original
                      purchase, with no upgrade cost.
                    </p>
                  </div>
                </div>
              </details>
            </dl>

            <h3 className="mt-5">カスタムクラス (@apply)</h3>
            <p>
              <a className="btn-primary no-underline" href="#">
                ボタン(.btn-primary)
              </a>
            </p>
            <div className="box__alert">
              <p>@apply で作成したカスタムクラス box__alert です。</p>
            </div>
          </section>
          <hr />
          <section>
            <h2>アイコンフォント (heroicons)</h2>
            <ul>
              <li>
                <ChevronDoubleRightIcon className="inline h-5 w-5 text-orange-500" />{" "}
                リスト項目1
              </li>
              <li>
                <ExclamationCircleIcon className="inline h-5 w-5 text-green-500" />{" "}
                リスト項目2
              </li>
              <li>
                <BeakerIcon className="inline h-5 w-5 text-blue-500" />{" "}
                リスト項目3
              </li>
            </ul>
          </section>
        </div>
      </Layout>
    </motion.div>
  );
};

export default CSS;
