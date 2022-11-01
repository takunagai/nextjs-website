import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import Layout from "../components/layout"
import type { NextPage } from "next"

const Recruit: NextPage = () => {
  return (
    <Layout
      title="個人情報保護方針(プライバシーポリシー)"
      description="川西市 アステ川西内のカフェ「スフレ専門店 ナッツベリー」の求人情報"
    >
      <motion.div
        initial={{ opacity: 0 }} // initial
        animate={{ opacity: 1 }} // on mount
        exit={{ opacity: 0 }} // on unmount
      >
        <h1 className="alignfull bg-dots3">個人情報保護方針</h1>
        <p className="lead mx-auto mt-8 max-w-xl text-center">
          当センターの個人情報の定義･取り扱いについてご説明いたします。
          <br />
          (令和3年3月25日改訂)
        </p>

        <section className="py-12">
          <h2 className="border-b border-dashed border-primary-400 pb-1 text-lg tracking-wide">
            １.個人情報の定義について
          </h2>
          <p className="mt-3">
            個人情報とは、個人に関する情報であり、当該情報に含まれる氏名・住所・職務経歴・メールアドレスなど個人別に付与された番号・記号その他の符号・画像・もしくは音声により当該個人と識別できるものをいいます。
            また、組み合わせることで個人を識別できるものも個人情報として取り扱います。
          </p>

          <h2 className="mt-6 border-b border-dashed border-primary-400 pb-1 text-lg tracking-wide">
            ２.個人情報を収集する目的について
          </h2>
          <p className="mt-3">
            個人情報収集の目的は、ひきこもり当事者様並びに保護者様のひきこもりに関する相談を適切に進めることなど、ブランチで最適なサービスを提供するためです。より良い支援を行うために、登録の際に記入いただいた内容や相談内容等はスタッフ間で共有させて頂く場合があります。
          </p>
          <p className="mt-1 text-sm">
            ※個人情報の全部・または一部が不足している場合には、サービスを提供できない場合があります。
          </p>
          <p className="mt-1 text-sm">
            ※個人情報の保管期間は原則として最終利用日から５年とします。なお、保管期間を終了した個人情報、保管する必要がなくなった個人情報については、速やかに適切な方法で廃棄いたします。
          </p>

          <h3 className="mt-3">(1)個人情報の取得</h3>
          <p className="mt-2">
            当社は、当社が管理するインターネットによる情報提供サイト（以下「本サイト」といいます。）の運営に必要な範囲で、本サイトの一般利用者（以下「ユーザー」といいます。）又は本サイトに広告掲載を行う者（以下「掲載主」といいます。）から、ユーザー又は掲載主に係る個人情報を取得することがあります。
          </p>
          <h3 className="mt-3">(2)個人情報の利用目的</h3>
          <p className="mt-2">
            当社は、当社が取得した個人情報について、法令に定める場合又は本人の同意を得た場合を除き、以下に定める利用目的の達成に必要な範囲を超えて利用することはありません。
          </p>
          <ul className="list-disc">
            <ul>
              <li>本サイトの運営、維持、管理</li>
              <li>本サイトを通じたサービスの提供及び紹介</li>
              <li>本サイトの品質向上のためのアンケート</li>
            </ul>
          </ul>
          <h3 className="mt-3">(3)個人情報の提供等</h3>
          <p className="mt-2">
            当社は、法令で定める場合を除き、本人の同意に基づき取得した個人情報を、本人の事前の同意なく第三者に提供することはありません。なお、本人の求めによる個人情報の開示、訂正、追加若しくは削除又は利用目的の通知については、法令に従いこれを行うとともに、ご意見、ご相談に関して適切に対応します。
          </p>
          <h2 className="mt-6 border-b border-dashed border-primary-400 pb-1 text-lg tracking-wide">
            個人情報の利用目的の変更
          </h2>
          <p className="mt-3">
            当社は、前項で特定した利用目的は、予め本人の同意を得た場合を除くほかは、原則として変更しません。但し、変更前の利用目的と相当の関連性を有すると合理的に認められる範囲において、予め変更後の利用目的を公表の上で変更を行う場合はこの限りではありません。
          </p>
          <h2 className="mt-6 border-b border-dashed border-primary-400 pb-1 text-lg tracking-wide">
            個人情報の第三者提供
          </h2>
          <p className="mt-3">
            当社は、個人情報の取扱いの全部又は一部を第三者に委託する場合、その適格性を十分に審査し、その取扱いを委託された個人情報の安全管理が図られるよう、委託を受けた者に対する必要かつ適切な監督を行うこととします。
          </p>
          <h2 className="mt-6 border-b border-dashed border-primary-400 pb-1 text-lg tracking-wide">
            個人情報の取扱いの改善・見直し
          </h2>
          <p className="mt-3">
            当社は、個人情報の取扱い、管理体制及び取組みに関する点検を実施し、継続的に改善・見直しを行います。
          </p>
          <h2 className="mt-6 border-b border-dashed border-primary-400 pb-1 text-lg tracking-wide">
            個人情報の廃棄
          </h2>
          <p className="mt-3">
            当社は、個人情報の利用目的に照らしその必要性が失われたときは、個人情報を消去又は廃棄するものとし、当該消去及び廃棄は、外部流失等の危険を防止するために必要かつ適切な方法により、業務の遂行上必要な限りにおいて行います。
          </p>
          <h2 className="mt-6 border-b border-dashed border-primary-400 pb-1 text-lg tracking-wide">
            苦情や相談の担当窓口
          </h2>
          <p className="mt-3">
            当社は、個人情報の取扱いに関する担当窓口及び責任者を以下の通り設けます。
          </p>

          <div className="mx-auto mt-8 max-w-fit border border-primary-100 p-4 text-center shadow md:px-8">
            <h3 className="text-lg text-primary">個人情報に関する問合せ先</h3>
            <p className="mt-3 font-bold">
              兵庫ひきこもり相談支援センター
              <br className="md:hidden" />
              阪神ブランチ
            </p>
            <p className="mt-0 text-sm">運営：一般社団法人 いきがいさがし</p>
            <p className="mt-2 font-bold">TEL: 079-240-6299</p>
            <p className="mt-0 text-sm">
              火・水・木 10〜16時
              <br />
              盆休み、GW、年末年始は休業
            </p>
          </div>
        </section>
      </motion.div>
    </Layout>
  )
}

export default Recruit
