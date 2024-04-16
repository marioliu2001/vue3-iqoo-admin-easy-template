<script setup>
import { onMounted } from 'vue';
import { useTheme } from '@/utils/theme.js';
const { initThemeConfig } = useTheme();

// 初始化主题配置
onMounted(() => {
  initThemeConfig();
});
</script>

<template>
  <el-config-provider>
    <router-view />
  </el-config-provider>
</template>

<style scoped></style>
