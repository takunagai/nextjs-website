import SiteLogo from "./SiteLogo"
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
      <SiteLogo />

      <nav className="alignfull main-menu order-1 bg-secondary-100 py-2 px-4 text-center text-xs font-bold md:text-sm">
        <ul className="inline-flex flex-wrap justify-center gap-5 md:gap-8">
          <li className="uppercase">
            <a className="text-primary-400 no-underline" href="">
              Home
            </a>
          </li>
          <li className="uppercase">
            <a className="text-primary-400 no-underline" href="">
              Menu
            </a>
          </li>
          <li className="uppercase">
            <a className="text-primary-400 no-underline" href="">
              Takeout
            </a>
          </li>
          <li className="uppercase">
            <a className="text-primary-400 no-underline" href="">
              Voice
            </a>
          </li>
          <li className="uppercase">
            <a className="text-primary-400 no-underline" href="">
              About
            </a>
          </li>
          <li className="uppercase">
            <a
              className="text-primary-400 no-underline"
              href="https://www.instagram.com/knottsberry_kawanishi/"
              target="_blank"
              rel="noreferrer"
            >
              ■
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
