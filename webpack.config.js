var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
var SplitByPathPlugin = require("webpack-split-by-path");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "src", "App.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    chunkFilename: "[name].js",
    filename: "[name].js"
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          "style", "css?importLoaders=1&sourceMap"
        )
      },
      {
        test: /\.js$/,
        loader: "babel"
      }
    ]
  },

  plugins: [
    new SplitByPathPlugin([
      {
        name: "vendors",
        path: path.resolve(__dirname, "node_modules")
      }
    ], {
      ignore: path.resolve(__dirname, "node_modules/css-loader/lib/css-base.js")
    }),
    new ExtractTextPlugin("[name].css", {
      allChunks: true
    })
  ]
};
