import { Link } from 'react-router-dom'
import StatusChip from './StatusChip'
import { Machine } from '../types'

export default function MachineCard({ m }: { m: Machine }) {
  return (
    <Link to={`/app/machine/${m.id}`} className="card p-5 block hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between">
        <div className="font-medium">{m.name}</div>
        <StatusChip status={m.status} />
      </div>
      <div className="mt-3 grid grid-cols-3 gap-3 text-sm text-neutral-600">
        <div className="card p-3 text-center">
          <div className="text-xs text-neutral-500">Adhesive</div>
          <div className="text-lg font-semibold">{m.adhesiveWeight} kg</div>
        </div>
        <div className="card p-3 text-center">
          <div className="text-xs text-neutral-500">Resin</div>
          <div className="text-lg font-semibold">{m.resinWeight} kg</div>
        </div>
        <div className="card p-3 text-center">
          <div className="text-xs text-neutral-500">Ratio</div>
          <div className="text-lg font-semibold">{m.ratio.toFixed(2)}</div>
        </div>
      </div>
    </Link>
  )
}
