/*
** Using ES5
** Not using use strict because there is some global variables here
*/

$ = jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var HomePage = require('./components/HomePage');
var AboutPage = require('./components/AboutPage');

// var App = React.createClass({
// 	render: function() {
// 		var Child;

// 		switch(this.props.route){
// 			case 'about': Child = AboutPage; break;
// 			default: Child = HomePage;
// 		}

// 		return (
// 			<div>
// 				<Child />
// 			</div>
// 		);
// 	}
// });

// function render() {
// 	var route = window.location.hash.substr(1);
// 	ReactDOM.render(<App router={route} />, document.getElementById('container'));
// }

// window.addEventListener('hashchange', render);
// render();
ReactDOM.render(<HomePage />, document.getElementById('container'))
