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
          Forged in <span className="text-zinc-500">Titanium.</span>
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
           <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white">Aerospace Frame</h3>
           <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
             Ultra light, hyper strong. Engineered for maximum agility. Our advanced die-cast titanium chassis eliminates redundant joints, significantly reducing overall mass while offering peak structural rigidity.
           </p>
           <p className="text-zinc-400 text-md leading-relaxed">
             Every millimeter is strictly optimized to lower the center of gravity. This translates to an incredibly planted feel, keeping you glued to the asphalt when attacking sharp apexes at high speeds.
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
           <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white">Matte Obsidian</h3>
           <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
             A sleek finish that absorbs light and turns heads. Meticulously sprayed with an anti-scratch, hydro-phobic ceramic coating, the X-1 stays pristine regardless of the environment or weather conditions.
           </p>
           <p className="text-zinc-400 text-md leading-relaxed">
             The deep obsidian palette is offset by laser-cut neon accents and striking geometrics, creating an imposing presence that undeniably commands the streets.
           </p>
        </motion.div>
      </div>
    </section>
  );
}
