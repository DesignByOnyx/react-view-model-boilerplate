import React from 'react';
import route from 'can-route-pushstate';

export default () => {
	return <div>
		<h1>This is Component #1</h1> 
		<p>Current Rule: {route.currentRule()}</p>
		<nav><a href="./component-2">Component 2</a></nav>
	</div>;
};
