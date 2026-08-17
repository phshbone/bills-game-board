import { BUILD_INFO } from './buildInfo'
import { MODULES } from './moduleRegistry'
import { storage } from './storage'

export function exposeTestHooks() {
  if (!import.meta.env.DEV) return

  window.__BILLS_GAME_BOARD__ = Object.freeze({
    build: BUILD_INFO,
    modules: MODULES,
    storageSchemaVersion: storage.schemaVersion
  })
}
