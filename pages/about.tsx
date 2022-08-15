import Image from "next/image"
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
        <header className="alignfull bg-zinc-500/10">
          <h1 className="container">About</h1>
        </header>

        {/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/}
        <div className="alignfull flex h-[80vh] flex-col items-center justify-center bg-zinc-700 py-10 px-4 text-center sm:px-6 md:h-[60vh] lg:h-[70vh] lg:px-8">
          <h1 className="text-2xl font-bold text-white sm:text-4xl">
            Cover Page
          </h1>
          <p className="mt-3 text-lg text-gray-300">
            Cover is a one-page template for building simple and beautiful home
            pages using Tailwind CSS.
          </p>
        </div>
        <p className="home-catch aligncenter">
          <Image
            src="/images/souffle/top_catch.png"
            width={500}
            height={375}
            alt="あつあつ、ふわふわ。まるで夢を食べているような特別なスフレケーキ"
          />
        </p>
        <p>↑ のメッセージを修正：すべてのお客様に感動を</p>
        <p className="lead">
          オーダーを聞いてからつくる、熱々のとろける新感覚デザート。憧れの人と一緒にナッツベリーのスフレを食べれば、映画「麗しのサブリナ」のオードリー・ヘップバーンのように素敵な恋に落ちるかも…
        </p>

        <section className="feature container py-16">
          <div className="fadein-images grid gap-8">
            <div className="grid__item">
              <div className="media--mobile-2col">
                <Image
                  src="/images/souffle/feature_dough.png"
                  width={403}
                  height={333}
                  alt="スフレ生地へのこだわり"
                  className="media__img fuwafuwa-a"
                />
                <div className="media__body mt-4">
                  <p className="feature__sholder text-center text-sm">
                    感動の理由 １
                  </p>
                  <p className="feature__title mt-1 text-center text-2xl">
                    <b>生地</b>へのこだわり
                  </p>
                  <p className="feature__body tracking-wide">
                    温度管理をしながら、やさしく生地を混ぜ続ける。職人技で作る生地は絶品です。
                  </p>
                </div>
              </div>
            </div>
            <div className="grid__item">
              <div className="media--mobile-2col media--mobile--inverse">
                <Image
                  src="/images/souffle/feature_bake.png"
                  width={403}
                  height={333}
                  alt="スフレの焼きへのこだわり"
                  className="media__img fuwafuwa-a"
                />
                <div className="media__body mt-4">
                  <p className="feature__sholder text-center text-sm">
                    感動の理由 2
                  </p>
                  <p className="feature__title mt-1 text-center text-2xl">
                    <b>焼き</b>へのこだわり
                  </p>
                  <p className="feature__body tracking-wide">
                    美味しいスフレのために、ナッツベリーが独自開発した「特別なオーブン」でじっくりと焼き上げます。
                  </p>
                </div>
              </div>
            </div>
            <div className="grid__item">
              <div className="media--mobile-2col">
                <Image
                  src="/images/souffle/feature_serve.png"
                  width={403}
                  height={333}
                  alt="３分以内が食べごろ"
                  className="media__img fuwafuwa-a"
                />
                <div className="media__body mt-4">
                  <p className="feature__sholder text-center text-sm">
                    感動の理由 3
                  </p>
                  <p className="feature__title mt-1 text-center text-2xl">
                    食べごろ<b>３分以内</b>
                  </p>
                  <p className="feature__body tracking-wide">
                    できたて熱々が食べごろ。冷めると萎んでしまうから、ナッツベリーの店舗でしか食べることができません。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="menu alignfull bg-dots py-16">
          <div className="container">
            <div className="aligncenter">
              <h2 className="text-center text-xs font-normal tracking-wide">
                <Image
                  src="/images/souffle/header_menu.png"
                  width={98}
                  height={28}
                  alt="Menu"
                  className="header-above-image"
                />
                <br />
                スフレ メニュー
              </h2>
              <p className="mt-8">
                ご注文をいただいてから作りますので、焼き上がりまで15〜20分ちょうだいいたします。
              </p>
              <p className="mt-0 text-sm">
                (混雑時にはさらにお時間がかかる場合があります)
              </p>
              <p>アレルギー表示：卵、小麦、乳、一部落花生</p>
            </div>

            <div className="fadein-images mt-8 grid gap-8">
              <div className="grid__item">
                <p className="menu__img">
                  <Image
                    src="/images/souffle/souffle_cheese.jpg"
                    width={600}
                    height={400}
                    alt="チーズスフレ"
                    className="souffle-item rounded-lg"
                  />
                </p>
                <h3 className="menu__title mt-2 text-center text-lg text-primary">
                  チーズスフレ
                </h3>
                <p className="menu__price text-center text-xs">
                  単品 730円/セット1,200円
                </p>
                <p className="menu__body mt-2">
                  甘さを抑えたさわやかスフレです。デンマーク産の高級クリームチーズをたっぷり使った自慢の逸品です。
                </p>
              </div>
              <div className="grid__item">
                <p className="menu__img">
                  <Image
                    src="/images/souffle/souffle_chocolate.jpg"
                    width={600}
                    height={400}
                    alt="ショコラスフレ"
                    className="souffle-item rounded-lg"
                  />
                </p>
                <h3 className="menu__title mt-2 text-center text-lg text-primary">
                  ショコラスフレ
                </h3>
                <p className="menu__price text-center text-xs">
                  単品 780円/セット1,250円
                </p>
                <p className="menu__body mt-2">
                  思わず笑みがこぼれちゃう！チョコレートシロップはこだわりの純チョコレート。高品質カカオ64%使用で、ちょっぴり大人な味です。
                </p>
              </div>
              <div className="grid__item">
                <p className="menu__img">
                  <Image
                    src="/images/souffle/souffle_maple.jpg"
                    width={600}
                    height={400}
                    alt="メープルスフレ"
                    className="souffle-item rounded-lg"
                  />
                </p>
                <h3 className="menu__title mt-2 text-center text-lg text-primary">
                  メープルスフレ
                </h3>
                <p className="menu__price text-center text-xs">
                  単品 780円/セット1,250円
                </p>
                <p className="menu__body mt-2">
                  メープル好きにはたまらない！メープルをたっぷり入れて焼き上げた風味豊かな優しい味のスフレです。
                </p>
              </div>
              <div className="grid__item">
                <p className="menu__img">
                  <Image
                    src="/images/souffle/souffle_plate-berry.jpg"
                    width={600}
                    height={400}
                    alt="プレート ベリースフレ"
                    className="souffle-item rounded-lg"
                  />
                </p>
                <h3 className="menu__title mt-2 text-center text-lg text-primary">
                  プレート ベリースフレ
                </h3>
                <p className="menu__price text-center text-xs">
                  単品 930円/セット1,400円
                </p>
                <p className="menu__body mt-2">
                  カシスの甘ずっぱさがたまらない爽やかなスフレ。ちょっと贅沢なプレートで。あたたかいスフレを冷たいアイスクリームと一緒に。
                  <small>※季節によりトッピング変更</small>
                </p>
              </div>
              <div className="grid__item">
                <p className="menu__img">
                  <Image
                    src="/images/souffle/souffle_plate-tea.jpg"
                    width={600}
                    height={400}
                    alt="プレート 紅茶スフレ"
                    className="souffle-item rounded-lg"
                  />
                </p>
                <h3 className="menu__title mt-2 text-center text-lg text-primary">
                  プレート 紅茶スフレ
                </h3>
                <p className="menu__price text-center text-xs">
                  単品 930円/セット1,400円
                </p>
                <p className="menu__body mt-2">
                  紅茶の香りが広がる大人の味。オーガニックの紅茶を使ったこだわりの一品です。あたたかいスフレを冷たいアイスクリームと一緒に。
                  <small>※季節によりトッピング変更</small>
                </p>
              </div>
              <div className="grid__item">
                <p className="menu__img">
                  <Image
                    src="/images/souffle/mix-sandwitch.jpg"
                    width={600}
                    height={400}
                    alt="ワンプレートミックスサンド"
                    className="souffle-item rounded-lg"
                  />
                </p>
                <h3 className="menu__title mt-2 text-center text-lg text-primary">
                  ワンプレートミックスサンド
                </h3>
                <p className="menu__price text-center text-xs">
                  単品 800円/セット1,270円
                </p>
                <p className="menu__body mt-2">
                  スープやドレッシングも手作りにこだわった美味しいサンドイッチ。他に「チキンサンド」「オムサンド」もあります。
                </p>
              </div>
              <div className="grid__item">
                <p className="menu__img">
                  <Image
                    src="/images/souffle/hot-chocolate.jpg"
                    width={600}
                    height={400}
                    alt="ドリンクメニュー"
                    className="souffle-item rounded-lg"
                  />
                </p>
                <h3 className="menu__title mt-2 text-center text-lg text-primary">
                  ドリンクメニュー
                </h3>
                <p className="menu__price text-center text-xs">530円〜</p>
                <p className="menu__body mt-2">
                  コーヒー、紅茶、ハーブティ、ジュース、フロートなど、多種多様のドリンクを提供しています。
                  <br />
                  <a href="#">» ドリンクメニューを見る</a>
                </p>
              </div>
              <div className="grid__item">
                <p className="menu__img">
                  <Image
                    src="/images/souffle/drink-set-menu.jpg"
                    width={600}
                    height={400}
                    alt="ドリンク付きのセットメニュー"
                    className="souffle-item rounded-lg"
                  />
                </p>
                <h3 className="menu__title mt-2 text-center text-lg text-primary">
                  ドリンク付きのセットメニュー
                </h3>
                <p className="menu__body mt-2">
                  セットメニューには、「コーヒー」「紅茶」「ハーブティー」のいずれかのドリンクが付きます。
                </p>
                <ul className="mt-3 list-inside list-disc text-sm font-bold text-primary">
                  <li>ホットコーヒー(ライト/ミドル)</li>
                  <li>アイスコーヒー</li>
                  <li>カフェオレ (ホット/アイス)</li>
                  <li>カフェラテ (ホット/アイス)</li>
                  <li>本日の紅茶 (ホット/アイス)</li>
                  <li>ハーブティー (ホットのみ)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="takeout py-16">
          <div className="container">
            <h2 className="text-center text-xs font-normal tracking-wide">
              <Image
                src="/images/souffle/header_takeout.png"
                width={147}
                height={29}
                alt="Takeout"
                className="header-above-image"
              />
              <br />
              テイクアウト・配達
            </h2>
            <div className="mt-10 grid">
              <div className="text-center">
                <div className="takeout-images">
                  <Image
                    src="/images/souffle/takeout_sandwitches.jpg"
                    width={364}
                    height={458}
                    alt="サンドイッチ(テイクアウト)"
                    className="takeout-image"
                  />
                  <Image
                    src="/images/souffle/takeout_one-hand-souffle-ice.jpg"
                    width={364}
                    height={458}
                    alt="ワンハンド・スフレ３種"
                    className="takeout-image"
                  />
                  <Image
                    src="/images/souffle/takeout_counter.jpg"
                    width={364}
                    height={458}
                    alt="テイクアウトのカウンター"
                    className="takeout-image"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg text-primary">
                  サンドイッチ(テイクアウト)
                </h3>
                <p className="mt-2">
                  テイクアウトのサンドイッチ３種類。セットはドリンク付き。ランチタイムやお帰りの際に、ぜひご利用くださいませ。
                </p>
                <p className="mt-2 text-sm">
                  (ショーケースの中に商品が無くてもお作りできますので、お気軽にお声がけ下さい)
                </p>
                <ul className="mt-3 list-inside list-square font-bold">
                  <li>
                    ミックスサンド <small>単品 680円 / セット 1,000円</small>
                  </li>
                  <li>
                    チキンサンド <small>単品 760円 / セット 1,000円</small>
                  </li>
                  <li>
                    オムサンド <small>単品 710円 / セット 1,000円</small>
                  </li>
                </ul>

                <h3 className="mt-5 text-lg text-primary">
                  ワンハンド・スフレ
                </h3>
                <p className="mt-2 text-sm">
                  ★★アイスに：片手で持てるスフレコーン。ふわふわのスフレの上にかわいくて美味しいトッピングを載せました。コーンの中にはクリームがたっぷり！
                </p>
                <p className="mt-2 text-sm">
                  (ショーケースの中に商品が無くてもお作りできますので、お気軽にお声がけ下さい)
                </p>
                <ul className="mt-3 list-inside list-square font-bold">
                  <li>
                    チョコレートアイススフレ <small>単品 500円</small>
                  </li>
                  <li>
                    キャラメルアイススフレ <small>単品 500円</small>
                  </li>
                  <li>
                    抹茶アイススフレ <small>単品 500円</small>
                  </li>
                </ul>

                <div className="mt-5 rounded-lg border p-3">
                  <p>
                    <b className="text-sm">配達料無料！</b>
                  </p>
                  <h3 className="text-lg text-primary">
                    お近くならデリバリーいたします！
                  </h3>
                  <p>
                    店舗の近くであれば、サンドイッチを配達でお届けすることも可能です。詳細は店舗までお電話ください。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="voice py-16">
          <h2 className="text-center text-xs font-normal tracking-wide">
            <Image
              src="/images/souffle/header_voice.png"
              width={107}
              height={28}
              alt="Voice"
              className="header-above-image"
            />
            <br />
            お客様の声
          </h2>
          <p className="text-center">
            お客様からいただいた声の一部を紹介します！
          </p>

          <div className="mx-auto max-w-4xl">
            <div className="voice__article mt-3 rounded-2xl border-4 border border-dotted border-primary-200 p-3">
              <p className="voice__article__title font-bold text-primary">
                ナッツベリーのチーズスフレの大ファンです！
              </p>
              <p className="voice__article__body mt-2">
                地元の人なら知っている有名店。ナッツベリーのチーズスフレの大ファンでよく食べに来ます。昔から通い続けていますがいつ来ても美味しい。長年変わらない味を守ってくれていて嬉しいです。
              </p>
            </div>

            <div className="voice__article mt-3 rounded-2xl border-4 border border-dotted border-primary-200 p-3">
              <p className="voice__article__title font-bold text-primary">
                口に入れた途端、ふわっふわでとろける食感！
              </p>
              <p className="voice__article__body mt-2">
                初めて焼きたてのスフレケーキを食べました。今まで食べたどのスイーツよりも一番美味しくて驚きました。口に入れた途端なくなるくらいふわっふわでとろける食感、しっかりミルクと卵が感じられて幸せです。季節限定のスフレメニューもあって何度でも通いたくなるお店！
              </p>
            </div>

            <div className="voice__article mt-3 rounded-2xl border-4 border border-dotted border-primary-200 p-3">
              <p className="voice__article__title font-bold text-primary">
                「熱々で甘さ控えめのスフレ」と「冷たくて甘いクリーム」のバランスが最高！
              </p>
              <p className="voice__article__body mt-2">
                焼き上がりに15〜20分かかるので時間に余裕がある時がオススメ。チーズのとっても良い香りと一緒に運ばれてきます。綺麗な形を崩すのは忍びないけど一気にクリームをスフレの中に落とし込んでいきます。熱々で甘さ控えめのスフレと冷たくて甘いクリームのバランスが良くてとても美味しいです。フワフワで口当たりもとても滑らかだけどしっかり味もついているので、1番シンプルなチーズスフレでも充分満足できました。
                合わせるドリンクは甘くないものがオススメです！
              </p>
            </div>

            <div className="voice__article mt-3 rounded-2xl border-4 border border-dotted border-primary-200 p-3">
              <p className="voice__article__title font-bold text-primary">
                ハニーマスタードが絶妙で美味しい「チキンサンド」！
              </p>
              <p className="voice__article__body mt-2">
                リニューアルされ、店内は明るく清潔な雰囲気に。テーブル席も増え、落ち着いて過ごせます。全面禁煙になったのでありがたいです。サンドイッチの軽食もあり、ランチタイムも夕方もいつも賑わってます。ミックスサンドはリニューアルしたそうで更に美味しくなっていました。パンはふわふわで、卵焼きは温かく柔らかい。たっぷりの具材で食べ応えもありました。チキンサンドはあつあつのチキンに絡めてあるハニーマスタードが絶妙で美味しい！
              </p>
            </div>

            <div className="voice__article mt-3 rounded-2xl border-4 border border-dotted border-primary-200 p-3">
              <p className="voice__article__title font-bold text-primary">
                待つこと15分。焼きたてスフレだからこその美味しさがあります。
              </p>
              <p className="voice__article__body mt-2">
                スフレは15分ほど時間がかかるので気長に待ちます。その間にハーブティーが登場。ポット入りで、砂時計の砂が落ちるまでこちらも待ちます。焼き上がったばかりのスフレだからこその美味しさがあります。レモングラスがベースとなったもので飲みやすかったです。ポットの量もしっかり2杯分あり満足。
              </p>
            </div>

            <div className="voice__article mt-3 rounded-2xl border-4 border border-dotted border-primary-200 p-3">
              <p className="voice__article__title font-bold text-primary">
                ふわふわの食感。口に含むと細かくはぜるように溶けてゆきます
              </p>
              <p className="voice__article__body mt-2">
                ふわふわの食感が楽しい！あっさりしているので、一つ食べてもまだ食べたくなるおいしさ。そっと口に含んでみるとチーズの濃厚な味わいと香りを放出しながらクシュクシュ細かくはぜるように溶けてゆきます。ふんわり軽い生地ですが、存在感のあるスフレです。
              </p>
            </div>

            <div className="voice__article mt-3 rounded-2xl border-4 border border-dotted border-primary-200 p-3">
              <p className="voice__article__title font-bold text-primary">
                淡く儚い食感なのに、食べ応えもあるスフレ
              </p>
              <p className="voice__article__body mt-2">
                淡く儚い(はかない)食感なのに、食べ応えも同居した存在感のあるスフレ。地がカップから垂直に大きくはみ出ていて上に生クリームが乗ってます。焼き立てなのでチーズが物凄く香ってきます。真ん中を突き崩してクリームと混ぜて食べるよう店員さんが教えてくれます。美味しい珈琲との相性も良かったです。
              </p>
            </div>

            <div className="voice__article mt-3 rounded-2xl border-4 border border-dotted border-primary-200 p-3">
              <p className="voice__article__title font-bold text-primary">
                スフレのふわふわ感。濃厚だがしつこくなく、美味しかったです
              </p>
              <p className="voice__article__body mt-2">
                店員さんは、いつも愛想がよく、テキパキと働いていらっしゃってすごく気持ちが良いです。スフレ特有のふわふわ感はあるけど、すぐ消えてしまうほどの軽さではなくて、わりとしっかりした生地かと思います。濃いめの味ですが、しつこくないのでペロリと頂けちゃいます。美味しかったです^^
              </p>
            </div>

            <div className="voice__article mt-3 rounded-2xl border-4 border border-dotted border-primary-200 p-3">
              <p className="voice__article__title font-bold text-primary">
                甘さ控えめ、軽い食感がいい。男性でも美味しくいただけました
              </p>
              <p className="voice__article__body mt-2">
                地元で人気のスフレ。スフレ焼き機は特許品とのこと。甘さ控えめなので、おっさんでも美味しくいただけました♪たっぷり乗った生クリームとスフレ生地の相性も良く、軽い食感がまたいい！レンコン茶も案外口当たりがよく，ハーブティーみたいで美味でした！
              </p>
            </div>

            <div className="voice__article mt-3 rounded-2xl border-4 border border-dotted border-primary-200 p-3">
              <p className="voice__article__title font-bold text-primary">
                待つこと15分。焼きたてスフレだからこその美味しさがあります。
              </p>
              <p className="voice__article__body mt-2">
                スフレは15分ほど時間がかかるので気長に待ちます。その間にハーブティーが登場。ポット入りで、砂時計の砂が落ちるまでこちらも待ちます。焼き上がったばかりのスフレだからこその美味しさがあります。レモングラスがベースとなったもので飲みやすかったです。ポットの量もしっかり2杯分あり満足。
              </p>
            </div>
          </div>
        </section>

        <section className="instagram py-16">
          <div className="container--narrow">
            <h2 className="text-center text-xs font-normal tracking-wide">
              <Image
                src="/images/souffle/header_instagram.png"
                width={149}
                height={29}
                alt="Instagram"
                className="header-above-image"
              />
              <br />
              ギャラリー
            </h2>
            <p>ぜひフォローしてください！</p>
            <p>
              <b>ナッツベリー 公式 Instagram</b>
            </p>
            <p>
              <small>knottsberry_kawanishi</small>
            </p>
            <div className="embed-instagram">★★埋め込み</div>
          </div>
        </section>

        <section className="about py-16">
          <div className="mt-10 grid">
            <div>
              <h2 className="text-center text-xs font-normal tracking-wide">
                <Image
                  src="/images/souffle/header_about.png"
                  width={88}
                  height={24}
                  alt="About"
                  className="header-above-image"
                />
                <br />
                ナッツベリーについて
              </h2>
              <p className="mt-4">
                平成元年4月
                アステ川西にてカフェ開業。創業以来、ナッツベリーのスフレのファンが拡がっています。
              </p>
              <p>
                2010年夏 宝塚花組公演のミュージカル
                『麗しのサブリナ』で、タカラジェンヌのトップスターが、スフレづくりのシーンを参考するために、ナッツベリーを訪問見学されました。
              </p>
            </div>
            <div>
              <Image
                src="/images/souffle/about_audrey.jpg"
                width={260}
                height={395}
                alt="オードリー・ヘプバーン"
                className="about-image"
              />
              <Image
                src="/images/souffle/about_souffle.jpg"
                width={350}
                height={234}
                alt="こだわりのスフレ"
                className="about-image"
              />
              <Image
                src="/images/souffle/about_interior.jpg"
                width={350}
                height={234}
                alt="スフレ専門店 ナッツベリーの店内"
                className="about-image"
              />
            </div>
          </div>
        </section>

        <section className="access bg-leaf py-16">
          <div className="container--narrow">
            <h2 className="text-center text-xs font-normal tracking-wide">
              <Image
                src="/images/souffle/header_access.png"
                width={130}
                height={27}
                alt="Access"
                className="header-above-image"
              />
              <img src="" width="" height="" alt="Access" />
              <br />
              アクセス
            </h2>
            <p>
              ナッツベリーの店舗は、阪急川西能勢口駅より徒歩２分、JR川西池田駅より徒歩４分の「アステ川西」２階にあります。
            </p>
            <div className="embed-container mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.1814514062803!2d135.41077131560328!3d34.82653007550028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000f729e9167133%3A0x59dbbcbb7a653741!2z44CSNjY2LTAwMzMg5YW15bqr55yM5bed6KW_5biC5qCE55S677yS77yV4oiS77yR!5e0!3m2!1sja!2sjp!4v1570938894632!5m2!1sja!2sjp"
                width="600"
                height="450"
                className="mx-auto border-0"
                allowFullScreen={false}
              ></iframe>
            </div>
            <p className="mt-1 text-center">
              <small>
                <a
                  href="https://goo.gl/maps/ZmQsXe6CbTe4kv9S6"
                  target="_blank"
                  rel="noreferrer"
                >
                  » Googleマップで見る
                </a>
              </small>
            </p>
          </div>
        </section>
        <footer className="site-footer alignfull bg-primary-100 py-16">
          <div className="footer-shop-information">
            <div className="container">
              <div className="grid">
                <div>
                  <Image
                    src="/images/souffle/nattsberry_inside.jpg"
                    width={600}
                    height={400}
                    alt="川西市のスフレ専門店 ナッツベリー 店内"
                    className="footer-shop-image"
                  />
                </div>
                <div className="text-center">
                  <Image
                    src="/images/souffle/logo_white.png"
                    width={200}
                    height={72}
                    alt="Knott's Berry ナッツベリー"
                    className="footer-logo"
                  />
                  <p className="-mt-4 text-sm font-bold text-primary">
                    スフレ専門店 ナッツベリー
                  </p>
                  <address className="text text- mt-4 text-left not-italic">
                    <p>
                      電話番号{" "}
                      <b className="text-lg">
                        <a href="tel:0727552254">072-755-2254</a>
                      </b>
                      <br />
                      営業時間 <b className="text-lg">10:00～22:00</b>
                    </p>
                    <p className="mt-0 text-xs">
                      　スフレタイム 10:00〜20:15
                      <br />
                      　ラストオーダー 19:30
                    </p>
                    休業日{" "}
                    <a
                      href="https://www.astekawanishi.com/sales/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      アステ川西の休館日
                    </a>
                    に準じます
                    <p className="mt-3">
                      住所 兵庫県川西市栄町25番1号 アステ川西TENPO175 248号
                    </p>
                    <p className="mt-0 text-xs">
                      阪急川西能勢口駅より徒歩２分
                      <br />
                      JR川西池田駅より徒歩４分
                    </p>
                  </address>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-menu">
            <ul className="inline">
              <li>
                <a href="./index.html">Home</a>
              </li>
              <li>
                <a href="./recipe_development.php">
                  スフレをメニューにしたい方へ
                </a>
              </li>
              <li>
                <a href="./recruit.html">求人情報</a>
              </li>
              <li>
                <a href="./privacy_policy.html">個人情報保護方針</a>
              </li>
              <li>
                <a href="./inquiry.php">お問合せ</a>
              </li>
            </ul>
          </div>

          <p className="copylight mt-3">(c) 2022 Knott's Berry</p>
        </footer>

        {/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/}

        <div className="prose prose-sm prose-zinc prose-pink max-w-none dark:prose-invert lg:prose-base">
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
