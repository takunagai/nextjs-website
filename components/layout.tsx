import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

type Props = {
    children?: React.ReactNode
    title?: string
    description?: string
}

export default function Layout({ children, title, description }: Props) {
    const pageTitle = title || 'タイトル未設定'
    return (
        <div>
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
                </ul>
            </nav>
            <main>{ children }</main>
            <footer>(c) nagaishouten.com</footer>
        </div>
    )
}
