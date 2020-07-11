<script>
  import Gitmoji from './Gitmoji'
  import gitmojiColor from '../data/gitmojiColors.json'

  export let gitmojis

  let clicked = false
  let saveAnimationDuration = 500

  const restartSaveAnimation = () => {
    clicked = false

    setTimeout(() => {
      clicked = true
    }, 0)
  }

  const animateSavedToClipboard = () => {
    restartSaveAnimation()

    setTimeout(() => {
      clicked = false
    }, saveAnimationDuration)
  }
</script>

<style>
  #gitmojiList {
    flex-grow: 1;
    list-style: none;
    padding-inline-start: 0;
    overflow-y: scroll;
    margin: 0;
  }

  #saveAnimationAnchor {
    position: absolute;
    bottom: 0;
    height: 1.7em; /* Approximative size of the Footer */
    width: 100%;
    background-color: #c5e763;
    opacity: 0.6;
    z-index: -1;
    animation: saved var(--saveAnimationDuration) forwards;
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
  <span 
    id="saveAnimationAnchor" 
    style="--saveAnimationDuration: {saveAnimationDuration}ms"
  />
{/if}
