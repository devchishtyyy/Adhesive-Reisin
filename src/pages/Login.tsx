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
      <div className="card w-[380px] p-8">
        <div className="text-center mb-6">
          <div className="mx-auto h-12 w-12 rounded-xl bg-black text-white grid place-items-center font-semibold">AR</div>
          <h1 className="mt-4 text-xl font-semibold tracking-tight">Sign in</h1>
          <p className="text-sm text-neutral-500">Adhesive & Resin Monitoring</p>
        </div>
        <form className="space-y-4" onSubmit={onSubmit}>
          <div>
            <label className="text-sm text-neutral-600">Email</label>
            <input className="input mt-1" type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@company.com" required />
          </div>
          <div>
            <label className="text-sm text-neutral-600">Password</label>
            <input className="input mt-1" type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••••" required />
          </div>
          <button className="btn btn-primary w-full" type="submit">Continue</button>
        </form>
      </div>
    </div>
  )
}
