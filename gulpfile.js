/*===== Plugins =====*/
var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')();

/*===== Output Names =====*/
var devJs = "switchboard"

/*===== Directories =====*/
var sassDir = 'scss/switchboard.scss',
    jsDir = 'js/',
    cssDest = 'dist/css',
    jsDest = 'dist/js';

/*===== javaScript assets =====*/
var jsAssets = [
    jsDir + "init.js",
    jsDir + "anim.js",
    jsDir + "emptySpace.js",
    jsDir + "hashtagLinks.js",
    jsDir + "readMore.js",
    jsDir + "smoothImageLoad.js",
    jsDir + "softLoad.js",
    jsDir + "stickyMenu.js",
    jsDir + "theImager.js"
];

gulp.task('scripts', function() {
    gulp.src(jsAssets)
        .pipe(plugins.plumber())
        .pipe(plugins.concat(devJs + '.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(plugins.rename(function(path) {
            path.basename += ".min";
        }))
        .pipe(plugins.uglify())
        .pipe(gulp.dest(jsDest));
});

gulp.task('styles', function() {
    return gulp.src(sassDir)
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.sass({
            noCache: true,
            outputStyle: 'expanded'
        }).on('error', plugins.sass.logError))
        .pipe(plugins.autoprefixer())
        .pipe(gulp.dest(cssDest))
        .pipe(plugins.cleanCss({
            compatibility: 'ie8'
        }))
        .pipe(plugins.rename(function(path) {
            path.basename += ".min";
        }))
        .pipe(plugins.sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'));
});


gulp.task('sassteststyles', function() {
    return gulp.src('dist/sass/sasstest.scss')
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.sass({
            noCache: true,
            outputStyle: 'expanded'
        }).on('error', plugins.sass.logError))
        .pipe(gulp.dest(cssDest))
        .pipe(plugins.sourcemaps.write('.'))
        .pipe(gulp.dest('tester/sassTest'));
});

gulp.task('switchgear', function() {
  return gulp.src('scss/stylesheets/switchboard/includes/switchgear/**/_*.scss')
  .pipe(gulp.dest('dist/scss'));
});

gulp.task('watch', function() {
    gulp.watch(jsAssets, ['scripts']);
    gulp.watch('scss/stylesheets/**/*.scss', ['styles']);
    gulp.watch('dist/sass/**/*.scss', ['sassteststyles']);
    gulp.watch('scss/stylesheets/switchboard/includes/switchgear/**/_*.scss',['switchgear']);
});

gulp.task('default', ['styles', 'sassteststyles', 'scripts', 'switchgear', 'watch']);
