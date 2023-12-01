const { src, dest, series, watch } = require("gulp");
const concat = require("gulp-concat");
const fileinclude = require("gulp-file-include");
// const gulp = require("gulp");
const styles = () => {
  return src("src/styles/**/*.css").pipe(concat("main.css")).pipe(dest("dist"));
};

const htmlInclude = () => {
  return src("src/index.html")
    .pipe(fileinclude({ prefix: "@@", basepath: "@file" }))
    .pipe(dest("dist"));
};

// gulp.task("fileinclude", function () {
//   gulp
//     .src(["index.html"])
//     .pipe(
//       fileinclude({
//         prefix: "@@",
//         basepath: "@file",
//       })
//     )
//     .pipe(gulp.dest("./"));
// });

exports.styles = styles;
exports.fileinclude = htmlInclude;
