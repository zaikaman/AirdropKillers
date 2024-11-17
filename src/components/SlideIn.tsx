'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Props {
  children: React.ReactNode
  direction?: 'left' | 'right' | 'up' | 'down'
  delay?: number
}

export default function SlideIn({ children, direction = 'up', delay = 0 }: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const directions = {
    left: { x: -100, y: 0 },
    right: { x: 100, y: 0 },
    up: { x: 0, y: 100 },
    down: { x: 0, y: -100 }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ 
        ...directions[direction],
        opacity: 0 
      }}
      animate={{
        x: isInView ? 0 : directions[direction].x,
        y: isInView ? 0 : directions[direction].y,
        opacity: isInView ? 1 : 0
      }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  )
} 