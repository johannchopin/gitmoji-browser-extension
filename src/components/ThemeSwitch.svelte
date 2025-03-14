<script>
  export let onChange
</script>

<style>
  .theme-switch {
    display: flex;
    justify-content: center;
  }

  button {
    background-color: transparent;
    border: 2px solid transparent;
    padding: 5px 10px;
    font-weight: bold;
    border-radius: 5px;
    margin: 0 10%;
    cursor: pointer;
    font-size: 1.5em;
  }

  .light {
    background-color: white;
    border-color: black;
  }
  
  .dark {
    color: white;
    border-color: white;
    background-color: black;
  }
</style>

<div class="theme-switch">
  <button 
    type="button" 
    class="light" 
    on:click={() => { onChange('light') }}
  >
    Light
  </button>
  <button 
    type="button" 
    class="dark" 
    on:click={() => { onChange('dark') }}
  >
    Dark
  </button>
</div>