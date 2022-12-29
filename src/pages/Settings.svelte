<script>
  import { page, settings } from '../stores';

  import ToggleButton from '../components/ToggleButton.svelte';
  import Icon from '../components/Icon/Icon.svelte';
  import ThemeSwitch from '../components/ThemeSwitch.svelte';
  import MergeGitmojiTypeSelect from '../components/MergeGitmojiTypeSelect.svelte';

  const onThemeChange = (theme) => {
    settings.setTheme(theme);
  };
</script>

<header>
  <h1>
    <button
      on:click={() => {
        page.goTo('home');
      }}
    >
      <Icon name="arrow-left" />
    </button>
    Settings
  </h1>
</header>

<div class="settings">
  <div class="setting center">
    <ThemeSwitch onChange={onThemeChange} />
  </div>
  <div class="setting">
    <ToggleButton
      checked={$settings.autoCloseAfterCopy}
      onClick={() => {
        settings.setAutoCloseAfterCopy(!$settings.autoCloseAfterCopy);
      }}
    />
    <h2>Close extension after copying a gitmoji</h2>
  </div>
  <div class="setting">
    <ToggleButton
      checked={$settings.showDescription}
      onClick={() => {
        settings.setShowDescription(!$settings.showDescription);
      }}
    />
    <h2>Show description on hover or focus</h2>
  </div>

  <hr />

  <div class="setting">
    <ToggleButton
      checked={$settings.injectGitmoji.inject}
      onClick={() => {
        settings.setInjectGitmoji({
          ...$settings.injectGitmoji,
          inject: !$settings.injectGitmoji.inject,
        });
      }}
    />
    <h2>Inject 🔀 gitmoji in GitHub/GitLab pull-request commit's message</h2>
  </div>

  {#if $settings.injectGitmoji.inject}
    <div class="setting center">
      <MergeGitmojiTypeSelect
        type={$settings.injectGitmoji.type}
        onChange={(type) => {
          settings.setInjectGitmoji({ ...$settings.injectGitmoji, type });
        }}
      />
    </div>
  {/if}
</div>

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
    margin-right: 0.3em;
  }

  .settings {
    flex-grow: 1;
    overflow-y: scroll;
    padding: 0 0.5em;
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

  .center {
    justify-content: center;
  }

  .settings :global(.checkbox) {
    margin-right: 1em;
  }

  h2 {
    font-size: 1.5em;
  }
</style>
