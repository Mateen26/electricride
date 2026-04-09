"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useMove } from "@use-gesture/react";
import Image from "next/image";
import { Zap, Cpu, Settings2 } from "lucide-react"; // Import nice icons for Hotspots

export default function InteractiveShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [{ x, y }, set] = useState({ x: 0, y: 0 });

  const bind = useMove(({ xy: [px, py], event }) => {
    const target = (event.currentTarget || event.target) as Element;
    if (target && target.getBoundingClientRect) {
      const bounds = target.getBoundingClientRect();
      const cx = bounds.left + bounds.width / 2;
      const cy = bounds.top + bounds.height / 2;
      const normalizedX = (px - cx) / (bounds.width / 2);
      const normalizedY = (py - cy) / (bounds.height / 2);
      set({ x: normalizedX * 30, y: normalizedY * 30 }); 
    }
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  return (
    <section 
      id="explore" 
      ref={containerRef} 
      className="relative min-h-screen bg-dark-obsidian py-24 flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(57,255,20,0.05)_0%,rgba(11,11,12,1)_70%)]" />

      <motion.div 
        style={{ scale, opacity }}
        className="container mx-auto px-6 relative z-10 w-full flex flex-col lg:flex-row items-center gap-12"
      >
        <div className="w-full lg:w-1/3 space-y-8 z-20">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Engineering <br/> <span className="text-electric-neon">Unleashed.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg md:text-xl font-light"
          >
            Explore every angle of perfection. Using hyper-lightweight aerospace alloys and an aggressive chassis design, the E-Ride X-1 moves as fiercely as it looks. Hover to inspect aerodynamics.
          </motion.p>

          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="glass-panel p-6 rounded-2xl border-electric-neon/20 hover:border-electric-neon transition-colors cursor-default">
              <h4 className="text-3xl font-bold text-white mb-1">0-50</h4>
              <p className="text-sm text-electric-neon uppercase tracking-widest font-bold">In 3.2s</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl hover:border-white/40 transition-colors">
              <h4 className="text-3xl font-bold text-white mb-1">120<span className="text-xl">km</span></h4>
              <p className="text-sm text-zinc-400 uppercase tracking-widest">Range</p>
            </div>
          </div>
        </div>

        <div 
          className="w-full lg:w-2/3 h-[350px] md:h-[700px] relative perspective-1000 origin-center mt-8 md:mt-0"
          {...bind()}
        >
          <motion.div
            style={{
              x: useTransform(smoothX, (v) => -v * 2),
              y: useTransform(smoothY, (v) => -v * 2),
              rotateX: useTransform(smoothY, (v) => -v),
              rotateY: useTransform(smoothX, (v) => v),
            }}
            className="w-full h-full relative"
          >
            <motion.div 
               style={{
                  x: useTransform(smoothX, (v) => -v * 0.5),
                  y: useTransform(smoothY, (v) => -v * 0.5),
               }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-electric-neon/20 blur-[120px] rounded-full z-0" 
            />

            {/* Changed from withoutbg.png to without-bg.png which actually exists */}
            <Image 
              src="/images/without-bg.png" 
              alt="Interactive Angle" 
              fill
              className="object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,0.9)] z-10 select-none pointer-events-none"
            />

            {/* Hotspots with Icons */}
            <Hotspot top="45%" left="20%" label="Dual Motor Drive" Icon={Zap} />
            <Hotspot top="40%" left="60%" label="Chassis Control" Icon={Settings2} />
            <Hotspot top="65%" left="75%" label="Smart CPU" Icon={Cpu} />
            
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

// Updated Hotspot with Lucide icons
function Hotspot({ top, left, label, Icon }: { top: string, left: string, label: string, Icon: any }) {
  return (
    <motion.div 
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      className="absolute z-30 group cursor-pointer" 
      style={{ top, left }}
    >
      <div className="relative flex items-center justify-center">
        <div className="absolute w-12 h-12 rounded-full bg-electric-neon/20 animate-ping group-hover:animate-none" />
        
        {/* The Icon button */}
        <div className="w-8 h-8 rounded-full bg-dark-obsidian border border-electric-neon shadow-[0_0_15px_rgba(57,255,20,0.5)] relative z-10 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
           <Icon size={16} className="text-electric-neon" />
        </div>
        
        {/* Tooltip */}
        <div className="absolute top-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none min-w-max z-50">
          <div className="glass-panel px-4 py-2 rounded-lg text-sm font-semibold text-white tracking-wider border-electric-neon/30 bg-dark-obsidian/80 backdrop-blur-md">
            {label}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
