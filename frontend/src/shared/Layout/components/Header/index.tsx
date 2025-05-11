import LogoBlock from 'shared/Layout/components/Header/LogoBlock'
import NavBar from 'shared/Layout/components/Header/NavBar'
import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <LogoBlock style={{marginRight: '100px'}}/>
      <NavBar />
      <div className={styles.avatarBlock}>
      </div>
    </div>
  )
}

export default Header