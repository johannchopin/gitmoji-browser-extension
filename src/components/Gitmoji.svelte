<script>
  export let code;
  export let emoji;
  export let color;
  export let onSave;

  const copyToClipboard = (value) => {
    navigator.clipboard.writeText(value).then(
      function () {
        console.log("Async: Copying to clipboard was successful!");
      },
      function (err) {
        console.error("Async: Could not copy text: ", err);
      }
    );

    onSave();
  };
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
  }

  .emoji:hover span,
  .emoji:focus span {
    animation-name: bounce;
    animation-duration: 0.5s;
  }

  .code {
    width: 100%;
    font-size: 1.7em;
    padding-left: 0.5em;
    font-weight: 600;
    text-align: left;
  }

  .code span {
    border-radius: 4px;
    transition-duration: 0.3s;
    border-bottom: 2px solid transparent;
    background-color: rgba(var(--color), 0.3);
    box-shadow: 0 4px rgba(var(--color), 0.6);
  }

  .code:hover,
  .code:focus {
    transition-duration: 0.3s;
    /* background-color: var(--color);
  border-left: 1px solid black; */
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
  <button
    class="emoji"
    on:click={() => {
      copyToClipboard(emoji);
    }}>
    <span>{emoji}</span>
  </button>
  <button
    class="code"
    on:click={() => {
      copyToClipboard(code);
    }}>
    <span>{code}</span>
  </button>
</li>