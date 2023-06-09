import React, { Component } from "react";
import Slider from "react-slick";
import './index.css'
import people1 from './../assets/image/people1.jpeg'
import makanan1 from './../assets/image/makanan1.jpg'
import start from './../assets/image/star.png'
import clock from './../assets/image/clock.png'
import view from './../assets/image/view.png'
import save from './../assets/image/save.png'
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


export default class Section2 extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      autoplay: false,
      nextArrow: <SampleNextArrow />,
      overflow:false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
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
      <div className="section3 pl-20 pr-20 pt-10 pb-10" >
        <h2 className="title">Recook Terbaru</h2>
        <br />
        <Slider {...settings}>
            <div className="slide-item-section ">
              <div className="card-tips drop-shadow-xl ">
                <div class="grid grid-cols-2 gap-4">
                  <div class="col-span-2 detail-card-tips1">
                    <img src={makanan1} alt="" />
                  </div>
                  <div class="col-span-2 detail-card-tips2 flex items-start text-justify">3 Cara Mudah Goreng Kacang Mete agar Gurih, Renyah, dan Tidak Pahit</div>
                </div>
              </div>
            </div>
            <div className="slide-item-section ">
              <div className="card-tips drop-shadow-xl ">
                <div class="grid grid-cols-2 gap-4">
                  <div class="col-span-2 detail-card-tips1">
                    <img src={makanan1} alt="" />
                  </div>
                  <div class="col-span-2 detail-card-tips2 flex items-start text-justify">3 Cara Mudah Goreng Kacang Mete agar Gurih, Renyah, dan Tidak Pahit</div>
                </div>
              </div>
            </div>
            <div className="slide-item-section ">
              <div className="card-tips drop-shadow-xl ">
                <div class="grid grid-cols-2 gap-4">
                  <div class="col-span-2 detail-card-tips1">
                    <img src={makanan1} alt="" />
                  </div>
                  <div class="col-span-2 detail-card-tips2 flex items-start text-justify">3 Cara Mudah Goreng Kacang Mete agar Gurih, Renyah, dan Tidak Pahit</div>
                </div>
              </div>
            </div>
            <div className="slide-item-section ">
              <div className="card-tips drop-shadow-xl ">
                <div class="grid grid-cols-2 gap-4">
                  <div class="col-span-2 detail-card-tips1">
                    <img src={makanan1} alt="" />
                  </div>
                  <div class="col-span-2 detail-card-tips2 flex items-start text-justify">3 Cara Mudah Goreng Kacang Mete agar Gurih, Renyah, dan Tidak Pahit</div>
                </div>
              </div>
            </div>
            <div className="slide-item-section ">
              <div className="card-tips drop-shadow-xl ">
                <div class="grid grid-cols-2 gap-4">
                  <div class="col-span-2 detail-card-tips1">
                    <img src={makanan1} alt="" />
                  </div>
                  <div class="col-span-2 detail-card-tips2 flex items-start text-justify">3 Cara Mudah Goreng Kacang Mete agar Gurih, Renyah, dan Tidak Pahit</div>
                </div>
              </div>
            </div>
        </Slider>
      </div>
    );    
  }
}

