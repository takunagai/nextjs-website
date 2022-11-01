/**
 * microcms API からフェッチ
 * @ref https://document.microcms.io/tutorial/next/next-getting-started
 */
import Image from "next/image"
import Layout from "../components/layout"
import AfterContent from "../components/after-content"
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

// microCMS - group
import type { Group } from "../types/group"
type Groups = { groups: Array<Group> }

// getStaticProps は、実装者が大きな変更をしない限り Promise を返却する = 条件は必ず真に流れる
// ★★TODO: エラー消す (参考：https://zenn.dev/eitches/articles/2021-0424-getstaticprops-type)
// export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext<{ slug: string }>) => {
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const data = await client.get({
    endpoint: "group",
    queries: { limit: 50 },
  })

  return {
    props: {
      groups: data.contents,
    },
  }
}

// const PlacesAndGroups: NextPage<Props> = ({ groups }: Groups) => { // 型付けるとエラー
const PlacesAndGroups: NextPage<Props> = ({ groups }) => {
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
        <h1>居場所・親の会の情報</h1>
        <div className="mx-auto mt-8 max-w-2xl">
          <p className="font-bold text-primary">
            なかなか探しにくい、阪神地域でされているひきこもりの方の居場所、不登校の方の居場所、親の会、学習支援、教育支援センター、相談機関などの情報を集めました。
          </p>

          <div
            className="mt-4 rounded-md border border-yellow-200 bg-yellow-50 p-2"
            role="alert"
          >
            <div className="flex">
              <div className="flex-shrink-0">
                <FaInfoCircle className="inline align-baseline text-yellow-400" />
              </div>
              <div className="ml-2">
                <div className="text-sm text-yellow-800">
                  中には有償のものや、合わない所があるかもしれません。
                  <br />
                  ホームページやチラシに載っている情報や、説明をよく聞いてから利用する様にしてください。
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4 text-center">
            <a href="#" className="btn btn-primary">
              運営者の方へ<small> (掲載希望、情報変更)</small>
            </a>
          </p>
        </div>
        <section className="mt-8">
          <div className="mx-auto max-w-lg rounded-2xl bg-gray-100 p-3">
            <p className="text-center font-bold text-primary">
              場所で絞り込む ★★機能実装
            </p>
            <fieldset className="mt-3">
              <ul className="flex flex-wrap gap-3">
                <li>
                  <input
                    type="radio"
                    id="amagasaki"
                    name="city"
                    value="尼崎市"
                    checked
                  />
                  <label className="ml-1" htmlFor="amagasaki">
                    尼崎市
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="nishinomiya"
                    name="city"
                    value="西宮市"
                    checked
                  />
                  <label className="ml-1" htmlFor="nishinomiya">
                    西宮市
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="ashiya"
                    name="city"
                    value="芦屋市"
                    checked
                  />
                  <label className="ml-1" htmlFor="ashiya">
                    芦屋市
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="itami"
                    name="city"
                    value="伊丹市"
                    checked
                  />
                  <label className="ml-1" htmlFor="itami">
                    伊丹市
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="takarazuka"
                    name="city"
                    value="宝塚市"
                    checked
                  />
                  <label className="ml-1" htmlFor="takarazuka">
                    宝塚市
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="kawanishi"
                    name="city"
                    value="川西市"
                    checked
                  />
                  <label className="ml-1" htmlFor="kawanishi">
                    川西市
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="sanda"
                    name="city"
                    value="三田市"
                    checked
                  />
                  <label className="ml-1" htmlFor="sanda">
                    三田市
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="inagawa"
                    name="city"
                    value="川辺郡猪名川町"
                    checked
                  />
                  <label className="ml-1" htmlFor="inagawa">
                    川辺郡猪名川町
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="online"
                    name="city"
                    value="オンライン"
                    checked
                  />
                  <label className="ml-1" htmlFor="online">
                    オンライン
                  </label>
                </li>
              </ul>
            </fieldset>
          </div>
          <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {groups.map((group: Group, index: number) => (
              <li key={index} className="rounded bg-tertiary-100/50 p-6 shadow">
                <h2 className="text-left text-[1.4rem] text-primary">
                  {group.title}
                </h2>
                {group.mainImage && group.mainImage.url}
                {group.mainImage && group.mainImage.width}
                {group.mainImage && group.mainImage.height}
                <ul className="mt-4 inline-flex flex-wrap gap-1">
                  {group.locationType.map((x, i) => (
                    <li
                      className="inline-block border border-primary-200 py-0 px-1 text-sm text-primary"
                      key={i}
                    >
                      {x}
                    </li>
                  ))}
                  <li className="inline-block rounded-full bg-secondary-200 py-0 px-2 text-sm text-primary">
                    {group.city.join(", ")}
                  </li>
                </ul>
                <p className="mt-4">{group.summary}</p>
                <p>
                  <b className="text-primary">対象者:</b> <br />
                  {group.objectPerson}
                </p>
                <p className="pl-12 -indent-12">
                  <b className="text-primary">場所：</b>
                  {group.place}
                </p>
                <p className="mt-0 pl-12 -indent-12">
                  <b className="text-primary">日時：</b>
                  {group.activityDate}
                </p>
                <p className="mt-0 pl-16 -indent-16">
                  <b className="text-primary">参加費：</b>
                  {group.cost}
                </p>
                <p className="mt-0 pl-16 -indent-16">
                  <b className="text-primary">主催者：</b>
                  {group.manager}
                </p>
                {group.notice && (
                  <p className="text-red-500">
                    <small>{group.notice}</small>
                  </p>
                )}
                <p>
                  <b className="text-primary">問合せ先：</b>{" "}
                  {group.contactName && `(${group.contactName})`}
                </p>

                {group.contactTel && (
                  <p className="mt-0">
                    <PhoneIcon className="mx-auto inline h-4 w-4 text-secondary md:mx-0" />{" "}
                    Tel:{" "}
                    <span className="text-xl font-bold">
                      <a href={`tel:${group.contactTel}`}>{group.contactTel}</a>
                    </span>
                    {group.contactHours && <small> {group.contactHours}</small>}
                  </p>
                )}

                {group.contactFax && (
                  <p className="mt-0">
                    <PrinterIcon className="mx-auto inline h-4 w-4 text-secondary md:mx-0" />{" "}
                    Fax: {group.contactFax}
                  </p>
                )}

                <p className="mt-1 flex gap-2">
                  {group.contactEmail && (
                    <b>
                      <EnvelopeIcon className="inline h-4 w-4 text-secondary" />
                      <a
                        href={`mailto:${group.contactEmail}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Email
                      </a>
                    </b>
                  )}
                  {group.contactLine && (
                    <b>
                      <ChatBubbleOvalLeftIcon className="inline h-4 w-4 text-secondary" />
                      <a
                        href={`https://lin.ee/${group.contactLine}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        LINE
                      </a>
                    </b>
                  )}
                  {group.webUrl && (
                    <b>
                      <GlobeAltIcon className="inline h-4 w-4 text-secondary" />
                      <a
                        href={`${group.webUrl}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Web
                      </a>
                    </b>
                  )}
                </p>
                {group.leafletImage1 && (
                  <p>
                    <Image
                      src={group.leafletImage1.url}
                      width={group.leafletImage1.width}
                      height={group.leafletImage1.height}
                      alt="リーフレット"
                    />
                  </p>
                )}
                {group.leafletImage2 && (
                  <p>
                    <Image
                      src={group.leafletImage2.url}
                      width={group.leafletImage2.width}
                      height={group.leafletImage2.height}
                      alt="リーフレット"
                    />
                  </p>
                )}
              </li>
            ))}
          </ul>
        </section>

        <AfterContent />
      </motion.div>
    </Layout>
  )
}

export default PlacesAndGroups