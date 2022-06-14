import Layout from '../components/layout'
import type { NextPage } from "next"

const About: NextPage = () => {
    return (
        <Layout
            title="About"
            description="About の概要です。"
        >
            <p>About の内容</p>
        </Layout>
    )
}

export default About
