<script setup lang="ts">
onMounted(() => {
  // function grain(size: number, color: string) {
  //   const canvas = document.createElement('canvas');
  //   const ctx = canvas.getContext('2d')!;
  //   canvas.width = window.innerWidth;
  //   canvas.height = window.innerHeight;
  //   ctx.fillStyle = color;
  //   for (let x = 0; x < canvas.width; x++) {
  //     for (let y = 0; y < canvas.height; y++) {
  //       if (Math.random() > 0.5) {
  //         ctx.fillRect(x, y, 1, 1);
  //       }
  //     }
  //   }
  //   // document.body.append(canvas);
  //   canvas.toBlob((blob) => {
  //     const url = URL.createObjectURL(blob!);
  //     document.documentElement.style.setProperty('--bg-image', `url(${url})`);
  //   });
  // }
  // // grain(256, 'hsla(0, 100%, 0%, 1)');
  // // grain(256, 'hsla(0, 100%, 100%, 1)');
  // grain(256, 'rgba(125, 125, 125, .5)');
});
</script>
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
          <a href="https://twitter.com/justinschroeder" class="icon-link">
            <IconTwitter class="icon" role="presentation" />
            <span>Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://dev.to/justinschroeder" class="icon-link">
            <IconDevTo class="icon" role="presentation" />
            <span>Dev.to</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jpschroeder/" class="icon-link">
            <IconLinkedIn class="icon" role="presentation" />
            <span>LinkedIn</span>
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
