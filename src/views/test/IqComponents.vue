<script setup>
import { ref } from 'vue';

// 弹窗的状态和属性
const dialogTitle = ref('自定义标题');
const confirmText = ref('确认了');
const cancelText = ref('取消了');

/** 添加 AND 修改弹出框 */
const iqDialogRef = ref();
const openDialog = () => {
  console.log('点击了按钮');
  iqDialogRef.value.handleOpen();
};

// 确认操作的方法
const handleConfirm = () => {
  console.log('确认操作');
  confirmLoading.value = true;
  setTimeout(() => {
    iqDialogRef.value.handleQuickClose();
  }, 3000);
};

// 取消操作的方法
const handleCancel = () => {
  console.log('取消操作');
  iqDialogRef.value.handleClose();
};
// loading
const confirmLoading = ref(false);
</script>

<template>
  <!-- 其他内容 -->
  <div>
    <el-button type="primary" @click="openDialog">打开弹窗</el-button>
    <!-- 使用封装的Dialog组件 -->
    <IqDialog
      ref="iqDialogRef"
      :title="dialogTitle"
      :confirm-text="confirmText"
      :cancel-text="cancelText"
      :loading="confirmLoading"
      @confirm="handleConfirm"
      @cancel="handleCancel"
    >
      <!-- 插槽内容 -->
      <template #content>
        <!-- 这里放置弹窗内容 -->
        <p>这是弹窗的内容</p>
      </template>
    </IqDialog>
  </div>
</template>

<style scoped></style>
