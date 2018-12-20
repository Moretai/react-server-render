module.exports = {
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
          ],
          plugins: [
            ["@babel/plugin-proposal-decorators", { "legacy": true }],
            ["@babel/plugin-proposal-class-properties", { "loose" : true }]
          ]
        }
      }
    ]
  }
}