import clsx from 'clsx'
import { NoteType } from '../noteType/notes'
import { usePressObserver } from './PressObserver/usePressObserver'

type PressCallback = () => void

type KeyProps = {
  type: NoteType
  label: string
  disabled?: boolean
  onUp: PressCallback
  onDown: PressCallback
}

export const Key = ({ type, label, onUp, onDown, ...props }: KeyProps) => {
  const pressed = usePressObserver({
    key: label,
    onPressDown: onDown,
    onPressUp: onUp,
  })

  return (
    <button
      type="button"
      onMouseDown={onDown}
      onMouseUp={onUp}
      className={clsx('key', type, pressed && 'is-pressed')}
      {...props}
    >
      {label}
    </button>
  )
}
