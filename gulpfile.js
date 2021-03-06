'use strict';
var gulp            = require('gulp'),
    browserSync     = require('browser-sync'),
    wiredep         = require('wiredep').stream,
    prefix          = require('gulp-autoprefixer'),
    sass            = require('gulp-ruby-sass'),
    spritesmith     = require('gulp.spritesmith'),
    uncss           = require('gulp-uncss'),
    csso            = require('gulp-csso'),
    rename          = require("gulp-rename"),
    imagemin        = require('gulp-imagemin');

gulp.task('sprite', function () {
    var spriteData = gulp.src('img/sprite/*.png').pipe(spritesmith({
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
    browserSync.init(["*html", "css/*.css", "js/main.js"], {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('sass', function () {
    gulp.src('sass/main.scss')
        .pipe(sass({
            style: 'expended',
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
        .pipe(prefix("last 2 version", "ff 3.6", "Chrome 4.0", "Opera 11.1", "Safari 4.0", "ie >= 8", {
            cascade: true
        }))
        .pipe(gulp.dest('css'));
});

gulp.task('imagemin', function () {
    return gulp.src('img/*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('img'));
});

gulp.task('mincss', function () {
    return gulp.src('css/main.css')
        .pipe(uncss({
            html: ['index.html'],
            timeout: 5000
        }))
        .pipe(csso())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('css'));
});

gulp.task('default', ['sass', 'browser-sync'], function () {
    gulp.watch("sass/**/*.scss", ['sass']);
});