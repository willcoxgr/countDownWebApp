if(!TASK_CONFIG.javascripts) return

var browserSync = require('browser-sync')
var changed     = require('gulp-changed')
var gulp        = require('gulp')
var path        = require('path')

var javascriptsTask = function() {

  var paths = {
    src: path.resolve(process.env.PWD, PATH_CONFIG.src, PATH_CONFIG.javascripts.src, '**/*.{' + TASK_CONFIG.javascripts.extensions + '}'),
    dest: path.resolve(process.env.PWD, PATH_CONFIG.dest, PATH_CONFIG.javascripts.dest)
  }

  return gulp.src([paths.src, , '*!README.md'])
    .pipe(changed(paths.dest)) // Ignore unchanged files
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream())
}

gulp.task('javascripts', javascriptsTask)
module.exports = javascriptsTask
