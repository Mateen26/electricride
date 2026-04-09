"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  // Opacities for the text blobs that appear progressively
  const text1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3], [0, 1, 1, 0]);
  const text2Opacity = useTransform(scrollYProgress, [0.4, 0.45, 0.55, 0.6], [0, 1, 1, 0]);
  const text3Opacity = useTransform(scrollYProgress, [0.7, 0.75, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="h-[400vh] relative bg-black border-t border-white/5">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden perspective-1000">
        
        {/* Texts driving the narrative */}
        <motion.div style={{ opacity: text1Opacity }} className="absolute z-30 left-[5%] md:left-[10%] top-[30%] max-w-sm">
          <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-electric-neon to-white">
            Precision Control.
          </h3>
          <p className="mt-4 text-zinc-400 text-lg">
            Smart ABS and hydraulic disc brakes ensure millimeter-perfect stopping distance at any speed.
          </p>
        </motion.div>

        <motion.div style={{ opacity: text2Opacity }} className="absolute z-30 right-[5%] md:right-[10%] top-[40%] max-w-sm text-right">
          <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-electric-neon to-white">
            Smart Dash.
          </h3>
          <p className="mt-4 text-zinc-400 text-lg">
            A retina-class LED display gives you turn-by-turn navigation, battery health, and tire pressure instantly.
          </p>
        </motion.div>

        <motion.div style={{ opacity: text3Opacity }} className="absolute z-30 left-[5%] md:left-[10%] bottom-[20%] max-w-sm">
          <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-electric-neon to-white">
            Hyper-Drive.
          </h3>
          <p className="mt-4 text-zinc-400 text-lg">
            Switch to track mode. Release the electronic limiter and experience G-forces like never before.
          </p>
        </motion.div>
        
        {/* Glow underneath */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vh] h-[60vh] bg-electric-neon/10 blur-[150px] rounded-full z-10" />
      </div>
    </section>
  );
}
