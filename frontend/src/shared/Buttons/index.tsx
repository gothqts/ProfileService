import { ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren } from 'react'
import cn from 'utils/cn.ts'

export interface IButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
}

const Button = ({
  children,
  ...props
}: PropsWithChildren<IButtonProps>) => {
  return (
    <button
      {...props}
      type={props.type ? props.type : 'button'}
      className={cn(props.className ?? '', 'button')}
    >
      <div>{children}</div>
    </button>
  )
}

export default Button
