<script>
  import Gitmoji from './Gitmoji'
  import gitmojiColor from '../data/gitmojiColors.json'

  export let gitmojis

  let clicked = false

  const animateSavedToClipboard = () => {
    clicked = true

    setTimeout(() => {
      clicked = false
    }, 500)
  }
</script>

<style>
  #gitmojiList {
    list-style: none;
    padding-inline-start: 0;
    overflow-y: scroll;
    margin: 0;
  }

  #saveAnimationAnchor {
    position: absolute;
    bottom: 0;
    height: 1.6em; /* Approximative size of the Footer */
    width: 100%;
    background-color: #c5e763;
    opacity: 0.6;
    z-index: -1;
    animation: saved 0.5s forwards;
  }

  @keyframes saved {
    0% {
      width: 0;
    }

    45% {
      width: 100%;
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
</style>

<ul id="gitmojiList">
  {#each gitmojis as { name, code, description, emoji }}
    <Gitmoji
      {code}
      {emoji}
      color={gitmojiColor[name]}
      onSave={animateSavedToClipboard} />
  {/each}
</ul>

{#if clicked}
  <span id="saveAnimationAnchor" />
{/if}
