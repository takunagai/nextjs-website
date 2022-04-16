import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <Layout
            title="ナガイ商店.com - 兵庫県川西市 Web 制作"
            description="概要です。"
        >
            <h1 className="text-3xl font-bold underline">
              見出し１です。
            </h1>
            <p className={styles.primary}>内容</p>
        </Layout>
    )
}
