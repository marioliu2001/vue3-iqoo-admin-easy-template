<script setup>
const model = defineModel('isCollapse', { type: Boolean, default: true });
</script>

<template>
  <div>子组件 {{ model }}</div>
</template>

<style scoped></style>
