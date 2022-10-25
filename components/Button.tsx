// ★★TODO: コンポーネント引数でスタイルをコントロールできるように
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
