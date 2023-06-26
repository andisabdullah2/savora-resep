import React, { Component } from "react";
import './index.css'
import KategoriMakanan from './../assets/image/kategori-makanan.jpeg'
import KategoriMinuman from './../assets/image/kategori-minuman.jpeg'
import KategoriMemasak from './../assets/image/kategori-memasak.webp'
import { Link } from "react-router-dom";

export default class Section1Resep extends Component {
  render() {
    return (
        <div className="body-resep">
            <div className="card-title flex items-center justify-center">
                <div className="title-section">Kategori</div>
            </div>
            <div class="resep-kategori grid grid-cols-3 gap-4 pl-20 pr-20 pt-10 ">
                <div className="resep-card flex items-center justify-center">
                    <img src={KategoriMakanan} alt="" />
                    <Link to="/kategori-makanan"><div className="title-detail">Kategori <br /> Makanan</div></Link>
                </div>
                <div className="resep-card flex items-center justify-center">
                    <img src={KategoriMinuman} alt="" />
                    <div className="title-detail">Kategori <br /> Minuman</div>
                </div>
                <div className="resep-card flex items-center justify-center">
                    <img src={KategoriMemasak} alt="" />
                    <div className="title-detail">Metode <br /> Memasak</div>
                </div>
            </div>
        </div>
    );    
  }
}