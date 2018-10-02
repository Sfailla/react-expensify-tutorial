import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ logout }) => (
	<header>
		<Fragment>
			<div className="header">
				<h1 className="header__title">Expensify</h1>
				<button onClick={logout}>Logout</button>
			</div>

			<NavLink to="/dashboard" activeClassName="is-active">
				Dashboard
			</NavLink>
			<NavLink to="/create" activeClassName="is-active">
				Create Expense Page
			</NavLink>
		</Fragment>
	</header>
);

const mapDispatchToProps = dispatch => {
	return {
		logout: () => dispatch(startLogout())
	};
};

export default connect(undefined, mapDispatchToProps)(Header);
