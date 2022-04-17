import Layout from '../components/layout'
import type {FC} from 'react'

const About: FC = () => {
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
