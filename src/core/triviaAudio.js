let audioContext = null

function context() {
  if (typeof window === 'undefined') return null
  const AudioContextClass = window.AudioContext || window.webkitAudioContext
  if (!AudioContextClass) return null
  audioContext ??= new AudioContextClass()
  if (audioContext.state === 'suspended') audioContext.resume()
  return audioContext
}

function tone(ctx, { frequency, start, duration, type = 'sine', gain = 0.08 }) {
  const oscillator = ctx.createOscillator()
  const volume = ctx.createGain()

  oscillator.type = type
  oscillator.frequency.setValueAtTime(frequency, start)
  volume.gain.setValueAtTime(0.0001, start)
  volume.gain.exponentialRampToValueAtTime(gain, start + 0.015)
  volume.gain.exponentialRampToValueAtTime(0.0001, start + duration)

  oscillator.connect(volume)
  volume.connect(ctx.destination)
  oscillator.start(start)
  oscillator.stop(start + duration + 0.02)
}

export function playTriviaSfx(kind, enabled = true) {
  if (!enabled) return
  const ctx = context()
  if (!ctx) return
  const now = ctx.currentTime + 0.01

  if (kind === 'correct') {
    tone(ctx, { frequency: 523.25, start: now, duration: 0.13, type: 'triangle' })
    tone(ctx, { frequency: 659.25, start: now + 0.11, duration: 0.16, type: 'triangle' })
    tone(ctx, { frequency: 783.99, start: now + 0.22, duration: 0.22, type: 'triangle' })
    return
  }

  if (kind === 'wrong') {
    // A deliberately corny, generic descending game-show "wah-wah" cue.
    tone(ctx, { frequency: 293.66, start: now, duration: 0.28, type: 'sawtooth', gain: 0.045 })
    tone(ctx, { frequency: 246.94, start: now + 0.2, duration: 0.30, type: 'sawtooth', gain: 0.045 })
    tone(ctx, { frequency: 196.0, start: now + 0.4, duration: 0.42, type: 'sawtooth', gain: 0.045 })
    return
  }

  if (kind === 'start') {
    tone(ctx, { frequency: 392.0, start: now, duration: 0.10, type: 'square', gain: 0.035 })
    tone(ctx, { frequency: 523.25, start: now + 0.09, duration: 0.10, type: 'square', gain: 0.035 })
    tone(ctx, { frequency: 659.25, start: now + 0.18, duration: 0.18, type: 'square', gain: 0.035 })
    return
  }

  if (kind === 'finish') {
    tone(ctx, { frequency: 523.25, start: now, duration: 0.12, type: 'triangle' })
    tone(ctx, { frequency: 659.25, start: now + 0.1, duration: 0.12, type: 'triangle' })
    tone(ctx, { frequency: 783.99, start: now + 0.2, duration: 0.12, type: 'triangle' })
    tone(ctx, { frequency: 1046.5, start: now + 0.3, duration: 0.32, type: 'triangle' })
  }
}

// Future Bill-host recordings plug in here. Keeping this contract separate means
// adding local MP3/M4A/OGG clips later will not require changing Trivia rules.
export const HOST_CUE_TYPES = Object.freeze(['start', 'correct', 'wrong', 'final-question', 'finish'])

export async function playHostCue(_kind, _enabled = false) {
  return false
}
