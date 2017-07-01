import React, { Component } from 'react';
import { Grid, Row, Col } from "react-bootstrap";

import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import NewsArticle from "../../components/NewsArticle";
import NewsHero from "../../components/NewsHero";
import TournamentInfoBlock from "../../components/TournamentInfoBlock";

import Footer from "../../components/Footer";
import FooterInfoBox from "../../components/FooterInfoBox";

import "./style.css";


class News extends React.Component {
	render() {
		return (
			<div>		
				<NewsHero />

				<section className="page-news_content">
				  <div className="container-fluid">
				    <nav className="page-news_nav">
				      <ul className="page-news_nav__list">
				        <li className="page-news_nav__title">Новости:</li>
				        <li><a href="#">Новости Heartstone</a></li>
				        <li><a href="#">Новости сайта</a></li>
				        <li><a href="#">Колоды</a></li>
				      </ul>
				    </nav>
				    <div className="page-news_articles">
				      
				    	<NewsArticle
				    		title="Патч 3.2.7"
				    		excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, cum."
				    		btnText="Подробнее"
				    		cat="статьи"
				    		date="6 июня 2017" />
				    	<NewsArticle
				    		title="Освобождаем кабинки"
				    		excerpt="Illo dolorum hic consequatur consectetur similique veritatis autem dolore quas voluptas doloremque aliquid? Soluta, magnam dignissimos. ipsum dolor sit amet, consectetur adipisicing elit. Eaque, cum."
				    		btnText="Подробнее"
				    		cat="веселье"
				    		date="27 июня 2017" />
				    	<NewsArticle
				    		title="Патч 4.2.7"
				    		excerpt="Lorem ipsum dolor sit amet. ipsum dolor sit amet, consectetur adipisicing elit. Eaque, cum."
				    		btnText="Подробнее"
				    		cat="статьи"
				    		date="6 июня 2017" />
				    	<NewsArticle
				    		title="Патч 3.5.7"
				    		excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, maiores. ipsum dolor sit amet, consectetur adipisicing elit. Eaque, cum."
				    		btnText="Подробнее"
				    		cat="статьи"
				    		date="6 июня 2017" />


				    </div>
				    <div className="info-view-more"><a href=""><i aria-hidden="true" className="flaticon-arrows"></i></a></div>
				  </div>
				</section>
			
				<Footer />

			</div>

		);
	}
}

export default News;
