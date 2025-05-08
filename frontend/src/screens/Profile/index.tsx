import styles from './profile.module.css'
import UserInfoTable from 'screens/Profile/components/UserInfoTable'
import { about, competencies, contacts } from 'screens/Profile/components/UserInfoTable/temporaryData.ts'
import { Link } from 'react-router'
import { urls } from 'navigation/app.urls.ts'
import ProfileIcon from 'assets/icons/profileIcon.svg?react'
import CtrlPanel from 'shared/CtrlPanel'
import { DepartmentLeadEntities } from 'screens/Profile/profile.enum.ts'
import { useState } from 'react'
import Table from 'shared/Table'


const Profile = () => {
  const directionHeaders = {
    directions: 'Направление',
    event: 'Мероприятие',
    projects: 'Проекты',
    teams: 'Команды',
  }
  const projectsHeaders = {
    event: 'Мероприятие',
    directions: 'Направление',
    theme: 'Тема',
    teams: 'Команды',
  }

  const [ctrlPanelState, setCtrlPanelStat] = useState(DepartmentLeadEntities.directions)

  const handleToggle = () => {
    if (ctrlPanelState === DepartmentLeadEntities.directions) {
      setCtrlPanelStat(DepartmentLeadEntities.projects)
    } else if (ctrlPanelState === DepartmentLeadEntities.projects) {
      setCtrlPanelStat(DepartmentLeadEntities.directions)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Личный кабинет пользователя</div>
      <div className={styles.userInfo}>
        <div className={styles.table}>
          <UserInfoTable
            header="О себе"
            cells={about}
          />
          <UserInfoTable
            header="Контактные данные"
            cells={contacts}
          />
          <UserInfoTable
            header="Компетенции"
            cells={competencies}
          />
        </div>
        <div className={styles.avatarContainer}>
          <div className={styles.avatarBlock}>
            <ProfileIcon />
          </div>
          <div style={{ color: 'rgba(0, 0, 0, 0.7)' }}>Иван Иванов</div>
          <Link
            to={urls.updateProfile}
            className={styles.link}
          >
            Редактировать профиль
          </Link>
        </div>
      </div>

      <CtrlPanel
        style={{ padding: '16px 0px', marginTop: '92px' }}
        firstTitle={DepartmentLeadEntities.directions}
        secondTitle={DepartmentLeadEntities.projects}
        handleClick={handleToggle}
        entityState={ctrlPanelState}
      />
      {ctrlPanelState === DepartmentLeadEntities.directions && (
        <Table
          className="table-orange-border"
          headers={directionHeaders}
          data={[
            {
              id: 1,
              directions: 'Веб',
              event: 'ПП весна 2024',
              projects: 'Проект 1',
              teams: 'Команда 1',
            },
            {
              id: 2,
              directions: 'Веб',
              event: 'ПП весна 2024',
              projects: 'Проект 1',
              teams: 'Команда 2',
            },
          ]}
        />
      )}
      {ctrlPanelState === DepartmentLeadEntities.projects && (
        <Table
          className="table-orange-border"
          headers={projectsHeaders}
          data={[{
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
      )}


    </div>


  )
}

export default Profile