const path = require("path");

const vueSrc = "./src";

module.exports = {
  runtimeCompiler: true,
  css: {
    modules: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, vueSrc)
      },
      extensions: ['.js', '.vue', '.json']
    }
  },
}