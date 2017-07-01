import React, { Component } from "react";
import "./style.css";


class PageTitle extends React.Component {
	render() {
		return (
			
			<div className="tournaments-title-block">
				<div className="tournaments-title stg-icon">{this.props.title}</div>
			</div>

		);
	}
}

export default PageTitle