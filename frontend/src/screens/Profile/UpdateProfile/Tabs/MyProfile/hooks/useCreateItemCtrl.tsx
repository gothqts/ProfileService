import { useState } from 'react'
import { generateEmptyFormState } from 'screens/Profile/UpdateProfile/Tabs/MyProfile/myProfileContext.tsx'
import profileApi from 'screens/Profile/profile.api.ts'

interface IProps {
  actionType: 'stack' | 'specialization'
}

const useCreateItemCtrl = ({ actionType }: IProps) => {
  const [modalState, setModalState] = useState<boolean>(false)
  const [formState, setFormState] = useState(generateEmptyFormState())

  const handleChange = (value: string, name: string) => {
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (actionType === 'stack') {
      profileApi.postStack({ stack: formState.stack }).then((resp) => {
        if (resp.status === 'success') {
          alert('Стек отправлен на рассмотрение')
          setFormState(generateEmptyFormState())
          setModalState(false)

        }
      })
    } else if (actionType === 'specialization') {
      profileApi.postSpecializations({ specialization: formState.specialization }).then((resp) => {
        if (resp.status === 'success') {
          alert('Специализация отправлена на рассмотрение')
          setFormState(generateEmptyFormState())
          setModalState(false)
        }
      })
    }
  }

  return {
    handleChange,
    formState,
    handleSubmit,
    modalState,
    setModalState,

  }
}

export default useCreateItemCtrl