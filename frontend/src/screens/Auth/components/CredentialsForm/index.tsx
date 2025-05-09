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
      <div className={cn('text--orange', 'text-500', 'text--heading2')} style={{paddingBottom: '70px'}}>{props.actionType === 'register' ? 'Регистрация' : 'Вход'}</div>
      <div className={cn(styles.form, styles.fields)}>
        {props.actionType === 'register' && (
          <>
            <TextInput
              placeholder="Имя"
              name="name"
              value={context.values.name}
              onChange={context.onChange}
              type="text"
              autoComplete="off"
            />
            <TextInput
              placeholder="Фамилия"
              name="lastname"
              value={context.values.lastname}
              onChange={context.onChange}
              type="text"
              autoComplete="off"
            />
            <TextInput
              placeholder="Номер телефона"
              name="phone"
              value={context.values.phone}
              onChange={context.onChange}
              autoComplete="off"
            />
            <TextInput
              placeholder="Почта"
              name="email"
              value={context.values.email}
              onChange={context.onChange}
              type="email"
              autoComplete="off"
            />
            <PasswordInput
              placeholder="Пароль"
              name="password"
              value={context.values.password}
              onChange={context.onChange}
              autoComplete="off"
            />
            <PasswordInput
              placeholder="Повторный пароль"
              name="checkPassword"
              value={context.values.checkPassword}
              onChange={context.onChange}
              autoComplete="off"
            />
            {props.serverError}
          </>
        )}
        {props.actionType === 'login' && (
          <>
            <TextInput
              placeholder="Почта"
              name="email"
              value={context.values.email}
              onChange={context.onChange}
              type="email"
              autoComplete="off"
            />
            <PasswordInput
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