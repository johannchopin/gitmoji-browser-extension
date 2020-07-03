<style>
  input {
    width: 60%;
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    box-shadow: 1px 1px 1px rgba(168, 182, 191, 0.6);
  }

  input:focus {
    outline: none;
  }
</style>

<input
  maxlength="70"
  type="text"
  placeholder="Search your emoji..."
  autofocus
  on:input />
