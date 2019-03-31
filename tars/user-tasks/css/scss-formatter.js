'use strict';

// This is example of task function

const gulp = tars.packages.gulp;
const plumber = tars.packages.plumber;
const cache = tars.packages.cache;
const notifier = tars.helpers.notifier;
const stylefmt = require('gulp-stylefmt');

const tarsConfig = tars.config;

/**
 * Task description
 */
module.exports = function () {

    return gulp.task('css:scss-formatter', function () {
        return gulp.src([`markup/${tars.config.fs.componentsFolderName}/**/*.scss`], {base: './'})
            .pipe(plumber({
                errorHandler: function (error) {
                    notifier.error('An error occurred while something.', error);
                }
            }))
            .pipe(cache('postscss'))
            .pipe(stylefmt())
            .pipe(gulp.dest('./'))
            .pipe(
                notifier.success('css:scss-formatter task has been finished')
            );
    });
};
