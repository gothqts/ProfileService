import TextInput from 'shared/Inputs/TextInput'
import PasswordInput from 'shared/Inputs/PasswordInput'
import { PropsWithChildren, useContext } from 'react'
import AuthContext from 'screens/Auth/auth.context.ts'
import cn from 'utils/cn.ts'
import styles from 'screens/Auth/auth.module.css'

interface IProps {
  actionType: 'register' | 'login',
  serverError?: string,
  changeType?: () => void,
}

const CredentialsForm = (props: PropsWithChildren<IProps>) => {
  const context = useContext(AuthContext)
  return (
    <>
      <div
        className={cn('text--orange', 'text-500', 'text--heading2')}
        style={{ paddingBottom: '70px' }}
      >{props.actionType === 'register' ? 'Регистрация' : 'Вход'}</div>
      <div className={cn(styles.form, styles.fields)}>
        {props.actionType === 'register' && (
          <>
            <TextInput
              className="credentialsForm_input"
              placeholder="Имя"
              name="firstName"
              value={context.values.firstName}
              onChange={context.onChange}
              type="text"
              autoComplete="off"
            />
            <TextInput
              className="credentialsForm_input"
              placeholder="Фамилия"
              name="lastName"
              value={context.values.lastName}
              onChange={context.onChange}
              type="text"
              autoComplete="off"
            />
            <TextInput
              className="credentialsForm_input"
              onChange={context.onChange}
              value={context.values.patronymic}
              placeholder="Отчество"
              name="patronymic"
              type="text"
              autoComplete="off"
            />
            <TextInput
              className="credentialsForm_input"
              placeholder="Номер телефона"
              name="phone"
              maxLength={12}
              value={context.values.phone}
              onChange={context.onChange}
              autoComplete="off"
            />
            <TextInput
              className="credentialsForm_input"
              placeholder="Почта"
              name="email"
              value={context.values.email}
              onChange={context.onChange}
              type="email"
              autoComplete="off"
            />
            <PasswordInput
              className="credentialsForm_input"
              placeholder="Пароль"
              name="password"
              value={context.values.password}
              onChange={context.onChange}
              autoComplete="off"
            />
            <PasswordInput
              className="credentialsForm_input"
              placeholder="Повторный пароль"
              name="repeatPassword"
              value={context.values.repeatPassword}
              onChange={context.onChange}
              autoComplete="off"
            />
            {props.serverError}
          </>
        )}
        {props.actionType === 'login' && (
          <>
            <TextInput
              className="credentialsForm_input"
              placeholder="Почта"
              name="email"
              value={context.values.email}
              onChange={context.onChange}
              type="email"
              autoComplete="off"
            />
            <PasswordInput
              className="credentialsForm_input"
              placeholder="Пароль"
              name="password"
              value={context.values.password}
              onChange={context.onChange}
              autoComplete="off"
            />
            {props.serverError}
          </>

        )}
        {props.children}
      </div>

    </>
  )
}

export default CredentialsForm