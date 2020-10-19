import React from 'react';

import HeaderComponent from './components/header/header.component'
import Directory from './components/directory/directory.component'

import './App.css';
import {Switch, Route} from 'react-router-dom';

const FontB = () => (
	<div className="nothing-to-fetch">
		Buy Fonts
	</div>
)

function App() {
  return (
		<div className='root-app'>
		<HeaderComponent />
		<Switch>
				<Route exact path='/' component={Directory} />
				<Route path='/fonts_a' component={Directory} />
				<Route path="/fonts_b" component={FontB} />
		</Switch>
		</div>
  );
}

export default App;
