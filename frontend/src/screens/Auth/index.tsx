import styles from './auth.module.css'
import CredentialsForm from 'screens/Auth/components/CredentialsForm'
import { AuthTypeEnum } from 'enums/authEnum.ts'
import AuthContext from 'screens/Auth/auth.context.ts'
import { useState } from 'react'
import useAuthCtrl from 'screens/Auth/hooks/useAuthCtrl.tsx'
import Button from 'shared/Buttons'
import Footer from 'shared/Layout/components/Footer'
import LogoBlock from 'shared/Layout/components/Header/LogoBlock'
import cn from 'utils/cn.ts'
import ValidationForm from 'shared/Validation'

const Auth = () => {

  const [authType, setAuthType] = useState(AuthTypeEnum.login)
  const authCtrl = useAuthCtrl({
    actionType: authType,
    setAuthType: () => setAuthType(AuthTypeEnum.login),
  })
  const changeType = () => {
    authType === AuthTypeEnum.register
      ? setAuthType(AuthTypeEnum.login)
      : setAuthType(AuthTypeEnum.register)
  }
  const renderContent = () => {
    return (
      <CredentialsForm
        actionType={authType}
        serverError={authCtrl.serverError}
      >
        <div className={authType === AuthTypeEnum.login ? styles.login_bottom : styles.register_bottom}>
          <Button type="submit">
            {authType === AuthTypeEnum.register ? 'Зарегестрироваться' : 'Войти'}
          </Button>
          <span
            onClick={changeType}
            className="text--orange"
            style={{ cursor: 'pointer', fontSize: '20px' }}
          >
                {authType === 'register' ? 'Есть аккаунт?' : 'Нет аккаунта?'}
          </span>
        </div>
      </CredentialsForm>
    )
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <LogoBlock style={{ marginRight: '100px' }} />
      </div>

      <AuthContext.Provider
        value={{ values: authCtrl.authValues, onChange: authCtrl.handleChange }}
      >
        <ValidationForm
          errors={authCtrl.validationCtrl.errors}
          onSubmit={authCtrl.validationCtrl.handleSubmit}
          className={cn('flex-form', styles.content)}
        >
          {renderContent()}
        </ValidationForm>
      </AuthContext.Provider>
      <Footer />
    </div>
  )
}

export default Auth