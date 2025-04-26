import styles from './passwordInput.module.css'
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
      className={styles.input}
      type={passwordType}
    />
  )
}

export default PasswordInput
