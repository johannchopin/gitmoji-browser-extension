export const onGetTabInnerHTML = (callback) => {
  chrome.tabs.executeScript(null, { code: "document.body.innerText" },
    (results) => { callback(results[0]) }
  );
}