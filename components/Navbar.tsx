import Link from "next/link"
import { Link as Scroll } from "react-scroll"

type Props = {
  home?: boolean
}

const Navbar = ({ home }: Props) => {
  return (
    <>
      <nav className="alignfull main-menu order-1 bg-secondary-100 py-2 px-4 text-center text-xs font-bold md:text-sm">
        {home ? (
          <ul className="inline-flex flex-wrap justify-center gap-5 md:gap-8">
            <li className="uppercase">
              <span className="text-primary-400 no-underline">
                <Scroll to="pickup-menu" smooth={true}>
                  Menu
                </Scroll>
              </span>
            </li>
            <li className="uppercase">
              <span className="text-primary-400 no-underline">
                <Scroll to="takeout" smooth={true}>
                  Takeout
                </Scroll>
              </span>
            </li>
            <li className="uppercase">
              <span className="text-primary-400 no-underline">
                <Scroll to="voice" smooth={true}>
                  Voice
                </Scroll>
              </span>
            </li>
            <li className="uppercase">
              <span className="text-primary-400 no-underline">
                <Scroll to="about" smooth={true}>
                  About
                </Scroll>
              </span>
            </li>
            <li className="uppercase">
              <a
                className="text-primary-400 no-underline"
                href="https://www.instagram.com/knottsberry_kawanishi/"
                target="_blank"
                rel="noreferrer noopener"
              >
                ■
              </a>
            </li>
          </ul>
        ) : (
          <ul className="inline-flex flex-wrap justify-center gap-5 md:gap-8">
            <li className="uppercase">
              <Link href="/">
                <a className="text-primary-400 no-underline">Home</a>
              </Link>
            </li>
            <li className="uppercase">
              <Link href="recipe-development">
                <a className="text-primary-400 no-underline">レシピ開発</a>
              </Link>
            </li>
            <li className="uppercase">
              <Link href="recruit">
                <a className="text-primary-400 no-underline">求人情報</a>
              </Link>
            </li>
            <li className="uppercase">
              <Link href="inquiry">
                <a className="text-primary-400 no-underline">お問合せ</a>
              </Link>
            </li>
            <li className="uppercase">
              <a
                className="text-primary-400 no-underline"
                href="https://www.instagram.com/knottsberry_kawanishi/"
                target="_blank"
                rel="noreferrer noopener"
              >
                ■
              </a>
            </li>
          </ul>
        )}
      </nav>
    </>
  )
}

export default Navbar
