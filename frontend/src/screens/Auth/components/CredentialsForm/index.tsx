import TextInput from 'shared/Inputs/TextInput'
import PasswordInput from 'shared/Inputs/PasswordInput'
import { PropsWithChildren, useContext } from 'react'
import AuthContext from 'screens/Auth/auth.context.ts'
import cn from 'utils/cn.ts'
import styles from 'screens/Auth/auth.module.css'
import { AuthTypeEnum } from 'enums/authEnum.ts'

interface IProps {
  serverError: string
  actionType: 'register' | 'login'
}

const CredentialsForm = (props: PropsWithChildren<IProps>) => {
  const context = useContext(AuthContext)
  return (
    <>
      <div
        className={cn('text--orange', 'text-500', 'text--heading2')}
        style={{ paddingBottom: '70px' }}
      >
        {props.actionType === AuthTypeEnum.register ? 'Регистрация' : 'Вход'}</div>
      <div className={cn(styles.form, styles.fields)}>
        {props.actionType === AuthTypeEnum.register && (
          <>
            <TextInput
              serverError={props.serverError}
              className="credentialsForm_input"
              placeholder="Имя"
              name="firstName"
              value={context.values.firstName}
              onChange={context.onChange}
              type="text"
              autoComplete="off"
            />
            <TextInput
              serverError={props.serverError}
              className="credentialsForm_input"
              placeholder="Фамилия"
              name="lastName"
              value={context.values.lastName}
              onChange={context.onChange}
              type="text"
              autoComplete="off"
            />
            <TextInput
              serverError={props.serverError}
              className="credentialsForm_input"
              onChange={context.onChange}
              value={context.values.patronymic}
              placeholder="Отчество"
              name="patronymic"
              type="text"
              autoComplete="off"
            />
            <TextInput
              serverError={props.serverError}
              className="credentialsForm_input"
              placeholder="Номер телефона"
              name="phone"
              maxLength={12}
              value={context.values.phone}
              onChange={context.onChange}
              autoComplete="off"
            />
            <TextInput
              serverError={props.serverError}
              className="credentialsForm_input"
              placeholder="Почта"
              name="email"
              value={context.values.email}
              onChange={context.onChange}
              autoComplete="off"
            />
            <PasswordInput
              serverError={props.serverError}
              className="credentialsForm_input"
              placeholder="Пароль"
              name="password"
              value={context.values.password}
              onChange={context.onChange}
              autoComplete="off"
            />
            <PasswordInput
              serverError={props.serverError}
              className="credentialsForm_input"
              placeholder="Повторный пароль"
              name="repeatPassword"
              value={context.values.repeatPassword}
              onChange={context.onChange}
              autoComplete="off"
            />
            {props.serverError && <span>{props.serverError}</span>}
          </>
        )}
        {props.actionType === 'login' && (
          <>
            <TextInput
              serverError={props.serverError}
              className="credentialsForm_input"
              placeholder="Почта"
              name="email"
              value={context.values.email}
              onChange={context.onChange}
              autoComplete="off"
            />
            <PasswordInput
              serverError={props.serverError}
              className="credentialsForm_input"
              placeholder="Пароль"
              name="password"
              value={context.values.password}
              onChange={context.onChange}
              autoComplete="off"
            />
            {props.serverError && <span>{props.serverError}</span>}
          </>

        )}
        {props.children}
      </div>

    </>
  )
}

export default CredentialsForm