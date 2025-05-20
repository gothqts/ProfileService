export interface ISuccessResponse<T = undefined> {
  status: 'success'
  body: T
}

export interface IResponse<T = undefined> {
  statusCode: number
  message: string
  data: T
}

export interface IErrorResponse {
  status: 'error'
  message: string
  code: number | undefined
  body?: Record<string, string>
}

export type HTTPResponse<T = undefined> =
  | IErrorResponse
  | ISuccessResponse<T>
