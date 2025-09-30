import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { FiBell, FiLogOut } from 'react-icons/fi'
import { useEffect } from 'react'
import useAuth from '../state/useAuth'

export default function AppShell() {
  const navigate = useNavigate()
  const { isAuthed } = useAuth()

  useEffect(() => {
    if (!isAuthed()) navigate('/')
  }, [isAuthed, navigate])

  return (
    <div className="min-h-screen grid grid-cols-[260px_1fr] bg-beige-50 text-neutral-900">
      <aside className="p-6 border-r border-beige-100 bg-white">
        <div className="mb-8">
          <div className="h-10 w-10 rounded-xl bg-black text-white grid place-items-center font-semibold">AR</div>
          <div className="mt-3 text-sm text-neutral-500">Adhesive & Resin</div>
        </div>
        <nav className="space-y-2">
          <NavLink to="/app" end className={({isActive})=>`block px-3 py-2 rounded-lg hover:bg-beige-50 ${isActive?'bg-beige-50 font-medium':'text-neutral-700'}`}>Dashboard</NavLink>
          <NavLink to="/app/records" className={({isActive})=>`block px-3 py-2 rounded-lg hover:bg-beige-50 ${isActive?'bg-beige-50 font-medium':'text-neutral-700'}`}>Records</NavLink>
          <NavLink to="/app/alerts" className={({isActive})=>`block px-3 py-2 rounded-lg hover:bg-beige-50 ${isActive?'bg-beige-50 font-medium':'text-neutral-700'}`}>Alerts</NavLink>
        </nav>
      </aside>
      <main className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div className="text-xl font-semibold tracking-tight">Overview</div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-lg hover:bg-beige-100 text-neutral-700"><FiBell size={18} /></button>
            <button onClick={()=>{localStorage.removeItem('authed'); navigate('/')}} className="p-2 rounded-lg hover:bg-beige-100 text-neutral-700"><FiLogOut size={18} /></button>
          </div>
        </div>
        <Outlet />
      </main>
    </div>
  )
}
