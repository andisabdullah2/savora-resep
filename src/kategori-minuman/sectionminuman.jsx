import React, { Component } from "react";
import'./index.css';
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import panas from './../assets/image/panas.jpg';
import dingin from './../assets/image/dingin.jpg';
import tradisional from './../assets/image/tradisional.jpg';
import khusus from './../assets/image/khusus.jpg';
export default class SectionMinuman extends Component {
    render() {
      return (
        <div> <Navbar /> 
          <div className="body-resep">
              <div className="card-title flex items-center justify-center">
                  <div className="title-section">
                      Kategori Minuman
                  </div>
              </div>
              <div class="grid grid-cols-2 gap-4 pl-25 pr-30 pt-20 ">
                  <div className="minuman-card flex items-center justify-center">
                      <img src={panas} alt="" />
                      <div className="title-detail">Minuman Panas <br /> 
                      </div>
                  </div>
                  <div className="minuman-card flex items-center justify-center">
                      <img src={dingin} alt="" />
                      <div className="title-detail">Minuman
                       Dingin <br /></div>
                  </div>
                  <div className="minuman-card flex items-center justify-center">
                      <img src={tradisional} alt="" />
                      <div className="title-detail"> Minuman Tradisonal <br /></div>
                  </div>
                  <div className="minuman-card flex items-center justify-center">
                      <img src={khusus} alt="" />
                      <div className="title-detail">Minuman Khusus <br /></div>
                  </div>
              </div>
          </div>
          <Footer /> 
          </div>
      );    
    }
  }

  

