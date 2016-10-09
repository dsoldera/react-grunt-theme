(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var ____Class0=React.Component;for(var ____Class0____Key in ____Class0){if(____Class0.hasOwnProperty(____Class0____Key)){HelloWorld[____Class0____Key]=____Class0[____Class0____Key];}}var ____SuperProtoOf____Class0=____Class0===null?null:____Class0.prototype;HelloWorld.prototype=Object.create(____SuperProtoOf____Class0);HelloWorld.prototype.constructor=HelloWorld;HelloWorld.__superConstructor__=____Class0;function HelloWorld(){"use strict";if(____Class0!==null){____Class0.apply(this,arguments);}}
  Object.defineProperty(HelloWorld.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
    return (
       React.createElement("h1", null, "Hellow World with React and ES6!!!")
    );
  }});


ReactDOM.render(
  React.createElement(HelloWorld, null), document.getElementById('container')
)

},{}]},{},[1]);
