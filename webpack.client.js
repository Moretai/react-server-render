const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/client/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", ["@babel/preset-env", {
              targets: {
                esmodules: true,
                browsers: ['last 2 versions']
              }
            }]
          ]
        }
      }
    ]
  }
}