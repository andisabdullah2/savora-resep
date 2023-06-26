import React, { Component } from "react";
import Slider from "react-slick";
import './index.css'
import people1 from './../assets/image/people1.jpeg'
import people2 from './../assets/image/people2.jpeg'
import people3 from './../assets/image/people3.jpeg'
import makanan1 from './../assets/image/lumpia.jpg'
import makanan2 from './../assets/image/makanan2.jpg'
import makanan3 from './../assets/image/makanan3.jpg'
import makanan4 from './../assets/image/makanan1.jpg'
import start from './../assets/image/star.png'
import clock from './../assets/image/clock.png'
import view from './../assets/image/view.png'
import save from './../assets/image/save.png'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Logo from "./../../src/assets/image/zyro-image.png";
import Android from "./../../src/assets/image/andro.png";

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
export default class Section1 extends Component {

  state = {
    showModal: false
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  };
  closeModal = () => {
    this.setState({ showModal: false });
  };

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
      <div className="section1 pl-20 pr-20 pt-20 pb-20" >
        <h2 className="title">Resep Hari Ini</h2>
        <br />
        <Slider {...settings}>
          <div className="slide-item-section ">
            <div className="card-makanan drop-shadow-xl ">
              <div class="grid grid-cols-2 gap-4">
                <div class="col-span-2 detail-card-item1 flex items-center">
                    <img src={people1} alt="" />
                    <div style={{ marginLeft: "14px" }}>Nurul Asyifah</div>
                </div>
                <div class="col-span-2 detail-card-item3">
                  <img src={makanan1} alt="" />
                </div>
                <div class="col-span-2 detail-card-item4 flex items-start">
                  <Link to="/detail" onMouseEnter={() => setActivePage("resep-makanan")} onMouseLeave={() => setActivePage("")}>
                    Lumpia Crispy
                  </Link></div>
                <div class="detail-card-item5 flex items-center" >
                    <img src={start} alt="" width={30} height={30}/> &nbsp; &nbsp; (4.8)
                </div>
                <div class="detail-card-item6 flex items-center justify-end" >
                    <img src={clock} alt="" width={30} height={30}  /> &nbsp; &nbsp; 20 Menit
                </div>
                <div class="detail-card-item5 flex items-center" >
                    <img src={view} alt="" width={30} height={30} /> &nbsp; &nbsp; (60)
                </div>
                <div class="detail-card-item6 flex items-center justify-end">
                <img src={save} alt="" width={30} height={30} onClick={this.toggleModal} />
                </div>
              </div>
            </div>
          </div>
          <div className="slide-item-section">
            <div className="card-makanan drop-shadow-xl">
            <div class="grid grid-cols-2 gap-4">
                <div class="col-span-2 detail-card-item1 flex items-center">
                    <img src={people2} alt="" />
                    <div style={{ marginLeft: "14px", fontFamily:"Poppins" }}>Diana Fariza</div>
                </div>
                <div class="col-span-2 detail-card-item3">
                  <img src={makanan2} alt="" />
                </div>
                <div class="col-span-2 detail-card-item4 flex items-start">
                  <Link to="/detail2" onMouseEnter={() => setActivePage("resep-makanan")} onMouseLeave={() => setActivePage("")}>
                    Nagiri Sushi
                  </Link></div>
                <div class="detail-card-item5 flex items-center" >
                    <img src={start} alt="" width={30} height={30}/> &nbsp; &nbsp; (4.7)
                </div>
                <div class="detail-card-item6 flex items-center justify-end">
                    <img src={clock} alt="" width={30} height={30}  /> &nbsp; &nbsp; 20 Menit
                </div>
                <div class="detail-card-item5 flex items-center">
                    <img src={view} alt="" width={30} height={30} /> &nbsp; &nbsp; (53)
                </div>
                <div class="detail-card-item6 flex items-center justify-end">
                    <img src={save} alt="" width={30} height={30} onClick={this.toggleModal} />
                </div>
              </div>
            </div>
          </div>
          <div className="slide-item-section">
            <div className="card-makanan drop-shadow-xl">
            <div class="grid grid-cols-2 gap-4">
                <div class="col-span-2 detail-card-item1 flex items-center">
                    <img src={people3} alt="" />
                    <div style={{ marginLeft: "14px", fontFamily:"Poppins" }}>Fatimah</div>
                </div>
                <div class="col-span-2 detail-card-item3">
                  <img src={makanan3} alt="" />
                </div>
                <div class="col-span-2 detail-card-item4 flex items-start">
                  <Link to="/detail3" onMouseEnter={() => setActivePage("resep-makanan")} onMouseLeave={() => setActivePage("")}>
                    Serabi
                  </Link></div>
                <div class="detail-card-item5 flex items-center" >
                    <img src={start} alt="" width={30} height={30}/> &nbsp; &nbsp; (4.8)
                </div>
                <div class="detail-card-item6 flex items-center justify-end" >
                    <img src={clock} alt="" width={30} height={30}  /> &nbsp; &nbsp; 10 Menit
                </div>
                <div class="detail-card-item5 flex items-center" >
                    <img src={view} alt="" width={30} height={30} /> &nbsp; &nbsp; (57)
                </div>
                <div class="detail-card-item6 flex items-center justify-end">
                    <img src={save} alt="" width={30} height={30} onClick={this.toggleModal} />
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
                  <img src={makanan4} alt="" />
                </div>
                <div class="col-span-2 detail-card-item4 flex items-start">
                  <Link to="/detail4" onMouseEnter={() => setActivePage("resep-makanan")} onMouseLeave={() => setActivePage("")}>
                    Ayam Bakar Madu
                  </Link></div>
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
                    <img src={save} alt="" width={30} height={30} onClick={this.toggleModal} />
                </div>
              </div>
            </div>
          </div>
        </Slider>
        {this.state.showModal && (
          <div className="modal">
            <div className="modal-content">
              <div class="flex items-center justify-end">
                <div className="close-button">
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="close-icon"
                    onClick={this.closeModal}
                  />
                </div>
              </div>
              <div class="flex items-center justify-start">
                <img src={Logo} alt="" width={70} height={70}/>
              </div>
              
              <div class="flex items-center justify-center">
                <img src={Android} alt="" width={301} height={302}/>
              </div>
              <div class="flex items-center justify-center">
                <b style={{ color: 'white' }}>Menyimpan Resep tanpa Batas</b><br />
              </div>
              <div class="flex items-center justify-center">
                <b style={{ color: 'white' }}>melalui Aplikasi Savoricious, unduh yuk!</b><br />
              </div>
              <br />
              <div class="buttonunduh flex items-center justify-center" >
                <button className="unduh"><b style={{ color: 'white' }}>Unduh</b></button>
              </div>
              {/* Add more content as needed */}
            </div>
          </div>
        )}
      </div>
    );    
  }
}