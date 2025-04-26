import styles from './layout.module.css'
import NavBar from 'shared/Layout/components/NavBar'
import { Suspense } from 'react'
import { Outlet } from 'react-router'
import Loader from 'shared/Loaders/LoaderPage'
import LogoBlock from 'shared/Layout/components/LogoBlock'
import Footer from 'shared/Layout/components/Footer'


const Layout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <LogoBlock style={{ marginRight: '100px' }} />
        {location.pathname !== '/auth' && (
          <>
            <NavBar />
            <div className={styles.avatarBlock}>
            </div>
          </>
        )}

      </div>
      <div className={styles.page_content}>
        <Suspense fallback={<Loader style={{ height: '100%' }} />}>
          <Outlet />
        </Suspense>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default Layout