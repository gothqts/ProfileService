import { PropsWithChildren, useEffect } from 'react'
import { authAtom } from 'screens/Auth/auth.atom.ts'
import Auth from 'screens/Auth'
import { useAtom } from 'jotai/index'
import { applyInterceptors } from 'services/http'

const AuthProvider = (props: PropsWithChildren) => {
  const [authState, setAuthState] = useAtom(authAtom)
  useEffect(() => {
    applyInterceptors(setAuthState)
  })
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