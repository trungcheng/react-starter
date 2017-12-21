import React from 'react';
import PropTypes from 'prop-types';

class Home extends React.Component {

	constructor(props) {
		super();
		this.state = {
			age: props.initialAge,
			status: 0,
			homeLink: props.initialLinkName
		}
	}

	onMakeOlder() {
		this.setState({
			age: this.state.age + 3
		});
	}

	onChangeLink() {
		this.props.changeLink(this.state.homeLink);
	}

	onHandleChange(event) {
		this.setState({
			homeLink: event.target.value
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
				<input type="text" value={this.props.initialLinkName} onChange={(event) => this.onHandleChange(event)} />
				<button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older</button>
				<button onClick={this.props.greet} className="btn btn-success">Greet Alert</button>
				<button onClick={this.onChangeLink.bind(this)} className="btn btn-info">Change Header Link</button>
			</div>
		);
	}
}

Home.propTypes = {
	name: PropTypes.string,
	initialAge: PropTypes.number,
	user: PropTypes.object,
	children: PropTypes.element.isRequired,
	greet: PropTypes.func,
	initialLinkName: PropTypes.string
};

export default Home;
