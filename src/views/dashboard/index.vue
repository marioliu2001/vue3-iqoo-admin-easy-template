<script setup>
import { getDayText } from '@/utils/tool.js';
import { iqNotifySuccess } from '@/utils/iqoo.js';
import IqCard from './components/IqCard.vue';
import { onMounted, reactive, watch } from 'vue';
import { storeToRefs } from 'pinia';
import useGlobalStore from '@/stores/modules/global.js';
import IqLeftChart from '@/views/dashboard/components/IqLeftChart.vue';
import IqRightChart from '@/views/dashboard/components/IqRightChart.vue';
import IqTimeline1 from '@/views/dashboard/components/IqTimeline1.vue';
import IqTimeline2 from '@/views/dashboard/components/IqTimeline2.vue';
onMounted(() => {
  // 时间问候语
  iqNotifySuccess(getDayText(), '欢迎回来~');
});

// 头像
const avatar =
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fae90b4c7-98b6-4a47-b1b3-9ee8bc71acf6%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692146441&t=6fca60f3a0d323869b81d8fb53b5dd1b';

// Gitee地址
const handleGitee = () => {
  window.open('https://gitee.com/BigCatHome/koi-ui', '_blank');
};

// GitHub地址
const handleGitHub = () => {
  window.open('https://github.com/yuxintao6/koi-ui', '_blank');
};

// 自己写的
const globalStore = useGlobalStore();
const font = reactive({
  color: 'rgba(0, 0, 0, .15)'
});
const { isDark } = storeToRefs(globalStore);
watch(
  isDark,
  () => {
    font.color = isDark.value ? 'rgba(255, 255, 255, .15)' : 'rgba(0, 0, 0, .15)';
    console.log(font.color);
  },
  {
    immediate: true
  }
);
</script>

<template>
  <div class="p-[6px]">
    <!--最上面-->
    <el-card class="rounded-md dark:bg-black" shadow="hover">
      <!--<div class="flex items-center" v-waterMarker="{ text: 'IQOO-ADMIN', textColor: '#D9D9D9' }">-->
      <el-watermark :font="font" :content="['Element+', 'Element Plus']">
        <div class="flex items-center">
          <img class="w-[60px] h-[60px] rounded-full select-none" :src="avatar" alt="avatar" />
          <div class="pl-[20px]">
            <div class="font-bold pb-[8px] whitespace-nowrap">
              <span>KOI-ADMIN🌻</span><span class="c-#409EFF" @click="handleGitee">[Gitee]</span
              ><span>/</span><span class="c-orange" @click="handleGitHub">[GitHub]</span>
            </div>
            <div class="font-bold whitespace-nowrap">燕雀安知鸿鹄之志~🌻</div>
          </div>
        </div>
      </el-watermark>
    </el-card>
    <!--四个数字显示Card-->
    <IqCard />
    <!--左右图表-->
    <!--<el-row :gutter="20" class="mt-[5px]">-->
    <el-row :gutter="20" class="">
      <!-- 注意：如果不进行操作数组，使用index当key没有问题，若是数组会用来增删改查则不能使用index当key。 -->
      <el-col :span="12" :lg="12" :md="12" :sm="24" :xs="24">
        <el-card class="rounded-md dark:bg-black" shadow="hover">
          <IqLeftChart />
        </el-card>
      </el-col>
      <el-col :span="12" :lg="12" :md="12" :sm="24" :xs="24">
        <el-card class="rounded-md dark:bg-black" shadow="hover">
          <IqRightChart />
        </el-card>
      </el-col>
    </el-row>
    <!--最下方时间线-->
    <el-row :gutter="20" class="mt-[5px]">
      <!-- 注意：如果不进行操作数组，使用index当key没有问题，若是数组会用来增删改查则不能使用index当key。 -->
      <el-col :span="12" :lg="12" :md="12" :sm="24" :xs="24">
        <el-card class="rounded-md dark:bg-black" shadow="hover">
          <IqTimeline1 />
        </el-card>
      </el-col>
      <el-col :span="12" :lg="12" :md="12" :sm="24" :xs="24">
        <el-card class="rounded-md dark:bg-black" shadow="hover">
          <IqTimeline2 />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss"></style>
