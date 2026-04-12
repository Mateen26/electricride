"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  
  // High-stability opacity for the main heading to prevent flickering
  const headingOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);
  const headingY = useTransform(scrollYProgress, [0, 0.05], [20, 0]);

  // Opacities for the text blobs that appear progressively
  const text1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3], [0, 1, 1, 0]);
  const text2Opacity = useTransform(scrollYProgress, [0.4, 0.45, 0.55, 0.6], [0, 1, 1, 0]);
  const text3Opacity = useTransform(scrollYProgress, [0.7, 0.75, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="h-[400vh] relative bg-black border-t border-white/5">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden perspective-1000">
        
        {/* Main Section Heading */}
        <motion.div 
          style={{ opacity: headingOpacity, y: headingY }}
          className="absolute top-12 left-0 w-full text-center z-40 px-6 will-change-transform"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight drop-shadow-2xl">
            Why Choose Our <span className="text-electric-neon">EV Motorcycles?</span>
          </h2>
        </motion.div>

        {/* Texts driving the narrative */}
        <motion.div style={{ opacity: text1Opacity }} className="absolute z-30 w-full md:w-auto px-6 md:px-0 text-center md:text-left left-0 md:left-[10%] top-[25%] md:top-[35%] md:max-w-sm">
          <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-electric-neon to-white">
            Eco-Friendly.
          </h3>
          <p className="mt-4 text-zinc-400 text-lg">
            Contribute to a greener planet with completely zero emissions and drastically low overall energy consumption.
          </p>
        </motion.div>

        <motion.div style={{ opacity: text2Opacity }} className="absolute z-30 w-full md:w-auto px-6 md:px-0 text-center md:text-right left-0 md:left-auto md:right-[10%] bottom-[20%] md:bottom-auto md:top-[40%] md:max-w-sm">
          <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-electric-neon to-white">
            Cost-Effective.
          </h3>
          <p className="mt-4 text-zinc-400 text-lg">
            Consistently save thousands on physical fuel and ongoing maintenance costs by completely stepping into electric power.
          </p>
        </motion.div>

        <motion.div style={{ opacity: text3Opacity }} className="absolute z-30 w-full md:w-auto px-6 md:px-0 text-center md:text-left left-0 md:left-[10%] top-[15%] md:top-auto md:bottom-[20%] md:max-w-sm">
          <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-electric-neon to-white">
            Innovative Design.
          </h3>
          <p className="mt-4 text-zinc-400 text-lg">
            Sleek, uncompromised aesthetics seamlessly combined with advanced technology for a truly modern, premium riding experience.
          </p>
        </motion.div>
        
        {/* Glow underneath */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vh] h-[60vh] bg-electric-neon/10 blur-[150px] rounded-full z-10" />
      </div>
    </section>
  );
}
