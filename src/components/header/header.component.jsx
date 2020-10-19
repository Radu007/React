import React from 'react';
import {Link} from 'react-router-dom'

import './header.styles.sass'

class HeaderComponent extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			error: null,
			isLoaded: false,
			tabsData: []
		}
	}

	componentDidMount() {
		fetch('http://json.ffwagency.md/tabs')
			.then(response => response.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						tabsData: result
					})
				},
				(error) => {
					this.setState({
            isLoaded: true,
            error
          });
				}
			)
	}

	render() {
		const {tabsData} = this.state
		return (
				<div className="header">
					<h1 className='header_title'>Please select one font</h1>
				<div className="links_block">
					{tabsData.map(({label, id, content_endpoint}) => (
							<Link className="header_links" key={id} to={`/${content_endpoint}`}>{label.toUpperCase()}</Link>
						))}
				</div>
			</div>
		)
	}
}

export default HeaderComponent