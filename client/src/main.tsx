import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import LoginRegisterPage from './LoginRegisterPage'
import './index.css'

const Root = () => {
  const [user, setUser] = useState(null)

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <App
          user={user}
          setUser={setUser}
        />
      ),
    },
    {
      path: '/login',
      element: <LoginRegisterPage setUser={setUser} />,
    },
    {
      path: '/register',
      element: <LoginRegisterPage setUser={setUser} />,
    },
  ])

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Root />
)
