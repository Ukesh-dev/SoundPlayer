import { useAudioContext } from '../context/audioContext'
import { NoAudiMessage } from './NoAudioMessage'
import { Playground } from './Playground'

export const Main = () => {
  const AudioContext = useAudioContext()
  return AudioContext ? <Playground /> : <NoAudiMessage />
}
