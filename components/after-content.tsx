import Link from "next/link"

const AfterContent = () => {
  return (
    <>
      <div className="mx-auto mt-8 max-w-xl rounded-xl bg-tertiary-100 p-4 text-center shadow">
        <h3 className="mt-2 text-lg">
          悩みを抱えておられる方、
          <br />
          気軽に相談ください
        </h3>
        <p className="text-xs">(ご本人、ご家族)</p>
        <p>
          ★★兵庫県ひきこもり相談支援センター
          阪神ブランチは、、ダミーコピーです手はおっかさんの演奏硝子屋口ましはでまた箱のダミーコピー。
        </p>
        <p>
          <Link href="/inquiry" className="btn btn-primary">
            相談する<small> (電話、訪問)</small>
          </Link>
        </p>
      </div>
    </>
  )
}

export default AfterContent
