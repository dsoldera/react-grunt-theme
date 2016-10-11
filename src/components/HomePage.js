"use strict";

//using CommonJS Pattern
var React = require('react');

var HomePage = React.createClass({
	render: function() {
		return (
			<div className="content-home">
				<h1>Home Page</h1>
				<p>This is a Home Page Content</p>
			</div>
		);
	}
});

module.exports = HomePage;
