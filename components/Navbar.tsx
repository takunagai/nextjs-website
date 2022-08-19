import Link from "next/link"

const Navbar = () => {
  return (
    <>
      <nav className="alignfull main-menu order-1 bg-secondary-100 py-2 px-4 text-center text-xs font-bold md:text-sm">
        <ul className="inline-flex flex-wrap justify-center gap-5 md:gap-8">
          <li className="uppercase">
            <Link href="/">
              <a className="text-primary-400 no-underline">Home</a>
            </Link>
          </li>
          <li className="uppercase">
            <a className="text-primary-400 no-underline" href="/#pickup-menu">
              Menu
            </a>
          </li>
          <li className="uppercase">
            <a className="text-primary-400 no-underline" href="/#takeout">
              Takeout
            </a>
          </li>
          <li className="uppercase">
            <a className="text-primary-400 no-underline" href="/#voice">
              Voice
            </a>
          </li>
          <li className="uppercase">
            <a className="text-primary-400 no-underline" href="/#about">
              About
            </a>
          </li>
          <li className="uppercase">
            <Link href="/">
              <a
                className="text-primary-400 no-underline"
                href="https://www.instagram.com/knottsberry_kawanishi/"
                target="_blank"
                rel="noreferrer"
              >
                ■
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
