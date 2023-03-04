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
    img: '<svg viewBox="0 0 81.84 81.51" fill="currentColor"><path d="M81.84,81.51c-16.44-.39-32.52,.46-48.27-1.43C6.82,76.87-8.11,45.85,4.6,22.02,12.72,6.8,30-2.05,46.78,.41c17.34,2.54,31.22,15.66,34.7,32.8,.13,.65,.34,1.31,.34,1.96,.02,15.11,.02,30.23,.02,46.33h0Zm-17.4-15.91c0-10.59,.86-20.28-.22-29.76-1.31-11.54-12.27-19.89-23.6-19.6-11.93,.3-21.72,9.35-23.18,21.43-1.47,12.17,5.62,24.09,17.28,26.18,9.67,1.73,19.74,1.25,29.71,1.75h.01Z"/></svg>',
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
        <img
          v-if="!project.img.startsWith('<svg')"
          :src="`/img/${project.img}`"
          role="presentation"
          class="logo"
        />
        <span v-else v-html="project.img" class="logo" />
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
  margin-top: 3em;
  margin-bottom: 3em;

  @media (min-width: 60em) {
    margin-left: -6em;
    margin-right: -6em;
  }

  & > li {
    background-color: var(--bg);
    border-radius: 0.5em;
    border: 1px solid var(--border);
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
        color: var(--text);
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
    color: var(--text);
  }
}

.details-title {
  font-size: 1em;
  margin: 0 0 0.5em;
  color: var(--text);
}

.details-description {
  display: block;
  font-size: 0.875rem;
  color: var(--text-m);
}
</style>
