import styles from './events.module.css'
import { EventsEntity } from 'screens/Events/events.enum.ts'
import { useEffect, useState } from 'react'
import EventCard from 'screens/Events/components/EventCard'
import ProjectsFilter from 'screens/Events/components/ProjectsFilter'
import Toggle from 'shared/Toggle'
import CtrlPanel from 'shared/CtrlPanel'
import Table from 'shared/Table'
import eventsApi from 'screens/Events/events.api.ts'
import { IEvent, ProjectWithoutTimestamps } from 'screens/Events/event.types.ts'
import cn from 'utils/cn.ts'
import { useAtomValue } from 'jotai'
import { authAtom } from 'screens/Auth/auth.atom.ts'


const Events = () => {
  const auth = useAtomValue(authAtom)
  const [entityType, setEntityType] = useState(EventsEntity.events)
  const [projects, setProjects] = useState<ProjectWithoutTimestamps[]>([])
  const [events, setEvents] = useState<IEvent[]>([])

  useEffect(() => {

    if (entityType === EventsEntity.projects) {
      eventsApi.getAllProjects().then((data) => {
        if (data.status === 'success') {
          setProjects(data.body)
        }
      })
    } else if (entityType === EventsEntity.events) {
      eventsApi.getAllEvents().then((data) => {
        if (data.status === 'success') {
          setEvents(data.body)
        }
      })
    }
  }, [entityType])

  const handleToggle = () => {
    if (entityType === EventsEntity.events) {
      setEntityType(EventsEntity.projects)
    } else if (entityType === EventsEntity.projects) {
      setEntityType(EventsEntity.events)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <CtrlPanel
          firstTitle="Мероприятия"
          secondTitle="Проекты"
          handleClick={handleToggle}
          entityState={entityType}
        />
        {
          auth.auth.role === 'ORGANIZER' ? <button className={styles.menu_add_btn} /> : null
        }
      </div>

      {
        entityType === EventsEntity.events && (
          <div className={styles.events_list}>
            {events.map(card => (
              <EventCard
                key={card.id}
                card={card}
              />
            ))}
          </div>
        )
      }
      {
        entityType === EventsEntity.projects && (
          <>
            <div className={styles.filters}>
              <ProjectsFilter object="Мероприятия">
                <Toggle />
              </ProjectsFilter>
              <ProjectsFilter object="Направления">
                <Toggle />
              </ProjectsFilter>
            </div>
            <Table
              className={cn('text-body-m', styles.table)}
              headers={{
                topic: 'Тема',
                eventName: 'Мероприятие',
                directionName: 'Направление',
                curatorName: 'Куратор',
              }}
              data={projects}
            />
          </>
        )
      }
    </div>
  )
}

export default Events