import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
// import { GetStaticProps } from 'next' // TypeScript の型データ

function Home() {
    return (
        <Layout
            title="ナガイ商店.com - 兵庫県川西市 Web 制作"
            description="概要です。"
        >
            <h1 className="text-3xl font-bold underline">見出し１です。</h1>
            <p className={styles.primary}>内容</p>
        </Layout>
    )
}

// // TypeScript で
// export const getStaticProps: GetStaticProps = async context => {
//     fetch('https://api.github.com/users/takunagai', {
//         headers: {
//             'Accept': 'application/vnd.github.v3+json'
//         }
//     })
//         .then(response => response.json()) //Converting the response to a JSON object
//         .then(data => {
//             const root = document.querySelector('#root');
//             root.innerHTML = `
//                 <a href=`${data.html_url}`>Name: `${data.name}`</a>
//                 <p>Followers : `${data/followers}`</p>
//             `
//         })
//         .catch(error => console.error(error));
// };

export default Home