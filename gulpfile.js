var gulp = require('gulp');
  connect = require('gulp-connect');

gulp.task('default', function() {
  connect();
});

gulp.task('connect', function() {
  connect.server({
    root: './',
    port: 1820,
    livereload: true
  });
});

gulp.task('reload', function () {
  gulp.src('./**')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./Unit2/*.html'], ['reload']);
});

gulp.task('my-tests', function() {
  connect.server({
    port: 1820
  });

  connect.serverClose();
});

gulp.task('default', ['connect', 'watch']);
