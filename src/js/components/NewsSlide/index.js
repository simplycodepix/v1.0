import React, { Component } from "react";
import { Grid, Col, Row} from "react-bootstrap";

import "./style.css";

class NewsSlide extends React.Component {
	render() {
		return (
			<li>
			    <section className="block-03">
					<Grid fluid>
						<Row>    
							<Col md={12}>
	                            <div className="news-block-title">
	                                Новости дня
	                            </div>
	                            <div className="line-news"></div>
	                            <div className="news-titles">
	                                <ul>
	                                    <li>1. не обижайТЕ венгу;</li>
	                                    <li>2. невоспитанный урса;</li>
	                                    <li>3. вирусный тар M@xXXisA</li>
	                                </ul>
	                            </div>
	                            <div className="line-news"></div>
	                        </Col>
	                    </Row>
	                    <Row>
	                    	<Col md={12}>
	                            <div className="tooday-offers-alert">
	                                <div className="alert-text"><span>Только сегодня</span> 3 супер акции!</div>
	                            </div>
	                        </Col>
	                    </Row>
			        </Grid>
			    </section>
		    </li>
		);
	}
}

export default NewsSlide