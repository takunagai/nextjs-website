import Link from "next/link"
import { motion } from "framer-motion"
import Layout from "../components/layout"
import ContactForm from "../components/ContactForm"
import type { NextPage } from "next"

const Inquiry: NextPage = () => {
  return (
    <Layout
      title="お問合せ"
      description="川西市 アステ川西内のカフェ「スフレ専門店 ナッツベリー」のお問合せフォーム"
    >
      <motion.div
        initial={{ opacity: 0 }} // initial
        animate={{ opacity: 1 }} // on mount
        exit={{ opacity: 0 }} // on unmount
      >
        <div className="mx-auto max-w-2xl">
          <p className="mt-4">
            お問合せは、電話（番号はページ最下部に記載）、もしくは下のお問合せフォームからご連絡ください。
          </p>
          <p className="mt-1 text-sm">
            {" "}
            ※レシピ開発についてのお問合せは、
            <Link href="recipe-development">
              <a className="text-primary-400">スフレ レシピ開発</a>
            </Link>{" "}
            よりお問合せください。
          </p>
        </div>

        <section className="py-8">
          <div className="mx-auto max-w-fit rounded bg-craft py-4 px-20 text-center shadow">
            <h2 className="text-lg text-primary">電話でのお問合せ</h2>
            <p className="mt-2 text-2xl">
              <b>072-755-2254</b>
            </p>
            <p className="mt-0">受付時間 9:00～21:00</p>
          </div>
          <div className="mx-auto mt-8 max-w-3xl rounded bg-craft py-8 px-4 text-center shadow lg:px-8">
            <h3 className="text-lg text-primary">お問合せフォーム</h3>
            <p className="mt-3">
              万が一、３営業日以内に返信がない場合は、メールが届いていない可能性がありますので、お手数ですが電話連絡ください。
              <small>
                <Link href="privacy-policy">» 個人情報保護方針</Link>
              </small>
            </p>
            <div className="mail-form text-left">
              <ContactForm />
            </div>
          </div>
        </section>
      </motion.div>
    </Layout>
  )
}

export default Inquiry
