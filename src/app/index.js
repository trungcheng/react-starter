import React from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component {
	render() {
		let user = {
			name: "Test",
			hobbies: ["Sports", "Reading"]
		}
		return (
			<div>
				<Header homeLink="Home" />
				<div className="col-md-10 col-md-offset-1">
					<Home name={"Trung"} initialAge={24} user={user}>
						<p>This is a paragraph</p>
					</Home>
				</div>
			</div>
		);
	}
}

render(<App />, document.getElementById("root"));
