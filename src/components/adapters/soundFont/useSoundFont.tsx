import { useRef, useState } from 'react'
import SoundFont, { InstrumentName, Player } from 'soundfont-player'
import { MidValue } from '../../../noteType/notes'
import { AudioNotesRegistry, DEFAULT_INSTRUMENT } from '../../../noteType/Sound'

type Settings = {
  AudioContext: AudioContextType
}

type SoundFunctionType = {
  load: (instrument: InstrumentName) => Promise<void>
  play: (note: MidValue) => Promise<void>
  stop: (note: MidValue) => Promise<void>

  current: Optional<InstrumentName>
  loading: boolean
}

export const useSoundFont = ({ AudioContext }: Settings): SoundFunctionType => {
  let activeNotes: AudioNotesRegistry = {}
  const [current, setCurrent] = useState<Optional<InstrumentName>>(null)
  const [currentPlayer, setCurrentPlayer] = useState<Optional<Player>>(null)
  const [loading, setLoading] = useState<boolean>(false)

  //* Without ref also it can be used
  const audioRef = useRef(new AudioContext())

  async function load(instrument: InstrumentName = DEFAULT_INSTRUMENT) {
    setLoading(true)
    const player = await SoundFont.instrument(audioRef.current, instrument)
    setLoading(false)
    setCurrent(instrument)
    setCurrentPlayer(player)
  }
  async function resume() {
    return audioRef.current.state === 'suspended'
      ? audioRef.current.resume()
      : Promise.resolve()
  }
  async function play(note: MidValue) {
    await resume()
    if (!currentPlayer) return
    const node = currentPlayer.play(note.toString())
    activeNotes = { ...activeNotes, [note]: node }
  }
  async function stop(note: MidValue) {
    await resume()
    if (!activeNotes[note]) return
    activeNotes[note]!.stop()
    activeNotes = { ...activeNotes, [note]: null }
  }
  return { play, stop, load, current, loading }
}
