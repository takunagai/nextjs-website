import Image from 'next/image'
import Layout from '../components/layout'
import Button from '../components/Button'
import Alert from '../components/Alert'
import cn from 'classnames'
import type { NextPage } from "next"

const About: NextPage = () => {
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

            <hr />

            <h2>CSS Modules</h2>
            <ul>
                <li>コンポーネントレベルのスタイルに役立つ</li>
                <li>コンポーネントファイル名.modules.css で</li>
                <li>ユニークなクラス名が自動で充てられスコープされるので、他とのクラス名衝突の心配が不要</li>
                <li>ページごとに最小限のCSSがロード。バンドルサイズが小さく</li>
                <li>CSS モジュールはビルド時に JavaScript バンドルから抽出され、Next.js が自動的にロードされる css を生成する</li>
            </ul>
            <Button />

            <hr />

            <h2>グローバルな CSS</h2>
            <p>styles/global.css を作成し _app.tsx に読み込む(リスタート必要)</p>

            <hr />

            <h2>PostCSS, TailwindCSS, Sass</h2>
            <a href="https://nextjs.org/learn/basics/assets-metadata-css/styling-tips">Styling Tips - Assets, Metadata, and CSS | Learn Next.js</a>

            <hr />

            <h2>classnames ライブラリ</h2>
            <ul>
                <li><a href="https://github.com/JedWatson/classnames" target="_blank" rel="noreferrer">classnames - github</a></li>
                <li><a href="https://www.yoheim.net/blog.php?q=20180701" target="_blank" rel="noreferrer">React.js の classNameに、複数のクラスを簡単に指定する Classnames</a></li>
                <Alert type="success">classnames ライブラリで条件でクラスを出し分けしたアラートコンポーネント</Alert>
                <Alert type="error">classnames ライブラリで条件でクラスを出し分けしたアラートコンポーネント</Alert>
            </ul>
        </Layout>
    )
}

export default About
