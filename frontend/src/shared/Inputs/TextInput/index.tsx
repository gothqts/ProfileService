import {
  ChangeEvent,
  CSSProperties,
  InputHTMLAttributes,
  PropsWithChildren, useContext,
  useEffect,
  useRef,
} from 'react'
import cn from 'utils/cn.ts'
import ValidationContext from 'shared/Validation/ValidationContext.ts'

export type OmittedInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size'>

export interface ITextInputProps extends OmittedInputProps {
  style?: CSSProperties
  onChange: (value: string, name: string) => void
  label?: string
  size?: number
  autoFocus?: boolean
  name: string
  serverError?: string
  errorText?: string
  error?: boolean
}

const TextInput = ({
  onChange,
  children,
  className,
  style,
  size,
  autoFocus,
  value,
  serverError,
  ...props
}: PropsWithChildren<ITextInputProps>) => {

  const { type = 'text', name } = props
  const inputRef = useRef<HTMLInputElement>(null)
  const context = useContext(ValidationContext)
  const error = context.errors[props.name]?.message || props.error
  const isError = Boolean(error || serverError)

  console.log(context.errors)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value, name)
  }

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus({ preventScroll: true })
    }
  }, [autoFocus])


  return (
    <div
      className="input-wrapper"
      style={style}
    >
      {children}
      <input
        ref={inputRef}
        data-error={isError}
        type={type}
        className={cn('text-input', className)}
        value={value}
        onChange={handleChange}
        data-size={size}
        autoComplete="off"
        {...props}
      />
      {isError && (
        <span
          className={cn('text--error', 'text--body-xs', 'text-400')}
          style={{ paddingTop: '5px' }}
        >{error}</span>
      )}
    </div>
  )
}

export default TextInput