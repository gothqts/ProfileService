import { ILoginValues, IRegisterValues } from 'screens/Auth/auth.types.ts'
import http, { handleErrorResponse, handleHttpResponse } from 'services/http'
import config from '../../config.ts'
import { AxiosError } from 'axios'

const login = async (data: ILoginValues) => {
  try {
    let resp=  await http.post(config.API_URL + '/users/auth', data, { withCredentials: true })
    return handleHttpResponse(resp)
  } catch (err) {
    return handleErrorResponse(err as AxiosError)
  }
}


const register = async (data: IRegisterValues) => {
  let resp = await http.post(config.API_URL + '/users', data)
  try {
    return handleHttpResponse(resp)
  } catch (err) {
    return handleHttpResponse(resp)
  }
}
export const authApi = {
  login,
  register,
}
