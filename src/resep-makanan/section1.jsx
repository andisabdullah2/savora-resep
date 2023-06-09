import React, { Component } from "react";
import Slider from "react-slick";
import './index.css'
import KategoriMakanan from './../assets/image/kategori-makanan.jpeg'
import KategoriMinuman from './../assets/image/kategori-minuman.jpeg'
import KategoriMemasak from './../assets/image/kategori-memasak.webp'
import people1 from './../assets/image/people1.jpeg'
import makanan1 from './../assets/image/makanan1.jpg'
import start from './../assets/image/star.png'
import clock from './../assets/image/clock.png'
import view from './../assets/image/view.png'
import save from './../assets/image/save.png'
import arrow from './../assets/icon/arrow-right.svg'


export default class Section1Resep extends Component {
  render() {
    return (
        <div className="body-resep">
            <div className="card-title flex items-center justify-center">
                <div className="title-section">
                    Kategori
                </div>
            </div>
            <div class="grid grid-cols-3 gap-4 pl-20 pr-20 pt-10 ">
                <div className="resep-card flex items-center justify-center">
                    <img src={KategoriMakanan} alt="" />
                    <div className="title-detail">Kategori <br /> Makanan</div>
                </div>
                <div className="resep-card flex items-center justify-center">
                    <img src={KategoriMinuman} alt="" />
                    <div className="title-detail">Kategori <br /> Minuman</div>
                </div>
                <div className="resep-card flex items-center justify-center">
                    <img src={KategoriMemasak} alt="" />
                    <div className="title-detail">Kategori <br /> Memasak</div>
                </div>
            </div>
        </div>
    );    
  }
}