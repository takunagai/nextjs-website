import Link from "next/link"
import { motion } from "framer-motion"
import Layout from "../components/layout"
import type { NextPage } from "next"

const Inquiry: NextPage = () => {
  return (
    <Layout
      title="お問合せ"
      description="川西市 アステ川西内のカフェ「スフレ専門店 ナッツベリー」の求人情報"
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
            <Link href="/" className="text-primary-400">
              スフレ レシピ開発
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
            <h3 className="text-lg text-primary">
              レシピ開発 お問合せフォーム
            </h3>
            <p>(24H受付)</p>
            <p className="mt-3">
              自動返信メールで、パンフレット（展示会で配布したもの）のダウンロードURLを送付いたします。また、折返し電話連絡させていただきます。
              <small>
                <a href="/privacy-policy">» 個人情報保護方針</a>
              </small>
            </p>
            <div className="mail-form text-left">
              <form
                action="./cgi-bin/recipe_development/confirmation.php"
                method="post"
                encType="multipart/form-data"
              >
                <dl>
                  <dt className="mt-4 font-bold text-primary">お名前(必須)</dt>
                  <dd>
                    <input type="hidden" name="お名前[params]" value="名前" />
                    <input type="text" name="お名前[value]" />
                  </dd>
                </dl>
                <dl>
                  <dt className="mt-4 font-bold text-primary">
                    メールアドレス(必須)
                  </dt>
                  <dd>
                    <input
                      type="hidden"
                      name="メールアドレス[params]"
                      value="メール"
                    />
                    <input type="text" name="メールアドレス[value]" />
                  </dd>
                </dl>
                <dl>
                  <dt className="mt-4 font-bold text-primary">
                    メールアドレス確認(必須)
                  </dt>
                  <dd>
                    <input
                      type="hidden"
                      name="メールアドレス確認[params]"
                      value="再入力"
                    />
                    <input type="text" name="メールアドレス確認[value]" />
                  </dd>
                </dl>
                <dl>
                  <dt className="mt-4 font-bold text-primary">
                    電話番号(必須)
                  </dt>
                  <dd>
                    <input
                      type="hidden"
                      name="電話番号[params]"
                      value="電話番号,必須"
                    />
                    <input type="text" name="電話番号[value]" />
                  </dd>
                </dl>

                <dl>
                  <dt className="mt-4 font-bold text-primary">
                    お問い合わせ内容(必須)
                  </dt>
                  <dd>
                    <input
                      type="hidden"
                      name="お問い合わせ内容[params]"
                      value="必須"
                    />
                    <textarea name="お問い合わせ内容[value]"></textarea>
                  </dd>
                </dl>
                <div className="submit_area mt-4 text-center">
                  <input
                    type="submit"
                    value="確認する"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-primary py-3 px-4 text-sm font-bold text-white transition-all hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                  />
                </div>
              </form>
            </div>
          </div>
        </section>
      </motion.div>
    </Layout>
  )
}

export default Inquiry
