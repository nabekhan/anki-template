import { extname } from 'node:path';

export default () => ({
  name: 'generate-template',
  generateBundle(_, bundle) {
    Object.keys(bundle)
      .filter((fileName) => extname(fileName) !== '.html')
      .forEach((fileName) => {
        delete bundle[fileName];
      });
    this.emitFile({
      type: 'asset',
      fileName: `style.css`,
      source: ``,
    });
    this.emitFile({
      type: 'asset',
      fileName: `back.html`,
      source: `<div id="at-back-indicator"></div>{{FrontSide}}`,
    });
  },
});
