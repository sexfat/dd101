//plugin
const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');


const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const fileinclude = require('gulp-file-include');
const plumber = require('gulp-plumber');
const browsersync = require('browser-sync').create();


// sass
function style() {
    return src(['./sass/*.scss' , './sass/**/*.scss'])
        // expanded nested compact compressed
        .pipe(sass({ outputStyle: "expanded" }))
        .pipe(dest('./css'));
}
//browserSync
function browserSync(done) {
    browsersync.init({
        server: {
            baseDir: "./",
            index: "tween.html"
        },
        port: 3000
    });
    done();
}
// BrowserSync Reload
function browserSyncReload(done) {
    browsersync.reload();
    done();
}


// html module



//watch files
function watchfiles() {
    watch(['./js/*.js'] ,{ events: 'all' },series(style,browserSyncReload));
    watch(['./sass/*.scss' , './sass/**/*.scss'] ,{ events: 'all' },series(style,browserSyncReload));
    watch(['./*.html', './**/*.html'],{ queue: false } ,browserSyncReload)
}


// mini css
function miniCss(){
    return src('css/*.css')
    .pipe(cleanCSS({compatibility: '*'}))
    .pipe(dest('css/mini'));
}


const watcher = series(style , parallel(watchfiles, browserSync));

exports.mini = miniCss;
exports.default = watcher;