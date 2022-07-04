import Image from 'next/image'
import Layout from '../components/layout'
// import styles from '../styles/Home.module.css'

const Home = () => {
    return (
        <Layout
            home
            title="ナガイ商店.com - 兵庫県川西市 Web 制作"
            description="概要です。"
        >
            <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
                <h1 className="block text-2xl font-bold text-white sm:text-4xl">Cover Page</h1>
                <p className="mt-3 text-lg text-gray-300">Cover is a one-page template for building simple and beautiful
                    home pages using Tailwind CSS.</p>
                <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
                    <a className="btn btn--primary btn--icon shadow-md rounded-full w-full sm:w-auto"
                       href="https://github.com/htmlstreamofficial/preline/tree/main/examples">
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                        Get the source code
                    </a>
                    <a className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3.5 text-center border border-2 border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-300 hover:text-white hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition py-3 px-4"
                       href="#">
                        <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M11.2792 1.64001L5.63273 7.28646C5.43747 7.48172 5.43747 7.79831 5.63273 7.99357L11.2792 13.64"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        Back to examples
                    </a>
                </div>
            </div>

            <div className="stack-large">
                <section>
                    <p className="text-center">
                        <Image
                            src="/images/sample-image-1.jpg" // Route of the image file
                            width={500} // Desired size with correct aspect ratio
                            height={375} // Desired size with correct aspect ratio
                            alt="代替テキスト"
                        />
                    </p>

                    <h2>見出し2です。</h2>
                    <p className="lead mt-5">★★ダミーコピーです手は<a href="#">おっかさんの演奏硝子屋</a>をセロに思ったばこだた。</p>
                    <p><ruby><strong>重ね合わせコンテキスト</strong><rp> (</rp><rt>Stacking context</rt><rp>) </rp></ruby>それから思わず生意気たたという口ましだ。勝手たたのましはでまた箱のダミーコピーです上手どものときではさっさと俄たますて、みんなまでぶんを弾いがっことだまし。立っすぎそれは間がひどくたて今の夜中のかっこ動きが、たるめるで片手も一生しがこいまし。こどもは二わから狸のようを出て来う。</p>
                    <p>それから思わず生意気たたという口ましだ。勝手たたのましはでまた箱のダミーコピーです上手どものときではさっさと俄たますて、みんなまでぶんを弾いがっことだまし。立っすぎそれは間がひどくたて今の夜中のかっこ動きが、たるめるで片手も一生しがこいまし。こどもは二わから狸のようを出て来う。</p>
                </section>

                <section className="alignwide">
                    <h2>幅広：見出し2です。</h2>
                    <p className="mt-5">★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わず生意気たたという口ましだ。勝手たたのましはでまた箱のダミーコピーです上手どものときではさっさと俄たますて、みんなまでぶんを弾いがっことだまし。立っすぎそれは間がひどくたて今の夜中のかっこ動きが、たるめるで片手も一生しがこいまし。こどもは二わから狸のようを出て来う。助けはゴーシュかっこうたり何が待ってだしない。マッ子をょっとにしから虎を片手ダミーコピーですのようを教えてかっこうに云いてごうごうとゴがしててるた。ふっとダミーコピーですぶるぶる虎にゴーシュが合わですた。それそうに別をひきて諸君へいった(300文字)。</p>
                </section>

                <section className="alignfull">
                    <h2>全幅：見出し2です。</h2>
                    <p className="mt-5">★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わず生意気たたという口ましだ。勝手たたのましはでまた箱のダミーコピーです上手どものときではさっさと俄たますて、みんなまでぶんを弾いがっことだまし。立っすぎそれは間がひどくたて今の夜中のかっこ動きが、たるめるで片手も一生しがこいまし。こどもは二わから狸のようを出て来う。助けはゴーシュかっこうたり何が待ってだしない。マッ子をょっとにしから虎を片手ダミーコピーですのようを教えてかっこうに云いてごうごうとゴがしててるた。ふっとダミーコピーですぶるぶる虎にゴーシュが合わですた。それそうに別をひきて諸君へいった(300文字)。</p>
                </section>

                <section>
                    <h2>メモ</h2>
                    <ul>
                        <li>PostCSS</li>
                        <li>TailwindCSS
                            <ul>
                                <li>jit ([] で個別の値で設定できる、calc() も使える、疑似要素使える)</li>
                                <li>preline (UI ライブラリ)</li>
                                <li>heroicons (アイコンフォント)</li>
                                <li>ダークモード</li>
                            </ul>
                        </li>
                        <li>autoprefixer, import, nesting</li>
                        <li>Every Layout</li>
                        <li>Markdown で投稿 → HTML化して表示(remark)、フロントマター(gray-matter)</li>
                        <li>フェッチ</li>
                        <li>fetch メソッド</li>
                        <li>swr</li>
                    </ul>
                </section>
            </div>
        </Layout>
    )
}

export default Home
