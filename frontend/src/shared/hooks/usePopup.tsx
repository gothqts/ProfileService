import { Dispatch, RefObject, SetStateAction, useCallback, useEffect } from 'react'
import useClickOutside from 'shared/hooks/useClickOutside.tsx'

const usePopup = (
  ref: RefObject<HTMLElement | null>,
  onClose: Dispatch<SetStateAction<boolean>>
) => {
  useClickOutside(ref, onClose)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const isEscape = e.key === 'Escape'

      if (isEscape) {
        e.preventDefault()
        onClose(false)
      }
    },
    [onClose]
  )

  useEffect(() => {
    if (ref.current) {
      document.addEventListener('keydown', handleKeyDown)

      return () => {
        document.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [handleKeyDown])
}

export default usePopup
