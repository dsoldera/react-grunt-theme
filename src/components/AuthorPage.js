"use strict";

var React = require('react');
var AuthorAPI = require('../aoi/AuthorAPI');

var Authors = React.createClass({
	//methodo da inicialização do component
	getInitialState:function() {
	    return {
	       author = []
	    };
	},
	componentWillMount:function () {
	   this.state({ authors: AuthorApi.getAllAuthors() });
	},
	render: function() {
		return (
			<div>
				<h1>Authors</h1>		
			</div>
		);	
	}
});
