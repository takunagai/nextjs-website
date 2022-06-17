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
            <ul>
                {allPostsData.map(({id, date, title}) => (
                    <li key={id} className="mb-5">
                        {/*{id}*/}
                        <h3>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                        </h3>
                        <p><Date dateString={date}/></p>
                    </li>
                ))}
            </ul>
        </Layout>
    )
}

export default BlogPosts
