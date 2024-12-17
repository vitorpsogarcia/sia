import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import App from './App'
import { Home } from './pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element:
      <>
        <Navigate to="/home" />
        <App />
      </>,
    children: [{
      path: '/home', element: <Home />
    },
  {
    path: '/*', element: <Navigate to = '/home' />
  }]
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
