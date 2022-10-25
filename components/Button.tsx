/**
 * ★★TODO: コンポーネント引数でスタイルをコントロールできるように
 * button タグが受け取れる属性 (onClick, name, id) を Porps に受け取れるように
 * アイコンと文字を入れたりもできるように (children: ReactNode)
 * 参考：https://ttryo.hateblo.jp/entry/2022/04/14/%E3%80%90React_%C3%97_TypeScript%E3%80%91HTML%E5%B1%9E%E6%80%A7%E3%81%AE%E5%9E%8B%E6%83%85%E5%A0%B1%E3%81%AE%E3%82%A4%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%88%E6%96%B9%E6%B3%95
 * 参考：https://qiita.com/tokio_dev/items/de537515bca92ad7a892
 * 参考：
 */
// import styles from "./Button.module.css"
import type { ReactNode, ComponentPropsWithoutRef } from "react"

type Props = ComponentPropsWithoutRef<"button"> & {
  children: ReactNode
  style?: string
  size?: string
  fullwidth?: boolean
}

export default function Button({
  children,
  style,
  size,
  fullwidth,
  ...props
}: Props) {
  return (
    <button
      type="button"
      className={`btn (${style} === "outline") ? 'btn-outline-primary' : 'btn-primary'`}
      {...props}
    >
      {children}
    </button>
  )
}
