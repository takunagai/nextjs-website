/**
 * date-fns で日付を整形し表示するコンポーネント
 * Usage: Import & `<Date dateString={タイムスタンプ文字列} />`
 * @ref https://date-fns.org/
 * @ref https://qiita.com/FaLiP_lvsg/items/1bed7344763d01442c92
 */
import { parseISO, format } from "date-fns"
import ja from "date-fns/locale/ja"

type Props = {
  dateString: string
}
export default function Date({ dateString }: Props) {
  const date = parseISO(dateString)
  return (
    <time dateTime={dateString}>
      {format(date, "yyyy年MM月dd日", { locale: ja })} {/* (eee) で曜日*/}
    </time>
  )
}
