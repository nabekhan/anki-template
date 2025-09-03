export interface Props {
  note_type_id: number;
  note_type_name: string;
  deck_name: string;
  deck_id: number;
  fields: string[];
  notes: {
    fields: Record<string, string>;
  }[];
}

export declare const vitePluginAnkiTemplate: (props: Props) => any;
