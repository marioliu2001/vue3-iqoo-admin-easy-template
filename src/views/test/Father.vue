<script setup>
import { ref } from 'vue';
import Children from './Children.vue';
const isCollapse = ref(true);
const handlerChange = () => {
  console.log('父组件', isCollapse.value);
  isCollapse.value = !isCollapse.value;
};
const visible = ref(true);
const changeVisible = () => {
  console.log('父组件调用了');
  visible.value = !visible.value;
};
</script>

<template>
  <div>
    <p>父组件 {{ isCollapse }}</p>
    <el-button @click="handlerChange">父组件切换</el-button>
    <el-button @click="changeVisible">父组件切换Visible</el-button>
    <Children v-model:isCollapse="isCollapse" :visible="visible" @change="changeVisible" />
  </div>
</template>

<style scoped></style>
