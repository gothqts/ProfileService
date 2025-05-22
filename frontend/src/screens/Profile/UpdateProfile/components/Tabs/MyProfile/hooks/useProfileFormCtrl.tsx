import { authAtom } from 'screens/Auth/auth.atom.ts'
import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'
import profileApi from 'screens/Profile/profile.api.ts'
import { ICourse } from 'screens/Profile/profile.types.ts'
import validation from 'shared/Validation/validation.ts'
import useValidationCtrl from 'shared/Validation/useValidationCtrl.ts'
import useHttpLoaderWithServerError from 'shared/hooks/httpLoader/useHttpLoaderWithServerError.ts'

interface IOption {
  name: string
  value: string
}

interface IOptions {
  course: ICourse[]
  stacks: IOption[]
  specializations: IOption[]
}


const useProfileFormCtrl = () => {
  const { wait, loading, serverError } = useHttpLoaderWithServerError()
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
  const { id, userRole, token, ...userData } = profileValues.user

  const transformToOptions = (items: { name: string }[]): IOption[] => {
    return items.map(item => ({
      name: item.name,
      value: item.name,
    }))
  }

  useEffect(() => {
    wait(profileApi.getStacks(), (resp) => {
      if (resp.status === 'success') {
        setOptions(prev => ({
          ...prev,
          stacks: transformToOptions(resp.body),
        }))
      }
    })
    wait(profileApi.getSpecializations(), (resp) => {
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
  const handleSubmitCredentials = () => {
    wait(profileApi.putUserInfo(userData), (resp) => {
      if (resp.status === 'success') {
        alert('Данные успешно обновлены')
      }
    })

  }

  const validateProfile = {
    email: validation.emailValidate,
    name: validation.firstNameValidate,
    surname: validation.lastNameValidate,
    patronymic: validation.patronymicValidate,
  }


  const validationCtrl = useValidationCtrl(handleSubmitCredentials, userData, validateProfile)

  return {
    handleChange,
    profileValues,
    options,
    handleSubmitCredentials,
    serverError,
    loading,
    validationCtrl,
  }
}

export default useProfileFormCtrl