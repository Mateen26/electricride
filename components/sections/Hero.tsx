"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Zap, Target } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });

  const yCenter = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-screen min-h-[900px] w-full overflow-hidden bg-dark-obsidian">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{
             backgroundImage: "linear-gradient(to right, #ffffff1a 1px, transparent 1px), linear-gradient(to bottom, #ffffff1a 1px, transparent 1px)",
             backgroundSize: "4rem 4rem",
             maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
             WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)"
           }}
      />

      {/* Main Content Area */}
      <div className="absolute inset-0 z-10 flex items-start pt-[15vh] md:items-center md:pt-0 justify-center pointer-events-none">
        
        {/* Center Data & Titles */}
        <motion.div 
          style={{ y: yCenter, opacity }}
          className="relative z-20 flex flex-col items-center text-center px-6 max-w-2xl pointer-events-auto"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
            className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6"
          >
            <Zap size={16} className="text-electric-neon" />
            <span className="text-zinc-300 text-sm font-semibold tracking-wider">NEW 2026 EDITION</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[4rem] md:text-7xl lg:text-[8rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 leading-none mb-6"
          >
            X-1 PRO
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-zinc-400 mb-8"
          >
            The pinnacle of electric mobility. Relentless acceleration meets uncompromised precision. Pre-order fully unlocked.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full justify-center"
          >
            <button className="flex items-center justify-center gap-2 bg-electric-neon text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(57,255,20,0.4)] hover:scale-105 transition-all">
              Reserve Now <ArrowRight size={20} />
            </button>
            <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
              <Target size={20} className="text-electric-neon" /> View Specs
            </button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-dark-obsidian to-transparent z-30 pointer-events-none" />
    </div>
  );
}
