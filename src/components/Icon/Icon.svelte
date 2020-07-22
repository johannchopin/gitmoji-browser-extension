<script>
  import eye from './icons/eye.svg'

  let className = ''
  let icon

  export let name
  export { className as class }

  $: switch (name) {
    case 'eye':
      icon = eye
      break
  
    default:
      break
  }
</script>

<style>
  img {
    width: 1em;
  }  
</style>


<img src={icon} alt={`icon: ${name}`} class="icon {name} {className}" />
