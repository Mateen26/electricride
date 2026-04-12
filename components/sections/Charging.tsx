"use client";

import { motion } from "framer-motion";
import { BatteryCharging, Zap, ShieldCheck } from "lucide-react";

export default function Charging() {
  return (
    <section id="charging" className="py-32 bg-dark-obsidian relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20 max-w-3xl mx-auto">
           <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
             <BatteryCharging className="w-16 h-16 text-electric-neon mx-auto mb-6" />
           </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Join the <span className="text-electric-neon text-glow">Electric Revolution.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-zinc-400"
            >
              Experience the thrill of electric riding with our state-of-the-art EV motorcycles. Embrace sustainability without compromising on power or style. Explore our range and elevate your ride today.
            </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { icon: Zap, title: "HyperCharge Network", desc: "Access over 10,000 blazing fast chargers globally without an app." },
             { icon: BatteryCharging, title: "Solid-State Tech", desc: "Density increased by 40%. The safety of solid-state, the power of lithium." },
             { icon: ShieldCheck, title: "10-Year Warranty", desc: "We guarantee your battery will retain 85% capacity over a full decade." }
           ].map((item, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.15 }}
               className="glass-panel p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300"
             >
               <item.icon className="w-10 h-10 text-white mb-6" />
               <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
               <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
