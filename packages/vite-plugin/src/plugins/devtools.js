import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

/** @returns {import('vite').Plugin} */
export const devtools = (props) => {
  return {
    name: '@anki-eco/devtools',
    apply: 'serve',
    async transformIndexHtml() {
      const entry = require.resolve('@anki-eco/dev-ui');
      return [{ tag: 'script', injectTo: 'body', attrs: { src: entry } }];
    },
  };
};
