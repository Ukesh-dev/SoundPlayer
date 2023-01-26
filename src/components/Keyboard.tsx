import { selectKeys } from '../noteType/keyboard'
import { MidValue, notes } from '../noteType/notes'
import { Key } from './Key'

type KeyboardProps = {
  play: (note: MidValue) => Promise<void>
  stop: (note: MidValue) => Promise<void>
  loading: boolean
}

export const Keyboard = ({ loading, play, stop }: KeyboardProps) => (
  <main className="mx-auto max-w-8xl">
    <div className="flex justify-center mb-8">
      {notes.map(({ index, mid, ocatave, type }) => {
        const label = selectKeys(ocatave, index)
        return (
          <Key
            label={label}
            type={type}
            disabled={loading}
            onDown={() => {
              play(mid)
            }}
            onUp={() => stop(mid)}
            key={mid}
          />
        )
      })}
    </div>
  </main>
)
