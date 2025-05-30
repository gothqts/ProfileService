export interface IRegisterValues{
  firstName: string,
  lastName: string,
  patronymic: string,
  phone: string,
  email: string,
  password: string,
  repeatPassword: string,
}
export interface IAuth{
  accessToken: string,
  expires: number | null,
  role: string
}

export interface IAuthState {
  auth: IAuth,
  user: IUser
}
export interface ILoginValues{
  email: string,
  password: string,
}
export interface IUser {
  id: number,
  name: string,
  patronymic: string,
  surname: string,
  university: string,
  speciality: string,
  course: number,
  telegram: string,
  email: string,
  vk: string,
  specialization: string,
  stack: string[],
  userRole: string,
  token: string,
}