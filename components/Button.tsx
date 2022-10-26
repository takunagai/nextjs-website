/**
 * ★★TODO: コンポーネント引数でスタイルをコントロールできるように
 * button タグが受け取れる属性 (onClick, name, id) を Porps に受け取れるように
 * アイコンと文字を入れたりもできるように (children: ReactNode)
 * 参考：https://ttryo.hateblo.jp/entry/2022/04/14/%E3%80%90React_%C3%97_TypeScript%E3%80%91HTML%E5%B1%9E%E6%80%A7%E3%81%AE%E5%9E%8B%E6%83%85%E5%A0%B1%E3%81%AE%E3%82%A4%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%88%E6%96%B9%E6%B3%95
 * 参考：https://qiita.com/tokio_dev/items/de537515bca92ad7a892
 * 参考：https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase
 */
// import styles from "./Button.module.css"
import type { ReactNode, ComponentPropsWithoutRef } from "react"

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  children: ReactNode
  style?: "primary" | "outline-primary" | "secondary"
  size?: "small" | "large"
}

export default function Button(props: ButtonProps) {
  const { children, style, size, ...rest } = props
  let classNameArr = ["btn"]

  switch (style) {
    case "primary":
      classNameArr.push("btn-primary")
      break
    case "outline-primary":
      classNameArr.push("btn-outline-primary")
      break
    case "secondary":
      classNameArr.push("btn-secondary")
      break
  }

  switch (size) {
    case "small":
      classNameArr.push("btn-small")
      break
    case "large":
      classNameArr.push("btn-large")
      break
  }

  return (
    <button className={classNameArr.join(" ")} {...rest}>
      {children}
    </button>
  )
}
