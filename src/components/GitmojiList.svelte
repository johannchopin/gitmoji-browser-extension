<script>
  import { settings } from '../stores'
  import { closePopup } from '../helpers/browser'

  import Portal from 'svelte-portal'
  import Gitmoji from './Gitmoji'
  const gitmojiColor = require('../data/gitmojiColors.json')

  export let gitmojis

  let clicked = false
  let SAVE_ANIMATION_DURATION = 500

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
    }, SAVE_ANIMATION_DURATION)
  }

  const onGitmojiSave = () => {
    animateSavedToClipboard()

    if ($settings.autoCloseAfterCopy) {
      setTimeout(() => {
        closePopup()
      }, 200)
    }
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

  :global(body.dark) #gitmojiList {
    color: white;
    background-color: black;
  }

  #saveAnimationAnchor {
    position: absolute;
    bottom: 0;
    height: 100%;
    width: 100%;
    background-color: #c5e763;
    opacity: 0.6;
    z-index: -1;
    animation: saved var(--saveAnimationDuration) forwards;
  }

  :global(body.dark) #saveAnimationAnchor {
    background-color: #455a08;
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
  {#each gitmojis as { name, code, description, emoji, present }}
    <Gitmoji
      {code}
      {emoji}
      {present}
      color={gitmojiColor[name]}
      onSave={onGitmojiSave} 
    />
  {/each}
</ul>

{#if clicked}
  <Portal target="footer">
    <span 
      id="saveAnimationAnchor" 
      style="--saveAnimationDuration: {SAVE_ANIMATION_DURATION}ms"
    />
  </Portal>
{/if}
