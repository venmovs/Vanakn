const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass        = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const webpack = require("webpack-stream");
const merge = require("merge-stream");

const dist = "./dist/";

gulp.task("copy-html", () => {
    return gulp.src("./src/index.html")
        .pipe(gulp.dest(dist))
        .pipe(browserSync.stream());
});

gulp.task("build-js", () => {
    return gulp.src("./src/js/main.js")
        .pipe(webpack({
            mode: 'development',
            output: {
                filename: 'script.js'
            },
            watch: false,
            devtool: "source-map",
            module: {
                rules: [
                    {
                        test: /\.m?js$/,
                        exclude: /(node_modules|bower_components)/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: [['@babel/preset-env', {
                                    debug: true,
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]]
                            }
                        }
                    }
                ]
            }
        }))
        .pipe(gulp.dest(dist))
        .on("end", browserSync.reload);
});

gulp.task("copy-assets", () => {
    return gulp.src("./src/img/**/*.*")
        .pipe(gulp.dest(dist + "/img"))
        .on("end", browserSync.reload);
});



var folders = ['contacts', 'gallery', 'production'];

gulp.task('copy-pages', function(){

    var tasks = folders.map(function(element){
        return gulp.src("src/" + element + '/index.html')
            .pipe(gulp.dest(dist + "/" + element));
    });

    return merge(tasks);
});
gulp.task('styles', function() {
    return gulp.src("src/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});


gulp.task('default', function() {
    browserSync.init({
        server: "./dist/",
        port: 4000,
        notify: true
    });
    gulp.watch("src/sass/**/*.+(scss|sass)").on('change', gulp.parallel("styles", browserSync.reload));
    gulp.watch("src/**/*.html").on('change',  gulp.parallel("copy-html", "copy-assets", "copy-pages", browserSync.reload));
    gulp.watch("src/**/*.js").on('change', gulp.parallel("build-js", browserSync.reload));

});