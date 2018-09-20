import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
	return (
		<Fragment>
			404! -- <Link to='/'>Go back to Home</Link>
		</Fragment>
	);
};

export default NotFoundPage;
