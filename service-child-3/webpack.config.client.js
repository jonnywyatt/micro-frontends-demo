const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  devtool: "source-map",
  mode: "production",
  entry: "./src/shared/ThingsToDo.js",
  output: {
    library: 'ThingsToDo',
    libraryTarget: 'umd',
    filename: 'ThingsToDo.js',
    path: path.resolve(__dirname, "build/client")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.join(__dirname, 'src')
        ],
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: [".js"]
  },
  externals: {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    },
    'styled-components': {
      commonjs: "styled-components",
      commonjs2: "styled-components",
      root: "styled"
    }
  },
  plugins: [new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    defaultSizes: 'gzip',
    reportFilename: './bundle-analyzer/client.html',
    openAnalyzer: false
  })]
};
