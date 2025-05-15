import { useState } from 'react'
import TextInput, { ITextInputProps } from '../TextInput'

const PasswordInput = (props: ITextInputProps) => {
  const [passwordType, setPasswordType] = useState('password')

  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text')
      return
    }
    setPasswordType('password')
  }

  return (
    <TextInput
      {...props}
      type={passwordType}
    />
  )
}

export default PasswordInput
