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
		console.log("Constructor");
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

	componentWillMount() {
		// immediately before initial rendering
		console.log("Component will mount");
	}

	componentDidMount() {
		// immediately after initial rendering
		console.log("Component did mount");
	}

	componentWillReceiveProps(nextProps) {
		// when component receives new props
		console.log("Component will receive props", nextProps);
	}

	shouldComponentUpdate(nextProps, nextState) {
		// before rendering, after receive new props or state
		console.log("Should component update", nextProps, nextState);
		// if (nextState.status === 1) {
		// 	return false;
		// }
		return true;
	}

	componentWillUpdate(nextProps, nextState) {
		// before rendering, after receiving new props or state
		console.log("Component will update", nextProps, nextState);
	}

	componentDidUpdate(prevProps, prevState) {
		// after component's updates are flushed to DOM
		console.log("Component did update", prevProps, prevState);
	}

	componentWillUnmount() {
		// immediately before removing component from DOM
		console.log("Component will unmount");
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
				<input 
					className="form-control" 
					placeholder="Two way binding..."
					type="text" 
					value={this.props.initialLinkName} 
					onChange={(event) => this.onHandleChange(event)} 
				/>
				<hr />
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
	greet: PropTypes.func,
	initialLinkName: PropTypes.string
};

export default Home;
