// Initialize Modules
const { src, dest, watch, series, parallel } = require('gulp');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const replace = require('gulp-replace');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const terser = require('gulp-terser');

// File Path Variables
const files = {
    scssPath: 'scss/**/*.scss',
    jsPath: 'js/**/*.js'
}

// Sass Task
function scssTask() {
    return src(files.scssPath)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer(),cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist'));
}

// JS Task
function jsTask(){
    return src([files.jsPath])
    .pipe(concat('all.js'))
    .pipe(terser())
    .pipe(dest('dist'));
}

// Cachebusting Task
const cbString = new Date().getTime();
function cacheBustTask(){
    return src(['*.html'])
    .pipe(replace(/cb=\d+/g, 'cb=' + cbString))
    .pipe(dest('.'));
}

// Watch Task
function watchTask() {
    watch([files.scssPath, files.jsPath],
    parallel(scssTask, jsTask));
}

// Default Task
exports.default = series(
    parallel(scssTask, jsTask),
    cacheBustTask,
    watchTask);