import Link from "next/link"

type Props = {
  home?: boolean
  siteTitle: string
}

const SiteLogo = ({ home, siteTitle }: Props) => {
  return (
    <>
      {home ? (
        <h1
          className="site-title flex-none text-xl font-bold text-primary dark:text-white"
          aria-label="Brand"
        >
          {siteTitle}
        </h1>
      ) : (
        <p
          className="site-title flex-none text-xl font-bold text-primary dark:text-white"
          aria-label="Brand"
        >
          <Link href="/parts">{siteTitle}</Link>
        </p>
      )}
    </>
  )
}

export default SiteLogo
