import styles from './Button.module.css'

export default function Button() {
	return (
		<button type="button" className={styles.error}>CSS Modules でスタイリングしたコンポーネント</button>
	)
}