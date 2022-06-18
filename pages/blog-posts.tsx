import Layout from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

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
            <h1>ブログ</h1>
            <ul className="stack-small">
                {allPostsData.map(({ id, date, title }) => (
                    <li key={id}>
                        {/*{id}*/}
                        <h2 className="font-size:base">
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                        </h2>
                        <p className="font-size:small"><Date dateString={date}/></p>
                    </li>
                ))}
            </ul>
        </Layout>
    )
}

export default BlogPosts
