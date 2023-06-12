import React, { Component } from "react";
import Slider from "react-slick";
import './index.css'
import tips1 from './../assets/image/tips1.jpg'
import tips2 from './../assets/image/tips2.jpg'
import tips3 from './../assets/image/tips3.jpg'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, top: "-30px", right: "0", zIndex: "1" }}
      onClick={onClick}
    >
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
      <div className="section3 pl-20 pr-20 pt-0 pb-10" >
        <h2 className="title">Tips Terbaru</h2>
        <br />
        <Slider {...settings}>
            <div className="slide-item-section ">
              <div className="card-tips drop-shadow-xl ">
                <div class="grid grid-cols-2 gap-4">
                  <div class="col-span-2 detail-card-tips1">
                    <img src={tips1} alt="" />
                  </div>
                  <div class="col-span-2 detail-card-tips2 flex items-start text-justify">3 Cara Mudah Goreng Kacang Mete agar Gurih, Renyah, dan Tidak Pahit</div>
                </div>
              </div>
            </div>
            <div className="slide-item-section ">
              <div className="card-tips drop-shadow-xl ">
                <div class="grid grid-cols-2 gap-4">
                  <div class="col-span-2 detail-card-tips1">
                    <img src={tips2} alt="" />
                  </div>
                  <div class="col-span-2 detail-card-tips2 flex items-start text-justify">10 Buah yang Tidak Boleh Masuk Kulkas, Kamu Wajib Tahu</div>
                </div>
              </div>
            </div>
            <div className="slide-item-section ">
              <div className="card-tips drop-shadow-xl ">
                <div class="grid grid-cols-2 gap-4">
                  <div class="col-span-2 detail-card-tips1">
                    <img src={tips3} alt="" />
                  </div>
                  <div class="col-span-2 detail-card-tips2 flex items-start text-justify">Takaran Air Memasak Nasi Pulen Ada Beberapa Metode, Lho! Yuk Simak!</div>
                </div>
              </div>
            </div>
            <div className="slide-item-section ">
              <div className="card-tips drop-shadow-xl ">
                <div class="grid grid-cols-2 gap-4">
                  <div class="col-span-2 detail-card-tips1">
                    <img src={tips1} alt="" />
                  </div>
                  <div class="col-span-2 detail-card-tips2 flex items-start text-justify">3 Cara Mudah Goreng Kacang Mete agar Gurih, Renyah, dan Tidak Pahit</div>
                </div>
              </div>
            </div>
            <div className="slide-item-section ">
              <div className="card-tips drop-shadow-xl ">
                <div class="grid grid-cols-2 gap-4">
                  <div class="col-span-2 detail-card-tips1">
                    <img src={tips1} alt="" />
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

