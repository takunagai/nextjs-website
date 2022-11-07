/**
 * microcms フェッチ
 * @ref https://document.microcms.io/tutorial/next/next-getting-started
 */
import Date from "../components/date"
import Layout from "../components/layout"
import AfterContentArea from "../components/AfterContentArea"
import { motion } from "framer-motion"
import { client } from "../lib/client" // microcms-js-sdkの初期化
import {
  EnvelopeIcon,
  PhoneIcon,
  PrinterIcon,
  GlobeAltIcon,
  ChatBubbleOvalLeftIcon,
} from "@heroicons/react/24/outline"

import { FaInfoCircle } from "react-icons/fa"

import type {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from "next" // TypeScript の型データ

// https://zenn.dev/catnose99/articles/7201a6c56d3c88
type Props = InferGetStaticPropsType<typeof getStaticProps>

// microCMS - news
import type { NewsItem } from "../types/news"
type NewsItemsTypes = { newsItems: Array<NewsItem> }

// getStaticProps は、実装者が大きな変更をしない限り Promise を返却する = 条件は必ず真に流れる
// ★★TODO: エラー消す (参考：https://zenn.dev/eitches/articles/2021-0424-getstaticprops-type)
// export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext<{ slug: string }>) => {
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const data = await client.get({
    endpoint: "news",
    queries: { limit: 50 },
  })

  return {
    props: {
      newsItems: data.contents,
    },
  }
}

// const NewsItems: NextPage<Props> = ({ groups }: NewsItems) => { // 型付けるとエラー
const NewsItems: NextPage<Props> = ({ newsItems }) => {
  return (
    <Layout
      title="fetch() メソッドで microCMS API からフェッチ"
      description="fetch() メソッドで microCMS API からデータをフェッチして表示するサンプル"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h1 className="alignfull bg-dots3">お知らせ</h1>
        <div className="mx-auto mt-8 max-w-2xl">
          <p>お知らせやイベント情報。</p>
        </div>

        <section className="mx-auto mt-8 max-w-2xl">
          <ul className="">
            {newsItems.map((newsItem: NewsItem, index: number) => (
              <li
                key={index}
                className="border-b border-dashed border-primary-100 py-8"
              >
                <h2 className="text-left text-2xl">{newsItem.title}</h2>
                <p className="mt-1 text-sm text-gray-700">
                  <Date dateString={newsItem.date} />
                </p>
                <p
                  className="mt-4"
                  dangerouslySetInnerHTML={{ __html: newsItem.body }}
                />
              </li>
            ))}
          </ul>
        </section>

        <AfterContentArea />
      </motion.div>
    </Layout>
  )
}

export default NewsItems
