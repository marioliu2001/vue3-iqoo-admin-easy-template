<script setup>
import ThemeConfig from '@/layouts/components/ThemeConfig/index.vue';
import { computed } from 'vue';
// 全局主题配置
import useGlobalStore from '@/stores/modules/global.js';
import LayoutVertical from '@/layouts/LayoutVertical/index.vue';
import LayoutColumns from '@/layouts/LayoutColumns/index.vue';
import LayoutClassic from '@/layouts/LayoutClassic/index.vue';
import LayoutHorizontal from '@/layouts/LayoutHorizontal/index.vue';

const LayoutComponent = {
  vertical: LayoutVertical,
  columns: LayoutColumns,
  classic: LayoutClassic,
  horizontal: LayoutHorizontal
};

// 全局主题仓库
const globalStore = useGlobalStore();
// 获取布局格式
const layout = computed(() => globalStore.layout);
</script>

<template>
  <ThemeConfig />
  <component :is="LayoutComponent[layout]" />
</template>

<style scoped></style>
