const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

function style() {
  return gulp
    .src("./css/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
}

function watch(done) {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("./css/**/*.scss", style);
  gulp.watch("./*.html").on("change", browserSync.reload);

  done();
}

exports.style = style;
exports.watch = watch;
