import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/tailwind.css'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Machine from './pages/Machine'
import Records from './pages/Records'
import Alerts from './pages/Alerts'
import AppShell from './shell/AppShell'

const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  {
    path: '/app',
    element: <AppShell />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'machine/:id', element: <Machine /> },
      { path: 'records', element: <Records /> },
      { path: 'alerts', element: <Alerts /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
