import { WithKeyboardInstrument } from './withKeyboardInstrument'
import { InstrumentProvider } from './ProviderInstrument'
import { InstrumentSelector } from './InstrumentSelector'

export const Playground = () => (
  <InstrumentProvider>
    <div>
      <WithKeyboardInstrument />
      <InstrumentSelector />
    </div>
  </InstrumentProvider>
)
