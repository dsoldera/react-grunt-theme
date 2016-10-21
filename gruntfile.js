'use strict';

module.exports = function (grunt) {

	require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  var defaults = {
    app: '.',
    src: 'src',
    dist: 'dist'
  };

	grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
        options: {
          port: 7002,
          open: true,
          hostname: '*',
          base: './dist/',
          livereload: 35728
        },
        livereload: {
          options: {
            open: {
              appName: 'Chrome'
            }
          }
        }
      }
    },

    browserify: {
      dist: {
        options: {
           transform: [['babelify', {presets: ['react','es2015','stage-2']}]]
        },
        src: ['src/index.js'],
        dest: 'dist/app.js',
      }
    },

    /*
    ** Checking React Code
    */
    eslint: {
      target: ['<%= defaults.scripts %>react/**/*.js']
    },

    watch: {
      options: {
        livereload: {
          host: 'localhost',
          port: 7000,
        },
        dateFormat: function(time) {
          grunt.log.writeln('The watch finished in ' + time + 'ms at ' + (new Date()).toString());
          grunt.log.writeln('Waiting for more changes...');
        },
      },
      scripts: {
        files: ['src/**/*.js'],
        tasks: ['eslint', 'browserify']
      }
    }
	});

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');

	grunt.registerTask('default', ['connect:server', 'watch:scripts']);
};

