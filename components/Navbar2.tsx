import Link from "next/link";

const Navbar2 = () => {
  return (
    <>
      {/* https://preline.co/docs/mega-menu.html */}
      <div
        id="navbar-collapse-basic"
        className="mx-10 hidden grow basis-full sm:block"
      >
        <div className="mt-5 flex flex-col gap-5 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:pl-5">
          <Link href="/about">
            <a
              className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
              aria-current="page"
            >
              About
            </a>
          </Link>

          <div className="hs-mega-menu">
            <button
              id="hs-mega-menu-basic-dr"
              type="button"
              className="hs-mega-menu-toggle flex w-full items-center font-medium text-gray-600 hover:text-gray-400 hs-mega-menu-open:text-gray-500 hover:hs-mega-menu-open:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500"
            >
              Web 制作
              <svg
                className="ml-2 h-2.5 w-2.5 text-gray-600"
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
              <a
                className="flex items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                href="#"
              >
                WordPress
              </a>
              <div className="hs-mega-menu relative rounded-md sm:flex sm:items-center sm:gap-x-3.5">
                <a
                  id="hs-mega-menu-basic-sub-dr"
                  className="hs-mega-menu-toggle flex w-full items-center justify-between rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  href="javascript:;"
                >
                  Sub menu
                  <svg
                    className="ml-2 h-2.5 w-2.5 text-gray-600 sm:-rotate-90"
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
                </a>

                <div
                  className="hs-mega-menu-content top-0 left-full z-10 hidden w-full bg-white p-2 opacity-0 transition-[opacity,margin] before:absolute before:top-0 before:-left-5 before:h-full before:w-5 after:absolute after:top-0 after:-right-5 after:h-full after:w-5 hs-mega-menu-open:opacity-100 dark:bg-gray-800 sm:absolute sm:mx-2.5 sm:mt-2 sm:w-48 sm:rounded-md sm:shadow-md sm:transition-all sm:duration-300 sm:hs-mega-menu-open:mt-0"
                  aria-labelledby="hs-mega-menu-basic-sub-dr"
                >
                  <a
                    className="flex items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    href="#"
                  >
                    Newsletter
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    href="#"
                  >
                    Purchases
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    href="#"
                  >
                    Downloads
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    href="#"
                  >
                    Team Account
                  </a>
                </div>
              </div>
              <a
                className="flex items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                href="#"
              >
                Jamstack サイト
              </a>
              <a
                className="flex items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                href="#"
              >
                スポット手伝い
              </a>
            </div>
          </div>

          <div className="hs-mega-menu">
            <button
              id="hs-mega-menu-basic-mm"
              type="button"
              className="hs-mega-menu-toggle flex w-full items-center font-medium text-gray-600 hover:text-gray-400 hs-mega-menu-open:text-gray-500 hover:hs-mega-menu-open:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500"
            >
              Mega Menu
              <svg
                className="ml-2 h-2.5 w-2.5 text-gray-600"
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
              className="hs-mega-menu-content top-full left-0 z-10 hidden w-full min-w-[15rem] bg-white p-2 opacity-0 transition-[opacity,margin] before:absolute before:-top-5 before:left-0 before:h-5 before:w-full hs-mega-menu-open:opacity-100 dark:bg-gray-800 sm:absolute sm:rounded-lg sm:shadow-md sm:transition-all sm:duration-300"
              aria-labelledby="hs-mega-menu-basic-mm"
            >
              <div className="sm:grid sm:grid-cols-3">
                <div className="flex flex-col">
                  <a
                    className="flex items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    href="#"
                  >
                    About
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    href="#"
                  >
                    Services
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    href="#"
                  >
                    Customer Story
                  </a>
                </div>

                <div className="flex flex-col">
                  <a
                    className="flex items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    href="#"
                  >
                    Careers
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    href="#"
                  >
                    Careers: Overview
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    href="#"
                  >
                    Careers: Apply
                  </a>
                </div>

                <div className="flex flex-col">
                  <a
                    className="flex items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    href="#"
                  >
                    Log In
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    href="#"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Link href="/works">
            <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500">
              制作実績
            </a>
          </Link>

          <Link href="/posts">
            <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500">
              ブログ
            </a>
          </Link>

          <Link href="#">
            <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500">
              相談・問合せ
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar2;
