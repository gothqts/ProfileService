import UserInfoTable from 'screens/Profile/components/UserInfoTable'
import AvatarContainer from 'screens/Profile/components/AvatarContainer'
import { IUser } from 'screens/Auth/auth.types.ts'
import Table from 'shared/Table'
import { useEffect, useState } from 'react'
import profileApi from 'screens/Profile/profile.api.ts'
import { IEvent } from 'screens/Events/event.types.ts'

interface IProps {
  cells: {
    label: string;
    value: string | string[] | number;
  }[],
  user: Pick<IUser, 'name' | 'surname'>
}

const tableHeaders = {
  name: 'Тема',
  directionsName: 'Направления',
  startDate: 'Дата начала',
  endDate: 'Дата конца',
}

const OrganizerPage = ({ cells, user }: IProps) => {
  const [rows, setRows] = useState<IEvent[]>([])

  useEffect(() => {
    profileApi.getOrganizerEvents().then((resp) => {
      if (resp.status === 'success') {
        setRows(resp.body)
      }
    })
  }, [])
  return (
    <>
      <div
        className="user_info_container"
        style={{ marginBottom: '186px' }}
      >
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
          headers={tableHeaders}
          data={rows}
        />
      </div>
    </>
  )
}

export default OrganizerPage