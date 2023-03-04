<template>
  <header>
    <div class="avatar-lockup">
      <div class="avatar">
        <img src="/img/avatar.jpg" alt="Portrait of Justin Schroeder" />
      </div>
      <div class="details">
        <h1>Justin Schroeder</h1>
        <Navigation />
      </div>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
header {
  margin-bottom: em;
}
.avatar-lockup {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1.5em;

  h1 {
    font-size: 1.5em;

    @media (min-width: 37em) {
      font-size: 2em;
    }

    .super-title {
      font-size: 1rem;
      display: block;
    }
  }
}

.avatar {
  width: 3.75em;
  height: 3.75em;
  flex: 0 0 3.75em;
  border-radius: 4rem;
  margin-right: 1rem;
  overflow: hidden;

  @media (min-width: 37em) {
    width: 5em;
    height: 5em;
    flex: 0 0 5em;
    margin-right: 1.5rem;
  }

  img {
    width: 100%;
    height: 100%;
    display: block;
  }
}
</style>
