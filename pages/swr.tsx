import useSWR from "swr"
import Layout from '../components/layout'
import type { NextPage } from "next"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Home: NextPage = () => {
    const {data, error} = useSWR(
        "https://api.github.com/repos/vercel/swr",
        fetcher
    )

    if (error) return <div>An error has occurred.</div>
    if (!data) return <div>Loading...</div>

    return (
        <Layout
            title="swr"
            description="swr でフェッチしたデータを表示"
        >
            <main>
                <h1>{data.name}</h1>
                <p>swr で <a href="https://api.github.com/repos/vercel" className="border-b-2">github API</a> からフェッチしたデータを表示</p>
                <p>{data.description}</p>
                <p>
                    <strong>👁 {data.subscribers_count}</strong>{" "}
                    <strong>✨ {data.stargazers_count}</strong>{" "}
                    <strong>🍴 {data.forks_count}</strong>
                </p>
            </main>
        </Layout>
    )
}

export default Home