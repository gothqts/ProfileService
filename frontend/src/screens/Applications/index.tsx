import Table from 'shared/Table'
import styles from './applications.module.css'

const Applications = () => {
    const tableHeaders = {

        event: 'Мероприятие',
        project: 'Проект',
        specialization: 'Специализация',
        status: 'Статус'
    }
  return (
    <div className={styles.container}>
        <div className={styles.title}>Мои заявки</div>
      <Table
        className='text-body-m'
        headers={tableHeaders}
        data={[{
          id: 1,
          event: 'Собрание',
          project: 'Проектирование интерфейса',
          specialization: 'Проект',
          status: 'Закрыто',
        },
          {
            id: 1,
            event: 'Собрание',
            project: 'Проектирование интерфейса',
            specialization: 'Проект',
            status: 'Закрыто',
          },

        ]}
      />
    </div>
  )
}

export default Applications