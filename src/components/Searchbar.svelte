<style>
  input {
    width: 60%;
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    box-shadow: 1px 1px 1px rgba(168, 182, 191, 0.6);
  }

  :global(body.dark) input {
    color: white;
    background-color: black;
  }

  input:focus {
    outline: none;
  }
</style>

<!-- svelte-ignore a11y-autofocus -->
<input
  maxlength="70"
  type="text"
  placeholder="Search your gitmoji..."
  autofocus
  on:input />
