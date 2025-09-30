import { useCallback } from 'react'

export default function useAuth() {
  const login = useCallback((email: string) => {
    localStorage.setItem('authed', email)
  }, [])

  const isAuthed = useCallback(() => {
    return Boolean(localStorage.getItem('authed'))
  }, [])

  return { login, isAuthed }
}
