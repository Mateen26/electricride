"use client";

import { motion } from "framer-motion";
import { Zap, ArrowRight, Twitter, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#020202] pt-32 pb-10 border-t border-white/5 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] bg-electric-neon/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 relative z-10">
          
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group inline-flex">
              <div className="p-2 rounded-xl bg-electric-neon text-black group-hover:shadow-[0_0_20px_rgba(57,255,20,0.5)] transition-all">
                <Zap size={24} className="fill-black" />
              </div>
              <span className="text-3xl font-bold tracking-widest uppercase text-white">E-Ride</span>
            </Link>
            <p className="text-zinc-400 text-lg max-w-md mb-8">
              Changing the way the world moves. One charge, one exhilarating ride at a time.
            </p>
            
            <div className="flex bg-white/5 p-1 rounded-full max-w-md border border-white/10 focus-within:border-electric-neon focus-within:bg-white/10 transition-all">
               <input 
                 type="email" 
                 placeholder="Stay updated" 
                 className="bg-transparent border-none outline-none text-white px-4 py-3 w-full"
               />
               <button className="bg-electric-neon text-black px-6 rounded-full font-bold hover:scale-95 transition-transform flex items-center justify-center">
                 <ArrowRight size={20} />
               </button>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Explore</h4>
            <ul className="space-y-4">
              {['Performance', 'Design', 'Technology', 'Charging', 'Accessories'].map(link => (
                 <li key={link}>
                   <a href="#" className="text-zinc-400 hover:text-electric-neon transition-colors">{link}</a>
                 </li>
              ))}
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold text-lg mb-6">Company</h4>
             <ul className="space-y-4">
               {['About Us', 'Careers', 'Press', 'Investors', 'Contact'].map(link => (
                  <li key={link}>
                    <a href="#" className="text-zinc-400 hover:text-electric-neon transition-colors">{link}</a>
                  </li>
               ))}
             </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/10 relative z-10">
           <p className="text-zinc-500 font-medium">© 2026 E-Ride Motors Inc. All rights reserved.</p>
           <div className="flex items-center gap-6 mt-6 md:mt-0">
             <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Twitter size={24} /></a>
             <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Instagram size={24} /></a>
             <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Youtube size={24} /></a>
           </div>
        </div>
      </div>
    </footer>
  );
}
