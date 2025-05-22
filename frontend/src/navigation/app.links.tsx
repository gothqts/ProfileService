import { ILink } from 'navigation/navigation.types.ts'
import { urls } from 'navigation/app.urls.ts'

const links: ILink[] = [
  {
    path: urls.profile,
    name: 'Профиль',

  },
  {
    path: urls.events,
    name: 'Мероприятия',
  },
  {
    path: urls.meetings,
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

const organizerLinks: ILink[] = [
  {
    path: urls.profile,
    name: 'Профиль',

  },
  {
    path: urls.events,
    name: 'Мероприятия',
  },
  {
    path: urls.meetings,
    name: 'Мои собрания',
  },
  {
    path: urls.properties,
    name: 'ПВК',
  },

]

const allLinks = {
  links,
  organizerLinks,
}
export default allLinks