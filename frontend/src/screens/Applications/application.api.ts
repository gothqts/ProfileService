import { HTTPResponse } from 'services/http/types.ts'
import http, { handleErrorResponse, handleHttpResponse } from 'services/http'
import config from '../../config.ts'
import { IApplication } from 'screens/Applications/applications.types.ts'

const getApplications = (): Promise<HTTPResponse<IApplication[]>> => {
  return http.get(config.API_URL + '/requests').then(handleHttpResponse).catch(handleErrorResponse)
}
const applicationsApi = {
  getApplications,
}
export default applicationsApi