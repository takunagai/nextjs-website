import Link from "next/link"

type Props = {
  home?: boolean
  siteTitle: string
}

const SiteLogo = ({ home, siteTitle }: Props) => {
  return (
    <>
      {home ? (
        <h1 className="flex-none text-xl font-bold" aria-label="Brand">
          {siteTitle}
        </h1>
      ) : (
        <p className="flex-none text-xl font-bold" aria-label="Brand">
          <Link href="/">
            <a>{siteTitle}</a>
          </Link>
        </p>
      )}
    </>
  )
}

export default SiteLogo
