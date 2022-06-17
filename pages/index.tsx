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
            </div>
        </Layout>
    )
}

export default Home
