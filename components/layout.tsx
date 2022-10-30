import React, { useState, useEffect } from "react"
import Head from "next/head"
import Link from "next/link"
import Script from "next/script"
import { useTheme } from "next-themes"
import TopmostNotificationBar from "./TopmostNotificationBar"
import Header from "./Header"
import BreadCrumbs from "./BreadCrumbs"
import Footer from "./Footer"

import { Yomogi } from "@next/font/google"
const yomogi = Yomogi({ weight: "400" })

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
  const [mounted, setMounted] = useState<boolean>(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <html className={yomogi.className}>
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
        {/*<div className="cover__main container lg:flex lg:justify-between">*/}
        <div className="cover__main container">
          <main id="primary" role="main">
            {children}
          </main>
          {/*<div id="secondary" className="w-64">*/}
          {/*  <h3>見出し</h3>*/}
          {/*  <ul>*/}
          {/*    <li>*/}
          {/*      <a href="#">項目1</a>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <a href="#">項目2</a>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <a href="#">項目3</a>*/}
          {/*    </li>*/}
          {/*  </ul>*/}
          {/*  <h3>見出し</h3>*/}
          {/*  <ul>*/}
          {/*    <li>*/}
          {/*      <a href="#">項目1</a>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <a href="#">項目2</a>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <a href="#">項目3</a>*/}
          {/*    </li>*/}
          {/*  </ul>*/}
          {/*</div>*/}
        </div>

        {!home && (
          <p className="mt-5 text-center text-sm">
            <Link href="/" scroll={false} className="border-b">
              ホームに戻る
            </Link>
          </p>
        )}
        <Footer />
      </div>

      {/* preline UI */}
      <Script src="/js/hs-ui.bundle.js"></Script>
    </html>
  )
}
