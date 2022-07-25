import Layout from "../components/layout"
import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from "next" // TypeScript の型データ
import { motion } from "framer-motion"

type Props = InferGetStaticPropsType<typeof getStaticProps>
type Result = {
  id: number
  name: string
}

// getStaticProps は、実装者が大きな変更をしない限り Promise を返却する = 条件は必ず真に流れる
// ★★TODO: エラー消す (参考：https://zenn.dev/eitches/articles/2021-0424-getstaticprops-type)
// export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext<{ slug: string }>) => {
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const names = ["takunagai", "GeoSot"]
  let jobs = []
  let div: HTMLParagraphElement

  // const post = getPost(context.params.slug)

  for (let name of names) {
    let job = fetch(`https://api.github.com/users/${name}`).then(
      (successResponse) => {
        if (successResponse.status != 200) {
          return null
        } else {
          return successResponse.json()
        }
      },
      (failResponse) => {
        return null
      },
    )
    jobs.push(job) // Array of Users json Data
  }
  let results = await Promise.all(jobs)

  return {
    props: {
      results,
    },
  }
}

const Fetch: NextPage<Props> = ({ results }) => {
  return (
    <Layout
      title="fetch() メソッドで API からフェッチ"
      description="fetch() メソッドで github API からデータをフェッチして表示するサンプル"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h1>fetch() メソッドで API からフェッチ</h1>
        <p>
          fetch() メソッドで github API からデータをフェッチして表示するサンプル
        </p>
        <section className="box mt-5">
          <ul>
            {results.map((result: Result, index: number) => (
              <li key={index}>
                {result.id} {result.name}
              </li>
            ))}
          </ul>
        </section>
      </motion.div>
    </Layout>
  )
}

export default Fetch
