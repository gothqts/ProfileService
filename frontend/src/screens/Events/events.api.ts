import { HTTPResponse } from 'services/http/types.ts'
import http, { handleErrorResponse, handleHttpResponse } from 'services/http'
import config from '../../config.ts'
import { IEvent, IFilters, ProjectWithoutTimestamps } from 'screens/Events/event.types.ts'

export const getAllEvents = (): Promise<HTTPResponse<IEvent[]>> => {
  return http.get(config.API_URL + '/events').then(handleHttpResponse).catch(handleErrorResponse)
}


export const getProjectsWithFilters = (
  event?: string,
  direction?: string
): Promise<HTTPResponse<ProjectWithoutTimestamps[]>> => {

  const params = new URLSearchParams();

  if (event) params.append('even_filter', event);
  if (direction) params.append('direction_filter', direction);

  const queryString = params.toString();
  const url = config.API_URL + `/projects${queryString ? `?${queryString}` : ''}`;

  return http.get(url)
    .then(handleHttpResponse)
    .catch(handleErrorResponse);
}

export const getFilters = (): Promise<HTTPResponse<IFilters>> => {
  return http.get(config.API_URL + '/filter').then(handleHttpResponse).catch(handleErrorResponse)
}
const eventsApi = {
  getAllEvents,
  getProjectsWithFilters,
  getFilters,
}
export default eventsApi