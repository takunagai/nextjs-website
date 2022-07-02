import Image from 'next/image'
import Layout from '../components/layout'
import type { NextPage } from "next"

const Preline: NextPage = () => {
    return (
        <Layout
            title="Preline"
            description="Preline の概要です。"
        >
            <h1>Preline (Tailwind CSS UI library)</h1>
            <p><a href="https://preline.co/docs/grid.html">Tailwind CSS Grid - Preline UI</a></p>
            <section>
                <h2>Container</h2>
                <div className="container">
                    <p>container (mx-auto): tailwind.config.js に `container: ブレース center: true ブレース` で中央揃えのスタイル指定不要に。padding でデフォルト指定(レスポンシブ対応)。ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わず生意気たたという口ましだ。勝手たたのましはでまた箱のダミーコピーです上手どものときではさっさと俄たますて、みんなまでぶんを弾いがっことだまし。立っすぎそれは間がひどくたて今の夜中のかっこ動きが</p>
                </div>
                <div className="md:container mt-5">
                    <p>md:container (md:mx-auto): レスポンシブ。ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わず生意気たたという口ましだ。勝手たたのましはでまた箱のダミーコピーです上手どものときではさっさと俄たますて、みんなまでぶんを弾いがっことだまし。立っすぎそれは間がひどくたて今の夜中のかっこ動きが</p>
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
                        <p>★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱のダミーコピーです。</p>
                    </div>
                    <div>
                        <Image
                            src="/images/sample-image-1.jpg"
                            width={500}
                            height={375}
                            alt="代替テキスト"
                        />
                        <p>★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱のダミーコピーです。</p>
                    </div>
                    <div>
                        <Image
                            src="/images/sample-image-1.jpg"
                            width={500}
                            height={375}
                            alt="代替テキスト"
                        />
                        <p>★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱のダミーコピーです。</p>
                    </div>
                    <div>
                        <Image
                            src="/images/sample-image-1.jpg"
                            width={500}
                            height={375}
                            alt="代替テキスト"
                        />
                        <p>★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱のダミーコピーです。</p>
                    </div>
                    <div>
                        <Image
                            src="/images/sample-image-1.jpg"
                            width={500}
                            height={375}
                            alt="代替テキスト"
                        />
                        <p>★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱のダミーコピーです。</p>
                    </div>
                </div>
            </section>
            <hr className="my-10" />
            <section className="container">
                <h2>Accordion</h2>
                <div className="hs-accordion-group">
                    <div className="hs-accordion active" id="hs-basic-heading-one">
                        <button
                            className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-600 dark:text-gray-200 dark:hover:text-gray-400"
                            aria-controls="hs-basic-collapse-one">
                            <svg
                                className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                                width="16" height="16" viewBox="0 0 16 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round"/>
                                <path d="M8.12421 13.36V2.35999" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round"/>
                            </svg>
                            <svg
                                className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                                width="16" height="16" viewBox="0 0 16 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round"/>
                            </svg>
                            Accordion #1
                        </button>
                        <div id="hs-basic-collapse-one"
                            className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                            aria-labelledby="hs-basic-heading-one">
                            <p className="text-gray-800 dark:text-gray-200">
                                <em>This is the third items accordion body.</em> It is hidden by default, until the
                                collapse plugin adds the appropriate classes that we use to style each element.
                                These classes control the overall appearance, as well as the showing and hiding via
                                CSS transitions.
                            </p>
                        </div>
                    </div>

                    <div className="hs-accordion" id="hs-basic-heading-two">
                        <button
                            className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-600 dark:text-gray-200 dark:hover:text-gray-400"
                            aria-controls="hs-basic-collapse-two">
                            <svg
                                className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                                width="16" height="16" viewBox="0 0 16 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round"/>
                                <path d="M8.12421 13.36V2.35999" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round"/>
                            </svg>
                            <svg
                                className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                                width="16" height="16" viewBox="0 0 16 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round"/>
                            </svg>
                            Accordion #2
                        </button>
                        <div id="hs-basic-collapse-two"
                            className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                            aria-labelledby="hs-basic-heading-two">
                            <p className="text-gray-800 dark:text-gray-200">
                                <em>This is the third items accordion body.</em> It is hidden by default, until the
                                collapse plugin adds the appropriate classes that we use to style each element.
                                These classes control the overall appearance, as well as the showing and hiding via
                                CSS transitions.
                            </p>
                        </div>
                    </div>

                    <div className="hs-accordion" id="hs-basic-heading-three">
                        <button
                            className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-600 dark:text-gray-200 dark:hover:text-gray-400"
                            aria-controls="hs-basic-collapse-three">
                            <svg
                                className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                                width="16" height="16" viewBox="0 0 16 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round"/>
                                <path d="M8.12421 13.36V2.35999" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round"/>
                            </svg>
                            <svg
                                className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                                width="16" height="16" viewBox="0 0 16 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round"/>
                            </svg>
                            Accordion #3
                        </button>
                        <div id="hs-basic-collapse-three"
                            className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                            aria-labelledby="hs-basic-heading-three">
                            <p className="text-gray-800 dark:text-gray-200">
                                <em>This is the third items accordion body.</em> It is hidden by default, until the
                                collapse plugin adds the appropriate classes that we use to style each element.
                                These classes control the overall appearance, as well as the showing and hiding via
                                CSS transitions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="my-10" />
            <h2>Global Navigation</h2>
            <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
              <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                <div className="flex items-center justify-between">
                  <a className="flex-none text-xl font-semibold dark:text-white" href="#">Brand</a>
                  <div className="sm:hidden">
                    <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                      <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                      </svg>
                      <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                      </svg>
                    </button>
                  </div>
                </div>
                <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                  <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
                    <a className="font-medium text-blue-500" href="#" aria-current="page">Landing</a>
                    <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="#">Account</a>
                    <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="#">Work</a>
                    <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="#">Blog</a>
                  </div>
                </div>
              </nav>
            </header>
            <hr className="my-10" />
            <section className="container">
                <h2>Modal</h2>
                <button type="button" className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" data-hs-modal="#hs-vertically-centered-scrollable-modal">
                  Vertically centered scrollable modal
                </button>

                <div id="hs-vertically-centered-scrollable-modal" className="hs-modal hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
                  <div className="hs-modal-open:mt-7 hs-modal-open:opacity-100 hs-modal-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto h-[calc(100%-3.5rem)] min-h-[calc(100%-3.5rem)] flex items-center">
                    <div className="max-h-full overflow-hidden flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                      <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                        <h3 className="font-bold text-gray-800 dark:text-white">
                          Modal title
                        </h3>
                        <button type="button" className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-modal="#hs-vertically-centered-scrollable-modal">
                          <span className="sr-only">Close</span>
                          <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"/>
                          </svg>
                        </button>
                      </div>
                      <div className="p-4 overflow-y-auto">
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Be bold</h3>
                            <p className="mt-1 text-gray-800 dark:text-gray-400">
                              Motivate teams to do their best work. Offer best practices to get users going in the right direction. Be bold and offer just enough help to get the work started, and then get out of the way. Give accurate information so users can make educated decisions. Know your users struggles and desired outcomes and give just enough information to let them get where they need to go.
                            </p>
                          </div>

                          <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Be optimistic</h3>
                            <p className="mt-1 text-gray-800 dark:text-gray-400">
                              Focusing on the details gives people confidence in our products. Weave a consistent story across our fabric and be diligent about vocabulary across all messaging by being brand conscious across products to create a seamless flow across all the things. Let people know that they can jump in and start working expecting to find a dependable experience across all the things. Keep teams in the loop about what is happening by informing them of relevant features, products and opportunities for success. Be on the journey with them and highlight the key points that will help them the most - right now. Be in the moment by focusing attention on the important bits first.
                            </p>
                          </div>

                          <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Be practical, with a wink</h3>
                            <p className="mt-1 text-gray-800 dark:text-gray-400">
                              Keep our own story short and give teams just enough to get moving. Get to the point and be direct. Be concise - we tell the story of how we can help, but we do it directly and with purpose. Be on the lookout for opportunities and be quick to offer a helping hand. At the same time realize that novbody likes a nosy neighbor. Give the user just enough to know that something awesome is around the corner and then get out of the way. Write clear, accurate, and concise text that makes interfaces more usable and consistent - and builds trust. We strive to write text that is understandable by anyone, anywhere, regardless of their culture or language so that everyone feels they are part of the team.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
                        <button type="button" className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-modal="#hs-vertically-centered-scrollable-modal">
                          Close
                        </button>
                        <a className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" href="#">
                          Save changes
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
            </section>
            <hr className="my-10" />
            <section>
                <div className="bg-white border rounded-xl shadow-sm sm:flex dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                  <div className="flex-shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-l-xl sm:max-w-[15rem] md:rounded-tr-none md:max-w-xs">
                    <Image
                        src="https://picsum.photos/id/1/600/400.webp"
                        width={600}
                        height={400}
                        alt="代替テキスト"
                        className="w-full h-full absolute top-0 left-0 object-cover"
                    />
                  </div>
                  <div className="flex flex-wrap">
                    <div className="p-4 flex flex-col h-full sm:p-7">
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white">Card title</h3>
                      <p className="mt-1 text-gray-800 dark:text-gray-400">
                        Some quick example text to build on the card title and make up the bulk of the cards content.
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
                <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4" role="alert">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-4 w-4 text-yellow-400 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm text-yellow-800 font-semibold">
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

            </section>
        </Layout>
    )
}

export default Preline
