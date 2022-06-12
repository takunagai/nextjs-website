import Image from 'next/image'
import Layout from '../components/layout'
import type {FC} from 'react'

const About: FC = () => {
    return (
        <Layout
            title="サンプル"
            description="サンプルです。"
        >
            <h2>画像 (next/image)</h2>
            <ul>
                <li>画像コンポーネント next/image は、HTML img 要素の拡張で、最新のWeb用に進化したもの</li>
                <li>デフォルトで WebP 化 (ブラウザがサポートしていれば)、デバイスのモニタサイズに合わせて画像をサイズ変更、最適化しての提供</li>
                <li>自動画像最適化は、任意の画像ソースで機能。画像が CMS などの外部データソースによってホストされている場合でも、最適化できる</li>
            </ul>
            <Image
                src="/images/sample-image-1.jpg" // Route of the image file
                width={500} // Desired size with correct aspect ratio
                height={375} // Desired size with correct aspect ratio
                alt="代替テキスト"
            />
        </Layout>
    )
}

export default About
