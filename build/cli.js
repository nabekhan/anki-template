#!/usr/bin/env node
import { rollupOptions } from './rollup.js';
import { readJson } from './utils.js';
import { parseArgs } from 'node:util';
import { rollup } from 'rollup';
import { watch } from 'rollup';

const templates = await readJson('./templates.json');

const { values: args } = parseArgs({
  options: {
    dev: {
      type: 'string',
    },
    locale: {
      type: 'string',
      default: 'en',
    },
  },
});

if (!args.dev) {
  const ids = Object.keys(templates);
  const locales = ['en', 'zh'];
  for (const id of ids) {
    for (const locale of locales) {
      console.log(`build id:${id} locale:${locale}`);
      const { inputOptions, outputOptions } = await rollupOptions({
        id,
        locale,
      });
      const bundle = await rollup(inputOptions);
      bundle.write(outputOptions);
      bundle.close();
    }
  }
} else {
  const { inputOptions, outputOptions } = await rollupOptions({
    id: args.dev,
    locale: args.locale,
    dev: true,
  });
  const watcher = watch({
    ...inputOptions,
    output: outputOptions,
    watch: {
      buildDelay: 1000,
      clearScreen: false,
      exclude: ['node_modules/**', 'dist/**'],
    },
  });
  watcher.on('event', ({ result }) => {
    if (result) {
      result.close();
    }
  });
}
