import { useState } from 'react'
import { alerts as seed } from '../data/mock'

export default function Alerts() {
  const [alerts, setAlerts] = useState(seed)

  function toggle(id: string) {
    setAlerts(prev => prev.map(a => a.id === id ? { ...a, acknowledged: !a.acknowledged } : a))
  }

  return (
    <div className="space-y-4">
      {alerts.map(a => (
        <div key={a.id} className="card p-4 flex items-center justify-between">
          <div>
            <div className="font-medium">{a.machineName}</div>
            <div className="text-sm text-neutral-500">{new Date(a.time).toLocaleString()} — {a.message}</div>
          </div>
          <button className={`btn ${a.acknowledged ? 'bg-white border border-beige-200' : 'btn-primary'}`} onClick={()=>toggle(a.id)}>
            {a.acknowledged ? 'Acknowledged' : 'Acknowledge'}
          </button>
        </div>
      ))}
    </div>
  )
}
