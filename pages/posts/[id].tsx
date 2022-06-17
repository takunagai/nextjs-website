/**
 * 確認用 URL: http://localhost:3000/posts/pre-rendering
 */
import Layout from '../../components/layout'
import {getAllPostIds, getPostData} from '../../lib/posts'
import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Date from '../../components/date'

type Props = {
    postData: {
        id: string,
        title: string,
        date: string,
        contentHtml: string,
    }
}

/**
 * ページコンポーネント
 */
export default function Post({ postData }: Props) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            {postData.title}
            <br/>
            {postData.id}
            <br/>
            {/*{postData.date}*/}
            <Date dateString={postData.date}/>
            <br/>
            {/* dangerouslySetInnerHTML は、ブラウザ DOM における innerHTML の React での代替 */}
            {/* ★★TODO: サニタイズ推奨 https://hackmd.io/@euxn23/ByfD97Ujv */}
            {/*<div dangerouslySetInnerHTML={{ __html: sanitizer(postData.contentHtml) }} />*/}
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </Layout>
    )
}

/**
 * id に指定可能な値のリストを返す
 */
export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds() // パスの配列(pages/posts/[id].tsx によって定義されたパラメーターを含む)
    return {
        paths,
        fallback: false,
    }
}

/**
 * params.id で、ブログ記事に必要なデータを取得
 */
export const getStaticProps: GetStaticProps = async ({ params }) => {
    // const postData = await getPostData(params.id as string)
    const postData = await getPostData(params?.id as string) // await 必要、オプショナルチェーンで undefined の場合の対応
    return {
        props: {
            postData,
        },
    }
}