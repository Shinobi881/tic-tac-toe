// var webpack = require('webpack');

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     path: __dirname,
//     filename: 'dist/bundle.js'
//   },

//   // devtool: 'sourcemap',
//   module: {
//     loaders: [
//       { test: /\.js$/, exclude: /node_modules/, loader: 'babel', query: {presets: ['es2015']} },
//       { test: /\.html$/, loader:'raw'}
//     ]
//   }  


// }

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel', query: {presets: ['es2015']} }
    ]
  }
};