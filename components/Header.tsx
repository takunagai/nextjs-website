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
    <header className="relative z-50 border-t-4 border-primary bg-tertiary-200 py-2 dark:bg-zinc-800">
      <nav
        className="w-full px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <SiteLogo home={home} siteTitle={siteTitle} />
          <div className="flex items-center gap-2 sm:hidden">
            <ModeSwitcher theme={theme} setTheme={setTheme} />
            <NavbarCollapseButton />
          </div>
        </div>
        <Navbar />
        <div className="hidden md:block">
          <ModeSwitcher theme={theme} setTheme={setTheme} />
        </div>
      </nav>
    </header>
  )
}

export default Header
