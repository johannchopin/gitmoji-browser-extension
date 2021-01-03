<script>
  import { page } from '../stores'

  import Icon from '../components/Icon/Icon'
</script>

<style>
  h1 {
    display: flex;
    align-items: center;
    color: black;
  }

  button {
    border: none;
    padding: 0;
    background-color: transparent;
    font-size: 1em;
  }

  header :global(.icon) {
    margin-right: .3em;
  }

  .settings {
    flex-grow: 1;
  }
</style>

<header>
  <h1>
    <button on:click={() => { page.goTo('home') }}>
      <Icon name='arrow-left' />
    </button>
    Settings
  </h1>
</header>
<div class="settings"></div>