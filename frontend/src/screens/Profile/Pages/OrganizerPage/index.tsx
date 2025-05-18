import UserInfoTable from 'screens/Profile/components/UserInfoTable'
import AvatarContainer from 'screens/Profile/components/AvatarContainer'
import { IUser } from 'screens/Auth/auth.types.ts'
import Table from 'shared/Table'
import { useEffect, useState } from 'react'
import profileApi from 'screens/Profile/profile.api.ts'
import { IOrganizerEvent } from 'screens/Profile/profile.types.ts'

interface IProps {
  cells: {
    label: string;
    value: string | string[] | number;
  }[],
  user: Pick<IUser, 'name' | 'surname'>
}

const tableHeaders = {
  topic: 'Тема',
  directionsName: 'Направления',
  startDate: 'Дата начала',
  endDate: 'Дата конца',
}

const OrganizerPage = ({ cells, user }: IProps) => {
  const [rows, setRows] = useState<IOrganizerEvent[]>([])

  useEffect(() => {
    profileApi.getOrganizerEvents().then((resp) => {
      if (resp.status === 'success') {
        const formattedData: IOrganizerEvent[] = resp.body.utils1.map(event => ({
          topic: event.topic,
          directionsName: event.directionsName,
          startDate: event.startDate,
          endDate: event.endDate,
        }))
        setRows(formattedData)
      }
    })
  }, [])

  const formatDirections = (directions: string[]) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      {directions.map((dir, index) => (
        <span key={index}>{dir}</span>
      ))}
    </div>
  )

  return (
    <>
      <div className="user_info_container" style={{ marginBottom: '186px' }}>
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
          data={rows.map(row => ({
            ...row,
            directionsName: formatDirections(row.directionsName),
          }))}
        />
      </div>
    </>
  )
}

export default OrganizerPage