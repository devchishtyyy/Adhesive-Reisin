import { machines, readings } from '../data/mock'
import StatusChip from '../components/StatusChip'

export default function Records() {
  return (
    <div className="space-y-4">
      <div className="card p-4 flex flex-wrap items-center gap-3">
        <input className="input w-44" type="date" />
        <input className="input w-44" type="date" />
        <select className="input w-48">
          <option value="">All machines</option>
          {machines.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
        </select>
        <button className="btn bg-white border border-beige-200 hover:bg-beige-50">Mock Filter</button>
      </div>

      <div className="card p-0 overflow-hidden">
        <table className="min-w-full text-sm">
          <thead className="bg-beige-50 text-neutral-600 text-left">
            <tr>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Machine</th>
              <th className="py-3 px-4">Operator</th>
              <th className="py-3 px-4">Ratio</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {readings.map(r => {
              const m = machines.find(x=>x.id===r.machineId)
              return (
                <tr key={r.id} className="border-t border-beige-100">
                  <td className="py-3 px-4">{new Date(r.timestamp).toLocaleString()}</td>
                  <td className="py-3 px-4">{m?.name}</td>
                  <td className="py-3 px-4">{r.operator}</td>
                  <td className="py-3 px-4">{r.ratio.toFixed(2)}</td>
                  <td className="py-3 px-4"><StatusChip status={r.status} /></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
