import React, { Component } from 'react';

import './style.css'

class InfoRow extends React.Component {
	render() {
		return (
			<div className="panel-box">
				<ul className="panel-box_info__list">
					<li>
						<span>{this.props.usersIn}</span>
						<span>/</span>
						<span>{this.props.usersAll}</span>
					</li>
					<li>
						<span>{this.props.prizePool} </span>
						<span>Euro</span>
					</li>
					<li>
						<span>1 </span>
						<span>Euro</span>
					</li>
					<li>
						<span>{this.props.tournamentName}</span>
					</li>
					<li>
						<a href="" className="panel-box_btn main">{this.props.buttonText}</a>
					</li>
				</ul>
			</div>	
		);
	}
}

export default InfoRow
