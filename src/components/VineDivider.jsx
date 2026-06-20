import React from 'react'

export default function VineDivider({ flip = false }) {
  const path = flip
    ? 'M0,24 Q55,40 110,24 Q165,8 220,24 Q275,40 330,24 Q385,8 430,24'
    : 'M0,24 Q55,8 110,24 Q165,40 220,24 Q275,8 330,24 Q385,40 430,24'

  return (
    <svg width="100%" viewBox="0 0 430 48" preserveAspectRatio="none"
      style={{ display: 'block', lineHeight: 0, background: '#0e0a0c' }}>
      <defs>
        <linearGradient id="vineGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="rgba(255,252,245,0)" />
          <stop offset="15%"  stopColor="rgba(200,150,90,0.5)" />
          <stop offset="50%"  stopColor="rgba(255,252,245,0.35)" />
          <stop offset="85%"  stopColor="rgba(200,150,90,0.5)" />
          <stop offset="100%" stopColor="rgba(255,252,245,0)" />
        </linearGradient>
      </defs>
      <path d={path} fill="none" stroke="url(#vineGrad)" strokeWidth="1.2" />
      <ellipse cx="110" cy="24" rx="5" ry="3" fill="rgba(200,160,100,0.4)"  transform={`rotate(${flip?25:-25},110,24)`} />
      <ellipse cx="220" cy="24" rx="5" ry="3" fill="rgba(255,252,245,0.28)" transform={`rotate(${flip?-15:15},220,24)`} />
      <ellipse cx="330" cy="24" rx="5" ry="3" fill="rgba(200,160,100,0.4)"  transform={`rotate(${flip?20:-20},330,24)`} />
      <circle cx="55"  cy={flip?35:18} r="2.5" fill="rgba(255,252,245,0.2)" />
      <circle cx="165" cy={flip?18:35} r="2"   fill="rgba(200,150,90,0.28)" />
      <circle cx="275" cy={flip?35:18} r="2.5" fill="rgba(255,252,245,0.2)" />
      <circle cx="385" cy={flip?18:35} r="2"   fill="rgba(200,150,90,0.28)" />
    </svg>
  )
}
