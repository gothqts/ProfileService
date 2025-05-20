import { useState } from 'react'
import { generateEmptyAuthState } from 'screens/Auth/auth.context.ts'
import { authApi } from 'screens/Auth/auth.api.ts'
import { useSetAtom } from 'jotai'
import { authAtom } from 'screens/Auth/auth.atom.ts'
import { decode } from 'utils/decodeToken.ts'
import useHttpLoaderWithServerError from 'shared/hooks/httpLoader/useHttpLoaderWithServerError.ts'
import { AuthTypeEnum } from 'enums/authEnum.ts'
import validation from 'shared/Validation/validation'
import useValidationCtrl from 'shared/Validation/useValidationCtrl.ts'

interface IProps {
  actionType: 'register' | 'login'
  setAuthType: () => void
}

const useAuthCtrl = (props: IProps) => {
  const { wait, loading, serverError } = useHttpLoaderWithServerError()
  const [authValues, setAuthValues] = useState(generateEmptyAuthState())
  const setAuthState = useSetAtom(authAtom)

  const handleChange = (value: string, name: string) => {
    setAuthValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmitCredentials = () => {
    if (props.actionType === 'login') {
      const data = {
        email: authValues.email,
        password: authValues.password,
      }
      wait(authApi.login(data), (resp) => {
        if (resp.status === 'success') {
          const decodedJWT = decode(resp.body.jwt)
          if (decodedJWT) {
            setAuthState((prev) => ({
              ...prev,
              auth: {
                accessToken: resp.body.jwt,
                expires: decodedJWT.exp,
                role: decodedJWT.role,
              },
            }))
            localStorage.setItem('token', resp.body.jwt)
          }
        }
      })
    } else {
      wait(authApi.register(authValues), (resp) => {
        if (resp.status === 'success') {
          const decodedJWT = decode(resp.body.jwt)
          if (decodedJWT) {
            setAuthState((prev) => ({
              ...prev,
              auth: {
                ...prev.auth,
                accessToken: resp.body.jwt,
                expires: decodedJWT.exp,
                role: decodedJWT.role,
              },
            }))
          }
          localStorage.setItem('token', resp.body.jwt)
        }
      })
    }
  }
  const validateAuthType =
    props.actionType === AuthTypeEnum.register
      ? {
        firstName: validation.firstNameValidate,
        lastName: validation.lastNameValidate,
        patronymic: validation.patronymicValidate,
        email: validation.emailValidate,
        phone: validation.phoneValidate,
        password: validation.passwordValidate,
        repeatPassword: (value: string) =>
          validation.repeatPasswordValidate(value, authValues.password),
      }
      : {
        email: validation.emailValidate,
        password: validation.passwordValidate,
      }

  const validationCtrl = useValidationCtrl(
    handleSubmitCredentials,
    authValues,
    validateAuthType,
  )
  return {
    handleSubmitCredentials,
    handleChange,
    authValues,
    loading,
    serverError,
    validationCtrl,
  }
}

export default useAuthCtrl