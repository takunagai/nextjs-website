import SiteLogo from "./SiteLogo"
import Navbar from "./Navbar"

type Props = {
  home?: boolean
  // siteTitle: string
  // pageTitle: string
  // theme?: string
  // setTheme: (theme: string) => void
}

// const Header = ({ home, siteTitle, theme, setTheme }: Props) => {
const Header = ({ home }: Props) => {
  return (
    <header className="flex flex-col gap-10">
      <SiteLogo home={home} />
      <Navbar home={home} />
    </header>
  )
}

export default Header
