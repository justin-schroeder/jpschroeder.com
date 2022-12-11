<script lang="ts" setup>
import type { PropType } from 'vue';
defineProps({
  tools: {
    type: Array as PropType<string[]>,
    required: true,
  },
});
</script>

<template>
  <ul class="tools">
    <li v-for="tool in tools" :key="tool">
      <img :src="`/img/${tool}.svg`" :alt="tool" />
    </li>
  </ul>
</template>

<style lang="postcss" scoped>
.tools {
  display: flex;
  padding: 0;
  list-style-type: none;

  img {
    display: block;
    height: 1rem;
    width: auto;
  }
}
</style>
