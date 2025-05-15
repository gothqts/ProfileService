import UserInfoTable from 'screens/Profile/components/UserInfoTable'
import { generateTableCells } from 'screens/Profile'
import { IUser } from 'screens/Auth/auth.types.ts'
import AvatarContainer from 'screens/Profile/components/AvatarContainer'
import Table from 'shared/Table'

interface IProps {
  user: IUser
}
const projectsHeaders = {
  event: 'Мероприятие',
  directions: 'Направление',
  theme: 'Тема',
  teams: 'Команды',
}

const Student = (props: IProps) => {
  return (
    <>
      <div className="user_info_container"  style={{ marginBottom: '186px' }}>
        <div className="user_info_container_tables">
          <UserInfoTable
            header="О себе"
            cells={generateTableCells(props.user).about}
          />
          <UserInfoTable
            header="Контактные данные"
            cells={generateTableCells(props.user).contacts}
          />
          <UserInfoTable
            header="Компетенции"
            cells={generateTableCells(props.user).competencies}
          />
        </div>
        <AvatarContainer
          name={props.user.name}
          surname={props.user.surname}
        />
      </div>
      <div style={{ marginBottom: '186px' }}>
        <h2 className="user_info_container_header">Проекты</h2>
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

export default Student