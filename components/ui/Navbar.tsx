"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Explore", href: "#explore" },
    { name: "Performance", href: "#performance" },
    { name: "Design", href: "#design" },
    { name: "Reserve", href: "#reserve" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          scrolled ? "glass-panel py-4 shadow-lg shadow-electric-neon/10 border-white/5" : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-xl bg-electric-neon/10 text-electric-neon group-hover:bg-electric-neon/20 transition-colors">
              <Zap size={24} className="fill-electric-neon/50" />
            </div>
            <span className="text-xl font-bold tracking-widest uppercase">E-Ride</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-electric-neon transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-6 py-2.5 rounded-full font-bold text-sm hover:bg-electric-neon hover:text-black hover:shadow-[0_0_20px_rgba(57,255,20,0.5)] transition-all duration-300"
            >
              Order Now
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-zinc-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-dark-obsidian border-l border-white/10 md:hidden flex flex-col"
          >
            <div className="p-6 flex justify-end">
              <button onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 p-2">
                <X size={28} />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-bold tracking-wider text-zinc-400 hover:text-electric-neon transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <button className="mt-8 bg-electric-neon text-black px-8 py-4 rounded-full font-bold text-lg w-3/4 shadow-[0_0_30px_rgba(57,255,20,0.3)]">
                Order Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
