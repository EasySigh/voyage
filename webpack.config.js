const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const env = process.env.NODE_ENV

const config = {
   mode: env || 'development'
}

module.exports = {
  devtool: "source-map",
  performance: { hints: false },
  entry: ['./resources/app.js', './resources/sass/app.scss', './resources/sass/global.scss'],
  output: {
    path: path.join(__dirname + '/public/'),
    filename: 'js/app.js',
    publicPath: '/public/'
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: [
          {
            loader: "babel-loader",
            options: {presets: ["env"]}
          }
        ]
      },
      {
        test: /\.(sass|scss)$/,
        include: path.resolve(__dirname, 'resources/sass'),
        use: ExtractTextPlugin.extract({
          use: [{
              loader: "css-loader",
              options: {
                sourceMap: true,
                minimize: true,
                url: false
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }
    ]
  },
  devServer: {
    publicPath: "/",
    contentBase: "./public",
    host: 'localhost',
    port:  '3000',
    historyApiFallback: {
      index: '/public/index.html',
    }
  },
  plugins: [
    new ExtractTextPlugin({
      filename: './css/app.css',
      allChunks: true
    })
  ]
}
