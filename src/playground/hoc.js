import React from 'react';
import ReactDOM from 'react-dom';

const User = (props) => {
	return (
		<div>
			<h1>User</h1>
			<div>This user {props.isAuthenticated ? 'is authenticated' : 'is not authenticated'};</div>
		</div>
	);
};

const AuthUser = (Component) => {
	return (props) => (
		<div>
			<Component {...props} />
		</div>
	);
};

const AuthInfo = AuthUser(User);

ReactDOM.render(<AuthInfo isAuthenticated={true} />, document.getElementById('root'));
