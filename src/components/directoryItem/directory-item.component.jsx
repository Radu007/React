import React from 'react';

import './directory-item.styles.sass'

const DirectoryItem = ({id, abbr, label, color, color_blind_label}) => (
	<div className="wrapper" key={id}>
		<div style={{backgroundColor: color}} className="wrapper-box">
			<h1 className="wrapper-box_abbr">{abbr}</h1>
		</div>
		<span className="wrapper-box_label"><li className="wrapper-box_label-list">{label}</li></span>
	</div>
)

export default DirectoryItem