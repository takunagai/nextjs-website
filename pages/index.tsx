import Image from "next/image";
import Layout from "../components/layout";
// import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <Layout
      home
      title="ナガイ商店.com - 兵庫県川西市 Web 制作"
      description="概要です。"
    >
      <div className="flex h-[80vh] flex-col items-center justify-center bg-zinc-700 py-10 px-4 text-center sm:px-6 md:h-[60vh] lg:px-8">
        <h1 className="text-2xl font-bold text-white sm:text-4xl">
          Cover Page
        </h1>
        <p className="mt-3 text-lg text-gray-300">
          Cover is a one-page template for building simple and beautiful home
          pages using Tailwind CSS.
        </p>
        <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5">
          <a
            className="btn btn--primary btn--icon w-full rounded-full shadow-md sm:w-auto"
            href="https://github.com/htmlstreamofficial/preline/tree/main/examples"
          >
            <svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            Get the source code
          </a>
          <a
            className="btn btn--secondary btn--icon w-full shadow-md sm:w-auto"
            href="#"
          >
            <svg
              className="h-2.5 w-2.5"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M11.2792 1.64001L5.63273 7.28646C5.43747 7.48172 5.43747 7.79831 5.63273 7.99357L11.2792 13.64"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Back to examples
          </a>
        </div>
      </div>

      <p className="lead container mt-8 text-center">
        ★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。
        <br />
        それから思わ口まし勝た(50)しはでまた。
      </p>

      <section className="container mt-8">
        <div className="grid grid-cols-4 gap-4 md:gap-8">
          <div>
            <Image
              src="/images/sample-image-1.jpg"
              width={500}
              height={375}
              alt="代替テキスト"
            />
            <h3 className="mt-2 text-lg">手はおっかさんの演奏硝</h3>
            <p className="mt-2">
              ★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱のダミーコピーです。
            </p>
          </div>
          <div>
            <Image
              src="/images/sample-image-1.jpg"
              width={500}
              height={375}
              alt="代替テキスト"
            />
            <h3 className="mt-2 text-lg">手はおっかさんの演奏硝</h3>
            <p className="mt-2">
              ★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱のダミーコピーです。
            </p>
          </div>
          <div>
            <Image
              src="/images/sample-image-1.jpg"
              width={500}
              height={375}
              alt="代替テキスト"
            />
            <h3 className="mt-2 text-lg">手はおっかさんの演奏硝</h3>
            <p className="mt-2">
              ★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱のダミーコピーです。
            </p>
          </div>
          <div>
            <Image
              src="/images/sample-image-1.jpg"
              width={500}
              height={375}
              alt="代替テキスト"
            />
            <h3 className="mt-2 text-lg">手はおっかさんの演奏硝</h3>
            <p className="mt-2">
              ★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱のダミーコピーです。
            </p>
          </div>
        </div>
      </section>

      <div className="stack-large mt-10">
        <section>
          <h2>見出し2です。</h2>
          <p className="lead mt-5">
            ★★ダミーコピーです手は<a href="#">おっかさんの演奏硝子屋</a>
            をセロに思ったばこだた。
          </p>
          <p>
            <ruby>
              <strong>重ね合わせコンテキスト</strong>
              <rp> (</rp>
              <rt>Stacking context</rt>
              <rp>) </rp>
            </ruby>
            それから思わず生意気たたという口ましだ。勝手たたのましはでまた箱のダミーコピーです上手どものときではさっさと俄たますて、みんなまでぶんを弾いがっことだまし。立っすぎそれは間がひどくたて今の夜中のかっこ動きが、たるめるで片手も一生しがこいまし。こどもは二わから狸のようを出て来う。
          </p>
          <p>
            それから思わず生意気たたという口ましだ。勝手たたのましはでまた箱のダミーコピーです上手どものときではさっさと俄たますて、みんなまでぶんを弾いがっことだまし。立っすぎそれは間がひどくたて今の夜中のかっこ動きが、たるめるで片手も一生しがこいまし。こどもは二わから狸のようを出て来う。
          </p>
        </section>

        <section className="alignwide">
          <h2>幅広：見出し2です。</h2>
          <p className="mt-5">
            ★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わず生意気たたという口ましだ。勝手たたのましはでまた箱のダミーコピーです上手どものときではさっさと俄たますて、みんなまでぶんを弾いがっことだまし。立っすぎそれは間がひどくたて今の夜中のかっこ動きが、たるめるで片手も一生しがこいまし。こどもは二わから狸のようを出て来う。助けはゴーシュかっこうたり何が待ってだしない。マッ子をょっとにしから虎を片手ダミーコピーですのようを教えてかっこうに云いてごうごうとゴがしててるた。ふっとダミーコピーですぶるぶる虎にゴーシュが合わですた。それそうに別をひきて諸君へいった(300文字)。
          </p>
        </section>

        <section className="alignfull">
          <h2>全幅：見出し2です。</h2>
          <p className="mt-5">
            ★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わず生意気たたという口ましだ。勝手たたのましはでまた箱のダミーコピーです上手どものときではさっさと俄たますて、みんなまでぶんを弾いがっことだまし。立っすぎそれは間がひどくたて今の夜中のかっこ動きが、たるめるで片手も一生しがこいまし。こどもは二わから狸のようを出て来う。助けはゴーシュかっこうたり何が待ってだしない。マッ子をょっとにしから虎を片手ダミーコピーですのようを教えてかっこうに云いてごうごうとゴがしててるた。ふっとダミーコピーですぶるぶる虎にゴーシュが合わですた。それそうに別をひきて諸君へいった(300文字)。
          </p>
        </section>

        <section className="bg-pink-50/50 bg-dots bg-fixed py-10 text-black bg-blend-multiply">
          <h2>メモ</h2>
          <ul className="list-disc">
            <li>PostCSS</li>
            <li>
              TailwindCSS
              <ul className="ml-5 list-square">
                <li>
                  jit ([] で個別の値で設定できる、calc()
                  も使える、疑似要素使える)
                </li>
                <li>preline (UI ライブラリ)</li>
                <li>heroicons (アイコンフォント)</li>
                <li>ダークモード</li>
                <li>テーマカラー、そのグラデーション</li>
              </ul>
            </li>
            <li>autoprefixer, import, nesting</li>
            <li>Every Layout</li>
            <li>
              Markdown で投稿 →
              HTML化して表示(remark)、フロントマター(gray-matter)
            </li>
            <li>フェッチ</li>
            <li>fetch メソッド</li>
            <li>swr</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
