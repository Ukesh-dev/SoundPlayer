import { InstrumentName, Player } from 'soundfont-player'
import { MidValue, NotePitch } from './notes'

export const DEFAULT_INSTRUMENT: InstrumentName = 'acoustic_grand_piano'

export type AudioNotesRegistry = Record<MidValue, Optional<Player>>
