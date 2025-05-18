import styles from './updatePage.module.css'
import MyProfile from 'screens/Profile/UpdateProfile/Tabs/MyProfile'
import { useAtom } from 'jotai/index'
import { authAtom } from 'screens/Auth/auth.atom.ts'
import { useEffect } from 'react'
import profileApi from 'screens/Profile/profile.api.ts'

const UpdateProfile = () => {
  const [userData, setUserData] = useAtom(authAtom)
  useEffect(() => {
    if (!userData.user.userRole) {
      profileApi.getUserInfo().then((resp) => {
        if (resp.status === 'success') {
          setUserData((prev) => ({
            ...prev,
            user: resp.body,
          }))

        }
      })
    }
  }, [])
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
      <div className={styles.content}>
        {
          userData.user.name ? <MyProfile /> : null
        }
      </div>
    </div>
  )
}

export default UpdateProfile