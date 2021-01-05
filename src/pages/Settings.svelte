<script>
  import { page, settings } from '../stores'
  import { isInExtension } from '../helpers/browser'

  import ToggleButton from '../components/ToggleButton'
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
    cursor: pointer;
  }

  header :global(.icon) {
    margin-right: .3em;
  }

  ul {
    padding-inline-start: 0;
  }

  li {
    list-style-type: none;
    display: flex;
    align-items: center;
  }

  .settings {
    flex-grow: 1;
    overflow-y: scroll;
    padding: 0 .5em;
  }

  .settings :global(.checkbox) {
    margin-right: 1em;
  }

  h2 {
    font-size: 1.5em;
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

<div class="settings">
  <ul>
    <li>
      <ToggleButton checked={$settings.autoCloseAfterCopy} onClick={() => { 
        settings.setAutoCloseAfterCopy(!$settings.autoCloseAfterCopy)
      }} />
      <h2>Close extension after copying a gitmoji</h2>
    </li>
  </ul>
</div>