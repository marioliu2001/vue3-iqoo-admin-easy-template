<!--Logo部分已完成-->
<script setup>
import { ref, watch } from 'vue';
import settings from '@/config/settings';
import { getAssets } from '@/utils/tool.js';
import useGlobalStore from '@/stores/modules/global.js';

const globalStore = useGlobalStore();

// 接收父组件传递的参数 这里不适用3.4的defineModel新特性，因为用不到双向绑定
const props = defineProps({
  isCollapse: {
    require: false, // true显示，false隐藏
    type: Boolean
  },
  layout: {
    require: 'vertical', // 布局模式 (纵向：vertical | 分栏：columns | 经典：classic | 横向：horizontal )
    type: String
  }
});

const title = ref(settings.logoTitle); // logo旁边的标题
const titleSize = ref(`${settings.loginTitleSize}px`); // 标题字体大小
const logoUrl = ref(`${getAssets(settings.logoUrl)}`); // logo图片地址
const hidden = ref(settings.logoHidden); // logo是否隐藏
const logoSize = ref(settings.logoSize); // logo大小
const titleAnimate = ref(settings.logoTitleAnimate); // 标题动画

const logoWidth = ref(); // logo宽度

watch(
  () => globalStore.layout,
  () => {
    if (globalStore.layout === 'classic' || globalStore.layout === 'horizontal') {
      console.log('220px');
      logoWidth.value = '220px';
    } else {
      console.log('100%');
      logoWidth.value = '100%';
    }
  },
  {
    deep: true,
    immediate: true
  }
);
</script>

<template>
  <div class="iqLogo" v-show="hidden">
    <img
      class="ml-[15px] mr-[12px] iqLogoImg rounded-full select-none"
      :src="logoUrl"
      alt="avatar"
      v-if="props.layout === 'vertical' || props.layout === 'mobile'"
    />
    <img
      class="ml-[3px] mr-[12px] iqLogoImg rounded-full select-none"
      :src="logoUrl"
      alt="avatar"
      v-if="props.layout === 'classic'"
    />
    <span
      class="iqTitle font-bold max-w-[140px] truncate"
      :class="titleAnimate"
      v-text="title"
      v-show="!props.isCollapse"
    ></span>
  </div>
</template>

<style lang="scss" scoped>
.iqLogo {
  display: flex;
  align-items: center;
  width: v-bind(logoWidth);
  height: $aside-header-height;
  line-height: $aside-header-height;
  text-align: center;
}
.iqLogoImg {
  width: v-bind(logoSize);
  height: v-bind(logoSize);
}
.iqTitle {
  font-size: v-bind(titleSize);
}
</style>
