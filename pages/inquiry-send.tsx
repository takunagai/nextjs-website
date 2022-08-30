import { motion } from "framer-motion"
import Layout from "../components/layout"
import type { NextPage } from "next"

const InquirySend: NextPage = () => {
  return (
    <Layout
      title="お問合せ(送信完了)"
      description="お問合せフォーム、送信完了しました"
    >
      <motion.div
        initial={{ opacity: 0 }} // initial
        animate={{ opacity: 1 }} // on mount
        exit={{ opacity: 0 }} // on unmount
      >
        <div className="mx-auto max-w-2xl">
          <p className="mt-8 text-center">
            <b>送信しました。</b>
          </p>
        </div>
      </motion.div>
    </Layout>
  )
}

export default InquirySend
