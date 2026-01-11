"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import Silk from "@/Components/Silk"
import './globals.css'

const items = [
  { x: -120, y: -60, delay: 0 },
  { x: 140, y: -40, delay: 0.1 },
  { x: -160, y: 80, delay: 0.2 },
  { x: 100, y: 120, delay: 0.3 },
]

export default function Hero() {
  return (
    <div className="relative h-screen overflow-hidden">

      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <Silk
          speed={4}
          scale={1}
          color="#7B7481"
          noiseIntensity={1.4}
        />
      </div>

      {/* GRADIENT OVERLAY */}
      <div
        className="
          absolute inset-0 z-10
          bg-[radial-gradient(45%_35%_at_50%_10%,hsl(var(--primary)/0.25),transparent)]
        "
      />

      {/* CONTENT */}
      <section className="relative z-20 min-h-screen">
        <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6">
          <div className="grid w-full items-center gap-20 lg:grid-cols-2">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-6xl font-extrabold tracking-tight text-foreground">
                Motion-first
                <br />
                <span className="text-muted-foreground">
                  UI components
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg text-muted-foreground">
                Zure UI blends motion and structure.  
                Components that feel alive, not static.
              </p>

              <div className="mt-10 flex gap-4">
                <Link
                  href="/docs"
                  className="
                    inline-flex h-11 items-center justify-center
                    rounded-md bg-primary px-8 text-sm
                    font-medium text-primary-foreground
                  "
                >
                  Explore Docs
                </Link>

                <Link
                  href="/docs/components"
                  className="
                    inline-flex h-11 items-center justify-center
                    rounded-md border border-border px-8 text-sm
                    font-medium text-foreground
                  "
                >
                  View Components
                </Link>
              </div>
            </motion.div>

            {/* RIGHT */}
            <div className="relative h-[420px]">
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: item.x,
                    y: item.y,
                  }}
                  transition={{
                    duration: 1,
                    delay: item.delay,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute left-1/2 top-1/2"
                >
                  <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 4 + i,
                      ease: "easeInOut",
                    }}
                    className="
                      rounded-2xl border border-border
                      bg-background/90 backdrop-blur-md
                      px-6 py-4 shadow-xl
                    "
                  >
                    <span className="text-sm font-medium text-foreground">
                      {["Button", "Modal", "Input", "Tooltip"][i]}
                    </span>
                  </motion.div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
