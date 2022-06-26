import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import { useTheme } from 'next-themes'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

type Props = {
    children: React.ReactNode // React 18 以降で、children を props として受け取るのに必要になった
    title?: string
    description?: string
    home?: boolean
}

export const siteTitle = 'ナガイ商店.com'

export default function Layout({ children, title, description, home }: Props) {

    const pageTitle = title || 'タイトル未設定'

    // Dark mode
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState<boolean>(false)

    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return (
        <>
            <Head>
                <title>{pageTitle} - {siteTitle}</title>
                <meta name="description" content={ description || 'ページ概要未設定' } />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="icon" href="favicon/favicon.ico" />
            </Head>

            <div className="cover site-wrapper">
                <header className="my-1">
                    {home ? (
                        <h1 className={utilStyles.utilsModuleCssTest}>{siteTitle}</h1>
                    ) : (
                        <p className={utilStyles.utilsModuleCssTest}>
                            <Link href="/"><a>{siteTitle}</a></Link>
                        </p>
                    )}
                    <a
                        className="hs-dark-mode-active:hidden inline-block hs-dark-mode group items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500"
                        href={"#!"}
                        onClick={() => setTheme('dark')}
                        data-hs-theme-click-value="dark"
                    >
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
                        </svg>
                    </a>
                    <a
                        className="hs-dark-mode-active:inline-block hidden hs-dark-mode group items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500"
                        href={"#!"}
                        onClick={() => setTheme('light')}
                        data-hs-theme-click-value="light"
                    >
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                        </svg>
                    </a>
                    {theme}
                </header>

                <nav>
                    <ul className="alignfull md:flex gap-2">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/works">Works</Link></li>
                        <li><Link href="/css">CSS関連</Link></li>
                        <li><Link href="/preline">Preline</Link></li>
                        <li><Link href="/images">画像関連</Link></li>
                        <li><Link href="/base">Base</Link></li>
                        <li><Link href="/tutorial1">Tutorial1</Link></li>
                        <li><Link href="/posts">Blog</Link></li>
                        <li><Link href="/fetch">fetch</Link></li>
                        <li><Link href="/swr">swr</Link></li>
                    </ul>
                </nav>

                <div className={`cover__main wrapper ${styles.container}`}>
                    <main>
                        {children}
                    </main>
                    {!home && (
                        <p className="mt-5 text-center">
                            <Link href="/"><a className="border-b-2">ホームに戻る</a></Link>
                        </p>
                    )}
                </div>
                <footer className="text-center">
                    <p>©nagaishouten.com</p>
                </footer>
            </div>
            <Script src="js/hs-ui.bundle.js"></Script>
        </>
    )
}
