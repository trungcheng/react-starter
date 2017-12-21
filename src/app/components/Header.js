import React from 'react';

export const Header = (props) => {
	return (
		<nav className="navbar navbar-default">
			<div className="container-fluid">
				<div className="navbar-header">
			      	<a className="navbar-brand" href="#">React</a>
			    </div>
				<ul className="nav navbar-nav">
					<li><a href="#">{ props.homeLink }</a></li>
				</ul>
			</div>
		</nav>
	);
};