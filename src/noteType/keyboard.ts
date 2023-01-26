import { OctaveIndex, PitchIndex } from './notes'

export type Key = string
export type Keys = Key[]

export const TOP_ROW: Keys = Array.from('q2w3er5t6y7u')
export const BOTTOM_ROW: Keys = Array.from('zsxdcvgbhnjm')
export const CHANGE_ROW_AT: OctaveIndex = 5

export function selectKeys(octave: OctaveIndex, index: PitchIndex): Key {
  const keyRow = octave < CHANGE_ROW_AT ? TOP_ROW : BOTTOM_ROW
  return keyRow[index]
}
