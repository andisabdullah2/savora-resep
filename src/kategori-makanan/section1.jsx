import React, { Component } from "react";
import'./index.css';
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import KategoriMakananPembuka from './../assets/image/kategorimakananpembuka.jpg';
import KategoriMakananUtama from './../assets/image/kategorimakananpembuka.jpg';
import KategoriMakananPenutup from './../assets/image/kategorimakananpembuka.jpg';
import KategoriMakananTradisional from './../assets/image/kategorimakananpembuka.jpg';
import KategoriMakananRingan from './../assets/image/kategorimakananpembuka.jpg';
import KategoriMakananKhusus from './../assets/image/kategorimakananpembuka.jpg';
import { Link } from "react-router-dom";


export default class Section1KategoriMakanan extends Component {
    render() {
      return (
        <div>
          <div className="body-resep">
              <div className="card-title flex items-center justify-center">
                  <div className="title-section">
                      Makanan
                  </div>
              </div>
                <div class="resep-kategori grid grid-cols-3 gap-4 pl-20 pr-20 pt-10 ">
                    <div className="resep-card flex items-center justify-center">
                        <img src={KategoriMakananPembuka} alt="" />
                        <div className="title-detail">Makanan <br /> Pembuka</div>
                    </div>
                    <div className="resep-card flex items-center justify-center">
                        <img src={KategoriMakananUtama} alt="" />
                        <div className="title-detail">Makanan <br /> Utama</div>
                    </div>
                    <div className="resep-card flex items-center justify-center">
                        <img src={KategoriMakananPenutup} alt="" />
                        <div className="title-detail">Makanan <br /> Penutup</div>
                    </div>
                    <div className="resep-card flex items-center justify-center">
                        <img src={KategoriMakananTradisional} alt="" />
                        <div className="title-detail">Makanan <br /> Tradisional</div>
                    </div>
                    <div className="resep-card flex items-center justify-center">
                        <img src={KategoriMakananRingan} alt="" />
                        <div className="title-detail">Makanan <br /> Ringan</div>
                    </div>
                    <div className="resep-card flex items-center justify-center">
                        <img src={KategoriMakananKhusus} alt="" />
                        <Link to="/naik-berat-badan"><div className="title-detail">Makanan <br /> Khusus</div></Link>
                    </div>
                </div>
          </div>
          </div>
      );    
    }
  }

  

