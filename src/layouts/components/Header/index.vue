<script setup>
import Collapse from './components/Collapse.vue';
</script>

<template>
  <div class="header">
    <div class="header-left">
      <!-- 左侧菜单展开和折叠图标 -->
      <Collapse />
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
