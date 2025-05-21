import { useState } from 'react'
import { IPasswords } from 'screens/Profile/profile.types.ts'
import profileApi from 'screens/Profile/profile.api.ts'
import validation from 'shared/Validation/validation.ts'
import useValidationCtrl from 'shared/Validation/useValidationCtrl.ts'
import useHttpLoaderWithServerError from 'shared/hooks/httpLoader/useHttpLoaderWithServerError.ts'

const usePasswordCtrl = () => {
  const { wait, loading, serverError } = useHttpLoaderWithServerError()
  const generateEmptyPasswords = (): IPasswords => {
    return {
      oldPassword: '',
      newPassword: '',
    }
  }

  const [passwords, setPasswords] = useState(generateEmptyPasswords())

  const handleChange = (value: string, name: string) => {
    setPasswords((prev) => ({ ...prev, [name]: value }))
  }
  const handleSubmit = () => {
    wait(profileApi.patchPassword(passwords), (resp) => {
        if (resp.status === 'success') {
          setPasswords(generateEmptyPasswords())
          alert('Пароль обновлен')
        }
      },
    )
  }
  const validatePasswords = {
    oldPassword: validation.passwordValidate,
    newPassword: validation.passwordValidate,
  }
  const validationCtrl = useValidationCtrl(handleSubmit, passwords, validatePasswords)
  return {
    passwords,
    handleChange,
    handleSubmit,
    validationCtrl,
    serverError,
    loading,
  }
}
export default usePasswordCtrl