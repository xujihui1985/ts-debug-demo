var gulp = require('gulp');
var mocha = require('gulp-mocha');
var cp = require('child_process');
var spawn = cp.spawn;

gulp.task('test', function() {
	gulp.src('./test/*.test.js', {read: false})
		.pipe(mocha({reporter: 'spec'}))
});

gulp.task('build', function() {
  cp.execSync('tsc', {
    cwd: __dirname
  });
});

gulp.task('watch', function() {
  spawn('tsc', ['-w'], {
    cwd: __dirname,
  });
});