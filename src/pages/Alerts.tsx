import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { alerts as seed } from '../data/mock'

export default function Alerts() {
  const [alerts, setAlerts] = useState(seed)

  function toggle(id: string) {
    setAlerts(prev => prev.map(a => a.id === id ? { ...a, acknowledged: !a.acknowledged } : a))
  }

  return (
    <motion.div 
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <AnimatePresence mode="popLayout">
        {alerts.map((a, i) => (
          <motion.div 
            key={a.id} 
            className="card p-4 flex items-center justify-between"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20, height: 0, marginBottom: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            layout
          >
            <div>
              <div className="font-medium">{a.machineName}</div>
              <div className="text-sm text-neutral-500">{new Date(a.time).toLocaleString()} — {a.message}</div>
            </div>
            <motion.button 
              className={`btn ${a.acknowledged ? 'bg-white border border-beige-200' : 'btn-primary'}`} 
              onClick={()=>toggle(a.id)}
              whileHover={{ scale: 1.05, transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] } }}
              whileTap={{ scale: 0.95, transition: { duration: 0.1, ease: [0.25, 0.1, 0.25, 1] } }}
            >
              {a.acknowledged ? 'Acknowledged' : 'Acknowledge'}
            </motion.button>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  )
}
