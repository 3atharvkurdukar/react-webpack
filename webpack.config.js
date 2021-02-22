const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  ourput: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "",
  },
  devtools: "cheap-module-eval-source-map",
};
