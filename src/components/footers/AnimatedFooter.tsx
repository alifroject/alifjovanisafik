// components/footers/AnimatedFooter.tsx
'use client'

import { motion } from 'framer-motion'
import { Footer } from './Footer'

export const AnimatedFooter = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.2,
        }
      }}
      viewport={{
        once: false,
        amount: 0.3,
        margin: "0px 0px -100px 0px"
      }}
      className="relative z-10 bg-white shadow-[0_-10px_30px_rgba(0,0,0,0.1)]"
    >
      <Footer />
    </motion.div>
  )
}
