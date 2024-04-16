<script setup>
// 使用defineModel从父组件接受（双向绑定）
const model = defineModel('isCollapse', { type: Boolean, default: true });
const changeIsCollapse = () => {
  model.value = !model.value;
};
// 使用defineProps从父组件接受
defineProps({ visible: Boolean });
// 接受事件
const emit = defineEmits(['change']);
</script>

<template>
  <div>
    <div>子组件 {{ model }}</div>
    <el-button type="success" @click="changeIsCollapse">子组件切换</el-button>
    <el-button type="success" @click="emit('change')">子组件更换Visible</el-button>
    <div>子组件中visible {{ visible }}</div>
    <div v-show="visible">查看是否显示</div>
  </div>
</template>

<style scoped></style>
