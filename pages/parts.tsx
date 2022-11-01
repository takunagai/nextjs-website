import Image from "next/image"
import Link from "next/link"
import Layout from "../components/layout"
import type { NextPage } from "next"
import { motion } from "framer-motion"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

import {
  FaLine,
  FaTwitter,
  FaLock,
  FaHandHoldingHeart,
  FaUserFriends,
  FaHandshake,
  FaDove,
  FaCat,
  FaCrow,
  FaDemocrat,
  FaDog,
  FaFish,
  FaHorse,
  FaFrog,
} from "react-icons/fa"

const Parts: NextPage = () => {
  return (
    <Layout title="Parts" description="Parts の概要です。">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="alignfull flex flex-col items-center justify-center bg-tertiary-100 py-8 px-4 text-center sm:px-6 lg:py-24 lg:px-8">
          <div className="">
            <div className="flex flex-col lg:flex-row">
              <div className="mx-auto max-w-lg lg:order-1 lg:px-8">
                <div className="mx-auto max-w-fit rounded-xl border border-2 border-dashed border-primary-300 bg-white/75 p-4 shadow ring ring-white/75">
                  <p className="text-sm font-bold text-secondary">
                    相談 / セミナー / 居場所 / 訪問支援
                  </p>
                  <h1 className="mt-2 text-[17px] text-primary lg:text-xl">
                    兵庫ひきこもり相談支援センター
                    <br />
                    阪神ブランチ
                  </h1>
                  <p className="mt-2 text-xs">
                    尼崎市、西宮市、芦屋市、伊丹市、宝塚市、
                    <br />
                    三田市、川辺郡猪名川町
                  </p>
                </div>
                <p className="mt-6 font-bold leading-7 tracking-wide text-primary-700">
                  ひきこもりの当事者やご家族を支援する相談窓口。専門の相談員による相談(電話、訪問、地域相談会)、居場所の提供。ひきこもりに関するセミナーや研修会などのイベントも開催しています。
                </p>
                <p>
                  <Link href="/flow" className="btn btn-primary">
                    相談する<small> (電話、訪問)</small>
                  </Link>
                  <Link
                    href="/places-and-groups"
                    className="btn btn-secondary px-7"
                  >
                    居場所情報を見る
                  </Link>
                </p>
              </div>
              <p className="mx-auto mt-6 max-w-fit lg:mt-0">
                <Image
                  src="/images/hanshin-branch/sample.png"
                  width={762}
                  height={396}
                  alt="イラスト"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </p>
            </div>
          </div>
        </div>
        <section className="py-12">
          <h2>
            <FaDove className="mr-2 inline align-baseline text-secondary-300" />
            お知らせ
          </h2>
          <div className="mx-auto max-w-2xl">
            <ul className="mt-8 flex list-square flex-col gap-3 pl-5 marker:text-secondary-400">
              <li>
                <span className="block text-xs md:inline-block">
                  2022年7月23日
                </span>
                <a href="#" className="text-primary">
                  ◯◯◯◯◯◯◯◯◯◯◯◯を開催します！
                </a>
              </li>
              <li>
                <span className="block text-xs md:inline-block">
                  2022年7月20日
                </span>
                <a href="#" className="text-primary">
                  ◯◯◯◯◯◯◯◯◯を更新しました。
                </a>
              </li>
              <li>
                <span className="block text-xs md:inline-block">
                  2022年7月15日
                </span>
                <a href="#" className="text-primary">
                  ホームページをオープンしました！
                </a>
              </li>
            </ul>
          </div>

          <div className="mx-4 mt-8 flex flex-wrap">
            <div className="basis-1/2 px-3 md:basis-1/4">
              <a href="#">
                <Image
                  src="/images/hanshin-branch/sample-leaflet-1.jpg"
                  width={400}
                  height={548}
                  alt="リーフレット"
                  className="shadow"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </a>
            </div>
            <div className="basis-1/2 px-3 md:basis-1/4">
              <a href="#">
                <Image
                  src="/images/hanshin-branch/sample-leaflet-2.jpg"
                  width={400}
                  height={548}
                  alt="リーフレット"
                  className="shadow"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </a>
            </div>
            <div className="basis-1/2 px-3 md:basis-1/4">
              <a href="#">
                <Image
                  src="/images/hanshin-branch/sample-leaflet-1.jpg"
                  width={400}
                  height={548}
                  alt="リーフレット"
                  className="shadow"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </a>
            </div>
          </div>
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
              利用人数：１日★★名程度
              <br />
              男女比：５：５ / 年齢層：20～60代{" "}
            </p>
          </div>
          <div className="mx-auto max-w-fit">
            <ul className="mt-4 list-square pl-5 marker:text-secondary-400">
              <li>
                長期間ひきこもりで外に出られなかったが、就職を目指して昼夜逆転などの乱れた生活リズムを整えたい
              </li>
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
            ★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱のダミーコピーです上手どもっさと俄たますて、みんなまでぶんを弾いとだまし(100文字)。
          </p>
          <p className="text-center">
            <Link href="/flow" className="btn btn-primary px-10">
              相談の流れ
            </Link>
          </p>
        </section>

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

export default Parts
