import FormField from 'screens/Profile/UpdateProfile/components/Tabs/Components/FormField'
import styles from './myProfile.module.css'
import FormFieldDropdown from 'screens/Profile/UpdateProfile/components/Tabs/Components/FormFieldDropdown'
import useProfileFormCtrl from 'screens/Profile/UpdateProfile/components/Tabs/MyProfile/hooks/useProfileFormCtrl.tsx'
import Button from 'shared/Buttons'
import FormFieldMultiDropdown from 'screens/Profile/UpdateProfile/components/Tabs/Components/FormFieldMultiDropdown'
import { useState } from 'react'
import Modal from 'shared/Modal'
import CreateItemForm from 'screens/Profile/UpdateProfile/components/Tabs/MyProfile/Components/CreateItemForm'
import CreateItemContext from 'screens/Profile/UpdateProfile/components/Tabs/MyProfile/myProfileContext.tsx'
import useCreateItemCtrl from 'screens/Profile/UpdateProfile/components/Tabs/MyProfile/hooks/useCreateItemCtrl.tsx'
import ValidationForm from 'shared/Validation'

const MyProfile = () => {
  const profileFormCtrl = useProfileFormCtrl()

  const isOrganizer = profileFormCtrl.profileValues.auth?.role === 'ORGANIZER'
  const [actionType, setActionType] = useState<'stack' | 'specialization'>('stack')
  const formCtrl = useCreateItemCtrl({ actionType })

  return (
    <div className={styles.container}>
      {/* Основная форма профиля */}
      <ValidationForm
        errors={profileFormCtrl.validationCtrl.errors}
        onSubmit={profileFormCtrl.validationCtrl.handleSubmit}
      >
        <div
          className={styles.form}
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
              value={profileFormCtrl.profileValues.user.surname}
              onChange={profileFormCtrl.handleChange}
            >
              Фамилия
            </FormField>

            <FormField
              name="name"
              placeholder="Имя"
              value={profileFormCtrl.profileValues.user.name}
              onChange={profileFormCtrl.handleChange}
            >
              Имя
            </FormField>

            <FormField
              name="patronymic"
              placeholder="Отчество"
              value={profileFormCtrl.profileValues.user.patronymic}
              onChange={profileFormCtrl.handleChange}
            >
              Отчество
            </FormField>

            <FormField
              name="university"
              placeholder="Учебное заведение"
              value={profileFormCtrl.profileValues.user.university}
              onChange={profileFormCtrl.handleChange}
            >
              Учебное заведение
            </FormField>

            {!isOrganizer && (
              <>
                <FormField
                  name="speciality"
                  placeholder="Специальность"
                  value={profileFormCtrl.profileValues.user.speciality}
                  onChange={profileFormCtrl.handleChange}
                >
                  Специальность
                </FormField>

                <FormFieldDropdown
                  selectedOption={profileFormCtrl.profileValues.user.course ? `${profileFormCtrl.profileValues.user.course} курс` : ''}
                  onSelect={profileFormCtrl.handleChange}
                  name="course"
                  options={profileFormCtrl.options.course}
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
                  selectedOption={profileFormCtrl.profileValues.user.specialization}
                  onSelect={profileFormCtrl.handleChange}
                  name="specialization"
                  options={profileFormCtrl.options.specializations}
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
                  options={profileFormCtrl.options.stacks}
                  selectedOptions={profileFormCtrl.profileValues.user.stack}
                  onSelect={profileFormCtrl.handleChange}
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
        </div>
      </ValidationForm>
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