const {VueLoaderPlugin} = require('vue-loader');
const path = require('path');
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'app'),
  watch: true,
  output: {
    path: path.join(__dirname, 'public', 'assets','dist', 'js'),
    filename: "app.js",
    chunkFilename: '[name].js'
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
    }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
    }, {
        test: /\.scss$/,
        use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader'
        ]
    }, {
        test: /\.js$/,
        exclude: `${__dirname}/node_modules`,
        include: [
            path.resolve(__dirname, '/src')
        ],
        use: {
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
                presets: ["@babel/preset-env"],
                plugins: [
                    "@babel/plugin-proposal-optional-chaining",
                    "@babel/plugin-proposal-nullish-coalescing-operator"
                ]
            }
        }
    }]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
      '@': path.join(__dirname, 'src')
    },
    extensions: ['.js', '.vue']
  },
  devtool: 'source-map',
  devServer: {
    static: path.join(__dirname, 'public'),
    compress: true,
    host: 'localhost',
    port: 4043
  }
};