import React, { Component } from "react";
import "./style.css";

class ServerPick extends React.Component {
	render() {
		return (
			<div className="page-sit_panel__nav">
	          <ul className="panel-list">
	            <li className="nav-title">Выбор сервера:</li>
	            <li><a href="">Europe</a></li>
	            <li><a href="">Usa</a></li>
	            <li><a href="">Asia</a></li>
	            <li><a href="">China</a></li>
	          </ul>
	        </div>	
		);
	}
}

export default ServerPick;