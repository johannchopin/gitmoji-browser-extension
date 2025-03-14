<script>
  import { page } from '../stores'
</script>

<footer>
  <nav>
    <button
      on:click={() => {
        page.goTo('settings')
      }}
    >
      settings
    </button>
    <a
      href="https://github.com/johannchopin/gitmoji-browser-extension"
      target="_blank"
      class="github"
      rel="noreferrer"
    >
      GitHub
    </a>
  </nav>
</footer>

<style>
  footer {
    position: relative;
    z-index: 1;
  }

  :global(body.dark) footer {
    background-color: black;
  }

  a {
    color: black;
    text-decoration: none;
  }

  :global(body.dark) a,
  :global(body.dark) button {
    color: white;
  }

  nav {
    display: flex;
    justify-content: center;
    padding: 0.25em 0;
  }

  nav > *:not(:last-child):after {
    content: "•";
    margin: 0 0.2em;
  }

  button {
    border: none;
    padding: 0;
    background-color: transparent;
    font-size: 1em;
    cursor: pointer;
  }

  .github {
    margin-bottom: -0.2em; /* Little trick to center the link verticaly */
  }
</style>
