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

        <section className="mx-auto max-w-2xl py-12">
          <ul className="mt-8 list-square pl-5 marker:text-secondary-400">
            <li className="border-b border-dashed border-primary-100 py-2">
              <Link
                href="/"
                className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>

            <li className="border-b border-dashed border-primary-100 py-2">
              <Link
                href="/flow"
                className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                aria-current="page"
              >
                相談する
              </Link>
            </li>
            <li className="border-b border-dashed border-primary-100 py-2">
              <Link
                href="/places-and-groups"
                className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
              >
                阪神地区の居場所の一覧
              </Link>
            </li>
            <li className="border-b border-dashed border-primary-100 py-2">
              <Link
                href="/reference"
                className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
              >
                相談窓口・教育支援センターの一覧
              </Link>
            </li>
            <li className="border-b border-dashed border-primary-100 py-2">
              <Link
                href="/user-comments"
                className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
              >
                ご利用者様の声
              </Link>
            </li>
            <li className="border-b border-dashed border-primary-100 py-2">
              <Link
                href="/faq"
                className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
              >
                よくある質問
              </Link>
            </li>
            <li className="border-b border-dashed border-primary-100 py-2">
              <Link
                href="/news"
                className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
              >
                お知らせ
              </Link>
            </li>
            <li className="border-b border-dashed border-primary-100 py-2">
              <Link
                href="/privacy-policy"
                className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
              >
                個人情報保護方針
              </Link>
            </li>
            <li className="border-b border-dashed border-primary-100 py-2">
              <Link
                href="/inquiry"
                className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
              >
                お問合せ
              </Link>
            </li>
          </ul>
        </section>
      </motion.div>
    </Layout>
  )
}

export default Sitemap
