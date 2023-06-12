import React, { Component } from "react";
import Slider from "react-slick"
import { Link } from 'react-router-dom';
import './index.css'
import people1 from './../assets/image/people1.jpg'
import makanan1 from './../assets/image/makanan1.jpg'
import start from './../assets/image/star.png'
import clock from './../assets/image/clock.png'
import view from './../assets/image/view.png'
import save from './../assets/image/save.png'

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


export default class Section2Resep extends Component {
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
        <div className="card-title flex items-center justify-center">
            <div className="title-section">
                Rekomendasi Untukmu
            </div>
        </div>
        <h2 className="title mt-10">Resep Hari Ini</h2>
        <br />
        <Slider {...settings}>
          <div className="slide-item-section ">
            <div className="card-makanan drop-shadow-xl ">
              <div class="grid grid-cols-2 gap-4">
                <div class="col-span-2 detail-card-item1 flex items-center">
                    <img src={people1} alt="" />
                    <div style={{ marginLeft: "14px", fontFamily: "Poppins" }}>Aura Amalia</div>
                </div>
                <div class="col-span-2 detail-card-item3">
                  <img src={makanan1} alt="" />
                </div>
                <div class="col-span-2 detail-card-item4 flex items-start">Sawi Gulung Ayam</div>
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
                    <img src={people1} alt="" />
                    <div style={{ marginLeft: "14px", fontFamily: "Poppins" }}>Dian Sahira</div>
                </div>
                <div class="col-span-2 detail-card-item3">
                  <img src={makanan1} alt="" />
                </div>
                <div class="col-span-2 detail-card-item4 flex items-start">Cake Klepon</div>
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
                    <img src={people1} alt="" />
                    <div style={{ marginLeft: "14px", fontFamily:"Poppins" }}>Balqis Divia Putri</div>
                </div>
                <div class="col-span-2 detail-card-item3">
                  <img src={makanan1} alt="" />
                </div>
                <div class="col-span-2 detail-card-item4 flex items-start">Udang Goreng  Gandum</div>
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
                    <img src={people1} alt="" />
                    <div style={{ marginLeft: "14px", fontFamily:"Poppins" }}>Bela Safira</div>
                </div>
                <div class="col-span-2 detail-card-item3">
                  <img src={makanan1} alt="" />
                </div>
                <div class="col-span-2 detail-card-item4 flex items-start"><Link to="/detail">Ayam Bakar madu</Link></div>
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
                    <img src={people1} alt="" />
                    <div style={{ marginLeft: "14px", fontFamily:"Poppins" }}>Bela Safira</div>
                </div>
                <div class="col-span-2 detail-card-item3">
                  <img src={makanan1} alt="" />
                </div>
                <div class="col-span-2 detail-card-item4 flex items-start">Ayam Bakar madu</div>
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
                    <img src={people1} alt="" />
                    <div style={{ marginLeft: "14px", fontFamily:"Poppins" }}>Bela Safira</div>
                </div>
                <div class="col-span-2 detail-card-item3">
                  <img src={makanan1} alt="" />
                </div>
                <div class="col-span-2 detail-card-item4 flex items-start">Ayam Bakar madu</div>
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
                    <img src={people1} alt="" />
                    <div style={{ marginLeft: "14px", fontFamily:"Poppins" }}>Bela Safira</div>
                </div>
                <div class="col-span-2 detail-card-item3">
                  <img src={makanan1} alt="" />
                </div>
                <div class="col-span-2 detail-card-item4 flex items-start">Ayam Bakar madu</div>
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