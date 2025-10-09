import { motion, AnimatePresence } from 'framer-motion'
import { useState, useMemo } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { machines, readings } from '../data/mock'
import StatusChip from '../components/StatusChip'

export default function Records() {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [selectedMachine, setSelectedMachine] = useState('')

  const filteredReadings = useMemo(() => {
    return readings.filter(r => {
      const readingDate = new Date(r.timestamp)
      const matchesMachine = !selectedMachine || r.machineId === selectedMachine
      const matchesStart = !startDate || readingDate >= new Date(startDate)
      const matchesEnd = !endDate || readingDate <= new Date(endDate + 'T23:59:59')
      return matchesMachine && matchesStart && matchesEnd
    })
  }, [startDate, endDate, selectedMachine])

  const chartData = useMemo(() => {
    return [...filteredReadings]
      .reverse()
      .slice(0, 10)
      .reverse()
      .map(r => ({
        time: new Date(r.timestamp).toLocaleTimeString(),
        ratio: r.ratio,
        target: 1.0,
      }))
  }, [filteredReadings])

  const handleReset = () => {
    setStartDate('')
    setEndDate('')
    setSelectedMachine('')
  }

  return (
    <motion.div 
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <motion.div 
        className="card p-4 flex flex-wrap items-center gap-3"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <input 
          className="input w-44 transition-all duration-200 focus:ring-2 focus:ring-beige-300" 
          type="date" 
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          placeholder="Start date"
        />
        <input 
          className="input w-44 transition-all duration-200 focus:ring-2 focus:ring-beige-300" 
          type="date" 
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          placeholder="End date"
        />
        <select 
          className="input w-48 transition-all duration-200 focus:ring-2 focus:ring-beige-300"
          value={selectedMachine}
          onChange={(e) => setSelectedMachine(e.target.value)}
        >
          <option value="">All machines</option>
          {machines.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
        </select>
        <motion.button 
          whileHover={{ scale: 1.05, transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] } }}
          whileTap={{ scale: 0.95, transition: { duration: 0.1, ease: [0.25, 0.1, 0.25, 1] } }}
          className="btn bg-white border border-beige-200 hover:bg-beige-50 transition-colors duration-200"
          onClick={handleReset}
        >
          Reset Filters
        </motion.button>
        <div className="text-sm text-neutral-500">
          {filteredReadings.length} record{filteredReadings.length !== 1 ? 's' : ''}
        </div>
      </motion.div>

      <motion.div 
        className="card p-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h3 className="font-medium mb-4">Ratio Trend (Last 10 readings)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f0" />
            <XAxis dataKey="time" stroke="#999" fontSize={12} />
            <YAxis domain={[0, 2]} stroke="#999" fontSize={12} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#fff', 
                border: '1px solid #e5e5e0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
              }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="ratio" 
              stroke="#000" 
              strokeWidth={2}
              dot={{ fill: '#000', r: 4 }}
              activeDot={{ r: 6 }}
              name="Actual Ratio"
            />
            <Line 
              type="monotone" 
              dataKey="target" 
              stroke="#16a34a" 
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
              name="Target (1.0)"
            />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div 
        className="card p-0 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
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
            <AnimatePresence mode="popLayout">
              {filteredReadings.map((r, i) => {
                const m = machines.find(x=>x.id===r.machineId)
                return (
                  <motion.tr 
                    key={r.id} 
                    className="border-t border-beige-100 hover:bg-beige-50 transition-colors duration-150"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2, delay: i * 0.02, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <td className="py-3 px-4">{new Date(r.timestamp).toLocaleString()}</td>
                    <td className="py-3 px-4">{m?.name}</td>
                    <td className="py-3 px-4">{r.operator}</td>
                    <td className="py-3 px-4">{r.ratio.toFixed(2)}</td>
                    <td className="py-3 px-4"><StatusChip status={r.status} /></td>
                  </motion.tr>
                )
              })}
            </AnimatePresence>
          </tbody>
        </table>
      </motion.div>
    </motion.div>
  )
}
