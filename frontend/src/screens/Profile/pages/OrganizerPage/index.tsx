import UserInfoTable from 'screens/Profile/components/UserInfoTable'
import AvatarContainer from 'screens/Profile/components/AvatarContainer'
import { IUser } from 'screens/Auth/auth.types.ts'
import Table from 'shared/Table'

interface IProps {
  cells: {
    label: string;
    value: string | string[] | number;
  }[],
  user: Pick<IUser, 'name' | 'surname'>
}

const projectsHeaders = {
  event: 'Мероприятие',
  directions: 'Направление',
  theme: 'Тема',
  teams: 'Команды',
}

const OrganizerPage = ({ cells, user }: IProps) => {
  return (
    <>
      <div className="user_info_container" style={{marginBottom: '186px'}}>
        <div className="user_info_container_tables">
          <UserInfoTable
            header="Контактные данные"
            cells={cells}
          />
        </div>
        <AvatarContainer
          name={user.name}
          surname={user.surname}
        />
      </div>
      <div style={{ marginBottom: '186px' }}>
        <h2 className="user_info_container_header">Мероприятия</h2>
        <Table
          className="table-orange-border"
          headers={projectsHeaders}
          data={[
            {
              id: 1,
              event: 'ПП весна 2025',
              directions: 'Веб',
              theme: 'Проект 1',
              teams: 'Команда 1',
            },
            {
              id: 2,
              event: 'ПП осень 2025',
              directions: 'Веб',
              theme: 'Проект 1',
              teams: 'Команда 1',
            },
          ]}
        />
      </div>
    </>
  )
}

export default OrganizerPage