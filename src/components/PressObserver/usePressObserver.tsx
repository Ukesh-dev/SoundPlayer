import { useEffect, useState } from 'react'
import { Key as Keylabel } from '../../noteType/keyboard'

type EventCode = string
type Callback = () => void

type PressObserverTypes = {
  key: Keylabel
  onPressUp: Callback
  onPressDown: Callback
}

const fromPrefix = (code: EventCode) => {
  const prefix = /Key|Digit/gi
  return code.replace(prefix, '')
}

const equal = (key: Keylabel, code: EventCode) =>
  key.toLowerCase() === fromPrefix(code.toLowerCase())

export const usePressObserver = ({
  key,
  onPressDown,
  onPressUp,
}: PressObserverTypes): boolean => {
  const [pressed, setPressed] = useState<boolean>(false)

  useEffect(() => {
    const handlePressedDown = ({ code }: KeyboardEvent) => {
      if (pressed || !equal(key, code)) return
      setPressed(true)
      onPressDown()
    }
    const handlePressedUp = ({ code }: KeyboardEvent) => {
      if (!pressed || !equal(key, code)) return
      setPressed(false)
      onPressUp()
    }

    document.addEventListener('keydown', handlePressedDown)
    document.addEventListener('keyup', handlePressedUp)

    return () => {
      document.removeEventListener('keydown', handlePressedDown)
      document.removeEventListener('keyup', handlePressedUp)
    }
  }, [key, onPressDown, onPressUp, pressed])
  return pressed
}
