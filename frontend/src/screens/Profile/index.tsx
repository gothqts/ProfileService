import styles from './profile.module.css'
import profileApi from 'screens/Profile/profile.api.ts'
import { IUser } from 'screens/Auth/auth.types.ts'
import OrganizerPage from 'screens/Profile/Pages/OrganizerPage'
import StudentPage from 'screens/Profile/Pages/StudentPage'
import CuratorPage from 'screens/Profile/Pages/CuratorPage'
import LeaderPage from 'screens/Profile/Pages/LeaderPage'
import { useEffect } from 'react'
import { useAtom } from 'jotai/index'
import { authAtom } from 'screens/Auth/auth.atom.ts'

export const generateTableCells = (data: IUser) => ({
  about: [
    { label: 'Учебное заведение', value: data.university },
    { label: 'Специальность', value: data.speciality },
    { label: 'Курс', value: data.course },
  ],
  contacts: [
    { label: 'Telegram', value: data.telegram },
    { label: 'Почта', value: data.email },
    { label: 'Вконтакте', value: data.vk },
  ],
  competencies: [
    { label: 'Специализация', value: data.specialization },
    { label: 'Стек технологий', value: data.stack?.join(', ') },
  ],
})


const Profile = () => {
  const [user, setUser] = useAtom(authAtom)


  useEffect(() => {
    profileApi.getUserInfo().then(resp => {
      if (resp.status === 'success') {
        setUser(prev => ({
          ...prev,
          user: resp.body,
        }))
      }
    })

  }, [])


  return (
    <div className={styles.container}>
      <div className={styles.title}>Личный кабинет пользователя</div>
      {user.user && (() => {
        const roleComponents = {
          STUDENT: <StudentPage user={user.user} />,
          ORGANIZER: <OrganizerPage
            cells={generateTableCells(user.user).contacts}
            user={user.user}
          />,
          CURATOR: <CuratorPage user={user.user} />,
          LEADER: <LeaderPage user={user.user} />,

        }
        return roleComponents[user.user?.userRole as keyof typeof roleComponents]
      })()}
    </div>
  )
}

export default Profile