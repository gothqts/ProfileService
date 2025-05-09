import axios, { AxiosError, AxiosResponse } from 'axios'
import config from '../../config.ts'
import { IErrorResponse, ISuccessResponse } from 'services/http/types.ts'

const http = axios.create({
  baseURL: config.API_URL,
  withCredentials:
    true,
})

http.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config
})


export const handleHttpResponse = <T>(response: AxiosResponse<T>): ISuccessResponse<T> => {
  return {
    body: response.data,
    status: 'success',
  }
}
export const handleErrorResponse = (err: AxiosError): IErrorResponse => {
  return {
    status: 'error',
    message: err?.message ?? '',
    code: err?.response?.status,
  }
}
export default http