<script setup>
import { ref, computed } from 'vue';
import settings from '@/config/settings.js';
import Main from '../components/Main/index.vue';
import Logo from '../components/Logo/index.vue';
import Header from '../components/Header/index.vue';
import AsideSubMenu from '../components/Menu/AsideSubMenu.vue';
import useGlobalStore from '@/stores/modules/global.js';
import { staticRouter } from '@/routers/modules/staticRouter.js';
import { useRoute } from 'vue-router';

const route = useRoute();
const globalStore = useGlobalStore();

// 动态绑定左侧菜单animate动画
const menuAnimate = ref(settings.menuAnimate);
// 默认激活菜单
const activeMenu = computed(() => (route.meta.activeMenu ? route.meta.activeMenu : route.path));
// 菜单列表
const menuList = staticRouter;
// 菜单展开收起宽度
const menuHoverCollapse = ref(settings.asideMenuHoverCollapse);
</script>

<template>
  <el-container class="layout-container">
    <!--侧边-->
    <el-aside
      class="layout-aside transition-all"
      :style="{
        width: !globalStore.isCollapse
          ? globalStore.menuWidth + 'px'
          : settings.asideMenuCollapseWidth
      }"
    >
      <Logo :isCollapse="globalStore.isCollapse" :layout="globalStore.layout" />
      <el-scrollbar class="layout-scrollbar">
        <!-- :unique-opened="true" 子菜单不能同时展开 -->
        <el-menu
          :default-active="activeMenu"
          :collapse="globalStore.isCollapse"
          :collapse-transition="false"
          :uniqueOpened="globalStore.uniqueOpened"
          :router="false"
          :class="menuAnimate"
        >
          <AsideSubMenu :menuList="menuList" />
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <el-container>
      <el-header class="layout-header">
        <Header />
      </el-header>
      <el-main class="layout-main">
        <Main />
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.layout-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .layout-aside {
    z-index: $layout-aside-z-index; // 左侧菜单层级
    padding-right: $aside-menu-padding-right; // 左侧布局右边距（用于悬浮和选中更明显）
    padding-left: $aside-menu-padding-left; // 左侧布局左边距（用于悬浮和选中更明显）
    background-color: var(--el-menu-bg-color);
    border-right: none;
    box-shadow: $aside-menu-box-shadow; // 左侧布局右边框阴影
  }
  .layout-header {
    height: $aside-header-height;
    background-color: var(--el-header-bg-color);
  }
  .layout-main {
    box-sizing: border-box;
    padding: 0;
    overflow-x: hidden;
    background-color: var(--el-bg-color);
  }
}
// 去除菜单右侧边框
.el-menu {
  border-right: none;
}
.layout-scrollbar {
  width: 100%;
  height: calc(100vh - $aside-header-height);
}
</style>
<style lang="scss">
/** 菜单悬浮折叠宽度 */
.el-menu--collapse {
  width: v-bind(menuHoverCollapse) !important;
}
</style>
