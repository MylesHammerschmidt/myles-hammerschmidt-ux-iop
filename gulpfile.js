'use strict';

var gulp = require('gulp-help')(require('gulp'));
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');

gulp.task('connect', 'Connects to localhost:1820', function() {
  connect.server({
    root: './',
    port: 1820,
    livereload: true
  });
});

gulp.task('rel', 'Reload task', function () {
  gulp.src('./*')
    .pipe(connect.reload());
});

gulp.task('sass', function () {
  return gulp.src('./**/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', 'Watch task', function () {
  gulp.watch(['./**/*.html', './**/*.css'], ['rel']);
  gulp.watch(['./**/sass/*.scss'], ['sass']);
  gulp.watch(['./**/*.js', '!./node_modules/**/*.js'], ['lint']);
});

gulp.task('lint', function() {
  return gulp.src(['./**/*.js', '!./node_modules/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('default', 'Automatically connects to localhost:1820', ['connect', 'watch', 'lint']);
