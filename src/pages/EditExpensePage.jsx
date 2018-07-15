import React from 'react';

const EditExpensePage = (props) => (
	<div>
		<h3>Editing the epense with an ID of {props.match.params.id}</h3>
	</div>
);

export default EditExpensePage;
