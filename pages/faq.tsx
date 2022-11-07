import Link from "next/link"
import { motion } from "framer-motion"
import Layout from "../components/layout"
import AfterContentArea from "../components/AfterContentArea"
import type { NextPage } from "next"

import {
  FaPhoneAlt,
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

const Faq: NextPage = () => {
  return (
    <Layout title="よくある質問とその回答" description="よくある質問とその回答">
      <motion.div
        initial={{ opacity: 0 }} // initial
        animate={{ opacity: 1 }} // on mount
        exit={{ opacity: 0 }} // on unmount
      >
        <h1 className="alignfull bg-dots3">よくある質問とその回答</h1>

        <div className="mx-auto max-w-2xl">
          <p className="mt-8">
            よくいただく質問をまとめました。
            <br />
            これ以外にご不明な点や聞きたいことがございましたら、お問合せよりご連絡ください。
          </p>
          <p className="mt-1 text-sm">
            <Link
              href="/inquiry"
              className="inline-block font-bold text-primary"
            >
              » お問合せはこちら
            </Link>
          </p>
        </div>

        <section className="mx-auto max-w-2xl py-8">
          <div className="hs-accordion-group">
            <div
              className="hs-accordion active -mt-px border bg-white first:rounded-t-lg last:rounded-b-lg dark:border-gray-700 dark:bg-gray-800"
              id="hs-bordered-heading-one"
            >
              <button
                className="hs-accordion-toggle inline-flex w-full items-center gap-x-3 py-4 px-5 text-left font-bold text-primary transition hover:text-gray-500 hs-accordion-active:text-secondary dark:text-gray-200 dark:hover:text-gray-400 dark:hs-accordion-active:text-blue-500"
                aria-controls="hs-basic-bordered-collapse-one"
              >
                <svg
                  className="block h-3 w-3 text-gray-600 group-hover:text-gray-500 hs-accordion-active:hidden hs-accordion-active:text-secondary hs-accordion-active:group-hover:text-blue-600 dark:text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 8.85999L14.5 8.85998"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8 15.36L8 2.35999"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <svg
                  className="hidden h-3 w-3 text-gray-600 group-hover:text-gray-500 hs-accordion-active:block hs-accordion-active:text-secondary hs-accordion-active:group-hover:text-blue-600 dark:text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 8.85999L14.5 8.85998"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                Q. 相談料はかかりますか？
              </button>
              <div
                id="hs-basic-bordered-collapse-one"
                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-bordered-heading-one"
              >
                <div className="px-5 pb-4">
                  <p className="text-gray-800 dark:text-gray-200">
                    料金はかかりません。無料です。
                  </p>
                </div>
              </div>
            </div>

            <div
              className="hs-accordion -mt-px border bg-white first:rounded-t-lg last:rounded-b-lg dark:border-gray-700 dark:bg-gray-800"
              id="hs-bordered-heading-two"
            >
              <button
                className="hs-accordion-toggle inline-flex w-full items-center gap-x-3 py-4 px-5 text-left font-bold text-primary transition hover:text-gray-500 hs-accordion-active:text-secondary dark:text-gray-200 dark:hover:text-gray-400 dark:hs-accordion-active:text-blue-500"
                aria-controls="hs-basic-bordered-collapse-two"
              >
                <svg
                  className="block h-3 w-3 text-gray-600 group-hover:text-gray-500 hs-accordion-active:hidden hs-accordion-active:text-secondary hs-accordion-active:group-hover:text-blue-600 dark:text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 8.85999L14.5 8.85998"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8 15.36L8 2.35999"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <svg
                  className="hidden h-3 w-3 text-gray-600 group-hover:text-gray-500 hs-accordion-active:block hs-accordion-active:text-secondary hs-accordion-active:group-hover:text-blue-600 dark:text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 8.85999L14.5 8.85998"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                Q. 対象の地域は？
              </button>
              <div
                id="hs-basic-bordered-collapse-two"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-bordered-heading-two"
              >
                <div className="px-5 pb-4">
                  <p className="text-gray-800 dark:text-gray-200">
                    神戸以外の阪神地区在住の方が対象です。
                    兵庫県の他の地域の方は、兵庫県ひきこもり相談支援センターの地元のブランチをご利用ください。
                  </p>
                  <div className="mt-3 max-w-fit rounded border border-dashed border-primary-200 p-3">
                    <p className="font-bold text-primary">
                      兵庫県ひきこもり相談支援センター
                    </p>
                    <p className="mt-0 text-xs">
                      ※リンクは運営している団体のホームページ
                    </p>
                    <ul className="mt-2 list-square pl-5 marker:text-secondary-400">
                      <li>
                        阪神ブランチ<small>(当サイト)</small>
                      </li>
                      <li>
                        <a
                          href="https://harima-branch.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          播磨ブランチ
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://kounotori-inochinet.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          但馬ブランチ
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.asobimura.net/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          丹波ブランチ
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://awajisoda.jp/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          淡路ブランチ
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="hs-accordion -mt-px border bg-white first:rounded-t-lg last:rounded-b-lg dark:border-gray-700 dark:bg-gray-800"
              id="hs-bordered-heading-three"
            >
              <button
                className="hs-accordion-toggle inline-flex w-full items-center gap-x-3 py-4 px-5 text-left font-bold text-primary transition hover:text-gray-500 hs-accordion-active:text-secondary dark:text-gray-200 dark:hover:text-gray-400 dark:hs-accordion-active:text-blue-500"
                aria-controls="hs-basic-bordered-collapse-three"
              >
                <svg
                  className="block h-3 w-3 text-gray-600 group-hover:text-gray-500 hs-accordion-active:hidden hs-accordion-active:text-secondary hs-accordion-active:group-hover:text-blue-600 dark:text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 8.85999L14.5 8.85998"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8 15.36L8 2.35999"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <svg
                  className="hidden h-3 w-3 text-gray-600 group-hover:text-gray-500 hs-accordion-active:block hs-accordion-active:text-secondary hs-accordion-active:group-hover:text-blue-600 dark:text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 8.85999L14.5 8.85998"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                Q. 本人以外が相談してもよいですか？
              </button>
              <div
                id="hs-basic-bordered-collapse-three"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby=" hs-bordered-heading-three"
              >
                <div className="px-5 pb-4">
                  <p className="text-gray-800 dark:text-gray-200">
                    ご本人・家族・兄弟・年齢などは問いません。
                  </p>
                </div>
              </div>
            </div>

            <div
              className="hs-accordion -mt-px border bg-white first:rounded-t-lg last:rounded-b-lg dark:border-gray-700 dark:bg-gray-800"
              id="hs-bordered-heading-four"
            >
              <button
                className="hs-accordion-toggle inline-flex w-full items-center gap-x-3 py-4 px-5 text-left font-bold text-primary transition hover:text-gray-500 hs-accordion-active:text-secondary dark:text-gray-200 dark:hover:text-gray-400 dark:hs-accordion-active:text-blue-500"
                aria-controls="hs-basic-bordered-collapse-three"
              >
                <svg
                  className="block h-3 w-3 text-gray-600 group-hover:text-gray-500 hs-accordion-active:hidden hs-accordion-active:text-secondary hs-accordion-active:group-hover:text-blue-600 dark:text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 8.85999L14.5 8.85998"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8 15.36L8 2.35999"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <svg
                  className="hidden h-3 w-3 text-gray-600 group-hover:text-gray-500 hs-accordion-active:block hs-accordion-active:text-secondary hs-accordion-active:group-hover:text-blue-600 dark:text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 8.85999L14.5 8.85998"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                Q. いつでも相談できるの？
              </button>
              <div
                id="hs-basic-bordered-collapse-three"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby=" hs-bordered-heading-four"
              >
                <div className="px-5 pb-4">
                  <p className="text-gray-800 dark:text-gray-200">
                    {" "}
                    まずはお電話ください。スタッフが相談予約日をご案内します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AfterContentArea />
      </motion.div>
    </Layout>
  )
}

export default Faq
