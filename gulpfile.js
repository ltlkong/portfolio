const { src, dest, parallel} = require("gulp");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const srcmaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");
const imagemin = require("gulp-imagemin");
const jsmin = require("gulp-jsmin");

function cssTask() {
  return src("src/*.css")
  .pipe(srcmaps.init())
  .pipe(concat("all.css"))
  .pipe(postcss([cssnano()]))
  .pipe(srcmaps.write())
  .pipe(dest("dist/css"));
}

function htmlTask() {
  return src("src/*.html").pipe(dest("dist"));
}

function jsTask() {
  return src("src/*.js")
  .pipe(jsmin())
  .pipe(concat("all.js"))
  .pipe(dest("dist/js"));
}

function imagesTask() {
  return src(["src/*.jpg","src/*.png"]).pipe(imagemin()).pipe(dest("dist/images"))
}

exports.default = parallel(cssTask,jsTask,htmlTask,imagesTask); 