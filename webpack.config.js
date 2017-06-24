module.exports = {
    entry : './src/index.js',
    output : {
        path : __dirname,
        filename : 'infinitescroll.js'
    },
    devServer : {
        inline : true
    },
    module : {
        loaders : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                loader : 'babel-loader',
                query : {
                    presets : ['es2015','react']
                }
            },
            {
                test : /\.css|scss$/,
                loader : 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.jpe?g|png|gif|svg|woff|ttf|eot$/,
                loader:  ['url-loader']
            }
        ]
    }
}