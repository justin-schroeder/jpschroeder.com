<script lang="ts" setup>
const projects = [
  {
    title: 'FormKit',
    img: 'formkit.svg',
    description:
      'A form building framework with form architecture, components, validation, generation&nbsp;and&nbsp;more.',
    tools: ['vue', 'typescript'],
    link: 'https://formkit.com',
    source: 'https://github.com/formkit/formkit',
  },
  {
    title: 'AutoAnimate',
    img: 'autoanimate.svg',
    description:
      'A zero-config, drop-in animation utility that adds smooth transitions to your web&nbsp;app.',
    tools: ['vue', 'react', 'svelte', 'angular', 'typescript'],
    link: 'https://auto-animate.formkit.com',
    source: 'https://github.com/formkit/auto-animate',
  },
  {
    title: 'ArrowJS',
    img: 'arrowjs.svg',
    description:
      'A tool for programming reactive interfaces. It’s 2Kb, requires no build tools, has no virtual DOM, and is blazing&nbsp;fast.',
    tools: ['js', 'typescript'],
    link: 'https://www.arrow-js.com',
    source: 'https://github.com/justin-schroeder/arrow',
  },
  {
    title: 'Vue Formulate',
    img: 'vueformulate.svg',
    description:
      'The predecessor to FormKit, Vue Formulate is the easiest way to build forms with&nbsp;Vue&nbsp;2.',
    tools: ['vue'],
    link: 'https://www.vueformulate.com',
    source: 'https://github.com/wearebraid/vue-formulate',
  },
];
</script>

<template>
  <ul class="project-list">
    <li v-for="project in projects" :key="project.title">
      <a :href="project.link" class="lockup">
        <img :src="`/img/${project.img}`" alt="FormKit" class="logo" />
        <div class="details">
          <h3 class="details-title">{{ project.title }}</h3>
          <span class="details-description" v-html="project.description" />
        </div>
      </a>
      <div class="project-footer">
        <SupportedTools class="project-tools" :tools="project.tools" />
        <ul class="project-links">
          <li>
            <a :href="project.source">
              <IconGithub />
              <span>Source</span>
            </a>
          </li>
          <li>
            <a :href="project.link">
              <IconBook />
              <span>Docs</span>
            </a>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<style lang="postcss" scoped>
.project-list {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: 60em) {
    margin-left: -6em;
    margin-right: -6em;
  }

  & > li {
    background-color: white;
    border-radius: 0.5em;
    border: 1px solid #eaeaea;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 1.5em;
    padding: 1em;
    text-decoration: none;
    width: 100%;

    @media (min-width: 60em) {
      width: calc(50% - 0.75em);
    }
  }

  a.lockup {
    display: flex;
    align-items: flex-start;

    &:hover {
      text-decoration: none;
      .details-title {
        text-decoration: underline;
      }
    }
  }

  .project-footer {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left: 3.5em;
    margin-top: 1em;
    gap: 0.5em;

    ul {
      display: flex;
      list-style-type: none;
      padding: 0;
      margin: 0;
      font-size: 0.875rem;
      gap: 0.75em;

      a {
        color: #000;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 0.25em;

        &:hover {
          text-decoration: underline;
        }

        svg {
          fill: currentColor;
          width: 0.875em;
          height: 0.875em;
        }
      }

      &.project-links {
        gap: 1em;
      }
    }
  }

  .logo {
    width: 2em;
    height: auto;
    flex: 0 0 2em;
    margin-right: 1.5rem;
    margin-top: 0.25em;
    overflow: hidden;
  }
}

.details-title {
  font-size: 1em;
  margin: 0 0 0.5em;
  color: #000;
}

.details-description {
  display: block;
  font-size: 0.875rem;
  color: #666;
}
</style>
