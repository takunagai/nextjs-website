import Image from "next/image"
import Layout from "../components/layout"
import type { NextPage } from "next"
import { motion } from "framer-motion"

const Preline: NextPage = () => {
  return (
    <Layout title="Preline" description="Preline の概要です。">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h1>Preline (Tailwind CSS UI library)</h1>
        <p>
          <a href="https://preline.co/docs/grid.html">
            Tailwind CSS Grid - Preline UI
          </a>
        </p>
        <section>
          <h2>Container</h2>
          <div className="container">
            <p>
              container (mx-auto): tailwind.config.js に `container: ブレース
              center: true ブレース` で中央揃えのスタイル指定不要に。padding
              でデフォルト指定(レスポンシブ対応)。ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わず生意気たたという口ましだ。勝手たたのましはでまた箱のダミーコピーです上手どものときではさっさと俄たますて、みんなまでぶんを弾いがっことだまし。立っすぎそれは間がひどくたて今の夜中のかっこ動きが
            </p>
          </div>
          <div className="mt-5 md:container">
            <p>
              md:container (md:mx-auto):
              レスポンシブ。ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わず生意気たたという口ましだ。勝手たたのましはでまた箱のダミーコピーです上手どものときではさっさと俄たますて、みんなまでぶんを弾いがっことだまし。立っすぎそれは間がひどくたて今の夜中のかっこ動きが
            </p>
          </div>
        </section>
        <hr className="my-10" />
        <section className="container">
          <h2>Grid</h2>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <Image
                src="/images/sample-image-1.jpg"
                width={500}
                height={375}
                alt="代替テキスト"
              />
              <p>
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
              <p>
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
              <p>
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
              <p>
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
              <p>
                ★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱のダミーコピーです。
              </p>
            </div>
          </div>
        </section>
        <hr className="my-10" />
        <section className="container">
          <h2>Accordion</h2>
          <div className="hs-accordion-group">
            <div className="hs-accordion active" id="hs-basic-heading-one">
              <button
                className="hs-accordion-toggle group inline-flex w-full items-center gap-x-3 py-3 text-left font-semibold text-gray-800 transition hover:text-gray-500 hs-accordion-active:text-blue-600 dark:text-gray-200 dark:hover:text-gray-400 dark:hs-accordion-active:text-blue-600"
                aria-controls="hs-basic-collapse-one"
              >
                <svg
                  className="block h-3 w-3 text-gray-600 group-hover:text-gray-500 hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 dark:text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.62421 7.86L13.6242 7.85999"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8.12421 13.36V2.35999"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <svg
                  className="hidden h-3 w-3 text-gray-600 group-hover:text-gray-500 hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 dark:text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.62421 7.86L13.6242 7.85999"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                Accordion #1
              </button>
              <div
                id="hs-basic-collapse-one"
                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-heading-one"
              >
                <p className="text-gray-800 dark:text-gray-200">
                  <em>This is the third items accordion body.</em> It is hidden
                  by default, until the collapse plugin adds the appropriate
                  classes that we use to style each element. These classes
                  control the overall appearance, as well as the showing and
                  hiding via CSS transitions.
                </p>
              </div>
            </div>

            <div className="hs-accordion" id="hs-basic-heading-two">
              <button
                className="hs-accordion-toggle group inline-flex w-full items-center gap-x-3 py-3 text-left font-semibold text-gray-800 transition hover:text-gray-500 hs-accordion-active:text-blue-600 dark:text-gray-200 dark:hover:text-gray-400 dark:hs-accordion-active:text-blue-600"
                aria-controls="hs-basic-collapse-two"
              >
                <svg
                  className="block h-3 w-3 text-gray-600 group-hover:text-gray-500 hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 dark:text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.62421 7.86L13.6242 7.85999"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8.12421 13.36V2.35999"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <svg
                  className="hidden h-3 w-3 text-gray-600 group-hover:text-gray-500 hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 dark:text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.62421 7.86L13.6242 7.85999"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                Accordion #2
              </button>
              <div
                id="hs-basic-collapse-two"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-heading-two"
              >
                <p className="text-gray-800 dark:text-gray-200">
                  <em>This is the third items accordion body.</em> It is hidden
                  by default, until the collapse plugin adds the appropriate
                  classes that we use to style each element. These classes
                  control the overall appearance, as well as the showing and
                  hiding via CSS transitions.
                </p>
              </div>
            </div>

            <div className="hs-accordion" id="hs-basic-heading-three">
              <button
                className="hs-accordion-toggle group inline-flex w-full items-center gap-x-3 py-3 text-left font-semibold text-gray-800 transition hover:text-gray-500 hs-accordion-active:text-blue-600 dark:text-gray-200 dark:hover:text-gray-400 dark:hs-accordion-active:text-blue-600"
                aria-controls="hs-basic-collapse-three"
              >
                <svg
                  className="block h-3 w-3 text-gray-600 group-hover:text-gray-500 hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 dark:text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.62421 7.86L13.6242 7.85999"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8.12421 13.36V2.35999"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <svg
                  className="hidden h-3 w-3 text-gray-600 group-hover:text-gray-500 hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 dark:text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.62421 7.86L13.6242 7.85999"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                Accordion #3
              </button>
              <div
                id="hs-basic-collapse-three"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-heading-three"
              >
                <p className="text-gray-800 dark:text-gray-200">
                  <em>This is the third items accordion body.</em> It is hidden
                  by default, until the collapse plugin adds the appropriate
                  classes that we use to style each element. These classes
                  control the overall appearance, as well as the showing and
                  hiding via CSS transitions.
                </p>
              </div>
            </div>
          </div>
        </section>
        <hr className="my-10" />
        <h2>Global Navigation</h2>
        <header className="z-50 flex w-full flex-wrap bg-white py-4 text-sm dark:bg-gray-800 sm:flex-nowrap sm:justify-start">
          <nav
            className="mx-auto w-full max-w-[85rem] px-4 sm:flex sm:items-center sm:justify-between"
            aria-label="Global"
          >
            <div className="flex items-center justify-between">
              <a
                className="flex-none text-xl font-semibold dark:text-white"
                href="#"
              >
                Brand
              </a>
              <div className="sm:hidden">
                <button
                  type="button"
                  className="hs-collapse-toggle inline-flex items-center justify-center gap-2 rounded-md border bg-white p-2 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-offset-gray-800"
                  data-hs-collapse="#navbar-collapse-with-animation"
                  aria-controls="navbar-collapse-with-animation"
                  aria-label="Toggle navigation"
                >
                  <svg
                    className="h-4 w-4 hs-collapse-open:hidden"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                  <svg
                    className="hidden h-4 w-4 hs-collapse-open:block"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </button>
              </div>
            </div>
            <div
              id="navbar-collapse-with-animation"
              className="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 sm:block"
            >
              <div className="mt-5 flex flex-col gap-5 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:pl-5">
                <a
                  className="font-medium text-blue-500"
                  href="#"
                  aria-current="page"
                >
                  Landing
                </a>
                <a
                  className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                  href="#"
                >
                  Account
                </a>
                <a
                  className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                  href="#"
                >
                  Work
                </a>
                <a
                  className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                  href="#"
                >
                  Blog
                </a>
              </div>
            </div>
          </nav>
        </header>
        <hr className="my-10" />
        <section className="container">
          <h2>Modal</h2>
          <button
            type="button"
            className="hs-dropdown-toggle inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 py-3 px-4 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            data-hs-modal="#hs-vertically-centered-scrollable-modal"
          >
            Vertically centered scrollable modal
          </button>

          <div
            id="hs-vertically-centered-scrollable-modal"
            className="hs-modal fixed top-0 left-0 z-[60] hidden h-full w-full overflow-y-auto overflow-x-hidden"
          >
            <div className="m-3 mt-0 flex h-[calc(100%-3.5rem)] min-h-[calc(100%-3.5rem)] items-center opacity-0 transition-all ease-out hs-modal-open:mt-7 hs-modal-open:opacity-100 hs-modal-open:duration-500 sm:mx-auto sm:w-full sm:max-w-lg">
              <div className="flex max-h-full flex-col overflow-hidden rounded-xl border bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:shadow-slate-700/[.7]">
                <div className="flex items-center justify-between border-b py-3 px-4 dark:border-gray-700">
                  <h3 className="font-bold text-gray-800 dark:text-white">
                    Modal title
                  </h3>
                  <button
                    type="button"
                    className="hs-dropdown-toggle inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md text-sm text-gray-500 transition-all hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                    data-hs-modal="#hs-vertically-centered-scrollable-modal"
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      className="h-3.5 w-3.5"
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
                <div className="overflow-y-auto p-4">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                        Be bold
                      </h3>
                      <p className="mt-1 text-gray-800 dark:text-gray-400">
                        Motivate teams to do their best work. Offer best
                        practices to getusers going in the right direction. Be
                        bold and offer just enough help to get the work started,
                        and then get out of the way. Give accurate information
                        so users can make educated decisions. Know your users
                        struggles and desired outcomes and give just enough
                        information to let them get where they need to go.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                        Be optimistic
                      </h3>
                      <p className="mt-1 text-gray-800 dark:text-gray-400">
                        Focusing on the details gives people confidence in our
                        products.Weave a consistent story across our fabric and
                        be diligent about vocabulary across all messaging by
                        being brand conscious across products to create a
                        seamless flow across all the things. Let people know
                        that they can jump in and start working expecting to
                        find a dependable experience across all the things. Keep
                        teams in the loop about what is happening by informing
                        them of relevant features, products and opportunities
                        for success. Be on the journey with them and highlight
                        the key points that will help them the most - right now.
                        Be in the moment by focusing attention on the important
                        bits first.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                        Be practical, with a wink
                      </h3>
                      <p className="mt-1 text-gray-800 dark:text-gray-400">
                        Keep our own story short and give teams just enough to
                        get moving. Get to the point and be direct. Be concise -
                        we tell the story of how we can help, but we do it
                        directly and with purpose. Be on the lookout for
                        opportunities and be quick to offer a helping hand. At
                        the same time realize that novbody likes a nosy
                        neighbor. Give the user just enough to know that
                        something awesome is around the corner and then get out
                        of the way. Write clear, accurate, and concise text that
                        makes interfaces more usable and consistent - and builds
                        trust. We strive to write text that is understandable by
                        anyone, anywhere, regardless of their culture or
                        language so that everyone feels they are part of the
                        team.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-x-2 border-t py-3 px-4 dark:border-gray-700">
                  <button
                    type="button"
                    className="hs-dropdown-toggle inline-flex items-center justify-center gap-2 rounded-md border bg-white py-3 px-4 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-offset-gray-800"
                    data-hs-modal="#hs-vertically-centered-scrollable-modal"
                  >
                    Close
                  </button>
                  <a
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 py-3 px-4 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                    href="#"
                  >
                    Save changes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className="my-10" />
        <section>
          <div className="mx-3 rounded-xl border bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:shadow-slate-700/[.7] sm:flex md:mx-0">
            <div className="relative w-full flex-shrink-0 overflow-hidden rounded-t-xl sm:max-w-[15rem] sm:rounded-l-xl md:max-w-xs md:rounded-tr-none">
              <Image
                className="absolute top-0 left-0 h-full w-full object-cover"
                src="https://picsum.photos/id/1/600/400.webp"
                alt="代替テキスト"
                width={600}
                height={400}
              />
            </div>
            <div className="flex flex-wrap">
              <div className="flex h-full flex-col p-4 sm:p-7">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  Card title
                </h3>
                <p className="mt-1 text-gray-800 dark:text-gray-400">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </p>
                <div className="mt-5 sm:mt-auto">
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    Last updated 5 mins ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className="my-10" />
        <section>
          <div
            className="rounded-md border border-yellow-200 bg-yellow-50 p-4"
            role="alert"
          >
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="mt-0.5 h-4 w-4 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-semibold text-yellow-800">
                  Cannot connect to the database
                </h3>
                <div className="mt-1 text-sm text-yellow-700">
                  We are unable to save any progress at this time.
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className="my-10" />
        <section>
          <h2>Table</h2>
          <div className="container flex flex-col">
            {/* mx-auto は、tailwind.config.js で中央揃えにしてるので不要 */}
            <div className="-m-1.5 overflow-x-auto">
              <div className="inline-block min-w-full p-1.5 align-middle">
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500"
                        >
                          Title
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500"
                        >
                          Age
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500"
                        >
                          Address
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-right text-xs font-medium uppercase text-gray-500"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      <tr>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800 dark:text-gray-200">
                          John Brown
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800 dark:text-gray-200">
                          Regional Paradigm Technician
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800 dark:text-gray-200">
                          john@site.com
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800 dark:text-gray-200">
                          45
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800 dark:text-gray-200">
                          New York No. 1 Lake Park
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                          <a
                            className="text-blue-500 hover:text-blue-700"
                            href="#"
                          >
                            Delete
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800 dark:text-gray-200">
                          Jim Green
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800 dark:text-gray-200">
                          Forward Response Developer
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800 dark:text-gray-200">
                          jim@site.com
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800 dark:text-gray-200">
                          27
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800 dark:text-gray-200">
                          London No. 1 Lake Park
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                          <a
                            className="text-blue-500 hover:text-blue-700"
                            href="#"
                          >
                            Delete
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800 dark:text-gray-200">
                          Joe Black
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800 dark:text-gray-200">
                          Product Directives Officer
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800 dark:text-gray-200">
                          joe@site.com
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800 dark:text-gray-200">
                          31
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800 dark:text-gray-200">
                          Sidney No. 1 Lake Park
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                          <a
                            className="text-blue-500 hover:text-blue-700"
                            href="#"
                          >
                            Delete
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className="my-10" />
        <section>
          <h2>Device</h2>
          <h3>Smartphone</h3>
          <figure className="mx-auto h-auto w-60 max-w-full">
            <div className="rounded-3xl bg-gray-800 p-1.5 shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:bg-gray-600 dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]">
              <Image
                src="/images/work-wacca.jpg"
                width={600}
                height={900}
                alt="代替テキスト"
                className="h-auto max-w-full rounded-[1.25rem]"
              />
            </div>
          </figure>
        </section>
      </motion.div>
    </Layout>
  )
}

export default Preline
