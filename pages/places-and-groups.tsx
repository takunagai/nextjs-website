/**
 * microcms API からフェッチ
 * @ref https://document.microcms.io/tutorial/next/next-getting-started
 */
import { useState } from "react"
import Layout from "../components/layout"
import AfterContentArea from "../components/AfterContentArea"
import * as Dialog from "@radix-ui/react-dialog"
import DialogDemo from "../components/Dialog"
import { motion } from "framer-motion"
import { client } from "../lib/client" // microcms-js-sdkの初期化

import {
  FaInfoCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaPrint,
  FaGlobe,
  FaLine,
} from "react-icons/fa"

import type {
  GetStaticProps,
  // GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from "next" // TypeScript の型データ

// https://zenn.dev/catnose99/articles/7201a6c56d3c88
type Props = InferGetStaticPropsType<typeof getStaticProps>

// microCMS - group
import type { Group } from "../types/group"
import Link from "next/link"
type Groups = { groups: Array<Group> }

/**
 * getStaticProps (from microCMS API)
 *   getStaticProps は、実装者が大きな変更をしない限り Promise を返却する = 条件は必ず真に流れる
 */
// ★★TODO: エラー消す (参考：https://zenn.dev/eitches/articles/2021-0424-getstaticprops-type)
// export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext<{ slug: string }>) => {
export const getStaticProps: GetStaticProps = async () =>
  // context: GetStaticPropsContext,
  {
    const data = await client.get({
      endpoint: "group",
      queries: {
        // filters: "city[contains]宝塚市[or]city[contains]伊丹市",
        limit: 50,
      },
    })

    return {
      props: {
        groups: data.contents,
      },
    }
  }

/**
 * Main Component
 */
// const PlacesAndGroups: NextPage<Props> = ({ groups }: Groups) => { // 型付けるとエラー
const PlacesAndGroups: NextPage<Props> = ({ groups }) => {
  const [selectedCity, setSelectedCity] = useState("全表示")

  return (
    <Layout
      title="居場所・親の会の情報"
      description="阪神地域でされているひきこもりの方の居場所、不登校の方の居場所、親の会、学習支援、教育支援センター、相談機関などの情報を集めました。"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h1 className="alignfull bg-dots3">居場所・親の会の情報</h1>
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
            <div className="mt-3 flex">
              <div className="flex-shrink-0">
                <FaInfoCircle className="inline align-baseline text-yellow-400" />
              </div>
              <div className="ml-2">
                <div className="text-sm text-yellow-800">
                  イベント日程等は、各グループのホームページをご参照ください。
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4 text-center">
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button className="btn btn-primary">
                  運営者の方へ<small> (掲載希望、情報変更)</small>
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay" />
                <Dialog.Content className="DialogContent">
                  <Dialog.Title className="DialogTitle">
                    運営者の方へ<small> (掲載希望、情報変更)</small>
                  </Dialog.Title>
                  {/*<Dialog.Description className="DialogDescription">*/}
                  {/*  Make changes to your profile here. Click save when you're*/}
                  {/*  done.*/}
                  {/*</Dialog.Description>*/}
                  <p className="mt-4">
                    当ページへの新規掲載を気希望の方や掲載情報変更を希望の方は、お問い合わせください。
                  </p>
                  <p className="mt-4 text-center">
                    <Link
                      href="/inquiry"
                      type="button"
                      className="btn btn-secondary"
                    >
                      お問合せはこちら
                    </Link>
                  </p>

                  <div
                    style={{
                      marginTop: "0.5em",
                      textAlign: "center",
                    }}
                  >
                    <Dialog.Close asChild>
                      <button className="text-sm text-primary underline">
                        閉じる
                      </button>
                    </Dialog.Close>
                  </div>
                  <Dialog.Close asChild>
                    <button className="IconButton" aria-label="Close">
                      ×
                    </button>
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </p>
        </div>
        <section className="mt-8">
          <RadioButtonsForFilter
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
          />
          <GroupList groups={groups} selectedCity={selectedCity} />
        </section>

        <AfterContentArea />
      </motion.div>
    </Layout>
  )
}

export default PlacesAndGroups

/**
 * ラジオボタンエリア
 */
const RadioButtonsForFilter = ({
  selectedCity,
  setSelectedCity,
}: {
  selectedCity: string
  setSelectedCity: (selectedCity: string) => void
}) => {
  const CITIES = [
    { id: "all", name: "全表示" },
    { id: "amagasaki", name: "尼崎市" },
    { id: "nishinomiya", name: "西宮市" },
    { id: "ashiya", name: "芦屋市" },
    { id: "itami", name: "伊丹市" },
    { id: "takarazuka", name: "宝塚市" },
    { id: "kawanishi", name: "川西市" },
    { id: "sanda", name: "三田市" },
    { id: "inagawa", name: "川辺郡猪名川町" },
    { id: "online", name: "オンライン" },
  ]

  return (
    <>
      <div className="mx-auto max-w-lg rounded-2xl bg-gray-100 p-3">
        <p className="text-center font-bold text-primary">場所で絞り込む</p>
        <fieldset className="mt-3">
          <ul className="flex flex-wrap gap-3">
            {CITIES.map((city) => (
              <li key={city.id}>
                <input
                  type="radio"
                  name="city"
                  id={city.id}
                  value={city.name}
                  checked={selectedCity === city.name}
                  onChange={(e) => setSelectedCity(e.target.value)}
                />
                <label className="ml-1" htmlFor={city.id}>
                  {city.name}
                </label>
              </li>
            ))}
          </ul>
        </fieldset>
      </div>
      <h2 className="mt-6 border-b border-dashed border-primary-200 pb-2 font-bold">
        {selectedCity}
      </h2>
    </>
  )
}

/**
 * 居場所&グループのリスト
 */
const GroupList = ({
  groups,
  selectedCity,
}: {
  groups: Groups
  selectedCity: string
}) => {
  const extractCategoryMatches = (item: Group) => {
    if (selectedCity === "全表示") {
      return true
    } else {
      return item.city[0] === selectedCity
    }
  }

  return Object.keys(groups).length === 0 ? (
    <p>登録がありません。</p>
  ) : (
    <ul className="mt-8 gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
      {(groups as any) // FIXME: 型
        .filter(extractCategoryMatches)
        .map((group: Group, index: number) => (
          <li
            key={index}
            className="mb-8 rounded bg-tertiary-100/50 p-6 shadow md:mb-0"
          >
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
            <p className="mb-1.5 pl-12 -indent-12 leading-5">
              <b className="text-primary">場所：</b>
              {group.place}{" "}
              {group.address && (
                <>
                  <br />
                  <small>({group.address})</small>
                </>
              )}
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
              <b className="text-primary">
                問合せ先
                <small className="font-normal">
                  {group.contactName && ` (${group.contactName})`}
                </small>
                ：
              </b>
            </p>

            {group.contactTel && (
              <p className="mt-0">
                <FaPhoneAlt className="mx-auto inline h-4 w-4 text-secondary md:mx-0" />{" "}
                Tel:{" "}
                <span className="text-xl font-bold">
                  <a href={`tel:${group.contactTel}`}>{group.contactTel}</a>
                </span>
                {group.contactHours && <small> {group.contactHours}</small>}
              </p>
            )}

            {group.contactFax && (
              <p className="mt-0">
                <FaPrint className="mx-auto inline h-4 w-4 text-secondary md:mx-0" />{" "}
                Fax: {group.contactFax}
              </p>
            )}

            <p className="mt-1 flex gap-2">
              {group.contactEmail && (
                <b>
                  <FaEnvelope className="inline h-4 w-4 text-secondary" />
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
                  <FaLine className="inline h-4 w-4 text-secondary" />
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
                  <FaGlobe className="inline h-4 w-4 text-secondary" />
                  <a href={`${group.webUrl}`} target="_blank" rel="noreferrer">
                    Web
                  </a>
                </b>
              )}
            </p>
            {group.leafletImage1 && (
              <p className="relative text-center text-sm">
                <img
                  src={group.leafletImage1.url}
                  width={group.leafletImage1.width}
                  height={group.leafletImage1.height}
                  alt="リーフレット"
                />
                <DialogDemo
                  title={group.title}
                  showTitle={false}
                  triggerType="link"
                  triggerText="» 拡大表示"
                  isStretchLink={true}
                >
                  <img
                    src={group.leafletImage1.url}
                    width={group.leafletImage1.width}
                    height={group.leafletImage1.height}
                    alt="リーフレット"
                  />
                </DialogDemo>
              </p>
            )}
            {group.leafletImage2 && (
              <p className="text-center text-sm">
                <img
                  src={group.leafletImage2.url}
                  width={group.leafletImage2.width}
                  height={group.leafletImage2.height}
                  alt="リーフレット"
                />
                <DialogDemo
                  title={group.title}
                  showTitle={false}
                  triggerType="link"
                  triggerText="» 拡大表示"
                >
                  <img
                    src={group.leafletImage2.url}
                    width={group.leafletImage2.width}
                    height={group.leafletImage2.height}
                    alt="リーフレット"
                  />
                </DialogDemo>
              </p>
            )}
          </li>
        ))}
    </ul>
  )
}
