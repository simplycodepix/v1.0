import React, { Component } from 'react';
import { Grid, Row, Col } from "react-bootstrap";

import Header from "../../components/Header";
import HomePageLogin from "../../components/HomePageLogin";
import HomeHeroSlider from "../../components/HomeHeroSlider";
import NewsSlider from "../../components/NewsSlider";
import TournamentInfoBlock from "../../components/TournamentInfoBlock";
import PageTitle from "../../components/PageTitle";

import Footer from "../../components/Footer";
import FooterInfoBox from "../../components/FooterInfoBox";

import "./style.css";


class HomePage extends React.Component {
	render() {
		return (
			<div className="content-main">

				<HomeHeroSlider />

			    <section className="block-02">
			    	<Grid fluid>
						<Row>
							<Col md={6} className="text-center">
								<PageTitle
									title="Сит-энд-гоу" />

								<TournamentInfoBlock />
								<TournamentInfoBlock />
								<TournamentInfoBlock />
			                   
								<div className="info-view-more">
									<a href="#"><i className="flaticon-arrows" aria-hidden="true"></i></a>
								</div>
			               </Col>
			               <Col md={6} className="text-center">
								<PageTitle
									title="Турниры" />
								
								<TournamentInfoBlock />
								<TournamentInfoBlock />
								<TournamentInfoBlock />
			                   
			                   <div className="info-view-more">
			                       <a href="#"><i className="flaticon-arrows" aria-hidden="true"></i></a>
			                   </div>
			               </Col>
				        </Row>
			        </Grid>
			    </section>
	    

		    	<NewsSlider />
	   
			    <FooterInfoBox />

			    <Footer />
		    </div>

		);
	}
}

export default HomePage;
