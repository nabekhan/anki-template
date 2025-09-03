import { viteSingleFile } from 'vite-plugin-singlefile';
import { devtools } from './plugins/devtools.js';
import { injectFields } from './plugins/inject-fields.js';

export interface Props {
  note_type_id: number;
  note_type_name: string;

  deck_name: string;
  deck_id: number;
  fields: string[];
  notes: { fields: Record<string, string> }[];
}

export const vitePluginAnkiTemplate = (props: Props): any => {
  return [
    viteSingleFile({
      removeViteModuleLoader: true,
    }),
    injectFields(props),
    devtools(props),
  ];
};
