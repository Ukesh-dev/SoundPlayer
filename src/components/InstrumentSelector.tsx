import { ChangeEvent } from 'react'
import { InstrumentName } from 'soundfont-player'
import { useInstrument } from '../context/audioContext'
import { normalizeLabel, options } from './InstrumentOptions'
import { Select } from './Select/Select'

export const InstrumentSelector = () => {
  const { instrument, setInstrument } = useInstrument()

  const updateValue = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    target.blur()
    setInstrument(target.value as InstrumentName)
  }
  return (
    <Select value={instrument} onChange={updateValue}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </Select>
  )
}
