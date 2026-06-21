import React, { useState } from "react";
import MusicBar from "./components/MusicBar";
import HeroSection from "./components/HeroSection";
import GallerySection from "./components/GallerySection";
import CoupleSection from "./components/CoupleSection";
import EventsSection from "./components/EventsSection";
import FamilySection from "./components/FamilySection";
import WishesSection from "./components/WishesSection";
import FooterSection from "./components/FooterSection";
import EnvelopeSplash from "./components/EnvelopeSplash";

export default function App() {
  const [entered, setEntered] = useState(false);
  return (
    <div className="min-h-screen" style={{ background: "#0e0a0c" }}>
      <div className="mx-auto" style={{ maxWidth: 430 }}>
        {!entered && <EnvelopeSplash onEnter={() => setEntered(true)} />}
        <MusicBar autoPlay={entered} />
        <HeroSection />
        <GallerySection />
        <CoupleSection />
        <EventsSection />
        <FamilySection />
        <WishesSection />
        <FooterSection />
      </div>
    </div>
  );
}
