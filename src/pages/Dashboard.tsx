import { motion } from 'framer-motion'
import MachineCard from '../components/MachineCard'
import { machines } from '../data/mock'

export default function Dashboard() {
  return (
    <motion.div 
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {machines.map((m, i) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: i * 0.1,
              ease: [0.25, 0.1, 0.25, 1]
            }}
          >
            <MachineCard m={m} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
