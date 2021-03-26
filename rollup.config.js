import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';
import CleanCSS from 'clean-css';
import { uglify } from "rollup-plugin-uglify";
import commonjs from '@rollup/plugin-commonjs';

export default [{
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
            targets: [
                { src: 'src/static/public/scripts/*', dest: 'dist/static/public/scripts' },
                { src: 'src/static/public/styles/images/*', dest: 'dist/static/public/styles/images' },
                { src: 'src/static/public/service-worker.js', dest: 'dist/static/public' },
                { src: 'src/static/public/manifest.json', dest: 'dist/static/public' },
                { src: 'src/views', dest: 'dist' },
                {
                    src: 'src/static/public/styles/style.css',
                    dest: 'dist/static/public/styles',
                    transform: (contents) => new CleanCSS().minify(contents).styles,
                }]
        }),
        commonjs(),
        uglify()
    ],
    external: ['express', 'path', 'node-fetch', 'ejs', 'compression', 'dotenv']
},
{
    input: 'src/static/public/scripts/filter.js',
    output: {
        dir: 'dist/static/public/scripts',
        format: 'es'
    },
    plugins: [
        uglify()
    ]
}];