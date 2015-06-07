var gulp = require('gulp'),
		sass = require('gulp-sass'),
		browserSync = require('browser-sync').create(),
		reload = browserSync;

// Config for various settings
var config = {
	bowerDir: 'bower_components'
}

gulp.task('bower', function () {
	return bower()
		.pipe(gulp.dest(config.bowerDir))
});

// Moving FontAwesome Icons to New Folder
gulp.task('fa-icons', function() { 
    return gulp.src(config.bowerDir + '/fontawesome/fonts/**.*') 
        .pipe(gulp.dest('src/fonts')); 
});

// Moving FontAwesome CSS file to New Folder
gulp.task('fa-styles', ['fa-icons'], function () {
	return gulp.src(config.bowerDir + '/fontawesome/css/**.*') 
        .pipe(gulp.dest('src/fonts/css')); 
});

//BrowserSync for starting static server
gulp.task('browserSync', ['sass'], function () {
	browserSync.init({
		server: "./"
		// or use proxy: "wpdev.com"
	});

	gulp.watch('sass/*.scss', ['sass']);
	gulp.watch('*.php').on('change', browserSync.reload);
});

gulp.task('sass', function () {
	gulp.src('sass/**/*.scss')
		.pipe(sass({
			loadPath: [
				config.bowerDir + '/fontawesome/scss'
			]
		}))
		.pipe(gulp.dest('css'))
		.pipe(browserSync.stream());
});

gulp.task('default', ['browserSync']);