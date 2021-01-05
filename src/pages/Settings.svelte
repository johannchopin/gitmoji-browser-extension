<script>
  import { page, settings } from '../stores'

  import ToggleButton from '../components/ToggleButton'
  import Icon from '../components/Icon/Icon'
  import ThemeSwitch from '../components/ThemeSwitch'

  const onThemeChange = (theme) => {
    settings.setTheme(theme)
  }
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

  .settings {
    flex-grow: 1;
    overflow-y: scroll;
    padding: 0 .5em;
    padding-top: 20px;
  }

  :global(body.dark) .settings {
    color: white;
    background-color: black;
  }


  .setting {
    display: flex;
    align-items: center;
  }

  .setting.theme {
    justify-content: center;
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
  <div class="setting theme">
    <ThemeSwitch onChange={onThemeChange}/>
  </div>
  <div class="setting">
    <ToggleButton 
      checked={$settings.autoCloseAfterCopy} 
      onClick={() => {
        settings.setAutoCloseAfterCopy(!$settings.autoCloseAfterCopy)
      }}
    />
    <h2>Close extension after copying a gitmoji</h2>
  </div>
</div>
