import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

const Home = () => {
    return (
        <Layout
            home
            title="ナガイ商店.com - 兵庫県川西市 Web 制作"
            description="概要です。"
        >
            <div className="stack-large">
                <section>
                    <h2>Accordion (PrelineUI)</h2>
                    <div className="hs-accordion-group">
                        <div className="hs-accordion active" id="hs-basic-heading-one">
                            <button
                                className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-600 dark:text-gray-200 dark:hover:text-gray-400"
                                aria-controls="hs-basic-collapse-one">
                                <svg
                                    className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round"/>
                                    <path d="M8.12421 13.36V2.35999" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round"/>
                                </svg>
                                <svg
                                    className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round"/>
                                </svg>
                                Accordion #1
                            </button>
                            <div id="hs-basic-collapse-one"
                                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                                aria-labelledby="hs-basic-heading-one">
                                <p className="text-gray-800 dark:text-gray-200">
                                    <em>This is the third items accordion body.</em> It is hidden by default, until the
                                    collapse plugin adds the appropriate classes that we use to style each element.
                                    These classes control the overall appearance, as well as the showing and hiding via
                                    CSS transitions.
                                </p>
                            </div>
                        </div>

                        <div className="hs-accordion" id="hs-basic-heading-two">
                            <button
                                className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-600 dark:text-gray-200 dark:hover:text-gray-400"
                                aria-controls="hs-basic-collapse-two">
                                <svg
                                    className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round"/>
                                    <path d="M8.12421 13.36V2.35999" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round"/>
                                </svg>
                                <svg
                                    className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round"/>
                                </svg>
                                Accordion #2
                            </button>
                            <div id="hs-basic-collapse-two"
                                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                aria-labelledby="hs-basic-heading-two">
                                <p className="text-gray-800 dark:text-gray-200">
                                    <em>This is the third item's accordion body.</em> It is hidden by default, until the
                                    collapse plugin adds the appropriate classes that we use to style each element.
                                    These classes control the overall appearance, as well as the showing and hiding via
                                    CSS transitions.
                                </p>
                            </div>
                        </div>

                        <div className="hs-accordion" id="hs-basic-heading-three">
                            <button
                                className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-600 dark:text-gray-200 dark:hover:text-gray-400"
                                aria-controls="hs-basic-collapse-three">
                                <svg
                                    className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round"/>
                                    <path d="M8.12421 13.36V2.35999" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round"/>
                                </svg>
                                <svg
                                    className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round"/>
                                </svg>
                                Accordion #3
                            </button>
                            <div id="hs-basic-collapse-three"
                                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                aria-labelledby="hs-basic-heading-three">
                                <p className="text-gray-800 dark:text-gray-200">
                                    <em>This is the third item's accordion body.</em> It is hidden by default, until the
                                    collapse plugin adds the appropriate classes that we use to style each element.
                                    These classes control the overall appearance, as well as the showing and hiding via
                                    CSS transitions.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
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
                    <p className="lead mt-5">★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わず生意気たたという口ましだ。勝手たたのましはでまた箱のダミーコピーです上手どものときではさっさと俄たますて、みんなまでぶんを弾いがっことだまし。立っすぎそれは間がひどくたて今の夜中のかっこ動きが、たるめるで片手も一生しがこいまし。こどもは二わから狸のようを出て来う。助けはゴーシュかっこうたり何が待ってだしない。マッ子をょっとにしから虎を片手ダミーコピーですのようを教えてかっこうに云いてごうごうとゴがしててるた。ふっとダミーコピーですぶるぶる虎にゴーシュが合わですた。それそうに別をひきて諸君へいった(300文字)。</p>
                </section>

                <section className="alignwide">
                    <h2>幅広：見出し2です。</h2>
                    <p className="lead mt-5">★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わず生意気たたという口ましだ。勝手たたのましはでまた箱のダミーコピーです上手どものときではさっさと俄たますて、みんなまでぶんを弾いがっことだまし。立っすぎそれは間がひどくたて今の夜中のかっこ動きが、たるめるで片手も一生しがこいまし。こどもは二わから狸のようを出て来う。助けはゴーシュかっこうたり何が待ってだしない。マッ子をょっとにしから虎を片手ダミーコピーですのようを教えてかっこうに云いてごうごうとゴがしててるた。ふっとダミーコピーですぶるぶる虎にゴーシュが合わですた。それそうに別をひきて諸君へいった(300文字)。</p>
                </section>

                <section className="alignfull">
                    <h2>全幅：見出し2です。</h2>
                    <p className="lead mt-5">★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わず生意気たたという口ましだ。勝手たたのましはでまた箱のダミーコピーです上手どものときではさっさと俄たますて、みんなまでぶんを弾いがっことだまし。立っすぎそれは間がひどくたて今の夜中のかっこ動きが、たるめるで片手も一生しがこいまし。こどもは二わから狸のようを出て来う。助けはゴーシュかっこうたり何が待ってだしない。マッ子をょっとにしから虎を片手ダミーコピーですのようを教えてかっこうに云いてごうごうとゴがしててるた。ふっとダミーコピーですぶるぶる虎にゴーシュが合わですた。それそうに別をひきて諸君へいった(300文字)。</p>
                </section>
            </div>
        </Layout>
    )
}

export default Home
