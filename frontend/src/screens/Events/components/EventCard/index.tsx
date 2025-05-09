import styles from './eventCard.module.css'
import { IEvent } from 'screens/Events/event.types.ts'

interface IProps {
  card: IEvent
}

const EventCard = ({ card }: IProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{card.title}</div>
      <div className={styles.description}>{card.description}</div>
      <div className={styles.date}>Сроки проведения: {card.date}</div>
      <button className={styles.btn}>Узнать подробнее</button>
    </div>
  )
}

export default EventCard