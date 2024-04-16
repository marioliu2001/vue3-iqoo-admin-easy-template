<script setup>
import { ref, watch, provide, onBeforeUnmount } from 'vue';
import { useDebounceFn } from '@vueuse/core';
import { storeToRefs } from 'pinia';
import useKeepAliveStore from '@/stores/modules/keepAlive.js';
import useGlobalStore from '@/stores/modules/global.js';

const globalStore = useGlobalStore();
const keepAliveStore = useKeepAliveStore();
const { keepAliveName } = storeToRefs(keepAliveStore);
// 路由动画
const { transition } = storeToRefs(globalStore);

// 刷新当前路由页面缓存方法
const isRouterShow = ref(true);
const refreshCurrentPage = (val) => (isRouterShow.value = val);
provide('refresh', refreshCurrentPage);

/** 监听窗口大小变化，折叠侧边栏 */
const screenWidth = ref(0);
const showTabs = ref(true);
const listeningWindow = useDebounceFn(() => {
  screenWidth.value = document.body.clientWidth;
  if (!globalStore.isCollapse && screenWidth.value < 1200)
    globalStore.setGlobalState('isCollapse', true);
  if (globalStore.isCollapse && screenWidth.value > 1200)
    globalStore.setGlobalState('isCollapse', false);
  if (screenWidth.value < 520) {
    showTabs.value = false;
  } else {
    showTabs.value = true;
  }
}, 100);
window.addEventListener('resize', listeningWindow, false);
onBeforeUnmount(() => {
  window.removeEventListener('resize', listeningWindow);
});
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="transition" mode="out-in" appear>
      <keep-alive :max="16" :include="keepAliveName">
        <component
          :is="Component"
          :key="route.fullPath"
          v-if="isRouterShow"
          class="bg-[#F6F9FE] dark:bg-black"
        />
      </keep-alive>
    </transition>
  </router-view>
</template>

<style lang="scss" scoped>
@import '../../../styles/transition.scss';
</style>
