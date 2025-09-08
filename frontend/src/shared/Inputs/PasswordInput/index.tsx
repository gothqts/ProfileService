import { useState } from 'react'
import TextInput, { ITextInputProps } from '../TextInput'

const PasswordInput = (props: ITextInputProps) => {
  const [passwordType]= useState('password')

  return (
    <TextInput
      {...props}
      type={passwordType}
    />
  )
}

export default PasswordInput
