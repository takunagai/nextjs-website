import Layout from "../components/layout"
import type { NextPage } from "next"
import { motion } from "framer-motion"

const About: NextPage = () => {
  return (
    <Layout title="About" description="About の概要です。">
      <motion.div
        initial={{ opacity: 0 }} // initial
        animate={{ opacity: 1 }} // on mount
        // transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }} // on unmount
      >
        <header className="mx-0 bg-zinc-500/10">
          <h1>About</h1>
        </header>
        <div className="prose prose-sm prose-zinc prose-pink max-w-none prose-headings:underline dark:prose-invert lg:prose-base">
          <div className="mt-5">
            <p className="lead">プロフィールなど。</p>
          </div>
          <section className="mt-10">
            <h2>名前</h2>
            <p>ながたく(takuna)</p>
          </section>
          <section className="mt-10">
            <h2>ごあいさつ</h2>
            <p>
              兵庫県川西市でホームページ制作、ECサイト運営サポート、各種単発サポートをしてます。
            </p>
            <p>
              Web
              の世界は目まぐるしく変わっていくので日々勉強中。「役に立つもの」「いいもの」を作りたいとその時点でのベストを尽くします。最近は
              Web制作と
              Web開発の境界が薄くなってきていると感じており、JavaScript
              系スキルの習得に力を入れています。
            </p>
            <p>気軽に「こんなんできへん？」とお声がけください。</p>
          </section>
          <section className="mt-10">
            <h2>リンク</h2>
            <ul>
              <li>
                <a href="" target="_blank" rel="noreferrer">
                  Twitter
                </a>
                : 概要が入ります
              </li>
              <li>
                <a href="" target="_blank" rel="noreferrer">
                  YouTube
                </a>
                : 概要が入ります
              </li>
              <li>
                <a href="" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                : 概要が入ります
              </li>
              <li>
                <a href="" target="_blank" rel="noreferrer">
                  Zenn
                </a>
                : 概要が入ります
              </li>
              <li>
                <a href="" target="_blank" rel="noreferrer">
                  Qiita
                </a>
                : 概要が入ります
              </li>
            </ul>
          </section>
          <section className="mt-10">
            <h2>スキル</h2>
            <p>★ 限定的、★★ 普通、 ★★★ バッチリ</p>
            <ul>
              <li>ディレクション (進行管理)</li>
              <li>
                Web デザイン、グラフィックデザイン
                <ul>
                  <li>デザインスキル ★★</li>
                  <li>Adobe XD (設計、ページデザイン) ★★★</li>
                  <li>
                    写真、画像加工
                    <ul>
                      <li>写真撮影 ★</li>
                      <li>Lightroom ★★★</li>
                      <li>Photoshop ★★★</li>
                    </ul>
                  </li>
                  <li>
                    イラスト、図解
                    <ul>
                      <li>Illustrator ★★★</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                HTML
                <ul>
                  <li>セマンティック ★★★</li>
                  <li>アクセシビリティを考慮 ★★</li>
                  <li>SEO を考慮した構造 ★★★</li>
                </ul>
              </li>
              <li>
                CSS/PostCSS/Sass
                <ul>
                  <li>Tailwind CSS ★★</li>
                  <li>Bootstrap ★★★</li>
                  <li>Every Layout ★★</li>
                </ul>
              </li>
              <li>
                JavaScript
                <ul>
                  <li>React ★★</li>
                  <li>Next.js ★★</li>
                  <li>TypeScript ★</li>
                </ul>
              </li>
              <li>
                WordPress
                <ul>
                  <li>PHP ★</li>
                  <li>Astra テーマ ★★★</li>
                  <li>ブロックテーマ、ブロック開発 ★</li>
                </ul>
              </li>
              <li>カラーミーショップ</li>
              <li>SEO、MEO ★★</li>
              <li>コピーのリライト、原稿を再構成で改善 ★★</li>
            </ul>
          </section>
        </div>
      </motion.div>
    </Layout>
  )
}

export default About
