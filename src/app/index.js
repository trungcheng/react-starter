import React from 'react';
import { render } from 'react-dom';

import Header from './components/Header';
import Home from './components/Home';

class App extends React.Component {
	render() {
		let user = {
			name: "Test",
			hobbies: ["Sports", "Reading"]
		}
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Header />
					</div>
				</div>
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Home name={"Trung"} age={24} user={user}>
							<p>This is a paragraph</p>
						</Home>
					</div>
				</div>
			</div>
		);
	}
}

render(<App />, document.getElementById("root"));
