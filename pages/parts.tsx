import Image from "next/image"
import Layout from "../components/layout"
import type { NextPage } from "next"
import { motion } from "framer-motion"
import { FaLine, FaTwitter } from "react-icons/fa"

const Parts: NextPage = () => {
  return (
    <Layout title="Parts" description="Parts の概要です。">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h1>Parts (パーツ集)</h1>
        <div className="alignfull flex h-[80vh] flex-col items-center justify-center bg-primary-100 py-10 px-4 text-center sm:px-6 md:h-[60vh] lg:h-[70vh] lg:px-8">
          <div className="container">
            <div className="mx-auto max-w-fit rounded-xl border border-2 border-dashed border-primary-300 bg-white/75 p-4 shadow ring ring-white/75">
              <p className="text-sm font-bold text-secondary">
                相談 /セミナー /居場所 / 訪問支援
              </p>
              <h1 className="mt-2 text-[17px] text-primary md:text-xl">
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
            <p className="mx-auto mt-6 max-w-4xl font-bold">
              ひきこもりの当事者やご家族を支援する相談窓口。専門の相談員による相談(電話、訪問、地域相談会)、居場所の提供。ひきこもりに関するセミナーや研修会などのイベントも開催しています。
            </p>
            <p className="mx-auto max-w-fit">
              <img
                src="https://picsum.photos/id/1/600/300.webp"
                alt="イラスト"
              />
            </p>
            <p>
              <a href="#" className="btn btn-primary">
                相談する (電話、訪問)
              </a>
              <a href="#" className="btn btn-secondary">
                居場所情報を見る
              </a>
            </p>
          </div>
        </div>
        <section className="mx-auto max-w-4xl pt-12">
          <h2>お知らせ</h2>
          <ul className="mt-8">
            <li>
              <span className="text-xs">2022年7月23日</span>
              <a href="#">◯◯◯◯◯◯◯◯◯◯◯◯を開催します！</a>
            </li>
            <li>
              <span className="text-xs">2022年7月20日</span>
              <a href="#">◯◯◯◯◯◯◯◯◯を更新しました。</a>
            </li>
            <li>
              <span className="text-xs">2022年7月15日</span>
              <a href="#">ホームページをオープンしました！</a>
            </li>
          </ul>

          <div className="mx-4 mt-4 grid grid-cols-2 gap-1 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
            <a href="#">
              <img
                src="https://picsum.photos/id/1/400/600.webp"
                alt="代替テキスト"
                className="shadow"
              />
            </a>
            <a href="#">
              <img
                src="https://picsum.photos/id/1/400/600.webp"
                alt="代替テキスト"
                className="shadow"
              />
            </a>
            <a href="#">
              <img
                src="https://picsum.photos/id/1/400/600.webp"
                alt="代替テキスト"
                className="shadow"
              />
            </a>
          </div>
        </section>

        <section className="mt-12">
          <h2>
            ひきこもりのお悩みを
            <br />
            抱えておられる方へ
          </h2>
          <p className="text-center">(ご本人、ご家族)</p>
          <p className="text-center">
            当事者の気持ちに十分な配慮を行い、社会参加へのはじめの一歩を踏み出せるよう、支援いたします。お気軽にご相談ください。
          </p>

          <h3 className="mt-8 text-center">このような方、ご相談ください</h3>
          <div className="mx-auto mt-4 flex max-w-fit flex-col gap-4 md:flex-row">
            <div className="rounded-lg border border-4 border-dotted border-secondary-300 p-3">
              <h4 className="text-primary">ご本人</h4>
              <ul className="list-square pl-5 marker:text-secondary-400">
                <li>このままではいけないと思ってはいるが…</li>
                <li>人と接する練習をする場所があれば行きたい</li>
                <li>働くのは難しいが、このままではいけない</li>
              </ul>
            </div>
            <div className="rounded-lg border border-4 border-dotted border-secondary-300 p-3">
              <h4 className="text-primary">ご家族</h4>
              <ul className="list-square pl-5 marker:text-secondary-400">
                <li>ひきこもったままの、子どもの将来が心配</li>
                <li>ひきこもっている子への接し方がわからない</li>
                <li>子どもの居場所や親の会を紹介して欲しい</li>
              </ul>
            </div>
          </div>

          <h4 className="mt-8">
            当支援センターが
            <br />
            お手伝いできること
          </h4>
          <ul className="mt-6 flex gap-3">
            <li className="bg-amber-100">
              ご本人はもちろん、ご家族からのご相談もお受けします
            </li>
            <li className="bg-amber-100">
              相談内容に応じ、適切な関係機関を紹介します
            </li>
            <li className="bg-amber-100">
              秘密を守ります。同意なしに相談内容を口外しません
            </li>
            <li className="bg-amber-100">
              電話、面談などで親身に相談に乗ります。相談費用は無料です
            </li>
          </ul>

          <h4 className="mt-8">利用してるのはどんな人？</h4>
          <div className="mt-4 max-w-fit border border-primary-200 py-3 px-5">
            <p>
              利用人数：１日◎名程度
              <br />
              男女比：５：５ / 年齢層：20～60代{" "}
            </p>
          </div>
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

          <h4 className="mt-8">どうやって利用や相談をするの？</h4>
          <p className="mt-4">
            ★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱のダミーコピーです上手どもっさと俄たますて、みんなまでぶんを弾いとだまし(100文字)。
          </p>
          <p>
            <a href="#" className="btn btn-primary">
              相談の流れ
            </a>
          </p>
        </section>

        <section className="pt-8">
          <h2>
            兵庫県阪神地区の
            <br />
            居場所情報
          </h2>
          <p className="mt-6">
            なかなか探しにくい、阪神地域でされているひきこもりの方の居場所、不登校の方の居場所、親の会、学習支援、教育支援センター、相談機関などの情報を集めました。
          </p>
          <p>
            <a href="#" className="btn btn-secondary">
              居場所情報を見る
            </a>
          </p>
        </section>

        <footer className="alignfull mt-12 bg-secondary-100 py-8">
          <div className="container">
            <div className="flex flex-col gap-4 md:flex-row md:gap-8 lg:items-center">
              <p className="basis-1/2">
                <img
                  src="https://picsum.photos/id/1/600/400.webp"
                  alt="イラスト"
                  width="600"
                  height="400"
                />
              </p>
              <div className="basis-1/2">
                <p className="font-bold">
                  兵庫ひきこもり相談支援センター 阪神ブランチ
                </p>
                <p className="mt-0 text-xs">
                  (運営：一般社団法人いきがいさがし)
                </p>
                <p>
                  電話番号：
                  <span>
                    <a href="tel:050-3749-1227">050-3749-1227</a>
                  </span>
                  <br />
                  開所日時：火・水・木　10〜16時
                  <br />
                  所在地：兵庫県西宮市名塩山荘 8-10
                </p>
                <p className="flex justify-center gap-3 lg:justify-start">
                  <a
                    href="https://www.facebook.com/people/%E5%9C%B0%E5%9F%9F%E6%B4%BB%E5%8B%95%E6%94%AF%E6%8F%B4%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BCnecoris/100063692420182/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary-400 hover:text-primary-200"
                  >
                    <FaLine className="text-[30px]" />
                  </a>
                  <a
                    href="https://twitter.com/necoris1"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary-400 hover:text-primary-200"
                  >
                    <FaTwitter className="text-[30px]" />
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

export default Parts
