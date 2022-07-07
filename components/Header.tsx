import SiteLogo from "./SiteLogo";
import NavbarCollapse from "./NavbarCollapse";
import Navbar from "./Navbar";
import ModeSwitcher from "./ModeSwitcher";
import BreadCrumbs from "./BreadCrumbs";

type Props = {
  home?: boolean;
  siteTitle: string;
  pageTitle: string;
  theme?: string;
  setTheme: (theme: string) => void;
};

const Header = ({ home, siteTitle, pageTitle, theme, setTheme }: Props) => {
  return (
    <header className="z-50 py-4 text-sm">
      <nav
        className="w-full px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <SiteLogo home={home} siteTitle={siteTitle} />
          <div className="sm:hidden">
            <NavbarCollapse />
          </div>
        </div>
        <Navbar />
        <ModeSwitcher theme={theme} setTheme={setTheme} />
      </nav>

      <div className="container">
        <BreadCrumbs pageTitle={pageTitle} />
      </div>
    </header>
  );
};

export default Header;
