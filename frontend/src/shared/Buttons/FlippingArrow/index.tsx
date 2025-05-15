import OrangeArrow from 'assets/icons/orangeArrow.svg?react'
import DefaultArrow from 'assets/icons/FlippingArrow.svg?react'
import styles from './flippingArrow.module.css'

interface IProps {
  isOpen: boolean,
  arrowStyle: 'orange' | 'default'
}

const FlippingArrow = ({ isOpen, arrowStyle }: IProps) => {
  return arrowStyle === 'orange' ? (
    <OrangeArrow
      className={styles.flippingArrow}
      data-open={isOpen ? 'true' : 'false'}
    />
  ) : (
    <DefaultArrow
      className={styles.flippingArrow}
      data-open={isOpen ? 'true' : 'false'}
    />
  )
}

export default FlippingArrow