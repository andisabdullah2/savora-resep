import React, { Component } from "react";
import Slider from "react-slick";
import './index.css'
import people4 from './../assets/image/people4.jpeg'
import people5 from './../assets/image/people5.jpeg'
import people6 from './../assets/image/people6.jpeg'
import makanan4 from './../assets/image/makanan4.jpg'
import makanan5 from './../assets/image/makanan5.jpg'
import makanan6 from './../assets/image/makanan6.jpg'
import start from './../assets/image/star.png'
import clock from './../assets/image/clock.png'
import view from './../assets/image/view.png'
import save from './../assets/image/save.png'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, zIndex: "1" }}
      onClick={onClick}
    >
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
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
      <div className="section1 pl-20 pr-20 pt-10 pb-10" >
        <h2 className="title">Recook Terbaru</h2>
        <br />
        <Slider {...settings}>
          <div className="slide-item-section ">
            <div className="card-makanan drop-shadow-xl ">
              <div class="grid grid-cols-2 gap-4">
                <div class="col-span-2 detail-card-item1 flex items-center">
                    <img src={people4} alt="" />
                    <div style={{ marginLeft: "14px", fontFamily:"Poppins" }}>Vania Fajrina</div>
                </div>
                <div class="col-span-2 detail-card-item3">
                  <img src={makanan4} alt="" />
                </div>
                <div class="col-span-2 detail-card-item4 flex items-start">Ayam Goreng Crispy</div>
                <div class="detail-card-item5 flex items-center">
                    <img src={start} alt="" width={30} height={30}/> &nbsp; &nbsp; (4.8)
                </div>
                <div class="detail-card-item6 flex items-center justify-end">
                    <img src={clock} alt="" width={30} height={30}  /> &nbsp; &nbsp; 25 Menit
                </div>
                <div class="detail-card-item5 flex items-center">
                    <img src={view} alt="" width={30} height={30} /> &nbsp; &nbsp; (65)
                </div>
                <div class="detail-card-item6 flex items-center justify-end">
                    <img src={save} alt="" width={30} height={30} />
                </div>
              </div>
            </div>
          </div>
          <div className="slide-item-section">
            <div className="card-makanan drop-shadow-xl">
            <div class="grid grid-cols-2 gap-4">
                <div class="col-span-2 detail-card-item1 flex items-center">
                    <img src={people5} alt="" />
                    <div style={{ marginLeft: "14px", fontFamily:"Poppins" }}>Zahwa Audina</div>
                </div>
                <div class="col-span-2 detail-card-item3">
                  <img src={makanan5} alt="" />
                </div>
                <div class="col-span-2 detail-card-item4 flex items-start">Pempek Ikan Tenggiri</div>
                <div class="detail-card-item5 flex items-center">
                    <img src={start} alt="" width={30} height={30}/> &nbsp; &nbsp; (4.9)
                </div>
                <div class="detail-card-item6 flex items-center justify-end">
                    <img src={clock} alt="" width={30} height={30}  /> &nbsp; &nbsp; 20 Menit
                </div>
                <div class="detail-card-item5 flex items-center">
                    <img src={view} alt="" width={30} height={30} /> &nbsp; &nbsp; (61)
                </div>
                <div class="detail-card-item6 flex items-center justify-end">
                    <img src={save} alt="" width={30} height={30} />
                </div>
              </div>
            </div>
          </div>
          <div className="slide-item-section">
            <div className="card-makanan drop-shadow-xl">
            <div class="grid grid-cols-2 gap-4">
                <div class="col-span-2 detail-card-item1 flex items-center">
                    <img src={people6} alt="" />
                    <div style={{ marginLeft: "14px", fontFamily:"Poppins" }}>Rika Aulia</div>
                </div>
                <div class="col-span-2 detail-card-item3">
                  <img src={makanan6} alt="" />
                </div>
                <div class="col-span-2 detail-card-item4 flex items-start"> Takoyaki Ala Rumahan</div>
                <div class="detail-card-item5 flex items-center">
                    <img src={start} alt="" width={30} height={30}/> &nbsp; &nbsp; (4.5)
                </div>
                <div class="detail-card-item6 flex items-center justify-end">
                    <img src={clock} alt="" width={30} height={30}  /> &nbsp; &nbsp; 15 Menit
                </div>
                <div class="detail-card-item5 flex items-center">
                    <img src={view} alt="" width={30} height={30} /> &nbsp; &nbsp; (52)
                </div>
                <div class="detail-card-item6 flex items-center justify-end">
                    <img src={save} alt="" width={30} height={30} />
                </div>
              </div>
            </div>
          </div>
          <div className="slide-item-section">
            <div className="card-makanan drop-shadow-xl">
            <div class="grid grid-cols-2 gap-4">
                <div class="col-span-2 detail-card-item1 flex items-center">
                    <img src={people4} alt="" />
                    <div style={{ marginLeft: "14px", fontFamily:"Poppins" }}>Vania Fajrina</div>
                </div>
                <div class="col-span-2 detail-card-item3">
                  <img src={makanan4} alt="" />
                </div>
                <div class="col-span-2 detail-card-item4 flex items-start">Ayam Goreng Crispy</div>
                <div class="detail-card-item5 flex items-center">
                    <img src={start} alt="" width={30} height={30}/> &nbsp; &nbsp; (4.8)
                </div>
                <div class="detail-card-item6 flex items-center justify-end">
                    <img src={clock} alt="" width={30} height={30}  /> &nbsp; &nbsp; 20 Menit
                </div>
                <div class="detail-card-item5 flex items-center">
                    <img src={view} alt="" width={30} height={30} /> &nbsp; &nbsp; (60)
                </div>
                <div class="detail-card-item6 flex items-center justify-end">
                    <img src={save} alt="" width={30} height={30} />
                </div>
              </div>
            </div>
          </div>
          <div className="slide-item-section">
            <div className="card-makanan drop-shadow-xl">
            <div class="grid grid-cols-2 gap-4">
                <div class="col-span-2 detail-card-item1 flex items-center">
                    <img src={people5} alt="" />
                    <div style={{ marginLeft: "14px", fontFamily:"Poppins" }}>Zahwa Audina</div>
                </div>
                <div class="col-span-2 detail-card-item3">
                  <img src={makanan5} alt="" />
                </div>
                <div class="col-span-2 detail-card-item4 flex items-start">Pempek Ikan Tenggiri</div>
                <div class="detail-card-item5 flex items-center">
                    <img src={start} alt="" width={30} height={30}/> &nbsp; &nbsp; (4.8)
                </div>
                <div class="detail-card-item6 flex items-center justify-end">
                    <img src={clock} alt="" width={30} height={30}  /> &nbsp; &nbsp; 20 Menit
                </div>
                <div class="detail-card-item5 flex items-center">
                    <img src={view} alt="" width={30} height={30} /> &nbsp; &nbsp; (60)
                </div>
                <div class="detail-card-item6 flex items-center justify-end">
                    <img src={save} alt="" width={30} height={30} />
                </div>
              </div>
            </div>
          </div>
          <div className="slide-item-section">
            <div className="card-makanan drop-shadow-xl">
            <div class="grid grid-cols-2 gap-4">
                <div class="col-span-2 detail-card-item1 flex items-center">
                    <img src={people6} alt="" />
                    <div style={{ marginLeft: "14px", fontFamily:"Poppins" }}>Rika Aulia</div>
                </div>
                <div class="col-span-2 detail-card-item3">
                  <img src={makanan6} alt="" />
                </div>
                <div class="col-span-2 detail-card-item4 flex items-start">Takoyaki Ala Rumahan</div>
                <div class="detail-card-item5 flex items-center">
                    <img src={start} alt="" width={30} height={30}/> &nbsp; &nbsp; (4.8)
                </div>
                <div class="detail-card-item6 flex items-center justify-end">
                    <img src={clock} alt="" width={30} height={30}  /> &nbsp; &nbsp; 20 Menit
                </div>
                <div class="detail-card-item5 flex items-center">
                    <img src={view} alt="" width={30} height={30} /> &nbsp; &nbsp; (60)
                </div>
                <div class="detail-card-item6 flex items-center justify-end">
                    <img src={save} alt="" width={30} height={30} />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );    
  }
}