import { useEffect, useState } from 'react'
import useHttpLoaderWithServerError from 'shared/hooks/httpLoader/useHttpLoaderWithServerError.ts'
import eventsApi from 'screens/Events/events.api.ts'
import { IEvent, IFilters, ProjectWithoutTimestamps } from 'screens/Events/event.types.ts'


interface IOption {
  name: string
  value: string
}

interface IOptions {
  events: IOption[],
  directions: IOption[],
}

type SelectedOptions = {
  event: string;
  direction: string;
};

interface IProps {
  entityType: 'Проекты' | 'Мероприятия'
}

const useEventsCtrl = ({ entityType }: IProps) => {
  const { wait, loading } = useHttpLoaderWithServerError()

  const [projects, setProjects] = useState<ProjectWithoutTimestamps[]>([])
  const [events, setEvents] = useState<IEvent[]>([])
  const [options, setOptions] = useState<IOptions>({
    events: [],
    directions: [],
  })
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
      event: '',
      direction: '',
    },
  )

  const handleChange = (value: string, name: keyof SelectedOptions) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [name]: prev[name] === value ? '' : value,
    }))
  }


  const transformToOptions = (filters: IFilters): IOptions => {
    return {
      events: filters.events.map(event => ({
        name: event.name,
        value: event.name,
      })),
      directions: filters.directions.map(direction => ({
        name: direction.name,
        value: direction.name,
      })),
    }
  }

  useEffect(() => {
    if (entityType === 'Проекты') {
      wait(eventsApi.getFilters(), (resp) => {
        if (resp.status === 'success') {
          setOptions(transformToOptions(resp.body))
        }
      })
      wait(eventsApi.getProjectsWithFilters(selectedOptions.event, selectedOptions.direction), (resp) => {
        if (resp.status === 'success') {
          setProjects(resp.body)
        }
      })
    } else {
      wait(eventsApi.getAllEvents(), (resp) => {
        if (resp.status === 'success') {
          setEvents(resp.body)
        }
      })
    }

  }, [entityType, selectedOptions])

  return {
    projects,
    events,
    loading,
    options,
    selectedOptions,
    handleChange,
  }
}
export default useEventsCtrl