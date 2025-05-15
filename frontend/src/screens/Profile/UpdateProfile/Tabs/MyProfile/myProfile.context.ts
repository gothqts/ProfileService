import { createContext } from 'react'
import { IUpdateProfileValues } from 'screens/Profile/profile.types.ts'

interface IAuthContext {
  values: IUpdateProfileValues
  onChange: (value: string, name: string) => void,
  onClick: (value: string, name: string) => void
}

export const generateProfileState = (): IUpdateProfileValues => ({
  surname: '',
  name: '',
  patronymic: '',
  university: '',
  speciality: '',
  course: 0,
  specialization: '',
  stack: [],
})

const UpdateProfileContext = createContext<IAuthContext>({
  values: generateProfileState(),
  onChange: () => {
  },
  onClick: () => {
  },
})

export default UpdateProfileContext
