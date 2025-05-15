import FormField from 'screens/Profile/UpdateProfile/Tabs/FormField'
import styles from './myProfile.module.css'
import Dropdown from 'shared/Inputs/Dropdown'
import useProfileFormCtrl from 'screens/Profile/UpdateProfile/Tabs/MyProfile/hooks/useProfileFormCtrl.ts'
import { authAtom } from 'screens/Auth/auth.atom'
import { useAtom } from 'jotai/index'
import { ChangeEvent } from 'react'

const MyProfile = () => {

  const [profileValues, setProfileValues] = useAtom(authAtom)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProfileValues({ ...profileValues, [e.target.name]: e.target.value })
  }

  return (
    <div style={{ width: '100%' }}>
      <form className={styles.form}>
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
            value={profileValues.user?.surname}
            onChange={handleChange}
          >
            Фамилия
          </FormField>
          <FormField
            name="name"
            placeholder="Имя"
            value={profileValues.user?.name}
            onChange={handleChange}
          >
            Имя
          </FormField>
          <FormField
            name="patronymic"
            placeholder="Отчетсво"
            value={profileValues.user?.patronymic}
            onChange={handleChange}
          >
            Отчество
          </FormField>
          <FormField
            name="Учебное заведение"
            placeholder="Учебное заведение"
            value={profileValues.user?.university}
            onChange={handleChange}
          >
            Учебное заведение
          </FormField>
          <FormField
            name="speciality"
            placeholder="Специальность"
            value={profileValues.user?.speciality}
            onChange={handleChange}
          >
            Специальность
          </FormField>
          <Dropdown
            name="course"
            options={[{
              name: '1 курс',
              value: '1 курс',
            },
              {
                name: '2 курс',
                value: '2 курс',
              },
              {
                name: '3 курс',
                value: '3 курс',
              },
              {
                name: '4 курс',
                value: '4 курс',
              },

            ]}
          />
        </div>
        <h2
          className={styles.header}
          style={{ marginBottom: '43px' }}
        >Компетенции</h2>
        <div className={styles.form_body}>
          <FormField
            name="specialization"
            placeholder="Специализация"
            value={profileValues.user?.specialization}
            onChange={handleChange}
          >
            Специализация
          </FormField>
          {/*<FormField name='Стек технологий' placeholder='Стек технологий' value={profileValues.user?.stack} onChange={handleChange}>*/}
          {/*  Стек технологий*/}
          {/*</FormField>*/}
        </div>
        <button type="submit">
          Сохранить изменения
        </button>
      </form>

    </div>
  )
}

export default MyProfile