import React, { Component } from "react";
import Slider from "react-slick";
import slide_image_1 from './../assets/image/slide1.jpeg';
import slide_image_2 from './../assets/image/slide2.jpeg';
import slide_image_3 from './../assets/image/slide3.jpeg';
import './index.css'


export default class Carou extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };
    return (
        <div className="items-center justify-center pt-10 pl-20 pr-20">
        <h2>Center Mode</h2>
        <Slider {...settings}>
          <div className="carou">
            <img src={slide_image_1} alt="slide_image"  height="200" />
          </div>
          <div className="carou">
          <img src={slide_image_2} alt="slide_image"  height="200" />
          </div>
          <div className="carou">
          <img src={slide_image_3} alt="slide_image"  height="200" />
          </div>
          <div className="carou">
          <img src={slide_image_1} alt="slide_image"  height="200" />
          </div>
          <div className="carou">
          <img src={slide_image_1} alt="slide_image"  height="200" />
          </div>
          <div className="carou">
          <img src={slide_image_1} alt="slide_image"  height="200" />
          </div>
        </Slider>
      </div>
    );
  }
}