import React from 'react'
import SectionReveal from './SectionReveal'
import FlowerSVG from './FlowerSVG'
import { FOOTER_BG } from '../data/weddingData'

export default function FooterSection() {
  return (
    <section className="relative overflow-hidden text-center"
      style={{ padding: '48px 24px 64px' }}>

      {/* BG photo */}
      <div className="absolute inset-0 bg-cover bg-top"
        style={{ backgroundImage: `url('${FOOTER_BG}')` }} />

      {/* Dark overlay */}
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg,rgba(10,5,8,0.84) 0%,rgba(10,5,8,0.92) 100%)' }} />

      {/* White glow top */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{ height: 80, background: 'linear-gradient(180deg,rgba(255,252,248,0.10),transparent)', zIndex: 1 }} />

      {/* Center flower deco */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 pointer-events-none" style={{ zIndex: 1 }}>
        <FlowerSVG size={80} opacity={0.20} petalColor1="#fff8f0" petalColor2="#d4a870" centerColor="#f8e8c8" petalCount={4} animDuration="10s" />
      </div>

      {/* Corner flowers */}
      <div className="absolute top-3 left-3 pointer-events-none" style={{ zIndex: 1 }}>
        <FlowerSVG size={60} opacity={0.18} petalColor1="#d4a870" petalColor2="#b07848" centerColor="#e8c890" petalCount={4} animDuration="8s" />
      </div>
      <div className="absolute top-3 right-3 pointer-events-none" style={{ zIndex: 1 }}>
        <FlowerSVG size={60} opacity={0.18} petalColor1="#d4a870" petalColor2="#b07848" centerColor="#e8c890" petalCount={4} animDuration="8s" animDelay="2s" />
      </div>

      <SectionReveal className="relative" style={{ zIndex: 2, paddingTop: 52 }}>
        <div style={{ width: 50, height: 1, background: 'linear-gradient(90deg,transparent,rgba(255,252,245,0.38),transparent)', margin: '0 auto 16px' }} />

        <h2 className="font-playfair font-bold text-[30px] text-gradient-footer">
          Yabes &amp; Winda
        </h2>

        <div style={{ width: 50, height: 1, background: 'linear-gradient(90deg,transparent,rgba(255,252,245,0.25),transparent)', margin: '14px auto' }} />

        <p className="font-montserrat font-light text-[12px] leading-[2.1]" style={{ color: '#7a6858' }}>
          Merupakan kehormatan bagi kami apabila<br />
          Bapak / Ibu / Saudara/i berkenan hadir<br />
          dan memberikan doa restu kepada kami.
        </p>

        <p className="font-montserrat text-[10px] tracking-[5px] mt-5" style={{ color: '#c9956b' }}>
          02 · 07 · 2026
        </p>

        <p className="font-montserrat text-[10px] mt-4 font-light" style={{ color: '#4a3828' }}>
          Made with ♥ for Yabes &amp; Winda
        </p>
      </SectionReveal>
    </section>
  )
}
