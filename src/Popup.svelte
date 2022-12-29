<script>
  import { page, settings } from './stores';

  import Home from './pages/Home.svelte';
  import Settings from './pages/Settings.svelte';
  import Footer from './components/Footer.svelte';
  import AddGithubStarModal from './components/AddGithubStarModal.svelte';

  const setThemeClassToBody = (theme) => {
    const bodyClassList = document.body.classList;
    if (theme === 'dark') {
      bodyClassList.add('dark');
    } else {
      bodyClassList.remove('dark');
    }
  };

  $: setThemeClassToBody($settings.theme);
</script>

{#if $page === 'home'}
  <Home />
{:else if $page === 'settings'}
  <Settings />
{/if}

<Footer />
<AddGithubStarModal />

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
    height: 40px;
    background-color: var(--color-primary);
    padding: 0.5em 0.5em 0.5em 1em;
  }
</style>
