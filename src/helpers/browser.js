/* eslint-disable no-undef */
export const onGetTabInnerHTML = (callback) => {
  if (typeof chrome !== 'undefined' && chrome.tabs !== undefined) {
    chrome.tabs.executeScript(null, { code: 'document.body.innerText' },
      (results) => { callback(results[0]) })
  }
}
