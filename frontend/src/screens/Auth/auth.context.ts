import { IRegisterValues } from 'screens/Auth/auth.types.ts'
import { createContext } from 'react'

interface IAuthContext {
  values: IRegisterValues
  onChange: (value: string, name: string) => void
}

export const generateEmptyAuthState = (): IRegisterValues => ({
  name: '',
  lastname: '',
  phone: '',
  email: '',
  password: '',
  checkPassword: '',
})

const AuthContext = createContext<IAuthContext>({
  values: generateEmptyAuthState(),
  onChange: () => {
  },
})

export default AuthContext
