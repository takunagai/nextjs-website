import Image from 'next/image'
import Layout from '../components/layout'
import Button from '../components/Button'
import Alert from '../components/Alert'
import cn from 'classnames'
import type { NextPage } from "next"

const About: NextPage = () => {
    return (
        <Layout
            title="CSS関連"
            description="CSS関連のこと。"
        >
            <div className="stack-large">
                <h1>CSS 関連</h1>

                <section>
                    <h2>styled-jsx</h2>
                    <ul className="list-disc">
                        <li>Next.js には styled-jsx のサポートが組み込まれている</li>
                        <li>styled-components や emotion などの CSS-in-JS ライブラリも使用できる</li>
                        <li>コンポーネント内で CSS を記述でき、スコープが設定される(他コンポーネントは影響を受けない)</li>
                        <li>Next.js には、CSS と Sass のサポートが組み込まれており、.css ファイルと .scss ファイルをインポートできる</li>
                        <li>TailwindCSS などのCSSライブラリの使用もサポートされている</li>
                        <li className="foo">これは、styled-jsx でスタイリングしてみたもの</li>
                    </ul>
                    <style jsx>{`
                        .foo {color: blue;}
                    `}</style>
                </section>

                <section>
                    <h2>CSS Modules</h2>
                    <ul>
                        <li>コンポーネントレベルのスタイルに役立つ</li>
                        <li>コンポーネントファイル名.modules.css で</li>
                        <li>ユニークなクラス名が自動で充てられスコープされるので、他とのクラス名衝突の心配が不要</li>
                        <li>ページごとに最小限のCSSがロード。バンドルサイズが小さく</li>
                        <li>CSS モジュールはビルド時に JavaScript バンドルから抽出され、Next.js が自動的にロードされる css を生成する</li>
                    </ul>
                    <Button />
                </section>

                <section>
                    <h2>グローバルな CSS</h2>
                    <p>styles/global.css を作成し _app.tsx に読み込む(リスタート必要)</p>
                </section>

                <section>
                    <h2>PostCSS, TailwindCSS, Sass</h2>
                    <a href="https://nextjs.org/learn/basics/assets-metadata-css/styling-tips">Styling Tips - Assets, Metadata, and CSS | Learn Next.js</a>
                </section>

                <section>
                    <h2>classnames ライブラリ</h2>
                    <ul>
                        <li><a href="https://github.com/JedWatson/classnames" target="_blank" rel="noreferrer">classnames - github</a></li>
                        <li><a href="https://www.yoheim.net/blog.php?q=20180701" target="_blank" rel="noreferrer">React.js の classNameに、複数のクラスを簡単に指定する Classnames</a></li>
                        <Alert type="success">classnames ライブラリで条件でクラスを出し分けしたアラートコンポーネント</Alert>
                        <Alert type="error">classnames ライブラリで条件でクラスを出し分けしたアラートコンポーネント</Alert>
                    </ul>
                </section>

                <section>
                    <h2>Tailwind サンプル</h2>
                    <h3>カード</h3>
                    <div
                        className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                        <Image
                            className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
                            src="/images/sample-image-1.jpg" // Route of the image file
                            width={500} // Desired size with correct aspect ratio
                            height={375} // Desired size with correct aspect ratio
                            alt="代替テキスト"
                        />
                        <div className="text-center space-y-2 sm:text-left">
                            <div className="space-y-0.5">
                                <p className="text-lg text-black font-semibold">Erin Lindford</p>
                                <p className="text-slate-500 font-medium">Product Engineer</p>
                            </div>
                            <button
                                className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message
                            </button>
                        </div>
                    </div>
                    <h3>ダークモード</h3>
                    <div className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                        <div>
                        <span
                            className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                        </span>
                        </div>
                        <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes
                            Upside-Down</h3>
                        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                            The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even
                            works in outer space.
                        </p>
                    </div>
                    <h3>親要素の状態に応じてスタイル変更</h3>
                    <a href="#" className="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">New project</h3>
                      </div>
                      <p className="text-slate-500 group-hover:text-white text-sm">Create a new project from a variety of starting templates.</p>
                    </a>
                    <h3>リストマーカー</h3>
                    <ul role="list" className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-400">
                        <li>5 cups chopped Porcini mushrooms</li>
                        <li>1/2 cup of olive oil</li>
                        <li>3lb of celery</li>
                    </ul>
                    <h3>開閉パネル</h3>
                    <div className="max-w-lg mx-auto">
                        <details
                            className="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg"
                            open>
                            <summary className="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
                                Why do they call it Ovaltine?
                            </summary>
                            <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                                <p>The mug is round. The jar is round. They should call it Roundtine.</p>
                            </div>
                        </details>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default About
