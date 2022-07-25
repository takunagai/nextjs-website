import Link from "next/link"

const Navbar = () => {
  return (
    <div
      id="navbar-collapse-with-animation"
      className="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 sm:block"
    >
      <ul className="mt-5 flex flex-col gap-5 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:pl-5">
        {[
          ["Home", "/"],
          ["About", "/about"],
          ["Works", "/works"],
          ["CSS", "/css"],
          ["TW Plugins", "/official-plugins"],
          ["Preline", "/preline"],
          ["Images", "/images"],
          ["Base", "/base"],
          ["Tutorial1", "/tutorial1"],
          ["Blog", "/posts"],
          ["Fetch", "/fetch"],
          ["swr", "/swr"],
        ].map(([title, url], i) => (
          <li key={i}>
            <Link className="text-gray-400 hover:text-gray-500" href={url}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar
