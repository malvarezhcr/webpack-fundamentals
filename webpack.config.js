var path = require('path');

module.exports = {
    context: path.resolve('js'), // look in js directory
    entry:[
        './utils', 
        './app'
        ],
    output: {
        path: path.resolve('build/js/'), // put bundle in build/js directory
        publicPath: '/public/assets/js/', // every request to public/assets/js WP will look in the build/js folder 
        filename: 'bundle.js'
    },

    devServer: { // any request to the server will be taken to public
        contentBase: 'public'
    },
    
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: 'node_modules',
                loader: 'jshint-loader'
            }
        ],
        loaders: [
            { 
                test: /\.js$/,
                 exclude: /node_modules/,
                 loader: 'babel-loader'
            }
        ],
    },

    resolve: {
        extensions: ['', '.js']
    }
}