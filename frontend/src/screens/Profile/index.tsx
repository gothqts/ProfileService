import styles from './profile.module.css'
import { getUserInfo } from 'screens/Profile/profile.api.ts'
import { useQuery } from '@tanstack/react-query'
import { IUser } from 'screens/Auth/auth.types.ts'
import OrganizerPage from 'screens/Profile/UpdateProfile/Pages/OrganizerPage'
import StudentPage from 'screens/Profile/UpdateProfile/Pages/StudentPage'
import CuratorPage from 'screens/Profile/UpdateProfile/Pages/CuratorPage'
import LeaderPage from 'screens/Profile/UpdateProfile/Pages/LeaderPage'

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
    { label: 'Стек технологий', value: data.stack.join(", ") },
  ],
})

const Profile = () => {


  const { data, isSuccess } = useQuery({
    queryKey: ['profile'],
    queryFn: getUserInfo,
  })

  return (
    <div className={styles.container}>
      <div className={styles.title}>Личный кабинет пользователя</div>
      {isSuccess && data && (() => {
        const roleComponents = {
          STUDENT: <StudentPage user={data} />,
          ORGANIZER: <OrganizerPage
            cells={generateTableCells(data).contacts}
            user={data}
          />,
          CURATOR: <CuratorPage user={data} />,
          LEADER: <LeaderPage user={data} />


        }
        return roleComponents[data.userRole as keyof typeof roleComponents]
      })()}
    </div>
  )
}

export default Profile