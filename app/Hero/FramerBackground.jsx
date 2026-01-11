"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect } from "react"

export default function FramerBackground() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20 })
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 20 })

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [mouseX, mouseY])

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

      {/* 🟣 Mouse-follow glow */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="
          absolute h-[500px] w-[500px]
          rounded-full
          bg-[radial-gradient(circle,rgba(99,102,241,0.35),transparent_70%)]
          dark:bg-[radial-gradient(circle,rgba(99,102,241,0.25),transparent_70%)]
          blur-3xl
        "
      />

      {/* 🌫️ Ambient radial glow */}
      <div className="
        absolute inset-0
        bg-[radial-gradient(60%_40%_at_50%_20%,rgba(255,255,255,0.15),transparent_60%)]
        dark:bg-[radial-gradient(60%_40%_at_50%_20%,rgba(255,255,255,0.08),transparent_60%)]
      " />

      {/* 🌀 Animated noise */}
      <motion.div
        animate={{ opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E
            %3Cfilter id='n'%3E
            %3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E
            %3C/filter%3E
            %3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E
            %3C/svg%3E")
          `,
        }}
      />

      {/* 🧊 Parallax depth dots */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        className="
          absolute inset-0
          bg-[radial-gradient(#ffffff14_1px,transparent_1px)]
          [background-size:3px_3px]
          opacity-20
          dark:opacity-10
        "
      />
    </div>
  )
}
