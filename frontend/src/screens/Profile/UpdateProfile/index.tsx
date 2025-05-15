import styles from './updatePage.module.css'
import MyProfile from 'screens/Profile/UpdateProfile/Tabs/MyProfile'
import { useQuery } from '@tanstack/react-query'
import { getUserInfo } from 'screens/Profile/profile.api.ts'
import { useAtom } from 'jotai/index'
import { authAtom } from 'screens/Auth/auth.atom.ts'
import { useEffect } from 'react'

const UpdateProfile = () => {
  const { data, isSuccess } = useQuery({
    queryKey: ['updateProfile'],
    queryFn: getUserInfo,
  })
  const [profileValues, setProfileValues] = useAtom(authAtom)
  useEffect(() => {
    if (isSuccess && data) {
      setProfileValues({ ...profileValues, user: data })
    }
  }, [data, isSuccess])
  return (
    <div className={styles.container}>
      <div
        className={styles.tabs}
        style={{ marginTop: '70px' }}
      >
        <div>Мой профиль</div>
        <div>Контакты</div>
        <div>Сменить пароль</div>
        <button>Удалить профиль</button>
      </div>
      {isSuccess ? (<div className={styles.content}>
        <MyProfile />
      </div>) : null}

      <div>

      </div>

    </div>
  )
}

export default UpdateProfile