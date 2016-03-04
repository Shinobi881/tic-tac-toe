module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname,
    filename: "dist/bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel', query: {presets: ['es2015', 'react']} },
      { test: /\.scss$/, loaders: [ 'style', 'css', 'autoprefixer?browsers=last 3 versions', 'sass?outputStyle=expanded'] },
      { test: /\.css/, loader: 'style!css' }

    ]
  }
};