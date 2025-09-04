import { viteSingleFile } from 'vite-plugin-singlefile';
import { devtools } from './plugins/devtools.js';
import { injectFields } from './plugins/inject-fields.js';
import { packager } from './plugins/packager.js';

export const vitePluginAnkiTemplate = (props) => {
  return [
    viteSingleFile({
      removeViteModuleLoader: true,
    }),
    injectFields(props),
    devtools(props),
    packager(props),
  ];
};
