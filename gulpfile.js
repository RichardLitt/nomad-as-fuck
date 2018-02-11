const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const imageResize = require('gulp-image-resize');
const changed = require("gulp-changed")


gulp.task('default', () => {
  return gulp.src(['src/img/**/*'])
    .pipe(changed('assets/img'))
    .pipe(imageResize({
      width : 2000,
      crop : false,
      upscale : false,
    }))
    .pipe(imagemin([
      imagemin.jpegtran({progressive: true})],
      {verbose: true}
    ))
    .pipe(gulp.dest('assets/img'));
});


