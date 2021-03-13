import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';
import { uglify } from "rollup-plugin-uglify";
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/index.js',
    output: {
        dir: 'dist',
        format: 'cjs'
    },
    plugins: [
        del({
            targets: 'dist/*'
        }),
        copy({
            targets: [{ src: 'src/static/public/*', dest: 'dist/static/public' }]
        }), copy({
            targets: [{ src: 'src/views', dest: 'dist' }]
        }),
        commonjs(),
        uglify()
    ],
    external: ['express', 'path', 'node-fetch', 'ejs']
};