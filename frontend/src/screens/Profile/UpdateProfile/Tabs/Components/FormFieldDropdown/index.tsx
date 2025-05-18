import styles from 'screens/Profile/UpdateProfile/Tabs/Components/FormField/formField.module.css'
import { PropsWithChildren } from 'react'
import { IOption } from 'types/global.ts'
import Dropdown from 'shared/Inputs/Dropdown'

interface IFormFieldDropdownProps<T extends string | number> extends PropsWithChildren {
  selectedOption: IOption<T>['value'],
  onSelect: (option: T, name: string) => void,
  name: string,
  options: IOption<T>[],
  style?: React.CSSProperties,
  placeholder?: string
}

const FormFieldDropdown = <T extends string | number>(props: IFormFieldDropdownProps<T>) => {
  return (
    <div className={styles.formField} style={props.style}>
      <label className={styles.label}>{props.children}</label>
      <Dropdown
        placeholder={props.placeholder}
        className="formField_input"
        onSelect={props.onSelect}
        name={props.name}
        selectedOption={props.selectedOption}
        options={props.options}
      />
    </div>
  )
}

export default FormFieldDropdown