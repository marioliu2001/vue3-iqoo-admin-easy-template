<script setup>
import { ArrowDown } from '@element-plus/icons-vue';
import { ref } from 'vue';
import { Local, Session } from '@/utils/storage.js';
import { LOGIN_URL } from '@/config';
import { useRouter } from 'vue-router';

const router = useRouter();

// 退出登录
const handleLayout = () => {
  Local.clear();
  Session.clear();
  // 必须使用这个把页面缓存刷掉
  window.location.replace(LOGIN_URL);
};
// 用户头像
const avatar = ref(
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fae90b4c7-98b6-4a47-b1b3-9ee8bc71acf6%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692146441&t=6fca60f3a0d323869b81d8fb53b5dd1b'
);
const errorAvatar = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png';
// 下拉折叠
const handleCommand = (command) => {
  switch (command) {
    case 'koiMine':
      router.push('/system/personage');
      break;
    case 'logout':
      handleLayout();
      break;
  }
};
</script>

<template>
  <!-- 头像 -->
  <el-image class="w-[34px] h-[34px] rounded-full select-none user-avatar" :src="avatar">
    <template #error>
      <el-image class="w-[34px] h-[34px] rounded-full select-none user-avatar" :src="errorAvatar" />
    </template>
  </el-image>
  <el-dropdown class="ml-[10px]" :hide-on-click="false" @command="handleCommand">
    <div class="koi-dropdown">
      王将(管理员)
      <el-icon><arrow-down /></el-icon>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="koiMine">个人中心</el-dropdown-item>
        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang="scss" scoped>
// dropdown字体颜色
.koi-dropdown {
  color: var(--el-color-primary);
  white-space: nowrap; /* 不换行 */
  cursor: pointer;
  outline: none; // 去除伪元素
}
</style>
