import React from 'react'
import MusicBar      from './components/MusicBar'
import HeroSection   from './components/HeroSection'
import GallerySection  from './components/GallerySection'
import CoupleSection   from './components/CoupleSection'
import EventsSection   from './components/EventsSection'
import FamilySection   from './components/FamilySection'
import WishesSection   from './components/WishesSection'
import FooterSection   from './components/FooterSection'

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: '#0e0a0c' }}>
      <div className="mx-auto" style={{ maxWidth: 430 }}>
        <MusicBar />
        <HeroSection />
        <GallerySection />
        <CoupleSection />
        <EventsSection />
        <FamilySection />
        <WishesSection />
        <FooterSection />
      </div>
    </div>
  )
}
