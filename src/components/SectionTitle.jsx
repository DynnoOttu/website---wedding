import React from 'react'

export default function SectionTitle({ label, title }) {
  return (
    <div className="text-center mb-7">
      <p style={{ fontSize: 9, letterSpacing: 5, textTransform: 'uppercase', color: '#c9956b', fontFamily: 'Montserrat', marginBottom: 6 }}>
        {label}
      </p>
      <h2 className="font-playfair font-bold text-[27px] leading-tight text-gradient-gold">
        {title}
      </h2>
      <div style={{ width: 48, height: 1, background: 'linear-gradient(90deg,transparent,#c9956b,transparent)', margin: '14px auto 0' }} />
    </div>
  )
}
