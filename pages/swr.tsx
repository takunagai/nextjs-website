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
            description="swr で github API からフェッチしたデータを表示"
        >
            <h1>swr でフェッチ</h1>
            <p>swr で <a href="https://api.github.com/repos/vercel" target="_blank" rel="noreferrer">github API</a> からフェッチしたデータを表示</p>
            <section className="box mt-5">
                <p>name: {data.name}<br />
                    description: {data.description}</p>
                <p>
                    <b>👁 {data.subscribers_count}</b>{" "}
                    <b>✨ {data.stargazers_count}</b>{" "}
                    <b>🍴 {data.forks_count}</b>
                </p>
            </section>
        </Layout>
    )
}

export default Home