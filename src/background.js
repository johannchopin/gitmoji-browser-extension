chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tab.create({url: 'popup.html'})
})

main()


function main() {
}