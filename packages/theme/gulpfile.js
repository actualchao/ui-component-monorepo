'use strict'

const { task, series, src, dest, watch } = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')

function compile () {
  return src('./src/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(dest('./lib'))
}

function copyfont () {
  return src('./src/fonts/**')
    .pipe(cssmin())
    .pipe(dest('./lib/fonts'))
}

task('watch', function () {
  compile()
  copyfont()
  watch('./src/*.scss', series(compile, copyfont))
})

exports.build = series(compile, copyfont)
