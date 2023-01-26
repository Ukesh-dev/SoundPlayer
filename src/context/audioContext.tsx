import { createContext, useContext, useMemo, useRef, useState } from 'react'
import { InstrumentName } from 'soundfont-player'
import { accessContext } from '../noteType/audio'
import { DEFAULT_INSTRUMENT } from '../noteType/Sound'

export const useAudioContext = (): Optional<typeof AudioContext> => {
  // TODO change this to not use ref and see what happens
  const AudioCtx = useRef(accessContext())

  return AudioCtx.current
}

export const InstrumentContext = createContext<{
  instrument: InstrumentName
  setInstrument: (instrumentName: InstrumentName) => void
}>({ instrument: 'acoustic_grand_piano', setInstrument() {} })

export const useInstrument = () => useContext(InstrumentContext)
