import appRouter from 'navigation/app.router.tsx'
import { RouterProvider } from 'react-router'
import { useEffect } from 'react'
import { urls } from 'navigation/app.urls.ts'


const App = () => {
  useEffect(() => {
    if (location.pathname === '/') {
      location.replace(urls.events)
    }
  }, [])

  return (
    <RouterProvider router={appRouter} />
  )
}

export default App