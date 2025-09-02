var path = require("path");
var webpack = require("webpack");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: ["./docs-site/src/boot"],
  output: {
    path: path.resolve("./docs-site/"),
    filename: "bundle.js",
    publicPath: "/"
  },
  resolve: {
    extensions: [".js", ".jsx"],

    // Needed to direct the docs to the local version of the datepicker, this is not needed for
    // normal setup.
    alias: {
      "react-datepicker/dist/react-datepicker.css": path.resolve(
        "./src/stylesheets/datepicker.scss"
      ),
      "react-datepicker": path.resolve("./src/index.jsx")
    }
  },
  module: {
    rules: [
      { 
        test: /\.jsx?$/, 
        use: "babel-loader", 
        exclude: /node_modules/ 
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css"
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    })
  ]
};
