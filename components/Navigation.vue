<template>
  <nav>
    <ul>
      <li>
        <a href="https://twitter.com/intent/user?screen_name=jpschroeder"
          >@jpschroeder</a
        >
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#projects">Open source</a>
      </li>
      <li>
        <a href="#articles">Articles</a>
      </li>
      <li>
        <a href="#speaking">Speaking</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="postcss" scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1em;

  a {
    color: var(--text-m);
    text-decoration: none;
    font-size: 0.875em;
    line-height: 1.4;
    font-weight: 600;
    border-radius: 0.5em;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
