import { lazy } from 'react'
import { urls } from './app.urls.ts'
import { IRoute } from './navigation.types.ts'

const Profile = lazy(() => import('screens/Profile'))
const Events = lazy(() => import('screens/Events'))
const Properties = lazy(() => import('screens/Properties'))
const Meetings = lazy(() => import('screens/Meetings'))
const Applications = lazy(() => import('screens/Applications'))
const Auth = lazy(() => import('screens/Auth'))

const appRoutes: IRoute[] = [
  {
    path: urls.profile,
    element: <Profile />,
  },
  {
    path: urls.events,
    element: <Events />,
  },
  {
    path: urls.applications,
    element: <Applications />,
  },
  {
    path: urls.meetings,
    element: <Meetings />,

  },
  {
    path: urls.properties,
    element: <Properties />,
  },
  {
    path: urls.auth,
    element: <Auth />,
  },

]
export default appRoutes