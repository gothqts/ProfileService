import FormField from 'screens/Profile/UpdateProfile/Tabs/Components/FormField'
import styles from './myProfile.module.css'
import FormFieldDropdown from 'screens/Profile/UpdateProfile/Tabs/Components/FormFieldDropdown'
import useProfileFormCtrl from 'screens/Profile/UpdateProfile/Tabs/MyProfile/hooks/useProfileFormCtrl.tsx'
import Button from 'shared/Buttons'
import FormFieldMultiDropdown from 'screens/Profile/UpdateProfile/Tabs/Components/FormFieldMultiDropdown'
import { useState } from 'react'
import Modal from 'shared/Modal'
import CreateItemForm from 'screens/Profile/UpdateProfile/Tabs/MyProfile/Components/CreateItemForm'
import CreateItemContext from 'screens/Profile/UpdateProfile/Tabs/MyProfile/myProfileContext.tsx'
import useCreateItemCtrl from 'screens/Profile/UpdateProfile/Tabs/MyProfile/hooks/useCreateItemCtrl.tsx'

const MyProfile = () => {
  const {
    handleChange,
    profileValues,
    options,
    handleSubmitCredentials,
  } = useProfileFormCtrl()

  const isOrganizer = profileValues.auth?.role === 'ORGANIZER'
  const [actionType, setActionType] = useState<'stack' | 'specialization'>('stack')
  const formCtrl = useCreateItemCtrl({ actionType })

  return (
    <div className={styles.container}>
      {/* Основная форма профиля */}
      <form
        className={styles.form}
        onSubmit={handleSubmitCredentials}
      >
        <h2
          className={styles.header}
          style={{ marginBottom: '43px' }}
        >
          Личная информация
        </h2>

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
            placeholder="Отчество"
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

          {!isOrganizer && (
            <>
              <FormField
                name="speciality"
                placeholder="Специальность"
                value={profileValues.user.speciality}
                onChange={handleChange}
              >
                Специальность
              </FormField>

              <FormFieldDropdown
                selectedOption={profileValues.user.course ? `${profileValues.user.course} курс` : ''}
                onSelect={handleChange}
                name="course"
                options={options.course}
                placeholder="Курс"
              >
                Курс
              </FormFieldDropdown>
            </>
          )}
        </div>

        {!isOrganizer && (
          <>
            <h2
              className={styles.header}
              style={{ marginBottom: '43px' }}
            >
              Компетенции
            </h2>
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
                btnPlaceholder="Добавить свою специализацию..."
                setModalState={() => {
                  formCtrl.setModalState(true)
                  setActionType('specialization')
                }}
              >
                Специализация
              </FormFieldDropdown>

              <FormFieldMultiDropdown
                options={options.stacks}
                selectedOptions={profileValues.user.stack}
                onSelect={handleChange}
                name="stack"
                placeholder="Выберите стек"
                btnPlaceholder="Добавить свой стек..."
                setModalState={() => {
                  formCtrl.setModalState(true)
                  setActionType('stack')
                }}
              >
                Стек технологий
              </FormFieldMultiDropdown>
            </div>
          </>
        )}

        <Button
          type="submit"
          className={styles.btn}
        >
          Сохранить изменения
        </Button>
      </form>

      {/* Модальное окно для добавления стека/специализации */}
      {formCtrl.modalState && (
        <Modal
          title={actionType === 'stack' ? 'Добавить свой стек' : 'Добавить специализацию'}
          id="addItemModal"
          onClose={() => formCtrl.setModalState(false)}
        >
          <CreateItemContext.Provider
            value={{
              values: formCtrl.formState,
              onChange: formCtrl.handleChange,
            }}
          >
            <form
              onSubmit={formCtrl.handleSubmit}
              className={styles.modalForm}
            >
              <CreateItemForm actionType={actionType} />
              <Button
                type="submit"
                className={styles.btn}
              >
                Добавить
              </Button>
            </form>
          </CreateItemContext.Provider>
        </Modal>
      )}
    </div>
  )
}

export default MyProfile