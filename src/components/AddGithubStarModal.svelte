<script>
  /* eslint-disable no-undef */
  import Modal from './Modal'
  import Icon from './Icon/Icon'

  const isInExtension = typeof chrome !== 'undefined' && chrome.tabs !== undefined

  let asAlreadyClicked = true
  $: isModalOpen = !asAlreadyClicked

  const asClickedKey = 'has-clicked'

  const setAsClickedInStorage = () => {
    chrome.storage.local.set({ [asClickedKey]: true })
  }

  if (isInExtension) {
    chrome.storage.local.get([asClickedKey], (result) => {
      if (result[asClickedKey] === undefined) {
        asAlreadyClicked = false
      }
    })
  }
</script>

<Modal
  open={isModalOpen}
  onClose={() => {
    isModalOpen = false
  }}
>
  <h2>You like to use the extension? Then leave a star on GitHub 🎉</h2>
  <a 
    href="https://github.com/johannchopin/gitmoji-browser-extension" 
    target="_blank"
    on:click={setAsClickedInStorage}
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