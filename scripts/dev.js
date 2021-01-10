(async function () {
  const exec = require('execa')
  const chalk = require('chalk')

  const argv = require('minimist')(process.argv.slice(2))
  const pack = argv.p || argv.package
  const independence = argv.i || argv.independence

  console.log(`waiting build dependence ${!independence ? chalk.yellow('with watch') : ''} ...`)
  exec('yarn', ['workspace', '@cgone/theme', independence ? 'build' : 'dev'])
  exec('yarn', ['workspace', '@cgone/components', independence ? 'build' : 'dev'])
  exec('yarn', ['workspace', pack || '@cgone/docs', 'serve'], { stdio: 'inherit' })
})()
