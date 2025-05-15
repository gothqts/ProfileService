import { IOption } from 'types/global.ts'
import { CSSProperties } from 'react'
import { useRef, useState, useMemo } from 'react'
import usePopup from 'shared/hooks/usePopup.tsx'
import styles from './dropdown.module.css'
import cn from 'utils/cn.ts'
import FlippingArrow from 'shared/Buttons/FlippingArrow'

interface IDropdownProps<T extends string | number> {
  options: IOption<T>[],
  selectedOption?: IOption<T>['value'],
  onSelect?: (option: T, name: string) => void,
  name: string,
  style?: CSSProperties,
  inputStyle?: CSSProperties,
  className?: string
}

const Dropdown = <T extends string | number>(props: IDropdownProps<T>) => {

  const ref = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  usePopup(ref, setIsOpen)

  // const selectedOption = useMemo(() => {
  //   return props.options.find((o) => o.value === props.selectedOption)
  // }, [props.selectedOption, props.options])

  const handleChange = (optionValue: T) => () => {
    props.onSelect(optionValue, props.name)
    setIsOpen(false)
  }
  return (
    <div style={props.style}>
      <div
        className={styles.wrapper}
        ref={ref}
      >
        <div
          data-open={isOpen}
          className={cn(styles.input, props.className)}
          style={props.inputStyle}
        >
          <div className={styles.arrow}>
            <FlippingArrow
              isOpen={isOpen}
              arrowStyle="orange"
            />
          </div>
          <div
            className={styles.list}
          >
            {props.options
              .map((option) => (
                <div
                  key={String(option.value)}
                  className={cn(
                    styles.menuOption,
                    props.selectedOption === option.value ? styles.selectedOption : '',
                  )}
                  onClick={handleChange(option.value)}
                >
                  <span>{option.name}</span>
                </div>
              ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Dropdown