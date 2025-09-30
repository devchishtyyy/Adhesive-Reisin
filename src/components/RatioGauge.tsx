type Props = { value: number }

export default function RatioGauge({ value }: Props) {
  const pct = Math.max(0, Math.min(200, value * 100))
  const stroke = pct <= 115 && pct >= 85 ? '#16a34a' : pct <= 130 && pct >= 70 ? '#f59e0b' : '#ef4444'
  const normalized = Math.max(0, Math.min(1.6, value))
  const angle = (normalized / 1.6) * 180 - 90
  const x = 50 + 38 * Math.cos((angle * Math.PI) / 180)
  const y = 50 + 38 * Math.sin((angle * Math.PI) / 180)

  return (
    <div className="card p-6">
      <div className="text-sm text-neutral-500 mb-2">Adhesive/Resin Ratio</div>
      <svg viewBox="0 0 100 60" className="w-full">
        <path d="M10 50 A40 40 0 0 1 90 50" fill="none" stroke="#eee" strokeWidth="8" />
        <path d="M10 50 A40 40 0 0 1 90 50" fill="none" stroke={stroke} strokeWidth="8" strokeDasharray={`${(normalized/1.6)*126} 200`} />
        <circle cx="50" cy="50" r="3" fill="#999" />
        <line x1="50" y1="50" x2={x} y2={y} stroke={stroke} strokeWidth="3" />
      </svg>
      <div className="mt-3 text-3xl font-semibold tracking-tight">{value.toFixed(2)}</div>
      <div className="text-sm text-neutral-500">Target 1.00 (±15%)</div>
    </div>
  )
}
