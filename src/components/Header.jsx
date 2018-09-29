import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ logout }) => (
	<header>
		<Fragment>
			<h1>Expensify</h1>
			<NavLink exact to="/" activeClassName="is-active">
				Login Page
			</NavLink>
			<NavLink to="/create" activeClassName="is-active">
				Create Expense Page
			</NavLink>
			<button onClick={logout}>Logout</button>
		</Fragment>
	</header>
);

const mapDispatchToProps = dispatch => {
	return {
		logout: () => dispatch(startLogout())
	};
};

export default connect(undefined, mapDispatchToProps)(Header);
