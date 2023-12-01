const { src, dest, series, watch } = require("gulp");
const concat = require("gulp-concat");
const fileinclude = require("gulp-file-include");


const styles = () => {
  return src("src/styles/**/*.css").pipe(concat("main.css")).pipe(dest("dist"));
};

const htmlInclude = () => {
  return src("src/index.html")
    .pipe(fileinclude({ prefix: "@@", basepath: "@file" }))
    .pipe(dest("dist"));
};


exports.styles = styles;
exports.fileinclude = htmlInclude;
