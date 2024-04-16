<script setup>
import { ref, onBeforeUnmount, onMounted } from 'vue';
import { useDebounceFn } from '@vueuse/core';
import Collapse from './components/Collapse.vue';
import BreadCrumb from './components/BreadCrumb.vue';
import SearchMenu from './components/SearchMenu.vue';

/** 监听窗口大小变化，进行是否显示 */
const showTool = ref(true); // 是否显示
const screenWidth = ref(0); // 屏幕宽度

// 设置屏幕宽度和是否显示工具的初始值
const setInitialValues = () => {
  screenWidth.value = document.body.clientWidth;
  showTool.value = screenWidth.value >= 865;
};

const listeningWindow = useDebounceFn(() => {
  screenWidth.value = document.body.clientWidth;
  showTool.value = screenWidth.value >= 865;
}, 100);
// 添加事件监听器
window.addEventListener('resize', listeningWindow, false);
// 在组件挂载时设置初始值
onMounted(setInitialValues);
// 在组件卸载前移除事件监听器
onBeforeUnmount(() => {
  window.removeEventListener('resize', listeningWindow);
});
</script>

<template>
  <div class="header">
    <div class="header-left">
      <!-- 左侧菜单展开和折叠图标 -->
      <Collapse />
      <!-- 面包屑 -->
      <BreadCrumb v-if="showTool" />
    </div>
    <div class="header-right">
      <!-- 搜索菜单 -->
      <SearchMenu v-if="showTool" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  height: $aside-header-height;
  .header-left {
    display: flex;
    align-items: center;
    overflow: hidden;
    white-space: nowrap;
  }
  .header-right {
    display: flex;
    align-items: center;
  }
}
</style>
