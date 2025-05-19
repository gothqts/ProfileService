import { IOption } from 'types/global.ts'
import { CSSProperties } from 'react'
import { useRef, useState } from 'react'
import usePopup from 'shared/hooks/usePopup.tsx'
import styles from '../Dropdown/dropdown.module.css'
import cn from 'utils/cn.ts'
import FlippingArrow from 'shared/Buttons/FlippingArrow'

interface IMultiDropdownProps<T extends string | number> {
  options: IOption<T>[],
  selectedOptions: IOption<T>['value'][],
  onSelect: (options: T[], name: string) => void,
  name: string,
  style?: CSSProperties,
  inputStyle?: CSSProperties,
  className?: string,
  placeholder?: string,
  setModalState?: () => void,
  btnPlaceholder?: string,
}

const MultiDropdown = <T extends string | number>({ selectedOptions, ...props }: IMultiDropdownProps<T>) => {

  const ref = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  usePopup(ref, setIsOpen)


  const handleToggleOption = (optionValue: T) => (e: React.MouseEvent) => {
    e.stopPropagation()
    const newSelectedOptions = selectedOptions.includes(optionValue)
      ? selectedOptions.filter(opt => opt !== optionValue)
      : [...selectedOptions, optionValue]

    props.onSelect(newSelectedOptions, props.name)
  }


  const getSelectedText = () => {
    if (selectedOptions.length === 0) {
      return props.placeholder
    }

    if (selectedOptions.length === 1) {
      const selectedOption = props.options.find(opt => opt.value === selectedOptions[0])
      return selectedOption?.name
    }

    return `${selectedOptions.join(', ')}`
  }

  return (
    <div
      className={styles.wrapper}
      ref={ref}
    >
      <div
        data-open={isOpen}
        className={cn('text-input', props.className)}
        style={props.inputStyle}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          style={{
            color: selectedOptions.length === 0 ? 'rgba(0, 0, 0, 0.6)' : 'inherit',
            paddingRight: '30px',
          }}
        >
          {getSelectedText()}
        </span>

        <div className={styles.arrow}>
          <FlippingArrow
            isOpen={isOpen}
            arrowStyle="orange"
          />
        </div>

        {isOpen && (
          <div className={styles.list}>
            {props.options.map((option) => (
              <div
                key={String(option.value)}
                className={cn(
                  styles.menuOption,
                  selectedOptions.includes(option.value) ? styles.selectedOption : '',
                )}
                onClick={handleToggleOption(option.value)}
              >
                <span>{option.name}</span>
              </div>
            ))}
            {props.btnPlaceholder && (<button onClick={props.setModalState} className={cn(styles.menuOption, styles.btn)}>
              {props.btnPlaceholder}
            </button>)}

          </div>
        )}
      </div>
    </div>
  )
}
export default MultiDropdown