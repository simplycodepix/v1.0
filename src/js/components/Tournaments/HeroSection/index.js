import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import "./style.css";

class HeroSection extends React.Component {
	render() {
		return (
			<section className="page-hero page-hero_sit">
				<Grid fluid>
					<div className="page-hero_container">
						<h2 className="page-hero_title">
							<p>Турниры на деньги</p>
							<p>Реальные выплаты</p>
							<p>Быстрые столы</p>
							<p>Стримы и другое</p>
						</h2>
					</div>
				</Grid>
			</section>
		);
	}
}

export default HeroSection