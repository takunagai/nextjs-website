import Layout from "../components/layout"
import type { NextPage } from "next"
import { motion } from "framer-motion"

const Inquiry: NextPage = () => {
  return (
    <Layout title="画像関連" description="画像関連のこと。">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="stack-large">
          <h1>お問合せ</h1>
          <section>
            <p>問合せフォームが入ります。</p>
          </section>
        </div>
      </motion.div>
    </Layout>
  )
}

export default Inquiry
