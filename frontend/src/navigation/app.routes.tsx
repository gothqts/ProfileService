import { lazy } from 'react'
import { urls } from './app.urls.ts'
import { IRoute } from './navigation.types.ts'
import { profileLoader } from 'navigation/app.loaders.ts'

const Profile = lazy(() => import('screens/Profile'))
const UpdateProfile = lazy(() => import('screens/Profile/pages/UpdateProfile'))

const Events = lazy(() => import('screens/Events'))
const Properties = lazy(() => import('screens/Properties'))
const Meetings = lazy(() => import('screens/Meetings'))
const Applications = lazy(() => import('screens/Applications'))

const appRoutes: IRoute[] = [
  {
    path: urls.profile,
    element: <Profile />,
  },
  {
    path: urls.updateProfile,
    element: <UpdateProfile />,
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

]
export default appRoutes