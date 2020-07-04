<script>
  import { gitmojis } from 'gitmojis'
  import Searchbar from './components/Searchbar'
  import GitmojiList from './components/GitmojiList'
  import Footer from './components/Footer'
  import logo from './assets/gitmoji-logo.svg'

  let searchValue = ''
  let matchingGitmojis

  const setSearchValue = (value) => {
    searchValue = value.target.value
  }

  const getFilteredGitmojis = (filter) => {
    const loweredFilter = filter.toLowerCase()

    return gitmojis.filter((gitmoji) => {
      return (
        gitmoji.description.toLowerCase().includes(loweredFilter)
      || gitmoji.name.toLowerCase().includes(loweredFilter)
      || gitmoji.code.includes(loweredFilter)
      )
    })
  }

  $: matchingGitmojis = getFilteredGitmojis(searchValue)
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
  <Searchbar on:input={setSearchValue} />
</header>

<GitmojiList gitmojis={matchingGitmojis} />

<Footer />
