import Image from "next/image"
import Layout from "../components/layout"
import type { NextPage } from "next"
import { motion } from "framer-motion"
import FadeIn from "../components/FadeIn"

const RecipeDevelopment: NextPage = () => {
  return (
    <Layout
      title="スフレのレシピ開発"
      description="他店と差別化できるデザートメニュー「スフレケーキ」をあなたの店に導入しませんか？"
    >
      <motion.div
        initial={{ opacity: 0 }} // initial
        animate={{ opacity: 1 }} // on mount
        exit={{ opacity: 0 }} // on unmount
      >
        <p className="lead mx-auto mt-8 max-w-xl text-center text-secondary">
          お客様の心をつかみ、他店と差別化できるデザートメニュー「スフレケーキ」をあなたの店に導入しませんか？
        </p>

        <p className="text-center">
          ナッツベリーは、スフレのレシピ開発をお手伝いしています。
          <br />
          ご興味のある方は、お気軽にお問い合わせください。詳細をご案内いたします。
        </p>

        <section className="py-12">
          <h2 className="border-b border-dashed border-primary pb-2 text-center text-2xl">
            ナッツベリーのスフレ 導入のメリット
          </h2>
          <div className=" mt-16 grid flex-row gap-12 sm:grid-cols-3 sm:flex-col sm:gap-8 lg:gap-12">
            <div className="grid__item">
              <FadeIn>
                <Image
                  src="/images/souffle/souffle_img_parmigiano.jpg"
                  width={600}
                  height={400}
                  alt="パルメザンチーズスフレ"
                  className="rounded-xl"
                />
              </FadeIn>
              <h3 className="mt-4 text-lg text-primary">
                他店と差別化できる &quot;感動を与えるスフレ&quot;
              </h3>
              <p className="mt-3">
                口の中でふんわりとろける食感。女性客の心を掴み、リピート率の高い特別なスフレは、３つの特許の元で作られます。真似しようと試みても、同じスフレは作れません。
              </p>
            </div>
            <div className="grid__item">
              <FadeIn>
                <Image
                  src="/images/souffle/souffle_img_chocolate.jpg"
                  width={600}
                  height={400}
                  alt="ショコラスフレ"
                  className="rounded-xl"
                />
              </FadeIn>
              <h3 className="mt-4 text-lg text-primary">
                インスタ映えするので SNS で拡散しやすい！
              </h3>
              <p className="mt-3">
                カップからはみ出し盛り上がるスフレは、Instagram や Twitter
                などの SNS でつい投稿したくなる &quot;映える&quot;
                写真が撮れるので、お客様自身にPRしていただきやすいデザートメニューです。
              </p>
            </div>
            <div className="grid__item">
              <FadeIn>
                <Image
                  src="/images/souffle/souffle_img_fig.jpg"
                  width={600}
                  height={400}
                  alt="川西市いちじくスフレ"
                  className="rounded-xl"
                />
              </FadeIn>
              <h3 className="mt-4 text-lg text-primary">
                オリジナルスフレも作れます(季節のスフレ、ご当地スフレ)
              </h3>
              <p className="mt-3">
                地元の特産品を使った「オリジナルご当地スフレ」や、季節の食材を使ったスフレなど、オリジナルメニューが開発しやすいのもスフレケーキの特徴です。
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <h2 className="border-b border-dashed border-primary pb-2 text-center text-2xl">
            こんな方におすすめです！
          </h2>
          <div className="mx-auto max-w-4xl">
            <ul className="mt-8 list-square font-bold marker:text-secondary-200 md:mt-12 md:text-lg md:leading-10">
              <li>これからカフェを開業したい方</li>
              <li>店のメニューに美味しいスフレを加えたい方</li>
              <li>他店との差別化をはかれるスイーツをお探しの方</li>
              <li>カフェ、ワインバー、居酒屋、バルのデザートとして</li>
            </ul>
          </div>
        </section>

        <section className="py-12">
          <h2 className="border-b border-dashed border-primary pb-2 text-center text-2xl">
            ナッツベリーが提供すること
          </h2>
          <p className="mt-8 text-center font-bold">
            &quot;専用オーブン&quot; x &quot;特許製法&quot; x
            &quot;ひと手間&quot; が美味しいスフレの秘密です。
          </p>
          <div className="mx-auto mt-12 grid max-w-3xl flex-row gap-12 sm:grid-cols-2 sm:flex-col sm:gap-8 lg:gap-12">
            <div>
              <FadeIn>
                <Image
                  src="/images/souffle/leaflet_2019.jpg"
                  width={636}
                  height={884}
                  alt="スフレケーキ 案内リーフレット"
                />
              </FadeIn>
            </div>
            <div>
              <ul className="mt-8 list-square font-bold marker:text-secondary-200">
                <li>特許取得の「スフレ焼き上げオーブン」の販売</li>
                <li>
                  スフレケーキ特許技術の権利貸与
                  <ul>
                    <li>
                      <small>
                        商標登録 第4213193号(ナッツベリー スフレケーキ)
                      </small>
                    </li>
                    <li>
                      <small>製造特許 第3740145号</small>
                    </li>
                    <li>
                      <small>製法特許 第2016504号</small>
                    </li>
                  </ul>
                </li>
                <li>スフレ製造・販売の技術指導</li>
                <li>スフレ製造に伴う機器の販売</li>
                <li>スフレ生地とそれに伴う食材の販売</li>

                <li>これからカフェを開業したい方</li>
                <li>店のメニューに美味しいスフレを加えたい方</li>
                <li>他店との差別化をはかれるスイーツをお探しの方</li>
                <li>カフェ、ワインバー、居酒屋、バルのデザートとして</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-12">
          <h2 className="border-b border-dashed border-primary pb-2 text-center text-2xl">
            電話、またはメールフォームからお問合せください
          </h2>
          <div className="mx-auto mt-12 max-w-fit rounded bg-craft py-4 px-20 text-center shadow">
            <h3 className="text-lg text-primary">電話でのお問合せ先</h3>
            <p className="mt-2 text-2xl">
              <b>072-755-2254</b>
            </p>
            <p className="mt-0">受付時間 9:00～21:00</p>
          </div>
          <div className="mx-auto mt-12 max-w-3xl rounded bg-craft py-8 px-4 text-center shadow lg:px-8">
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
                  <dt className="mt-4 font-bold text-primary">郵便番号</dt>
                  <dd>
                    <input
                      type="hidden"
                      name="郵便番号[params]"
                      value="郵便番号"
                    />
                    <input type="text" name="郵便番号[value]" />
                  </dd>
                </dl>
                <dl>
                  <dt className="mt-4 font-bold text-primary">
                    都道府県(必須)
                  </dt>
                  <dd>
                    <input
                      type="hidden"
                      name="都道府県2[params]"
                      value="必須"
                    />
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="北海道"
                        checked={true}
                      />{" "}
                      北海道
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="青森県"
                      />{" "}
                      青森県
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="岩手県"
                      />{" "}
                      岩手県
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="宮城県"
                      />{" "}
                      宮城県
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="秋田県"
                      />{" "}
                      秋田県
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="山形県"
                      />{" "}
                      山形県
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="福島県"
                      />{" "}
                      福島県
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="茨城県"
                      />{" "}
                      茨城県
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="栃木県"
                      />{" "}
                      栃木県
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="群馬県"
                      />{" "}
                      群馬県
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="埼玉県"
                      />{" "}
                      埼玉県
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="千葉県"
                      />{" "}
                      千葉県
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="東京都"
                      />{" "}
                      東京都
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="神奈川県"
                      />{" "}
                      神奈川県
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="新潟県"
                      />{" "}
                      新潟県
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="富山県"
                      />{" "}
                      富山県
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="石川県"
                      />{" "}
                      石川県
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="福井県"
                      />{" "}
                      福井県
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="山梨県"
                      />{" "}
                      山梨県
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="長野県"
                      />{" "}
                      長野県
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="岐阜県"
                      />{" "}
                      岐阜県
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="静岡県"
                      />{" "}
                      静岡県
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="愛知県"
                      />{" "}
                      愛知県
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="三重県"
                      />{" "}
                      三重県
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="滋賀県"
                      />{" "}
                      滋賀県
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="京都府"
                      />{" "}
                      京都府
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="大阪府"
                      />{" "}
                      大阪府
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="兵庫県"
                      />{" "}
                      兵庫県
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="奈良県"
                      />{" "}
                      奈良県
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="和歌山県"
                      />{" "}
                      和歌山県
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="鳥取県"
                      />{" "}
                      鳥取県
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="島根県"
                      />{" "}
                      島根県
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="岡山県"
                      />{" "}
                      岡山県
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="広島県"
                      />{" "}
                      広島県
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="山口県"
                      />{" "}
                      山口県
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="徳島県"
                      />{" "}
                      徳島県
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="香川県"
                      />{" "}
                      香川県
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="愛媛県"
                      />{" "}
                      愛媛県
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="高知県"
                      />{" "}
                      高知県
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="福岡県"
                      />{" "}
                      福岡県
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="佐賀県"
                      />{" "}
                      佐賀県
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="長崎県"
                      />{" "}
                      長崎県
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="熊本県"
                      />{" "}
                      熊本県
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="大分県"
                      />{" "}
                      大分県
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="宮崎県"
                      />{" "}
                      宮崎県
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="鹿児島県"
                      />{" "}
                      鹿児島県
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="都道府県2[value]"
                        value="沖縄県"
                      />{" "}
                      沖縄県
                    </label>
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

export default RecipeDevelopment
