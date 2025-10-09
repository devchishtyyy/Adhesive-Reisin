import { motion } from 'framer-motion'
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
    <motion.div 
      className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <motion.div 
        className="lg:col-span-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <RatioGauge value={machine.ratio} />
      </motion.div>
      <motion.div 
        className="card p-6"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
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
      </motion.div>

      <motion.div 
        className="lg:col-span-3 card p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
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
              {last5.map((r, i) => (
                <motion.tr 
                  key={r.id} 
                  className="border-t border-beige-100 hover:bg-beige-50 transition-colors duration-150"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <td className="py-2 pr-4">{new Date(r.timestamp).toLocaleString()}</td>
                  <td className="py-2 pr-4">{r.adhesive} kg</td>
                  <td className="py-2 pr-4">{r.resin} kg</td>
                  <td className="py-2 pr-4">{r.ratio.toFixed(2)}</td>
                  <td className="py-2 pr-4"><StatusChip status={r.status} /></td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  )
}
