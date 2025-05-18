import { authAtom } from 'screens/Auth/auth.atom.ts'
import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'
import profileApi from 'screens/Profile/profile.api.ts'
import { ICourse } from 'screens/Profile/profile.types.ts'
import { IAuthState } from 'screens/Auth/auth.types.ts'

interface IOption {
  name: string
  value: string
}

interface IOptions {
  course: ICourse[]
  stacks: IOption[]
  specializations: IOption[]
}

interface IProfileFormCtrl {
  handleChange: (value: string, name: string) => void
  profileValues: IAuthState
  options: IOptions,
  handleSubmitCredentials: (e: React.FormEvent) => void
}

const useProfileFormCtrl = (): IProfileFormCtrl => {
  const [options, setOptions] = useState<IOptions>({
    course: [
      { name: '1 курс', value: '1' },
      { name: '2 курс', value: '2' },
      { name: '3 курс', value: '3' },
      { name: '4 курс', value: '4' },
    ],
    stacks: [],
    specializations: [],
  })

  const [profileValues, setProfileValues] = useAtom(authAtom)


  const transformToOptions = (items: { name: string }[]): IOption[] => {
    return items.map(item => ({
      name: item.name,
      value: item.name,
    }))
  }

  useEffect(() => {
    profileApi.getStacks().then((resp) => {
      if (resp.status === 'success') {
        setOptions(prev => ({
          ...prev,
          stacks: transformToOptions(resp.body),
        }))
      }
    })


    profileApi.getSpecializations().then((resp) => {
      if (resp.status === 'success') {
        setOptions(prev => ({
          ...prev,
          specializations: transformToOptions(resp.body),
        }))
      }
    })
  }, [])

  const handleChange = (value: string, name: string) => {
    setProfileValues(prev => ({
      ...prev,
      user: {
        ...prev.user,
        [name]: value,
      },
    }))
  }
  const handleSubmitCredentials = (e: React.FormEvent) => {
    e.preventDefault()
    const { id, userRole, token, ...userData } = profileValues.user

    profileApi.putUserInfo(userData).then((resp) => {
      if (resp.status === 'success') {
        alert('Данные успешно обновлены')
      }
    })

  }

  return {
    handleChange,
    profileValues,
    options,
    handleSubmitCredentials,
  }
}

export default useProfileFormCtrl