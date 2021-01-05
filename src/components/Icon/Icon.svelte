<script>
  import eye from './icons/eye.svg'
  import star from './icons/star.svg'
  import arrowLeft from './icons/arrowLeft.svg'

  let className = ''

  export let name
  export { className as class }

  const icons = {
    'arrow-left': arrowLeft,
    eye,
    star
  }
</script>

<style>
  img {
    width: 1em;
  }  
</style>


<img src={icons[name]} alt={`icon: ${name}`} class="icon {name} {className}" />
