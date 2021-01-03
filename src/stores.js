import { writable } from 'svelte/store'

function createPageStore() {
  const { subscribe, set } = writable('home')

  return {
    subscribe,
    goTo: (page) => {
      set(page)
    }
  }
}

export const page = createPageStore()
