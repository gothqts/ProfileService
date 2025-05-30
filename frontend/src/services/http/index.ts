import axios, { AxiosError, AxiosResponse } from 'axios'
import config from '../../config.ts'
import { IErrorResponse, ISuccessResponse } from 'services/http/types.ts'
import { generateEmptyState } from 'screens/Auth/auth.atom.ts'

import { Dispatch, SetStateAction } from 'react'
import { IAuthState } from 'screens/Auth/auth.types.ts'

const http = axios.create({
  baseURL: config.API_URL,
  withCredentials:
    true,
})


export const applyInterceptors = (setAuthState: Dispatch<SetStateAction<IAuthState>>) => {

  http.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
  })

  http.interceptors.response.use((response) => response,
    (err) => {
      const shouldLogout = err.response && err.response?.status === 401
      if (shouldLogout) {
        localStorage.removeItem('token')
        setAuthState(generateEmptyState())

      }
    })
}


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