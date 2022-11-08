import Link from "next/link"

const Navbar = () => {
  return (
    <>
      {/* https://preline.co/docs/mega-menu.html */}
      <div
        id="navbar-collapse"
        className="mx-10 hidden grow basis-full text-sm sm:block"
      >
        <div className="mt-5 flex flex-col gap-5 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:pl-5">
          <Link
            href="/parts"
            className="font-medium text-primary-700 hover:text-primary-400 dark:text-gray-400 dark:hover:text-gray-500"
            aria-current="page"
          >
            Home
          </Link>
          <Link
            href="/flow"
            className="font-medium text-primary-700 hover:text-primary-400 dark:text-gray-400 dark:hover:text-gray-500"
            aria-current="page"
          >
            相談する
          </Link>
          <div className="hs-mega-menu">
            <button
              id="hs-mega-menu-basic-dr"
              type="button"
              className="hs-mega-menu-toggle flex w-full items-center font-medium text-primary-700 hover:text-primary-400 hs-mega-menu-open:text-primary-500 hover:hs-mega-menu-open:text-primary-500 dark:text-gray-400 dark:hover:text-gray-500"
            >
              お役立ち情報
              <svg
                className="ml-2 h-2.5 w-2.5 text-secondary-400"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
              </svg>
            </button>

            <div
              className="hs-mega-menu-content top-full z-10 hidden w-full rounded-md bg-white p-2 opacity-0 transition-[opacity,margin] before:absolute before:-top-5 before:left-0 before:h-5 before:w-full hs-mega-menu-open:opacity-100 dark:bg-gray-800 sm:absolute sm:w-48 sm:shadow-md sm:transition-all sm:duration-300"
              aria-labelledby="hs-mega-menu-basic-dr"
            >
              <Link
                href="/places-and-groups"
                className="flex items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-primary hover:bg-tertiary-100 focus:ring-2 focus:ring-tertiary-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              >
                居場所一覧
              </Link>
              <Link
                href="/reference"
                className="flex items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-primary hover:bg-tertiary-100 focus:ring-2 focus:ring-tertiary-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              >
                相談・教育支援センター
              </Link>
            </div>
          </div>
          <Link
            href="/user-comments"
            className="font-medium text-primary-700 hover:text-primary-400 dark:text-gray-400 dark:hover:text-gray-500"
          >
            ご利用者様の声
          </Link>
          <Link
            href="/faq"
            className="font-medium text-primary-700 hover:text-primary-400 dark:text-gray-400 dark:hover:text-gray-500"
          >
            よくある質問
          </Link>
          <Link
            href="/inquiry"
            className="font-medium text-primary-700 hover:text-primary-400 dark:text-gray-400 dark:hover:text-gray-500"
          >
            お問合せ
          </Link>
        </div>
      </div>
    </>
  )
}

// 配列で管理するサンプル
// const Navbar = () => {
//   return (
//     <div
//       id="navbar-collapse-with-animation"
//       className="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 sm:block"
//     >
//       <ul className="mt-5 flex flex-col gap-5 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:pl-5">
//         {[
//           ["Home", "/"],
//           ["About", "/about"],
//           ["Works", "/works"],
//           ["CSS", "/css"],
//           ["TW Plugins", "/official-plugins"],
//           ["Preline", "/preline"],
//           ["Images", "/images"],
//           ["Base", "/base"],
//           ["Tutorial1", "/tutorial1"],
//           ["Blog", "/posts"],
//           ["Fetch", "/fetch"],
//           ["swr", "/swr"],
//         ].map(([title, url], i) => (
//           <li key={i}>
//             <Link className="text-gray-400 hover:text-gray-500" href={url}>
//               {title}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

export default Navbar
