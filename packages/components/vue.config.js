
const pkg = require('./package.json')

module.exports = {
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  },
  chainWebpack: chain => {
    if (pkg && pkg.version) {
      chain.plugin('define')
        .tap(([options]) => {
          options['process.env'].VUE_APP_NAME = `"${pkg.name}"`
          options['process.env'].VUE_APP_VERSION = `"${pkg.version}"`
          return [options]
        })
    }
  }
}
