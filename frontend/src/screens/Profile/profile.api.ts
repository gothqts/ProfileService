import http, { handleErrorResponse, handleHttpResponse } from 'services/http'
import config from '../../config.ts'
import { IUser } from 'screens/Auth/auth.types.ts'
import { HTTPResponse } from 'services/http/types.ts'
import {
  ICuratorProjectsAndTeams,
  ILeaderProjectsAndDirections, IOrganizerEvents, ISpecialization, IStack,
  IStudentProjectsAndTeams,
} from 'screens/Profile/profile.types.ts'

const getUserInfo = (): Promise<HTTPResponse<IUser>> => {
  return http.get(config.API_URL + '/users').then(handleHttpResponse).catch(handleErrorResponse)
}
const putUserInfo = (profileData: Omit<IUser, 'id' | 'userRole' | 'token'>): Promise<HTTPResponse<IUser>> => {
  return http.put(config.API_URL + '/users', profileData).then(handleHttpResponse).catch(handleErrorResponse)
}

const getStudentProjectsAndTeams = (): Promise<HTTPResponse<IStudentProjectsAndTeams>> => {
  return http.get(config.API_URL + '/users/my?role=student').then(handleHttpResponse).catch(handleErrorResponse)
}

const getCuratorProjects = (): Promise<HTTPResponse<ICuratorProjectsAndTeams>> => {
  return http.get(config.API_URL + '/users/my?role=curator').then(handleHttpResponse).catch(handleErrorResponse)
}

const getLeaderProjectsAndDirections = (): Promise<HTTPResponse<ILeaderProjectsAndDirections>> => {
  return http.get(config.API_URL + '/users/my?role=leader').then(handleHttpResponse).catch(handleErrorResponse)
}


const getOrganizerEvents = (): Promise<HTTPResponse<IOrganizerEvents>> => {
  return http.get(config.API_URL + '/users/my?role=organizer').then(handleHttpResponse).catch(handleErrorResponse)
}

const getStacks = () :Promise<HTTPResponse<IStack[]>> =>{
  return http.get(config.API_URL + '/stacks').then(handleHttpResponse).catch(handleErrorResponse)
}
const getSpecializations = (): Promise<HTTPResponse<ISpecialization[]>> =>{
  return http.get(config.API_URL + '/specializations').then(handleHttpResponse).catch(handleErrorResponse)
}
const profileApi = {
  getUserInfo,
  putUserInfo,
  getStudentProjectsAndTeams,
  getLeaderProjectsAndDirections,
  getOrganizerEvents,
  getCuratorProjects,
  getStacks,
  getSpecializations,

}
export default profileApi