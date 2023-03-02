import SiteLogo from "./SiteLogo"
import NavbarCollapseButton from "./NavbarCollapseButton"
import Navbar from "./Navbar"
// import ModeSwitcher from "./ModeSwitcher"

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
        className="w-full px-4 lg:flex lg:items-center lg:justify-between lg:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <SiteLogo home={home} siteTitle={siteTitle} />
          <div className="flex items-center gap-2 lg:hidden">
            {/*<ModeSwitcher theme={theme} setTheme={setTheme} />*/}
            <NavbarCollapseButton />
          </div>
        </div>
        <Navbar />
        {/*<div className="hidden lg:block">*/}
        {/*  <ModeSwitcher theme={theme} setTheme={setTheme} />*/}
        {/*</div>*/}
      </nav>
    </header>
  )
}

export default Header
