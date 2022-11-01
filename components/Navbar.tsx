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
          <Link
            href="/places-and-groups"
            className="font-medium text-primary-700 hover:text-primary-400 dark:text-gray-400 dark:hover:text-gray-500"
          >
            居場所一覧
          </Link>
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
