import React, { Component } from "react";
import Slider from "react-slick";
import './index.css'
import image1 from './../assets/image/Ellipse7.png'
import image2 from './../assets/image/Ellipse1.png'
import image3 from './../assets/image/Ellipse2.png'
import image4 from './../assets/image/Ellipse3.png'
import image5 from './../assets/image/Ellipse4.png'
import image6 from './../assets/image/Ellipse5.png'
import image7 from './../assets/image/Ellipse6.png'
import arrow from './../assets/icon/arrow-right.svg'


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, top: "-30px", right: "0", zIndex: "1" }}
      onClick={onClick}
    >
      <img src={arrow} alt="" />
    </div>
  );
}
export default class Bahan extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 3,
      centerPadding: "60px",
      initialSlide: 0,
      autoplay: true,
      nextArrow: <SampleNextArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="section0 pl-20 pr-20 pt-10" >
        <h2 className="title">Bahan Makanan</h2>
        <div className="items-center justify-center pt-10">
        <Slider {...settings}>
          <div className="slide-item">
            <img src={image1} alt="" />
            <div className="food-name">Jagung</div>
          </div>
          <div className="slide-item">
            <img src={image2} alt="" />
            <div className="food-name">Ayam</div>
          </div>
          <div className="slide-item">
            <img src={image3} alt="" />
            <div className="food-name">Ikan</div>
          </div>
          <div className="slide-item">
            <img src={image7} alt="" />
            <div className="food-name">Daging</div>
          </div>
          <div className="slide-item">
            <img src={image4} alt="" />
            <div className="food-name">Mie</div>
          </div>
          <div className="slide-item">
            <img src={image5} alt="" />
            <div className="food-name">Tahu</div>
          </div>
          <div className="slide-item">
            <img src={image6} alt="" />
            <div className="food-name">Telur</div>
          </div>
          <div className="slide-item">
            <img src={image4} alt="" />
            <div className="food-name">Mie</div>
          </div>
          <div className="slide-item">
            <img src={image5} alt="" />
            <div className="food-name">Tahu</div>
          </div>
          <div className="slide-item">
            <img src={image6} alt="" />
            <div className="food-name">Telur</div>
          </div>
        </Slider>
      </div>
      </div>
    );    
  }
}