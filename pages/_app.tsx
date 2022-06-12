/**
 * App コンポーネント(全てのページを初期化)を継承し上書き
 * 全ページで必要な処理を書く
 */
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
