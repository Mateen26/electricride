"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function MobileScooterOverlay() {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ONLY THE FRONT-FACING SCOOTER is rendered here
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "0vw"]);

  // y smoothly avoids the text. During the 0.35 - 0.75 sequence, it dodges text 1 (top), text 2 (bottom), text 3 (top)
  const y = useTransform(
    scrollYProgress,
    [0, 0.08, 0.15, 0.25, 0.35, 0.43, 0.55, 0.67, 1],
    ["30vh", "30vh", "25vh", "5vh", "0vh", "15vh", "-20vh", "15vh", "15vh"]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.08, 0.15, 0.25, 0.35, 0.75],
    [1.1, 1.1, 1.0, 0.7, 0.85, 1.25]
  );

  // Removed 360 degree 2D rotation for mobile completely
  const rotateY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 0]
  );

  const opacity = useTransform(
    scrollYProgress,
    // Safely fades to 0 while physically hidden behind the z-50 Engineering section
    // so it doesn't pop out in the Battery section later!
    [0, 0.70, 0.72, 1],
    [1, 1, 0, 0]
  );

  if (!mounted) return null;

  return (
    <div className="block md:hidden fixed inset-0 pointer-events-none z-40 overflow-hidden perspective-1000">
      <motion.div
        initial={{ y: "40vh", scale: 0.1, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-20"
      >
        <motion.div
          style={{
            x,
            y,
            scale,
            rotateY,
            opacity,
            position: "absolute",
            top: "50%",
            left: "50%",
            transformStyle: "preserve-3d"
          }}
          className="w-[280px] h-[280px] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transform-gpu origin-center"
        >
          <Image
            src="/images/withoutbg2 copy2.png"
            alt="Scooter Mobile"
            fill
            className="object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.9)]"
            priority
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
