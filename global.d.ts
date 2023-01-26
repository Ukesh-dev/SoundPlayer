type Optional<TEntity> = TEntity | null
type Some<TEntity> = Record<string, TEntity>
type SoundFontType = typeof SoundFont
type AudioContextType = typeof AudioContext

interface Window {
  webkitAudioContext: typeof AudioContext
}
