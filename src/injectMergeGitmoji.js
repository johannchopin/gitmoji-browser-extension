export const injectMergeGitmoji = () => {
  // Select the node that will be observed for mutations
  var targetNode = document.body

  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(() => {
    alert('test')
  })

  // Start observing the target node for configured mutations
  observer.observe(targetNode, { attributes: true, childList: true })
}

injectMergeGitmoji()
