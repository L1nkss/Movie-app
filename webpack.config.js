const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new Dotenv({
      path: "./.env",
    }),
  ],
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    publicPath: "/",
    historyApiFallback: true,
    compress: true,
    port: 9000,
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@constants": path.resolve(__dirname, "src/constants/"),
      "@redux": path.resolve(__dirname, "src/redux/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
    },
  },
};
