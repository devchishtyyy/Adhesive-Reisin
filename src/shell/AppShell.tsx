import { motion } from 'framer-motion'
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
      <motion.aside 
        className="p-6 border-r border-beige-100 bg-white"
        initial={{ x: -260 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="h-10 w-10 rounded-xl bg-black text-white grid place-items-center font-semibold">AR</div>
          <div className="mt-3 text-sm text-neutral-500">Adhesive & Resin</div>
        </motion.div>
        <nav className="space-y-2">
          <NavLink to="/app" end className={({isActive})=>`block px-3 py-2 rounded-lg transition-all duration-300 ease-out hover:bg-beige-50 hover:translate-x-1 ${isActive?'bg-beige-50 font-medium':'text-neutral-700'}`}>Dashboard</NavLink>
          <NavLink to="/app/records" className={({isActive})=>`block px-3 py-2 rounded-lg transition-all duration-300 ease-out hover:bg-beige-50 hover:translate-x-1 ${isActive?'bg-beige-50 font-medium':'text-neutral-700'}`}>Records</NavLink>
          <NavLink to="/app/alerts" className={({isActive})=>`block px-3 py-2 rounded-lg transition-all duration-300 ease-out hover:bg-beige-50 hover:translate-x-1 ${isActive?'bg-beige-50 font-medium':'text-neutral-700'}`}>Alerts</NavLink>
        </nav>
      </motion.aside>
      <main className="p-8">
        <motion.div 
          className="flex items-center justify-between mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="text-xl font-semibold tracking-tight">Overview</div>
          <div className="flex items-center gap-3">
            <motion.button 
              whileHover={{ scale: 1.1, transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] } }}
              whileTap={{ scale: 0.95, transition: { duration: 0.1, ease: [0.25, 0.1, 0.25, 1] } }}
              className="relative p-2 rounded-lg hover:bg-beige-100 text-neutral-700 transition-colors duration-200"
            >
              <FiBell size={18} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1, transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] } }}
              whileTap={{ scale: 0.95, transition: { duration: 0.1, ease: [0.25, 0.1, 0.25, 1] } }}
              onClick={()=>{localStorage.removeItem('authed'); navigate('/')}} 
              className="p-2 rounded-lg hover:bg-beige-100 text-neutral-700 transition-colors duration-200"
            >
              <FiLogOut size={18} />
            </motion.button>
          </div>
        </motion.div>
        <Outlet />
      </main>
    </div>
  )
}
