import cn from 'utils/cn.ts'
import styles from './ctrlPanel.module.css'
import { CSSProperties } from 'react'

interface IProps {
  firstTitle: string,
  secondTitle: string,
  handleClick: () => void,
  entityState: string,
  style?: CSSProperties,
}

const CtrlPanel = (props: IProps) => {
  return (
    <div className={styles.controlPanel} style={props.style}>
      <button
        className={cn(styles.controlPanel_btn, props.entityState === props.firstTitle ? styles.controlPanel_btn_active : '')}
        onClick={props.handleClick}
        disabled={props.entityState === props.firstTitle}
      >{props.firstTitle}</button>
      <button
        className={cn(styles.controlPanel_btn, props.entityState === props.secondTitle ? styles.controlPanel_btn_active : '')}
        onClick={props.handleClick}
        disabled={props.entityState === props.secondTitle}
      >{props.secondTitle}</button>
    </div>
  )
}

export default CtrlPanel