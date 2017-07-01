import React, { Component } from "react";

class RegForm extends React.Component {
	render () {
		return (
			<div className="login-form">
                <form>
                    <div className="email-bef">
                    	<input type="email" name="email" placeholder="Email" className="email" />
                    </div>
                    <div className="pass-bef">
                    	<input type="password" name="password" placeholder="Password" className="pass"/>
                    </div>
                    <input className="yellow-btn lf-btn" type="submit" name="enter" value="Войти" />
                </form>
                <a href="#">Забыли пароль?</a>
            </div>
		);
	}
}

export default RegForm;