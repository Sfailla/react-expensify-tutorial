import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => {
	return (
		<Fragment>
			<div className="box-layout">
				<div className="box-layout__box">
					<h1 className="box-layout__title">Expensify</h1>
					<p>It's time to get your expenses under control</p>
					<button className="button button__login" onClick={startLogin}>
						Login with Google
					</button>
				</div>
			</div>
		</Fragment>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		startLogin: () => dispatch(startLogin())
	};
};

export default connect(undefined, mapDispatchToProps)(LoginPage);
