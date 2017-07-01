import React, { Component } from "react";

import "./style.css";

class NewsArticle extends React.Component {
	render() {
		return (
			<article className="page-news_article">
		        <div className="page-news_article__thumb"></div>
		        <div className="page-news_article__content">
		          <div className="page-news_article__left"><a href="" className="page-news_article__title">{this.props.title}</a>
		            <div className="page-news_article__desc">{this.props.excerpt}</div>
		            <div className="page-news_article__bottom">
		              <div className="page-news_article__date"><i className="fa fa-clock-o"></i><span>{this.props.date}</span></div>
		              <div className="page-news_article__cat"><span>Категория </span><a href="#">{this.props.cat}</a></div>
		            </div>
		          </div>
		          <div className="page-news_article__right"><a href="#" className="page-news_article__btn btn">{this.props.btnText}</a></div>
		        </div>
		    </article>	
		);
	}
}

export default NewsArticle;