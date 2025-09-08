import { HTTPResponse } from 'services/http/types'
import http, { handleErrorResponse, handleHttpResponse } from 'services/http'
import config from '../../config'
import { IApplication } from 'screens/Applications/applications.types'

const getApplications = (): Promise<HTTPResponse<IApplication[]>> => {
  return http.get(config.API_URL + '/requests').then(handleHttpResponse).catch(handleErrorResponse)
}
const applicationsApi = {
  getApplications,
}
export default applicationsApi