import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
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
    return (
        <>
            <Head>
                <title>{ pageTitle } - {siteTitle}</title>
                <meta name="description" content={ description || 'ページ概要未設定' } />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="icon" href="../public/favicon.ico" />
            </Head>

            <div className="site-wrapper">
                <header className="my-1">
                    {home ? (
                        <h1 className={utilStyles.utilsModuleCssTest}>{ siteTitle }</h1>
                    ) : (
                        <p className={utilStyles.utilsModuleCssTest}><Link href="/"><a>{ siteTitle }</a></Link></p>
                    )}
                </header>

                <nav className="bg-amber-200">
                    <ul className="md:flex gap-2 bg-amber-500">
                        <li className="bg-blue-400"><Link href="../">Home</Link></li>
                        <li className="bg-blue-400"><Link href="../about">About</Link></li>
                        <li className="bg-blue-400"><Link href="../sample">Sample</Link></li>
                        <li className="bg-blue-400"><Link href="../base">Base</Link></li>
                        <li className="bg-blue-400"><Link href="../tutorial1">Tutorial1</Link></li>
                        <li className="bg-blue-400"><Link href="../blog-posts">Blog</Link></li>
                        <li className="bg-blue-400"><Link href="../fetch">fetch</Link></li>
                        <li className="bg-blue-400"><Link href="../swr">swr</Link></li>
                    </ul>
                </nav>

                <div className={styles.container}>
                    <main>
                        { children }
                    </main>
                    {!home && (
                        <p className="mt-5 text-center"><Link href="/"><a className="border-b-2">Back to home</a></Link></p>
                    )}
                </div>
                <footer className="text-center">
                    <p>©nagaishouten.com</p>
                </footer>
            </div>
        </>
    )
}
