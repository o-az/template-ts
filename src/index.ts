/**
 * These are examples to demonstrate some features of this template.
 * All can safely be deleted.
 *
 * Run this file with `pnpm run-file src/index.ts` from project root
 *
 */

/**
 * dotenv support
 */
import 'dotenv/config';
console.log({ 'process.env.NODE_ENV': process.env.NODE_ENV });

/**
 * Supports importing from CommonJS and ESM
 */
import cjs from './examples/commonjs.cjs';
import * as esm from './examples/esm.mjs';
console.log('\n');
console.log({ cjs: cjs.hello, esm: esm.hello });

/**
 * Supports Webassembly (.wasm) import and execution
 */
import * as Wasm from './examples/add.wasm';
console.log(Wasm.add(1, 2));

/**
 * Supports data:imports and import assertions
 */
// This will be the first thing to log
import 'data:text/javascript,console.log("hello!");';
//@ts-ignore
import _ from 'data:application/json,"world!"' assert { type: 'json' };
console.log({ '\nimport _ from data:application/json,"world!"': _ });

/**
 * Supports import.meta.resolve
 */
const dependencyAsset = await import.meta.resolve?.('./examples/data.json', import.meta.url);
console.log('\n');
console.log({ dependencyAsset });

/**
 * Supports top level await
 */
const requestJsonPost = await fetch('https://jsonplaceholder.typicode.com/posts/1');
const jsonPost = await requestJsonPost.json();
console.log('\n');
console.log({ jsonPost });
