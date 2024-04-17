<script setup>
import { Setting } from '@element-plus/icons-vue';
import mittBus from '@/utils/mittBus.js';
// 打开主题配置
const handleThemeDialog = () => {
  console.log('发布订阅');
  mittBus.emit('handleThemeConfig');
};
</script>

<template>
  <el-tooltip content="主题配置">
    <!-- 设置 -->
    <el-icon class="iq-icon mr-[18px]" :size="20" @click="handleThemeDialog">
      <Setting />
    </el-icon>
  </el-tooltip>
</template>

<style scoped lang="scss"></style>
