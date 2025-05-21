import Table from 'shared/Table'
import styles from './applications.module.css'
import useFetchApplications from 'screens/Applications/hooks/useFetchApplications.ts'
import { IApplication } from 'screens/Applications/applications.types.ts'

const Applications = () => {
  const { applications } = useFetchApplications()
  const tableHeaders: IApplication = {
    eventName: 'Мероприятие',
    projectName: 'Проект',
    specializationName: 'Специализация',
    status: 'Статус',
  }
  return (
    <div className={styles.container}>
      <div className={styles.title}>Мои заявки</div>
      <Table
        className="text-body-m"
        headers={tableHeaders}
        data={applications}
      />
    </div>
  )
}

export default Applications