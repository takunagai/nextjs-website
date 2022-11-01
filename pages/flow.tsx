import { useState } from "react"
import Image from "next/image"
import Layout from "../components/layout"
import type { NextPage } from "next"
import { motion } from "framer-motion"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

import image1 from "../public/images/hanshin-branch/sample1.jpg"
import image2 from "../public/images/hanshin-branch/sample2.jpg"

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

const Flow: NextPage = () => {
  const [open, setOpen] = useState(false)

  return (
    <Layout title="相談する" description="Flow の概要です。">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h1 className="alignfull bg-dots3">相談する</h1>

        <section className="py-12">
          <h2>
            <FaDove className="mr-2 inline align-baseline text-secondary-300" />
            相談の流れ
          </h2>
          <div className="mx-auto mt-6 max-w-2xl text-center">[★★図が入る]</div>
        </section>

        <section className="py-12">
          <h2>
            <FaCat className="mr-2 inline align-baseline text-secondary-300" />
            電話相談
          </h2>
          <div className="mx-auto mt-6 max-w-2xl text-center">
            <p>
              ★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱のダミーコピーです
            </p>
            <div className="mt-6 bg-tertiary-100 p-4">
              <p className="text-primary">
                <b>電話での相談先</b>
              </p>
              <p className="mt-2 text-2xl">
                <b>050-3749-1227</b>
              </p>
              <p className="mt-0 text-sm">受付時間 火・水・木　10〜16時</p>
              <p>
                <a href="#" className="btn btn-secondary px-7">
                  青少年用「ほっとらいん相談」はコチラ
                </a>
              </p>
            </div>
          </div>
        </section>

        <button type="button" onClick={() => setOpen(true)}>
          Open Lightbox
        </button>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={[image1, image2]}
          render={{
            slide: (image, offset, rect) => {
              const width = Math.round(
                Math.min(
                  rect.width,
                  (rect.height / image.height) * image.width,
                ),
              )
              const height = Math.round(
                Math.min(
                  rect.height,
                  (rect.width / image.width) * image.height,
                ),
              )

              return (
                <div style={{ position: "relative", width, height }}>
                  <Image
                    fill
                    src={image}
                    loading="eager"
                    placeholder="blur"
                    alt={"alt" in image ? image.alt : ""}
                    sizes={
                      typeof window !== "undefined"
                        ? `${Math.ceil((width / window.innerWidth) * 100)}vw`
                        : `${width}px`
                    }
                  />
                </div>
              )
            },
          }}
        />

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
            <a href="#" className="btn btn-primary px-10">
              相談の流れ
            </a>
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
            <a href="#" className="btn btn-secondary">
              居場所情報を見る
            </a>
          </p>
        </section>

        <footer className="alignfull bg-tertiary-100 py-8">
          <div className="container">
            <div className="flex flex-col gap-4 md:flex-row md:gap-8 lg:items-center">
              <p className="md:basis-1/2 lg:basis-3/5">
                <Image
                  src="/images/hanshin-branch/sample.png"
                  width={1089}
                  height={566}
                  alt="イラスト"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </p>
              <div className="text-center text-primary md:basis-1/2 md:text-left lg:basis-2/5">
                <p className="text-lg font-bold">
                  兵庫ひきこもり相談支援センター
                  <br />
                  阪神ブランチ
                </p>
                <p className="mt-0 text-xs">
                  (運営：一般社団法人いきがいさがし)
                </p>
                <p>
                  電話番号：
                  <span>
                    <b>
                      <a href="tel:050-3749-1227">050-3749-1227</a>
                    </b>
                  </span>
                  <br />
                  開所日時：火・水・木 10〜16時
                  <br />
                  所在地：兵庫県西宮市名塩山荘 8-10
                </p>
                <p className="flex justify-center gap-1 lg:justify-start">
                  <a
                    href="https://www.facebook.com/people/%E5%9C%B0%E5%9F%9F%E6%B4%BB%E5%8B%95%E6%94%AF%E6%8F%B4%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BCnecoris/100063692420182/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary-300 hover:text-primary-200"
                  >
                    <FaLine className="text-[1.75rem]" />
                  </a>
                  <a
                    href="https://twitter.com/necoris1"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary-300 hover:text-primary-200"
                  >
                    <FaTwitter className="text-[1.75rem]" />
                  </a>
                </p>
              </div>
            </div>
            <ul>
              <li>
                <a
                  href="https://twitter.com/necoris1"
                  target="_blank"
                  rel="noreferrer"
                ></a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/people/%E5%9C%B0%E5%9F%9F%E6%B4%BB%E5%8B%95%E6%94%AF%E6%8F%B4%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BCnecoris/100063692420182/"
                  target="_blank"
                  rel="noreferrer"
                ></a>
              </li>
            </ul>
            <div className="alignfull bg-white py-4">
              <div className="container">
                <ul className="flex flex-wrap justify-center gap-2 text-sm">
                  <li>
                    <a href="#" className="text-primary hover:text-primary-300">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary hover:text-primary-300">
                      相談する
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary hover:text-primary-300">
                      ご利用者様の声
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary hover:text-primary-300">
                      居場所・親の会
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary hover:text-primary-300">
                      個人情報保護方針
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary hover:text-primary-300">
                      よくある質問
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary hover:text-primary-300">
                      お問合せ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </motion.div>
    </Layout>
  )
}

export default Flow
