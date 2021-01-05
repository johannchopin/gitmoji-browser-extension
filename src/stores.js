import { writable } from 'svelte/store'
import { isInExtension } from './helpers/browser'

const AUTO_CLOSE_AFTER_COPY_KEY = 'auto-close-after-copy'
const THEME_KEY = 'theme'

const createPageStore = () => {
  const { subscribe, set } = writable('home')

  return {
    subscribe,
    goTo: (page) => {
      set(page)
    }
  }
}

const createUserSettingsStore = () => {
  const { subscribe, set, update } = writable({ autoCloseAfterCopy: false, theme: 'light' })

  // get settings from storage
  if (isInExtension()) {
    /* eslint-disable-next-line no-undef */
    chrome.storage.sync.get([AUTO_CLOSE_AFTER_COPY_KEY, THEME_KEY], (result) => {
      const autoCloseAfterCopyValue = result[AUTO_CLOSE_AFTER_COPY_KEY] || false
      const themeValue = result[THEME_KEY] || 'light'

      update(settings => {
        return {
          ...settings,
          theme: themeValue,
          autoCloseAfterCopy: autoCloseAfterCopyValue
        }
      })
    })
  }

  return {
    subscribe,
    setAutoCloseAfterCopy: (value) => {
      if (isInExtension()) {
        /* eslint-disable-next-line no-undef */
        chrome.storage.sync.set({ [AUTO_CLOSE_AFTER_COPY_KEY]: value })
      }

      update(settings => {
        return {
          ...settings,
          autoCloseAfterCopy: value
        }
      })
    },
    setTheme: (theme) => {
      if (isInExtension()) {
        /* eslint-disable-next-line no-undef */
        chrome.storage.sync.set({ [THEME_KEY]: theme })
      }

      update(settings => {
        return {
          ...settings,
          theme
        }
      })
    },
    set,
    update
  }
}

export const page = createPageStore()
export const settings = createUserSettingsStore()
