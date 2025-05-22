import TextInput from 'shared/Inputs/TextInput'
import styles from './CreateItemForm.module.css'
import CreateItemContext from 'screens/Profile/UpdateProfile/components/Tabs/MyProfile/myProfileContext.tsx'
import { PropsWithChildren, useContext } from 'react'

interface ICreateItemFormProps {
  actionType: string,
}

const CreateItemForm = (props: PropsWithChildren<ICreateItemFormProps>) => {
  const context = useContext(CreateItemContext)
  return (
    <div
      className={styles.form}
    >
      <span className={styles.span}>Форма будет отправлена администратору на модерацию</span>
      {props.actionType === 'stack' ? (
        <TextInput
          className="formField_input"
          placeholder="Название стека"
          name="stack"
          onChange={context.onChange}
          value={context.values.stack}
        />
      ) : <TextInput
        value={context.values.specialization}
        className="formField_input"
        placeholder="Название специализации"
        name="specialization"
        onChange={context.onChange}
      />}
      {props.children}
    </div>
  )
}

export default CreateItemForm