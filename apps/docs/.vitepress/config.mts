import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: 'src',

  title: 'Anki Eco',
  description: 'Enhance your Anki experience',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Templates',
        items: [
          { text: 'Overview', link: '/templates/classic/' },
          { text: 'Multiple Choice', link: '/templates/classic/mcq' },
          { text: 'True or False', link: '/templates/classic/tf' },
          { text: 'Basic', link: '/templates/classic/basic' },
          { text: 'Match', link: '/templates/classic/match' },
          { text: 'Cloze', link: '/templates/classic/cloze' },
          { text: 'Input', link: '/templates/classic/input' },
          {
            text: 'Multiple Choice (10 options)',
            link: '/templates/classic/mcq_10',
          },
          {
            text: 'Multiple Choice (26 options)',
            link: '/templates/classic/mcq_26',
          },
        ],
      },
      {
        text: 'Extension',
        items: [
          {
            text: 'Tldraw',
            link: '/extension/tldraw',
          },
        ],
      },
      { text: 'Dev Guide', link: '/guide/packager' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            {
              text: 'Packager',
              link: '/guide/packager',
            },
          ],
        },
      ],
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/ikkz/anki-eco' }],
  },

  rewrites: {
    'en/:rest*': ':rest*',
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en',
    },
    zh: {
      label: '简体中文',
      lang: 'zh',
    },
  },

  head: [
    [
      'script',
      {
        defer: '',
        'data-domain': 'anki-eco',
        src: 'https://pla.ikkz.fun/js/script.js',
      },
    ],
  ],
});
