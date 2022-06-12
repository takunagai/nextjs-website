/**
 * カスタムドキュメント
 * ページのレンダリングに使用される<html>タグと<body>タグの定義を行うコンポーネント
 * https://qiita.com/Yuki-Kurita/items/6a0eae00999e1294a3b1
 * https://stackoverflow.com/questions/67087999/how-to-properly-type-the-document-tsx-file-from-next-js
 *
 * 注意：
 * SSR(サーバサイドレンダリング)のみの実行。クライアントサイドの処理を書かないこと
 * <Main /> 内に入る外部のReactコンポーネントはブラウザによって初期化されない
 *    アプリケーションのロジックや、styled-jsx の ようなCSSの設定は、ここではなく _app.tsx で書く
 * DocumentのgetInitialProps は、クライアントサイドの遷移中、ページが静的に最適化されている場合にも呼び出さない
 */
// 公式チュートリアルより
import Document, {DocumentContext, Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }

  render() {
    return (
        <Html lang="ja">
          <Head/>
          <body>
            <Main/>
            <NextScript/>
          </body>
        </Html>
    )
  }
}

export default MyDocument
