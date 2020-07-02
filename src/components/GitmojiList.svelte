<script>
import Gitmoji from './Gitmoji';
import gitmojiColor from '../data/gitmojiColors.json'

export let gitmojis;
</script>

<ul id="gitmojiList">
  {#each gitmojis as { name, code, description, emoji } }
    <Gitmoji 
      code={code}
      description={description}
      emoji={emoji}
      color={gitmojiColor[name]}
    />
  {/each}
</ul>

<style>
#gitmojiList {
  list-style: none;
  padding-inline-start: 0;
  overflow: scroll;
  height: 19em;
  margin: 0;
}
</style>