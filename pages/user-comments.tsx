/**
 * microcms フェッチ
 * @ref https://document.microcms.io/tutorial/next/next-getting-started
 */
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

// microCMS - user-comments
import type { UserComment } from "../types/user-comment"
type UserCommentsTypes = { groups: Array<UserComment> }

// getStaticProps は、実装者が大きな変更をしない限り Promise を返却する = 条件は必ず真に流れる
// ★★TODO: エラー消す (参考：https://zenn.dev/eitches/articles/2021-0424-getstaticprops-type)
// export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext<{ slug: string }>) => {
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const data = await client.get({
    endpoint: "user-comments",
    queries: { limit: 50 },
  })

  return {
    props: {
      userComments: data.contents,
    },
  }
}

// const UserComments: NextPage<Props> = ({ groups }: UserComments) => { // 型付けるとエラー
const UserComments: NextPage<Props> = ({ userComments }) => {
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
        <h1 className="alignfull bg-dots3">ご利用者様の声</h1>
        <div className="mx-auto mt-8 max-w-2xl">
          <p>当センターをご利用いただいた方々から いただいた声を紹介します。</p>
        </div>

        <section className="mt-8">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {userComments.map((userComment: UserComment, index: number) => (
              <li
                key={index}
                className="relative bg-paper px-6 pt-6 pb-12 shadow-md"
              >
                <h2 className="text-left text-[1.3rem] text-primary">
                  {userComment.title}
                </h2>
                <p className="mt-4">{userComment.body}</p>
                <p className="absolute bottom-6 right-6 mt-4 text-right text-sm">
                  {userComment.city[0]} {userComment.initial} 様
                </p>
              </li>
            ))}
          </ul>
        </section>

        <AfterContentArea />
      </motion.div>
    </Layout>
  )
}

export default UserComments
