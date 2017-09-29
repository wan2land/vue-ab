var path = require('path')
var webpack = require('webpack')
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './example.js'),
  output: {
    path: path.resolve(__dirname, '../example'),
    filename: 'index.js',
    library: 'VubAb',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          scss: 'vue-style-loader!css-loader!sass-loader',
          sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
          loaders: {
            js: {
               loader: 'babel-loader',
               options: {
                   presets: ['es2015-ie'],
               }
            },
          }
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015-ie'],  
        },
      },
    ]
  },
  externals: {
    vue: 'Vue',
    "vue-ab": 'VueAb',
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devtool: '#source-map',
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new UglifyJSPlugin({
      uglifyOptions: {
        ie8: true,
        ecma: 5,
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}