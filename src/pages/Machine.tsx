import { useParams } from 'react-router-dom'
import RatioGauge from '../components/RatioGauge'
import StatusChip from '../components/StatusChip'
import { machines, readings } from '../data/mock'

export default function Machine() {
  const { id } = useParams()
  const machine = machines.find(m => m.id === id)
  const last5 = readings.filter(r => r.machineId === id).slice(0,5)

  if (!machine) return <div>Machine not found.</div>

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <RatioGauge value={machine.ratio} />
      </div>
      <div className="card p-6">
        <div className="flex items-center justify-between">
          <div className="font-medium">{machine.name}</div>
          <StatusChip status={machine.status} />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
          <div className="card p-3 text-center">
            <div className="text-xs text-neutral-500">Adhesive</div>
            <div className="text-lg font-semibold">{machine.adhesiveWeight} kg</div>
          </div>
          <div className="card p-3 text-center">
            <div className="text-xs text-neutral-500">Resin</div>
            <div className="text-lg font-semibold">{machine.resinWeight} kg</div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-3 card p-6">
        <div className="font-medium mb-3">Last 5 readings</div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="text-left text-neutral-500">
              <tr>
                <th className="py-2 pr-4">Time</th>
                <th className="py-2 pr-4">Adhesive</th>
                <th className="py-2 pr-4">Resin</th>
                <th className="py-2 pr-4">Ratio</th>
                <th className="py-2 pr-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {last5.map(r => (
                <tr key={r.id} className="border-t border-beige-100">
                  <td className="py-2 pr-4">{new Date(r.timestamp).toLocaleString()}</td>
                  <td className="py-2 pr-4">{r.adhesive} kg</td>
                  <td className="py-2 pr-4">{r.resin} kg</td>
                  <td className="py-2 pr-4">{r.ratio.toFixed(2)}</td>
                  <td className="py-2 pr-4"><StatusChip status={r.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
