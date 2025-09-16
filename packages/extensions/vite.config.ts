/// <reference types='vitest' />
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import * as path from 'path';
import fs from 'node:fs';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/extensions',
  plugins: [
    dts({
      entryRoot: 'src',
      tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    // lib: fs.readdirSync('./src/entries').map((entry) => ({
    //   entry: `./src/entries/${entry}`,
    //   name: `@anki-eco/extensions/${entry}`,
    //   fileName: entry,
    //   formats: ['es' as const],
    // })),
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: Object.fromEntries(
        fs
          .readdirSync(path.join(__dirname, 'src', 'entries'))
          .map((entry) => [entry, `./src/entries/${entry}`])
      ),
      name: 'AnkiEcoExtensions',
      fileName: (_, entry) => entry.split('.')[0] + '.js',
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ['iife' as const],
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: [],
    },
  },
}));
