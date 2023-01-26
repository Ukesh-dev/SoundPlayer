import { InstrumentName } from 'soundfont-player'
import instruments from 'soundfont-player/names/musyngkite.json'

type Option = {
  value: InstrumentName
  label: string
}

export const normalizeLabel = (label: InstrumentName) =>
  label.charAt(0).toUpperCase() + label.slice(1).replaceAll(/_/gi, ' ')

const normalizeList = (lists: InstrumentName[]): Option[] =>
  lists.map((instrument) => ({
    value: instrument,
    label: normalizeLabel(instrument),
  }))

export const options = normalizeList(instruments as InstrumentName[])
