/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue}' // 这里记得加上vue，官网直接拷贝过来是没有的
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#E5E3FA'
      }
    }
  },
  plugins: []
};
