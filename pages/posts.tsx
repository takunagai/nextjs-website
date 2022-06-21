import Link from 'next/link'
import Layout from '../components/layout'
import Date from '../components/date'
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

// const Posts: NextPage = ({ allPostsData }: Props) => {
const Posts: NextPage<Props> = ({ allPostsData }: Props) => {
    return (
        <Layout
            title="ブログ (Markdown)"
            description="Markdown で書いた記事を読み込んで表示する"
        >
            <h1>ブログ (Markdown)</h1>
            <p>Markdown で書いた記事を読み込んで表示する</p>
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

export default Posts
