
var gulp = require('gulp'),
    less = require('gulp-less'),
    cssmin = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');
 //less编译并压缩任务
gulp.task('testLess', function () {
    //编译src目录下的所有less文件
    //除了reset.less和test.less（**匹配src/less的0个或多个子文件夹）
    gulp.src(['src/less/*.less', '!src/less/**/{reset,test}.less']) 
        .pipe(less())
        .pipe(cssmin({compatibility: 'ie7'}))
        .pipe(gulp.dest('src/css'));
});
//合并所有css
gulp.task('concatcss', function() {
    return gulp.src('src/css/*.css')
        .pipe(concat('all.css'))    //合并所有js到main.js
        .pipe(gulp.dest('build'))    //输出main.js到文件夹
});

//压缩js任务
gulp.task('minifyjs', function() {
    return gulp.src('src/js/*.js')
        .pipe(uglify())    //压缩
        .pipe(gulp.dest('src/js/min'));  //输出
});
//合并所有js任务
gulp.task('concatjs', function() {
    return gulp.src('src/js/min/*.js')
        .pipe(concat('all.js'))    //合并所有js到main.js
        .pipe(gulp.dest('build'))    //输出main.js到文件夹
});



gulp.task('default', function () {
    gulp.watch('src/**/*.less', ['testLess']); //当所有less文件发生改变时，调用testLess任务
    gulp.watch('src/**/*.css',['concatcss']);
    gulp.watch('src/**/*.js',['minifyjs']);
    gulp.watch('src/**/*.js',['concatjs']);
     
});