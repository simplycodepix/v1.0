import React, { Component } from "react";

import NewsSlide from "../NewsSlide";

import Carousel from 'nuka-carousel'

class NewsSlider extends React.Component {
	render() {
		return (
			<ul className="newsSlider">

				<Carousel>
					<NewsSlide />
					<NewsSlide />
				</Carousel>
			    

		    </ul>
		);
	}
}

export default NewsSlider;