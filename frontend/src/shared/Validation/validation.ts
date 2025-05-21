import { IValidationFunctionResponse } from './validation.types.ts'

const emailValidate = (email: string): IValidationFunctionResponse | null => {
  if (!email) {
    return { key: 'email', message: 'Введите email' }
  } else {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/.test(email)) {
      return { key: 'email', message: 'Email введен неправильно' }
    }
  }
  return null
}
const passwordValidate = (password: string): IValidationFunctionResponse | null => {
  if (!password) {
    return { key: 'password', message: 'Введите пароль' }
  }
  return null
}

const firstNameValidate = (firstName: string): IValidationFunctionResponse | null => {
  if (!firstName) {
    return { key: 'firstName', message: 'Введите имя' }
  }
  return null
}

const phoneValidate = (phone: string): IValidationFunctionResponse | null => {
  if (!phone) {
    return { key: 'phone', message: 'Введите телефон' }
  }

  if (!/^[\d\+]+$/.test(phone)) {
    return {
      key: 'phone',
      message: 'Номер должен содержать только цифры и знак +',
    }
  }

  if (phone.includes('+') && !phone.startsWith('+')) {
    return {
      key: 'phone',
      message: 'Некорректный формат',
    }
  }

  return null
}


const lastNameValidate = (lastName: string): IValidationFunctionResponse | null => {
  if (!lastName) {
    return { key: 'lastName', message: 'Введите фамилию' }
  }
  return null
}

const patronymicValidate = (patronymic: string): IValidationFunctionResponse | null => {
  if (!patronymic) {
    return { key: 'lastName', message: 'Введите отчество' }
  }
  return null
}

const repeatPasswordValidate = (repeatPassword: string, password?: string): IValidationFunctionResponse | null => {
  if (!repeatPassword) {
    return { key: 'repeatPassword', message: 'Введите пароль ещё раз' }
  }
  if (password && repeatPassword !== password) {
    return { key: 'repeatPassword', message: 'Пароли не совпадают' }
  }
  return null
}
const telegramValidate = (telegram: string): IValidationFunctionResponse | null => {
  if (!telegram) {
    return { key: 'telegram', message: 'Введите ваш Telegram' }
  }

  if (!/^@[a-zA-Z0-9_]{4,31}$/.test(telegram)) {
    return {
      key: 'telegram',
      message: 'telegram должен быть в формате @username',
    }
  }

  return null
}

const vkValidate = (vk: string): IValidationFunctionResponse | null => {
  if (!vk) {
    return { key: 'vk', message: 'Введите ваш VK ID' }
  }

  if (!/^\/[a-zA-Z0-9_.]{1,31}$/.test(vk)) {
    return {
      key: 'vk',
      message: 'VK ID должен быть в формате /username',
    }
  }

  return null
}
const validation = {
  emailValidate,
  passwordValidate,
  firstNameValidate,
  lastNameValidate,
  patronymicValidate,
  repeatPasswordValidate,
  phoneValidate,
  telegramValidate,
  vkValidate,
}

export default validation
