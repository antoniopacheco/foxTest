module.exports = function(grunt) {

  require('grunt-task-loader')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON( 'package.json' ),
    clean: {
      files: [ 'dist' ]
    },
    sass: {
      dist: {
        options: {
          //quiet: true,
          noCache: true,
          sourcemap: false,
          compas: true,
          require: [ 'breakpoint' ],
        },
        files: {
          'dist/css/style.css' : 'src/scss/style.scss'
        }
      }
    },
    watch: {
      css: {
        files: 'src/scss/**/*.scss',
        tasks: ['sass']
      }
    },
  });

  grunt.registerTask('default',['watch']);
}