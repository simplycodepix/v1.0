import React, { Component } from "react";
import "./style.css";

class PanelHead extends React.Component {
	render() {
		return (
			<div className="panel-titles">
	            <div className="panel-title">Начало Чек/Ин</div>
	            <div className="panel-title">Участники</div>
	            <div className="panel-title">Призовой Пул</div>
	            <div className="panel-title">Название</div>
	            <div className="panel-title">Статус</div>
	          </div>	
		);
	}
}

export default PanelHead