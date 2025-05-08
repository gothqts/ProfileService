export interface IEvent {
  id: number,
  title: string;
  description: string;
  date: string;
}
export interface IProject {
  id: number;
  theme: string;
  event: string;
  direction: string;
  curator: string;
}