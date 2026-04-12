"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Performance() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="performance" ref={containerRef} className="py-32 relative bg-transparent overflow-hidden border-t border-white/5 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            Unleash the Power of <br/> <span className="text-electric-neon">Green Wave Volts.</span>
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl">
            Our models feature a powerful 3000W motor, delivering exhilarating acceleration and a smooth ride, perfect for urban commuting or weekend adventures.
          </p>
          
          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
            <div>
              <p className="text-electric-neon text-sm font-bold tracking-widest uppercase mb-1">Battery</p>
              <p className="text-4xl font-bold text-white">72V <span className="text-xl text-zinc-500">23Ah</span></p>
            </div>
            <div>
              <p className="text-electric-neon text-sm font-bold tracking-widest uppercase mb-1">Motor</p>
              <p className="text-4xl font-bold text-white">3000 <span className="text-xl text-zinc-500">W</span></p>
            </div>
          </div>
        </motion.div>

        {/* Removed box styling entirely. Just leaving an empty aura for the global scooter to float inside! */}
        <motion.div style={{ y }} className="relative h-[400px] md:h-[600px] w-full pointer-events-none flex items-center justify-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-electric-neon/10 blur-[100px] rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
