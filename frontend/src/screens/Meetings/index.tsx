import styles from './meeting.module.css'
import Table from 'shared/Table'
import useFetchMeetings from 'screens/Meetings/hooks/useFetchMeetings.ts'

const Meetings = () => {
  const { meetings } = useFetchMeetings()
  return (
    <div className={styles.container}>
      <div className={styles.title}>Мои собрания</div>
      <Table
        className="text-body-m"
        headers={{
          date: 'Дата',
          topic: 'Тема',
          link: 'Место',
          teamName: 'Команда',
        }
        }
        data={meetings}
      />
    </div>
  )
}

export default Meetings