import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => {
	return (
		<Fragment>
			<button onClick={startLogin}>Login</button>
		</Fragment>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		startLogin: () => dispatch(startLogin())
	};
};

export default connect(undefined, mapDispatchToProps)(LoginPage);
