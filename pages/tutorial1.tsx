import Layout from '../components/layout'
import { useState } from 'react'
import type { FC } from 'react'
import type { NextPage } from "next"
type Props = { title?: string }

const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']

const Header: FC<Props> = ({ title }) => {
    return <h1>{title ? title : 'Default title'}</h1>
}

const Tutorial1: NextPage = () => {
    const [likes, setLikes] = useState(0)

    function handleClick() {
        setLikes(likes + 1)
    }

    return (
        <Layout
            title="Tutorial1"
            description="Tutorial1 の概要です。"
        >
            {/* コンポーネントの使用 */}
            <Header title="Develop. Preview. Ship. 🚀" />
            <p><a href="https://nextjs.org/learn/foundations/from-react-to-nextjs/getting-started-with-nextjs">元コード(Learn Next.js)</a></p>

            {/* リストのループ出力 */}
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>

            {/* いいねボタン */}
            <button
                className="border-2 bg-slate-200"
                onClick={handleClick}>Like ({likes})
            </button>
        </Layout>
    )
}

export default Tutorial1
