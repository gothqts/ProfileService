import styles from 'screens/Profile/UpdateProfile/components/Tabs/MyProfile/myProfile.module.css'
import FormField from 'screens/Profile/UpdateProfile/components/Tabs/Components/FormField'
import useProfileFormCtrl from 'screens/Profile/UpdateProfile/components/Tabs/MyProfile/hooks/useProfileFormCtrl.tsx'
import Button from 'shared/Buttons'
import ValidationForm from 'shared/Validation'

const Contacts = () => {
  const profileCtrl = useProfileFormCtrl()
  return (
    <div>
      <ValidationForm
        errors={profileCtrl.validationCtrl.errors}
        onSubmit={profileCtrl.validationCtrl.handleSubmit}
      >
        <div className={styles.form}>
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
              value={profileCtrl.profileValues.user.telegram}
              onChange={profileCtrl.handleChange}
            >
              Telegram
            </FormField>
            <FormField
              name="email"
              placeholder="Введите email"
              value={profileCtrl.profileValues.user.email}
              onChange={profileCtrl.handleChange}
            >
              Почта
            </FormField>
            <FormField
              name="vk"
              placeholder="Введите VK ID"
              value={profileCtrl.profileValues.user.vk}
              onChange={profileCtrl.handleChange}
            >
              Вконтакте
            </FormField>
          </div>
          <Button
            type="submit"
            className={styles.btn}
          >
            Сохранить изменения
          </Button>
        </div>
      </ValidationForm>

    </div>
  )
}

export default Contacts