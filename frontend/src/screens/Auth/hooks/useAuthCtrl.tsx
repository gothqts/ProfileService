import { FormEvent, useState } from 'react'
import { generateEmptyAuthState } from 'screens/Auth/auth.context.ts'
import { authApi } from 'screens/Auth/auth.api.ts'
import { useSetAtom } from 'jotai'
import { authAtom } from 'screens/Auth/auth.atom.ts'

interface IProps {
  actionType: 'register' | 'login'
  setAuthType: () => void
}

const useAuthCtrl = (props: IProps) => {
  const [authValues, setAuthValues] = useState(generateEmptyAuthState())
  const setAuthState = useSetAtom(authAtom)


  const handleChange = (value: string, name: string) => {
    setAuthValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmitCredentials = (e: FormEvent) => {
    e.preventDefault()
    if (props.actionType === 'login') {
      const data = {
        email: authValues.email,
        password: authValues.password,
      }
      authApi.login(data).then((resp) => {
        if (resp.status === 'success') {
          setAuthState((prev) => ({
            ...prev,
            auth: {
              ...prev.auth,
              accessToken: resp.body,
            },
          }))
        } else if (resp.status === 'error') {

        }
      })

    } else if (props.actionType === 'register') {
      authApi.register(authValues).then((resp) => {
        if (resp.status === 'success') {
          //
        }
      })
    }
  }
  return {
    handleSubmitCredentials,
    handleChange,
    authValues,
  }
}
export default useAuthCtrl