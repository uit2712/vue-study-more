const path = require("path");

module.exports = {
  runtimeCompiler: true,
  css: {
    modules: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "./src")
      },
      extensions: ['.js', '.vue', '.json']
    }
  },
}