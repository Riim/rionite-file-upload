var rimraf = require('rimraf');
var merge = require('merge2');
var gulp = require('gulp');
var runSequence = require('run-sequence');
var ts = require('gulp-typescript');
var webpack = require('gulp-webpack');

var tsProject = ts.createProject('tsconfig.json', {
	typescript: require('typescript')
});

gulp.task('clean', function(done) {
	rimraf('dist', done);
});

gulp.task('copy-sources', function() {
	return gulp.src('src/**/*')
		.pipe(gulp.dest('dist'));
});

gulp.task('compile', function() {
	var tsResult = gulp.src(['typings.d.ts', 'dist/components/**/*.ts'])
		.pipe(tsProject());

	return merge([
		tsResult.dts.pipe(gulp.dest('dist/components')),
		tsResult.js.pipe(gulp.dest('dist/components'))
	]);
});

gulp.task('default', function(done) {
	runSequence('clean', 'copy-sources', 'compile', done);
});
