import profileApi from 'screens/Profile/profile.api.ts'
import { useAtom } from 'jotai/index'
import { authAtom, generateEmptyState } from 'screens/Auth/auth.atom.ts'
import { IUser } from 'screens/Auth/auth.types.ts'
import { useEffect } from 'react'


const useUpdateProfileCtrl = () => {
  const [userData, setUserData] = useAtom(authAtom)

  useEffect(() => {
    if (!userData.user.userRole) {
      profileApi.getUserInfo().then((resp) => {
        if (resp.status === 'success') {
          const userData = Object.fromEntries(
            Object.entries(resp.body).map(([key, value]) => [
              key,
              value === null ? '' : value,
            ]),
          ) as IUser
          setUserData(prev => ({
            ...prev,
            user: userData,
          }))
        }
      })
    }
  }, [])

  const handleSubmitDelete = (e: React.FormEvent) => {
    e.preventDefault()
    profileApi.deleteAccount().then(response => {
      if (response.status === 'success') {
        localStorage.removeItem('token')
        setUserData(generateEmptyState())
        location.replace('/')
      }
    })
  }
  return {
    handleSubmitDelete,
    userData,

  }
}
export default useUpdateProfileCtrl