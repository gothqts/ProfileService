import FormField from 'screens/Profile/UpdateProfile/Tabs/Components/FormField'
import styles from './myProfile.module.css'
import FormFieldDropdown from 'screens/Profile/UpdateProfile/Tabs/Components/FormFieldDropdown'
import useProfileFormCtrl from 'screens/Profile/UpdateProfile/Tabs/MyProfile/hooks/useProfileFormCtrl.tsx'
import Button from 'shared/Buttons'
import FormFieldMultiDropdown from 'screens/Profile/UpdateProfile/Tabs/Components/FormFieldMultiDropdown'

const MyProfile = () => {
  const {
    handleChange,
    profileValues,
    options,
    handleSubmitCredentials,
  } = useProfileFormCtrl()
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmitCredentials}>
        <h2
          className={styles.header}
          style={{ marginBottom: '43px' }}
        >Личная информация</h2>

        <div
          className={styles.form_body}
          style={{ marginBottom: '70px' }}
        >
          <FormField
            name="surname"
            placeholder="Фамилия"
            value={profileValues.user.surname}
            onChange={handleChange}
          >
            Фамилия
          </FormField>

          <FormField
            name="name"
            placeholder="Имя"
            value={profileValues.user.name}
            onChange={handleChange}
          >
            Имя
          </FormField>

          <FormField
            name="patronymic"
            placeholder="Отчетсво"
            value={profileValues.user.patronymic}
            onChange={handleChange}
          >
            Отчество
          </FormField>

          <FormField
            name="university"
            placeholder="Учебное заведение"
            value={profileValues.user.university}
            onChange={handleChange}
          >
            Учебное заведение
          </FormField>

          <FormField
            name="speciality"
            placeholder="Специальность"
            value={profileValues.user.speciality}
            onChange={handleChange}
          >
            Специальность
          </FormField>

          <FormFieldDropdown
            selectedOption={`${profileValues.user.course} курс`}
            onSelect={handleChange}
            name="course"
            options={options.course}
          >
            Курс
          </FormFieldDropdown>

        </div>
        <h2
          className={styles.header}
          style={{ marginBottom: '43px' }}
        >Компетенции</h2>
        <div
          className={styles.form_body}
          style={{ marginBottom: '70px' }}
        >
          <FormFieldDropdown
            selectedOption={profileValues.user.specialization}
            onSelect={handleChange}
            name="specialization"
            options={options.specializations}
            placeholder="Выберите специализацию"
          >
            Специализация
          </FormFieldDropdown>

          <FormFieldMultiDropdown
            options={options.stacks}
            selectedOptions={profileValues.user.stack}
            onSelect={handleChange}
            name="stack"
            placeholder="Выберите стек"
          >
            Стек технологий
          </FormFieldMultiDropdown>
        </div>
        <Button
          type="submit"
          className={styles.btn}
        >
          Сохранить изменения
        </Button>
      </form>

    </div>
  )
}

export default MyProfile