/**
 * カスタムドキュメント
 * <html>, <body> タグの定義を行うコンポーネント
 * https://qiita.com/Yuki-Kurita/items/6a0eae00999e1294a3b1
 * https://stackoverflow.com/questions/67087999/how-to-properly-type-the-document-tsx-file-from-next-js
 * 元コード: Learn Next.js (公式)
 *
 * 注意：
 * サーバサイドでのみ実行。クライアントサイドの処理(onClickのようなイベントハンドラなど)を書かないこと
 * <Main /> 内に入る外部のReactコンポーネントはブラウザによって初期化されない
 *    アプリケーションのロジックや、styled-jsx の ような CSS の設定は、_app.tsx に書く
 * DocumentのgetInitialProps は、クライアントサイドの遷移中、ページが静的に最適化されている場合にも呼び出さない
 */
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document"

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return Document.getInitialProps(ctx)
  }

  render() {
    return (
      <Html lang="ja" className="h-full">
        <Head />
        <body className="flex h-full flex-col leading-relaxed antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
