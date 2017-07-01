import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";

import Header from './js/components/Header';
import Logo from './js/components/Logo';
import HomePage from './js/pages/HomePage';
import Tournaments from './js/pages/Tournaments';
import News from './js/pages/News';
import Page404 from './js/pages/Page404';
import registerServiceWorker from './registerServiceWorker';
import './js/assets/css/fonts/flaticon/flaticon.css';
import './js/assets/css/bootstrap.css';
import './js/assets/css/fonts.css';
import './index.css';

ReactDOM.render(
	<BrowserRouter onUpdate={() => window.scrollTo(0, 0)} >
		<div className="ps_page__holder">

			<Header />

			<div className="ps_page__content">
					<Logo />
					<div>
						<Route exact path="/" component={HomePage} />
						<Route path="/Tournaments" component={Tournaments} />
						<Route path="/News" component={News} />
						<Route component={Page404} />
					</div>
			</div>
		</div>
	</BrowserRouter>,
document.getElementById('root'));

registerServiceWorker();
