export type NoteType = 'natural' | 'flat' | 'sharp'

export type NotePitch = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'

// !Removed 8 as it seemed right
export type OctaveIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7

export type MidValue = number

export type PitchIndex = number

export type Note = {
  mid: MidValue
  type: NoteType
  pitch: NotePitch
  index: PitchIndex
  ocatave: OctaveIndex
}

const C1_MID_NUMBER = 24
const C4_MID_NUMBER = 60
const B5_MID_NUMBER = 83

export const LOWER_NOTE = C4_MID_NUMBER
export const HIGHTER_NOTE = B5_MID_NUMBER
export const SEMITONE_IN_OCTAVE = 12

export const NATURAL_PITCH_INDICES: PitchIndex[] = [0, 2, 4, 5, 7, 9, 11]

export const PITCHES_REGISTRY: Record<PitchIndex, NotePitch> = {
  0: 'C',
  1: 'C',
  2: 'D',
  3: 'D',
  4: 'E',
  5: 'F',
  6: 'F',
  7: 'G',
  8: 'G',
  9: 'A',
  10: 'A',
  11: 'B',
}

export const fromMid = (mid: MidValue): Note => {
  const pianoRange = mid - C1_MID_NUMBER
  const octave = (Math.floor(pianoRange / SEMITONE_IN_OCTAVE) +
    1) as OctaveIndex

  const index = pianoRange % SEMITONE_IN_OCTAVE
  const pitch = PITCHES_REGISTRY[index]

  const isSharp = !NATURAL_PITCH_INDICES.includes(index)
  const type = isSharp ? 'sharp' : 'natural'

  return { ocatave: octave, index, pitch, type, mid }
}

type NoteGenerators = {
  fromNote?: MidValue
  toNote?: MidValue
}

export const generateNotes = ({
  fromNote = LOWER_NOTE,
  toNote = HIGHTER_NOTE,
}: NoteGenerators): Note[] =>
  Array(toNote - fromNote + 1)
    .fill(0)
    .map((_, index) => fromMid(fromNote + index))

export const notes = generateNotes({})
