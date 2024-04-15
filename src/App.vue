<script setup>
import { ref } from 'vue';
const mode = ref(import.meta.env.MODE);
const name = ref(import.meta.env.VITE_WEB_TITLE);
import { randomInt, uuid } from '@/utils/tool.js';
import { iqNotifyInfo, iqMsgSuccess } from '@/utils/iqoo.js';
const randomIntNum = ref();
const uuidStr = ref();
const handlerRandom = () => {
  randomIntNum.value = randomInt(1, 10);
  iqNotifyInfo('测试成功');
  uuidStr.value = uuid();
  iqMsgSuccess('测试成功');
};
</script>

<template>
  <div>
    <h1 class="text-blue-600">项目初始化</h1>
    <div class="text-[#50d71e] mb-3">当前模式：{{ mode }}</div>
    <div>这是系统标题：{{ name }}</div>
    <h2>测试Elemet-Plus组件</h2>
    <el-button type="success" @click="handlerRandom">点我生成{1-9}随机数</el-button>
    <p>随机数：{{ randomIntNum }}</p>
    <p>uuid：{{ uuidStr }}</p>
  </div>
</template>

<style scoped></style>
