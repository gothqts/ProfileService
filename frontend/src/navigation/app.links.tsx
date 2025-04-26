import { ILink } from 'navigation/navigation.types.ts'
import { urls } from 'navigation/app.urls.ts'

const links: ILink[] = [
  {
    path: urls.profile,
    name: 'Профиль',

  },
  {
    path: urls.meetings,
    name: 'Мероприятия',
  },
  {
    path: urls.events,
    name: 'Мои собрания',
  },
  {
    path: urls.applications,
    name: 'Заявки',
  },
  {
    path: urls.properties,
    name: 'ПВК',
  },


]
export default links