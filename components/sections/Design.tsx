"use client";

import { motion } from "framer-motion";

export default function Design() {
  return (
    <section id="design" className="py-32 bg-[#050505] relative overflow-hidden min-h-[120vh]">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center flex flex-col items-center pt-[5vh]">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Mastered by <span className="text-zinc-500">Innovation.</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-zinc-400 max-w-2xl mx-auto"
        >
          Unapologetic design. Sharp geometric lines paired with a minimal silhouette to cut through the wind and through the noise.
        </motion.p>
      </div>

      <div className="flex flex-col md:flex-row gap-24 md:gap-40 max-w-[1400px] mx-auto px-10 items-start relative z-10 w-full">
        
        {/* Left clear area for Scooter 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex-1 w-full text-center pt-[250px] md:pt-[450px] pb-10"
        >
           <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white">Aluminum Wheel Hub</h3>
           <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
             Lightweight yet durable, offering enhanced responsiveness and reduced weight for significantly better handling.
           </p>
           <p className="text-zinc-400 text-md leading-relaxed">
             Engineered for stability and grip, our 120/70-12 front and rear tires ensure a safe and comfortable ride consistently on various terrains.
           </p>
        </motion.div>
        
        {/* Right clear area for Scooter 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex-1 w-full text-center pt-[100px] md:pt-[450px] pb-10"
        >
           <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white">LCD Instrument Panel</h3>
           <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
             Stay securely informed with a sleek, easy-to-read centralized display that provides real-time information on speed, battery life, and more.
           </p>
           <p className="text-zinc-400 text-md leading-relaxed">
             Experience superior shock absorption and handling paired with our hydraulic front fork, ensuring a completely smooth ride even on rough roads.
           </p>
        </motion.div>
      </div>
    </section>
  );
}
