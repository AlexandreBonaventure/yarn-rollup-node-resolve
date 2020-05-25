import resolve from '@rollup/plugin-node-resolve';

module.exports = {
    input: './index.js',
    output: {
        format: 'iife',
        name: 'app',
        file: './bundle.js'
    },
    plugins: [
        {
            async resolveId(id, importer) {
                console.log(id);
                
                if (id === 'lodash') {
                    return undefined
                }
            }
        },
        resolve({
            rootDir: __dirname,
            extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
            preferBuiltins: false
        }),
    ],
};