/**
 * @description 使用递归过滤出需要渲染在左侧菜单动态数据的列表 (需剔除 isHide == 0 隐藏的菜单)
 * @param {Array} menuList 菜单列表
 * @returns {Array}
 * */
export function getShowDynamicMenuList(menuList) {
  let newMenuList = JSON.parse(JSON.stringify(menuList));
  return newMenuList.filter((item) => {
    return item.isHide === '1' || item.meta?.isHide === '1';
  });
}

/**
 * @description 使用递归过滤出需要渲染在左侧菜单静态的列表 (isHide == 0 隐藏的菜单无需剔除)，解决字典详情isHide == 0 隐藏菜单没法访问该页面问题，最后递归菜单组件再将 isHide == 0 的去除不进行显示。
 * @param {Array} menuList 菜单列表
 * @returns {Array}
 * */
export function getShowStaticMenuList(menuList) {
  let newMenuList = JSON.parse(JSON.stringify(menuList));
  return newMenuList.filter((item) => {
    return (
      item.isHide === '1' ||
      item.meta?.isHide === '1' ||
      item.isHide === '0' ||
      item.meta?.isHide === '0'
    );
  });
}

/**
 * @description 使用递归找出所有面包屑存储到 pinia 中
 * @param {Array} menuList 菜单列表
 * @param {Array} parent 父级菜单
 * @param {Object} result 处理后的结果
 * @returns {Object}
 */
export const getAllBreadcrumbList = (menuList, parent = [], result = {}) => {
  for (const item of menuList) {
    result[item.path] = [...parent, item];

    if (item.children) getAllBreadcrumbList(item.children, result[item.path], result);
  }
  return result;
};

/**
 * @description 获取浏览器默认语言
 * @returns {String}
 */
export function getBrowserLang() {
  // @ts-ignore
  let browserLang = navigator.language ? navigator.language : navigator.browserLanguage;
  let defaultBrowserLang = '';
  if (['cn', 'zh', 'zh-cn'].includes(browserLang.toLowerCase())) {
    defaultBrowserLang = 'zh';
  } else {
    defaultBrowserLang = 'en';
  }
  return defaultBrowserLang;
}
