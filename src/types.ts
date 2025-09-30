export type Machine = {
  id: string
  name: string
  adhesiveWeight: number
  resinWeight: number
  ratio: number
  status: 'Normal' | 'Warning' | 'Critical'
}

export type Reading = {
  id: string
  machineId: string
  timestamp: string
  operator: string
  adhesive: number
  resin: number
  ratio: number
  status: Machine['status']
}

export type Alert = {
  id: string
  machineId: string
  machineName: string
  time: string
  message: string
  acknowledged: boolean
}
