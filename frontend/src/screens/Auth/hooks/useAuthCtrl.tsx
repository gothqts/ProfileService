import { useState } from 'react'
import { generateEmptyAuthState } from 'screens/Auth/auth.context.ts'

interface IProps {
  actionType: 'register' | 'login'
  setAuthType: () => void
}

const useAuthCtrl = (props: IProps) => {
  const [authValues, setAuthValues] = useState(generateEmptyAuthState())

  const handleChange = (value: string, name: string) => {
    setAuthValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmitCredentials = () => {

  }
  return {
    handleSubmitCredentials,
    handleChange,
    authValues,
  }
}
export default useAuthCtrl