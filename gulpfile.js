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
  gulp.watch(['./**'], ['reload']);
});

gulp.task('default', ['connect', 'watch']);
