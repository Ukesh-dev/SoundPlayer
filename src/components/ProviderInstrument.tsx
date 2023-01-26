import { useMemo, useState } from 'react'
import { InstrumentName } from 'soundfont-player'
import { InstrumentContext } from '../context/audioContext'
import { DEFAULT_INSTRUMENT } from '../noteType/Sound'

export const InstrumentProvider = ({
  children,
}: {
  children?: React.ReactNode
}) => {
  const [instrument, setInstrument] = useState(DEFAULT_INSTRUMENT)
  const valueContext = useMemo(
    () => ({ instrument, setInstrument }),
    [instrument]
  )
  return (
    <InstrumentContext.Provider value={valueContext}>
      {children}
    </InstrumentContext.Provider>
  )
}
