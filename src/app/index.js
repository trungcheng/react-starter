import React from 'react';
import { render } from 'react-dom';

import Header from './components/Header';
import Home from './components/Home';
import './index.css';

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			homeLink: "Home"
		}
	}

	onGreet() {
		alert("Communicating between parent and child component!");
	}

	onChangeLinkName(newName) {
		this.setState({
			homeLink: newName
		});
	}

	render() {
		let user = {
			name: "Test",
			hobbies: ["Sports", "Reading"]
		}
		return (
			<div>
				<Header homeLink={this.state.homeLink} />
				<div className="col-md-10 col-md-offset-1">
					<Home 
						name={"Trung"} 
						initialAge={24} 
						user={user} 
						greet={this.onGreet}
						changeLink={this.onChangeLinkName.bind(this)}
					>
						<p>This is a paragraph</p>
					</Home>
				</div>
			</div>
		);
	}
}

render(<App />, document.getElementById("root"));
