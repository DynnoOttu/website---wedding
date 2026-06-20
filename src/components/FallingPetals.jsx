import React, { useMemo } from 'react'

const COLORS = [
  'rgba(220,180,140,0.60)',
  'rgba(200,160,120,0.55)',
  'rgba(240,210,180,0.55)',
  'rgba(210,170,130,0.50)',
]

export default function FallingPetals({ count = 8 }) {
  const petals = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left:     `${5 + (i * 10.5) % 88}%`,
      width:    10 + (i % 4) * 2,
      height:   7  + (i % 3) * 2,
      color:    COLORS[i % COLORS.length],
      duration: `${6 + (i % 5)}s`,
      delay:    `${(i * 1.15) % 8}s`,
    })),
  [count])

  return (
    <>
      {petals.map(p => (
        <div
          key={p.id}
          className="petal"
          style={{ left: p.left, top: 0, animationDuration: p.duration, animationDelay: p.delay }}
        >
          <div
            className="petal-inner"
            style={{ width: p.width, height: p.height, background: p.color }}
          />
        </div>
      ))}
    </>
  )
}
