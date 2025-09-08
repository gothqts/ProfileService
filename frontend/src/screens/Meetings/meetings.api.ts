import { HTTPResponse } from 'services/http/types'
import http, { handleErrorResponse, handleHttpResponse } from 'services/http'
import config from '../../config'
import { IMeeting } from 'screens/Meetings/meetings.types'


const getMeetings = (): Promise<HTTPResponse<IMeeting[]>> => {
  return http.get(config.API_URL + '/meetings').then(handleHttpResponse).catch(handleErrorResponse)
}
const meetingsApi = {
  getMeetings,
}
export default meetingsApi