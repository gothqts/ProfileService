import UserInfoTable from 'screens/Profile/components/UserInfoTable'
import { generateTableCells } from 'screens/Profile'
import { IUser } from 'screens/Auth/auth.types.ts'
import AvatarContainer from 'screens/Profile/components/AvatarContainer'
import Table from 'shared/Table'
import { useEffect, useState } from 'react'
import profileApi from 'screens/Profile/profile.api.ts'
import { ITableStudentProject } from 'screens/Profile/profile.types.ts'


interface IProps {
  user: IUser
}
const projectsHeaders = {
  eventName: 'Мероприятие',
  topic: 'Тема проекта',
  date: 'Сроки',
  curatorName: 'Куратор',
}

const Student = (props: IProps) => {
  const [rows, setRows]=useState<ITableStudentProject[]>([])
  useEffect(() => {
    profileApi.getStudentProjectsAndTeams().then((resp) => {
      if (resp.status === 'success') {
        const formattedData = resp.body.utils2.map(project => ({
          id: project.id,
          eventName: project.eventName,
          topic: project.topic,
          date: `${project.startTime} - ${project.endTime}`
        }));
        setRows(formattedData);
      }
    });
  }, []);
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
          data={rows}
        />
      </div>
    </>
  )
}

export default Student