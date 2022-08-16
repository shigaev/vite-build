import { resolve } from 'path'
import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars';

const pageData = {
    '/index.html': {
        title: 'Home Page',
    },
    '/pages/nested/index.html': {
        title: 'Nested Page',
    },
};

const partDirs = [
    'src/partials',
    'src/pages/about'
]

export default defineConfig({
    root: 'src',
    base: '',
    plugins: [handlebars({
        context(pagePath) {
            return pageData[pagePath];
        },
        // partialDirectory: resolve(__dirname, 'src/partials'),
        partialDirectory: partDirs,
    })],
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                about: resolve(__dirname, 'src/pages/about/index.html'),
                nested: resolve(__dirname, 'src/pages/nested/index.html')
            }
        }
    },
})