import React, { useState, useEffect } from "react"
import Head from "next/head"
import Link from "next/link"
import Script from "next/script"
import { useTheme } from "next-themes"
import TopmostNotificationBar from "./TopmostNotificationBar"
import Header from "./Header"
import BreadCrumbs from "./BreadCrumbs"
import Footer from "./Footer"
// import styles from './layout.module.css'
// import utilStyles from '../styles/utils.module.css'

type Props = {
  children: React.ReactNode // React 18 以降で、children を props として受け取るのに必要になった
  title?: string
  description?: string
  home?: boolean
}

export const siteTitle = "ナガイ商店.com"

export default function Layout({ children, title, description, home }: Props) {
  const pageTitle = title || "タイトル未設定"

  // Dark mode
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <>
      <Head>
        <title>
          {pageTitle} - {siteTitle}
        </title>
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
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>

      <div className="flex h-full w-full flex-col">
        <TopmostNotificationBar />
        <Header
          home={home}
          siteTitle={siteTitle}
          pageTitle={pageTitle}
          theme={theme}
          setTheme={setTheme}
        />
        <div className="w-full border-b border-zinc-500/25 py-2 px-4 sm:px-6 lg:px-8">
          <BreadCrumbs pageTitle={pageTitle} />
        </div>
        {/*<div className={`cover__main wrapper ${styles.container}`}>*/}
        <div className="cover__main wrapper">
          <main id="primary" role="main">
            {children}
          </main>

          {/* <div id="secondary">
              <p>サイドバー</p>
          </div> */}

          {!home && (
            <p className="mt-5 text-center text-sm">
              <Link href="/" scroll={false}>
                <a className="border-b">ホームに戻る</a>
              </Link>
            </p>
          )}
        </div>
        <Footer />
      </div>

      {/* preline UI */}
      <Script src="/js/hs-ui.bundle.js"></Script>
    </>
  )
}
