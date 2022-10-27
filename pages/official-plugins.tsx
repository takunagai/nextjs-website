import Image from "next/image"
import Layout from "../components/layout"
import type { NextPage } from "next"
import { motion } from "framer-motion"

const OfficialPlugins: NextPage = () => {
  return (
    <Layout
      title="Official Plugins"
      description="Official Plugins の概要です。"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h1 className="mt-5">Tailwind 公式プラグイン 4つ</h1>

        <article className="prose-sm prose prose-zinc prose-pink max-w-none prose-headings:underline dark:prose-invert lg:prose-base">
          <h2>@tailwindcss/typography</h2>
          <ul>
            <li>
              Markdown からレンダリングされた HTML や CMS からプルされた HTML
              など、制御できないバニラ HTML
              に美しいタイポグラフィのデフォルトスタイルを追加する一連のクラスを提供してくれるプラグイン。
            </li>
            <li>
              Tailwind
              の5種のグレーから、プロジェクトで使用しているに合わせたスタイルを指定できる(prose-zinc)
            </li>
            <li>
              サイズ修飾子で、コンテキストに合わせてタイポグラフィのサイズを指定できる。ブレークポイント修飾子との組合せ可(例：prose-sm
              lg:prose-base)
            </li>
            <li>ダークモードに対応(dark:prose-invert)</li>
            <li>プロのデザイナーによって美しく見えるよう調整されている</li>
            <li>
              要素修飾子で、コンテンツ内の個々の要素にスタイリングできる(例：prose-headings:underline)
            </li>
            <li>コンテンツをコンテナの幅いっぱいに収めたい場合は max-w-none</li>
            <li>
              not-prose
              クラスでこのプラグインのスタイルを継承させずサンドボックス化できる
            </li>
            <li>
              tailwind.config.js の typography
              で、独自のカラーテーマを作成できる
            </li>
            <li>接頭辞 prose は、tailwind.config.js の設定で変更可能</li>
          </ul>
          <h3>サンプル</h3>
          <p>
            ★★ダミーコピーです手はおっかさんの<a href="#">演奏硝子屋をセロ</a>
            に思ったばこだた。それから思わ口まし勝た(50)しはでまた箱のダミーコピーです上手どもっさと俄たますて、みんなまでぶんを弾いとだまし(100文字)。
          </p>
          <h4>Table</h4>
          <table>
            <thead>
              <tr>
                <th>Wrestler</th>
                <th>Origin</th>
                <th>Finisher</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bret &quot;The Hitman&quot; Hart</td>
                <td>Calgary, AB</td>
                <td>Sharpshooter</td>
              </tr>
              <tr>
                <td>Stone Cold Steve Austin</td>
                <td>Austin, TX</td>
                <td>Stone Cold Stunner</td>
              </tr>
              <tr>
                <td>Randy Savage</td>
                <td>Sarasota, FL</td>
                <td>Elbow Drop</td>
              </tr>
              <tr>
                <td>Vader</td>
                <td>Boulder, CO</td>
                <td>Vader Bomb</td>
              </tr>
              <tr>
                <td>Razor Ramon</td>
                <td>Chuluota, FL</td>
                <td>Razors Edge</td>
              </tr>
            </tbody>
          </table>

          <h2>@tailwindcss/aspect-ratio</h2>
          <ul>
            <li>
              Tailwind コアも aspectRatio をサポートしているが、Safari 14
              は対応していない。このプラグインは Safari 14 にも対応している
            </li>
            <li>
              競合を避けるため、tailwind.config.js で TailwindCSSv3.0 の
              aspectRatio コアプラグインを無効にする必要がある
            </li>
            <li>レスポンシブで無効化も可能(lg:aspect-none)</li>
            <li>比率がおかしいと思ったら、メディア幅が足りていないか確認</li>
            <li>★★TODO: 画像のアスペクト比うまくいかない</li>
          </ul>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <Image
              className="h-full w-full object-cover object-center"
              src="https://picsum.photos/id/1/300/200.webp" // Route of the image file
              width={3000}
              height={2000}
              alt="代替テキスト"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>

          <h2>@tailwindcss/line-clamp</h2>
          <h3>line-clamp-3</h3>
          <p className="line-clamp-3">
            3行以上を非表示に。Et molestiae hic earum repellat aliquid est
            doloribus delectus. Enim illum odio porro ut omnis dolor debitis
            natus. Voluptas possimus deserunt sit delectus est saepe nihil. Qui
            voluptate possimus et quia. Eligendi voluptas voluptas dolor cum.
            Rerum est quos quos id ut molestiae fugit.debitis natus. Voluptas
            possimus deserunt sit delectus est saepe nihil. Qui voluptate
            possimus et quia. Eligendi voluptas voluptas dolor cum. Rerum est
            quos quos id ut molestiae fugit.
          </p>
          <h3>line-clamp-3 md:line-clamp-none</h3>
          <p className="line-clamp-3 md:line-clamp-none">
            スマホなら3行以上を非表示に。Et molestiae hic earum repellat aliquid
            est doloribus delectus. Enim illum odio porro ut omnis dolor debitis
            natus. Voluptas possimus deserunt sit delectus est saepe nihil. Qui
            voluptate possimus et quia. Eligendi voluptas voluptas dolor cum.
            Rerum est quos quos id ut molestiae fugit.debitis natus. Voluptas
            possimus deserunt sit delectus est saepe nihil. Qui voluptate
            possimus et quia. Eligendi voluptas voluptas dolor cum. Rerum est
            quos quos id ut molestiae fugit.
          </p>

          <h2>@tailwindcss/forms</h2>
          <p>
            フォーム要素の基本スタイルをユーティリティクラスでオーバーライドできるようにしてくれるプラグイン
          </p>
          <form action="">
            <input
              type="email"
              className="form-input rounded-full px-4 py-3"
              placeholder="入力してください…"
            />
            <br />
            <input
              type="checkbox"
              className="form-checkbox rounded text-pink-500"
              checked
            />{" "}
            チェック
          </form>
        </article>
      </motion.div>
    </Layout>
  )
}

export default OfficialPlugins
