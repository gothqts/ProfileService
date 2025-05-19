import styles from './updatePage.module.css'
import MyProfile from 'screens/Profile/UpdateProfile/Tabs/MyProfile'
import { useAtom } from 'jotai/index'
import { authAtom } from 'screens/Auth/auth.atom.ts'
import { useEffect, useState } from 'react'
import profileApi from 'screens/Profile/profile.api.ts'
import cn from 'utils/cn.ts'
import Contacts from 'screens/Profile/UpdateProfile/Tabs/Contacts'
import ChangePassword from 'screens/Profile/UpdateProfile/Tabs/ChangePassword'
import Button from 'shared/Buttons'
import { IUser } from 'screens/Auth/auth.types.ts'

const UpdateProfile = () => {
  const [userData, setUserData] = useAtom(authAtom)
  const [tab, setTab] = useState('myProfile')

  useEffect(() => {
    if (!userData.user.userRole) {
      profileApi.getUserInfo().then((resp) => {
        if (resp.status === 'success') {
          const userData = Object.fromEntries(
            Object.entries(resp.body).map(([key, value]) => [
              key,
              value === null ? '' : value,
            ]),
          ) as IUser
          setUserData(prev => ({
            ...prev,
            user: userData,
          }))
        }
      })
    }
  }, [])

  const renderContent = () => {
    if (!userData.user.name) return null

    switch (tab) {
      case 'myProfile':
        return <MyProfile />
      case 'contacts':
        return <Contacts />
      case 'password':
        return <ChangePassword />
      default:
        return null
    }
  }

  return (
    <div className={styles.container}>
      <div
        className={styles.tabs}
        style={{ marginTop: '70px' }}
      >
        <div
          className={cn(styles.link, tab === 'myProfile' && styles.active)}
          onClick={() => setTab('myProfile')}
        >
          Мой профиль
        </div>
        <div
          className={cn(styles.link, tab === 'contacts' && styles.active)}
          onClick={() => setTab('contacts')}
        >
          Контакты
        </div>
        <div
          className={cn(styles.link, tab === 'password' && styles.active)}
          onClick={() => setTab('password')}
        >
          Сменить пароль
        </div>
        <Button
          type="button"
          className={styles.btn}
        >Удалить аккаунт</Button>
      </div>
      <div className={styles.content}>
        {renderContent()}
      </div>
    </div>
  )
}

export default UpdateProfile