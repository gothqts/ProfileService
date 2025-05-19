import styles from 'screens/Profile/UpdateProfile/Tabs/MyProfile/myProfile.module.css'
import FormField from 'screens/Profile/UpdateProfile/Tabs/Components/FormField'
import useProfileFormCtrl from 'screens/Profile/UpdateProfile/Tabs/MyProfile/hooks/useProfileFormCtrl.tsx'
import Button from 'shared/Buttons'

const Contacts = () => {
  const {
    handleChange,
    profileValues,
    handleSubmitCredentials,
  } = useProfileFormCtrl()
  return (
    <div>
      <form onSubmit={handleSubmitCredentials} className={styles.form}>
        <h2
          className={styles.header}
          style={{ marginBottom: '43px' }}
        >Контактная информация</h2>
        <div
          className={styles.form_body}
          style={{ marginBottom: '70px' }}
        >
          <FormField
            name="telegram"
            placeholder="Введите Telegram"
            value={profileValues.user.telegram}
            onChange={handleChange}
          >
            Telegram
          </FormField>
          <FormField
            name="email"
            placeholder="Введите email"
            value={profileValues.user.email}
            onChange={handleChange}
          >
            Почта
          </FormField>
          <FormField
            name="vk"
            placeholder="Введите VK ID"
            value={profileValues.user.vk}
            onChange={handleChange}
          >
            Вконтакте
          </FormField>
        </div>
        <Button type="submit" className={styles.btn}>
          Сохранить изменения
        </Button>
      </form>
    </div>
  )
}

export default Contacts