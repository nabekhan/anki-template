import { defineAdditionalConfig } from 'vitepress';

export default defineAdditionalConfig({
  themeConfig: {
    nav: [
      { text: '首页', link: '/zh/' },
      { text: '指南', link: '/zh/guide/quick-start' },
    ],
    sidebar: {
      '/zh/guide/': [
        {
          text: 'Vite 插件',
          items: [
            {
              text: '快速开始',
              link: '/zh/guide/quick-start',
            },
            {
              text: '开发指南',
              link: '/zh/guide/kit',
            },
          ],
        },
        {
          text: '其他工具',
          items: [
            {
              text: '打包器',
              link: '/zh/guide/packager',
            },
          ],
        },
      ],
    },
  },
});
