// import Image from "next/image"
import Link from "next/link"
import { FaTwitter } from "react-icons/fa"

const Footer = () => {
  // const footerLinks = [
  //   {
  //     headerTitle: "About",
  //     items: [
  //       {
  //         title: "事業所概要",
  //         url: "about",
  //       },
  //       {
  //         title: "事業所概要",
  //         url: "about",
  //       },
  //     ],
  //   },
  // ];

  return (
    <footer className="mt-auto">
      <div className="container px-5 pt-12">
        <footer className="alignfull bg-tertiary-100 pt-8">
          <div className="container">
            <div className="flex flex-col gap-4 py-8 md:flex-row md:gap-8 lg:items-center lg:justify-center">
              <p className="md:basis-1/2 lg:basis-2/5">
                <img
                  src="/images/hanshin-branch/illust_main.png"
                  width={900}
                  height={637}
                  alt="イラスト"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </p>
              <div className="text-center text-primary md:basis-1/2 md:text-left lg:basis-2/5">
                <p className="text-lg font-bold">
                  兵庫ひきこもり相談支援センター
                  <br />
                  阪神ブランチ
                </p>
                <p className="mt-0 text-xs">
                  (運営：一般社団法人いきがいさがし)
                </p>
                <p className="mt-3">
                  電話番号：
                  <span>
                    <b>
                      <a href="tel:050-3749-1227">050-3749-1227</a>
                    </b>
                  </span>
                  <br />
                  開所日時：火・水・木・金 10:00〜16:00
                  <br />
                  所在地：兵庫県西宮市名塩新町3-2
                  <br />
                  　　　　(JR西宮名塩駅西に出てすぐ)
                </p>
                <p className="mt-3 flex justify-center gap-2 lg:justify-start">
                  <a
                    href="https://twitter.com/ikigaisagashi1"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary-300 hover:text-primary-200"
                  >
                    <FaTwitter className="text-[1.75rem]" />
                  </a>
                </p>
              </div>
            </div>
            <ul>
              <li>
                <a
                  href="https://twitter.com/necoris1"
                  target="_blank"
                  rel="noreferrer"
                ></a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/people/%E5%9C%B0%E5%9F%9F%E6%B4%BB%E5%8B%95%E6%94%AF%E6%8F%B4%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BCnecoris/100063692420182/"
                  target="_blank"
                  rel="noreferrer"
                ></a>
              </li>
            </ul>
            <div className="alignfull bg-white py-4">
              <div className="container">
                <ul className="flex flex-wrap justify-center gap-4 text-sm">
                  <li>
                    <Link
                      href="/"
                      className="border-b border-dotted border-primary-200 text-primary hover:text-primary-300"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/flow"
                      className="border-b border-dotted border-primary-200 text-primary hover:text-primary-300"
                    >
                      相談する
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/places-and-groups"
                      className="border-b border-dotted border-primary-200 text-primary hover:text-primary-300"
                    >
                      居場所・親の会
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/reference"
                      className="border-b border-dotted border-primary-200 text-primary hover:text-primary-300"
                    >
                      相談窓口
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/user-comments"
                      className="border-b border-dotted border-primary-200 text-primary hover:text-primary-300"
                    >
                      ご利用者様の声
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/news"
                      className="border-b border-dotted border-primary-200 text-primary hover:text-primary-300"
                    >
                      お知らせ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sitemap"
                      className="border-b border-dotted border-primary-200 text-primary hover:text-primary-300"
                    >
                      サイトマップ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="border-b border-dotted border-primary-200 text-primary hover:text-primary-300"
                    >
                      よくある質問
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy-policy"
                      className="border-b border-dotted border-primary-200 text-primary hover:text-primary-300"
                    >
                      個人情報保護方針
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/inquiry"
                      className="border-b border-dotted border-primary-200 text-primary hover:text-primary-300"
                    >
                      お問合せ
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <FooterBar />
    </footer>
  )
}

const FooterBar = () => {
  return (
    <div className="bg-primary py-4 text-primary-200">
      <div className="container">
        <p className="text-center text-sm">
          © 2023 兵庫ひきこもり相談支援センター 阪神ブランチ
        </p>
      </div>
    </div>
  )
}

export default Footer
