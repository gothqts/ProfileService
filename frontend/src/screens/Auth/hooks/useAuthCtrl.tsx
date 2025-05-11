import { FormEvent, useState } from 'react'
import { generateEmptyAuthState } from 'screens/Auth/auth.context.ts'
import { authApi } from 'screens/Auth/auth.api.ts'
import { useAtom } from 'jotai'
import { authAtom } from 'screens/Auth/auth.atom.ts'
import { decode } from 'utils/decodeToken.ts'

interface IProps {
  actionType: 'register' | 'login'
  setAuthType: () => void
}

const useAuthCtrl = (props: IProps) => {
  const [authValues, setAuthValues] = useState(generateEmptyAuthState())
  const [authState, setAuthState] = useAtom(authAtom)


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
        } else if (resp.status === 'error') {
          console.log(resp.message)
        }
      })

    } else if (props.actionType === 'register') {
      authApi.register(authValues).then((resp) => {
        if (resp.status === 'success') {
          setAuthState((prev) => ({
            ...prev,
            auth: {
              ...prev.auth,
              accessToken: resp.body.jwt,
            },
          }))
        } else if (resp.status === 'error') {
          console.log(resp.message)
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