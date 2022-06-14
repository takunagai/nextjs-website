import Layout from '../components/layout'
import { getSortedPostsData } from '../lib/posts'

import type { NextPage } from "next"

type Props = {
    allPostsData: {
        id: string,
        date: string,
        title: string
    }[]
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        },
    }
}

// const BlogPosts: NextPage = ({ allPostsData }: Props) => {
const BlogPosts: NextPage<Props> = ({ allPostsData }: Props) => {
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