const relativeCwd = '.' + process.cwd().replace(__dirname, '') // -> ./packages/my-vue-app
module.exports = require(relativeCwd + '/postcss.config.js')
