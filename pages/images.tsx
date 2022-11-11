// import Image from "next/image"
import Layout from "../components/layout"
import type { NextPage } from "next"
import { motion } from "framer-motion"

const Images: NextPage = () => {
  return (
    <Layout title="画像関連" description="画像関連のこと。">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="stack-large">
          <h1>画像 関連</h1>
          <section>
            <h2>画像 (next/image)</h2>
            <ul>
              <li>
                画像コンポーネント next/image は、HTML img
                要素の拡張で、最新のWeb用に進化したもの
              </li>
              <li>
                デフォルトで WebP 化
                (ブラウザがサポートしていれば)、デバイスのモニタサイズに合わせて画像をサイズ変更、最適化しての提供
              </li>
              <li>
                自動画像最適化は、任意の画像ソースで機能。画像が CMS
                などの外部データソースによってホストされている場合でも、最適化できる
              </li>
            </ul>
            <img
              src="/images/sample-image-1.jpg" // Route of the image file
              width={500} // Desired size with correct aspect ratio
              height={375} // Desired size with correct aspect ratio
              alt="代替テキスト"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </section>
        </div>
      </motion.div>
    </Layout>
  )
}

export default Images
