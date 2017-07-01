import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import "./style.css"

class FooterInfoBox extends React.Component {
	render() {
		return (
			<section className="block-04">
			    <Grid fluid>
			    	<Row className="ovrflw">
			            <Col md={6} sm={12} xs={12} >
			                <div className="info-block">
			                    <div className="info-img">
			                        <img src="user-icon.png" />
			                    </div>
			                    <div className="info-text">
			                        <ul>
			                            <li>Информация для игроков</li>
			                            <li>Lorem ipsum dolor sit amet.</li>
			                        </ul>
			                    </div>
			                    <div className="info-button">
			                        <a className="yellow-btn info-btn" href="#">Читать <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
			                    </div>
			                </div>
			            </Col>
			            <Col md={6} sm={12} xs={12} >
			                <div className="info-block">
			                    <div className="info-img">
			                        <img src="sponsor-icon.png" />
			                    </div>
			                    <div className="info-text">
			                        <ul>
			                            <li>Информация для спонсоров</li>
			                            <li>Lorem ipsum dolor sit amet.</li>
			                        </ul>
			                    </div>
			                    <div className="info-button">
			                        <a className="yellow-btn info-btn" href="#">Читать <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
			                    </div>
			                </div>
			            </Col>
			        </Row>
			    	<Row className="ovrflw">
			            <div className="col-md-12">
			                <div className="info-block last-info-block">
			                    <div className="info-img">
			                        <img src="sword-icon.png" />
			                    </div>
			                    <div className="info-text">
			                        <ul>
			                            <li>А ты готов сразиться?</li>
			                            <li>Lorem ipsum dolor sit amet.</li>
			                        </ul>
			                    </div>
			                    <div className="info-button">
			                        <a className="yellow-btn info-btn accept-btn" href="#">Присоедениться</a>
			                    </div>
			                </div>
			            </div>
			        </Row>
			    </Grid>
			</section>
		);
	}
}

export default FooterInfoBox