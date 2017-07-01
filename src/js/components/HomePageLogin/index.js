import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import { BrowserRouter, Route, Link } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import RegForm from "./components/RegForm";

import "./style.css";

class HomePageLogin extends React.Component {
	render() {
		return (
			<section className="block-01">
				<Grid fluid>
					<Row>
						<Col md={9} sm={12} xs={12}>
		                    <div className="site-title">
		                        <div className="main-title">Добро пожаловать в <span>fastbattle!</span></div>
		                        <div className="sub-title">Играй в Heartstone и зарабатывай реальные деньги!</div>
		                    </div>
		                </Col>
		                <Col md={3} sm={12} xs="12" className="no-gutter">
		                    <div className="tabs-regform">
		                        <ul>
		                        	<li>
			                            <Link to="/">Авторизация</Link>
		                        	</li>
		                        	<li>
			                            <Link to="/Register">Регистрация</Link>
		                        	</li>
		                        </ul>
		                        <div>
		                            <BrowserRouter>
										<div>
											<Route exact path="/" component={LoginForm} />
											<Route path="/Register" component={RegForm} />	
										</div>
									</BrowserRouter>
		                            
		                        </div>            
		                    </div> 
		                </Col>  
		            </Row>
		        </Grid>
		    </section>
		);
	}
}

export default HomePageLogin;