'use strict';

const gulp = tars.packages.gulp;
const cache = tars.packages.cache;
const plumber = tars.packages.plumber;
const notifier = tars.helpers.notifier;
const browserSync = tars.packages.browserSync;

const generalImagesPath = './markup/' + tars.config.fs.staticFolderName + '/'
                            + tars.config.fs.imagesFolderName + '/general';

/**
 * Move general images
 */
module.exports = () => {
    return gulp.task('images:move-general-img', () => {
        return gulp.src(generalImagesPath + '/**/*.*')
            .pipe(plumber({
                errorHandler(error) {
                    notifier.error('An error occurred while moving general images.', error);
                }
            }))
            .pipe(cache('move-general-img'))
            .pipe(gulp.dest(generalImagesPath))
            .pipe(browserSync.reload({ stream: true }))
            .pipe(
                notifier.success('General images\'ve been moved')
            );
    });
};
