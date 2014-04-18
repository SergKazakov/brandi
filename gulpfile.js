'use strict';
var gulp = require('gulp');
var browserSync = require('browser-sync');
var wiredep = require('wiredep').stream;
var prefix = require('gulp-autoprefixer');
var sass = require('gulp-ruby-sass');
var spritesmith = require('gulp.spritesmith');

gulp.task('sprite', function () {
    var spriteData = gulp.src('img/*.png').pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: '_sprite.scss',
        padding: 15,
        algorithm: 'binary-tree',
        cssFormat: 'scss'
    }));
    spriteData.img.pipe(gulp.dest('img'));
    spriteData.css.pipe(gulp.dest('sass/core'));
});

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