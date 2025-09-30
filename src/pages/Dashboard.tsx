import MachineCard from '../components/MachineCard'
import { machines } from '../data/mock'

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {machines.map(m => (
          <MachineCard key={m.id} m={m} />
        ))}
      </div>
    </div>
  )
}
