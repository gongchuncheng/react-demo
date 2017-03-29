'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');
var sass = require('gulp-sass');

var buffer = require('vinyl-buffer');
var csso = require('gulp-csso');
var imagemin = require('gulp-imagemin');
var merge = require('merge-stream');
var spritesmith = require('gulp.spritesmith');

var uglify = require('gulp-uglify');
var rev = require('gulp-rev');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');

gulp.task('sass', function () {
    gulp.src('./src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./static/src/stylesheets'));
});


gulp.task('uglify', function() {
    return gulp.src('./bundle.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
    return gulp.src('./dist/')
        .pipe(clean());
});

gulp.task('rev', function () {
    return gulp.src('./dist/bundle.js')
        .pipe(rev())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('build', function() {
    runSequence(
        'clean',
        'uglify',
        'rev'
    );
});
