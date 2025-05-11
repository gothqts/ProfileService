import { atom } from 'jotai'
import { IAuthState } from 'screens/Auth/auth.types.ts'
import { decode } from 'utils/decodeToken.ts'
const generateEmptyState = () => ({
 auth: {
   accessToken: localStorage.getItem('token') || '',
   expires: Number(decode(localStorage.getItem('token'))?.exp),
   role: '',
 },
  user: null
});
export const authAtom = atom<IAuthState>(generateEmptyState());
