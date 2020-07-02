<footer>
  <nav>
    <a href="https://gitmoji.carloscuesta.me/about" target="_blank">About</a>
    <a href="https://gitmoji.carloscuesta.me/contributors">Contributors</a>
    <a href="https://github.com/carloscuesta/gitmoji">GitHub</a>
  </nav>
</footer>

<style>
a {
  color: black;
  text-decoration: none;
}

a:not(:first-of-type)::before {
  content: '-';
  margin: 0 .25em;
}

nav {
  display: flex;
  justify-content: center;
  padding: .25em 0;
}
</style>