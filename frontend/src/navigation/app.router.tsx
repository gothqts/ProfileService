import { createBrowserRouter } from 'react-router'
import Layout from 'shared/Layout'
import appRoutes from './app.routes.tsx'
import LoaderPage from 'shared/Loaders/LoaderPage'

const appRouter = createBrowserRouter([
  {
    element: <Layout />,
    hydrateFallbackElement: <LoaderPage/>,
    children: appRoutes,
  },
])
export default appRouter
