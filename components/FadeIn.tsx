import React from "react"
import { motion } from "framer-motion"

type Props = {
  children: React.ReactNode
  repeat?: boolean
  delay?: number
}

export default function FadeIn({ children, repeat = true, delay = 0 }: Props) {
  return (
    <motion.div
      variants={{
        offscreen: { y: 50, opacity: 0 },
        onscreen: {
          y: 0,
          opacity: 1,
          transition: { duration: 0.7, delay: delay },
        },
      }}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: repeat, amount: 0 }}
    >
      {children}
    </motion.div>
  )
}
