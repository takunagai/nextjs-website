import Layout from "../components/layout"
import type { NextPage } from "next"
import { motion } from "framer-motion"

const SpotSupport: NextPage = () => {
  return (
    <Layout title="スポット手伝い" description="スポット手伝い の概要です。">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <header className="mx-0 bg-zinc-500/10">
          <h1>スポット手伝い</h1>
        </header>
        <div className="mt-5">
          <p className="lead">
            見出しです。ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。
          </p>
        </div>
        <section className="mt-10">
          <h2>見出しです</h2>
          <p>
            ★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱のダミーコピーです上手どもっさと俄たますて、みんなまでぶんを弾いとだまし。ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た。
          </p>
        </section>
      </motion.div>
    </Layout>
  )
}

export default SpotSupport
