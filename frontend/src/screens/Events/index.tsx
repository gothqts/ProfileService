import styles from './events.module.css'
import { EventsEntity } from 'screens/Events/events.enum.ts'
import { useState } from 'react'
import { cards } from 'screens/Events/components/EventCard/tempData.ts'
import EventCard from 'screens/Events/components/EventCard'
import { projects } from 'screens/Events/components/ProjectsTable/tempProj.ts'
import ProjectsFilter from 'screens/Events/components/ProjectsFilter'
import Toggle from 'shared/Toggle'
import CtrlPanel from 'shared/CtrlPanel'
import Table from 'shared/Table'

const Events = () => {
  const [entityType, setEntityType] = useState(EventsEntity.events)

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
        <button className={styles.menu_add_btn} />
      </div>

      {
        entityType === EventsEntity.events && (
          <div className={styles.events_list}>
            {cards.map(card => (
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
              className="text-body-m"
              headers={{
                theme: 'Тема',
                event: 'Мероприятие',
                direction: 'Направление',
                curator: 'Куратор',
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