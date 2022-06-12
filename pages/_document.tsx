/**
 * カスタムドキュメント
 * ページのレンダリングに使用される<html>タグと<body>タグの定義を行うコンポーネント
 * https://qiita.com/Yuki-Kurita/items/6a0eae00999e1294a3b1
 * https://stackoverflow.com/questions/67087999/how-to-properly-type-the-document-tsx-file-from-next-js
 */
// 公式チュートリアルより
import Document, { DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }
}

export default MyDocument

// import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
//
// type Props = {}
//
// class Document extends NextDocument<Props> {
//   render() {
//     return (
//       <Html lang="ja">
//         <Head />
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     )
//   }
// }
//
// export default Document