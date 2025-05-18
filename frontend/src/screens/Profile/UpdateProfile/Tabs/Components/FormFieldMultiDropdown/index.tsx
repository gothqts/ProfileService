import styles from 'screens/Profile/UpdateProfile/Tabs/Components/FormField/formField.module.css'
import { CSSProperties, PropsWithChildren } from 'react'
import { IOption } from 'types/global.ts'
import MultiDropdown from 'shared/Inputs/MultiDropdown'


interface IFormFieldMultiDropdownProps<T extends string | number> extends PropsWithChildren {
  options: IOption<T>[],
  selectedOptions: IOption<T>['value'][],
  onSelect: (options: T[], name: string) => void,
  name: string,
  style?: CSSProperties,
  inputStyle?: CSSProperties,
  className?: string,
  placeholder?: string
}

const FormFieldDropdown = <T extends string | number>(props: IFormFieldMultiDropdownProps<T>) => {
  return (
    <div className={styles.formField} style={props.style}>
      <label className={styles.label}>{props.children}</label>
      <MultiDropdown
        placeholder={props.placeholder}
        className="formField_input"
        onSelect={props.onSelect}
        name={props.name}
        selectedOptions={props.selectedOptions}
        options={props.options}
      />
    </div>
  )
}

export default FormFieldDropdown