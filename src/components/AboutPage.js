"use strict";

//using CommonJS Pattern
var React = require('react');

var AboutPage = React.createClass({
	render: function() {
		return (
			<div className="content-home">
				<h1>About Page</h1>
				<p>This is a About Page Content</p>
			</div>
		);
	}
});

module.exports = AboutPage;
