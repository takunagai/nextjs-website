/**
 * 日付を整形する
 */
import { parseISO, format } from "date-fns"

type Props = {
  dateString: string
}
export default function Date({ dateString }: Props) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, "yyyy年M月d日")}</time>
}
