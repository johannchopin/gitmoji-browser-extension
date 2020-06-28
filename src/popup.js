document.addEventListener('DOMContentLoaded', function () {
  const bg = chrome.extension.getBackgroundPage()
  document.querySelector('button').addEventListener('click', function () {
    chrome.tabs.create({"url": "https://gitmoji.carloscuesta.me/"})
  })
})