import allLinks from 'navigation/app.links.tsx'
import NavigationLink from 'shared/Layout/components/Header/NavBar/NavLink'
import styles from './navbar.module.css'
import { authAtom, generateEmptyState } from 'screens/Auth/auth.atom.ts'
import ExitIcon from 'assets/icons/exitIcon.svg?react'
import { useAtom } from 'jotai/index'

const NavBar = () => {
  const [user, setUser] = useAtom(authAtom)
  const links = user.auth.role === 'ORGANIZER' ? allLinks.organizerLinks : allLinks.links

  return (
    <div className={styles.links}>
      {
        links.map((link) => (
          <NavigationLink
            key={link.path}
            link={link}
          />
        ))
      }
      <ExitIcon
        className={styles.exit_link}
        onClick={() => {
          localStorage.removeItem('token')
          setUser(generateEmptyState())
        }}
      />
    </div>
  )
}

export default NavBar