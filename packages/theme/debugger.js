
const { exec } = require('child_process')

console.log(process.cwd())

debugger
exec('gulp', ['--cwd', require('path').join(__dirname, './packages/theme/'), 'build'])
