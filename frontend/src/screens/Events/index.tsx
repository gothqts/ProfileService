import styles from './events.module.css'
import { EventsEntity } from 'screens/Events/events.enum.ts'
import { useState } from 'react'
import EventCard from 'screens/Events/components/EventCard'
import CtrlPanel from 'shared/CtrlPanel'
import Table from 'shared/Table'
import cn from 'utils/cn.ts'
import { useAtomValue } from 'jotai'
import { authAtom } from 'screens/Auth/auth.atom.ts'
import useEventsCtrl from 'screens/Events/hooks/useEventsCtrl.tsx'
import Dropdown from 'shared/Inputs/Dropdown'

const Events = () => {
  const auth = useAtomValue(authAtom)
  const [entityType, setEntityType] = useState(EventsEntity.events)
  const { projects, events, options, handleChange, selectedOptions } = useEventsCtrl({ entityType: entityType })


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
              {/*<SelectInput values={options.events}>*/}

              {/*</SelectInput>*/}
              <Dropdown
                placeholder="Мероприятие"
                options={options.events}
                name="event"
                onSelect={handleChange}
                selectedOption={selectedOptions.event}
                arrowStyle='default'
                className={styles.dropdown}
              />
              <Dropdown
                placeholder="Направление"
                onSelect={handleChange}
                name="direction"
                options={options.directions}
                selectedOption={selectedOptions.direction}
                arrowStyle='default'
                className={styles.dropdown}
              />
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