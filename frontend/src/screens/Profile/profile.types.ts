export interface IStudentProjectsAndTeams {
  utils1: IStudentTeams[]
  utils2: IStudentProject[]
}
export type ICuratorProjectsAndTeams = IStudentProjectsAndTeams

export type ILeaderProjects = IStudentProject[]

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
  curatorName: string,
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
  teamName: string
}
export interface ILeaderDirection{
  id: number,
  name: string,
  eventName: string,
  projectsName: string[],
  teamsName: string[],
}
export interface IOrganizerEvent {
  topic: string,
  directionsName: string[],
  startDate: string,
  endDate: string,
}
export interface IOrganizerEvents {
  utils1: IOrganizerEvent[],
  utils2: any[],
}
export interface IStack {
  name: string,
}
export interface ISpecialization {
  name: string,
}
export interface ICourse {
  name: string,
  value: string,
}
export interface IPasswords{
  oldPassword: string,
  newPassword: string,
}
