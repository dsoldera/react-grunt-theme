# React Grunt Babel Theme

Starter code for transpiling React ES2015 (including modules) with Babel, GRUNT and Browserify.

# Installing

1. Clone the repo
2. `npm install -g grunt` to install Grunt globally.
4. `npm install -g browserify` to install Browserify globally
5. `npm install` to resolve project dependencies.

### Browserify
How I'm using Grunt and Browserify. For it I've installed the plugin `grunt-browserify`.

Implementation based on this [article](http://chris.house/blog/grunt-configuration-for-react-browserify-babelify/)

# REACT Definitions
1. Using React with ES6

## Props and States!!
Props - Look like HTML attributes, but immutable
Props allows to pass data from Parent Components to Child. How they are passed throw the Parent, the own to the Parent
	this.props.username


State - Holds mutable State
State is mutable, only use state on Top Level Components. Use Props to passa data to your children
  this.state.username

## Functions and Methods
### getInitialState - controler view
### getDefaultProps - props that your Component should use by default.

## LifeCycle Methods

