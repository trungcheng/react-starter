import React from 'react';

export default class Home extends React.Component {
	render() {
		let content = "";
		if (true) {
			content = <p>Content generate by variable with condition</p>
		}
		return (
			<div>
				<p>In a new Component</p>
				{content}
				{"Generate by string!"}
			</div>
		);
	}
}