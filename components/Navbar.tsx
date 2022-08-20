import Link from "next/link"
import { Link as Scroll } from "react-scroll"

type Props = {
  home?: boolean
}

const InstagramIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        className="fill-primary-400"
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
      />
    </svg>
  )
}

const Navbar = ({ home }: Props) => {
  return (
    <>
      <nav className="alignfull main-menu order-1 bg-secondary-100 py-2 px-4 text-center text-xs font-bold md:text-sm">
        {home ? (
          <ul className="inline-flex flex-wrap items-center justify-center gap-5 md:gap-8">
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
            <li>
              <a
                className="text-primary-400 no-underline"
                href="https://www.instagram.com/knottsberry_kawanishi/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <InstagramIcon />
              </a>
            </li>
          </ul>
        ) : (
          <ul className="inline-flex flex-wrap items-center justify-center gap-5 md:gap-8">
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
                <InstagramIcon />
              </a>
            </li>
          </ul>
        )}
      </nav>
    </>
  )
}

export default Navbar
