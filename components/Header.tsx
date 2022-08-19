// ★★TODO: ハッシュフラグメントでリンク https://zenn.dev/tera_ny/articles/94c98f1dac31de
import SiteLogo from "./SiteLogo"
import Link from "next/link"
import Navbar from "./Navbar"

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
      <Navbar />
    </header>
  )
}

export default Header
