/**
 * App コンポーネント(全てのページを初期化)を継承し上書き
 * 全ページで必要な処理を書く
 * @see https://nextjs-ja-translation-docs.vercel.app/docs/advanced-features/custom-app
 * @see https://qiita.com/tetsutaroendo/items/c7171286137d963cdecf
 * _app.js はサーバーサイドでレンダリング（getInitialPropsの実行を含む）され、
 *     ライフサイクルのイベントはクライアントサイドでも実行される
 */
import { useEffect } from "react"
import { ThemeProvider } from "next-themes" // for Dark mode
import { AnimatePresence } from "framer-motion"
import "../styles/globals.css"

import type { AppProps } from "next/app"

function MyApp({ Component, pageProps, router }: AppProps) {
  // // 遷移時に特定の処理をはさむ
  // // https://zenn.dev/catnose99/articles/2169dae14b58b6
  // useEffect(() => {
  //   if (router.pathname === "/about") {
  //     alert("about ページです")
  //   }
  // }, [router.pathname])

  return (
    <AnimatePresence
      exitBeforeEnter
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Component key={router.asPath} {...pageProps} />
      </ThemeProvider>
    </AnimatePresence>
  )
}

// アプリケーション内の全ページでブロックするデータが必要な場合に有効化
// Automatic Static Optimization を無効にし、アプリケーション内の各ページはサーバーサイドでレンダリングされます。
//
// MyApp.getInitialProps = async (appContext) => {
//   // ページの`getInitialProps`を呼び、`appProps.pageProps`を満たします。
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
