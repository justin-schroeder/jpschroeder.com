<script lang="ts" setup>
const articles = [
  {
    link: 'https://dev.to/justinschroeder/introducing-autoanimate-add-motion-to-your-apps-with-a-single-line-of-code-34bp',
    title:
      'Introducing AutoAnimate — add motion to your apps with a single line of&nbsp;code.',
    description:
      'When it comes to building user interfaces, a little motion goes a long way. Whether you are&nbsp;adding...',
  },
  {
    link: 'https://dev.to/justinschroeder/introducing-formkit-a-vue-3-form-building-framework-53ji',
    title: 'Introducing FormKit: A Vue 3 form building&nbsp;framework',
    description:
      'Web forms are the connective tissue of the internet. Without them people can’t request their health records,&nbsp;apply...',
  },
  {
    link: 'https://dev.to/justinschroeder/flow-state-10-practical-tips-for-getting-in-the-zone-ha9',
    title: 'Flow State: 10 Practical Tips for Getting In The&nbsp;Zone',
    description:
      'I have this recurring dream where I sit down at a piano and start playing like a virtuoso. The music flows&nbsp;out...',
  },
];
</script>

<template>
  <ul class="article-list">
    <li v-for="article in articles" :key="article.link">
      <a
        href="https://dev.to/justinschroeder/introducing-vue-formulate-truly-delightful-form-authoring-56f5"
        class="article-card"
      >
        <h3 v-html="article.title" />
        <p v-html="article.title" />
      </a>
    </li>
  </ul>
</template>

<style lang="postcss" scoped>
.article-list {
  padding: 0;
  list-style-type: none;
}
.article-card {
  padding: 1em;
  border: 1px solid #ccc;
  display: block;
  border-radius: 0.5em;
  margin-bottom: 1.5em;

  h3 {
    margin: 0 0 0.75em 0;
    color: black;
    line-height: 1.5;
  }

  p {
    margin-bottom: 0;
    font-size: 0.875em;
    color: #666;
    max-width: 35em;
  }

  &:hover {
    text-decoration: none;

    h3 {
      text-decoration: underline;
    }
  }
}
</style>
