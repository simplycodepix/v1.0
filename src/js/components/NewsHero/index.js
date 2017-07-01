import React, { Componet } from "react";

import "./style.css";

class NewsHero extends React.Component {
	render() {
		return (
			<section className="page-hero page-hero_news">
				<div className="page-hero_container">
					<h2 className="page-hero_title">Новости</h2>
				</div>
			</section>			
		);
	}
}

export default NewsHero;