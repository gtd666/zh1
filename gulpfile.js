/**
 * Created by 1 on 2017/10/9.
 */
var gulp=require("gulp"),
    minifyCss=require("gulp-minify-css"),
    uglify=require("gulp-uglify"),
    rename=require("gulp-rename"),
    notify=require("gulp-notify"),
    concat=require("gulp-concat");
gulp.task("minifyJs",function(){
    return gulp.src("js/*.js")
        .pipe(concat("main.js"))
        .pipe(rename({suffix:".min"}))
        .pipe(uglify())
        .pipe(gulp.dest("js/"))
        .pipe(notify({messafe:"ok!"}))
});

