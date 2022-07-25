import SiteLogo from "./SiteLogo"
import NavbarCollapse2 from "./NavbarCollapse2"
import Navbar2 from "./Navbar2"
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
    <header className="relative z-50 bg-zinc-800 py-4 text-sm">
      <nav
        className="w-full px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <SiteLogo home={home} siteTitle={siteTitle} />
          <div className="sm:hidden">
            <NavbarCollapse2 />
          </div>
        </div>
        <Navbar2 />
        <ModeSwitcher theme={theme} setTheme={setTheme} />
      </nav>
    </header>
  )
}

export default Header
