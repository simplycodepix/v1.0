import React, { Component } from "react";
import { Grid, Row } from "react-bootstrap";

import "./style.css"

class Footer extends React.Component {
	render() {
		return (
			<footer>
				<Grid>
					<Row>
				      <div className="col-md-12 text-center">
				        <div className="footer-nav">
				          <ul>
				            <li><a href="#">Контакты</a></li>
				            <li><a href="#">Безопасность</a></li>
				            <li><a href="#">Условия эксплуатации</a></li>
				            <li><a href="#">Политика конфиденциальности</a></li>
				            <li><a href="#">Регистрационные данные</a></li>
				          </ul>
				        </div>
				        <div className="copyright">Copyright © 2017 FastBattle.com</div>
				      </div>
					</Row>
				</Grid>
			</footer>
		);
	}
}

export default Footer;