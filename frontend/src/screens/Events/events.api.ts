import { HTTPResponse } from 'services/http/types.ts'
import http, { handleErrorResponse, handleHttpResponse } from 'services/http'
import config from '../../config.ts'
import { IEvent, ProjectWithoutTimestamps } from 'screens/Events/event.types.ts'

export const getAllEvents = (): Promise<HTTPResponse<IEvent[]>> => {
  return http.get(config.API_URL + '/events').then(handleHttpResponse).catch(handleErrorResponse)
}
export const getAllProjects = (): Promise<HTTPResponse<ProjectWithoutTimestamps[]>> => {
  return http.get(config.API_URL + '/projects').then(handleHttpResponse).catch(handleErrorResponse)
}
const eventsApi = {
  getAllEvents,
  getAllProjects,
}
export default eventsApi