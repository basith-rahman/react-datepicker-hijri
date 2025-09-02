var webpack = require("webpack");
var path = require("path");

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: "./src/index",
  output: {
    libraryTarget: "umd",
    library: "DatePicker",
    path: path.resolve("./dist/")
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  externals: [
    {
      "react-dom": {
        root: "ReactDOM",
        commonjs2: "react-dom",
        commonjs: "react-dom",
        amd: "react-dom"
      }
    },
    {
      react: {
        root: "React",
        commonjs2: "react",
        commonjs: "react",
        amd: "react"
      }
    },
    {
      moment: {
        root: "moment",
        commonjs2: "moment",
        commonjs: "moment",
        amd: "moment"
      }
    },
    {
      "react-onclickoutside": {
        root: "onClickOutside",
        commonjs2: "react-onclickoutside",
        commonjs: "react-onclickoutside",
        amd: "react-onclickoutside"
      }
    }
  ],
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    })
  ]
};
