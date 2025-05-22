import { PropsWithChildren } from 'react'
import TextInput from 'shared/Inputs/TextInput'
import styles from './formField.module.css'

interface IProps {
  placeholder: string,
  onChange: (value: string, name: string) => void
  name: string,
  value: string
  type?: string
}

const FormField = (props: PropsWithChildren<IProps>) => {
  return (
    <div className={styles.formField}>
      <label className={styles.label}>{props.children}</label>
      <TextInput
        type={props.type}
        className="formField_input"
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
      />
    </div>
  )
}

export default FormField