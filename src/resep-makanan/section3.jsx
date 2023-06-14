import React, { Component } from "react";
import Slider from "react-slick";
import './index.css'
import people10 from './../assets/image/people10.jpeg'
import people11 from './../assets/image/people11.jpeg'
import people12 from './../assets/image/people12.jpeg'
import makanan10 from './../assets/image/makanan10.jpg'
import makanan11 from './../assets/image/makanan11.jpg'
import makanan12 from './../assets/image/makanan12.jpg'
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


export default class Section3Resep extends Component {
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
      <div className="section1 pl-20 pr-20 pt-20" >
        <h2 className="title mt-10">Resep Populer</h2>
        <br />
        <Slider {...settings}>
          <div className="slide-item-section ">
            <div className="card-makanan drop-shadow-xl ">
              <div class="grid grid-cols-2 gap-4">
                <div class="col-span-2 detail-card-item1 flex items-center">
                    <img src={people10} alt="" />
                    <div style={{ marginLeft: "14px" }}>Endricko Cahyo</div>
                </div>
                <div class="col-span-2 detail-card-item3">
                  <img src={makanan10} alt="" />
                </div>
                <div class="col-span-2 detail-card-item4 flex items-start">Nasi Goreng Seafood</div>
                <div class="detail-card-item5 flex items-center">
                    <img src={start} alt="" width={30} height={30}/> &nbsp; &nbsp; (4.5)
                </div>
                <div class="detail-card-item6 flex items-center justify-end">
                    <img src={clock} alt="" width={30} height={30}  /> &nbsp; &nbsp; 20 Menit
                </div>
                <div class="detail-card-item5 flex items-center">
                    <img src={view} alt="" width={30} height={30} /> &nbsp; &nbsp; (57)
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
                    <img src={people11} alt="" />
                    <div style={{ marginLeft: "14px" }}>Listina Ayu</div>
                </div>
                <div class="col-span-2 detail-card-item3">
                  <img src={makanan11} alt="" />
                </div>
                <div class="col-span-2 detail-card-item4 flex items-start">Oseng Bakso Mercon</div>
                <div class="detail-card-item5 flex items-center">
                    <img src={start} alt="" width={30} height={30}/> &nbsp; &nbsp; (3.9)
                </div>
                <div class="detail-card-item6 flex items-center justify-end">
                    <img src={clock} alt="" width={30} height={30}  /> &nbsp; &nbsp; 25 Menit
                </div>
                <div class="detail-card-item5 flex items-center">
                    <img src={view} alt="" width={30} height={30} /> &nbsp; &nbsp; (38)
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
                    <img src={people12} alt="" />
                    <div style={{ marginLeft: "14px" }}>Dewi Kartika</div>
                </div>
                <div class="col-span-2 detail-card-item3">
                  <img src={makanan12} alt="" />
                </div>
                <div class="col-span-2 detail-card-item4 flex items-start">Waffle Ice Cream</div>
                <div class="detail-card-item5 flex items-center">
                    <img src={start} alt="" width={30} height={30}/> &nbsp; &nbsp; (4.0)
                </div>
                <div class="detail-card-item6 flex items-center justify-end">
                    <img src={clock} alt="" width={30} height={30}  /> &nbsp; &nbsp; 15 Menit
                </div>
                <div class="detail-card-item5 flex items-center">
                    <img src={view} alt="" width={30} height={30} /> &nbsp; &nbsp; (55)
                </div>
                <div class="detail-card-item6 flex items-center justify-end">
                    <img src={save} alt="" width={30} height={30} />
                </div>
              </div>
            </div>
          </div>
          <div className="slide-item-section ">
            <div className="card-makanan drop-shadow-xl ">
              <div class="grid grid-cols-2 gap-4">
                <div class="col-span-2 detail-card-item1 flex items-center">
                    <img src={people10} alt="" />
                    <div style={{ marginLeft: "14px" }}>Endricko Cahyo</div>
                </div>
                <div class="col-span-2 detail-card-item3">
                  <img src={makanan10} alt="" />
                </div>
                <div class="col-span-2 detail-card-item4 flex items-start">Nasi Goreng Seafood</div>
                <div class="detail-card-item5 flex items-center">
                    <img src={start} alt="" width={30} height={30}/> &nbsp; &nbsp; (4.5)
                </div>
                <div class="detail-card-item6 flex items-center justify-end">
                    <img src={clock} alt="" width={30} height={30}  /> &nbsp; &nbsp; 20 Menit
                </div>
                <div class="detail-card-item5 flex items-center">
                    <img src={view} alt="" width={30} height={30} /> &nbsp; &nbsp; (57)
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
                    <img src={people11} alt="" />
                    <div style={{ marginLeft: "14px" }}>Listina Ayu</div>
                </div>
                <div class="col-span-2 detail-card-item3">
                  <img src={makanan11} alt="" />
                </div>
                <div class="col-span-2 detail-card-item4 flex items-start">Oseng Bakso Mercon</div>
                <div class="detail-card-item5 flex items-center">
                    <img src={start} alt="" width={30} height={30}/> &nbsp; &nbsp; (3.9)
                </div>
                <div class="detail-card-item6 flex items-center justify-end">
                    <img src={clock} alt="" width={30} height={30}  /> &nbsp; &nbsp; 25 Menit
                </div>
                <div class="detail-card-item5 flex items-center">
                    <img src={view} alt="" width={30} height={30} /> &nbsp; &nbsp; (38)
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
                    <img src={people12} alt="" />
                    <div style={{ marginLeft: "14px" }}>Dewi Kartika</div>
                </div>
                <div class="col-span-2 detail-card-item3">
                  <img src={makanan12} alt="" />
                </div>
                <div class="col-span-2 detail-card-item4 flex items-start">Waffle Ice Cream</div>
                <div class="detail-card-item5 flex items-center">
                    <img src={start} alt="" width={30} height={30}/> &nbsp; &nbsp; (4.0)
                </div>
                <div class="detail-card-item6 flex items-center justify-end">
                    <img src={clock} alt="" width={30} height={30}  /> &nbsp; &nbsp; 15 Menit
                </div>
                <div class="detail-card-item5 flex items-center">
                    <img src={view} alt="" width={30} height={30} /> &nbsp; &nbsp; (55)
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