import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import { useTheme } from 'next-themes'
// import styles from './layout.module.css'
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
                <meta name="twitter:site" content={siteTitle} />
                <meta name="twitter:creator" content="@nagai_shouten" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={ description || 'ページ概要未設定' } />
                <meta name="twitter:image" content="https://preline.co/preline-logo.svg" />
                <meta property="og:url" content="https://preline.co/" />
                <meta property="og:site_name" content={siteTitle} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={ description || 'ページ概要未設定' } />
                <meta property="og:image" content="https://preline.co/preline-logo.svg" />
                <link rel="icon" href="/favicon/favicon.ico" />
            </Head>


            {/*<div className="max-w-[50rem] flex flex-col mx-auto w-full h-full">*/}
            <div className="flex flex-col mx-auto w-full h-full">
                <header className="z-50 text-sm py-4">
                    <nav className="w-full px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
                        <div className="flex items-center justify-between">
                            {home ? (
                                <h1 className="flex-none text-xl font-bold" aria-label="Brand">{siteTitle}</h1>
                            ) : (
                                <p className="flex-none text-xl font-bold" aria-label="Brand">
                                    <Link href="/"><a>{siteTitle}</a></Link>
                                </p>
                            )}

                            <div className="sm:hidden">
                                <button type="button"
                                        className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border border-gray-700 hover:border-gray-600 font-medium text-gray-300 hover:text-white shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-blue-600 transition-all text-sm"
                                        data-hs-collapse="#navbar-collapse-with-animation"
                                        aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                                    <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                    </svg>
                                    <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                            <ul className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
                            {[
                                ['Home', '/'],
                                ['About', '/about'],
                                ['Works', '/works'],
                                ['CSS', '/css'],
                                ['TW Plugins', '/official-plugins'],
                                ['Preline', '/preline'],
                                ['Images', '/images'],
                                ['Base', '/base'],
                                ['Tutorial1', '/tutorial1'],
                                ['Blog', '/posts'],
                                ['Fetch', '/fetch'],
                                ['swr', '/swr'],
                            ].map(([title, url], i) => (
                                <li key={i}><Link className="font-medium text-gray-400 hover:text-gray-500" href={url}>{title}</Link></li>
                            ))}
                            </ul>
                        </div>

                        <div className="flex items-center">
                          <input type="checkbox" id="hs-basic-with-description-checked" className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800 before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200" checked />
                          {/*<label for="hs-basic-with-description-checked" className="text-sm text-gray-500 ml-3 dark:text-gray-400">Checked</label>*/}
                          <label className="text-xs text-gray-500 ml-3 dark:text-gray-400">Dark<br />Mode</label>
                        </div>

                        <div className="dark-mode-toggle-switcher">
                            <a
                                className="hs-dark-mode-active:hidden inline-block hs-dark-mode group items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500"
                                href={"#!"}
                                onClick={() => setTheme('dark')}
                                data-hs-theme-click-value="dark"
                            >
                                <svg className="w-4 h-4 mr-1 inline-block" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
                                </svg>
                                {theme}
                            </a>
                            <a
                                className="hs-dark-mode-active:inline-block hidden hs-dark-mode group items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500"
                                href={"#!"}
                                onClick={() => setTheme('light')}
                                data-hs-theme-click-value="light"
                            >
                                <svg className="w-4 h-4 mr-1 inline-block" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                                </svg>
                                {theme}
                            </a>
                        </div>
                    </nav>

                    {/* パンクズリスト */}
                    {/*<ol className="flex items-center whitespace-nowrap min-w-0" ariaLabel="Breadcrumb">*/}
                    <ol className="flex items-center whitespace-nowrap min-w-0">
                        <li className="text-sm">
                            <a className="flex items-center text-gray-500 hover:text-blue-600" href="#">
                                Home
                                <svg
                                    className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600"
                                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                                          stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            </a>
                        </li>
                        <li className="text-sm">
                            <a className="flex items-center text-gray-500 hover:text-blue-600" href="#">
                                App Center
                                <svg
                                    className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600"
                                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                                          stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            </a>
                        </li>
                        {/*<li className="text-sm font-semibold text-gray-800 truncate dark:text-gray-200" ariaCurrent="page">*/}
                        <li className="text-sm font-semibold text-gray-800 truncate dark:text-gray-200">
                            Application
                        </li>
                    </ol>
                </header>

                {/*<div className={`cover__main wrapper ${styles.container}`}>*/}
                <div className="cover__main wrapper">
                    <main id="primary" role="main">
                        {children}
                    </main>
                    {/*<div id="secondary">*/}
                    {/*    <p>サイドバー</p>*/}
                    {/*</div>*/}
                    {!home && (
                        <p className="mt-5 text-center">
                            <Link href="/"><a className="border-b-2">ホームに戻る</a></Link>
                        </p>
                    )}
                </div>
                <footer className="mt-auto text-center py-5">
                    <p>©nagaishouten.com</p>
                </footer>
            </div>
            <Script src="/js/hs-ui.bundle.js"></Script>
        </>
    )
}
