import React from 'react';

const CardComponent = ({letter}) => (
	<div className="card-wrapper">
		<div className="card-body">
			<span className="letter">{letter}</span>
		</div>
	</div>
)