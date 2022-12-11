<script lang="ts" setup>
import { ref } from 'vue';
const years = ref(new Date().getFullYear() - 2001);
</script>

<template>{{ years }} years</template>
