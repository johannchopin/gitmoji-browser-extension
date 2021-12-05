<script>
  import { isMacOs } from '../helpers/browser'
</script>

<style>
  .input {
    display: flex;
    width: 60%;
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    background-color: white;
    box-shadow: 1px 1px 1px rgba(168, 182, 191, 0.6);
  }

  .input:focus-within {
    outline: -webkit-focus-ring-color auto 1px;
  }

  input {
    border: none;
    width: 100%;
  }

  kbd {
    align-items: center;
    border-radius: 3px;
    border: solid 1px black;
    color: black;
    display: flex;
    padding: 0.25rem;
    white-space: nowrap;
    font-family: Avenir;
    font-weight: bold;
    font-size: 1.2em;
  }

  :global(body.dark) .input {
    color: white;
    background-color: black;
  }

  input:focus {
    outline: none;
  }
</style>

<!-- svelte-ignore a11y-autofocus -->
<div class="input">
  <input
    maxlength="70"
    type="text"
    placeholder="Search your gitmoji..."
    autofocus
    on:input
  />

  <kbd>{isMacOs() ? '⌘' : 'Ctrl'} K</kbd>
</div>
