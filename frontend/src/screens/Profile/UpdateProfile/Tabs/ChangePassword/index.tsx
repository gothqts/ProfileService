import styles from 'screens/Profile/UpdateProfile/Tabs/MyProfile/myProfile.module.css'
import FormField from 'screens/Profile/UpdateProfile/Tabs/Components/FormField'
import Button from 'shared/Buttons'

const ChangePassword = () => {
  return (
    <div>
      <form className={styles.form}>
        <h2
          className={styles.header}
          style={{ marginBottom: '43px' }}
        >Смена пароля</h2>
        <div
          className={styles.form_body}
          style={{ marginBottom: '70px' }}
        >
          <FormField placeholder='Введите старый пароль' type='password'>
            Старый пароль
          </FormField>
          <FormField placeholder='Введите новый пароль'  type='password'>
            Новый пароль
          </FormField>
        </div>
        <Button type="submit" className={styles.btn}>
          Сохранить изменения
        </Button>
      </form>
    </div>
  )
}

export default ChangePassword