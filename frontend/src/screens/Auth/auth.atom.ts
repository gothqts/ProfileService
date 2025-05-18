import { atom } from 'jotai'
import { IAuthState } from 'screens/Auth/auth.types.ts'
import { decode } from 'utils/decodeToken.ts'

const generateEmptyState = () => ({
  auth: {
    accessToken: localStorage.getItem('token') || '',
    expires: Number(decode(localStorage.getItem('token'))?.exp),
    role: String((decode(localStorage.getItem('token'))?.role)),
  },
  user: {
    id: 0,
    name: '',
    patronymic: '',
    surname: '',
    university: '',
    speciality: '',
    course: 0,
    telegram: '',
    email: '',
    vk: '',
    specialization: '',
    stack: [],
    userRole: '',
    token: '',
  },
})
export const authAtom = atom<IAuthState>(generateEmptyState())
