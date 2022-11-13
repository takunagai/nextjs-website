// import Image from "next/image"
import Link from "next/link"
import Date from "../components/date"
import Layout from "../components/layout"
import AccessMap from "../components/AccessMap"
import { client } from "../lib/client"
import { motion } from "framer-motion"
import Lightbox from "yet-another-react-lightbox"
// import "yet-another-react-lightbox/styles.css"

import {
  FaLock,
  FaHandHoldingHeart,
  FaUserFriends,
  FaHandshake,
  FaDove,
  FaHorse,
  FaFrog,
} from "react-icons/fa"

import type {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from "next" // TypeScript の型データ

/**
 * Settings
 */
// ニュース表示件数
const numberOfNewsItemsToFetch = 20
const numberOfNewsItemsDisplayed = 5
const numberOfNewsLeafletDisplayed = 4

/**
 * getStaticProps (from microCMS API)
 */
// https://zenn.dev/catnose99/articles/7201a6c56d3c88
type Props = InferGetStaticPropsType<typeof getStaticProps>

// microCMS - news
import type { NewsItem } from "../types/news"
type NewsItemsTypes = { newsItems: Array<NewsItem> }

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const data = await client.get({
    endpoint: "news",
    queries: { limit: numberOfNewsItemsToFetch },
  })

  return {
    props: {
      newsItems: data.contents,
    },
  }
}

/**
 * Component
 */
