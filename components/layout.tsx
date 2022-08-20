import { ReactNode } from "react"
import Head from "next/head"
import Link from "next/link"
import Script from "next/script"
import Header from "./Header"
import BreadCrumbs from "./BreadCrumbs"
import Footer from "./Footer"

type Props = {
  children: ReactNode // React 18 以降で、children を props として受け取るのに必要になった
  title?: string
  description?: string
  home?: boolean
}

export const siteTitle = "川西市のスフレ専門店 ナッツベリー"

export default function Layout({ children, title, description, home }: Props) {
  const pageTitle = title || "タイトル未設定"

  return (
    <>
      <Head>
        {home ? (
          <title>{pageTitle}</title>
        ) : (
          <title>
            {pageTitle} - {siteTitle}
          </title>
        )}
        <meta name="description" content={description || "ページ概要未設定"} />
        <meta name="twitter:site" content={siteTitle} />
        <meta name="twitter:creator" content="@nagai_shouten" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta
          name="twitter:description"
          content={description || "ページ概要未設定"}
        />
        <meta
          name="twitter:image"
          content="https://preline.co/preline-logo.svg"
        />
        <meta property="og:url" content="https://preline.co/" />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:title" content={pageTitle} />
        <meta
          property="og:description"
          content={description || "ページ概要未設定"}
        />
        <meta
          property="og:image"
          content="https://preline.co/preline-logo.svg"
        />
        <link rel="apple-touch-icon" href="/favicon/favicon.ico" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>

      <div className="flex h-full w-full flex-col">
        <Header home={home} />

        {!home ? (
          <>
            <div className="page-title alignfull size mt-4 bg-triangle bg-25% py-6 px-4 text-center">
              <h1 className="text-lg tracking-widest text-primary-700">
                {pageTitle}
              </h1>
            </div>
            <div className="py-2 px-4 sm:px-6 lg:px-8">
              <BreadCrumbs pageTitle={pageTitle} />
            </div>
          </>
        ) : (
          <></>
        )}

        <div className="cover__main container">
          <main id="primary" role="main">
            {children}
          </main>
        </div>

        {!home && (
          <p className="mt-5 text-center text-sm">
            <Link href="/" scroll={false}>
              <a className="border-b">» ホームに戻る</a>
            </Link>
          </p>
        )}
        <Footer />
      </div>

      {/* preline UI */}
      <Script src="/js/hs-ui.bundle.js"></Script>
    </>
  )
}
