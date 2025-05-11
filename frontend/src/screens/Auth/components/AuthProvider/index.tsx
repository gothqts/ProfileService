import { PropsWithChildren } from 'react'
import { useAtomValue } from 'jotai'
import { authAtom } from 'screens/Auth/auth.atom.ts'
import Auth from 'screens/Auth'

const AuthProvider = (props: PropsWithChildren) => {
  const authState = useAtomValue(authAtom)
  if (!localStorage.getItem('token') && !authState.auth.accessToken) {
    return <Auth />
  }
  return (
    <>
      {props.children}
    </>
  )
}

export default AuthProvider