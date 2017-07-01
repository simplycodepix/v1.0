import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'

class HeaderUser extends React.Component {
	render() {
		return (
			<div className="page-header_user">
				<NavLink exact to="/">
					<div className="page-user_icon">
						<img src="user-avatar-b.png" alt="icon"/>
					</div>
				</NavLink>
				<div className="page-user_desc">
					<NavLink exact to="/">
						<div className="page-header_user__info"><img src="menu-icon-usd.png" alt="hello"/></div>
						<span>12352</span>
					</NavLink>
					<NavLink exact to="/">
						<div className="page-header_user__info"><img src="menu-icon-bell.png" alt=""/></div>
						<span>999</span>
					</NavLink>
					<NavLink exact to="/" className="page-user_logout">
						<div className="page-header_user__info">
							<img src="menu-icon-logout.png" alt="icon"/>
						</div>
					</NavLink>
				</div>
			</div>
		);
	}
}

export default HeaderUser