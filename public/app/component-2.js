import React from 'react';
import route from 'can-route-pushstate';

export default () => {
	return <div>
		<h1>This is Component #2</h1> 
		<p>Current Rule: {route.currentRule()}</p>
		<nav><a href="./">Component 1</a></nav>
	</div>;
};
