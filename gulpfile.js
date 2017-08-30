var gulp        = require("gulp");
var gulpUtil    = require("gulp-util");
var less        = require("gulp-less");
var concatCss   = require("gulp-concat-css");
var minifyCss   = require("gulp-cssnano");
var concatJs    = require("gulp-concat");
var minifyJs    = require("gulp-uglify");
var browserSync = require("browser-sync").create();

var htmlFiles    = "./*.html";
var lessFiles    = "./styles/less/**/*.less";
var cssDir       = "./styles/css";
var cssFiles     = "./styles/css/**/*.css";
var cssProdDir   = "./styles";
var cssProdFile  = "app.min.css";
var jsDir        = "./scripts/js";
var jsFiles      = "./scripts/js/**/*.js";
var jsProdDir    = "./scripts";
var jsProdFile   = "app.min.js";

gulp.task("less", function() {
  return gulp.src(lessFiles)
             .pipe(less())
             .pipe(gulp.dest(cssDir));
});

gulp.task("css", ["less"], function() {
  return gulp.src(cssFiles)
             .pipe(concatCss(cssProdFile))
             .pipe(minifyCss())
             .pipe(gulp.dest(cssProdDir))
             .pipe(browserSync.stream());
});

gulp.task("js", function() {
  return gulp.src(jsFiles)
             .pipe(concatJs(jsProdFile))
             .pipe(minifyJs())
             .pipe(gulp.dest(jsProdDir))
             .pipe(browserSync.stream());
});

gulp.task("serve", ["css", "js"], function() {
  browserSync.init({
    server: {
      baseDir: "."
    }
  });
});

gulp.task("watch", ["css", "js"], function() {
  gulp.watch(htmlFiles).on("change", browserSync.reload);
  gulp.watch(lessFiles, ["css"]);
  gulp.watch(jsFiles,   ["js"]);
});

gulp.task("default", ["css", "js", "serve", "watch"]);
