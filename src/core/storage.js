const PREFIX = 'bills-game-board'
const SCHEMA_VERSION = 1

function keyFor(key) {
  return `${PREFIX}:v${SCHEMA_VERSION}:${key}`
}

export const storage = {
  schemaVersion: SCHEMA_VERSION,
  get(key, fallback = null) {
    try {
      const raw = window.localStorage.getItem(keyFor(key))
      return raw === null ? fallback : JSON.parse(raw)
    } catch {
      return fallback
    }
  },
  set(key, value) {
    try {
      window.localStorage.setItem(keyFor(key), JSON.stringify(value))
      return true
    } catch {
      return false
    }
  },
  remove(key) {
    try {
      window.localStorage.removeItem(keyFor(key))
      return true
    } catch {
      return false
    }
  },
  migrate() {
    return { ok: true, schemaVersion: SCHEMA_VERSION }
  }
}
