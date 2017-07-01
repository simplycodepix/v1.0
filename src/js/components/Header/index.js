import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";

import HeaderUser from './HeaderUser'

import './style.css'

class Header extends Component {
  render() {
    return (
      <header id="header" className="page-header">
        
        <HeaderUser />

        <nav className="page-header_nav">
          <ul className="page-header_nav__list">
            <li>
              <NavLink to="/">
                <div className="page-header_icon">
                  <img src="menu-icon-home.png" alt="icon"/>
                </div>
                <div className="page-header_desc">
                  <span>Главная</span>
                </div>
              </NavLink>
            </li>
            <li><NavLink to="/Tournaments">
                <div className="page-header_icon"><img src="menu-icon-tournaments.png" alt="icon"/></div>
                <div className="page-header_desc"><span>Турниры</span></div>
            </NavLink></li>
            <li><a href="sit-and-go.html">
                <div className="page-header_icon"><img src="menu-icon-sng.png" alt="icon"/></div>
                <div className="page-header_desc"><span>Сит-энд-гоу</span></div></a></li>
            <li><NavLink to="/News">
                <div className="page-header_icon"><img src="menu-icon-news.png" alt="icon"/></div>
                <div className="page-header_desc"><span>Новости</span></div></NavLink></li>
          </ul>
        </nav>
        <div className="page-header_bottom">
          <ul className="page-header_bottom__list">
            <li><a href="#">
                <div className="page-header_icon que"><img src="menu-icon-faq.png" alt="icon"/></div></a></li>
            <li><a href="#">
                <div className="page-header_icon"><img src="menu-icon-lang.png" alt="icon"/></div></a></li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
