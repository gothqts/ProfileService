import styles from './layout.module.css'
import { Suspense } from 'react'
import { Outlet } from 'react-router'
import Loader from 'shared/Loaders/LoaderPage'
import Footer from 'shared/Layout/components/Footer'
import Header from 'shared/Layout/components/Header'


const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.page_content}>
        <Suspense fallback={<Loader style={{ height: '100%' }} />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  )
}

export default Layout