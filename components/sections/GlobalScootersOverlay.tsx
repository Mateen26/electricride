"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function GlobalScootersOverlay() {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // SCROLL MAPPING RANGES
  // Hero: 0.0 - 0.08
  // Performance: 0.11 - 0.20
  // Design: 0.24 - 0.30
  // ScrollSequence: 0.35 - 0.76

  // ==============================
  // SCOOTER 1: LEFT (SIDE VIEW)
  // ==============================
  const leftX = useTransform(
    scrollYProgress,
    [0, 0.08, 0.15, 0.22, 0.28, 0.35, 0.75],
    ["-25vw", "-25vw", "-40vw", "-17vw", "-17vw", "0vw", "0vw"] 
  );

  const leftY = useTransform(
    scrollYProgress,
    [0, 0.08, 0.15, 0.22, 0.28, 0.35, 0.75],
    ["5vh", "5vh", "5vh", "-5vh", "-5vh", "5vh", "5vh"] 
  );

  const leftScale = useTransform(
    scrollYProgress,
    [0, 0.08, 0.15, 0.22, 0.28, 0.35, 0.75],
    [1.0, 1.0, 1.0, 0.9, 0.9, 1.3, 2.2] 
  );

  // 360 Degree spin requested for the Scroll Sequence length
  const leftRotateY = useTransform(
    scrollYProgress,
    [0, 0.35, 0.75],
    [0, 0, -360] 
  );

  // Quick fade out at 0.08, quick fade in at 0.23
  const leftOpacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.08, 0.2, 0.23, 0.28, 0.76, 0.78],
    [1, 1, 0, 0, 1, 1, 1, 0] 
  );

  // ==============================
  // SCOOTER 2: RIGHT (FRONT VIEW)
  // ==============================
  const rightX = useTransform(
    scrollYProgress,
    [0, 0.08, 0.12, 0.16, 0.20, 0.24, 0.28, 0.32],
    ["25vw", "25vw", "18vw", "18vw", "18vw", "19vw", "19vw", "19vw"] 
  );

  const rightY = useTransform(
    scrollYProgress,
    [0, 0.08, 0.12, 0.16, 0.20, 0.24, 0.28, 0.32],
    ["5vh", "5vh", "8vh", "8vh", "8vh", "-5vh", "-5vh", "-5vh"] 
  );

  const rightScale = useTransform(
    scrollYProgress,
    [0, 0.08, 0.12, 0.16, 0.20, 0.24, 0.28, 0.32],
    [1.0, 1.0, 1.1, 1.1, 1.1, 0.9, 0.9, 0.9] 
  );

  // Fades out entirely right before ScrollSequence
  const rightOpacity = useTransform(
    scrollYProgress,
    [0, 0.08, 0.12, 0.28, 0.32, 0.35],
    [1, 1, 1, 1, 0, 0] 
  );

  if (!mounted) return null;

  return (
    <div className="hidden md:block fixed inset-0 pointer-events-none z-40 overflow-hidden perspective-1000">
      
      {/* LEFT SCOOTER - Side View */}
      <motion.div
        style={{
          x: leftX,
          y: leftY,
          scale: leftScale,
          rotateY: leftRotateY,
          opacity: leftOpacity,
          position: "absolute",
          top: "50%",
          left: "50%",
          transformStyle: "preserve-3d" 
        }}
        className="w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transform-gpu origin-center"
      >
        <Image 
          src="/images/withoutbg2 copy.png" 
          alt="Scooter Travelling" 
          fill
          className="object-contain drop-shadow-[0_40px_40px_rgba(0,0,0,0.9)]"
          priority
        />
      </motion.div>

      {/* RIGHT SCOOTER - Front View */}
      <motion.div
        style={{
          x: rightX,
          y: rightY,
          scale: rightScale,
          opacity: rightOpacity,
          position: "absolute",
          top: "50%",
          left: "50%",
          transformStyle: "preserve-3d"
        }}
        className="w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transform-gpu origin-center"
      >
        <Image 
          src="/images/withoutbg2 copy2.png" 
          alt="Scooter Travelling 2" 
          fill
          className="object-contain drop-shadow-[0_40px_40px_rgba(0,0,0,0.9)]"
          priority
        />
      </motion.div>
    </div>
  );
}
