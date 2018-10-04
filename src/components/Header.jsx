import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ logout }) => (
	<Fragment>
		<header className="header">
			<div className="container header__container">
				<Link className="header__link" to="/dashboard">
					<h1 className="header__title">Expensify</h1>
				</Link>
				<button className="button button__logout" onClick={logout}>
					Logout
				</button>
			</div>
		</header>

		<div className="container">
			<Link to="/create" className="button button__add-expense">
				Add Expense
			</Link>
		</div>
	</Fragment>
);

const mapDispatchToProps = dispatch => {
	return {
		logout: () => dispatch(startLogout())
	};
};

export default connect(undefined, mapDispatchToProps)(Header);
