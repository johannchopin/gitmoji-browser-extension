/* eslint-disable no-undef */
export const onGetTabInnerHTML = (callback) => {
  if (typeof chrome !== 'undefined' && chrome.tabs !== undefined) {
    chrome.tabs.executeScript(null, { code: 'document.body.innerText' },
      (results) => { callback(results[0]) })
  }
}

export const isInExtension = () => {
  return typeof chrome !== 'undefined' && chrome.tabs !== undefined
}

export const closePopup = () => { window.close() }

export const isMacOs = () => {
  if (typeof window !== 'undefined') {
    return window.navigator.platform.toUpperCase().indexOf('MAC') >= 0
  }

  return false
}
