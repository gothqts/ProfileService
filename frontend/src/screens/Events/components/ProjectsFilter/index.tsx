import { PropsWithChildren } from 'react'
import styles from './projectsFilter.module.css'
import FlippingArrow from 'assets/icons/FlippingArrow.svg?react'

interface IProps {
  object: string

}

const ProjectFilter = (props: PropsWithChildren<IProps>) => {

  return (
    <div className={styles.container}>
      <div className={styles.svg}>{props.children}</div>
      <div className={styles.name}>{props.object}</div>
      <FlippingArrow className={styles.svg} />
    </div>
  )
}

export default ProjectFilter