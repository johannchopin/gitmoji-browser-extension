<script>
  export let checked = false
  export let onClick = () => {}
</script>

<style>
  .checkbox {
    position: relative;
    display: inline-block;
  }
  .checkbox label {
    width: 38px;
    height: 21px;
    background: #ccc;
    position: relative;
    display: inline-block;
    border-radius: 46px;
    transition: 0.4s;
  }
  .checkbox label:after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    left: 0;
    top: -5px;
    z-index: 2;
    background: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    transition: 0.4s;
  }
  .checkbox input {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    opacity: 0;
    cursor: pointer;
  }
  .checkbox input:hover + label:after {
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.2), 0 3px 8px 0 rgba(0, 0, 0, 0.15);
  }
  .checkbox input:checked + label:after {
    left: 10px;
  }
  .checkbox label:after {
    top: 0;
    width: 21px;
    height: 21px;
  }
  .checkbox input:checked + label {
    background: #4BD865;
  }
  .checkbox input:checked + label:after {
    left: 17px;
  }
</style>

<div class="checkbox" on:click={onClick}>
  <input type="checkbox" checked={checked} />

  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label></label>
</div>