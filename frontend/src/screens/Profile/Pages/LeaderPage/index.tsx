import UserInfoTable from 'screens/Profile/components/UserInfoTable'
import { generateTableCells } from 'screens/Profile'
import AvatarContainer from 'screens/Profile/components/AvatarContainer'
import { IUser } from 'screens/Auth/auth.types.ts'
import Table from 'shared/Table'
import CtrlPanel from 'shared/CtrlPanel'
import { DepartmentLeadEntities } from 'screens/Profile/profile.enum.ts'
import { useEffect, useState } from 'react'
import profileApi from 'screens/Profile/profile.api.ts'
import {
  ILeaderDirection,
  ILeaderProjects,
} from 'screens/Profile/profile.types.ts'

const directionHeaders = {
  name: 'Направление',
  eventName: 'Мероприятие',
  projectsName: 'Проекты',
  teamsName: 'Команды',
}

const projectsHeaders = {
  eventName: 'Мероприятие',
  directionName: 'Направление',
  topic: 'Тема',
  teamName: 'Команда',
}

interface IProps {
  user: IUser
}

const LeaderPage = (props: IProps) => {
  const [projects, setProjects] = useState<ILeaderProjects>([])
  const [directions, setDirections] = useState<ILeaderDirection[]>([])
  useEffect(() => {
    profileApi.getLeaderProjectsAndDirections().then((resp) => {
      if (resp.status === 'success') {
        setDirections(resp.body.utils1)
        setProjects(resp.body.utils2)
      }
    })
  }, [])
  const [ctrlPanelState, setCtrlPanelStat] = useState(DepartmentLeadEntities.directions)

  const handleToggle = () => {
    setCtrlPanelStat(prev =>
      prev === DepartmentLeadEntities.directions
        ? DepartmentLeadEntities.projects
        : DepartmentLeadEntities.directions,
    )
  }
  return (
    <>
      <div
        className="user_info_container"
        style={{ marginBottom: '186px' }}
      >
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
        <>
          <CtrlPanel
            style={{ padding: '16px 0px' }}
            firstTitle={DepartmentLeadEntities.directions}
            secondTitle={DepartmentLeadEntities.projects}
            handleClick={handleToggle}
            entityState={ctrlPanelState}
          />
          {ctrlPanelState === DepartmentLeadEntities.directions && (
            <Table
              className="table-orange-border"
              headers={directionHeaders}
              data={directions}
            />
          )}
          {ctrlPanelState === DepartmentLeadEntities.projects && (
            <Table
              className="table-orange-border"
              headers={projectsHeaders}
              data={projects}
            />
          )}
        </>
      </div>
    </>
  )
}

export default LeaderPage