'use strict';
var gulp = require('gulp');
var browserSync = require('browser-sync');
var wiredep = require('wiredep').stream;
var prefix = require('gulp-autoprefixer');
var sass = require('gulp-ruby-sass');

gulp.task('browser-sync', function () {
    browserSync.init(["*html", "css/*.css"], {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('sass', function () {
    gulp.src('sass/main.scss')
        .pipe(sass({
            style: 'expanded',
            sourcemap: true
        }))
        .pipe(gulp.dest('css'));
});


gulp.task('wiredep', function () {
    gulp.src('*.html')
        .pipe(wiredep({
            directory: 'bower_components',
        }))
        .pipe(gulp.dest('.'));
});

gulp.task('autoprefixer', function () {
    gulp.src('css/main.css')
        .pipe(prefix("last 1 version", "ff 3.6", "Chrome 4.0", "Opera 11.1", "Safari 4.0", "ie >= 8", {
            cascade: true
        }))
        .pipe(gulp.dest('css'));
});


gulp.task('default', ['sass', 'browser-sync'], function () {
    gulp.watch("sass/**/*.scss", ['sass']);
});