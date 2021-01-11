const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // '@cgone/components': path.resolve(__dirname, '../components/src')
      }

    },
    module: {
      rules: [
        {
          test: /\.md$/,
          use: [
            {
              loader: 'vue-loader',
              options: {
                compilerOptions: {
                  preserveWhitespace: false
                }
              }
            },
            {
              loader: path.resolve(__dirname, './build/md-loader/index.js')
            }
          ]
        }
      ]
    }
  }
}
