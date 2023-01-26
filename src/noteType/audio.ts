export const accessContext = (): Optional<typeof AudioContext> =>
  window.AudioContext || window.webkitAudioContext || null
