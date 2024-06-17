import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Auth from './components/screens/auth/Auth'
import Home from './components/screens/home/Home'
import './index.scss'
import { Providers } from './provider/providers'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Auth />
  },
  {
    path: '/home',
    element: <Home />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  </React.StrictMode>
)
