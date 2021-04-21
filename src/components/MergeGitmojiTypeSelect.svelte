<script>
  export let type
  export let onChange
</script>

<style>
  .merge-gitmoji-type-select {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 15%;
  }
</style>

<div class="merge-gitmoji-type-select">
  <h3>Select which type of gitmoji you want to use (code/emoji):</h3>

  <!-- svelte-ignore a11y-no-onchange -->
  <select value={type} on:change={(value) => { onChange(value.target.value) }}>
    <option value="emoji">🔀 </option>
    <option value="code">
      :twisted_rightwards_arrows:
    </option>
	</select>
</div>