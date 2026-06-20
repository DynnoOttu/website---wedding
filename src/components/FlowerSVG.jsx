import React from 'react'

/** Reusable SVG flower with petal sway animation */
export default function FlowerSVG({
  size = 100,
  opacity = 0.5,
  petalColor1 = '#d4a870',
  petalColor2 = '#b07848',
  centerColor = '#f0d8b0',
  petalCount = 4,
  style = {},
  className = '',
  animDuration = '6s',
  animDelay = '0s',
}) {
  const cx = size / 2
  const cy = size / 2
  const rx = size * 0.085
  const ry = size * 0.235
  const petals = Array.from({ length: petalCount }, (_, i) => (360 / petalCount) * i)

  return (
    <svg
      width={size} height={size} viewBox={`0 0 ${size} ${size}`}
      style={{ opacity, ...style }}
      className={`flower-sway ${className}`}
      style={{ opacity, animationDuration: animDuration, animationDelay: animDelay, transformOrigin: 'center', ...style }}
    >
      {petals.map((deg, i) => (
        <ellipse
          key={i}
          cx={cx} cy={cy} rx={rx} ry={ry}
          fill={i % 2 === 0 ? petalColor1 : petalColor2}
          style={{ transformOrigin: `${cx}px ${cy}px`, transform: `rotate(${deg}deg)` }}
        />
      ))}
      {/* White shimmer at top petal */}
      <ellipse
        cx={cx} cy={cy - ry * 0.6} rx={rx * 0.5} ry={ry * 0.25}
        fill="rgba(255,252,245,0.28)"
        style={{ transformOrigin: `${cx}px ${cy}px`, transform: 'rotate(0deg)' }}
      />
      <circle cx={cx} cy={cy} r={size * 0.09} fill={centerColor} />
    </svg>
  )
}
