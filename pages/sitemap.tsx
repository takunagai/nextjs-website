import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import Layout from "../components/layout"
import type { NextPage } from "next"

const Sitemap: NextPage = () => {
  return (
    <Layout
      title="サイトマップ"
      description="兵庫ひきこもり相談支援センター阪神ブランチのサイトマップ"
    >
      <motion.div
        initial={{ opacity: 0 }} // initial
        animate={{ opacity: 1 }} // on mount
        exit={{ opacity: 0 }} // on unmount
      >
        <h1 className="alignfull bg-dots3">サイトマップ</h1>
        <p className="lead mx-auto mt-8 max-w-xl text-center">
          兵庫ひきこもり相談支援センター阪神ブランチのサイトマップです。
        </p>

        <section className="py-12">
          <ul>
            <li>
              <Link
                href="/parts"
                className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/flow"
                className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                aria-current="page"
              >
                相談する
              </Link>
            </li>
            <li>
              <Link
                href="/places-and-groups"
                className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
              >
                居場所一覧
              </Link>
            </li>
            <li>
              <Link
                href="/user-comments"
                className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
              >
                ご利用者様の声
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
              >
                よくある質問
              </Link>
            </li>
            <li>
              <Link
                href="/inquiry"
                className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
              >
                お問合せ
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
              >
                個人情報保護方針
              </Link>
            </li>
            <li>
              <Link
                href="/news"
                className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
              >
                お知らせ
              </Link>
            </li>
          </ul>
        </section>
      </motion.div>
    </Layout>
  )
}

export default Sitemap
