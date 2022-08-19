import { ReactNode } from "react"
// import styles from "./Button.module.css"

type Props = {
  children: ReactNode
  type: string
}

export default function Button({ children, type }: Props) {
  return (
    <button type="button" className="">
      {children}
    </button>
  )
}
