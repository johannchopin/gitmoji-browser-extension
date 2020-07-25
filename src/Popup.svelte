<script>
  import { gitmojis as gitmojiList } from 'gitmojis'
  import Searchbar from './components/Searchbar'
  import GitmojiList from './components/GitmojiList'
  import Footer from './components/Footer'
  import logo from './assets/gitmoji-logo.svg'

  import { onGetTabInnerHTML } from './helpers'

  let gitmojis = gitmojiList
  let filter = ''

  const getWordsToMatch = (gitmoji) => {
    const getCodeWithoutColon = (code) => {
      return code.slice(1, -1)
    }

    const descriptionWords = gitmoji.description.toLowerCase().split(' ')
    const codeWords = getCodeWithoutColon(gitmoji.code).split('_')

    return [...descriptionWords, ...codeWords, gitmoji.name]
  }

  const getFilteredGitmojis = (gitmojis, filter) => {
    let filteredGitmojis = gitmojis

    // filter according to filter
    if (filter !== '') {
      filteredGitmojis = gitmojis.filter((gitmoji) => {
        return getWordsToMatch(gitmoji).some(wordToMatch => wordToMatch.includes(filter))
      })  
    }

    // filter according to presence in tab
    filteredGitmojis = filteredGitmojis.sort((gitmojiA, gitmojiB) => {
      const shouldBeInverted = !gitmojiA.present && gitmojiB.present

      return shouldBeInverted ? 1 : -1
    })

    return filteredGitmojis
  }

  $: filteredGitmojis = getFilteredGitmojis(gitmojis, filter)

  const getGitmojisPresentInTab = (tabInnerText) => {
    return gitmojis.filter(gitmoji => {
      const stringsToSearch = [gitmoji.code, gitmoji.emoji]

      return stringsToSearch.some(stringToSearch => tabInnerText.includes(stringToSearch))
    })
  }

  const setGitmojisPresentInTab = (gitmojisPresentInTab) => {
    const clonedGitmojis = [...gitmojis]
    gitmojisPresentInTab.forEach(gitmojiPresentInTab => {
      const gitmojiPresentInTabIndex = clonedGitmojis.findIndex(gitmoji => {
        return gitmoji.name === gitmojiPresentInTab.name
      })
      gitmojiPresentInTab.present = true

      clonedGitmojis[gitmojiPresentInTabIndex] = gitmojiPresentInTab
    })

    gitmojis = clonedGitmojis
  }

  onGetTabInnerHTML((tabInnerText) => {
    setGitmojisPresentInTab(getGitmojisPresentInTab(tabInnerText))
  })

  const setFilter = (value) => {
    filter = value.target.value.toLowerCase()
  }
</script>

<style>
  @font-face {
    font-family: Avenir;
    src: url('./assets/fonts/AvenirLTStd-Roman.otf');
  }

  :root {
    --color-primary: #ffdd67;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    font-size: 10px;
    font-family: Avenir;
  }

  :global(#popup-content) {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 245px;
  }

  header {
    display: flex;
    max-width: 100%;
    box-sizing: border-box;
    justify-content: space-between;
    background-color: var(--color-primary);
    padding: 0.5em 0.5em 0.5em 1em;
  }

  .gitmoji-logo {
    min-width: 30%;
    margin-right: 1em;
  }
</style>

<header>
  <a href="https://gitmoji.carloscuesta.me/" target="_blank" class="gitmoji-logo">
    <img src={logo} alt="Gitmoji logo" />
  </a>
  <Searchbar on:input={setFilter} />
</header>

<GitmojiList gitmojis={filteredGitmojis} />

<Footer />
