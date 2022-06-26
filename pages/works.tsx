import Image from 'next/image'
import Layout from '../components/layout'
import type { NextPage } from "next"

const Works: NextPage = () => {
    return (
        <Layout
            title="Works"
            description="Works の概要です。"
        >
            <div className="stack-large">
                <h1>Works</h1>
                <p>Works の内容</p>
                <div className="grid grid-cols-4 gap-4">
                    <div>
                        <Image
                            src="/images/sample-image-1.jpg"
                            width={500}
                            height={375}
                            alt="代替テキスト"
                        />
                        <p>★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱のダミーコピーです。</p>
                    </div>
                    <div>
                        <Image
                            src="/images/sample-image-1.jpg"
                            width={500}
                            height={375}
                            alt="代替テキスト"
                        />
                        <p>★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱のダミーコピーです。</p>
                    </div>
                    <div>
                        <Image
                            src="/images/sample-image-1.jpg"
                            width={500}
                            height={375}
                            alt="代替テキスト"
                        />
                        <p>★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱のダミーコピーです。</p>
                    </div>
                    <div>
                        <Image
                            src="/images/sample-image-1.jpg"
                            width={500}
                            height={375}
                            alt="代替テキスト"
                        />
                        <p>★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱のダミーコピーです。</p>
                    </div>
                    <div>
                        <Image
                            src="/images/sample-image-1.jpg"
                            width={500}
                            height={375}
                            alt="代替テキスト"
                        />
                        <p>★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱のダミーコピーです。</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Works
