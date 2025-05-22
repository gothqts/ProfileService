import appRouter from 'navigation/app.router.tsx'
import { RouterProvider } from 'react-router'
import { useEffect } from 'react'
import { urls } from 'navigation/app.urls.ts'
import AuthProvider from 'screens/Auth/components/AuthProvider'


const App = () => {
  useEffect(() => {
    if (location.pathname === '/') {
      location.replace(urls.events)
    }
  }, [])

  return (
    <AuthProvider>
      <RouterProvider router={appRouter} />
    </AuthProvider>

  )
}

export default App