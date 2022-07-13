/**
 * App コンポーネント(全てのページを初期化)を継承し上書き
 * 全ページで必要な処理を書く
 * @see https://qiita.com/tetsutaroendo/items/c7171286137d963cdecf
 * _app.js はサーバーサイドでレンダリング（getInitialPropsの実行を含む）され、
 *     ライフサイクルのイベントはクライアントサイドでも実行される
 */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes"; // for Dark mode
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence
      exitBeforeEnter
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Component key={router.asPath} {...pageProps} />
      </ThemeProvider>
    </AnimatePresence>
  );
}

export default MyApp;
