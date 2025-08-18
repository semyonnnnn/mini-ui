const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  mode: "production",
  resolve: {
    extensions: [".js"],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            ascii_only: false, // 👈 keep UTF-8 characters (like Cyrillic)
          },
        },
      }),
    ],
  },
};
