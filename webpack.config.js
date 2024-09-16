const path = require('path');

module.exports = {
    entry: './src/index.js', // Точка входа
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.min.js',
        library: 'SkeletonTabs', // Имя глобальной переменной
        libraryTarget: 'umd',
        umdNamedDefine: true,
        globalObject: 'this'
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Все файлы с расширением .js
                exclude: /node_modules/, // Исключая папку node_modules
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    mode: 'production' // Режим сборки (production/development)
};