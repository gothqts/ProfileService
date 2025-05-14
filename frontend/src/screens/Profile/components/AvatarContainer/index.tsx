import styles from './avatarContainer.module.css'
import { Link } from 'react-router'
import { urls } from 'navigation/app.urls.ts'
import ProfileIcon from 'assets/icons/profileIcon.svg?react'

interface IProps {
  name: string,
  surname: string,
}

const AvatarContainer = (props: IProps) => {
  return (
    <div className={styles.avatarContainer}>
      <div className={styles.avatarBlock}>
        <ProfileIcon />
      </div>
      <div style={{ color: 'rgba(0, 0, 0, 0.7)' }}>{props.name} {props.surname}</div>
      <Link
        to={urls.updateProfile}
        className={styles.link}
      >
        Редактировать профиль
      </Link>
    </div>
  )
}

export default AvatarContainer