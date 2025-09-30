import type { Machine, Reading, Alert } from '../types'

export const machines: Machine[] = [
  { id: 'm1', name: 'Mixer A1', adhesiveWeight: 52, resinWeight: 48, ratio: 52/48, status: 'Normal' },
  { id: 'm2', name: 'Mixer B2', adhesiveWeight: 60, resinWeight: 40, ratio: 60/40, status: 'Warning' },
  { id: 'm3', name: 'Mixer C3', adhesiveWeight: 30, resinWeight: 70, ratio: 30/70, status: 'Critical' },
  { id: 'm4', name: 'Mixer D4', adhesiveWeight: 50, resinWeight: 50, ratio: 1, status: 'Normal' },
]

export const readings: Reading[] = Array.from({ length: 25 }).map((_, i) => {
  const m = machines[i % machines.length]
  const adhesive = Math.round(40 + Math.random()*30)
  const resin = Math.round(40 + Math.random()*30)
  const ratio = Number((adhesive / resin).toFixed(2))
  const status: Machine['status'] = ratio > 1.3 || ratio < 0.7 ? 'Critical' : ratio > 1.15 || ratio < 0.85 ? 'Warning' : 'Normal'
  return {
    id: `r${i+1}`,
    machineId: m.id,
    timestamp: new Date(Date.now() - i*3600_000).toISOString(),
    operator: ['Ali','Sara','Usman','John'][i % 4],
    adhesive,
    resin,
    ratio,
    status,
  }
})

export const alerts: Alert[] = [
  { id: 'a1', machineId: 'm2', machineName: 'Mixer B2', time: new Date().toISOString(), message: 'Ratio out of range', acknowledged: false },
  { id: 'a2', machineId: 'm3', machineName: 'Mixer C3', time: new Date(Date.now()-7200_000).toISOString(), message: 'Low adhesive weight', acknowledged: false },
]
