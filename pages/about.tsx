import Image from "next/image"
import Layout from "../components/layout"
import type { NextPage } from "next"
import { motion } from "framer-motion"
import { useMediaQuery } from "react-responsive"
import FadeIn from "../components/FadeIn"

const About: NextPage = () => {
  const isMobile: boolean = useMediaQuery({ query: "(max-width: 768px)" })

  return (
    <Layout title="About" description="About の概要です。">
      <motion.div
        initial={{ opacity: 0 }} // initial
        animate={{ opacity: 1 }} // on mount
        exit={{ opacity: 0 }} // on unmount
      >
        <header className="alignfull bg-zinc-500/10">
          <h1 className="container">About</h1>
        </header>

        {/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/}
        <h1 className="site-title mt-8 text-center text-xs font-normal">
          <Image
            src="/images/souffle/logo.png"
            width={140}
            height={47}
            alt="Knott's Berry"
            className="logo site-branding"
          />
          <br />
          スフレ専門店 ナッツベリー
        </h1>

        {(() => {
          if (typeof window !== "undefined") {
            if (
              window.matchMedia &&
              window.matchMedia("(max-device-width: 640px)").matches
            ) {
              return (
                <div className="hero-image">
                  <Image
                    src="/images/souffle/main.png"
                    width={732}
                    height={869}
                    alt="スフレ"
                  />
                </div>
              )
            } else {
              return (
                <div className="hero-image alignfull relative mt-8 text-center">
                  <Image
                    src="/images/souffle/main_lg.png"
                    width={1600}
                    height={652}
                    alt="スフレ"
                  />
                </div>
              )
            }
          }
        })()}

        <p className="home-catch mt-12 text-center">
          <Image
            src="/images/souffle/top_catch.png"
            width={280}
            height={94}
            alt="あつあつ、ふわふわ。まるで夢を食べているような特別なスフレケーキ"
          />
        </p>
        <p>↑ のメッセージを修正：すべてのお客様に感動を</p>
        <p className="lead mx-auto max-w-xl">
          オーダーを聞いてからつくる、熱々のとろける新感覚デザート。憧れの人と一緒にナッツベリーのスフレを食べれば、映画「麗しのサブリナ」のオードリー・ヘップバーンのように素敵な恋に落ちるかも…
        </p>

        <section className="feature py-16">
          <div className="fadein-images grid flex-row gap-12 sm:grid-cols-3 sm:flex-col sm:gap-8 lg:gap-12">
            <div className="grid__item">
              <div className="media--mobile-2col text-center">
                <FadeIn>
                  <Image
                    src="/images/souffle/feature_dough.png"
                    width={403}
                    height={333}
                    alt="スフレ生地へのこだわり"
                    className="media__img fuwafuwa-a"
                  />
                </FadeIn>
                <div className="media__body mt-4">
                  <p className="feature__sholder text-center text-sm text-secondary">
                    感動の理由 １
                  </p>
                  <p className="feature__title mt-1 text-center text-lg font-bold tracking-widest">
                    <b className="font-serif text-2xl text-primary">生地</b>
                    へのこだわり
                  </p>
                  <p className="feature__body tracking-wide">
                    温度管理をしながら、やさしく生地を混ぜ続ける。職人技で作る生地は絶品です。
                  </p>
                </div>
              </div>
            </div>
            <div className="grid__item">
              <div className="media--mobile-2col media--mobile--inverse text-center">
                <FadeIn delay={isMobile ? 0 : 0.5}>
                  <Image
                    src="/images/souffle/feature_bake.png"
                    width={403}
                    height={333}
                    alt="スフレの焼きへのこだわり"
                    className="media__img fuwafuwa-a"
                  />
                </FadeIn>
                <div className="media__body mt-4">
                  <p className="feature__sholder text-center text-sm text-secondary">
                    感動の理由 2
                  </p>
                  <p className="feature__title mt-1 text-center text-lg font-bold tracking-widest">
                    <b className="font-serif text-2xl text-primary">焼き</b>
                    へのこだわり
                  </p>
                  <p className="feature__body tracking-wide">
                    美味しいスフレのために、ナッツベリーが独自開発した「特別なオーブン」でじっくりと焼き上げます。
                  </p>
                </div>
              </div>
            </div>
            <div className="grid__item">
              <div className="media--mobile-2col text-center">
                <FadeIn delay={isMobile ? 0 : 1}>
                  <Image
                    src="/images/souffle/feature_serve.png"
                    width={403}
                    height={333}
                    alt="３分以内が食べごろ"
                    className="media__img fuwafuwa-a"
                  />
                </FadeIn>
                <div className="media__body mt-4">
                  <p className="feature__sholder text-center text-sm text-secondary">
                    感動の理由 3
                  </p>
                  <p className="feature__title mt-1 text-center text-lg font-bold tracking-widest">
                    食べごろ
                    <b className="font-serif text-2xl text-primary">３分以内</b>
                  </p>
                  <p className="feature__body tracking-wide">
                    できたて熱々が食べごろ。冷めると萎んでしまうから、ナッツベリーの店舗でしか食べることができません。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pickup-menu alignfull relative bg-craft py-16">
          <div className="container">
            <div className="text-center">
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

              <p className="inline-block bg-white px-3 text-xs text-primary">
                アレルギー表示：卵、小麦、乳、一部落花生
              </p>
            </div>

            <div className="fadein-images mt-8 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="grid__item">
                <p className="image-with-border">
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
                <p className="menu__body mt-2 text-sm leading-relaxed tracking-widest">
                  甘さを抑えたさわやかスフレです。デンマーク産の高級クリームチーズをたっぷり使った自慢の逸品です。
                </p>
              </div>
              <div className="grid__item">
                <p className="image-with-border">
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
                <p className="menu__body mt-2 text-sm leading-relaxed tracking-widest">
                  思わず笑みがこぼれちゃう！チョコレートシロップはこだわりの純チョコレート。高品質カカオ64%使用で、ちょっぴり大人な味です。
                </p>
              </div>
              <div className="grid__item">
                <p className="image-with-border">
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
                <p className="menu__body mt-2 text-sm leading-relaxed tracking-widest">
                  メープル好きにはたまらない！メープルをたっぷり入れて焼き上げた風味豊かな優しい味のスフレです。
                </p>
              </div>
              <div className="grid__item">
                <p className="image-with-border">
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
                <p className="menu__body mt-2 text-sm leading-relaxed tracking-widest">
                  カシスの甘ずっぱさがたまらない爽やかなスフレ。ちょっと贅沢なプレートで。あたたかいスフレを冷たいアイスクリームと一緒に。
                  <br />
                  <small>※季節によりトッピング変更</small>
                </p>
              </div>
              <div className="grid__item">
                <p className="image-with-border">
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
                <p className="menu__body mt-2 text-sm leading-relaxed tracking-widest">
                  紅茶の香りが広がる大人の味。オーガニックの紅茶を使ったこだわりの一品です。あたたかいスフレを冷たいアイスクリームと一緒に。
                  <br />
                  <small>※季節によりトッピング変更</small>
                </p>
              </div>
              <div className="grid__item">
                <p className="image-with-border">
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
                <p className="menu__body mt-2 text-sm leading-relaxed tracking-widest">
                  スープやドレッシングも手作りにこだわった美味しいサンドイッチ。他に「チキンサンド」「オムサンド」もあります。
                </p>
              </div>
              <div className="grid__item">
                <p className="image-with-border">
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
                <p className="menu__body mt-2 text-sm leading-relaxed tracking-widest">
                  コーヒー、紅茶、ハーブティ、ジュース、フロートなど、多種多様のドリンクを提供しています。
                  <br />
                  <div
                    className="hs-tooltip inline-block"
                    data-hs-tooltip-trigger="hover"
                  >
                    <a
                      className="hs-tooltip-toggle block text-center"
                      href="javascript:"
                    >
                      <a className="mt-2 text-sm font-semibold">
                        » ドリンクメニューを見る
                      </a>
                      <div
                        className="hs-tooltip-content invisible absolute z-10 inline-block max-w-xs rounded-lg border border-gray-100 bg-white text-left opacity-0 shadow-md transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100 dark:border-gray-700 dark:bg-gray-800"
                        role="tooltip"
                      >
                        <span className="block px-4 pt-3 text-center text-lg font-bold tracking-wider text-primary underline dark:text-white">
                          Drink Menu
                        </span>
                        <div className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">
                          <dl>
                            <dt className="pt-3 font-bold text-secondary-500 first:pt-0 dark:text-white">
                              Coffee:
                            </dt>
                            <dd className="text-gray-600 dark:text-gray-400">
                              ライト(アメリカン)、ミドル(ブレンド)、ヘビー(濃いブレンド)、ストロング(エスプレッソ)、アイスコーヒー、カフェオレ(Hot/Ice)、カフェラテ(Hot/Ice)、ウインナーコーヒー(Hot/Ice)
                            </dd>
                            <dt className="pt-3 font-bold text-secondary-500 first:pt-0 dark:text-white">
                              Tea:
                            </dt>
                            <dd className="text-gray-600 dark:text-gray-400">
                              シンガンパティ(Hot/Ice)、アールグレイ(Hot/Ice)、ダージリン(Hot/Ice)、ハーブティー(Hot)
                            </dd>
                            <dt className="pt-3 font-bold text-secondary-500 first:pt-0 dark:text-white">
                              Juice:
                            </dt>
                            <dd className="text-gray-600 dark:text-gray-400">
                              100%生搾りオレンジ、100%生搾りグレープフルーツ、100%すりおろしリンゴ、生搾りレモンスカッシュ、マンゴージュース、コーラ、ジンジャーエール
                            </dd>
                            <dt className="pt-3 font-bold text-secondary-500 first:pt-0 dark:text-white">
                              Float:
                            </dt>
                            <dd className="text-gray-600 dark:text-gray-400">
                              コーヒーフロート、メロンフロート、いちごフロート、ラムネフロート、コーラフロート、ジンジャーフロート
                            </dd>
                            <dt className="pt-3 font-bold text-secondary-500 first:pt-0 dark:text-white">
                              Others:
                            </dt>
                            <dd className="text-gray-600 dark:text-gray-400">
                              ミルク(Hot/Ice)、ホットチョコレート(カカオ64%)、バニラアイスクリーム
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </a>
                  </div>
                </p>
              </div>
              <div className="grid__item bg-white shadow">
                <p>
                  <Image
                    src="/images/souffle/drink-set-menu.jpg"
                    width={600}
                    height={400}
                    alt="ドリンク付きのセットメニュー"
                    className="souffle-item"
                  />
                </p>
                <div className="p-2">
                  <h3 className="menu__title mt-2 text-center text-lg text-primary">
                    ドリンク付きセットメニュー
                  </h3>
                  <p className="menu__body mt-2 text-sm leading-relaxed tracking-widest">
                    セットメニューには、コーヒー、紅茶、ハーブティーのいずれかのドリンクが付きます。
                  </p>
                  <ul className="mt-2 list-inside list-disc text-sm font-bold text-primary marker:text-secondary-200">
                    <li>
                      ホットコーヒー<small>(ライト/ミドル)</small>
                    </li>
                    <li>アイスコーヒー</li>
                    <li>
                      カフェオレ<small> (Hot/Ice)</small>
                    </li>
                    <li>
                      カフェラテ<small> (Hot/Ice)</small>
                    </li>
                    <li>
                      本日の紅茶<small> (Hot/Ice)</small>
                    </li>
                    <li>
                      ハーブティー<small> (Hot のみ)</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="takeout py-16">
          <div className="container">
            <h2 className="header-deco text-center text-xs font-normal tracking-wide">
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
            <div className="mt-10 lg:grid lg:grid-cols-5 lg:gap-12">
              <div className="col-span-3 text-center">
                <div className="takeout-images text-center">
                  <FadeIn>
                    <Image
                      src="/images/souffle/takeout-images.jpg"
                      width={600}
                      height={700}
                      alt="テイクアウト(サンドイッチ、スフレコーン、店頭)"
                      className="takeout-image"
                    />
                  </FadeIn>
                </div>
              </div>
              <div className="col-span-2">
                <h3 className="text-xl tracking-widest text-primary">
                  サンドイッチ
                </h3>
                <p className="mt-2">
                  テイクアウトのサンドイッチ３種類。セットはドリンク付き。ランチタイムやお帰りの際に、ぜひご利用くださいませ。
                </p>
                <p className="mt-0 text-sm">
                  (ショーケースの中に商品が無くてもお作りできますので、お気軽にお声がけ下さい)
                </p>
                <ul className="mt-3 list-inside list-square font-bold marker:text-primary-200">
                  <li>
                    ミックスサンド{" "}
                    <small className="font-normal">
                      単品 680円 / セット 1,000円
                    </small>
                  </li>
                  <li>
                    チキンサンド{" "}
                    <small className="font-normal">
                      単品 760円 / セット 1,000円
                    </small>
                  </li>
                  <li>
                    オムサンド{" "}
                    <small className="font-normal">
                      単品 710円 / セット 1,000円
                    </small>
                  </li>
                </ul>

                <h3 className="mt-8 text-xl tracking-widest text-primary">
                  ワンハンド・スフレ
                </h3>
                <p className="mt-2">
                  ★★アイスに：片手で持てるスフレコーン。ふわふわのスフレの上にかわいくて美味しいトッピングを載せました。コーンの中にはクリームがたっぷり！
                </p>
                <p className="mt-0 text-sm">
                  (ショーケースの中に商品が無くてもお作りできますので、お気軽にお声がけ下さい)
                </p>
                <ul className="mt-3 list-inside list-square font-bold marker:text-primary-200">
                  <li>
                    チョコレートアイススフレ{" "}
                    <small className="font-normal">単品 500円</small>
                  </li>
                  <li>
                    キャラメルアイススフレ{" "}
                    <small className="font-normal">単品 500円</small>
                  </li>
                  <li>
                    抹茶アイススフレ{" "}
                    <small className="font-normal">単品 500円</small>
                  </li>
                </ul>

                <div className="mt-5 rounded-lg border border-dashed border-secondary-300 py-3 px-5">
                  <p>
                    <b className="text-sm">配達料無料！</b>
                  </p>
                  <h3 className="text-lg text-secondary">
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
        <hr className="border-dashed border-t-primary-300" />

        <section className="voice alignfull relative bg-dots2 py-16">
          <h2 className="header-deco text-center text-xs font-normal tracking-wide">
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

          <div className="container mx-auto max-w-4xl">
            <div className="voice__article mt-5 rounded-2xl border-4 border border-dotted border-primary-200 bg-white/75 p-4">
              <p className="voice__article__title font-bold text-primary">
                ナッツベリーのチーズスフレの大ファンです！
              </p>
              <p className="voice__article__body mt-2">
                地元の人なら知っている有名店。ナッツベリーのチーズスフレの大ファンでよく食べに来ます。昔から通い続けていますがいつ来ても美味しい。長年変わらない味を守ってくれていて嬉しいです。
              </p>
            </div>

            <div className="voice__article mt-5 rounded-2xl border-4 border border-dotted border-primary-200 bg-white/75 p-4">
              <p className="voice__article__title font-bold text-primary">
                口に入れた途端、ふわっふわでとろける食感！
              </p>
              <p className="voice__article__body mt-2">
                初めて焼きたてのスフレケーキを食べました。今まで食べたどのスイーツよりも一番美味しくて驚きました。口に入れた途端なくなるくらいふわっふわでとろける食感、しっかりミルクと卵が感じられて幸せです。季節限定のスフレメニューもあって何度でも通いたくなるお店！
              </p>
            </div>

            <div className="voice__article mt-5 rounded-2xl border-4 border border-dotted border-primary-200 bg-white/75 p-4">
              <p className="voice__article__title font-bold text-primary">
                「熱々で甘さ控えめのスフレ」と「冷たくて甘いクリーム」のバランスが最高！
              </p>
              <p className="voice__article__body mt-2">
                焼き上がりに15〜20分かかるので時間に余裕がある時がオススメ。チーズのとっても良い香りと一緒に運ばれてきます。綺麗な形を崩すのは忍びないけど一気にクリームをスフレの中に落とし込んでいきます。熱々で甘さ控えめのスフレと冷たくて甘いクリームのバランスが良くてとても美味しいです。フワフワで口当たりもとても滑らかだけどしっかり味もついているので、1番シンプルなチーズスフレでも充分満足できました。
                合わせるドリンクは甘くないものがオススメです！
              </p>
            </div>

            <div className="voice__article mt-5 rounded-2xl border-4 border border-dotted border-primary-200 bg-white/75 p-4">
              <p className="voice__article__title font-bold text-primary">
                ハニーマスタードが絶妙で美味しい「チキンサンド」！
              </p>
              <p className="voice__article__body mt-2">
                リニューアルされ、店内は明るく清潔な雰囲気に。テーブル席も増え、落ち着いて過ごせます。全面禁煙になったのでありがたいです。サンドイッチの軽食もあり、ランチタイムも夕方もいつも賑わってます。ミックスサンドはリニューアルしたそうで更に美味しくなっていました。パンはふわふわで、卵焼きは温かく柔らかい。たっぷりの具材で食べ応えもありました。チキンサンドはあつあつのチキンに絡めてあるハニーマスタードが絶妙で美味しい！
              </p>
            </div>

            <div className="voice__article mt-5 rounded-2xl border-4 border border-dotted border-primary-200 bg-white/75 p-4">
              <p className="voice__article__title font-bold text-primary">
                待つこと15分。焼きたてスフレだからこその美味しさがあります。
              </p>
              <p className="voice__article__body mt-2">
                スフレは15分ほど時間がかかるので気長に待ちます。その間にハーブティーが登場。ポット入りで、砂時計の砂が落ちるまでこちらも待ちます。焼き上がったばかりのスフレだからこその美味しさがあります。レモングラスがベースとなったもので飲みやすかったです。ポットの量もしっかり2杯分あり満足。
              </p>
            </div>

            <div className="voice__article mt-5 rounded-2xl border-4 border border-dotted border-primary-200 bg-white/75 p-4">
              <p className="voice__article__title font-bold text-primary">
                ふわふわの食感。口に含むと細かくはぜるように溶けてゆきます
              </p>
              <p className="voice__article__body mt-2">
                ふわふわの食感が楽しい！あっさりしているので、一つ食べてもまだ食べたくなるおいしさ。そっと口に含んでみるとチーズの濃厚な味わいと香りを放出しながらクシュクシュ細かくはぜるように溶けてゆきます。ふんわり軽い生地ですが、存在感のあるスフレです。
              </p>
            </div>

            <div className="voice__article mt-5 rounded-2xl border-4 border border-dotted border-primary-200 bg-white/75 p-4">
              <p className="voice__article__title font-bold text-primary">
                淡く儚い食感なのに、食べ応えもあるスフレ
              </p>
              <p className="voice__article__body mt-2">
                淡く儚い(はかない)食感なのに、食べ応えも同居した存在感のあるスフレ。地がカップから垂直に大きくはみ出ていて上に生クリームが乗ってます。焼き立てなのでチーズが物凄く香ってきます。真ん中を突き崩してクリームと混ぜて食べるよう店員さんが教えてくれます。美味しい珈琲との相性も良かったです。
              </p>
            </div>

            <div className="voice__article mt-5 rounded-2xl border-4 border border-dotted border-primary-200 bg-white/75 p-4">
              <p className="voice__article__title font-bold text-primary">
                スフレのふわふわ感。濃厚だがしつこくなく、美味しかったです
              </p>
              <p className="voice__article__body mt-2">
                店員さんは、いつも愛想がよく、テキパキと働いていらっしゃってすごく気持ちが良いです。スフレ特有のふわふわ感はあるけど、すぐ消えてしまうほどの軽さではなくて、わりとしっかりした生地かと思います。濃いめの味ですが、しつこくないのでペロリと頂けちゃいます。美味しかったです^^
              </p>
            </div>

            <div className="voice__article mt-5 rounded-2xl border-4 border border-dotted border-primary-200 bg-white/75 p-4">
              <p className="voice__article__title font-bold text-primary">
                甘さ控えめ、軽い食感がいい。男性でも美味しくいただけました
              </p>
              <p className="voice__article__body mt-2">
                地元で人気のスフレ。スフレ焼き機は特許品とのこと。甘さ控えめなので、おっさんでも美味しくいただけました♪たっぷり乗った生クリームとスフレ生地の相性も良く、軽い食感がまたいい！レンコン茶も案外口当たりがよく，ハーブティーみたいで美味でした！
              </p>
            </div>

            <div className="voice__article mt-5 rounded-2xl border-4 border border-dotted border-primary-200 bg-white/75 p-4">
              <p className="voice__article__title font-bold text-primary">
                待つこと15分。焼きたてスフレだからこその美味しさがあります。
              </p>
              <p className="voice__article__body mt-2">
                スフレは15分ほど時間がかかるので気長に待ちます。その間にハーブティーが登場。ポット入りで、砂時計の砂が落ちるまでこちらも待ちます。焼き上がったばかりのスフレだからこその美味しさがあります。レモングラスがベースとなったもので飲みやすかったです。ポットの量もしっかり2杯分あり満足。
              </p>
            </div>
          </div>
        </section>
        <hr className="border-dashed border-t-primary-300" />

        <section className="instagram py-16">
          <div className="container--narrow">
            <h2 className="header-deco text-center text-xs font-normal tracking-wide">
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
            <p className="mt-3 text-center">ぜひフォローしてください！</p>
            <p>
              <b>ナッツベリー 公式 Instagram</b>
            </p>
            <p>
              <small>knottsberry_kawanishi</small>
            </p>
            <div className="embed-instagram">★★埋め込み</div>
          </div>
        </section>

        <section className="about alignfull bg-dots3 py-16">
          <div className="container">
            <div className="mt-10 md:grid md:grid-cols-2 md:items-center md:gap-12 lg:grid-cols-5">
              <div className="lg:col-span-2">
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
                <p className="mt-6 font-bold leading-8 tracking-wider text-primary-600">
                  平成元年4月
                  アステ川西にてカフェ開業。創業以来、ナッツベリーのスフレのファンが拡がっています。
                </p>
                <p className="font-bold leading-8 tracking-wider text-primary-700">
                  2010年夏 宝塚花組公演のミュージカル
                  『麗しのサブリナ』で、タカラジェンヌのトップスターが、スフレづくりのシーンを参考するために、ナッツベリーを訪問見学されました。
                </p>
              </div>
              <div className="mt-4 px-12 text-center md:mt-0 lg:col-span-3">
                <FadeIn>
                  <Image
                    src="/images/souffle/shop-images.jpg"
                    width={700}
                    height={628}
                    alt="店舗のイメージ(オードリー・ヘプバーン、スフレ、店内風景)"
                    className="about-image"
                  />
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        <section className="alignfull bg-leaf access relative py-16">
          <div className="md:container">
            <h2 className="header-deco text-center text-xs font-normal tracking-wide">
              <Image
                src="/images/souffle/header_access.png"
                width={130}
                height={27}
                alt="Access"
                className="header-above-image"
              />
              <br />
              アクセス
            </h2>
            <p className="mt-5 text-center">
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
        <footer className="site-footer">
          <div className="footer-shop-information alignfull bg-primary-100 py-16 text-primary-700">
            <div className="container lg:mx-20">
              <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 lg:grid-cols-5 lg:justify-center">
                <div className="lg:col-span-3 lg:text-right">
                  <Image
                    src="/images/souffle/nattsberry_inside.jpg"
                    width={600}
                    height={400}
                    alt="川西市のスフレ専門店 ナッツベリー 店内"
                    className="footer-shop-image"
                  />
                </div>
                <div className="mt-4 text-center md:mt-0 lg:col-span-2">
                  <Image
                    src="/images/souffle/logo.png"
                    width={140}
                    height={47}
                    alt="Knott's Berry"
                    className="logo site-branding"
                  />
                  {/*<Image*/}
                  {/*  src="/images/souffle/logo_white.png"*/}
                  {/*  width={200}*/}
                  {/*  height={72}*/}
                  {/*  alt="Knott's Berry ナッツベリー"*/}
                  {/*  className="footer-logo"*/}
                  {/*/>*/}
                  <p className="-mt-2 text-[10px] font-bold text-primary">
                    スフレ専門店 ナッツベリー
                  </p>
                  <address className="text mt-4 inline-block text-left not-italic">
                    <p>
                      電話番号{" "}
                      <b className="text-lg">
                        <a href="tel:0727552254" className="text-primary-800">
                          072-755-2254
                        </a>
                      </b>
                      <br />
                      営業時間 <b className="text-lg">10:00～22:00</b>
                    </p>
                    <p className="ml-16 mt-0 text-xs">
                      スフレタイム 10:00〜20:15
                      <br />
                      ラストオーダー 19:30
                    </p>
                    休業日{" "}
                    <a
                      href="https://www.astekawanishi.com/sales/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary-800"
                    >
                      アステ川西の休館日
                    </a>
                    に準じます
                    <p className="mt-3 leading-snug">
                      住所 兵庫県川西市栄町25番1号
                      <br />
                      　　 アステ川西TENPO175 248号
                    </p>
                    <p className="ml-9 mt-1 text-xs">
                      阪急川西能勢口駅より徒歩２分
                      <br />
                      JR川西池田駅より徒歩４分
                    </p>
                  </address>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-menu mt-4 text-center text-sm">
            <ul className="inline-flex flex-wrap gap-2">
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

          <p className="copylight mt-3 text-center text-xs">
            (c) 2022 Knott's Berry
          </p>
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
