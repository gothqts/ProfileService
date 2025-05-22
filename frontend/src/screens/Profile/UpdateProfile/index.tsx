import styles from './updatePage.module.css'
import MyProfile from 'screens/Profile/UpdateProfile/components/Tabs/MyProfile'
import { useState } from 'react'
import cn from 'utils/cn.ts'
import Contacts from 'screens/Profile/UpdateProfile/components/Tabs/Contacts'
import ChangePassword from 'screens/Profile/UpdateProfile/components/Tabs/ChangePassword'
import Button from 'shared/Buttons'
import DeleteAccForm from 'screens/Profile/UpdateProfile/components/DeleteAccForm'
import Modal from 'shared/Modal'
import useUpdateProfileCtrl from 'screens/Profile/UpdateProfile/hooks/useUpdateProfileCtrl.ts'

const UpdateProfile = () => {
  const [tab, setTab] = useState('myProfile')
  const [modal, setModal] = useState<boolean>(false)

  const { userData, handleSubmitDelete } = useUpdateProfileCtrl()
  const renderContent = () => {
    if (!userData.auth.accessToken) return null

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
          onClick={() => setModal(true)}
          type="button"
          className={styles.btn}
        >Удалить аккаунт</Button>

        {modal && (
          <Modal
            id="deleteAccModal"
            title="Вы уверены, что хотите удалить аккаунт?"
            onClose={() => setModal(false)}
          >
            <DeleteAccForm onSubmit={handleSubmitDelete} />
          </Modal>
        )}

      </div>
      <div className={styles.content}>
        {renderContent()}
      </div>
    </div>
  )
}

export default UpdateProfile