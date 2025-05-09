import { atom } from 'jotai'
import { IAuthState } from 'screens/Auth/auth.types.ts'
const generateEmptyState = () => ({
 auth: {
   accessToken: '',
   expires: 0
 },
  user: null
});
export const authAtom = atom<IAuthState>(generateEmptyState());
