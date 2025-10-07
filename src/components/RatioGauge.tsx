type Props = { value: number }

export default function RatioGauge({ value }: Props) {
  const pct = Math.max(0, Math.min(200, value * 100))
  const stroke = pct <= 115 && pct >= 85 ? '#16a34a' : pct <= 130 && pct >= 70 ? '#f59e0b' : '#ef4444'
  
  // Center the gauge at 1.0 (target ratio)
  // Range: 0.4 to 1.6 (1.0 ± 0.6)
  const minValue = 0.4
  const maxValue = 1.6
  const centerValue = 1.0
  const range = 0.6
  
  const clampedValue = Math.max(minValue, Math.min(maxValue, value))
  // Angle calculation: -90° at center (1.0) points straight up
  // -180° at 0.4 (left), 0° at 1.6 (right)
  const angle = -90 + ((clampedValue - centerValue) / range) * 90
  const x = 50 + 38 * Math.cos((angle * Math.PI) / 180)
  const y = 50 + 38 * Math.sin((angle * Math.PI) / 180)
  
  // Calculate arc progress for the colored arc (from left edge to needle position)
  const arcProgress = ((clampedValue - minValue) / (maxValue - minValue)) * 126

  return (
    <div className="card p-6">
      <div className="text-sm text-neutral-500 mb-2">Adhesive/Resin Ratio</div>
      <svg viewBox="0 0 100 60" className="w-full">
        <path d="M10 50 A40 40 0 0 1 90 50" fill="none" stroke="#eee" strokeWidth="8" />
        <path d="M10 50 A40 40 0 0 1 90 50" fill="none" stroke={stroke} strokeWidth="8" strokeDasharray={`${arcProgress} 200`} />
        <circle cx="50" cy="50" r="3" fill="#999" />
        <line x1="50" y1="50" x2={x} y2={y} stroke={stroke} strokeWidth="3" />
      </svg>
      <div className="mt-3 text-3xl font-semibold tracking-tight">{value.toFixed(2)}</div>
      <div className="text-sm text-neutral-500">Target 1.00 (±15%)</div>
    </div>
  )
}
