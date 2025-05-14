import appRouter from 'navigation/app.router.tsx'
import { RouterProvider } from 'react-router'
import { useEffect } from 'react'
import { urls } from 'navigation/app.urls.ts'
import AuthProvider from 'screens/Auth/components/AuthProvider'
import { QueryClient } from '@tanstack/query-core'
import { QueryClientProvider } from '@tanstack/react-query'


const App = () => {
  const queryClient = new QueryClient()
  useEffect(() => {
    if (location.pathname === '/') {
      location.replace(urls.events)
    }
  }, [])

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={appRouter} />
      </QueryClientProvider>
    </AuthProvider>

  )
}

export default App