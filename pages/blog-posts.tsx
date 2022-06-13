import Layout from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import type {FC} from 'react'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData,
        },
    }
}

const BlogPosts: FC = ({ allPostsData }) => {
    return (
        <Layout
            title="BlogPosts"
            description="BlogPosts の概要です。"
        >
            <ul>
                {allPostsData.map(({id, date, title}) => (
                    <li key={id} className="mb-5">
                        <h3>{title}</h3>
                        <p>{id} / {date}</p>
                    </li>
                ))}
            </ul>
        </Layout>
    )
}

export default BlogPosts