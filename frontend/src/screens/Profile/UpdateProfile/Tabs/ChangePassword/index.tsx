import styles from 'screens/Profile/UpdateProfile/Tabs/MyProfile/myProfile.module.css'
import FormField from 'screens/Profile/UpdateProfile/Tabs/Components/FormField'
import Button from 'shared/Buttons'
import usePasswordCtrl from 'screens/Profile/UpdateProfile/Tabs/ChangePassword/hooks/usePasswordCtrl.ts'
import ValidationForm from 'shared/Validation'

const ChangePassword = () => {
  const passwordCtrl = usePasswordCtrl()
  return (
    <div>
      <ValidationForm
        errors={passwordCtrl.validationCtrl.errors}
        onSubmit={passwordCtrl.validationCtrl.handleSubmit}
      >
        <div className={styles.form}>
          <h2
            className={styles.header}
            style={{ marginBottom: '43px' }}
          >Смена пароля</h2>
          <div
            className={styles.form_body}
            style={{ marginBottom: '70px' }}
          >
            <FormField
              placeholder="Введите старый пароль"
              type="password"
              name="oldPassword"
              onChange={passwordCtrl.handleChange}
              value={passwordCtrl.passwords.oldPassword}
            >
              Старый пароль
            </FormField>
            <FormField
              placeholder="Введите новый пароль"
              type="password"
              name="newPassword"
              onChange={passwordCtrl.handleChange}
              value={passwordCtrl.passwords.newPassword}
            >
              Новый пароль
            </FormField>
          </div>
          <Button
            type="submit"
            className={styles.btn}
          >
            Сохранить изменения
          </Button>
          {passwordCtrl.serverError && (passwordCtrl.serverError)}
        </div>
      </ValidationForm>

    </div>
  )
}

export default ChangePassword