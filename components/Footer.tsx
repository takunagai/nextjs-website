const Footer = () => {
  // const footerLinks = [
  //   {
  //     headerTitle: "About",
  //     items: [
  //       {
  //         title: "事業所概要",
  //         url: "about",
  //       },
  //       {
  //         title: "事業所概要",
  //         url: "about",
  //       },
  //     ],
  //   },
  // ];

  return (
    <footer className="mt-auto">
      <div className="container px-5 py-12">
        <div className="order-first flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 className="title-font mb-3 text-sm tracking-widest">About</h2>
            <nav className="mb-10 list-none">
              <li>
                <a className="text-zinc-600 hover:text-zinc-400 dark:text-gray-400 dark:hover:text-gray-200">
                  事業所概要
                </a>
              </li>
              <li>
                <a className="text-zinc-600 hover:text-zinc-400 dark:text-gray-400 dark:hover:text-gray-200">
                  Second Link
                </a>
              </li>
              <li>
                <a className="text-zinc-600 hover:text-zinc-400 dark:text-gray-400 dark:hover:text-gray-200">
                  Third Link
                </a>
              </li>
              <li>
                <a className="text-zinc-600 hover:text-zinc-400 dark:text-gray-400 dark:hover:text-gray-200">
                  Fourth Link
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 className="title-font mb-3 text-sm tracking-widest">
              CATEGORIES
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <a className="text-zinc-600 hover:text-zinc-400 dark:text-gray-400 dark:hover:text-gray-200">
                  First Link
                </a>
              </li>
              <li>
                <a className="text-zinc-600 hover:text-zinc-400 dark:text-gray-400 dark:hover:text-gray-200">
                  Second Link
                </a>
              </li>
              <li>
                <a className="text-zinc-600 hover:text-zinc-400 dark:text-gray-400 dark:hover:text-gray-200">
                  Third Link
                </a>
              </li>
              <li>
                <a className="text-zinc-600 hover:text-zinc-400 dark:text-gray-400 dark:hover:text-gray-200">
                  Fourth Link
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 className="title-font mb-3 text-sm tracking-widest">
              CATEGORIES
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <a className="text-zinc-600 hover:text-zinc-400 dark:text-gray-400 dark:hover:text-gray-200">
                  First Link
                </a>
              </li>
              <li>
                <a className="text-zinc-600 hover:text-zinc-400 dark:text-gray-400 dark:hover:text-gray-200">
                  Second Link
                </a>
              </li>
              <li>
                <a className="text-zinc-600 hover:text-zinc-400 dark:text-gray-400 dark:hover:text-gray-200">
                  Third Link
                </a>
              </li>
              <li>
                <a className="text-zinc-600 hover:text-zinc-400 dark:text-gray-400 dark:hover:text-gray-200">
                  Fourth Link
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 className="title-font mb-3 text-sm tracking-widest">
              SUBSCRIBE
            </h2>
            <div className="flex flex-wrap items-end justify-center md:flex-nowrap md:justify-start lg:flex-wrap xl:flex-nowrap">
              <div className="relative mr-2 w-40 sm:mr-4 sm:w-auto lg:mr-0 xl:mr-4">
                <label
                  htmlFor="footer-field"
                  className="text-sm leading-7 text-gray-600"
                >
                  Placeholder
                </label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200"
                />
              </div>
              <button className="inline-flex flex-shrink-0 rounded border-0 bg-indigo-500 py-2 px-6 text-white hover:bg-indigo-600 focus:outline-none lg:mt-2 xl:mt-0">
                Button
              </button>
            </div>
            <p className="mt-2 text-center text-sm text-gray-500 md:text-left">
              Bitters chicharrones fanny pack
              <br className="hidden lg:block" />
              waistcoat green juice
            </p>
          </div>
        </div>
      </div>
      <FooterBar />
    </footer>
  )
}

const FooterBar = () => {
  return (
    <div className="bg-gray-100">
      <div className="container flex flex-col items-center px-5 py-6 sm:flex-row">
        <a className="title-font flex items-center justify-center md:justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-10 w-10 rounded-full bg-primary p-2 text-white"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl text-primary">SiteName</span>
        </a>
        <p className="mt-4 text-sm text-gray-500 sm:ml-6 sm:mt-0">
          © 2022 nagaishouten.com —
          <a
            href="https://twitter.com/nagai_shouten"
            rel="noopener noreferrer"
            className="ml-1 text-gray-600"
            target="_blank"
          >
            @nagai_shouten
          </a>
        </p>
        <span className="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
          <a className="text-gray-500">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-5 w-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-5 w-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-5 w-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="h-5 w-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </div>
  )
}

export default Footer
