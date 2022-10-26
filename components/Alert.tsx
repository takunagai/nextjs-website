/**
 * classnames ライブラリ(複数クラスを簡単に指定)の動作サンプル
 * type が success, error でスタイルを変える例
 * https://nextjs.org/learn/basics/assets-metadata-css/styling-tips
 */
import type { ReactNode } from "react"
import styles from "./Alert.module.css"
import cn from "classnames"

type Props = {
  children: ReactNode
  type: string
}

const Alert = ({ children, type }: Props) => {
  return (
    <div
      className={cn(styles["foo-bar"], {
        // マルチクラスの表現参考用
        [styles.success]: type === "success", // true なら styles.success を表示、false なら何も表示しない
        [styles.error]: type === "error",
      })}
    >
      {children}
    </div>
  )
}

export default Alert
