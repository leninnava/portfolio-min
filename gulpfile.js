let gulp = require("gulp")
let postcss = require("gulp-postcss")
let uncss = require("postcss-uncss");
let cssnano = require("cssnano");


gulp.task("css", () => {
    let processors = [ 
         uncss({html: ["index.html"]}),
         cssnano({preset: "default"})
    ];
    return gulp.src("./src/*.css")
    .pipe(postcss(processors))
    .pipe(gulp.dest("./dest"));
});