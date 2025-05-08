import { useState } from 'react'
import styles from './toggle.module.css'
import cn from 'utils/cn.ts'

const Toggle = () => {
  const [isToggled, setIsToggled] = useState<boolean>(true)
  return (
    <button
      className={cn(styles.toggleBtn, isToggled ? styles.toggled : '')}
      onClick={() => setIsToggled(!isToggled)}
    >
      <div className={styles.thumb}>
      </div>
    </button>

  )
}

export default Toggle