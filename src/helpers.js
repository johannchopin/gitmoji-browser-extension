export const onGetTabInnerHTML = (callback) => {
  if (chrome.tabs !== undefined) {
    chrome.tabs.executeScript(null, { code: 'document.body.innerText' },
      (results) => { callback(results[0]) })
  }
}
