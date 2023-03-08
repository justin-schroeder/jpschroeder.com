<template>
  <nav>
    <ul>
      <li>
        <NuxtLink href="#hi-there">About</NuxtLink>
      </li>
      <li>
        <NuxtLink href="#open-source">Open source</NuxtLink>
      </li>
      <li>
        <NuxtLink href="#articles">Articles</NuxtLink>
      </li>
      <li>
        <NuxtLink href="#speaking">Speaking</NuxtLink>
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
