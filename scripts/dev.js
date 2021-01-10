(async function () {
  const exec = require('execa')
  const chalk = require('chalk')

  const argv = require('minimist')(process.argv.slice(2))
  const pack = argv.p || argv.package
  const independence = argv.i || argv.independence

  console.log(`waiting build dependence ${!independence ? chalk.yellow('with watch') : ''} ...`)
  exec('yarn', ['workspace', '@wujc/theme', independence ? 'build' : 'dev'])
  exec('yarn', ['workspace', '@wujc/components', independence ? 'build' : 'dev'])
  exec('yarn', ['workspace', pack || '@wujc/docs', 'serve'], { stdio: 'inherit' })
})()
