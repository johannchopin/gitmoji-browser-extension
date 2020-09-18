<script>
  /* eslint-disable no-undef */
  import Modal from './Modal'
  import Icon from './Icon/Icon'

  const isInExtension = typeof chrome !== 'undefined' && chrome.tabs !== undefined

  let asAlreadyClicked = true
  $: isModalOpen = !asAlreadyClicked

  const asClickedKey = 'has-clicked'
  const openCounterKey = 'popup-open-counter'
  const minOpenCounter = 5

  const setAsClickedStorage = () => {
    chrome.storage.local.set({ [asClickedKey]: true })
  }

  const setOpenCounterStorage = (count) => {
    chrome.storage.local.set({ [openCounterKey]: count })
  }

  if (isInExtension) {
    chrome.storage.local.get([asClickedKey, openCounterKey], (result) => {
      const asClicked = result[asClickedKey]
      const openCounter = result[openCounterKey]

      if (openCounter !== undefined) {
        setOpenCounterStorage(openCounter + 1)

        const shouldModalBeOpen = openCounter >= minOpenCounter && asClicked === undefined
        if (shouldModalBeOpen) {
          asAlreadyClicked = false
        }
      } else {
        setOpenCounterStorage(1)
      }
    })
  }

  const closeModal = () => {
    isModalOpen = false
    setAsClickedStorage()
  }
</script>

<Modal
  open={isModalOpen}
  onClose={closeModal}
>
  <h2>You like to use the extension? Then leave a star on GitHub 🎉</h2>
  <a 
    href="https://github.com/johannchopin/gitmoji-browser-extension" 
    target="_blank"
    on:click={setAsClickedStorage}
  >
    <Icon name='star' /> GitHub
  </a>
</Modal>

<style>
  h2 {
    color: #fff;
    font-size: 20px;
    line-height: 30px;
  }

  a {
    display: flex;
    justify-content: center;
    width: fit-content;
    padding: 5px 10px;
    border: solid 2px black;
    border-radius: 4px;
    color: black;
    text-decoration: none;
    margin: auto;
    margin-top: 20px;
    font-size: 16px;
    transition-duration: .3s;
  }

  a:hover {
    box-shadow: 2px 3px rgba(0, 0, 0, .2);
  }

  a :global(.icon) {
    color: var(--color-primary);
    margin-right: 5px;
  }
</style>