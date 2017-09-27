if(!TASK_CONFIG.javascripts) return

const changed = require('gulp-changed')
const gulp    = require('gulp')
const path    = require('path')

const javascriptsTask = function() {
  const srcPath = path.resolve(process.env.PWD, PATH_CONFIG.src, PATH_CONFIG.javascripts.src)
  const defaultSrcOptions = { dot: true }
  const options = Object.assign(defaultSrcOptions, (TASK_CONFIG.javascripts.srcOptions || {}))

  const paths = {
    src: [
      path.join(srcPath, '**/*'),
      path.resolve(process.env.PWD, '!' + PATH_CONFIG.src, PATH_CONFIG.javascripts.src, 'README.md')
    ],
    dest: path.resolve(process.env.PWD, PATH_CONFIG.dest, PATH_CONFIG.javascripts.dest)
  }

  return gulp.src(paths.src, options)
    .pipe(gulp.dest(paths.dest))
}

gulp.task('javascripts', javascriptsTask)
module.exports = javascriptsTask
