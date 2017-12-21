import React from 'react';

export class Home extends React.Component {

	constructor(props) {
		super();
		this.state = {
			age: props.initialAge,
			status: 0
		}
	}

	onMakeOlder() {
		this.setState({
			age: this.state.age + 3
		});
	}

	render() {
		var text = "Something!";
		return (
			<div>
				<p>In a new Component</p>
				<p>{text}</p>
				<p>Your name is {this.props.name}</p>
				<p>Your age is {this.state.age}</p>
				<p>User Object => Name: {this.props.user.name}</p>
				<div>
					<h4>Hobbies</h4>
					<ul>
						{this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
					</ul>
				</div>
				<hr />
				{this.props.children}
				<button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older</button>
			</div>
		);
	}
}

/*
Home.propTypes = {
	name: React.PropTypes.string,
	initialAge: React.PropTypes.number,
	user: React.PropTypes.object,
	children: React.PropTypes.element.isRequired
};
*/