var gulp = require('gulp');
var bower = require('gulp-bower');
var concat = require('gulp-concat');
var filter = require('gulp-filter');

gulp.task('bower', function() {
 const f = filter(['**/*.js','**/*.css','!**/index.js']);
 return bower({ directory: 'bower_components' })
	.pipe(f)
    .pipe(gulp.dest('app/lib'))
});
