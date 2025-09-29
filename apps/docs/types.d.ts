/// <reference types="vite/client" />
declare module '*.html?raw' {
  const src: string;
  export default src;
}

declare module '*.vue' {
  import { defineComponent } from 'vue';
  const component: ReturnType<typeof defineComponent>;
  export default component;
}

declare const CLASSIC_VERSION: string;
declare const EXT_CM: {
  css: string;
  script: string;
};

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
