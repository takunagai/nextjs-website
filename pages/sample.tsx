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

            <hr />

            <h2>styled-jsx</h2>
            <ul>
                <li>Next.js には styled-jsx のサポートが組み込まれている</li>
                <li>styled-components や emotion などの CSS-in-JS ライブラリも使用できる</li>
                <li>コンポーネント内で CSS を記述でき、スコープが設定される(他コンポーネントは影響を受けない)</li>
                <li>Next.js には、CSS と Sass のサポートが組み込まれており、.css ファイルと .scss ファイルをインポートできる</li>
                <li>TailwindCSS などのCSSライブラリの使用もサポートされている</li>
                <li className="foo">これは、styled-jsx でスタイリングしてみたもの</li>
            </ul>
            <style jsx>{`
              .foo {font-weight: bold; font-size: 1.5em;}
            `}</style>
        </Layout>
    )
}

export default About
