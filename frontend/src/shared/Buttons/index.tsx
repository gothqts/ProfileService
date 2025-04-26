import { ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren } from 'react'
import cn from 'utils/cn.ts'

interface IProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {

}

const Button = (props: PropsWithChildren<IProps>) => {
  return (
    <button
      type={props.type ? props.type : 'button'}
      className={cn(props.className ?? '', 'button')}
    >
      {props.children}
    </button>
  )
}

export default Button