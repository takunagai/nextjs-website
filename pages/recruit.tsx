import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import Layout from "../components/layout"
import type { NextPage } from "next"

const Recruit: NextPage = () => {
  return (
    <Layout
      title="求人情報"
      description="川西市 アステ川西内のカフェ「スフレ専門店 ナッツベリー」の求人情報"
    >
      <motion.div
        initial={{ opacity: 0 }} // initial
        animate={{ opacity: 1 }} // on mount
        exit={{ opacity: 0 }} // on unmount
      >
        <p className="text-center">
          <Image
            src="/images/souffle/img_kichen.jpg"
            width={800}
            height={560}
            alt="カフェ ナッツベリーのキッチン"
            className="rounded-xl"
          />
        </p>
        <p className="text-center">
          <Image
            src="/images/souffle/recruit_catch.png"
            width={242}
            height={66}
            alt="わたしたちと一緒に働きませんか？"
            className="rounded-xl"
          />
        </p>
        <p className="lead mx-auto mt-4 max-w-xl text-center text-primary-700">
          現在、スフレ専門店
          ナッツベリーでは、以下の職種を募集しています。面接ご希望の方は、電話又は
          <Link href="inquiry">
            <a className="text-primary-400 no-underline">お問合せフォーム</a>
          </Link>{" "}
          よりご連絡ください。
        </p>

        <div className="mx-auto max-w-xl">
          <ul className="mt-8 list-square font-bold marker:text-secondary-400 md:mt-12 md:text-lg md:leading-8">
            <li>未経験者歓迎！</li>
            <li>週3日～でOK！曜日・時間相談可</li>
            <li>スフレ・調理師免許に興味のある方大歓迎！</li>
          </ul>
        </div>

        <section className="py-12">
          <h2 className="header-deco text-center text-lg tracking-widest">
            募集要項
          </h2>
          <div className="mt-10 lg:grid lg:grid-cols-2 lg:gap-10">
            <div>
              <div className="rounded-xl border border-dashed border-primary-200 bg-white/50 p-4 md:p-8">
                <h3 className="text-lg text-primary">職種</h3>
                <p>ホール・キッチンスタッフ</p>
                <h3 className="mt-3 text-lg text-primary">雇用形態</h3>
                <p>アルバイト・パート</p>
                <h3 className="mt-3 text-lg text-primary">勤務時間</h3>
                <ul className="list-disc list-square pl-4 marker:text-secondary-300">
                  <li>8:30～21:30 (シフト交代制)</li>
                  <li>週5日以上のレギュラー勤務歓迎</li>
                  <li>時間・曜日応相談</li>
                  <li>1日5h～、週3・4日の勤務もOK</li>
                </ul>
                <h3 className="mt-3 text-lg text-primary">給与</h3>
                <p>日祝 1,050円～、平日 1,000円～</p>
              </div>
            </div>
            <div>
              <div className="rounded bg-craft py-5 px-20 text-center shadow">
                <h2 className="text-lg text-primary">
                  電話かメールフォームから
                  <br />
                  お問合せください
                </h2>
                <p className="mt-2 text-2xl">
                  <b>072-755-2254</b>
                </p>
                <p className="mt-0">受付時間 9:00～21:00</p>
                <a href="inquiry" className="btn btn-primary mt-3 rounded">
                  お問合せフォーム
                </a>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </Layout>
  )
}

export default Recruit
