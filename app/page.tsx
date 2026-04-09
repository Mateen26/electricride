import Navbar from "@/components/ui/Navbar";
import GlobalScootersOverlay from "@/components/sections/GlobalScootersOverlay";
import MobileScooterOverlay from "@/components/sections/MobileScooterOverlay";
import Hero from "@/components/sections/Hero";
import Performance from "@/components/sections/Performance";
import Design from "@/components/sections/Design";
import ScrollSequence from "@/components/sections/ScrollSequence";
import InteractiveShowcase from "@/components/sections/InteractiveShowcase";
import Charging from "@/components/sections/Charging";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative bg-dark-obsidian selection:bg-electric-neon selection:text-black">
      {/* The Global Overlay controlling the travelling scooters */}
      <GlobalScootersOverlay />
      <MobileScooterOverlay />

      <Navbar />

      <Hero />
      <Performance />
      <Design />
      <ScrollSequence />
      <InteractiveShowcase />
      <Charging />
      <Footer />
    </main>
  );
}
