<script>
  import Gitmoji from "./Gitmoji";
  import gitmojiColor from "../data/gitmojiColors.json";

  export let gitmojis;
</script>

<style>
  #gitmojiList {
    list-style: none;
    padding-inline-start: 0;
    overflow-y: scroll;
    height: 19em;
    margin: 0;
  }
</style>

<ul id="gitmojiList">
  {#each gitmojis as { name, code, description, emoji }}
    <Gitmoji {code} {emoji} color={gitmojiColor[name]} />
  {/each}
</ul>
