var gulp = require('gulp'),
		concat = require('gulp-concat'),
		rename = require('gulp-rename'),
		sass = require('gulp-sass'),
		uglify = require('gulp-uglify');

gulp.task('sass', function () {
	gulp.src('sass/style.scss')
		.pipe(sass({
			style: 'compressed'
		}))
		.pipe(gulp.dest('css'))
		.pipe(concat('style.css'))
		.pipe(gulp.dest('css'))
		.pipe(uglify());
});

gulp.task('watch', function () {
	gulp.watch('sass/style.scss', ['sass']);
});

gulp.task('default', ['watch', 'sass']);