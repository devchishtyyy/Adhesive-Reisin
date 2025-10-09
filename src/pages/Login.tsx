import { motion } from 'framer-motion'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../state/useAuth'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth()

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    login(email)
    navigate('/app')
  }

  return (
    <div className="min-h-screen grid place-items-center bg-beige-50">
      <motion.div 
        className="card w-[380px] p-8"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.div 
          className="text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="mx-auto h-12 w-12 rounded-xl bg-black text-white grid place-items-center font-semibold">AR</div>
          <h1 className="mt-4 text-xl font-semibold tracking-tight">Sign in</h1>
          <p className="text-sm text-neutral-500">Adhesive & Resin Monitoring</p>
        </motion.div>
        <motion.form 
          className="space-y-4" 
          onSubmit={onSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div>
            <label className="text-sm text-neutral-600">Email</label>
            <input className="input mt-1 transition-all duration-200 focus:ring-2 focus:ring-beige-300" type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@company.com" required />
          </div>
          <div>
            <label className="text-sm text-neutral-600">Password</label>
            <input className="input mt-1 transition-all duration-200 focus:ring-2 focus:ring-beige-300" type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••••" required />
          </div>
          <motion.button 
            className="btn btn-primary w-full" 
            type="submit"
            whileHover={{ scale: 1.02, transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] } }}
            whileTap={{ scale: 0.98, transition: { duration: 0.1, ease: [0.25, 0.1, 0.25, 1] } }}
          >
            Continue
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  )
}
