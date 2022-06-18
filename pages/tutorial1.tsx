import { useState } from 'react'
import Layout from '../components/layout'

import type { FC } from 'react'
import type { NextPage } from "next"
type Props = { title?: string }

const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']

// コンポーネントの使用のサンプルとして
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
            <div className="stack-large">
                <h1>コンポーネントの使用サンプル</h1>
                <section>
                    <h2>基本</h2>
                    <Header title="Develop. Preview. Ship. 🚀" />
                    <p><a href="https://nextjs.org/learn/foundations/from-react-to-nextjs/getting-started-with-nextjs">元コード(Learn Next.js)</a></p>
                </section>

                <section>
                    <h2>リストのループ出力</h2>
                    <ul>
                        {names.map((name) => (
                            <li key={name}>{name}</li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h2>いいねボタン</h2>
                    <button
                        className="border-2 bg-slate-200"
                        onClick={handleClick}>Like ({likes})
                    </button>
                </section>
            </div>
        </Layout>
    )
}

export default Tutorial1
