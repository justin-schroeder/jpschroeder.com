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
          <a href="https://twitter.com/justinschroeder">
            <IconTwitter class="icon" />
            <span>Twitter</span>
          </a>
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
  justify-content: space-between;
  margin-top: 2em;
  margin-bottom: 0;
  overflow: hidden;
}

.socials li span {
  position: absolute;
  left: -9999px;
}
.icon {
  width: 1.5em;
}
</style>
