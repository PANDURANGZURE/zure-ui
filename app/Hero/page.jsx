"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Copy, Check, Terminal } from "lucide-react"
import Silk from "@/Components/Silk"
import '../globals.css'
import Link from "next/link";

export default function Hero() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText("npm install zure-ui")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Animation Variants for staggering
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    show: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] } 
    }
  }

  return (
    <div className="relative min-h-screen  w-full overflow-hidden bg-[#050505] selection:bg-[#7B7481]/30">
      
      {/* 1. THE SILK LAYER - High speed for kinetic energy */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen">
        <Silk 
          speed={8} 
          scale={0.8} 
          color="#7B7481" 
          noiseIntensity={1.2} 
        />
      </div>

      {/* 2. ATMOSPHERIC OVERLAYS */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_-20%,#7B748120,transparent_40%)]" />
      <div className="absolute inset-0 z-[1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-100 contrast-150" />

      {/* 3. CONTENT */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex max-w-5xl flex-col items-center text-center"
        >
          {/* VERSION TAG */}
          <motion.span 
            variants={item}
            className="mb-6 text rounded-full border border-[#7B7481]/30 bg-[#7B7481]/10 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#7B7481]"
          >
            Stable Release v1.0.0
          </motion.span>

          {/* HEADLINE */}
          <motion.h1 
            variants={item}
            className="text-6xl font-medium tracking-tighter text-white text sm:text-8xl lg:text-[10rem]"
          >
            ZURE <span className="italic font font-light text-[#7B7481]">UI</span>
          </motion.h1>
          
          <motion.p 
            variants={item}
            className="mx-auto mt-8 max-w-2xl text-balance text-lg font-light leading-relaxed text-zinc-500 md:text-xl"
          >
            The kinetic design system for high-performance React applications. 
            Components that move with intent and scale with ease.
          </motion.p>

          {/* INSTALL COMMAND - Modern aesthetic */}
          <motion.div 
            variants={item}
            className="group mt-10 flex cursor-pointer items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] p-1.5 pl-4 pr-2 backdrop-blur-xl transition-colors hover:border-white/10"
            onClick={copyToClipboard}
          >
            <div className="flex items-center gap-3 font-mono text-sm text-zinc-400">
              <Terminal size={14} className="text-[#7B7481]" />
              <span>npm install <span className="text-white">zure-ui</span></span>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/5 text-zinc-400 transition-colors group-hover:bg-white/10 group-hover:text-white">
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                    <Check size={14} />
                  </motion.div>
                ) : (
                  <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                    <Copy size={14} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* MAIN CTAS */}
          <motion.div variants={item} className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href='/Documentation'>
            <button className="h-14 rounded-2xl bg-white px-10 text-sm font-bold text-black transition-transform active:scale-95">
              Get Started
            </button>
            </Link>
            <Link href='/Components/Button'>
            <button className="h-14 rounded-2xl border border-white/10 bg-white/5 px-10 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/10">
              View Components
            </button>
            </Link>
            
          </motion.div>
        </motion.div>
      </section>

      {/* 4. MASKED BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent z-20 pointer-events-none" />
    </div>
  )
}