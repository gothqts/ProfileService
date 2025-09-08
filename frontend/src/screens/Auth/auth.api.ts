import { ILoginValues, IRegisterValues } from 'screens/Auth/auth.types'
import http, { handleErrorResponse, handleHttpResponse } from 'services/http'
import config from '../../config'
import { AxiosError } from 'axios'

const login = async (data: ILoginValues) => {
  try {
    let resp = await http.post(config.API_URL + '/users/auth', data)
    return handleHttpResponse(resp)
  } catch (err) {
    return handleErrorResponse(err as AxiosError)
  }
}

const register = async (data: IRegisterValues) => {
  try {
    let resp = await http.post(config.API_URL + '/users', data)
    return handleHttpResponse(resp)
  } catch (err) {
    return handleErrorResponse(err as AxiosError)
  }
}
export const authApi = {
  login,
  register,
}
