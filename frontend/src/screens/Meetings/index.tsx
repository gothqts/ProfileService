import styles from './meeting.module.css'
import { meetings } from 'screens/Meetings/temp.ts'
import Table from 'shared/Table'

const Meetings = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Мои собрания</div>
      <Table
        className='text-body-m'
        headers={{
          date: 'Дата',
          theme: 'Тема',
          place: 'Место',
          team: 'Команда',
        }
        }
        data={meetings}
      />
    </div>
  )
}

export default Meetings