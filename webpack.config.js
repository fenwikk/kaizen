const path = require("path")

module.exports = {
  entry: path.resolve(__dirname, "./index.ts"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
    library: "$",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  mode: "development",
}