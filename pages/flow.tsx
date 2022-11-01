import { useState } from "react"
import Image from "next/image"
import Layout from "../components/layout"
import type { NextPage } from "next"
import { motion } from "framer-motion"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

import image1 from "../public/images/hanshin-branch/dummy-600x400.png"
import image2 from "../public/images/hanshin-branch/sample1.jpg"

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

// import type { LightboxProps } from "yet-another-react-lightbox/types.d.ts"

const Flow: NextPage = () => {
  const [open, setOpen] = useState(false)

  return (
    <Layout title="相談する" description="Flow の概要です。">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h1 className="alignfull bg-dots3">相談する</h1>

        <section className="py-12">
          <h2>
            <FaDove className="mr-2 inline align-baseline text-secondary-300" />
            相談の流れ
          </h2>
          <div className="mx-auto mt-6 max-w-2xl text-center">
            <Image
              src="/images/hanshin-branch/dummy-600x400.png"
              width={600}
              height={400}
              alt="写真"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
              className="inline rounded-2xl"
            />
            <br />
            [★★図が入ります]
          </div>
        </section>

        <section className="py-12">
          <h2 id="telephone-counseling">
            <FaCat className="mr-2 inline align-baseline text-secondary-300" />
            電話相談
          </h2>
          <div className="mx-auto mt-6 max-w-2xl text-center">
            <p>
              ★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱のダミーコピーです
            </p>
            <div className="mx-auto mt-6 max-w-md rounded-2xl bg-tertiary-100 py-4 px-8 shadow">
              <p>
                <h3 className="text-lg">電話での相談先</h3>
              </p>
              <p>
                <b>
                  兵庫ひきこもり相談支援センター
                  <br />
                  阪神ブランチ
                </b>
              </p>
              <p className="mt-1 text-2xl">
                <b>
                  <FaPhoneAlt className=" inline align-baseline text-primary-300" />
                  <a href="tel:050-3749-1227">050-3749-1227</a>
                </b>
              </p>
              <p className="mt-1 text-sm">受付時間 火・水・木　10〜16時</p>
              <p>
                <a
                  type="button"
                  onClick={() => setOpen(true)}
                  className="btn btn-secondary"
                >
                  青少年用「ほっとらいん相談」
                </a>
                {/*<Lightbox*/}
                {/*  open={open}*/}
                {/*  close={() => setOpen(false)}*/}
                {/*  slides={[image1, image2]}*/}
                {/*  render={{*/}
                {/*    slide: (image, offset, rect) => {*/}
                {/*      const width = Math.round(*/}
                {/*        Math.min(*/}
                {/*          rect.width,*/}
                {/*          (rect.height / image.height) * image.width,*/}
                {/*        ),*/}
                {/*      )*/}
                {/*      const height = Math.round(*/}
                {/*        Math.min(*/}
                {/*          rect.height,*/}
                {/*          (rect.width / image.width) * image.height,*/}
                {/*        ),*/}
                {/*      )*/}

                {/*      return (*/}
                {/*        <div style={{ position: "relative", width, height }}>*/}
                {/*          <Image*/}
                {/*            fill*/}
                {/*            src={image}*/}
                {/*            loading="eager"*/}
                {/*            placeholder="blur"*/}
                {/*            alt={"alt" in image ? image.alt : ""}*/}
                {/*            sizes={*/}
                {/*              typeof window !== "undefined"*/}
                {/*                ? `${Math.ceil(*/}
                {/*                    (width / window.innerWidth) * 100,*/}
                {/*                  )}vw`*/}
                {/*                : `${width}px`*/}
                {/*            }*/}
                {/*          />*/}
                {/*        </div>*/}
                {/*      )*/}
                {/*    },*/}
                {/*  }}*/}
                {/*/>*/}
              </p>
            </div>
          </div>
        </section>

        <hr />

        <section className="my-12">
          <h2>
            <FaDemocrat className="mr-2 inline align-baseline text-secondary-300" />
            訪問相談/セミナー
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-center">
            ★★西宮市名塩にある施設で。。ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱のダミーコピーです
          </p>

          <p className="mt-6 text-center font-bold text-primary">
            まずは<a href="#telephone-counseling">電話相談</a>をご利用ください
          </p>
          <p className="mt-6 text-center">
            <Image
              src="/images/hanshin-branch/dummy-600x400.png"
              width={600}
              height={400}
              alt="写真"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
              className="inline rounded-2xl"
            />
            <br />
            [★★イメージ写真]
          </p>
          <p className="mt-6 text-center">
            <a href="#" className="btn btn-primary px-7">
              アクセス地図
            </a>
          </p>
        </section>
      </motion.div>
    </Layout>
  )
}

export default Flow
