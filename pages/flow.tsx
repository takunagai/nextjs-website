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
  FaMapMarkedAlt,
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

        <div className="mx-auto mt-8 max-w-2xl">
          <p className="font-bold text-primary">
            悩みを抱えてる方、お気軽にご相談ください。兵庫ひきこもり支援センターでは、ひきこもりに悩むご本人や家族からの相談を受け付けています。
          </p>
        </div>

        <section className="py-12">
          <h2>
            <FaDove className="mr-2 inline align-baseline text-secondary-300" />
            相談の流れ
          </h2>
          <p className="mt-6 md:text-center">
            専門の相談員による相談 (電話相談、来所相談、訪問相談)
            を行っています。
            <br className="hidden md:inline" />
            まずは各相談の予約を取らせていただきますので、お気軽にお電話ください
          </p>
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

        <section className="lg:flex lg:gap-8">
          <div className="lg:basis-1/3">
            <h2 id="telephone-counseling">
              <FaCat className="mr-2 inline align-baseline text-secondary-300" />
              電話相談
            </h2>
            <div className="mx-auto mt-6 max-w-2xl text-center">
              <p>
                来所が難しい方には、専門の相談員による電話相談を行っています。
              </p>
              <p className="mt-4 text-center">
                <Image
                  src="/images/hanshin-branch/illust-telephone.png"
                  width={200}
                  height={155}
                  alt="電話相談のイラスト"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                  className="inline"
                />
              </p>
            </div>
          </div>

          <hr className="lg:hidden" />

          <div className="lg:basis-1/3">
            <h2>
              <FaDemocrat className="mr-2 inline align-baseline text-secondary-300" />
              来所相談
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-center">
              西宮市名塩にある事務所で、専門の相談員による相談を行っています。{" "}
              <a href="#access-map" className="inline-block">
                » アクセス地図
              </a>
            </p>
            <p className="mt-4 text-center">
              <Image
                src="/images/hanshin-branch/consultation.jpg"
                width={200}
                height={161}
                alt="写真"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
                className="inline"
              />
            </p>
          </div>

          <hr className="lg:hidden" />

          <div className="lg:basis-1/3">
            <h2>
              <FaCrow className="mr-2 inline align-baseline text-secondary-300" />
              訪問相談
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-center">
              来所が難しい方は、ご本人の同意を得て家庭訪問をします。
            </p>
            <p className="mt-4 text-center">
              <Image
                src="/images/hanshin-branch/illust-house.png"
                width={200}
                height={161}
                alt="訪問相談のイラスト"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
                className="inline"
              />
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto mt-6 max-w-lg rounded-2xl bg-tertiary-100 py-4 px-8 text-center shadow">
            <p>
              <h3 className="text-lg">お気軽にご予約ください</h3>
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
        </section>

        <hr />

        <div className="mt-12">
          <h2 id="access-map">
            <FaMapMarkedAlt className="mr-2 inline align-baseline text-secondary-300" />
            アクセス
          </h2>
          <p className="mt-8 text-center">
            <b>地域活動支援センター necoris</b>
            <br />
            〒669-1142 西宮市名塩山荘8-10
          </p>
          <div className="iframe-wrapper iframe-wrapper--golden-ratio alignfull mt-6 md:container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3275.146335594916!2d135.29066905754377!3d34.82741307410644!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60008ab02690f3a3%3A0x355008903425457!2z44CSNjY5LTExNDIg5YW15bqr55yM6KW_5a6u5biC5ZCN5aGp5bGx6I2Y77yY4oiS77yR77yQ!5e0!3m2!1sja!2sjp!4v1667532277511!5m2!1sja!2sjp"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </motion.div>
    </Layout>
  )
}

export default Flow
