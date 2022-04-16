import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <Layout
            title="ナガイ商店.com - 兵庫県川西市 Web 制作"
            description="概要です。"
        >
            <p className={styles.primary}>内容</p>
        </Layout>
    )
}
