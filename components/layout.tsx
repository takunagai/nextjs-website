import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

type Props = {
    children: React.ReactNode // React 18 以降で、children を props として受け取るのに必要になった
    title?: string
    description?: string
}

export default function Layout({ children, title, description }: Props) {
    const pageTitle = title || 'タイトル未設定'
    return (
        <>
            <Head>
                <title>{ pageTitle } - ナガイ商店.com</title>
                <meta name="description" content={ description || 'ページ概要未設定' } />
                <link rel="icon" href="../public/favicon.ico" />
            </Head>
            <header>
                <h1>{ pageTitle }</h1>
            </header>
            <nav>
                <ul className="md:flex">
                    <li className="outline outline-offset-2 outline-1 outline-black"><Link href="../">Home</Link></li>
                    <li className="outline outline-offset-2 outline-1 outline-black"><Link href="../about">About</Link></li>
                    <li className="outline outline-offset-2 outline-1 outline-black"><Link href="../sample">Sample</Link></li>
                    <li className="outline outline-offset-2 outline-1 outline-black"><Link href="../tutorial1">Tutorial1</Link></li>
                </ul>
            </nav>
            <main>
                { children }
                <p>
                    <Link href="/">
                        <a className="border-b-2">Back to home</a>
                    </Link>
                </p>
            </main>
            <footer>(c) nagaishouten.com</footer>
        </>
    )
}
