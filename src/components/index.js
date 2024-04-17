import IqDialog from './IqDialog/Index.vue';
import MobileDrawer from './MobileDrawer/index.vue';

// 对外暴露插件对象，注册全局组件
const components = {
  IqDialog,
  MobileDrawer
};
export default {
  // install方法， Object.keys()得到对象所有的key
  install(app) {
    Object.keys(components).forEach((key) => {
      app.component(key, components[key]);
    });
  }
};
