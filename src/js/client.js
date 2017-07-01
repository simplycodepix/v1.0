import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";

import Header from './components/Header';
import HomePage from './pages/HomePage';
import Tournaments from './pages/Tournaments';
import News from './pages/News';

class App extends React.Component {
	render() {
		return (
			<div className="ps_page__holder">

	
				<Header />

				<div className="ps_page__content">

					<BrowserRouter>
						<div>
							<Route exact path="/" component={HomePage} />
						</div>
					</BrowserRouter>


				</div>
			</div>
		);
	}
}

export default App;