// const Index: NextPage<Props> = ({ newsItems }: : NewsItemsTypes) => { // 型付けるとエラー
const Home: NextPage = ({ newsItems }: any) => {
  // console.log(newsItems)

  return (
    <Layout title="Home" description="Home の概要です。">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="alignfull bg-tertiary-100 py-8 px-4 text-center sm:px-6 lg:py-24 lg:px-8">
          <div className="container flex flex-col items-center justify-center lg:flex-row">
            <div className="order-2 mx-auto max-w-lg lg:px-8">
              <div className="mx-auto max-w-fit rounded-xl border border-2 border-dashed border-primary-300 bg-white/75 p-4 shadow ring ring-white/75">
                <p className="text-sm font-bold text-secondary">
                  相談 / セミナー / 居場所 / 訪問支援
                </p>
                <h1 className="mt-2 pt-0 pb-2 text-[17px] text-primary lg:text-xl">
                  兵庫ひきこもり相談支援センター
                  <br />
                  阪神ブランチ
                </h1>
                <p className="mt-2 text-xs">
                  尼崎市、西宮市、芦屋市、伊丹市、宝塚市、
                  <br />
                  川西市、三田市、川辺郡猪名川町
                </p>
              </div>
              <p className="mt-6 font-bold leading-7 tracking-wide text-primary-700">
                ひきこもりの当事者やご家族を支援する相談窓口。
                <br className="hidden md:inline" />
                専門の相談員による相談(電話・来所・訪問)、居場所の提供、ひきこもりに関するセミナーや研修会なども開催しています。
              </p>
              <p>
                <Link href="/flow" className="btn btn-primary px-7 md:px-16">
                  相談する
                </Link>
                <Link
                  href="/places-and-groups"
                  className="btn btn-secondary lg:px-7"
                >
                  居場所情報を見る
                </Link>
              </p>
            </div>
            <p className="order-1 mx-auto max-w-fit md:mt-6 lg:mt-0">
              <img
                src="/images/hanshin-branch/illust_main.png"
                width={900}
                height={637}
                alt="イラスト"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </p>
          </div>
        </div>
        <section className="py-12">
          <h2>
            <FaDove className="mr-2 inline align-baseline text-secondary-300" />
            お知らせ
          </h2>
          <div className="mx-auto max-w-2xl">
            {/* ★★TODO: 記事がない場合の分岐処理を追加 */}
            <ul className="mt-8 list-square pl-5 marker:text-secondary-400">
              {newsItems
                .slice(0, numberOfNewsItemsDisplayed)
                .map((newsItem: NewsItem, index: number) => (
                  <li
                    key={index}
                    className="border-b border-dashed border-primary-100 py-2"
                  >
                    <span className="block text-xs md:inline-block">
                      <Date dateString={newsItem.date} />
                    </span>
                    <Link
                      href={`/news/${newsItem.id}`}
                      passHref
                      className="text-primary"
                    >
                      {newsItem.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <ul className="mx-4 mt-8 flex flex-wrap">
            {newsItems
              .slice(0, numberOfNewsLeafletDisplayed)
              .map((newsItem: NewsItem, index: number) => (
                <li key={index} className="basis-1/2 px-3 md:basis-1/4">
                  {newsItem.postThumbnail && (
                    <Link
                      href={`/news/${newsItem.id}`}
                      passHref
                      className="text-primary"
                    >
                      <img
                        src={`${newsItem.postThumbnail.url}`}
                        width={`${newsItem.postThumbnail.width}`}
                        height={`${newsItem.postThumbnail.height}`}
                        alt={`${newsItem.title}`}
                        className="shadow-lg hover:opacity-80"
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                        }}
                      />
                    </Link>
                  )}
                </li>
              ))}
          </ul>
        </section>

        <hr />

        <section className="my-12">
          <h2>
            <FaHorse className="mr-2 inline align-baseline text-secondary-300" />
            ひきこもりのお悩みを
            <br />
            抱えておられる方へ
          </h2>
          <p className="mt-1 text-center text-sm">(ご本人、ご家族のサポート)</p>
          <p className="mx-auto max-w-xl text-center">
            当事者の気持ちに十分な配慮を行い、社会参加へのはじめの一歩を踏み出せるよう支援いたします。お気軽にご相談ください。
          </p>

          <h3 className="marker-underlined mt-10 text-center">
            このような方、ご相談ください
          </h3>
          <div className="mx-auto mt-6 flex max-w-fit flex-col gap-4 md:flex-row">
            <div className="rounded-lg border border-4 border-dotted border-secondary-300 p-3">
              <h4 className="text-primary">ご本人</h4>
              <ul className="mt-2 list-square pl-5 marker:text-secondary-400">
                <li>このままではいけないと思ってはいるが…</li>
                <li>人と接する練習をする場所があれば行きたい</li>
                <li>働くのは難しいが、このままではいけない</li>
              </ul>
            </div>
            <div className="rounded-lg border border-4 border-dotted border-secondary-300 p-3">
              <h4 className="text-primary">ご家族さま</h4>
              <ul className="mt-2 list-square pl-5 marker:text-secondary-400">
                <li>ひきこもったままの、子どもの将来が心配</li>
                <li>ひきこもっている子への接し方がわからない</li>
                <li>子どもの居場所や親の会を紹介して欲しい</li>
              </ul>
            </div>
          </div>

          <h3 className="marker-underlined mt-10">
            当支援センターが
            <br className="lg:hidden" />
            お手伝いできること
          </h3>
          <div className="container">
            <ul className="mt-6 flex flex-wrap">
              <li className="flex-basis basis-1/2 rounded-xl border-4 border border-white bg-tertiary-100 p-6 text-center md:basis-1/4">
                <p>
                  <FaUserFriends className="inline text-[50px] text-primary-200" />
                </p>
                <p className="font-bold text-primary-600">
                  ご本人はもちろん、ご家族からのご相談もお受けします
                </p>
              </li>
              <li className="flex-basis basis-1/2 rounded-xl border-4 border border-white bg-tertiary-100 p-6 text-center md:basis-1/4">
                <p className="">
                  <FaHandshake className="inline text-[50px] text-primary-200" />
                </p>
                <p className="font-bold text-primary-600">
                  相談内容に応じ、適切な関係機関を紹介します
                </p>
              </li>
              <li className="flex-basis basis-1/2 rounded-xl border-4 border border-white bg-tertiary-100 p-6 text-center md:basis-1/4">
                <p className="">
                  <FaLock className="inline text-[50px] text-primary-200" />
                </p>
                <p className="font-bold text-primary-600">
                  秘密を守ります。同意なしに相談内容を口外しません
                </p>
              </li>
              <li className="flex-basis basis-1/2 rounded-xl border-4 border border-white bg-tertiary-100 p-6 text-center md:basis-1/4">
                <p className="">
                  <FaHandHoldingHeart className="inline text-[50px] text-primary-200" />
                </p>
                <p className="font-bold text-primary-700">
                  電話、面談などで親身に相談に乗ります。相談費用は無料です
                </p>
              </li>
            </ul>
          </div>

          <h3 className="marker-underlined mt-10">利用してるのはどんな人？</h3>
          <div className="mx-auto mt-6 max-w-fit border border-primary-200 py-3 px-5 font-bold text-primary-700">
            <p>
              利用人数：１日２〜８名程度
              <br />
              男女比：８：２ / 年齢層：20～50代{" "}
            </p>
          </div>
          <div className="mx-auto max-w-fit">
            <ul className="mt-4 list-square pl-5 marker:text-secondary-400">
              <li>
                病気で入院して体力が落ちたので、復職へ向けて体力づくりやリハビリの最初のステップとして通いたい
              </li>
              <li>
                人が怖い、緊張してしまうので、会話や交流など人と関わる練習をしたい
              </li>
            </ul>
          </div>

          <h3 className="marker-underlined mt-10">
            どうやって利用や相談をするの？
          </h3>
          <p className="mx-auto mt-6 max-w-3xl">
            専門の相談員による相談（電話・来所・訪問）、ひきこもりに関する地域相談会や研修会などを開催しています。
            <br />
            まずはお電話ください。スタッフが相談可能日をご案内します。
          </p>
          <p className="text-center">
            <Link href="/flow" className="btn btn-primary px-10">
              相談の流れ
            </Link>
          </p>
        </section>

        <hr />

        <div className="py-12">
          <AccessMap />
        </div>

        <hr />

        <section className="py-12">
          <h2>
            <FaFrog className="mr-2 inline align-baseline text-secondary-300" />
            兵庫県阪神地区の
            <br />
            居場所情報
          </h2>
          <p className="mx-auto mt-6 max-w-3xl">
            なかなか探しにくい、阪神地域でされているひきこもりの方の居場所、不登校の方の居場所、親の会、学習支援、教育支援センター、相談機関などの情報を集めました。
          </p>
          <p className="text-center">
            <Link href="/places-and-groups" className="btn btn-secondary">
              居場所情報を見る
            </Link>
          </p>
        </section>
      </motion.div>
    </Layout>
  )
}

export default Home
