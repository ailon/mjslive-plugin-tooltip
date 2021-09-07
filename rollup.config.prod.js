import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';
import del from 'rollup-plugin-delete';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';
import generatePackageJson from 'rollup-plugin-generate-package-json';
import copy from 'rollup-plugin-copy';
import replace from 'rollup-plugin-replace';

const outputDir = './dist/';
const globalName = 'mjslPluginTooltip';

const banner = `/* **********************************
${pkg.name} version ${pkg.version}
@license ${pkg.license}

copyright ${pkg.author}
see README and LICENSE for details
********************************** */`;


export default [{
  input: ['./src/index.ts'],
  external: ['markerjs-live', 'tippy.js', 'tippy.js/dist/tippy.css'],
  output: {
    dir: './dts/'
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    del({ targets: ['dts/*', 'dist/*']}),
    typescript({ 
      declaration: true, 
      outDir: './dts/', 
      rootDir: './src/', 
      exclude: ['./test/**/*', './dts/**/*', './dist/**/*'] 
    }),
  ]
}, {
  input: "./dts/index.d.ts",
  output: [{ file: `./dist/${pkg.name}.d.ts`, format: "es" }],
  plugins: [dts()],
}, {
  input: ['src/index.ts'],
  external: ['markerjs-live', 'tippy.js', 'tippy.js/dist/tippy.css'],
  output: [
    {
      file: outputDir + pkg.module,
      format: 'es',
      sourcemap: true,
      banner: banner
    },
    {
      file: outputDir + pkg.main,
      name: globalName,
      format: 'umd',
      globals: {
        "markerjs-live": 'mjslive',
        "tippy.js": 'tippy'
      },
      sourcemap: true,
      banner: banner
    }
  ],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    generatePackageJson({
      baseContents: (pkg) => {
        pkg.scripts = {};
        //pkg.dependencies = {};
        pkg.devDependencies = {};
        return pkg;
      }
    }),
    typescript(),
    terser(),
    copy({
      targets: [{
        src: 'README.md', dest: 'dist'
      },{
        src: 'LICENSE', dest: 'dist'
      },]
    }),
    del({ targets: ['dts/*']})
  ]
}];
