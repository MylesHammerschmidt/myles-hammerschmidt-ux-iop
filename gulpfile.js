var gulp = require('gulp-help')(require('gulp'));
var connect = require('gulp-connect');

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

gulp.task('watch', 'Watch task', function () {
  gulp.watch(['./**'], ['rel']);
});

gulp.task('default', 'Automatically connects to localhost:1820', ['connect', 'watch']);
