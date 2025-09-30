import clsx from 'clsx'
import { Machine } from '../types'

export default function StatusChip({ status }: { status: Machine['status'] }) {
  const color = status === 'Normal' ? 'bg-green-100 text-green-700' : status === 'Warning' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
  return <span className={clsx('px-2.5 py-1 rounded-full text-xs font-medium', color)}>{status}</span>
}
