import { useEffect } from 'react'
import { useAudioContext, useInstrument } from '../context/audioContext'
import { useSoundFont } from './adapters/soundFont/useSoundFont'
import { Keyboard } from './Keyboard'

export const WithKeyboardInstrument = () => {
  const AudioContext = useAudioContext()!

  const { instrument } = useInstrument()
  const { load, loading, play, stop, current } = useSoundFont({ AudioContext })

  useEffect(() => {
    if (!loading && instrument !== current) load(instrument)
  }, [current, instrument, load, loading])

  return <Keyboard loading={loading} play={play} stop={stop} />
}
