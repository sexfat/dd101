const { src, dest} = require('gulp');
const  cleanCSS = require('gulp-clean-css');





function copy(){
  return src('*.js')
  .pipe(dest('js/mini/'));
}


function miniCss(){
    return src('css/*.css')
    .pipe(cleanCSS({compatibility: '*'}))
    .pipe(dest('css/mini/'));
}

exports.mini = miniCss
exports.copy = copy