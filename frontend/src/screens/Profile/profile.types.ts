import { IProject } from 'screens/Events/event.types.ts'

export interface IUpdateProfileValues {
  surname: string,
  name: string,
  patronymic: string,
  university: string,
  speciality: string,
  course: number,
  specialization: string,
  stack: string[]
}
export interface IPasswordsValues {

}
export interface IContactsValues {

}
export interface IProjectsAndDirections{
  projects: IProject[],
}