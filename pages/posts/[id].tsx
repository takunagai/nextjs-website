/**
 * 確認用 URL: http://localhost:3000/posts/pre-rendering
 */
import Layout from '../../components/layout'
import {getAllPostIds, getPostData} from '../../lib/posts'
import { GetStaticProps, GetStaticPaths } from 'next'

// ★★TODO: 型の付け方間違ってる？
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
            {postData.title}
            <br/>
            {postData.id}
            <br/>
            {postData.date}
            <br/>
            {/* dangerouslySetInnerHTML は、ブラウザ DOM における innerHTML の React での代替。サニタイズ推奨 */}
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