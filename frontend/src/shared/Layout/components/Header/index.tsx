import LogoBlock from 'shared/Layout/components/Header/LogoBlock'
import NavBar from 'shared/Layout/components/Header/NavBar'
import styles from './header.module.css'
import Avatar from 'assets/icons/smallProfileIcon.svg?react'

const Header = () => {
  return (
    <div className={styles.header}>
      <LogoBlock style={{ marginRight: '100px' }} />
      <NavBar />
      <div className={styles.avatarBlock}>
        <Avatar />
      </div>
    </div>
  )
}

export default Header