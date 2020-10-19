import React, { Component } from 'react';

import './directory.styles.sass'

import DirectoryItem from "../directoryItem/directory-item.component";


class Directory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			data: [],
		}
	}

	componentDidMount() {
		fetch('http://json.ffwagency.md/fonts_a')
		.then((response) => response.json())
		.then(
			(result) => {
				this.setState({
					isLoaded: true,
					data: result.content
				})
			},
			(error) => {
				this.setState({
            isLoaded: true,
            error
          });
			}
		)
		console.log(this.state.isLoaded);
	}
	
	render () {
		const {data} = this.state
		return (
			<div className='homepage'>
				{data.map(({id, color_blind_label, ...otherProps}) => (
					<DirectoryItem key={id} {...otherProps} />
				))}
				
			</div>
		)
	}
}

export default Directory