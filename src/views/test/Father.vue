<script setup>
import { ref } from 'vue';
import Children from './Children.vue';
const isCollapse = ref(true);
const handlerChange = () => {
  console.log('父组件', isCollapse.value);
  isCollapse.value = !isCollapse.value;
};
</script>

<template>
  <div>
    <p>父组件{{ isCollapse }}</p>
    <el-button @click="handlerChange">切换</el-button>
    <Children v-model:isCollapse="isCollapse" />
  </div>
</template>

<style scoped></style>
