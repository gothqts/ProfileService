import http from 'services/http'
import config from '../../config.ts'
import { IUser } from 'screens/Auth/auth.types.ts'
import { HTTPResponse } from 'services/http/types.ts'

export const getUserInfo = async (): Promise<IUser> => {
  let resp = await http.get(config.API_URL + '/users')
  return resp.data
}
export const putUserInfo = async (profileData: Omit<IUser, 'id'| 'userRole' | 'token'>): Promise<HTTPResponse<IUser>> => {
  let resp = await http.put(config.API_URL + '/users', profileData)
  return resp.data
}
// export const getStudentProjects = async (): Promise<HTTPResponse<>> => {}

// export getCuratorProjects = async (): Promise<IProject[]> => {}
//
//
// export const getLeaderProjects = async (): Promise<IProject[]> => {}
//
// export const getOrganizerEvents = async (): Promise<IEvent[]> => {}