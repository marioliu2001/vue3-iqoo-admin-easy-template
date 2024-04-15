<script setup>
import { ref } from 'vue';
const mode = ref(import.meta.env.MODE);
const name = ref(import.meta.env.VITE_WEB_TITLE);
</script>

<template>
  <div>
    <h1 class="text-blue-600">项目初始化</h1>
    <div class="text-[#50d71e] mb-3">当前模式：{{ mode }}</div>
    <div>这是系统标题：{{ name }}</div>
  </div>
</template>

<style scoped></style>
