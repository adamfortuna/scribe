module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ''
      },
      dist: {
        src: [
          'bower_components/angular/angular.js',
          'bower_components/angular-route/angular-route.js', 
          'bower_components/angular-resource/angular-resource.js', 
          'bower_components/lodash/dist/lodash.compat.min.js', 
          'bower_components/lodash-deep/lodash-deep.min.js', 
          'bower_components/sugar/release/sugar-full.min.js', 
          'bower_components/d3/d3.min.js', 
          'src/**/*.js',
          'tmp/templates.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    angularTemplateCache: {
      options: { module: 'Scribe' },
      defaultOptions: {
        src: 'src/**/*.html',
        dest: 'tmp/templates.js',
        cwd: '.'
      },
    },
    watch: {
      files: ['<%= jshint.files %>', 'src/**/*.html'],
      tasks: ['angularTemplateCache', 'concat']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-angular-templatecache');

  grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
};
