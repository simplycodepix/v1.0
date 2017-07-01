import React, { Component } from 'react'

import './style.css'

class HomeHeroSlider extends React.Component {
	render() {
		return (
			<section className="page-hero page-hero_home">
				<div className="page-hero_slide">
					<div className="page-hero_container">
						<div className="page-hero_left">
							<div className="page-hero_large__title">Турнир</div>
							<div className="page-hero_date">05.05.2017</div>
							<ul className="page-hero_list">
								<li>Высокие ставки</li>
								<li>Премиум столы</li>
								<li>Бонусы</li>
								<li>Акции</li>
							</ul>
						</div>
						<div className="page-hero_right">
							<div className="page-hero_small__title">Главные призы</div>
							<ul className="page-hero_list">
								<li>Lorem ipsum</li>
								<li>Lorem ipsum</li>
								<li>Lorem ipsum</li>
								<li>Lorem ipsum</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default HomeHeroSlider