import React from 'react';
import { render } from 'react-dom';

import Header from './components/Header';
import Home from './components/Home';
import './index.css';

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			homeLink: "Home",
			homeMounted: true
		};
	}

	onGreet() {
		alert("Communicating between parent and child component!");
	}

	onChangeLinkName(newName) {
		this.setState({
			homeLink: newName
		});
	}

	onChangeHomeMounted() {
		this.setState({
			homeMounted: !this.state.homeMounted
		});
	}

	render() {
		let homeCmp = "";
		let user = {
			name: "Test",
			hobbies: ["Sports", "Reading"]
		}
		if (this.state.homeMounted) {
			homeCmp = (
				<Home 
					name={"Trung"} 
					initialAge={24} 
					user={user} 
					greet={this.onGreet}
					changeLink={this.onChangeLinkName.bind(this)}
					initialLinkName={this.state.homeLink}
				/>
			);
		}
		return (
			<div>
				<Header homeLink={this.state.homeLink} />
				<div className="col-md-10 col-md-offset-1">
					{homeCmp}
				</div>
				<div className="col-md-10 col-md-offset-1">
					<br />
					<button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-warning">
						(Un)Mount Home Component
					</button>
				</div>
			</div>
		);
	}
}

render(<App />, document.getElementById("root"));
