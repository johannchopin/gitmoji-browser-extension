<script>
  export let open = false
  export let onClose
</script>

{#if open}
  <div class="modal">
    <div class="body">
      <button on:click={onClose} class="close">×</button>
      <slot></slot>
    </div>
  </div>
{/if}

<style>
  .modal {
    position: absolute;
    display: flex;
    justify-content: center;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, .5);
    animation: apparition .5s forwards;
    animation-delay: .5s;
    opacity: 0;
    z-index: 1000;
  }

  .body {
    position: relative;
    margin: 10px;
    padding: 10px;
    border-radius: 4px;
    background-color: #ff5a79;
    width: 100%;
  }

  .close {
    position: absolute;
    top: 0;
    right: 5px;
    font-size: 25px; 
    color: #ffffff;
    border: none;
    margin: 0;
    text-decoration: none;
    background-color: transparent;
    cursor: pointer;
  }

  @keyframes apparition {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
</style>