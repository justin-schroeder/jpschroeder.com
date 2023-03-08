<template>
  <div class="container">
    <Header />
    <main id="main-content">
      <ContentDoc path="/" />
    </main>
    <footer>
      <div class="legal">
        &copy; 2005-<ClientOnly>{{ new Date().getFullYear() }}</ClientOnly>
        Justin Schroeder. No particular rights reserved, but it would be mighty
        nice to give credit where&nbsp;applicable.
      </div>
      <ul class="socials">
        <li>
          <NuxtLink href="https://twitter.com/jpschroeder" class="icon-link">
            <IconTwitter class="icon" role="presentation" />
            <span>Twitter</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink href="https://dev.to/justinschroeder" class="icon-link">
            <IconDevTo class="icon" role="presentation" />
            <span>Dev.to</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            href="https://www.linkedin.com/in/jpschroeder/"
            class="icon-link"
          >
            <IconLinkedIn class="icon" role="presentation" />
            <span>LinkedIn</span>
          </NuxtLink>
        </li>
      </ul>
    </footer>
  </div>
</template>

<style scoped>
footer {
  margin-top: 5em;
}
.legal {
  max-width: 35em;
  font-size: 0.875em;
  color: var(--text-m);
}
.socials {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: 2em;
  margin-bottom: 0;
  overflow: hidden;
}

.socials li {
  margin-right: 1em;
  display: flex;
  align-items: center;
}
.socials li span {
  position: absolute;
  left: -9999px;
}
.icon {
  width: 1.5em;
}

a.icon-link {
  color: var(--text);
  display: block;
}
a.icon-link:hover {
  color: var(--link);
}
</style>
