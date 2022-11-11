// import Image from "next/image"
import Layout from "../components/layout"
import type { NextPage } from "next"
import { motion } from "framer-motion"

const Works: NextPage = () => {
  return (
    <Layout title="Works" description="Works の概要です。">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="stack-large container">
          <h1>Works</h1>
          <p>Works の内容</p>
          <div className="grid grid-cols-2 gap-5 text-center md:grid-cols-3 lg:grid-cols-5">
            <div className="relative hover:opacity-95">
              <img
                src="/images/work/work-wacca.jpg"
                width={600}
                height={900}
                alt="代替テキスト"
                className="border border-zinc-300"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <p>
                <a
                  href="https://blueberry-wacca.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="after:absolute after:inset-0"
                >
                  ブルーベリー農園 Wacca
                </a>
                <br />
                <small>マノカルダ株式会社様</small>
              </p>
              <p className="text-[10px]">
                <span className="m-1 inline-block px-1 outline outline-1 outline-zinc-300">
                  デザイン(一部)
                </span>
                <span className="m-1 inline-block px-1 outline outline-1 outline-zinc-300">
                  WordPress
                </span>
                <span className="m-1 inline-block px-1 outline outline-1 outline-zinc-300">
                  写真撮影(一部)
                </span>
                <span className="m-1 inline-block px-1 outline outline-1 outline-zinc-300">
                  その他
                </span>
              </p>
            </div>
            <div className="relative hover:opacity-95">
              <img
                src="/images/work/work-kingoma.jpg"
                width={600}
                height={900}
                alt="代替テキスト"
                className="border border-zinc-300"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <p>
                <a
                  href="https://kingoma.shop"
                  target="_blank"
                  rel="noreferrer"
                  className="after:absolute after:inset-0"
                >
                  金ごま本舗 Online Shop(改善中)
                </a>
                <br />
                <small>金ごま本舗株式会社様</small>
              </p>
              <p className="text-[10px]">
                <span className="m-1 inline-block px-1 outline outline-1 outline-zinc-300">
                  デザイン
                </span>
                <span className="m-1 inline-block px-1 outline outline-1 outline-zinc-300">
                  カラーミーショップ
                </span>
                <span className="m-1 inline-block px-1 outline outline-1 outline-zinc-300">
                  写真撮影(一部)
                </span>
                <span className="m-1 inline-block px-1 outline outline-1 outline-zinc-300">
                  その他
                </span>
              </p>
            </div>
            <div className="relative hover:opacity-95">
              <img
                src="/images/work/work-goodon-life.jpg"
                width={600}
                height={900}
                alt="代替テキスト"
                className="border border-zinc-300"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <p>
                <a
                  href="https://good-on.co.jp/"
                  target="_blank"
                  rel="noreferrer"
                  className="after:absolute after:inset-0"
                >
                  地域工務店グートンライフ
                </a>
                <br />
                <small>株式会社グートンライフ様</small>
              </p>
              <p className="text-[10px]">
                <span className="m-1 inline-block px-1 outline outline-1 outline-zinc-300">
                  デザイン
                </span>
                <span className="m-1 inline-block px-1 outline outline-1 outline-zinc-300">
                  WordPress
                </span>
                <span className="m-1 inline-block px-1 outline outline-1 outline-zinc-300">
                  データ移行
                </span>
                <span className="m-1 inline-block px-1 outline outline-1 outline-zinc-300">
                  その他
                </span>
              </p>
            </div>
            <div className="relative hover:opacity-95">
              <img
                src="/images/work/work-alafarine.jpg"
                width={600}
                height={900}
                alt="代替テキスト"
                className="border border-zinc-300"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <p>
                <a
                  href="https://alafarine.com"
                  target="_blank"
                  rel="noreferrer"
                  className="after:absolute after:inset-0"
                >
                  パン教室 アラファリーヌ(改善中)
                </a>
                <br />
                <small>アラファリーヌ様</small>
              </p>
              <p className="text-[10px]">
                <span className="m-1 inline-block px-1 outline outline-1 outline-zinc-300">
                  デザイン
                </span>
                <span className="m-1 inline-block px-1 outline outline-1 outline-zinc-300">
                  WordPress
                </span>
                <span className="m-1 inline-block px-1 outline outline-1 outline-zinc-300">
                  その他
                </span>
              </p>
            </div>
            <div className="relative hover:opacity-95">
              <img
                src="/images/work/work-anvil.jpg"
                width={600}
                height={900}
                alt="代替テキスト"
                className="border border-zinc-300"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <p>
                <a
                  href="https://takarazuka-anvil.com"
                  target="_blank"
                  rel="noreferrer"
                  className="after:absolute after:inset-0"
                >
                  彫金教室 アンビル
                </a>
                <br />
                <small>彫金教室 アンビル様</small>
              </p>
              <p className="text-[10px]">
                <span className="m-1 inline-block px-1 outline outline-1 outline-zinc-300">
                  デザイン
                </span>
                <span className="m-1 inline-block px-1 outline outline-1 outline-zinc-300">
                  WordPress
                </span>
                <span className="m-1 inline-block px-1 outline outline-1 outline-zinc-300">
                  写真撮影
                </span>
                <span className="m-1 inline-block px-1 outline outline-1 outline-zinc-300">
                  その他
                </span>
              </p>
            </div>
            <div className="relative hover:opacity-95">
              <img
                src="/images/work/work-dacapo.jpg"
                width={600}
                height={900}
                alt="代替テキスト"
                className="border border-zinc-300"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <p>
                <a
                  href="https://dacapo-osaka.com"
                  target="_blank"
                  rel="noreferrer"
                  className="after:absolute after:inset-0"
                >
                  車のお手入れ専門店 ダ・カーポ(リニューアル中)
                </a>
                <br />
                <small>リバーサル株式会社様</small>
              </p>
              <p className="text-[10px]">
                <span className="m-1 inline-block px-1 outline outline-1 outline-zinc-300">
                  デザイン
                </span>
                <span className="m-1 inline-block px-1 outline outline-1 outline-zinc-300">
                  WordPress
                </span>
                <span className="m-1 inline-block px-1 outline outline-1 outline-zinc-300">
                  写真撮影
                </span>
                <span className="m-1 inline-block px-1 outline outline-1 outline-zinc-300">
                  その他
                </span>
              </p>
            </div>
            <div className="relative hover:opacity-95">
              <img
                src="/images/work/work-knots-berry.jpg"
                width={600}
                height={900}
                alt="代替テキスト"
                className="border border-zinc-300"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <p>
                <a
                  href="https://knotts-berry.com"
                  target="_blank"
                  rel="noreferrer"
                  className="after:absolute after:inset-0"
                >
                  スフレ専門店 ナッツベリー(リニューアル中)
                </a>
                <br />
                <small>株式会社ナッツベリー様</small>
              </p>
              <p className="text-[10px]">
                <span className="m-1 inline-block px-1 outline outline-1 outline-zinc-300">
                  デザイン
                </span>
                <span className="m-1 inline-block px-1 outline outline-1 outline-zinc-300">
                  写真撮影(一部)
                </span>
              </p>
            </div>
            <div className="relative hover:opacity-95">
              <img
                src="/images/work/work-harapeco-morimushi.jpg"
                width={600}
                height={900}
                alt="代替テキスト"
                className="border border-zinc-300"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <p>
                <a
                  href="https://harapeco-morimushi.com"
                  target="_blank"
                  rel="noreferrer"
                  className="after:absolute after:inset-0"
                >
                  教室サロン ハラペコモリムシ
                </a>
                <br />
                <small>教室サロン ハラペコモリムシ様</small>
              </p>
              <p className="text-[10px]">
                <span className="m-1 inline-block px-1 outline outline-1 outline-zinc-300">
                  デザイン(中ページ)
                </span>
                <span className="m-1 inline-block px-1 outline outline-1 outline-zinc-300">
                  WordPress
                </span>
                <span className="m-1 inline-block px-1 outline outline-1 outline-zinc-300">
                  その他
                </span>
              </p>
            </div>
            <div className="relative hover:opacity-95">
              <img
                src="/images/work/work-mimibridal.jpg"
                width={600}
                height={900}
                alt="代替テキスト"
                className="border border-zinc-300"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <p>
                <a
                  href="https://www.mimibridal-osaka.com"
                  target="_blank"
                  rel="noreferrer"
                  className="after:absolute after:inset-0"
                >
                  結婚相談所 ミミブライダル
                </a>
                <br />
                <small>結婚相談所 ミミブライダル様</small>
              </p>
              <p className="text-[10px]">
                <span className="m-1 inline-block px-1 outline outline-1 outline-zinc-300">
                  デザイン
                </span>
                <span className="m-1 inline-block px-1 outline outline-1 outline-zinc-300">
                  Wix
                </span>
                <span className="m-1 inline-block px-1 outline outline-1 outline-zinc-300">
                  その他
                </span>
              </p>
            </div>
            <div className="relative hover:opacity-95">
              <img
                src="/images/work/work-kanami.jpg"
                width={600}
                height={900}
                alt="代替テキスト"
                className="border border-zinc-300"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <p>
                <a
                  href="https://kanami-office.com"
                  target="_blank"
                  rel="noreferrer"
                  className="after:absolute after:inset-0"
                >
                  かなみ社会保険労務士事務所
                </a>
                <br />
                <small>かなみ社会保険労務士事務所様</small>
              </p>
              <p className="text-[10px]">
                <span className="m-1 inline-block px-1 outline outline-1 outline-zinc-300">
                  デザイン
                </span>
                <span className="m-1 inline-block px-1 outline outline-1 outline-zinc-300">
                  WordPress
                </span>
                <span className="m-1 inline-block px-1 outline outline-1 outline-zinc-300">
                  その他
                </span>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  )
}

export default Works
