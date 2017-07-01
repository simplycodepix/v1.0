import React, { Component } from 'react';
import { Grid } from "react-bootstrap";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FooterInfoBox from "../../components/FooterInfoBox";
import PageTitle from "../../components/PageTitle";
import InfoRow from "../../components/Tournaments/InfoRow";
import PanelHead from "../../components/Tournaments/PanelHead";
import ServerPick from "../../components/Tournaments/ServerPick";
import HeroSection from "../../components/Tournaments/HeroSection";

import styled from "styled-components";
import "./style.css";

const Content = styled.div `
	width: 100%;
	-webkit-box-flex: 1;
	-ms-flex: 1;
	flex: 1;
	margin-left: 90px;
	overflow-x: hidden;
`;


class Tournaments extends React.Component {
	render() {
		return (
			<div>

				<HeroSection />

				<div className="page-sit_content">

					<PageTitle
						title="Турниры" />

					<div className="page-sit_content__panel">
						<Grid fluid>
							<div className="page-sit_panel">

								<ServerPick />

								<div className="page-sit_panel__content">

									<PanelHead />

									<div className="panel-info_boxes">

										<InfoRow 
											usersIn="5"
											usersAll="250"
											prizePool="50"
											tournamentName="HsTournament#1"
											buttonText="Чек-Ин" />
										
										<InfoRow 
											usersIn="25"
											usersAll="25"
											prizePool="100"
											tournamentName="HsTournament#2"
											buttonText="Чек-Ин" />
										<InfoRow 
											usersIn="5"
											usersAll="25"
											prizePool="5"
											tournamentName="HsTournament#3"
											buttonText="Чек-Ин" />
										<InfoRow 
											usersIn="5"
											usersAll="250"
											prizePool="50"
											tournamentName="HsTournament#1"
											buttonText="Чек-Ин" />
										<InfoRow 
											usersIn="5"
											usersAll="250"
											prizePool="50"
											tournamentName="HsTournament#1"
											buttonText="Чек-Ин" />
										<InfoRow 
											usersIn="5"
											usersAll="250"
											prizePool="50"
											tournamentName="HsTournament#1"
											buttonText="Чек-Ин" />

									</div>
								</div>
							</div>

							<div className="info-view-more">
								<a href="">
									<i aria-hidden="true" className="flaticon-arrows"></i>
								</a>
							</div>
						</Grid>
					</div>
				</div>

				<FooterInfoBox />

				<Footer />
			</div>
		);
	}
}

export default Tournaments;
