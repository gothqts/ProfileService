import { HTTPResponse } from 'services/http/types.ts'
import http, { handleErrorResponse, handleHttpResponse } from 'services/http'
import config from '../../config.ts'
import { IMeeting } from 'screens/Meetings/meetings.types.ts'


const getMeetings = (): Promise<HTTPResponse<IMeeting[]>> => {
  return http.get(config.API_URL + '/meetings').then(handleHttpResponse).catch(handleErrorResponse)
}
const meetingsApi = {
  getMeetings,
}
export default meetingsApi