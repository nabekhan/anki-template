#!/usr/bin/env node
import { rollupOptions } from './rollup.js';
import { readJson } from './utils.js';
import Koa from 'koa';
import { extname } from 'node:path';
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
  let html = '';
  const koa = new Koa();
  koa.use(async (ctx) => {
    ctx.body = html;
  });
  koa.listen(3000);
  console.log('listen 3000');
  const watcher = watch({
    ...inputOptions,
    watch: {
      buildDelay: 1000,
      clearScreen: false,
      exclude: ['node_modules/**', 'dist/**'],
      skipWrite: true,
    },
  });
  watcher.on('event', (args) => {
    if (args.code === 'BUNDLE_END') {
      console.log('BUNDLE_END');
      args.result.generate(outputOptions).then(({ output }) => {
        html =
          '<!DOCTYPE html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>';
        output.reverse().forEach((file) => {
          if (
            extname(file.fileName) === '.html' &&
            !file.fileName.endsWith('back.html')
          ) {
            html += file.source;
          }
        });
      });
    }
  });
  watcher.on('event', ({ result }) => {
    if (result) {
      result.close();
    }
  });
}
