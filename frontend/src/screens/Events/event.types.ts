export interface IEvent {
  id: number,
  name: string,
  description: string,
  stage: string,
  startDate: string,
  endDate: string,
  directionsName: string[],
}

export interface IProject {
  id: number;
  topic: string;
  eventName: string;
  directionName: string;
  curatorName: string;
  startTime: string;
  endTime: string;
}

export interface IFilters {
  events: {
    id: number,
    name: string,
  }[];
  directions: {
    id: number,
    name: string,
  }[]
}

export type ProjectWithoutTimestamps = Omit<IProject, 'startTime' | 'endTime'>;
