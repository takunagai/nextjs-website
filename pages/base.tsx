import Image from "next/image";
import Layout from "../components/layout";
import type { NextPage } from "next";
import { motion } from "framer-motion";

const About: NextPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Layout title="Base" description="ページのベース (Every Layout を参考)">
        <div className="stack-large">
          <section>
            <h1>Every Layout を取り入れてコーディング(無効化中)</h1>
            <h2>見出し２です</h2>
            <h3>見出し３です</h3>
            <h4>見出し４です</h4>
            <h5>見出し５です</h5>
            <h6>見出し６です</h6>
            <p>
              ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝たしはでまた箱のダミーコピーです上手。
            </p>
            <p className="font-size:biggish">
              .font-size:biggish。ここからユーティリティクラスで文字サイズ変更。ダミーコピーでセロに思ったばこだた。勝たしはでまた箱のダミーコピーです上手。
            </p>
            <p className="font-size:big">
              .font-size:big。ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝たしはでまた箱のダミーコピーです上手。
            </p>
            <h2 className="font-size:base">font-size:base。見出し２です</h2>
          </section>
          <section>
            <h2>Modular scale</h2>
            <div>
              <div className="test --s-5"></div>
              <div className="test --s-4"></div>
              <div className="test --s-3"></div>
              <div className="test --s-2"></div>
              <div className="test --s-1"></div>
              <div className="test --s0"></div>
              <div className="test --s1"></div>
              <div className="test --s2"></div>
              <div className="test --s3"></div>
              <div className="test --s4"></div>
              <div className="test --s5"></div>
            </div>
            <div className="scale-15">
              <div className="test --s-5"></div>
              <div className="test --s-4"></div>
              <div className="test --s-3"></div>
              <div className="test --s-2"></div>
              <div className="test --s-1"></div>
              <div className="test --s0"></div>
              <div className="test --s1"></div>
              <div className="test --s2"></div>
              <div className="test --s3"></div>
              <div className="test --s4"></div>
              <div className="test --s5"></div>
            </div>
          </section>

          <section className="stack-small">
            <h2>段落</h2>
            <p>
              p
              ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱
            </p>
            <p>
              p+p
              ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱
            </p>
            <p className="max-inline-size:measure">
              .max-inline-size:measure
              ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱
            </p>
            <p className="max-inline-size:measure/2">
              .max-inline-size:measure/2
              ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱
            </p>
          </section>

          <section className="stack-small">
            <h2>コード</h2>
            <pre>
              <code>
                ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。&lt;/p&gt;
                &lt;p
                className=&quot;max-inline-size:measure&quot;&gt;.max-inline-size:measure
                ダミーコピーです手はおっかさん&lt;/p&gt;
              </code>
            </pre>
          </section>

          <section className="stack-small">
            <h2>The Stack - スタックレイアウトプリミティブ</h2>
            <div className="stack outline-1 outline-cyan-500">
              <div className="outline-1 outline-fuchsia-400">
                <div className="outline-1 outline-lime-400">
                  ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。
                </div>
                <div className="outline-1 outline-lime-400">
                  ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。
                </div>
              </div>
              <div className="outline-1 outline-fuchsia-400">
                直下、かつ前に兄弟要素ある場合のみ上余白が空く。屋をに思ったばこだた。
              </div>
              <div className="outline-1 outline-fuchsia-400">
                ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。
              </div>
            </div>

            <div className="stack stack-exception outline-1 outline-cyan-500">
              <div className="outline-1 outline-fuchsia-400">
                <div className="outline-1 outline-lime-400">
                  カスタムプロパティのオーバーライドを適用する例外クラスで空きを変更。
                </div>
                <div className="outline-1 outline-lime-400">
                  ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。
                </div>
              </div>
              <div className="outline-1 outline-fuchsia-400">
                直下、かつ前に兄弟要素ある場合のみ上余白が空く。屋をに思ったばこだた。
              </div>
              <div className="outline-1 outline-fuchsia-400">
                ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。
              </div>
            </div>

            <div className="stack-small outline-1 outline-cyan-500">
              <div className="outline-1 outline-fuchsia-400">
                <div className="outline-1 outline-lime-400">
                  ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。
                </div>
                <div className="outline-1 outline-lime-400">
                  ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。
                </div>
              </div>
              <div className="outline-1 outline-fuchsia-400">
                直下、かつ前に兄弟要素ある場合のみ上余白が空く。屋をに思ったばこだた。
              </div>
              <div className="outline-1 outline-fuchsia-400">
                ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。
              </div>
            </div>

            <div className="stack-large outline-1 outline-cyan-500">
              <div className="outline-1 outline-fuchsia-400">
                <div className="outline-1 outline-lime-400">
                  ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。
                </div>
                <div className="outline-1 outline-lime-400">
                  ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。
                </div>
              </div>
              <div className="outline-1 outline-fuchsia-400">
                直下、かつ前に兄弟要素ある場合のみ上余白が空く。屋をに思ったばこだた。
              </div>
              <div className="outline-1 outline-fuchsia-400">
                ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。
              </div>
            </div>

            <div className="stack-card outline-1 outline-amber-400">
              <div className="outline-1 outline-fuchsia-400">
                stack-card。2つ目の要素が縦いっぱいに広がる？屋をに思ったばこだた。
              </div>
              <div className="outline-1 outline-fuchsia-400">
                ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。
              </div>
            </div>
          </section>

          <section className="stack-small">
            <h2>The Box</h2>
            <div className="box">
              <p>
                .box。ミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだたから思わ口まし勝た。
              </p>
            </div>

            <div className="box invert">
              <p>
                .box.invert。モノクロ以外は難しい。ダミーコピーです手はおっかさんの演奏硝子屋をセロに。
              </p>
            </div>

            {/*<div className="box" style="--color-dark:maroon;--color-light:#ffffbf">*/}
            <div className="box">
              <p>
                インラインでCSSカスタムプロパティを指定。ダミーコピーです手はおっかさんの演奏硝子屋をセロ
              </p>
            </div>
          </section>

          <section className="stack-small">
            <h2>The Center - 中央揃え</h2>
            {/*<p className="center" style="background-color:gray;width:200px;">外側のブロック要素に中央揃えのスタイルを指定</p>*/}
            <p className="center">
              外側のブロック要素に中央揃えのスタイルを指定
            </p>
            <div className="center-2">
              <button>中の要素を中央揃え</button>
            </div>
          </section>

          <section className="stack-small">
            <h2>The Cluster</h2>
            <ul className="cluster">
              <li>ああああ</li>
              <li>いいいいい</li>
              <li>うううう</li>
              <li>ああああ</li>
              <li>いいいいい</li>
              <li>うううう</li>
              <li>ああああ</li>
              <li>いいいいい</li>
              <li>うううう</li>
              <li>ああああ</li>
              <li>いいいいい</li>
              <li>うううう</li>
              <li>ああああ</li>
              <li>いいいいい</li>
              <li>うううう</li>
            </ul>
            <p>↓ メニュー</p>
            <div className="cluster">
              <b>タイトルロゴ</b>
              <ul className="cluster">
                <li>TOP</li>
                <li>ABOUT</li>
                <li>BLOG</li>
                <li>CONTACT</li>
              </ul>
            </div>
          </section>

          <section>
            <h2>The Sidebar</h2>
            <div className="with-sidebar bg-gray-200">
              <div>
                メインコンテンツ★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱のダミーコピーです上手どもっさと俄たますて、みんなまでぶんを弾いとだまし(100文字)。★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わず生意気たたという口ましだ。勝手たたのましはでまた箱のダミーコピーです上手どものときではさっさと俄たますて、みんなまでぶんを弾いがっことだまし。立っすぎそれは間がひどくたて今の夜中のかっこ動きが、たるめるで片手も一生しがこいまし。こどもは二わから狸のようを出て来う。助けはゴーシュかっこうたり何が待ってだしない。マッ子をょっとにしから虎を片手ダミーコピーですのようを教えてかっこうに云いてごうごうとゴがしててるた。ふっとダミーコピーですぶるぶる虎にゴーシュが合わですた。それそうに別をひきて諸君へいった(300文字)。
              </div>
              <div className="bg-gray-200">
                <h2>サイドバー</h2>
                <ul>
                  <li>ああああ</li>
                  <li>ああああ</li>
                  <li>ああああ</li>
                  <li>ああああ</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="stack-small">
            <h2>The Switcher</h2>
            <div className="switcher">
              <div className="bg-gray-200">
                <p>
                  ★★４つ以下で横並びに。っかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱の
                </p>
              </div>
              <div className="bg-gray-200">
                <p>
                  ★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱の
                </p>
              </div>
              <div className="bg-gray-200">
                <p>
                  ★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱の
                </p>
              </div>
              <div className="bg-gray-200">
                <p>
                  ★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱の
                </p>
              </div>
            </div>
            <div className="switcher">
              <div className="bg-gray-200">
                <p>
                  ★★5つ以上で垂直レイアウトに。の演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱の
                </p>
              </div>
              <div className="bg-gray-200">
                <p>
                  ★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱の
                </p>
              </div>
              <div className="bg-gray-200">
                <p>
                  ★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱の
                </p>
              </div>
              <div className="bg-gray-200">
                <p>
                  ★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱の
                </p>
              </div>
              <div className="bg-gray-200">
                <p>
                  ★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱の
                </p>
              </div>
            </div>
          </section>

          <section className="stack-small">
            <h2>The Cover</h2>
            <div className="cover bg-gray-200">
              <div className="bg-amber-100">header</div>
              <div className="cover__main bg-gray-200">Cover Main</div>
              <div className="bg-amber-100">footer</div>
            </div>
          </section>

          <div className="stack-small">
            <h2>The Grid</h2>
            <div className="grid">
              <div>
                ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝たしはでまた箱のダミーコピーです上手どもっさと俄たますて
              </div>
              <div>
                ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝たしはでまた箱のダミーコピーです上手どもっさと俄たますて
              </div>
              <div>
                ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝たしはでまた箱のダミーコピーです上手どもっさと俄たますて
              </div>
              <div>
                ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝たしはでまた箱のダミーコピーです上手どもっさと俄たますて
              </div>
              <div>
                ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝たしはでまた箱のダミーコピーです上手どもっさと俄たますて
              </div>
              <div>
                ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝たしはでまた箱のダミーコピーです上手どもっさと俄たますて
              </div>
            </div>
          </div>

          <section className="stack-small">
            <h2>The Frame - アスペクト比 ★★うまくいかない？</h2>
            <div className="frame">
              <Image
                src="https://picsum.photos/600/600.webp" // 外部 URL の場合、next.config に要追記
                width={400}
                height={600}
                alt="代替テキスト"
              />
            </div>
            <div className="frame:square">
              <Image
                src="https://picsum.photos/400/600.webp"
                width={400}
                height={600}
                alt="代替テキスト"
              />
            </div>
          </section>
        </div>
      </Layout>
    </motion.div>
  );
};

export default About;
