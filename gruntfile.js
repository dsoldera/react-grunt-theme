'use strict';

var webpackDevConfig = require('./webpack.config.js');

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


    /*
    ** Webpack Settings
    */
    webpack: {
      options: webpackDevConfig
    },


    /*
    **  Browserify Settings
    */
    browserify: {
      dev: {
        files: {
          'dist/app.js': ['src/app.js']
        },
        options: {
          transform: ["reactify"]
          //transform: [["reactify", {"es6": true}]]
          //transform: [['babelify', {presets: ['es2015', 'react']}]]
        },
      }
    },

    /*
    ** Trying compile the JSX to JS + ES6 with Grunt-babel
    */
    babel: {
      options: {
        sourceMap: true,
        //plugins: ['transform-react-jsx']
        presets: ['babel-preset-es2015', 'babel-preset-react']
      },
      dist: {
        files: [{
        	expand: true,
          cwd: 'src/',
          src: ['*.jsx'],
          dest: 'dist/',
          ext: '.js'
        }]
      }
    },

    connect: {
      server: {
        options: {
          port: 7002,
          open: true,
          hostname: '*',
          base: './',
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
        files: 'src/**/*.{js,jsx}',
        tasks: ['browserify:dev']
      }
    }
	});

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  //grunt.loadNpmTasks('grunt-webpack');
  //grunt.loadNpmTasks('grunt-webpack-server');

	grunt.registerTask('default', ['connect:server', 'watch:scripts']);
};

