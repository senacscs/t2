var gulp = require("gulp");
  concat = require("gulp-concat"),
  sass = require("gulp-sass"),
  del = require("del"),
  cleanCSS = require("gulp-clean-css"),
  rename = require("gulp-rename"),
  uglify = require("gulp-uglify"),
  browserSync = require("browser-sync").create();

// Copy third party libraries from /node_modules into /dist
gulp.task("export", function() {
  // Bootstrap
  gulp
    .src([
      "./node_modules/bootstrap/dist/**/*",
      "!./node_modules/bootstrap/dist/css/bootstrap-grid*",
      "!./node_modules/bootstrap/dist/css/bootstrap-reboot*"
    ])
    .pipe(gulp.dest("./dist/bootstrap"));

  // Font Awesome
  gulp
    .src([
      "./node_modules/font-awesome/**/*",
      "!./node_modules/font-awesome/{less,less/*}",
      "!./node_modules/font-awesome/{scss,scss/*}",
      "!./node_modules/font-awesome/.*",
      "!./node_modules/font-awesome/*.{txt,json,md}"
    ])
    .pipe(gulp.dest("./dist/font-awesome"));

  // jQuery
  gulp
    .src([
      "./node_modules/jquery/dist/*",
      "!./node_modules/jquery/dist/core.js"
    ])
    .pipe(gulp.dest("./dist/jquery"));

  // Popper Js
  gulp
    .src(["node_modules/popper.js/dist/umd/popper.min.js"])
    .pipe(gulp.dest("dist/popper"));
});

// Compile SCSS
gulp.task("css:compile", function() {
  return gulp
    .src("./scss/style.scss")
    .pipe(
      sass
        .sync({
          outputStyle: "expanded"
        })
        .on("error", sass.logError)
    )
    .pipe(concat("main.css"))
    .pipe(gulp.dest("./css"));
});

// Minify CSS
gulp.task("css:minify", ["css:compile"], function() {
  return gulp
    .src(["./css/*.css", "!./css/*.min.css"])
    .pipe(cleanCSS())
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
});

// CSS
gulp.task("css", ["css:compile", "css:minify"]);

// Combile all JS files into a single file and rename it to main.js and minify it with suffix .min
gulp.task("js", function() {
  return gulp
    .src(["./js/*.js", "!./js/*.min.js"])
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(gulp.dest("./js"))
    .pipe(browserSync.stream());
});

// Removes all the directories inside dist, minified js files and all compiled css files.
gulp.task("clean", function() {
  return del(["js/*.min.js", "css/*", "dist/*"]);
});

// Default task
gulp.task("default", ["export", "css", "js"]);

// Configure the browserSync task
gulp.task("browserSync", function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

// Dev task
gulp.task("dev", ["export", "css", "js", "browserSync"], function() {
  gulp.watch("./scss/**/*.scss", ["css"]);
  gulp.watch("./js/*.js", ["js"]);
  gulp.watch("./*.html", browserSync.reload);
  gulp.watch("./img/**/*", browserSync.reload);
});
