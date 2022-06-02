import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import url from '@rollup/plugin-url';
import svelte from 'rollup-plugin-svelte';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import { string } from 'rollup-plugin-string';
import config from 'sapper/config/rollup.js';
import seqPreprocessor from 'svelte-sequential-preprocessor';
import sveltePreprocess from 'svelte-preprocess';
import image from 'svelte-image';
import svgicons from 'rollup-plugin-svg-icons';
import alias from '@rollup/plugin-alias';
import pkg from './package.json';

const preprocess = seqPreprocessor([
  sveltePreprocess({
    postcss: true,
    sass: true,
  }),
  image({
    placeholder: 'blur',
  }),
]);

const projectRootDir = path.resolve(__dirname);
console.log(projectRootDir);
const aliases = alias({
  entries: [
    {
      find: '@',
      replacement: path.resolve(projectRootDir, 'src'),
    },
    {
      find: '@ui',
      replacement: path.resolve(projectRootDir, 'src/components/ui'),
    },
    { find: '@api', replacement: path.resolve(projectRootDir, 'api') },
    {
      find: '@consts',
      replacement: path.resolve(projectRootDir, 'src/consts'),
    },
    {
      find: '@styles',
      replacement: path.resolve(projectRootDir, 'src/styles'),
    },
    {
      find: '@directives',
      replacement: path.resolve(projectRootDir, 'src/directives'),
    },
  ],
});

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn) =>
  (warning.code === 'MISSING_EXPORT' && /'preload'/.test(warning.message)) ||
  (warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) ||
  onwarn(warning);

export default {
  client: {
    aliases,
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),

      svelte({
        dev,
        hydratable: true,
        emitCss: true,
        preprocess,
        css: (css) => {
          css.write('static/bundle.css');
        },
      }),

      svgicons({
        inputFolder: 'src/icons',
        output: 'static/bundle.svg',
      }),

      url({
        sourceDir: path.resolve(__dirname, 'src/node_modules/images'),
        publicPath: '/client/',
      }),
      resolve({
        browser: true,
        dedupe: ['svelte'],
      }),
      commonjs(),

      string({
        include: './src/node_modules/*.vrtx',
      }),

      legacy &&
        babel({
          extensions: ['.js', '.mjs', '.html', '.svelte'],
          babelHelpers: 'runtime',
          exclude: ['node_modules/@babel/**'],
          presets: [
            [
              '@babel/preset-env',
              {
                targets: '> 0.25%, not dead',
              },
            ],
          ],
          plugins: [
            '@babel/plugin-syntax-dynamic-import',
            [
              '@babel/plugin-transform-runtime',
              {
                useESModules: true,
              },
            ],
          ],
        }),

      !dev &&
        terser({
          module: true,
        }),
    ],

    preserveEntrySignatures: false,
    onwarn,
  },

  server: {
    aliases,
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      replace({
        'process.browser': false,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      svelte({
        generate: 'ssr',
        hydratable: true,
        emitCss: true,
        dev,
        preprocess,
        css: (css) => {
          css.write('static/bundle.css');
        },
      }),

      url({
        sourceDir: path.resolve(__dirname, 'src/node_modules/images'),
        publicPath: '/client/',
        emitFiles: false, // already emitted by client build
      }),
      resolve({
        dedupe: ['svelte'],
      }),
      commonjs(),

      string({
        include: './src/node_modules/*.vrtx',
        include: './src/components/background/circles/*.svg',
      }),
    ],
    external: Object.keys(pkg.dependencies).concat(require('module').builtinModules),

    preserveEntrySignatures: 'strict',
    onwarn,
  },

  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      commonjs(),
      !dev && terser(),
    ],

    preserveEntrySignatures: false,
    onwarn,
  },
};
