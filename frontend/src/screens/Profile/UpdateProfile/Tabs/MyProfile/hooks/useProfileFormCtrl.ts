import { FormEvent } from 'react'
import { authAtom } from 'screens/Auth/auth.atom.ts'
import { useAtom } from 'jotai'


const useProfileFormCtrl = () => {
  const [profileValues, setProfileValues] = useAtom(authAtom)

  const handleChange = (value: string, name: string) => {
    setProfileValues(prev => ({ ...prev, [name]: value }))
  }


  const handleClick = (value: string, name: string) => {
    setProfileValues(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmitCredentials = (e: FormEvent) => {

  }

  return {
    handleSubmitCredentials,
    handleChange,
    handleClick,
    profileValues,
  }
}

export default useProfileFormCtrl