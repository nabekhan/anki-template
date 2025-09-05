import { defineAdditionalConfig } from 'vitepress';

export default defineAdditionalConfig({
  themeConfig: {
    nav: [
      { text: '首页', link: '/zh/' },
      { text: '指南', link: '/zh/guide/packager' },
    ],
    sidebar: {
      '/zh/guide/': [
        {
          text: '指南',
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
