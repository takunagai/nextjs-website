// ★★TODO: ハッシュフラグメントでリンク https://zenn.dev/tera_ny/articles/94c98f1dac31de
import SiteLogo from "./SiteLogo"
import Link from "next/link"
import NavbarCollapseButton from "./NavbarCollapseButton"
import Navbar from "./Navbar"
import ModeSwitcher from "./ModeSwitcher"

type Props = {
  home?: boolean
  siteTitle: string
  pageTitle: string
  theme?: string
  setTheme: (theme: string) => void
}

const Header = ({ home, siteTitle, theme, setTheme }: Props) => {
  return (
    <header className="flex flex-col gap-10">
      <SiteLogo home />

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
    </header>
  )
}

export default Header
