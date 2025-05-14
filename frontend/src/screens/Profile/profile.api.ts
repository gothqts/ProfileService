import http from 'services/http'
import config from '../../config.ts'
import { IUser } from 'screens/Auth/auth.types.ts'

export const getUserInfo = async (): Promise<IUser> => {
  let resp = await http.get(config.API_URL + '/users')
  return resp.data
}