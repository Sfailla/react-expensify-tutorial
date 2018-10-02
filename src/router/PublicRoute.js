import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({
	component: Component,
	...rest,
	isAuthenticated
}) => (
	<Route
		{...rest}
		component={props =>
			isAuthenticated ? <Redirect to="/dashboard" /> : <Component {...props} />}
	/>
);

const mapStateToProps = state => {
	return {
		isAuthenticated: !!state.auth.id
	};
};

export default connect(mapStateToProps)(PublicRoute);
