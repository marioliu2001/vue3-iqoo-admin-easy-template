// 使用 Element Plus UI 库的通知工具函数

// 导入 Element Plus 的默认主题
import 'element-plus/es/components/message/style/css';
import 'element-plus/es/components/message-box/style/css';
import 'element-plus/es/components/notification/style/css';
// 从 Element Plus 导入所需的通知组件
import { ElMessage, ElMessageBox, ElNotification } from 'element-plus';

/**
 * 显示具有可定制选项的通知。
 * @param {string} message - 显示在通知中的消息。
 * @param {string} [title="温馨提示"] - 通知的标题。
 * @param {number} [duration=2000] - 通知关闭前的持续时间。
 * @param {string} [type="info"] - 通知的类型（"info", "success", "error", "warning"）。
 * @param {boolean} [parseHtml=false] - 是否将消息作为 HTML 解析。
 */
function showNotification(
  message,
  title = '温馨提示',
  duration = 2000,
  type = 'info',
  parseHtml = false
) {
  // 在显示新通知之前关闭所有现有通知
  ElNotification.closeAll();
  // 使用提供的选项显示通知
  ElNotification({
    message: message,
    title: title,
    type: type,
    duration: duration,
    showClose: true,
    dangerouslyUseHTMLString: parseHtml
  });
}

// 为不同通知类型导出单独的函数
export const iqNotifyInfo = (message, title, duration, parseHtml) =>
  showNotification(message, title, duration, 'info', parseHtml);
export const iqNotifySuccess = (message, title, duration, parseHtml) =>
  showNotification(message, title, duration, 'success', parseHtml);
export const iqNotifyError = (message, title, duration, parseHtml) =>
  showNotification(message, title, duration, 'error', parseHtml);
export const iqNotifyWarning = (message, title, duration, parseHtml) =>
  showNotification(message, title, duration, 'warning', parseHtml);

/**
 * 显示具有可定制选项的消息提示。
 * @param {any} message - 显示在消息提示中的内容。
 * @param {number} [duration=2000] - 消息提示关闭前的持续时间。
 * @param {string} [type='info'] - 消息提示的类型。
 * @param {boolean} [plain=false] - 是否纯色。
 * @param {boolean} [showClose=true] - 是否可以手动关闭。
 * @param {boolean} [parseHtml=false] - 是否将内容作为 HTML 解析。
 */
function showMessage(
  message,
  duration = 2000,
  type = 'info',
  plain = false,
  showClose = true,
  parseHtml = false
) {
  // 在显示新消息提示之前关闭所有现有的消息提示
  ElMessage.closeAll();
  // 使用提供的选项显示消息提示
  ElMessage({
    message: message,
    type: type,
    plain: plain,
    duration: duration,
    showClose: showClose,
    dangerouslyUseHTMLString: parseHtml
  });
}

// 为不同消息提示类型导出单独的函数
export const iqMsgInfo = (message, duration, plain, showClose, parseHtml) =>
  showMessage(message, duration, 'info', plain, showClose, parseHtml);
export const iqMsgSuccess = (message, duration, plain, showClose, parseHtml) =>
  showMessage(message, duration, 'success', plain, showClose, parseHtml);
export const iqMsgError = (message, duration, plain, showClose, parseHtml) =>
  showMessage(message, duration, 'error', plain, showClose, parseHtml);
export const iqMsgWarning = (message, duration, plain, showClose, parseHtml) =>
  showMessage(message, duration, 'warning', plain, showClose, parseHtml);

/**
 * 显示确认消息框。
 * @param {any} message - 消息框中显示的内容。
 * @param {string} [title="温馨提示："] - 消息框的标题。
 * @param {string} [confirmButtonText="确定"] - 确认按钮的文本。
 * @param {string} [cancelButtonText="取消"] - 取消按钮的文本。
 * @param {string} [type="warning"] - 消息框的类型。
 * @returns {Promise<boolean>} - 用户操作的结果。
 */
export function iqMsgBox(
  message = '您确定进行关闭么？',
  title = '温馨提示：',
  confirmButtonText = '确定',
  cancelButtonText = '取消',
  type = 'warning'
) {
  return ElMessageBox.confirm(message, title, {
    confirmButtonText,
    cancelButtonText,
    type,
    draggable: true,
    dangerouslyUseHTMLString: true
  })
    .then(() => true)
    .catch(() => false);
}

/**
 * 显示 HTML 内容的确认消息框。
 * @param {any} message - 消息框中显示的 HTML 内容。
 * @param {string} [title="温馨提示："] - 消息框的标题。
 * @param {string} [confirmButtonText="确定"] - 确认按钮的文本。
 * @param {string} [cancelButtonText="取消"] - 取消按钮的文本。
 * @param {string} [type="warning"] - 消息框的类型。
 * @returns {Promise<boolean>} - 用户操作的结果。
 */
export function iqMsgBoxHtml(
  message = `<p style="color: teal">您确定进行关闭么？</p>`,
  title = '温馨提示：',
  confirmButtonText = '确定',
  cancelButtonText = '取消',
  type = 'warning'
) {
  return iqMsgBox(message, title, confirmButtonText, cancelButtonText, type);
}

/**
 * 显示带输入框的消息框。
 * @param {any} message - 消息框中显示的内容。
 * @param {string} [title="温馨提示："] - 消息框的标题。
 * @param {string} [confirmButtonText="确定"] - 确认按钮的文本。
 * @param {string} [cancelButtonText="取消"] - 取消按钮的文本。
 * @param {string} [type="info"] - 消息框的类型。
 * @param {RegExp} [inputPattern=""] - 输入框的验证正则表达式。
 * @param {string} [inputErrorMessage="无效输入"] - 输入验证失败时的错误消息。
 * @returns {Promise<any>} - 用户操作的结果。
 */
export function iqMsgBoxPrompt(
  message = '请输入需要修改的数据？',
  title = '温馨提示：',
  confirmButtonText = '确定',
  cancelButtonText = '取消',
  type = 'info',
  inputPattern = /.*/,
  inputErrorMessage = '无效输入'
) {
  return ElMessageBox.prompt(message, title, {
    confirmButtonText,
    cancelButtonText,
    type,
    inputPattern,
    inputErrorMessage,
    draggable: true
  })
    .then((res) => res.value)
    .catch(() => false);
}

/**
 * 显示警告消息框。
 * @param {any} message - 消息框中显示的内容。
 * @param {string} [title="温馨提示："] - 消息框的标题。
 * @param {string} [confirmButtonText="确定"] - 确认按钮的文本。
 * @param {string} [type="info"] - 消息框的类型。
 * @returns {Promise<boolean>} - 用户操作的结果。
 */
export function iqMsgBoxAlert(
  message = '请输入需要修改的数据？',
  title = '温馨提示：',
  confirmButtonText = '确定',
  type = 'info'
) {
  return ElMessageBox.alert(message, title, {
    confirmButtonText,
    type,
    draggable: true
  })
    .then(() => true)
    .catch(() => false);
}
