<script setup>
import { ref, toRefs } from 'vue';
import { iqMsgWarning, iqMsgBox, iqMsgSuccess } from '@/utils/iqoo.js';

// 定义弹窗的属性和默认值
const props = defineProps({
  title: { type: String, default: '给爱妃的弹框' },
  height: { type: Number, default: 300 },
  width: { type: Number, default: 650 },
  confirmText: { type: String, default: '确定' },
  cancelText: { type: String, default: '取消' },
  destroyOnClose: { type: Boolean, default: false },
  fullscreen: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  footerHidden: { type: Boolean, default: false }
});

// 弹窗的可见性状态
const visible = ref(false);
// const visible = defineModel('visible', { type: bounceOut, default: false });

// 确认按钮的加载状态
// 确定的loading，此处必须用toRefs，否则将失去响应式
const { loading } = toRefs(props);
const confirmLoading = ref(loading);

// 打开弹窗的方法
const handleOpen = () => {
  visible.value = true;
};

// 关闭弹窗的方法
const handleClose = () => {
  iqMsgBox('您确认进行关闭么？').then((confirmed) => {
    if (confirmed) {
      visible.value = false;
      iqMsgSuccess('已关闭🌻');
    } else {
      // 用户点击了取消按钮或关闭确认框
      // 执行取消操作或不做任何操作
      iqMsgWarning('已取消🌻');
    }
  });
};

// 确认提交后关闭弹窗
const handleQuickClose = () => {
  visible.value = false;
  iqMsgWarning('已提交🌻');
};
// 当前组件获取父组件传递的事件方法
const emits = defineEmits(['confirm', 'cancel']);
// 弹框的确定事件
const handleConfirm = () => {
  console.log('当我点击儿子的确定后，会调用父亲自定义事件');
  emits('confirm');
};

// 弹框的取消事件
const handleCancel = () => {
  console.log('当我点击儿子的取消后，会调用父亲自定义事件');
  emits('cancel');
};

// 暴露给父组件的方法
defineExpose({
  handleOpen,
  handleClose,
  handleQuickClose
});
</script>

<template>
  <!-- 如果需要在一个 Dialog 内部嵌套另一个 Dialog，需要使用 append-to-body 属性。 -->
  <el-dialog
    :model-value="visible"
    :title="title"
    :width="width"
    :close-on-click-modal="false"
    append-to-body
    draggable
    :destroy-on-close="destroyOnClose"
    :before-close="handleClose"
    :fullscreen="fullscreen"
    :loading="loading"
    :footer-hidden="footerHidden"
  >
    <div class="container" :style="{ height: height + 'px' }">
      <!-- 具名插槽用于插入自定义内容 -->
      <slot name="content"></slot>
    </div>
    <!-- 仅当footerHidden为false时显示底部按钮 -->
    <template #footer v-if="!footerHidden">
      <span class="dialog-footer">
        <!-- 确认按钮 -->
        <el-button type="primary" :loading="confirmLoading" @click="handleConfirm">
          {{ confirmText }}
        </el-button>
        <!-- 取消按钮 -->
        <el-button type="danger" @click="handleCancel">
          {{ cancelText }}
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
.container {
  overflow-x: initial;
  overflow-y: auto; // 超出部分滚动
}
.el-dialog {
  border-radius: 8px !important;
  padding-top: 0;

  .el-dialog__header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px !important;
    padding-bottom: 6px;

    // 暗黑模式下的背景色
    //@apply dark:bg-gray-900;
    @apply bg-gray-900;
    .el-dialog__title {
      font-family: YouYuan;
      font-size: 18px;
      font-weight: 500;
    }
  }
  .el-dialog__body {
    padding: 10px;
  }
  .el-dialog__headerbtn {
    .el-dialog__close {
      border: 1px solid;
      border-radius: 10px;
    }
  }
}
</style>
