import { resolve } from 'path';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

const pageData = {
    '/index.html': {
        title: 'Home Page',
    },
    '/pages/about/index.html': {
        title: 'About Page',
    },
    '/pages/node/index.html': {
        title: 'Node js',
    },
};

const partDirs = [
    'src/partials',
    'src/pages/about',
    'src/pages/node',
    'src/pages/oop',
];

export default defineConfig({
    root: 'src',
    base: '',
    plugins: [handlebars({
        context(pagePath) {
            return pageData[pagePath];
        },
        // partialDirectory: resolve(__dirname, 'src/partials'),
        partialDirectory: partDirs,
        reloadOnPartialChange: true,
    })],
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                about: resolve(__dirname, 'src/pages/about/index.html'),
                node: resolve(__dirname, 'src/pages/node/index.html'),
                oop: resolve(__dirname, 'src/pages/oop/index.html'),
                constructors: resolve(__dirname, 'src/pages/oop/constructors/index.html')
            }
        }
    },
});