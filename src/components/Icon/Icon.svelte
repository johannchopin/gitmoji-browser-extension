<script>
  import eye from './icons/eye.svg'
  import star from './icons/star.svg'
  import arrowLeft from './icons/arrowLeft.svg'

  let className = ''
  let icon

  export let name
  export { className as class }

  $: switch (name) {
    case 'eye':
      icon = eye
      break

    case 'star':
      icon = star
      break

    case 'arrow-left':
      icon = arrowLeft
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
