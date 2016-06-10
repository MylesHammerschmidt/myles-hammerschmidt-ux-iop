var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: './',
    port: 1820,
    livereload: true
  });
});

gulp.task('reload', function () {
  connect.reload();
});

gulp.task('watch', function () {
  gulp.watch(['./**'], ['reload']);
});

gulp.task('default', ['connect', 'watch']);
