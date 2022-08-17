import React from "react"
import { motion } from "framer-motion"

type Props = {
  children: React.ReactNode
  repeat?: boolean
  delay?: number
  moveX?: number
  moveY?: number
}

export default function FadeIn({
  children,
  repeat = true,
  delay = 0,
  moveX = 0,
  moveY = 0,
}: Props) {
  return (
    <motion.div
      variants={{
        offscreen: { x: moveX, y: moveY, opacity: 0 },
        onscreen: {
          x: 0,
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
