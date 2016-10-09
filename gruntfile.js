'use strict';

module.exports = function (grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
    babel: {
      options: {
        sourceMap: true,
        plugins: ['transform-react-jsx'],
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
    }
	});

	grunt.registerTask('default', ['babel']);
};

