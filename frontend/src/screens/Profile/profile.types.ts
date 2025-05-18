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

export interface IStudentProjectsAndTeams {
  utils1: IStudentTeams[]
  utils2: IStudentProject[]
}
export type ICuratorProjectsAndTeams = IStudentProjectsAndTeams

export interface IPasswordsValues {

}

export interface IContactsValues {

}

export interface ILeaderProjectsAndDirections {
  utils1: ILeaderDirection[],
  utils2: IStudentProject[],
}

export interface IStudentTeams {
  id: number,
  name: string,
  projectName: string,
  usersName: string[],
}

export interface IStudentProject {
  id: number,
  eventName: string,
  directionName: string,
  topic: string,
  teamName: string,
  startTime: string,
  endTime: string,
}
export interface ITableStudentProject{
  id: number,
  eventName: string,
  topic: string,
  date: string,
  curatorName: string,
}
export interface ITableCuratorProject {
  id: number,
  eventName: string,
  topic: string,
  date: string,
  teams: string[]
}
export interface ILeaderDirection{
  id: number,
  name: string,
  eventName: string,
  projectsName: string[],
  teamsName: string[],
}
