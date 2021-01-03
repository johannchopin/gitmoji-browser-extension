<script>
  import { page } from './stores'

  import Home from './pages/Home'
  import Settings from './pages/Settings'
  import Footer from './components/Footer'
  import AddGithubStarModal from './components/AddGithubStarModal'
</script>

<style>
  @font-face {
    font-family: Avenir;
    src: url('./assets/fonts/AvenirLTStd-Roman.otf');
  }

  :global(:root) {
    --color-primary: #ffdd67;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    font-size: 10px;
    font-family: Avenir;
  }

  :global(#popup-content) {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 245px;
  }

  :global(header) {
    display: flex;
    max-width: 100%;
    box-sizing: border-box;
    justify-content: space-between;
    background-color: var(--color-primary);
    padding: 0.5em 0.5em 0.5em 1em;
  }
</style>

{#if $page === 'home'}
  <Home />
{:else if $page === 'settings'}
  <Settings />
{/if}

<Footer />
<AddGithubStarModal />
