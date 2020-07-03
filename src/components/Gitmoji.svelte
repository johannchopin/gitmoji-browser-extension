<script>
  export let code
  export let emoji
  export let color
  export let onSave

  const copyToClipboard = (value) => {
    navigator.clipboard.writeText(value)
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
    display: flex;
    margin: 0.5em;
    box-shadow: 0 1px 2px 0 rgba(168, 182, 191, 0.6);
    border-radius: 4px;
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
  }
  .code:hover span::before,
  .code:focus span::before {
    position: absolute;
    content: "";
    margin-top: 1em; /* put it under the text */
    width: 100%;
    height: 0.2em;
    background-color: var(--color);
    animation: 0.15s slideRight;
  }

  @keyframes slideRight {
    from {
      width: 0em;
    }
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
</li>
