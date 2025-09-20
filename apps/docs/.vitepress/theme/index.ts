import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import ClassicTemplateDemo from './components/ClassicTemplateDemo.vue';
import './index.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ClassicTemplateDemo', ClassicTemplateDemo);
  },
} as Theme;
