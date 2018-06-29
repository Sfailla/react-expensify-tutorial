import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';

import 'normalize.css/normalize.css';
import './styles/style.scss';

const styles = {
	content: {
		paddingLeft: '5rem',
		marginTop: '5rem'
	}
};

const App = () => {
	return (
		<div>
			<Header />
			<div style={styles.content}>
				<code>Remove / Edit Header.jsx file to get started</code>
			</div>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
