<template>
  <nav>
    <ul>
      <li>
        <a href="#hi-there">About</a>
      </li>
      <li>
        <a href="#open-source">Open source</a>
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
  position: absolute;
  top: calc(100% + 0.75em);
  white-space: nowrap;
  left: 0;

  li {
    margin-right: 1em;
  }

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
