var gulp = require('gulp');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var webserver = require('gulp-webserver');
var gutil = require('gulp-util');
var fs = require('fs');
var prettify = require('gulp-prettify');
var sass = require('gulp-sass');


gulp.task('default', ['webserver', 'watchSass']);

gulp.task('watchSass', function() {
	gulp.watch('./scss/*.scss', ['sass']);
});

var host = "localhost",
	port = "8000";

gulp.task('webserver', function() {
	gulp.src('./')
		.pipe(webserver({
				livereload: true,
				directoryListing: {
				enable: true,
				host: host,
				port: port,
			},
			open: "http://" + host + ":" + port + "/app/index.html",
		}));
});

gulp.task('sass', function() {
	gulp.src('./app/scss/*.scss')
		.pipe(sass())
		.on('error', swallowError)
		.pipe(gulp.dest('./app/css'));
});

function swallowError(error) {
	//If you want details of the error in the console
	console.log(error.toString());
	this.emit('end');
}