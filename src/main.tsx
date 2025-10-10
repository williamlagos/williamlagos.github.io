import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Main, PrivacyPolicy } from './components/pages'

import './style.scss'
import { Grommet } from 'grommet'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  },
  {
    path: '/pomodorino/privacy',
    element: <PrivacyPolicy />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Grommet>
      <RouterProvider router={router} />
    </Grommet>
  </StrictMode>
)
