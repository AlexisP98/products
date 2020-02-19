import gulp from 'gulp';
import sass from 'gulp-sass';
import imagemin from "gulp-imagemin";
import browserSync from "browser-sync";
import path from "path";
import concat from "gulp-concat";
import handlebars from "gulp-compile-handlebars";
import autoPrefixer from "gulp-autoprefixer";
import rename from "gulp-rename";
import webpack from "webpack";
import webpackStream from "webpack-stream";
import uglify from "gulp-uglify";
const sourceDir = path.resolve(__dirname, 'src');
const buildDir = path.resolve(__dirname, 'dist');
const sassOptions = {outputStyle: 'compressed', errLogToConsole: true};
const dir = path.resolve(__dirname, 'dist');
const dirCss = path.resolve(__dirname, 'dist/css');
/* const srcScssVendor = [
    './node_modules/bootstrap-css-only/css/bootstrap-grid.css',
    './node_modules/bootstrap-css-only/css/bootstrap.css',
    './node_modules/bootstrap-css-only/css/bootstrap-reboot.css'
]; */
const srcScssWatch = ['./src/style/*.scss', './src/components/**/*.scss'];
const srcScss = ['./src/style/style.scss'];
const srcHtml = ["src/pages/*.html", "src/partials/*.hbs", "src/components/**/*.hbs"];
const scriptSrc = ["src/index.js"];

const webpackConf = {
    entry: sourceDir,
    output: {
      path: buildDir,
      filename: "main.min.js"
    },
    mode: "none",
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"]
            }
        }
      }]
    }
};
const style = () => {
    return gulp.src(srcScss)
    .pipe(sass(sassOptions))
    .pipe(autoPrefixer('last 2 versions'))
    .pipe(concat("main.css"))
    .pipe(gulp.dest(dirCss))
    .pipe(browserSync.reload({stream: true}));
};
/* const styleVendor = () => {
    return gulp.src(srcScssVendor)
    .pipe(sass(sassOptions))
    .pipe(autoPrefixer('last 2 versions'))
    .pipe(concat("vendor.css"))
    .pipe(gulp.dest(dirCss))
    .pipe(browserSync.reload({stream: true}));
}; */
const scripts = () => {
    return gulp.src(scriptSrc)
      .pipe(webpackStream(webpackConf, webpack))
      .pipe(uglify())
      .pipe(gulp.dest(buildDir + "/js"))
      .pipe(browserSync.reload({stream: true}));
  };
  
const compileHtml = () => {
    const templateData = {};
    const options = {
      batch: [
        "./src/pages/",
        "./src/components/"
      ]
    };
  
    return gulp.src("./src/pages/*.html")
      .pipe(handlebars(templateData, options))
      .pipe(rename({
        extname: '.html',
      }))
      .pipe(gulp.dest(dir))
      .pipe(browserSync.reload({stream: true}));
  };
const serve = () => {
    browserSync.init({
        server: {
            baseDir: dir,
            index: 'index.html'
        },
        notify: false,
        injectChanges: true
    });
    gulp.watch(srcScssWatch, gulp.series(style));
    gulp.watch(scriptSrc, gulp.series(scripts));
    gulp.watch(srcHtml, gulp.series(compileHtml));
    gulp.watch('./dist/*').on('change', browserSync.reload);
};
/* const build = gulp.series(gulp.parallel(style, compileHtml, scripts, styleVendor)); */
const build = gulp.series(gulp.parallel(style, compileHtml, scripts));
gulp.task('default', gulp.series(build, serve));