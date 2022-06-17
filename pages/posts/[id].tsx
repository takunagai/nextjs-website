/**
 * 確認用 URL: http://localhost:3000/posts/pre-rendering
 */
import Layout from '../../components/layout'
import {getAllPostIds, getPostData} from '../../lib/posts'

/**
 * ページコンポーネント
 */
export default function Post({ postData }) {
    return (
        <Layout>
            {postData.title}
            <br/>
            {postData.id}
            <br/>
            {postData.date}
        </Layout>
    )
}

/**
 * id に指定可能な値のリストを返す
 */
export async function getStaticPaths() {
    const paths = getAllPostIds() // パスの配列(pages/posts/[id].tsx によって定義されたパラメーターを含む)
    return {
        paths,
        fallback: false,
    }
}

/**
 * params.id で、ブログ記事に必要なデータを取得
 */
export async function getStaticProps({ params }) {
    const postData = getPostData(params.id)
    return {
        props: {
            postData,
        },
    }
}