<script>
  import { settings } from '../stores'
  import Icon from './Icon/Icon'
  import { setClipboard } from '../helpers/clipboard'

  export let code
  export let emoji
  export let description
  export let present = false
  export let color
  export let onSave

  const copyToClipboard = (value) => {
    setClipboard(value)
    onSave()
  }
</script>

<style>
  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  .gitmoji {
    position: relative;
    display: flex;
    margin: 0.5em;
  }

  .gitmoji, .description {
    box-shadow: 0 1px 2px 0 rgba(168, 182, 191, 0.6);
    border-radius: 4px;
  }

  :global(body.dark) .gitmoji {
    box-shadow: 0 1px 2px 0 rgb(50, 50, 50);
  }

  .emoji {
    font-size: 2em;
    margin: auto;
    min-width: 1.9em;
    height: 1.7em;
    background: var(--color);
    border-radius: 4px 0 0 4px;
  }

  .emoji span {
    display: block;
    position: relative;
    box-sizing: border-box;
  }

  .emoji:hover,
  .emoji:focus {
    transition: background-color 0.2s;
    background-color: white;
    box-shadow: inset 0 0 1px 3px var(--color);
  }

  .emoji:hover span,
  .emoji:focus span {
    animation: 0.5s bounce;
  }

  .code {
    width: 100%;
    font-size: 1.7em;
    padding-left: 0.5em;
    font-weight: 600;
    text-align: left;
  }

  .code span {
    position: relative;
    border-radius: 4px;
    transition-duration: 0.3s;
    background-color: rgba(var(--color), 0.3);
    box-shadow: 0 4px rgba(var(--color), 0.6);
    border-bottom: 4px transparent;
    z-index: 1;
  }
  .code span::before {
    position: absolute;
    content: "";
    width: 0;
    margin-top: 1em; /* put it under the text */
    height: 0.2em;
    border-radius: 4px;
    background-color: var(--color);
    transition: width 0.15s;
    z-index: -1;
  }

  .code:hover span::before,
  .code:focus span::before {
    width: 100%;
  }

  .description {
    visibility: hidden;
    position: absolute;
    top: 70%;
    left: 50%;
    width: 90%;
    padding: 5px;
    padding-bottom: 2px; /* padding minus border-bottom */
    margin: 0;
    font-size: 1.5em;
    transform: translateX(-50%);
    border: solid 3px var(--color);
    border-top: none;
    border-right: none;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    transition: top .3s;
    background-color: rgba(255, 255, 255, .8);
    backdrop-filter: blur(5px);
    z-index: 2;
  }

  :global(body.dark) .description {
    background-color: rgba(0, 0, 0, .8);
  }

  .emoji:hover ~ .description,
  .emoji:focus ~ .description,
  .code:hover ~ .description,
  .code:focus ~ .description {
    visibility: visible;
    top: 100%;
  }

  .indicator-group {
    position: absolute;
    right: 1em;
    top: 50%;
    transform: translateY(-50%);
  }

  :global(body.dark .gitmoji .eye)  {
    opacity: 0.7;
    filter: invert(100%);
  }

  :global(.gitmoji .eye) {
    width: 1.3em;
    opacity: 0.3;
    cursor: help;
  }

  /*
  This code has been obtained from:
  https://github.com/daneden/animate.css/blob/master/source/attention_seekers/bounce.css
  */
  @keyframes bounce {
    from,
    20%,
    53%,
    80%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      transform: translate3d(0, 0, 0);
    }

    40%,
    43% {
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      transform: translate3d(0, -0.2em, 0);
    }

    70% {
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      transform: translate3d(0, -0.1em, 0);
    }

    90% {
      transform: translate3d(0, -0.05em, 0);
    }
  }
</style>

<li class="gitmoji" style="--color:{color}">
  <button class="emoji" on:click={copyToClipboard(emoji)}>
    <span>{emoji}</span>
  </button>
  <button class="code" on:click={copyToClipboard(code)}>
    <span>{code}</span>
  </button>

  <div class="indicator-group">
    {#if present}
      <div title="this gitmoji appears in the page">
        <Icon name='eye' class='eye' />            
      </div>
    {/if}
  </div>

  {#if $settings.showDescription}
    <p class="description">{description}</p>
  {/if}
</li>
